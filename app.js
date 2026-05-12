(function () {
  var HOME_MEDS = (typeof home_meds !== 'undefined') ? home_meds : [];

  var activeMode = localStorage.getItem('drugCards.mode') || 'drugs';
  if (activeMode === 'home' && !HOME_MEDS.length) activeMode = 'drugs';

  var modeState = {
    drugs: { activeId: DRUGS[0].id,                              activeCategories: [], activeClasses: [], sortAsc: true, searchQuery: '' },
    home:  { activeId: (HOME_MEDS[0] && HOME_MEDS[0].id) || null, activeCategories: [], activeClasses: [], sortAsc: true, searchQuery: '' }
  };
  var filterTab = 'category';
  var cardContainer;

  function getDataset() { return activeMode === 'home' ? HOME_MEDS : DRUGS; }
  function getState()   { return modeState[activeMode]; }
  function modeNoun(plural) {
    return activeMode === 'home'
      ? (plural ? 'meds' : 'med')
      : (plural ? 'drugs' : 'drug');
  }

  function buildSameDoseNotes(drug) {
    var notes = {};
    (drug.indications || []).forEach(function (ind) {
      if (ind.sameDoseAs) {
        if (!notes[ind.sameDoseAs]) notes[ind.sameDoseAs] = [];
        notes[ind.sameDoseAs].push(ind.name);
      }
    });
    return notes;
  }

  function getAllCategories() {
    return Array.from(new Set(getDataset().reduce(function (acc, d) {
      return acc.concat(d.category || []);
    }, []))).sort();
  }
  function getAllClasses() {
    return Array.from(new Set(getDataset().reduce(function (acc, d) {
      return acc.concat(d.classes || []);
    }, []))).sort();
  }

  function matchesFilters(d) {
    var st = getState();
    if (st.activeCategories.length && !st.activeCategories.every(function (c) { return (d.category || []).indexOf(c) !== -1; })) return false;
    if (st.activeClasses.length    && !st.activeClasses.every(function (c) { return (d.classes   || []).indexOf(c) !== -1; })) return false;
    return true;
  }

  function getTargetHlClass(target) {
    var name = target.name.toLowerCase();
    if (/α|alpha/i.test(name)) return 'hl--alpha';
    if (/β|beta/i.test(name)) return 'hl--beta';
    return 'hl--neutral';
  }

  function renderCard(drug) {
    // --- MOA ---
    var moaHTML = drug.moa.map(function (m, i) {
      var divider = i > 0 ? ' moa-entry--divider' : '';
      var hlClass = getTargetHlClass(m.target);
      var tierHTML = '';
      if (m.tier) {
        tierHTML = '<span class="moa-tier-label">' + m.tier + '</span>' +
          (m.label ? '<span class="moa-tier-category">' + m.label + '</span>' : '') +
          (m.target.dose ? '<span class="moa-tier-range">' + m.target.dose + '</span>' : '');
      }
      return '<div class="moa-entry' + divider + '">' +
        '<div class="moa-target-row">' +
          '<span class="hl ' + hlClass + '">' + m.target.name + '</span>' +
          '<span class="moa-action-badge">' + m.target.action + '</span>' +
          tierHTML +
        '</div>' +
        '<div class="moa-result">' + m.target.result + '</div>' +
        '<p class="moa-brief">' + m.brief + '</p>' +
      '</div>';
    }).join('');

    // --- Indications ---
    var indicationsHTML = drug.indications.map(function (ind) {
      return '<li>' + ind.name + '</li>';
    }).join('');

    // --- Contraindications ---
    var contraItems = drug.contraindications.map(function(c, i) {
      var num = (i + 1 < 10 ? '0' : '') + (i + 1);
      return '<li class="' + (c.relative ? 'contra-item--relative' : 'contra-item--absolute') + '" data-num="' + num + '">' + c.text + '</li>';
    });
    var contraindicationsHTML;
    if (contraItems.length >= 4) {
      var mid = Math.ceil(contraItems.length / 2);
      contraindicationsHTML =
        '<div class="contra-cols">' +
          '<ul class="contra-list">' + contraItems.slice(0, mid).join('') + '</ul>' +
          '<ul class="contra-list">' + contraItems.slice(mid).join('') + '</ul>' +
        '</div>';
    } else {
      contraindicationsHTML = '<ul class="contra-list">' + contraItems.join('') + '</ul>';
    }


    // --- Doses (tabbed) ---
    var doseIndications = [];
    drug.indications.forEach(function (ind) {
      if (ind.doses && !ind.sameDoseAs) {
        doseIndications.push(ind.name);
      }
    });
    var needsTabs = doseIndications.length > 1;
    var firstInd = doseIndications[0] || '';

    var tabsHTML = '';
    if (needsTabs) {
      tabsHTML = '<span class="dose-tab-label">Indication</span>' +
        '<div class="dose-chips">' +
        doseIndications.map(function (ind, i) {
          var active = i === 0 ? ' dose-chip--active' : '';
          return '<button class="dose-chip' + active + '" data-indication="' + ind + '">' + ind + '</button>';
        }).join('') +
      '</div>';
    }

    var sameDoseNotes = buildSameDoseNotes(drug);

    var doseBlocksHTML = '';
    drug.indications.forEach(function (ind) {
      if (!ind.doses) return;

      var dataAttr = needsTabs ? ' data-dose-indication="' + ind.name + '"' : '';
      var indHidden = needsTabs && ind.name !== firstInd;
      var hidden = indHidden ? ' style="display:none"' : '';

      var populations = ind.doses.map(function (d) { return d.population; });

      // Population tabs
      doseBlocksHTML += '<span class="dose-tab-label"' + dataAttr + hidden + '>Population</span>' +
        '<div class="pop-tabs"' + dataAttr + hidden + '>' +
        populations.map(function (pop, i) {
          return '<button class="pop-tab' + (i === 0 ? ' pop-tab--active' : '') +
            '" data-pop="' + pop + '">' + pop + '</button>';
        }).join('') +
      '</div>';


      var indNotesHTML = (ind.notes && ind.notes.length)
        ? '<div class="indication-notes">' +
            '<span class="note-section-label note-section-label--indication">' + ind.name + '</span>' +
            ind.notes.map(function (n) { return '<span class="indication-note">' + n + '</span>'; }).join('') +
          '</div>'
        : '';

      ind.doses.forEach(function (d, di) {
        var popAttr = ' data-dose-pop="' + d.population + '"';
        var blockHidden = indHidden || di > 0;
        var blockHiddenAttr = blockHidden ? ' style="display:none"' : '';

        var formulationBadge = d.formulation
          ? '<span class="dose-formulation-badge">' + d.formulation + '</span>'
          : '';

        var popSlug = d.population.toLowerCase().replace(/\s+/g, '-');
        var genNotesHTML = (d.notes || []).filter(Boolean).length
          ? '<div class="dose-gen-notes dose-gen-notes--' + popSlug + '">' +
              '<span class="note-section-label note-section-label--' + popSlug + '">' + d.population + '</span>' +
              (d.notes || []).filter(Boolean).map(function (n) {
                return '<span class="dose-note">' + n + '</span>';
              }).join('') +
            '</div>'
          : '';

        var routes = d.routes || [];
        var needsRouteTabs = routes.length > 1;

        // Route tabs (always shown)
        var routeTabsHTML = '<div class="route-tab-wrap">' +
          '<span class="dose-tab-label">Route</span>' +
          '<div class="route-tabs">' +
          routes.map(function (r, ri) {
            var viaKey = (r.via || []).join(' / ');
            return '<button class="route-tab' + (ri === 0 ? ' route-tab--active' : '') +
              '" data-route="' + viaKey + '">' + viaKey + '</button>';
          }).join('') +
        '</div></div>';

        var routesHTML = routes.map(function (r, ri) {
          var viaKey = (r.via || []).join(' / ');
          var routeHidden = needsRouteTabs && ri > 0 ? ' style="display:none"' : '';

          var amtRowHTML = '<div class="dose-amt-row">' +
            '<span class="dose-amt' + (r.amount.length <= 13 ? '' : r.amount.length <= 28 ? ' dose-amt--md' : ' dose-amt--lg') + '">' + r.amount + '</span>' +
          '</div>';

          var metaCells = [
            { label: 'Max', value: r.maxDose || '—' },
            { label: 'Repeat', value: r.repeat || '—' },
            { label: 'Onset', value: r.onset || '—' },
            { label: 'Duration', value: r.duration || '—' }
          ];

          var metaGridHTML = '<div class="dose-meta-grid">' +
            metaCells.map(function (m) {
              return '<div class="dose-meta-cell' + (m.value === '—' ? ' dose-meta-cell--empty' : '') + '">' +
                '<span class="dose-meta-label">' + m.label + '</span>' +
                '<span class="dose-meta-value' + (m.value.length > 12 ? ' dose-meta-value--sm' : '') + '">' + m.value + '</span>' +
              '</div>';
            }).join('') +
            ((r.notes || []).length ? '<div class="dose-meta-cell dose-meta-cell--note">' +
              (r.notes).map(function (n) {
                return '<span class="dose-route-note"><span class="dose-route-note-arrow">&#x2192;</span>' + n + '</span>';
              }).join('') +
            '</div>' : '') +
          '</div>';

          return '<div class="dose-route" data-route="' + viaKey + '"' + routeHidden + '>' +
            amtRowHTML +
            (formulationBadge ? '<div class="dose-formulation-row">' + formulationBadge + '</div>' : '') +
            metaGridHTML +
          '</div>';
        }).join('');

        var sameDoseForInd = (needsTabs && di === 0 && sameDoseNotes[ind.name])
          ? '<div class="dose-sameas-note" data-sameas-for="' + ind.name + '">Also applies to: ' + sameDoseNotes[ind.name].join(', ') + '</div>'
          : '';
        doseBlocksHTML += '<div class="dose-block"' + dataAttr + popAttr + blockHiddenAttr + '>' +
          routeTabsHTML +
          (sameDoseForInd
            ? '<div class="dose-routes-wrap">' + sameDoseForInd + '<div class="dose-routes">' + routesHTML + '</div></div>'
            : '<div class="dose-routes">' + routesHTML + '</div>') +
          genNotesHTML +
        '</div>';
      });

      // Indication notes — outside dose blocks so visible for all populations
      if (indNotesHTML) {
        doseBlocksHTML += '<div class="indication-notes-wrap"' + dataAttr + hidden + '>' + indNotesHTML + '</div>';
      }

    });


    // --- Adverse Effects ---
    var adverseHTML = drug.adverseEffects.map(function (e) {
      return '<li>' + e + '</li>';
    }).join('');

    // --- Precautions ---
    var precautionsHTML = drug.precautions.map(function (p) {
      return '<li class="precaution-item">' + p + '</li>';
    }).join('');

    // --- Classes ---
    var classesHTML = drug.classes.map(function (c) {
      return '<span class="drug-class-pill">' + c + '</span>';
    }).join('');

    return (
      '<article class="card" data-drug-id="' + drug.id + '">' +
        '<header class="card-header">' +
          '<h1 class="drug-name">' + drug.genericName + '</h1>' +
          '<p class="drug-trade-name">' + drug.tradeNames.join(', ') + '</p>' +
          '<div class="drug-class-row">' + classesHTML + '</div>' +
        '</header>' +

        '<div class="section-wrap">' +
          '<h2 class="section-label">Summary</h2>' +
          '<section class="section">' +
            '<p class="summary-text">' + drug.summary + '</p>' +
          '</section>' +
        '</div>' +

        '<div class="section-wrap">' +
          '<h2 class="section-label">Indications</h2>' +
          '<section class="section">' +
            '<ul class="pill-list pill-list--indications">' + indicationsHTML + '</ul>' +
          '</section>' +
        '</div>' +

        '<div class="section-wrap">' +
          '<h2 class="section-label">Contraindications</h2>' +
          '<section class="section">' +
            contraindicationsHTML +
            '<div class="contra-key">' +
              '<span class="contra-key-label contra-key-label--coral">Absolute</span>' +
              (drug.contraindications.some(function(c) { return c.relative; })
                ? '<span class="contra-key-label contra-key-label--amber">Use Caution</span>'
                : '') +
            '</div>' +
          '</section>' +
        '</div>' +

        '<div class="section-wrap">' +
          '<h2 class="section-label">Dose &amp; Route</h2>' +
          '<section class="section section--dose">' +
            tabsHTML +
            doseBlocksHTML +
          '</section>' +
        '</div>' +

        '<div class="section-wrap">' +
          '<h2 class="section-label">Mechanism of Action</h2>' +
          '<section class="section">' +
            moaHTML +
          '</section>' +
        '</div>' +

        '<div class="section-wrap">' +
          '<h2 class="section-label">Adverse Effects</h2>' +
          '<section class="section">' +
            '<ul class="pill-list pill-list--adverse">' + adverseHTML + '</ul>' +
          '</section>' +
        '</div>' +

        '<div class="section-wrap">' +
          '<h2 class="section-label">Precautions</h2>' +
          '<section class="section">' +
            '<ul class="precaution-list">' + precautionsHTML + '</ul>' +
          '</section>' +
        '</div>' +

        '<footer class="card-footer">' +
          '<p>Always follow your local protocol</p>' +
          '<p>For educational use only</p>' +
        '</footer>' +
      '</article>'
    );
  }

  function renderHomeMedCard(med) {
    var classesHTML = (med.classes || []).map(function (c) {
      return '<span class="drug-class-pill">' + c + '</span>';
    }).join('');

    function pillSection(label, items, variant) {
      if (!items || !items.length) return '';
      var lis = items.map(function (x) { return '<li>' + x + '</li>'; }).join('');
      return '<div class="section-wrap">' +
        '<h2 class="section-label">' + label + '</h2>' +
        '<section class="section">' +
          '<ul class="pill-list ' + variant + '">' + lis + '</ul>' +
        '</section>' +
      '</div>';
    }

    function polyRow(s) {
      var m = s.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
      var name = m ? m[1].trim() : s.trim();
      var examples = m ? m[2].trim() : '';
      return '<li class="poly-row">' +
        '<span class="poly-pill">' + name + '</span>' +
        (examples ? '<span class="poly-examples">' + examples + '</span>' : '') +
      '</li>';
    }

    function polySection(items) {
      if (!items || !items.length) return '';
      return '<div class="section-wrap">' +
        '<h2 class="section-label">Polypharmacy</h2>' +
        '<section class="section">' +
          '<ul class="poly-list">' + items.map(polyRow).join('') + '</ul>' +
        '</section>' +
      '</div>';
    }

    function precautionSection(label, items) {
      if (!items || !items.length) return '';
      var lis = items.map(function (x) {
        return '<li class="precaution-item">' + x + '</li>';
      }).join('');
      return '<div class="section-wrap">' +
        '<h2 class="section-label">' + label + '</h2>' +
        '<section class="section">' +
          '<ul class="precaution-list">' + lis + '</ul>' +
        '</section>' +
      '</div>';
    }

    var summarySection = med.summary
      ? '<div class="section-wrap">' +
          '<h2 class="section-label">Summary</h2>' +
          '<section class="section">' +
            '<p class="summary-text">' + med.summary + '</p>' +
          '</section>' +
        '</div>'
      : '';

    var sourcesLine = (med.sources && med.sources.length)
      ? '<p class="card-source">Sources: ' + med.sources.join(', ') + '</p>'
      : '';

    return (
      '<article class="card card--home-med" data-drug-id="' + med.id + '">' +
        '<header class="card-header">' +
          '<h1 class="drug-name">' + med.genericName + '</h1>' +
          '<p class="drug-trade-name">' + (med.tradeNames || []).join(', ') + '</p>' +
          '<div class="drug-class-row">' + classesHTML + '</div>' +
        '</header>' +

        summarySection +
        pillSection('Indications',   med.indications,   'pill-list--indications') +
        pillSection('Comorbidities', med.comorbidities, 'pill-list--comorbidities') +
        polySection(med.polypharmacy) +
        precautionSection('Overdose & Toxicity', med.overdoseToxicity) +
        precautionSection('Precautions',         med.precautions) +

        '<footer class="card-footer">' +
          sourcesLine +
          '<p>Reference only — encounter aid</p>' +
          '<p>For educational use only</p>' +
        '</footer>' +
      '</article>'
    );
  }

  function renderActivePills() {
    var el = document.getElementById('active-filter-pills');
    if (!el) return;
    var st = getState();
    var html = '';
    if (st.activeCategories.length) {
      html += '<div class="active-pills-row active-pills-row--category">' +
        st.activeCategories.map(function (cat) {
          return '<span class="active-pill active-pill--category" data-type="category" data-value="' + cat + '">' +
            cat + '<button class="active-pill-x" aria-label="Remove">&#x2715;</button></span>';
        }).join('') + '</div>';
    }
    if (st.activeClasses.length) {
      html += '<div class="active-pills-row active-pills-row--class">' +
        st.activeClasses.map(function (cls) {
          return '<span class="active-pill active-pill--class" data-type="class" data-value="' + cls + '">' +
            cls + '<button class="active-pill-x" aria-label="Remove">&#x2715;</button></span>';
        }).join('') + '</div>';
    }
    el.innerHTML = html;
    el.style.display = html ? '' : 'none';
    el.querySelectorAll('.active-pill-x').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var pill = btn.closest('.active-pill');
        var type = pill.dataset.type;
        var value = pill.dataset.value;
        var s = getState();
        if (type === 'category') s.activeCategories = s.activeCategories.filter(function (c) { return c !== value; });
        else s.activeClasses = s.activeClasses.filter(function (c) { return c !== value; });
        buildFilterBtn();
        buildList(search ? search.value : '');
      });
    });
  }

  function buildFilterBtn() {
    var st = getState();
    var count = st.activeCategories.length + st.activeClasses.length;
    var badge = count > 0 ? '<span class="filter-badge">' + count + '</span>' : '';
    var active = count > 0 ? ' filter-open-btn--active' : '';
    var clearBtn = count > 0
      ? '<button class="filter-clear-inline" id="filter-clear-inline" aria-label="Clear filters">&#x2715;</button>'
      : '';
    // Replace only the filter button elements, keeping the sort button (first child)
    var container = document.getElementById('filter-chips');
    var sortBtn = document.getElementById('sort-btn');
    var countEl = document.getElementById('drug-count');
    container.innerHTML =
      '<button class="filter-open-btn' + active + '" id="filter-open-btn">Filter' + badge + '</button>' + clearBtn;
    container.insertBefore(sortBtn, container.firstChild);
    if (countEl) container.appendChild(countEl);
    document.getElementById('filter-open-btn').addEventListener('click', openFilterModal);
    if (count > 0) {
      document.getElementById('filter-clear-inline').addEventListener('click', function () {
        var s = getState();
        s.activeCategories = [];
        s.activeClasses = [];
        buildFilterBtn();
        buildList(search ? search.value : '');
      });
    }
    renderActivePills();
  }

  function renderModalResultCount() {
    var ds = getDataset();
    var count = ds.filter(matchesFilters).length;
    var el = document.getElementById('filter-result-count');
    el.textContent = count + '/' + ds.length + ' ' + modeNoun(true);
  }

  function renderModalActiveChips() {
    var chipsEl = document.getElementById('filter-active-chips');
    var st = getState();
    var html = '';
    st.activeCategories.forEach(function (cat) {
      html += '<span class="active-filter-chip" data-type="category" data-value="' + cat + '">' + cat +
        '<button class="active-filter-chip-x" aria-label="Remove">&#x2715;</button></span>';
    });
    st.activeClasses.forEach(function (cls) {
      html += '<span class="active-filter-chip" data-type="class" data-value="' + cls + '">' + cls +
        '<button class="active-filter-chip-x" aria-label="Remove">&#x2715;</button></span>';
    });
    chipsEl.innerHTML = html;
    chipsEl.style.display = html ? '' : 'none';
    renderModalResultCount();
  }

  function renderModalTabContent() {
    var el = document.getElementById('filter-tab-content');
    var scrollTop = el.scrollTop;
    var st = getState();
    if (filterTab === 'category') {
      var items = ['All'].concat(getAllCategories()).map(function (cat) {
        var isActive = cat === 'All' ? st.activeCategories.length === 0 : st.activeCategories.indexOf(cat) !== -1;
        return '<button class="filter-list-item' + (isActive ? ' filter-list-item--active' : '') +
          '" data-value="' + cat + '">' + cat + '</button>';
      }).join('');
      el.innerHTML = items;
    } else {
      var searchEl = el.querySelector('.filter-class-search');
      var searchVal = searchEl ? searchEl.value : '';
      var allCls = getAllClasses();
      var filtered = searchVal
        ? allCls.filter(function (c) { return c.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1; })
        : allCls;
      var classItems = ['All'].concat(filtered).map(function (cls) {
        var isActive = cls === 'All' ? st.activeClasses.length === 0 : st.activeClasses.indexOf(cls) !== -1;
        return '<button class="filter-list-item' + (isActive ? ' filter-list-item--active' : '') +
          '" data-value="' + cls + '">' + cls + '</button>';
      }).join('');
      el.innerHTML =
        '<input class="filter-class-search" type="search" placeholder="Search classes..." value="' +
          (searchVal || '') + '" autocomplete="off">' +
        classItems;
      el.querySelector('.filter-class-search').addEventListener('input', renderModalTabContent);
    }
    el.scrollTop = scrollTop;
  }

  function openFilterModal() {
    var modal = document.getElementById('filter-modal');
    modal.removeAttribute('hidden');
    var titleEl = modal.querySelector('.filter-modal-title');
    if (titleEl) titleEl.textContent = activeMode === 'home' ? 'Filter Home Meds' : 'Filter Drugs';
    renderModalActiveChips();
    renderModalResultCount();
    renderModalTabContent();
    document.body.style.overflow = 'hidden';
  }

  function closeFilterModal() {
    var modal = document.getElementById('filter-modal');
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    buildFilterBtn();
    buildList(search ? search.value : '');
  }

  function buildList(query) {
    var list = document.getElementById('drug-list');
    var q = (query || '').trim().toLowerCase();
    var ds = getDataset();
    var st = getState();
    var scored = [];
    ds.forEach(function (d) {
      if (!matchesFilters(d)) return;
      var score = matchScore(q, d.genericName, d.tradeNames);
      if (score === -1) return;
      scored.push({ drug: d, score: score });
    });
    scored.sort(function (a, b) {
      if (a.score !== b.score) return a.score - b.score;
      var cmp = a.drug.genericName.localeCompare(b.drug.genericName);
      return st.sortAsc ? cmp : -cmp;
    });
    var countEl = document.getElementById('drug-count');
    if (countEl) countEl.textContent = scored.length + '/' + ds.length + ' ' + modeNoun(true);
    list.innerHTML = scored.map(function (x) {
      var d = x.drug;
      var active = d.id === st.activeId ? ' picker-item--active' : '';
      return '<li class="picker-item' + active + '" data-id="' + d.id + '">' +
        '<span class="picker-generic">' + d.genericName + '</span>' +
        '<span class="picker-trade">' + d.tradeNames.join(', ') + '</span>' +
        '</li>';
    }).join('');
  }

  function isSubsequence(q, s) {
    var qi = 0;
    for (var i = 0; i < s.length && qi < q.length; i++) {
      if (s[i] === q[qi]) qi++;
    }
    return qi === q.length;
  }

  // Lower score = better match. -1 = no match.
  function matchScore(q, generic, tradeNames) {
    if (!q) return 0;
    var g = generic.toLowerCase();
    var trades = tradeNames.map(function (t) { return t.toLowerCase(); });
    var tradeJoined = trades.join(', ');

    if (g === q) return 0;
    if (g.indexOf(q) === 0) return 1;
    for (var i = 0; i < trades.length; i++) {
      if (trades[i].indexOf(q) === 0) return 2;
    }
    if (g.indexOf(q) !== -1) return 3;
    if (tradeJoined.indexOf(q) !== -1) return 4;
    if (isSubsequence(q, g)) return 5;
    if (isSubsequence(q, tradeJoined)) return 6;
    if (q.length >= 4) {
      for (var j = 0; j < q.length; j++) {
        var variant = q.slice(0, j) + q.slice(j + 1);
        if (g.indexOf(variant) !== -1 || tradeJoined.indexOf(variant) !== -1) return 7;
      }
    }
    return -1;
  }

  function navigateTo(drug) {
    getState().activeId = drug.id;
    renderActiveCard();
    buildList(search.value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function lookupDrugById(id) {
    if (!id) return null;
    var pools = [DRUGS];
    if (typeof home_meds !== 'undefined') pools.push(home_meds);
    for (var i = 0; i < pools.length; i++) {
      var hit = pools[i].find(function (d) { return d.id === id; });
      if (hit) return hit;
    }
    return null;
  }

  function bindCardInteractions(rootEl) {
    if (!rootEl || rootEl.__cardInteractionsBound) return;
    rootEl.__cardInteractionsBound = true;

    function resetRouteTabs(block) {
      var routeTabsEl = block.querySelector('.route-tabs');
      if (!routeTabsEl) return;
      routeTabsEl.querySelectorAll('.route-tab').forEach(function (t, i) {
        t.classList.toggle('route-tab--active', i === 0);
      });
      var firstRoute = routeTabsEl.querySelector('.route-tab').dataset.route;
      block.querySelectorAll('.dose-route[data-route]').forEach(function (r) {
        r.style.display = r.dataset.route === firstRoute ? '' : 'none';
      });
    }

    function showDoseBlocksForPop(blocks, pop) {
      blocks.forEach(function (block) {
        var show = block.dataset.dosePop === pop;
        block.style.display = show ? '' : 'none';
        if (show) resetRouteTabs(block);
      });
    }

    function updateSameDoseNote(section, indication) {
      var card = section.closest('[data-drug-id]');
      var drug = card ? lookupDrugById(card.dataset.drugId) : null;
      if (!drug) return;
      var sameDoseNotes = buildSameDoseNotes(drug);
      var noteEl = section.querySelector('.dose-sameas-note');
      if (noteEl) {
        var oldWrap = noteEl.closest('.dose-routes-wrap');
        if (oldWrap) {
          var orphanRoutes = oldWrap.querySelector('.dose-routes');
          oldWrap.parentNode.insertBefore(orphanRoutes, oldWrap);
          oldWrap.remove();
        } else {
          noteEl.remove();
        }
      }
      if (!sameDoseNotes[indication]) return;
      var doseBlock = section.querySelector('.dose-block[data-dose-indication="' + indication + '"]');
      if (!doseBlock) return;
      var note = document.createElement('div');
      note.className = 'dose-sameas-note';
      note.setAttribute('data-sameas-for', indication);
      note.textContent = 'Also applies to: ' + sameDoseNotes[indication].join(', ');
      var wrap = document.createElement('div');
      wrap.className = 'dose-routes-wrap';
      var existingRoutes = doseBlock.querySelector('.dose-routes');
      doseBlock.insertBefore(wrap, existingRoutes);
      wrap.appendChild(note);
      wrap.appendChild(existingRoutes);
    }

    rootEl.addEventListener('click', function (e) {
      var doseChip = e.target.closest('.dose-chip');
      if (doseChip) {
        var indication = doseChip.dataset.indication;
        var section = doseChip.closest('.section--dose');

        section.querySelectorAll('.dose-chip').forEach(function (t) {
          t.classList.toggle('dose-chip--active', t === doseChip);
        });
        section.querySelectorAll('[data-dose-indication]').forEach(function (block) {
          block.style.display = block.dataset.doseIndication === indication ? '' : 'none';
        });

        var popTabsEl = section.querySelector('.pop-tabs[data-dose-indication="' + indication + '"]');
        if (popTabsEl) {
          popTabsEl.querySelectorAll('.pop-tab').forEach(function (t, i) {
            t.classList.toggle('pop-tab--active', i === 0);
          });
          var firstPop = popTabsEl.querySelector('.pop-tab').dataset.pop;
          showDoseBlocksForPop(
            section.querySelectorAll('.dose-block[data-dose-indication="' + indication + '"]'),
            firstPop
          );
        }

        updateSameDoseNote(section, indication);
        return;
      }

      var popTab = e.target.closest('.pop-tab');
      if (popTab) {
        var pop = popTab.dataset.pop;
        var popTabsEl2 = popTab.closest('.pop-tabs');
        var popIndication = popTabsEl2.dataset.doseIndication;
        var popSection = popTab.closest('.section--dose');

        popTabsEl2.querySelectorAll('.pop-tab').forEach(function (t) {
          t.classList.toggle('pop-tab--active', t === popTab);
        });
        var selector = popIndication
          ? '.dose-block[data-dose-indication="' + popIndication + '"]'
          : '.dose-block';
        showDoseBlocksForPop(popSection.querySelectorAll(selector), pop);
        return;
      }

      var routeTab = e.target.closest('.route-tab');
      if (routeTab) {
        var route = routeTab.dataset.route;
        var block = routeTab.closest('.dose-block');
        routeTab.closest('.route-tabs').querySelectorAll('.route-tab').forEach(function (t) {
          t.classList.toggle('route-tab--active', t === routeTab);
        });
        block.querySelectorAll('.dose-route[data-route]').forEach(function (r) {
          r.style.display = r.dataset.route === route ? '' : 'none';
        });
      }
    });
  }

  function renderActiveCard() {
    var ds = getDataset();
    var id = getState().activeId;
    var rec = ds.find(function (r) { return r.id === id; }) || ds[0];
    if (!rec) {
      cardContainer.innerHTML = '<article class="card card--empty"><p class="summary-text">No entries available.</p></article>';
      return;
    }
    getState().activeId = rec.id;
    cardContainer.innerHTML = activeMode === 'home' ? renderHomeMedCard(rec) : renderCard(rec);
  }

  var search;

  function init() {
    var list = document.getElementById('drug-list');
    search = document.getElementById('drug-search');
    var sidebar = document.getElementById('picker-sidebar');
    cardContainer = document.getElementById('card-container');

    function openPicker() {
      sidebar.classList.add('picker-sidebar--open');
    }
    function closePicker() {
      sidebar.classList.remove('picker-sidebar--open');
      search.value = '';
      buildList('');
      search.blur();
    }

    var desktopMQ = window.matchMedia('(min-width: 768px)');
    search.addEventListener('focus', function() {
      if (!desktopMQ.matches) openPicker();
    });

    list.addEventListener('click', function (e) {
      var item = e.target.closest('.picker-item');
      if (!item) return;
      var st = getState();
      st.activeId = item.dataset.id;
      st.searchQuery = '';
      renderActiveCard();
      search.value = '';
      buildList('');
      sidebar.classList.remove('picker-sidebar--open');
      search.blur();

      // On mobile, scroll card into view below sticky header
      if (window.innerWidth < 768) {
        var headerH = sidebar.getBoundingClientRect().height;
        var cardTop = cardContainer.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: cardTop - headerH, behavior: 'smooth' });
      }
    });

    search.addEventListener('input', function () {
      getState().searchQuery = search.value;
      buildList(search.value);
    });

    // Mode toggle wiring
    function applyModeUI() {
      var st = getState();
      document.querySelectorAll('.mode-toggle-btn').forEach(function (b) {
        var on = b.dataset.mode === activeMode;
        b.classList.toggle('mode-toggle-btn--active', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      search.placeholder = activeMode === 'home' ? 'Search home meds...' : 'Search drugs...';
      search.value = st.searchQuery || '';
      var sortLabel = document.getElementById('sort-label');
      if (sortLabel) sortLabel.textContent = st.sortAsc ? 'Z–A' : 'A–Z';
    }
    function setMode(mode) {
      if (mode === activeMode) return;
      if (mode === 'home' && !HOME_MEDS.length) return;
      // persist outgoing search
      getState().searchQuery = search.value;
      activeMode = mode;
      try { localStorage.setItem('drugCards.mode', mode); } catch (_) {}
      applyModeUI();
      buildFilterBtn();
      buildList(search.value);
      renderActiveCard();
      window.scrollTo({ top: 0 });
    }
    document.getElementById('mode-toggle').addEventListener('click', function (e) {
      var btn = e.target.closest('.mode-toggle-btn');
      if (btn) setMode(btn.dataset.mode);
    });

    // Inject filter modal into body
    var modalEl = document.createElement('div');
    modalEl.id = 'filter-modal';
    modalEl.className = 'filter-modal';
    modalEl.setAttribute('hidden', '');
    modalEl.innerHTML =
      '<div class="filter-modal-inner">' +
        '<div class="filter-modal-header">' +
          '<span class="filter-modal-title">Filter Drugs</span>' +
          '<button class="filter-modal-close" id="filter-modal-close">&#x2715;</button>' +
        '</div>' +
        '<div class="filter-active-chips" id="filter-active-chips" style="display:none"></div>' +
        '<div class="filter-result-count" id="filter-result-count"></div>' +
        '<div class="filter-tab-bar" id="filter-tab-bar">' +
          '<button class="filter-tab filter-tab--active" data-tab="category">Category</button>' +
          '<button class="filter-tab" data-tab="class">Class</button>' +
        '</div>' +
        '<div class="filter-tab-content" id="filter-tab-content"></div>' +
        '<div class="filter-modal-footer">' +
          '<button class="filter-clear-btn" id="filter-clear-btn">Clear All</button>' +
          '<button class="filter-apply-btn" id="filter-apply-btn">Apply</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modalEl);

    // Modal: close / apply
    document.getElementById('filter-modal-close').addEventListener('click', closeFilterModal);
    document.getElementById('filter-apply-btn').addEventListener('click', closeFilterModal);

    // Modal: clear all
    document.getElementById('filter-clear-btn').addEventListener('click', function () {
      var s = getState();
      s.activeCategories = [];
      s.activeClasses = [];
      renderModalActiveChips();
      renderModalTabContent();
    });

    // Modal: click outside inner panel closes
    modalEl.addEventListener('click', function (e) {
      if (e.target === modalEl) closeFilterModal();
    });

    // Modal: tab switching
    document.getElementById('filter-tab-bar').addEventListener('click', function (e) {
      var tab = e.target.closest('.filter-tab');
      if (!tab) return;
      filterTab = tab.dataset.tab;
      document.querySelectorAll('.filter-tab').forEach(function (t) {
        t.classList.toggle('filter-tab--active', t === tab);
      });
      renderModalTabContent();
    });

    // Modal: item selection and active-chip removal
    modalEl.addEventListener('click', function (e) {
      var item = e.target.closest('.filter-list-item');
      if (item) {
        var val = item.dataset.value;
        var s = getState();
        if (filterTab === 'category') {
          if (val === 'All') {
            s.activeCategories = [];
          } else {
            var idx = s.activeCategories.indexOf(val);
            if (idx === -1) s.activeCategories.push(val);
            else s.activeCategories.splice(idx, 1);
          }
        } else {
          if (val === 'All') {
            s.activeClasses = [];
          } else {
            var idx = s.activeClasses.indexOf(val);
            if (idx === -1) s.activeClasses.push(val);
            else s.activeClasses.splice(idx, 1);
          }
        }
        renderModalActiveChips();
        renderModalTabContent();
        return;
      }
      var chipX = e.target.closest('.active-filter-chip-x');
      if (chipX) {
        var chip = chipX.closest('.active-filter-chip');
        var chipVal = chip.dataset.value;
        var s2 = getState();
        if (chip.dataset.type === 'category') {
          s2.activeCategories = s2.activeCategories.filter(function (c) { return c !== chipVal; });
        } else {
          s2.activeClasses = s2.activeClasses.filter(function (c) { return c !== chipVal; });
        }
        renderModalActiveChips();
        renderModalTabContent();
      }
    });

    document.getElementById('btn-prev').addEventListener('click', function (e) {
      e.stopPropagation();
      var ds = getDataset();
      if (!ds.length) return;
      var idx = ds.findIndex(function (d) { return d.id === getState().activeId; });
      navigateTo(ds[(idx - 1 + ds.length) % ds.length]);
    });

    document.getElementById('btn-next').addEventListener('click', function (e) {
      e.stopPropagation();
      if (sidebar.classList.contains('picker-sidebar--open')) {
        closePicker();
      } else {
        var ds = getDataset();
        if (!ds.length) return;
        var idx = ds.findIndex(function (d) { return d.id === getState().activeId; });
        navigateTo(ds[(idx + 1) % ds.length]);
      }
    });

    document.getElementById('sort-btn').addEventListener('click', function () {
      var s = getState();
      s.sortAsc = !s.sortAsc;
      document.getElementById('sort-label').textContent = s.sortAsc ? 'Z–A' : 'A–Z';
      buildList(search.value);
    });

    bindCardInteractions(cardContainer);

    applyModeUI();
    buildFilterBtn();
    buildList(search.value);
    renderActiveCard();
  }

  var booted = false;
  function bootIfUnlocked() {
    if (booted) return;
    var s = window.AUTH && window.AUTH.state;
    // Boot the app as soon as the user is signed in, paid or not, so the
    // drug cards render behind the unpaid checkout modal. The auth-gate
    // overlay is what actually blocks unpaid users from interacting.
    if (!s || !s.ready || !s.user) return;
    booted = true;
    init();
  }

  // Expose for the auth-gate landing demo (epinephrine card embed)
  window.renderDrugCard = renderCard;
  window.renderHomeMedCard = renderHomeMedCard;
  window.bindCardInteractions = bindCardInteractions;

  if (window.AUTH) {
    window.AUTH.onChange(bootIfUnlocked);
  } else {
    // Fallback: auth.js failed to load — render the app anyway so the site isn't broken.
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }
})();
