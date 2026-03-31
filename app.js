(function () {
  var activeDrugId = DRUGS[0].id;
  var activeCategory = null;
  var activeClass = null;
  var filterTab = 'category';
  var sortAsc = true;

  var allCategories = Array.from(new Set(DRUGS.reduce(function (acc, d) {
    return acc.concat(d.category || []);
  }, []))).sort();
  var allClasses = Array.from(new Set(DRUGS.reduce(function (acc, d) {
    return acc.concat(d.classes || []);
  }, []))).sort();

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
        '<div class="moa-separator"></div>' +
        '<p class="moa-brief">' + m.brief + '</p>' +
      '</div>';
    }).join('');

    // --- Indications ---
    var indicationsHTML = drug.indications.map(function (ind) {
      return '<li>' + ind.name + '</li>';
    }).join('');

    // --- Contraindications ---
    var contraindicationsHTML = drug.contraindications.map(function (c) {
      return '<li>' + c.text + (c.relative ? ' <span class="tag">relative</span>' : '') + '</li>';
    }).join('');

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
      tabsHTML = '<div class="dose-chips">' +
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
      var hidden = needsTabs && ind.name !== firstInd ? ' style="display:none"' : '';

      // Indication-level notes
      if (ind.notes && ind.notes.length > 0) {
        doseBlocksHTML += '<div class="indication-notes"' + dataAttr + hidden + '>' +
          ind.notes.map(function (n) {
            return '<span class="indication-note">' + n + '</span>';
          }).join('') +
        '</div>';
      }

      ind.doses.forEach(function (d) {
        var qualifierHTML = d.qualifier ? ' <span class="dose-qualifier">' + d.qualifier + '</span>' : '';
        var formulationHTML = d.formulation ? '<span class="dose-formulation">' + d.formulation + '</span>' : '';

        var routesHTML = (d.routes || []).map(function (r) {
          var viaLabel = (r.via || []).join(' / ');
          var repeatHTML = r.repeat ? '<span class="dose-repeat">' + r.repeat + '</span>' : '';
          var maxDoseHTML = r.maxDose ? '<span class="dose-max">Max: ' + r.maxDose + '</span>' : '';
          var routeNotesHTML = (r.notes || []).map(function (n) {
            return '<span class="dose-note">' + n + '</span>';
          }).join('');

          var pharmaHTML = '';
          if (r.onset || r.duration) {
            pharmaHTML = '<div class="pharma-inline">' +
              (r.onset ? '<span>Onset <strong>' + r.onset + '</strong></span>' : '') +
              (r.onset && r.duration ? '<span class="pharma-sep">&middot;</span>' : '') +
              (r.duration ? '<span>Duration <strong>' + r.duration + '</strong></span>' : '') +
            '</div>';
          }

          return '<div class="dose-route">' +
            '<span class="dose-via">' + viaLabel + '</span>' +
            '<div class="dose-route-body">' +
              '<span class="dose-amt">' + r.amount + '</span>' +
              repeatHTML + maxDoseHTML + routeNotesHTML +
              pharmaHTML +
            '</div>' +
          '</div>';
        }).join('');

        var genNotesHTML = (d.notes || []).filter(Boolean).map(function (n) {
          return '<span class="dose-note">' + n + '</span>';
        }).join('');

        doseBlocksHTML += '<div class="dose-block"' + dataAttr + hidden + '>' +
          '<div class="dose-header">' +
            '<span class="dose-pop">' + d.population + qualifierHTML + '</span>' +
            (formulationHTML ? '<div>' + formulationHTML + '</div>' : '') +
          '</div>' +
          '<div class="dose-routes">' + routesHTML + '</div>' +
          (genNotesHTML ? '<div class="dose-gen-notes">' + genNotesHTML + '</div>' : '') +
        '</div>';
      });
    });

    // sameDoseAs note for the first visible indication
    var sameDoseHTML = '';
    if (needsTabs && sameDoseNotes[firstInd]) {
      sameDoseHTML = '<div class="dose-sameas-note" data-sameas-for="' + firstInd + '">Also applies to: ' + sameDoseNotes[firstInd].join(', ') + '</div>';
    }

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

        '<section class="section">' +
          '<h2 class="section-label section-label--muted">Summary</h2>' +
          '<p class="summary-text">' + drug.summary + '</p>' +
        '</section>' +

        '<section class="section">' +
          '<h2 class="section-label section-label--blue">Mechanism of Action</h2>' +
          moaHTML +
        '</section>' +

        '<div class="two-col">' +
          '<section class="section">' +
            '<h2 class="section-label section-label--green">Indications</h2>' +
            '<ul class="checklist">' + indicationsHTML + '</ul>' +
          '</section>' +
          '<section class="section">' +
            '<h2 class="section-label section-label--red">Contraindications</h2>' +
            '<ul class="checklist checklist--x">' + contraindicationsHTML + '</ul>' +
          '</section>' +
        '</div>' +

        '<section class="section section--dose">' +
          '<h2 class="section-label section-label--blue">Dose &amp; Route</h2>' +
          tabsHTML +
          doseBlocksHTML +
          sameDoseHTML +
        '</section>' +

        '<section class="section">' +
          '<h2 class="section-label section-label--orange">Adverse Effects</h2>' +
          '<ul class="pill-list">' + adverseHTML + '</ul>' +
        '</section>' +

        '<section class="section">' +
          '<h2 class="section-label section-label--orange">Precautions</h2>' +
          '<ul class="precaution-list">' + precautionsHTML + '</ul>' +
        '</section>' +

        '<footer class="card-footer">' +
          '<p>Always follow your local protocol · For educational use only</p>' +
        '</footer>' +
      '</article>';
  }

  function buildFilterBtn() {
    var count = (activeCategory ? 1 : 0) + (activeClass ? 1 : 0);
    var badge = count > 0 ? '<span class="filter-badge">' + count + '</span>' : '';
    var active = count > 0 ? ' filter-open-btn--active' : '';
    var clearBtn = count > 0
      ? '<button class="filter-clear-inline" id="filter-clear-inline" aria-label="Clear filters">&#x2715;</button>'
      : '';
    // Replace only the filter button elements, keeping the sort button (first child)
    var container = document.getElementById('filter-chips');
    var sortBtn = document.getElementById('sort-btn');
    container.innerHTML =
      '<button class="filter-open-btn' + active + '" id="filter-open-btn">Filter' + badge + '</button>' + clearBtn;
    container.insertBefore(sortBtn, container.firstChild);
    document.getElementById('filter-open-btn').addEventListener('click', openFilterModal);
    if (count > 0) {
      document.getElementById('filter-clear-inline').addEventListener('click', function () {
        activeCategory = null;
        activeClass = null;
        buildFilterBtn();
        buildList(search ? search.value : '');
      });
    }
  }

  function renderModalResultCount() {
    var count = DRUGS.filter(function (d) {
      if (activeCategory && (d.category || []).indexOf(activeCategory) === -1) return false;
      if (activeClass    && (d.classes   || []).indexOf(activeClass)    === -1) return false;
      return true;
    }).length;
    var el = document.getElementById('filter-result-count');
    el.textContent = count + ' of ' + DRUGS.length + ' drugs';
  }

  function renderModalActiveChips() {
    var chipsEl = document.getElementById('filter-active-chips');
    var html = '';
    if (activeCategory) {
      html += '<span class="active-filter-chip" data-type="category">' + activeCategory +
        '<button class="active-filter-chip-x" aria-label="Remove">&#x2715;</button></span>';
    }
    if (activeClass) {
      html += '<span class="active-filter-chip" data-type="class">' + activeClass +
        '<button class="active-filter-chip-x" aria-label="Remove">&#x2715;</button></span>';
    }
    chipsEl.innerHTML = html;
    chipsEl.style.display = html ? '' : 'none';
    renderModalResultCount();
  }

  function renderModalTabContent() {
    var el = document.getElementById('filter-tab-content');
    if (filterTab === 'category') {
      var items = ['All'].concat(allCategories).map(function (cat) {
        var isActive = cat === 'All' ? !activeCategory : activeCategory === cat;
        return '<button class="filter-list-item' + (isActive ? ' filter-list-item--active' : '') +
          '" data-value="' + cat + '">' + cat + '</button>';
      }).join('');
      el.innerHTML = items;
    } else {
      var searchVal = el.querySelector('.filter-class-search') ?
        el.querySelector('.filter-class-search').value : '';
      var filtered = searchVal
        ? allClasses.filter(function (c) { return c.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1; })
        : allClasses;
      var classItems = ['All'].concat(filtered).map(function (cls) {
        var isActive = cls === 'All' ? !activeClass : activeClass === cls;
        return '<button class="filter-list-item' + (isActive ? ' filter-list-item--active' : '') +
          '" data-value="' + cls + '">' + cls + '</button>';
      }).join('');
      el.innerHTML =
        '<input class="filter-class-search" type="search" placeholder="Search classes..." value="' +
          (searchVal || '') + '" autocomplete="off">' +
        classItems;
      el.querySelector('.filter-class-search').addEventListener('input', renderModalTabContent);
      el.querySelector('.filter-class-search').focus();
    }
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
      if (activeCategory && (d.category || []).indexOf(activeCategory) === -1) return false;
      if (activeClass    && (d.classes   || []).indexOf(activeClass)    === -1) return false;
      var trade = d.tradeNames.join(', ');
      return fuzzyMatch(q, d.genericName) || fuzzyMatch(q, trade);
    }).slice().sort(function (a, b) {
      var cmp = a.genericName.localeCompare(b.genericName);
      return sortAsc ? cmp : -cmp;
    });
    list.innerHTML = filtered.map(function (d) {
      var active = d.id === activeDrugId ? ' picker-item--active' : '';
      return '<li class="picker-item' + active + '" data-id="' + d.id + '">' +
        d.genericName +
        '<span class="picker-trade"> ' + d.tradeNames.join(', ') + '</span>' +
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

  function setToggleLabel(drug) {
    var label = document.getElementById('picker-toggle-label');
    if (label) label.textContent = drug.genericName;
  }

  function navigateTo(drug) {
    activeDrugId = drug.id;
    renderCard(drug);
    buildList(search.value);
    setToggleLabel(drug);
  }

  var search;

  function init() {
    var list = document.getElementById('drug-list');
    search = document.getElementById('drug-search');
    var sidebar = document.getElementById('picker-sidebar');
    var toggle = document.getElementById('picker-toggle');

    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('picker-sidebar--open');
    });

    list.addEventListener('click', function (e) {
      var item = e.target.closest('.picker-item');
      if (!item) return;
      activeDrugId = item.dataset.id;
      var drug = DRUGS.find(function (d) { return d.id === activeDrugId; });
      renderCard(drug);
      buildList(search.value);
      setToggleLabel(drug);
      sidebar.classList.remove('picker-sidebar--open');

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
      activeCategory = null;
      activeClass = null;
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
          activeCategory = (val === 'All' || activeCategory === val) ? null : val;
        } else {
          activeClass = (val === 'All' || activeClass === val) ? null : val;
        }
        renderModalActiveChips();
        renderModalTabContent();
        return;
      }
      var chipX = e.target.closest('.active-filter-chip-x');
      if (chipX) {
        var chip = chipX.closest('.active-filter-chip');
        if (chip.dataset.type === 'category') activeCategory = null;
        else activeClass = null;
        renderModalActiveChips();
        renderModalTabContent();
      }
    });

    document.getElementById('btn-prev').addEventListener('click', function () {
      var idx = DRUGS.findIndex(function (d) { return d.id === activeDrugId; });
      navigateTo(DRUGS[(idx - 1 + DRUGS.length) % DRUGS.length]);
    });

    document.getElementById('btn-next').addEventListener('click', function () {
      var idx = DRUGS.findIndex(function (d) { return d.id === activeDrugId; });
      navigateTo(DRUGS[(idx + 1) % DRUGS.length]);
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
      if (noteEl) noteEl.remove();
      if (sameDoseNotes[indication]) {
        var note = document.createElement('div');
        note.className = 'dose-sameas-note';
        note.textContent = 'Also applies to: ' + sameDoseNotes[indication].join(', ');
        section.appendChild(note);
      }
    });

    buildFilterBtn();
    buildList('');
    renderCard(DRUGS[0]);
    setToggleLabel(DRUGS[0]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
