(function () {
  var activeDrugId = DRUGS[0].id;
  var activeCategories = [];
  var activeClasses = [];
  var filterTab = 'category';
  var sortAsc = true;

  var allCategories = Array.from(new Set(DRUGS.reduce(function (acc, d) {
    return acc.concat(d.category || []);
  }, []))).sort();
  var allClasses = Array.from(new Set(DRUGS.reduce(function (acc, d) {
    return acc.concat(d.classes || []);
  }, []))).sort();

  function matchesFilters(d) {
    if (activeCategories.length && !activeCategories.every(function (c) { return (d.category || []).indexOf(c) !== -1; })) return false;
    if (activeClasses.length    && !activeClasses.every(function (c) { return (d.classes   || []).indexOf(c) !== -1; })) return false;
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

    var sameDoseMap = {};
    drug.indications.forEach(function (ind) {
      if (ind.sameDoseAs) sameDoseMap[ind.name] = ind.sameDoseAs;
    });

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

    // sameDoseAs note for first active tab
    var sameDoseNotes = {};
    Object.keys(sameDoseMap).forEach(function (alias) {
      var target = sameDoseMap[alias];
      if (!sameDoseNotes[target]) sameDoseNotes[target] = [];
      sameDoseNotes[target].push(alias);
    });

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

    document.getElementById('card-container').innerHTML =
      '<article class="card">' +
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
      '</article>';
  }

  function renderActivePills() {
    var el = document.getElementById('active-filter-pills');
    if (!el) return;
    var html = '';
    if (activeCategories.length) {
      html += '<div class="active-pills-row active-pills-row--category">' +
        activeCategories.map(function (cat) {
          return '<span class="active-pill active-pill--category" data-type="category" data-value="' + cat + '">' +
            cat + '<button class="active-pill-x" aria-label="Remove">&#x2715;</button></span>';
        }).join('') + '</div>';
    }
    if (activeClasses.length) {
      html += '<div class="active-pills-row active-pills-row--class">' +
        activeClasses.map(function (cls) {
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
        if (type === 'category') activeCategories = activeCategories.filter(function (c) { return c !== value; });
        else activeClasses = activeClasses.filter(function (c) { return c !== value; });
        buildFilterBtn();
        buildList(search ? search.value : '');
      });
    });
  }

  function buildFilterBtn() {
    var count = activeCategories.length + activeClasses.length;
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
        activeCategories = [];
        activeClasses = [];
        buildFilterBtn();
        buildList(search ? search.value : '');
      });
    }
    renderActivePills();
  }

  function renderModalResultCount() {
    var count = DRUGS.filter(matchesFilters).length;
    var el = document.getElementById('filter-result-count');
    el.textContent = count + '/' + DRUGS.length + ' drugs';
  }

  function renderModalActiveChips() {
    var chipsEl = document.getElementById('filter-active-chips');
    var html = '';
    activeCategories.forEach(function (cat) {
      html += '<span class="active-filter-chip" data-type="category" data-value="' + cat + '">' + cat +
        '<button class="active-filter-chip-x" aria-label="Remove">&#x2715;</button></span>';
    });
    activeClasses.forEach(function (cls) {
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
    if (filterTab === 'category') {
      var items = ['All'].concat(allCategories).map(function (cat) {
        var isActive = cat === 'All' ? activeCategories.length === 0 : activeCategories.indexOf(cat) !== -1;
        return '<button class="filter-list-item' + (isActive ? ' filter-list-item--active' : '') +
          '" data-value="' + cat + '">' + cat + '</button>';
      }).join('');
      el.innerHTML = items;
    } else {
      var searchEl = el.querySelector('.filter-class-search');
      var searchVal = searchEl ? searchEl.value : '';
      var filtered = searchVal
        ? allClasses.filter(function (c) { return c.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1; })
        : allClasses;
      var classItems = ['All'].concat(filtered).map(function (cls) {
        var isActive = cls === 'All' ? activeClasses.length === 0 : activeClasses.indexOf(cls) !== -1;
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
    var filtered = DRUGS.filter(function (d) {
      if (!matchesFilters(d)) return false;
      var trade = d.tradeNames.join(', ');
      return fuzzyMatch(q, d.genericName) || fuzzyMatch(q, trade);
    }).slice().sort(function (a, b) {
      var cmp = a.genericName.localeCompare(b.genericName);
      return sortAsc ? cmp : -cmp;
    });
    var countEl = document.getElementById('drug-count');
    if (countEl) countEl.textContent = filtered.length + '/' + DRUGS.length + ' drugs';
    list.innerHTML = filtered.map(function (d) {
      var active = d.id === activeDrugId ? ' picker-item--active' : '';
      return '<li class="picker-item' + active + '" data-id="' + d.id + '">' +
        '<span class="picker-generic">' + d.genericName + '</span>' +
        '<span class="picker-trade">' + d.tradeNames.join(', ') + '</span>' +
        '</li>';
    }).join('');
  }

  function fuzzyMatch(q, str) {
    if (!q) return true;
    var s = str.toLowerCase();
    if (s.indexOf(q) !== -1) return true;
    // subsequence match
    var qi = 0;
    for (var i = 0; i < s.length && qi < q.length; i++) {
      if (s[i] === q[qi]) qi++;
    }
    if (qi === q.length) return true;
    // 1-char typo tolerance for queries >= 4 chars
    if (q.length >= 4) {
      for (var j = 0; j < q.length; j++) {
        var variant = q.slice(0, j) + q.slice(j + 1);
        if (s.indexOf(variant) !== -1) return true;
      }
    }
    return false;
  }

  function navigateTo(drug) {
    activeDrugId = drug.id;
    renderCard(drug);
    buildList(search.value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  var search;

  function init() {
    var list = document.getElementById('drug-list');
    search = document.getElementById('drug-search');
    var sidebar = document.getElementById('picker-sidebar');

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
      activeDrugId = item.dataset.id;
      var drug = DRUGS.find(function (d) { return d.id === activeDrugId; });
      renderCard(drug);
      search.value = '';
      buildList('');
      sidebar.classList.remove('picker-sidebar--open');
      search.blur();

      // On mobile, scroll card into view below sticky header
      if (window.innerWidth < 768) {
        var headerH = sidebar.getBoundingClientRect().height;
        var cardTop = document.getElementById('card-container').getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: cardTop - headerH, behavior: 'smooth' });
      }
    });

    search.addEventListener('input', function () {
      buildList(search.value);
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
      activeCategories = [];
      activeClasses = [];
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
        if (filterTab === 'category') {
          if (val === 'All') {
            activeCategories = [];
          } else {
            var idx = activeCategories.indexOf(val);
            if (idx === -1) activeCategories.push(val);
            else activeCategories.splice(idx, 1);
          }
        } else {
          if (val === 'All') {
            activeClasses = [];
          } else {
            var idx = activeClasses.indexOf(val);
            if (idx === -1) activeClasses.push(val);
            else activeClasses.splice(idx, 1);
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
        if (chip.dataset.type === 'category') {
          activeCategories = activeCategories.filter(function (c) { return c !== chipVal; });
        } else {
          activeClasses = activeClasses.filter(function (c) { return c !== chipVal; });
        }
        renderModalActiveChips();
        renderModalTabContent();
      }
    });

    document.getElementById('btn-prev').addEventListener('click', function (e) {
      e.stopPropagation();
      var idx = DRUGS.findIndex(function (d) { return d.id === activeDrugId; });
      navigateTo(DRUGS[(idx - 1 + DRUGS.length) % DRUGS.length]);
    });

    document.getElementById('btn-next').addEventListener('click', function (e) {
      e.stopPropagation();
      if (sidebar.classList.contains('picker-sidebar--open')) {
        closePicker();
      } else {
        var idx = DRUGS.findIndex(function (d) { return d.id === activeDrugId; });
        navigateTo(DRUGS[(idx + 1) % DRUGS.length]);
      }
    });

    document.getElementById('sort-btn').addEventListener('click', function () {
      sortAsc = !sortAsc;
      document.getElementById('sort-label').textContent = sortAsc ? 'Z–A' : 'A–Z';
      buildList(search.value);
    });

    // Dose chip delegation
    document.getElementById('card-container').addEventListener('click', function (e) {
      var tab = e.target.closest('.dose-chip');
      if (!tab) return;
      var indication = tab.dataset.indication;
      var section = tab.closest('.section--dose');

      section.querySelectorAll('.dose-chip').forEach(function (t) {
        t.classList.toggle('dose-chip--active', t === tab);
      });
      section.querySelectorAll('[data-dose-indication]').forEach(function (block) {
        block.style.display = block.dataset.doseIndication === indication ? '' : 'none';
      });

      // Reset pop tabs for newly active indication to first population
      var popTabsEl = section.querySelector('.pop-tabs[data-dose-indication="' + indication + '"]');
      if (popTabsEl) {
        popTabsEl.querySelectorAll('.pop-tab').forEach(function (t, i) {
          t.classList.toggle('pop-tab--active', i === 0);
        });
        var firstPop = popTabsEl.querySelector('.pop-tab').dataset.pop;
        section.querySelectorAll('.dose-block[data-dose-indication="' + indication + '"]').forEach(function (block) {
          var show = block.dataset.dosePop === firstPop;
          block.style.display = show ? '' : 'none';
          // Reset route tabs when switching indications
          if (show) {
            var routeTabsEl = block.querySelector('.route-tabs');
            if (routeTabsEl) {
              routeTabsEl.querySelectorAll('.route-tab').forEach(function (t, i) {
                t.classList.toggle('route-tab--active', i === 0);
              });
              var firstRoute = routeTabsEl.querySelector('.route-tab').dataset.route;
              block.querySelectorAll('.dose-route[data-route]').forEach(function (r) {
                r.style.display = r.dataset.route === firstRoute ? '' : 'none';
              });
            }
          }
        });
      }

      // Update sameDoseAs note
      var drug = DRUGS.find(function (d) { return d.id === activeDrugId; });
      var sameDoseNotes = {};
      drug.indications.forEach(function (ind) {
        if (ind.sameDoseAs) {
          if (!sameDoseNotes[ind.sameDoseAs]) sameDoseNotes[ind.sameDoseAs] = [];
          sameDoseNotes[ind.sameDoseAs].push(ind.name);
        }
      });
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
      if (sameDoseNotes[indication]) {
        var note = document.createElement('div');
        note.className = 'dose-sameas-note';
        note.setAttribute('data-sameas-for', indication);
        note.textContent = 'Also applies to: ' + sameDoseNotes[indication].join(', ');
        var doseBlock = section.querySelector('.dose-block[data-dose-indication="' + indication + '"]');
        if (doseBlock) {
          var wrap = document.createElement('div');
          wrap.className = 'dose-routes-wrap';
          var existingRoutes = doseBlock.querySelector('.dose-routes');
          doseBlock.insertBefore(wrap, existingRoutes);
          wrap.appendChild(note);
          wrap.appendChild(existingRoutes);
        }
      }
    });

    // Pop tab delegation
    document.getElementById('card-container').addEventListener('click', function (e) {
      var popTab = e.target.closest('.pop-tab');
      if (!popTab) return;
      var pop = popTab.dataset.pop;
      var popTabsEl = popTab.closest('.pop-tabs');
      var indication = popTabsEl.dataset.doseIndication;
      var section = popTab.closest('.section--dose');

      popTabsEl.querySelectorAll('.pop-tab').forEach(function (t) {
        t.classList.toggle('pop-tab--active', t === popTab);
      });
      var selector = indication
        ? '.dose-block[data-dose-indication="' + indication + '"]'
        : '.dose-block';
      section.querySelectorAll(selector).forEach(function (block) {
        var show = block.dataset.dosePop === pop;
        block.style.display = show ? '' : 'none';
        // Reset route tabs to first active when switching populations
        if (show) {
          var routeTabsEl = block.querySelector('.route-tabs');
          if (routeTabsEl) {
            routeTabsEl.querySelectorAll('.route-tab').forEach(function (t, i) {
              t.classList.toggle('route-tab--active', i === 0);
            });
            var firstRoute = routeTabsEl.querySelector('.route-tab').dataset.route;
            block.querySelectorAll('.dose-route[data-route]').forEach(function (r) {
              r.style.display = r.dataset.route === firstRoute ? '' : 'none';
            });
          }
        }
      });
    });

    // Route tab delegation
    document.getElementById('card-container').addEventListener('click', function (e) {
      var routeTab = e.target.closest('.route-tab');
      if (!routeTab) return;
      var route = routeTab.dataset.route;
      var block = routeTab.closest('.dose-block');

      routeTab.closest('.route-tabs').querySelectorAll('.route-tab').forEach(function (t) {
        t.classList.toggle('route-tab--active', t === routeTab);
      });
      block.querySelectorAll('.dose-route[data-route]').forEach(function (r) {
        r.style.display = r.dataset.route === route ? '' : 'none';
      });
    });

    buildFilterBtn();
    buildList('');
    renderCard(DRUGS[0]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
