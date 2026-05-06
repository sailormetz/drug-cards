(function () {
  if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) {
    console.error('[auth] Missing window.SUPABASE_URL / SUPABASE_ANON_KEY');
    return;
  }
  if (!window.supabase || typeof window.supabase.createClient !== 'function') {
    console.error('[auth] Supabase JS client not loaded');
    return;
  }

  var client = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);

  var state = {
    user: null,
    session: null,
    hasPaid: false,
    ready: false,
  };

  var listeners = [];
  function emit() { listeners.forEach(function (fn) { try { fn(state); } catch (_) {} }); }

  async function fetchEntitlement() {
    if (!state.user) { state.hasPaid = false; return; }
    var resp = await client
      .from('entitlements')
      .select('has_paid')
      .eq('user_id', state.user.id)
      .maybeSingle();
    state.hasPaid = !!(resp.data && resp.data.has_paid);
  }

  async function refresh() {
    var sessionResp = await client.auth.getSession();
    state.session = sessionResp.data.session || null;
    state.user = state.session ? state.session.user : null;
    await fetchEntitlement();
    state.ready = true;
    renderGate();
    emit();
  }

  async function signIn(email) {
    var redirectTo = window.location.origin + window.location.pathname;
    return client.auth.signInWithOtp({
      email: email,
      options: { emailRedirectTo: redirectTo },
    });
  }

  async function signOut() {
    await client.auth.signOut();
    await refresh();
  }

  async function startCheckout() {
    if (!state.session) throw new Error('Not signed in');
    var resp = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + state.session.access_token,
      },
    });
    if (!resp.ok) {
      var err = await resp.json().catch(function () { return {}; });
      throw new Error(err.error || 'Checkout failed');
    }
    var body = await resp.json();
    window.location.href = body.url;
  }

  // ---------- Gate UI ----------
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'class') node.className = attrs[k];
      else if (k === 'html') node.innerHTML = attrs[k];
      else if (k.indexOf('on') === 0) node.addEventListener(k.slice(2), attrs[k]);
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return node;
  }

  function renderGate() {
    var gate = document.getElementById('auth-gate');
    if (!gate) return;

    if (!state.ready) {
      gate.style.display = '';
      gate.innerHTML = '<div class="auth-card"><p class="auth-status">Loading…</p></div>';
      return;
    }

    if (state.user && state.hasPaid) {
      gate.style.display = 'none';
      gate.innerHTML = '';
      document.dispatchEvent(new CustomEvent('auth:unlocked'));
      return;
    }

    gate.style.display = '';
    gate.innerHTML = '';

    var card = el('div', { class: 'auth-card' });
    card.appendChild(el('h1', { class: 'auth-title' }, ['Paramedic Pharmacology Study Guide']));

    if (!state.user) {
      card.appendChild(el('p', { class: 'auth-sub' }, [
        'Sign in with your email — we’ll send a one-tap login link.',
      ]));
      var form = el('form', { class: 'auth-form', onsubmit: function (e) {
        e.preventDefault();
        var emailInput = form.querySelector('input[type=email]');
        var btn = form.querySelector('button[type=submit]');
        var msg = card.querySelector('.auth-msg');
        var email = (emailInput.value || '').trim();
        if (!email) return;
        btn.disabled = true;
        btn.textContent = 'Sending…';
        signIn(email).then(function (r) {
          if (r.error) {
            msg.textContent = r.error.message || 'Could not send link.';
            msg.className = 'auth-msg auth-msg--err';
            btn.disabled = false;
            btn.textContent = 'Send magic link';
          } else {
            msg.textContent = 'Check ' + email + ' for your login link.';
            msg.className = 'auth-msg auth-msg--ok';
            btn.textContent = 'Link sent';
          }
        });
      }});
      form.appendChild(el('input', {
        type: 'email', name: 'email', required: 'required',
        autocomplete: 'email', placeholder: 'you@example.com', class: 'auth-input',
      }));
      form.appendChild(el('button', { type: 'submit', class: 'auth-btn' }, ['Send magic link']));
      card.appendChild(form);
      card.appendChild(el('p', { class: 'auth-msg' }));
    } else {
      var params = new URLSearchParams(window.location.search);
      var justCanceled = params.get('checkout') === 'cancel';
      var justSucceeded = params.get('checkout') === 'success';

      card.appendChild(el('p', { class: 'auth-sub' }, [
        'Signed in as ' + state.user.email + '.',
      ]));

      if (justSucceeded) {
        card.appendChild(el('p', { class: 'auth-msg auth-msg--ok' }, [
          'Payment received — finalizing your access…',
        ]));
        // Webhook may take a moment; poll a few times.
        pollEntitlement(8);
      } else {
        card.appendChild(el('p', { class: 'auth-sub' }, [
          'Unlock lifetime access to the full study guide.',
        ]));
        var unlock = el('button', { class: 'auth-btn', onclick: function () {
          unlock.disabled = true;
          unlock.textContent = 'Redirecting…';
          startCheckout().catch(function (err) {
            unlock.disabled = false;
            unlock.textContent = 'Unlock';
            var msg = card.querySelector('.auth-msg');
            if (msg) {
              msg.textContent = err.message || 'Could not start checkout.';
              msg.className = 'auth-msg auth-msg--err';
            }
          });
        }}, ['Unlock']);
        card.appendChild(unlock);
        if (justCanceled) {
          card.appendChild(el('p', { class: 'auth-msg auth-msg--err' }, ['Checkout canceled.']));
        } else {
          card.appendChild(el('p', { class: 'auth-msg' }));
        }
      }

      card.appendChild(el('button', {
        class: 'auth-link', onclick: function () { signOut(); },
      }, ['Sign out']));
    }

    gate.appendChild(card);
  }

  function pollEntitlement(remaining) {
    fetchEntitlement().then(function () {
      if (state.hasPaid) {
        renderGate();
        emit();
      } else if (remaining > 0) {
        setTimeout(function () { pollEntitlement(remaining - 1); }, 1500);
      } else {
        renderGate();
      }
    });
  }

  client.auth.onAuthStateChange(function (_event, session) {
    state.session = session || null;
    state.user = session ? session.user : null;
    fetchEntitlement().then(function () {
      state.ready = true;
      renderGate();
      emit();
    });
  });

  window.AUTH = {
    onChange: function (fn) { listeners.push(fn); fn(state); },
    get state() { return state; },
    signIn: signIn,
    signOut: signOut,
    refresh: refresh,
    startCheckout: startCheckout,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refresh);
  } else {
    refresh();
  }
})();
