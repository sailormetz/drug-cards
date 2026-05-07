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

    gate.className = 'auth-gate';

    if (!state.ready) {
      gate.style.display = '';
      gate.innerHTML = '<p class="auth-status">Loading…</p>';
      return;
    }

    if (state.user && state.hasPaid) {
      gate.style.display = 'none';
      gate.innerHTML = '';
      renderChip();
      document.dispatchEvent(new CustomEvent('auth:unlocked'));
      return;
    }

    gate.style.display = '';
    gate.innerHTML = '';
    renderChip();

    if (!state.user) {
      buildSignedOut(gate);
      return;
    }

    buildSignedInUnpaid(gate);
  }

  function buildSignedOut(gate) {
    gate.classList.add('signed-out');

    var page = el('div', { class: 'page' });

    var badge = el('div', { class: 'badge' });
    badge.appendChild(el('div', { class: 'badge-dot' }));
    badge.appendChild(el('span', { class: 'badge-text' }, ['Now live — 156 drugs']));
    page.appendChild(badge);

    page.appendChild(el('h1', {
      class: 'headline',
      html: 'All<span class="headline-ems">EMS</span>Drugs<span class="headline-tld">.com</span>',
    }));
    page.appendChild(el('p', { class: 'subhead' }, [
      'Never worry about EMS pharmacology again.',
    ]));

    var stats = el('div', { class: 'stats' });

    var sRow1 = el('div', { class: 'stat-row' });
    sRow1.appendChild(el('div', { class: 'stat-num mint' }, ['70']));
    var sLabel1 = el('div', {
      class: 'stat-label',
      html: '<span>Prehospital</span>EMS Drugs',
    });
    sRow1.appendChild(sLabel1);
    stats.appendChild(sRow1);

    var sDiv = el('div', { class: 'stat-divider' });
    sDiv.appendChild(el('div', { class: 'stat-divider-line' }));
    sDiv.appendChild(el('div', { class: 'stat-divider-plus' }, ['+']));
    sDiv.appendChild(el('div', { class: 'stat-divider-line' }));
    stats.appendChild(sDiv);

    var sRow2 = el('div', { class: 'stat-row' });
    sRow2.appendChild(el('div', { class: 'stat-num blue' }, ['86']));
    var sLabel2 = el('div', {
      class: 'stat-label',
      html: '<span>Most Common</span>Home Meds',
    });
    sRow2.appendChild(sLabel2);
    stats.appendChild(sRow2);
    page.appendChild(stats);

    var pillsSection = el('div', { class: 'pills-section' });
    pillsSection.appendChild(el('p', { class: 'pills-label' }, ["What's covered"]));
    var pills = el('div', { class: 'pills' });
    [
      ['mint',   'Indications'],
      ['coral',  'Contraindications'],
      ['amber',  'Mechanisms'],
      ['blue',   'Doses'],
      ['purple', 'Adverse Effects'],
      ['muted',  '+ More'],
    ].forEach(function (p) {
      var pill = el('div', { class: 'pill pill-' + p[0] }, [p[1]]);
      pills.appendChild(pill);
    });
    pillsSection.appendChild(pills);
    page.appendChild(pillsSection);

    var card = el('div', { class: 'auth-card' });
    card.appendChild(el('div', { class: 'auth-cta' }, ['Sign In/Up']));
    card.appendChild(el('div', { class: 'auth-sub' }, [
      'Just enter your email. No password needed.',
    ]));

    var msg = el('p', { id: 'auth-msg', class: 'auth-msg auth-note' });
    var form = el('form', { id: 'auth-form', onsubmit: function (e) {
      e.preventDefault();
      var emailInput = form.querySelector('input[type=email]');
      var btn = form.querySelector('button[type=submit]');
      var email = (emailInput.value || '').trim();
      if (!email) return;
      btn.disabled = true;
      btn.innerHTML = 'Sending…';
      signIn(email).then(function (r) {
        if (r.error) {
          msg.textContent = r.error.message || 'Could not send link.';
          msg.className = 'auth-msg auth-note auth-msg--err';
          btn.disabled = false;
          btn.innerHTML = btnInner;
        } else {
          msg.textContent = 'Check ' + email + ' for your login link.';
          msg.className = 'auth-msg auth-note auth-msg--ok';
          btn.innerHTML = 'Link sent';
        }
      });
    }});

    var inputWrap = el('div', { class: 'input-wrap' });
    inputWrap.appendChild(el('span', { class: 'input-icon' }, ['✉']));
    inputWrap.appendChild(el('input', {
      class: 'email-input',
      type: 'email', name: 'email', required: 'required',
      autocomplete: 'email', placeholder: 'you@example.com',
    }));
    form.appendChild(inputWrap);

    var btnInner = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none">'
      + '<path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" stroke-width="1.8" '
      + 'stroke-linecap="round" stroke-linejoin="round"/></svg> Send magic link';
    form.appendChild(el('button', {
      type: 'submit', class: 'btn-magic', html: btnInner,
    }));

    card.appendChild(form);
    card.appendChild(msg);
    page.appendChild(card);

    gate.appendChild(page);
  }

  function buildSignedInUnpaid(gate) {
    var card = el('div', { class: 'auth-card' });
    card.appendChild(el('h1', { class: 'auth-title' }, ['Paramedic Pharmacology Study Guide']));

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
      pollEntitlement(8);
    } else {
      card.appendChild(el('p', { class: 'auth-sub' }, [
        'Unlock lifetime access — $19, one-time.',
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

    gate.appendChild(card);
  }

  function renderChip() {
    var chip = document.getElementById('auth-chip');
    if (!chip) return;
    var unlocked = !!(state.user && state.hasPaid);
    if (!unlocked) {
      chip.hidden = true;
      return;
    }
    var emailEl = document.getElementById('auth-chip-email');
    var btn = document.getElementById('auth-chip-signout');
    if (emailEl) emailEl.textContent = state.user.email || '';
    if (btn && !btn.dataset.bound) {
      btn.addEventListener('click', function () { signOut(); });
      btn.dataset.bound = '1';
    }
    chip.hidden = false;
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
