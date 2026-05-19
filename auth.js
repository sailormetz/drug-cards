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
      body: JSON.stringify({ origin: window.location.origin }),
    });
    if (!resp.ok) {
      var err = await resp.json().catch(function () { return {}; });
      throw new Error(err.error || 'Checkout failed');
    }
    var body = await resp.json();
    window.location.href = body.url;
  }

  async function redeemCode(code) {
    if (!state.session) throw new Error('Not signed in');
    var resp = await fetch('/api/redeem-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + state.session.access_token,
      },
      body: JSON.stringify({ code: code }),
    });
    var body = await resp.json().catch(function () { return {}; });
    if (!resp.ok) {
      var e = new Error(body.error || 'Redeem failed');
      e.status = resp.status;
      e.code = body.error;
      throw e;
    }
    return body;
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
      renderUserMenu();
      document.dispatchEvent(new CustomEvent('auth:unlocked'));
      return;
    }

    gate.style.display = '';
    gate.innerHTML = '';
    renderUserMenu();

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

    [
      ['blue', '70', 'Prehospital', 'EMS Drugs'],
      ['cyan', '86', 'Most Common', 'Home Meds'],
    ].forEach(function (s, i) {
      if (i === 1) {
        var sDiv = el('div', { class: 'stat-divider' });
        sDiv.appendChild(el('div', { class: 'stat-divider-line' }));
        sDiv.appendChild(el('div', { class: 'stat-divider-plus' }, ['+']));
        sDiv.appendChild(el('div', { class: 'stat-divider-line' }));
        stats.appendChild(sDiv);
      }
      var row = el('div', { class: 'stat-row' });
      row.appendChild(el('div', { class: 'stat-num ' + s[0] }, [s[1]]));
      var label = el('div', { class: 'stat-label' });
      label.appendChild(el('span', { class: 'stat-label__sub' }, [s[2]]));
      label.appendChild(el('span', { class: 'stat-label__main' }, [s[3]]));
      row.appendChild(label);
      stats.appendChild(row);
    });

    var pillsLabel = el('p', { class: 'pills-label' }, ["What's covered"]);
    var pillsSection = el('div', { class: 'pills-section' });
    var pills = el('div', { class: 'pills' });
    [
      ['blue',   'Indications'],
      ['coral',  'Contraindications'],
      ['amber',  'Mechanisms'],
      ['cyan',   'Doses'],
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
    ['coral', 'amber', 'blue'].forEach(function (c) {
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
        'blue',
        'Search and filter over <strong>156 medications</strong> by category and class.',
      ],
      [
        'cyan',
        'Complete drug info for <span class="lp-hl lp-hl--blue">indications</span>, <span class="lp-hl lp-hl--coral">contraindications</span>, <span class="lp-hl lp-hl--amber">mechanisms</span>, <span class="lp-hl lp-hl--cyan">doses by population</span>, <span class="lp-hl lp-hl--blue">routes</span>, <span class="lp-hl lp-hl--purple">adverse effects</span>, and <span class="lp-hl lp-hl--amber">precautions</span>.',
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

    function scrollToSignIn() {
      banner.classList.remove('is-visible');
      var input = page.querySelector('.email-input');
      if (!input) return;
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(function () {
        try { input.focus({ preventScroll: true }); } catch (_) { input.focus(); }
      }, 350);
    }

    // FINAL CTA
    var finalSection = el('section', { class: 'lp-section lp-section--final' });
    finalSection.appendChild(el('h2', { class: 'lp-final__title' }, ['Master EMS Pharmacology']));
    finalSection.appendChild(el('button', {
      type: 'button',
      class: 'lp-final__btn',
      onclick: scrollToSignIn,
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
      onclick: scrollToSignIn,
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
    gate.classList.add('signed-in-unpaid');

    var params = new URLSearchParams(window.location.search);
    var justCanceled = params.get('checkout') === 'cancel';
    var justSucceeded = params.get('checkout') === 'success';

    var page = el('div', { class: 'checkout-page' });

    if (justSucceeded) {
      var successModal = el('div', { class: 'checkout-modal checkout-modal--success' });

      var successBadge = el('div', { class: 'badge' });
      successBadge.appendChild(el('span', { class: 'badge-dot' }));
      successBadge.appendChild(el('span', { class: 'badge-text' }, ['Payment received']));
      successModal.appendChild(successBadge);

      successModal.appendChild(el('h1', { class: 'checkout-headline' }, ["You're in."]));
      successModal.appendChild(el('p', { class: 'checkout-email' }, [
        'Finalizing access for ' + state.user.email + '…',
      ]));

      var spinner = el('div', { class: 'checkout-success' });
      spinner.appendChild(el('span', { class: 'checkout-success__dot' }));
      spinner.appendChild(el('span', { class: 'checkout-success__text' }, [
        'This usually takes a few seconds.',
      ]));
      successModal.appendChild(spinner);

      page.appendChild(successModal);
      gate.appendChild(page);
      pollEntitlement(8);
      return;
    }

    var modal = el('div', { class: 'checkout-modal' });

    var badge = el('div', { class: 'badge' });
    badge.appendChild(el('span', { class: 'badge-dot' }));
    badge.appendChild(el('span', { class: 'badge-text' }, ['Almost done']));
    modal.appendChild(badge);

    var headline = el('h1', { class: 'checkout-headline' });
    headline.innerHTML = 'Unlock everything.';
    modal.appendChild(headline);

    modal.appendChild(el('p', { class: 'checkout-email' }, [state.user.email]));

    var features = el('ul', { class: 'checkout-features' });
    [
      'Full guides for 70 EMS drugs + 86 home meds',
      'All future updates included (new features coming soon)',
      'Lifetime access, forever',
    ].forEach(function (label) {
      var li = el('li', { class: 'checkout-feature' });
      var check = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      check.setAttribute('class', 'checkout-feature__check');
      check.setAttribute('viewBox', '0 0 16 16');
      check.setAttribute('width', '18');
      check.setAttribute('height', '18');
      check.setAttribute('aria-hidden', 'true');
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M3 8.5l3.2 3.2L13 5');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'currentColor');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      check.appendChild(path);
      li.appendChild(check);
      li.appendChild(el('span', { class: 'checkout-feature__label' }, [label]));
      features.appendChild(li);
    });
    modal.appendChild(features);

    var price = el('div', { class: 'checkout-price' });
    price.appendChild(el('span', { class: 'checkout-price__amount' }, ['$19']));
    price.appendChild(el('span', { class: 'checkout-price__heading' }, ['Lifetime Access']));
    modal.appendChild(price);

    var msg = el('p', { class: 'checkout-msg' });
    if (justCanceled) {
      msg.textContent = 'Checkout canceled. No charge.';
      msg.className = 'checkout-msg checkout-msg--err';
    }

    var ctaArrow = '<span class="checkout-cta__label">Continue to checkout</span>'
      + '<svg class="checkout-cta__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">'
      + '<path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" stroke-width="2" '
      + 'stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var cta = el('button', {
      type: 'button',
      class: 'checkout-cta',
      html: ctaArrow,
      onclick: function () {
        cta.disabled = true;
        cta.innerHTML = '<span class="checkout-cta__label">Redirecting…</span>';
        startCheckout().catch(function (err) {
          cta.disabled = false;
          cta.innerHTML = ctaArrow;
          msg.textContent = err.message || 'Could not start checkout.';
          msg.className = 'checkout-msg checkout-msg--err';
        });
      },
    });
    modal.appendChild(cta);
    modal.appendChild(msg);

    var redeem = el('div', { class: 'redeem-section' });
    redeem.appendChild(el('p', { class: 'redeem-label' }, ['Have a code?']));
    var redeemMsg = el('p', { class: 'redeem-msg' });
    var redeemForm = el('form', {
      class: 'redeem-form',
      onsubmit: function (e) {
        e.preventDefault();
        var input = redeemForm.querySelector('.redeem-input');
        var btn = redeemForm.querySelector('.redeem-btn');
        var code = (input.value || '').trim().toUpperCase();
        if (!code) return;
        btn.disabled = true;
        input.disabled = true;
        redeemMsg.textContent = 'Redeeming…';
        redeemMsg.className = 'redeem-msg';
        redeemCode(code).then(function () {
          // Switch URL signal so the existing welcome modal fires once unlocked.
          var clean = window.location.pathname + '?redeem=success' + window.location.hash;
          history.replaceState(null, '', clean);
          return fetchEntitlement();
        }).then(function () {
          renderGate();
          emit();
        }).catch(function (err) {
          btn.disabled = false;
          input.disabled = false;
          if (err && err.code === 'already_paid') {
            redeemMsg.textContent = 'You already have access.';
          } else if (err && err.code === 'invalid_code') {
            redeemMsg.textContent = 'Invalid or already-used code.';
          } else {
            redeemMsg.textContent = (err && err.message) || 'Could not redeem code.';
          }
          redeemMsg.className = 'redeem-msg redeem-msg--err';
        });
      },
    });
    redeemForm.appendChild(el('input', {
      class: 'redeem-input',
      type: 'text',
      name: 'code',
      autocomplete: 'off',
      autocapitalize: 'characters',
      spellcheck: 'false',
      placeholder: 'YOUR CODE',
    }));
    redeemForm.appendChild(el('button', {
      type: 'submit',
      class: 'redeem-btn',
    }, ['Redeem']));
    redeem.appendChild(redeemForm);
    redeem.appendChild(redeemMsg);
    modal.appendChild(redeem);

    var footer = el('div', { class: 'checkout-footer' });
    var trust = el('div', { class: 'checkout-trust' });
    var lock = '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">'
      + '<rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/>'
      + '<path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'
      + '</svg>';
    trust.innerHTML = lock + '<span>Secure · Stripe</span>';
    footer.appendChild(trust);
    footer.appendChild(el('span', { class: 'checkout-footer__sep' }, ['·']));
    footer.appendChild(el('button', {
      type: 'button',
      class: 'checkout-signout',
      onclick: function () { signOut(); },
    }, ['Sign out']));
    modal.appendChild(footer);

    page.appendChild(modal);
    gate.appendChild(page);
  }

  function renderUserMenu() {
    var btn   = document.getElementById('user-menu-btn');
    var menu  = document.getElementById('user-menu');
    var email = document.getElementById('user-menu-email');
    var out   = document.getElementById('user-menu-signout');
    var close = document.getElementById('user-menu-close');
    if (!btn || !menu) return;

    var unlocked = !!(state.user && state.hasPaid);
    btn.hidden = !unlocked;
    if (!unlocked) {
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      return;
    }

    if (email) email.textContent = state.user.email || '';

    function closeMenu() {
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    }

    if (!btn.dataset.bound) {
      btn.addEventListener('click', function () {
        var open = menu.hidden;
        menu.hidden = !open;
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      menu.addEventListener('click', function (e) {
        if (e.target === menu) closeMenu();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !menu.hidden) closeMenu();
      });
      btn.dataset.bound = '1';
    }
    if (close && !close.dataset.bound) {
      close.addEventListener('click', closeMenu);
      close.dataset.bound = '1';
    }
    if (out && !out.dataset.bound) {
      out.addEventListener('click', function () { signOut(); });
      out.dataset.bound = '1';
    }
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
    redeemCode: redeemCode,
  };

  // ── Post-checkout welcome modal ──
  // Shows once when the user returns from a successful Stripe checkout.
  var welcomeShown = false;
  function showWelcomeModal() {
    var overlay = el('div', { class: 'welcome-overlay', role: 'dialog', 'aria-labelledby': 'welcome-title' });
    var modal = el('div', { class: 'welcome-modal' });

    modal.appendChild(el('h1', { id: 'welcome-title', class: 'welcome-headline' }, ["You're in."]));
    modal.appendChild(el('p', { class: 'welcome-sub' }, ['Thanks for your support.']));

    var list = el('ul', { class: 'welcome-list' });
    [
      'Use the <strong>tabs at the top</strong> to switch between field and home meds.',
      'Tap the <strong>search bar</strong> to search and filter for drugs.',
      'Now go <strong>master EMS pharmacology!</strong>',
    ].forEach(function (html, i) {
      var item = el('li', { class: 'welcome-list__item' });
      item.appendChild(el('span', { class: 'welcome-list__mark', 'aria-hidden': 'true' }, [String(i + 1)]));
      item.appendChild(el('span', { class: 'welcome-list__text', html: html }));
      list.appendChild(item);
    });
    modal.appendChild(list);

    var cta = el('button', {
      type: 'button',
      class: 'welcome-cta',
      onclick: function () { overlay.remove(); },
    });
    cta.appendChild(el('span', {}, ["Let's go"]));
    cta.insertAdjacentHTML('beforeend',
      '<svg class="welcome-cta__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
      '<path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>');
    modal.appendChild(cta);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }

  document.addEventListener('auth:unlocked', function () {
    if (welcomeShown) return;
    if (!/[?&](checkout|redeem)=success\b/.test(window.location.search)) return;
    welcomeShown = true;
    showWelcomeModal();
    // Strip the param so refresh doesn't re-show the modal
    var clean = window.location.pathname + window.location.hash;
    history.replaceState(null, '', clean);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refresh);
  } else {
    refresh();
  }
})();
