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

  // ---------- Live demo bootstrap ----------
  // window.renderDrugCard / DRUGS are defined by app.js + data/drugs.js — which load
  // synchronously before us. But Supabase's onAuthStateChange can fire during the
  // initial getSession() inside createClient(), before subsequent <script> tags parse.
  // Retry briefly until the renderer is available.
  function mountDemo(frame, attempt) {
    var dataset = (typeof DRUGS !== 'undefined' && DRUGS) || [];
    var epi = null;
    for (var i = 0; i < dataset.length; i++) {
      if (dataset[i].id === 'epinephrine') { epi = dataset[i]; break; }
    }
    if (epi && typeof window.renderDrugCard === 'function') {
      frame.innerHTML = window.renderDrugCard(epi);
      if (typeof window.bindCardInteractions === 'function') {
        window.bindCardInteractions(frame);
      }
      return;
    }
    if (attempt < 40) {
      setTimeout(function () { mountDemo(frame, attempt + 1); }, 50);
    } else {
      frame.innerHTML = '<p class="lp-demo__fallback">Demo unavailable. Sign in to see the full card.</p>';
    }
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

    page.appendChild(el('h1', {
      class: 'headline',
      html: 'All<span class="headline-ems">EMS</span>Drugs<span class="headline-tld">.com</span>',
    }));
    page.appendChild(el('p', { class: 'subhead' }, [
      'The final boss of EMS Pharmacology guides.',
    ]));

    // Build stats + pills now, append later (after the sign-in card)
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

    var pillsLabel = el('p', { class: 'pills-label' }, ["What's covered"]);
    var pillsSection = el('div', { class: 'pills-section' });
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

    // ── Below the sign-in: "what's covered" label → stats → pills → cue → demo → what → why ──
    page.appendChild(pillsLabel);
    page.appendChild(stats);
    page.appendChild(pillsSection);

    var cue = el('div', { class: 'lp-cue lp-in-view' });
    cue.appendChild(el('span', { class: 'lp-cue__text' }, ['Live demo']));
    cue.appendChild(el('span', { class: 'lp-cue__arrow' }, ['⬇']));
    page.appendChild(cue);

    // DEMO
    var demoSection = el('section', { class: 'lp-section lp-section--demo' });
    demoSection.appendChild(el('h2', { class: 'lp-h2' }, ['This is a real card. Tap it.']));
    demoSection.appendChild(el('p', { class: 'lp-body' }, [
      'The same Epinephrine card you’d open after signing in — fully interactive. Switch indications, populations, and routes.',
    ]));

    var device = el('div', { class: 'lp-device' });
    var deviceBar = el('div', { class: 'lp-device__bar' });
    var dots = el('div', { class: 'lp-device__dots' });
    ['coral', 'amber', 'mint'].forEach(function (c) {
      dots.appendChild(el('span', { class: 'lp-device__dot lp-device__dot--' + c }));
    });
    deviceBar.appendChild(dots);
    deviceBar.appendChild(el('span', { class: 'lp-device__title' }, ['Epinephrine · Card view']));
    var live = el('span', { class: 'lp-device__live' });
    live.appendChild(el('span', { class: 'lp-device__live-dot' }));
    live.appendChild(document.createTextNode(' Live'));
    deviceBar.appendChild(live);
    device.appendChild(deviceBar);

    var demoFrame = el('div', { class: 'lp-demo' });
    demoFrame.innerHTML = '<p class="lp-demo__fallback">Loading preview…</p>';
    device.appendChild(demoFrame);
    mountDemo(demoFrame, 0);
    demoSection.appendChild(device);
    page.appendChild(demoSection);

    // ABOUT
    var whatSection = el('section', { class: 'lp-section' });
    whatSection.appendChild(el('h2', { class: 'lp-h2' }, [
      'The last pharmacology guide you’ll ever need.',
    ]));
    var bullets = el('ul', { class: 'lp-bullets' });
    [
      [
        'mint',
        'Search and filter over <strong>156 medications</strong> by category and class.',
      ],
      [
        'blue',
        'Instant access to <span class="lp-hl lp-hl--mint">indications</span>, <span class="lp-hl lp-hl--coral">contraindications</span>, <span class="lp-hl lp-hl--amber">mechanisms</span>, <span class="lp-hl lp-hl--blue">doses by population</span>, <span class="lp-hl lp-hl--blue">routes</span>, and <span class="lp-hl lp-hl--purple">adverse effects</span>.',
      ],
      [
        'amber',
        'All drug information comes from authoritative sources like the <strong>NASEMSO Clinical Guidelines</strong>, <strong>AHA ACLS &amp; PALS</strong>, <strong>StatPearls</strong>, and <strong>DailyMed</strong>.',
      ],
    ].forEach(function (row) {
      var li = el('li', { class: 'lp-bullet lp-bullet--' + row[0] });
      li.appendChild(el('span', { class: 'lp-bullet__mark', 'aria-hidden': 'true' }, ['→']));
      li.appendChild(el('span', { class: 'lp-bullet__text', html: row[1] }));
      bullets.appendChild(li);
    });
    whatSection.appendChild(bullets);
    page.appendChild(whatSection);

    // WHY WE MADE THIS
    var whySection = el('section', { class: 'lp-section lp-section--why' });

    var byline = el('div', { class: 'lp-quote__attr' });
    byline.appendChild(el('span', { class: 'lp-quote__attr-line' }));
    byline.appendChild(el('span', { class: 'lp-quote__attr-text' }, ['Built by working medics']));
    byline.appendChild(el('span', { class: 'lp-quote__attr-line' }));
    whySection.appendChild(byline);

    var quote = el('blockquote', { class: 'lp-quote' });
    quote.appendChild(el('p', { class: 'lp-quote__text' }, [
      '“Pharmacology is the hardest section of medic school — and the part you forget first on the job. The references are either a 1,200-page textbook or a stale cheat-sheet PDF.',
    ]));
    quote.appendChild(el('p', { class: 'lp-quote__text' }, [
      'We wanted a card per drug. Fast to scan. Organized by what actually matters when you’re cramming for a test or three minutes out from a call.”',
    ]));
    whySection.appendChild(quote);
    page.appendChild(whySection);

    // FINAL CTA
    var finalSection = el('section', { class: 'lp-section lp-section--final' });
    finalSection.appendChild(el('h2', { class: 'lp-final__title' }, ['Master EMS Pharmacology']));
    finalSection.appendChild(el('button', {
      type: 'button',
      class: 'lp-final__btn',
      onclick: function () {
        banner.classList.remove('is-visible');
        var input = page.querySelector('.email-input');
        if (input) {
          input.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(function () { try { input.focus({ preventScroll: true }); } catch (_) { input.focus(); } }, 350);
        }
      },
    }, ['Get Access Now →']));
    page.appendChild(finalSection);

    gate.appendChild(page);

    // Floating top pricing modal — slides down once the user scrolls to the demo
    var banner = el('div', { class: 'lp-price-banner' });
    banner.appendChild(el('span', { class: 'lp-price-banner__new' }, ['$19']));
    banner.appendChild(el('p', { class: 'lp-price-banner__copy' }, [
      'Lifetime access. No subscriptions. No upsells.',
    ]));
    banner.appendChild(el('button', {
      type: 'button',
      class: 'lp-price-banner__cta',
      onclick: function () {
        banner.classList.remove('is-visible');
        var input = page.querySelector('.email-input');
        if (input) {
          input.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(function () { try { input.focus({ preventScroll: true }); } catch (_) { input.focus(); } }, 350);
        }
      },
    }, ['Sign up']));
    gate.appendChild(banner);

    // Scroll-triggered reveal for each lp-section
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('lp-in-view');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px 0px 0px' });
      page.querySelectorAll('.lp-section, .lp-cue').forEach(function (el) {
        io.observe(el);
      });

      // Pricing banner: appears once user reaches the demo, stays visible while
      // scrolling further down, and only hides when user scrolls back ABOVE the
      // demo (or when the CTA buttons explicitly dismiss it).
      var bannerIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var rect = entry.boundingClientRect;
          var topEdge = entry.rootBounds ? entry.rootBounds.top : 0;
          if (entry.isIntersecting || rect.bottom <= topEdge) {
            banner.classList.add('is-visible');
          } else {
            banner.classList.remove('is-visible');
          }
        });
      }, { threshold: 0, rootMargin: '0px 0px -15% 0px' });
      bannerIO.observe(demoSection);
    }
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
