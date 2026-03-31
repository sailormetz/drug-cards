(function () {
  var activeDrugId = DRUGS[0].id;
  var activeCategoryId = 'all';
  var sortAsc = true;

  var CATEGORIES = [
    { id: 'all',          label: 'All',          classes: null },
    { id: 'vasopressors', label: 'Vasopressors',  classes: ['Vasopressor', 'Inotropic Agent'] },
    { id: 'opioids',      label: 'Opioids',       classes: ['Opioid Analgesic'] },
    { id: 'cardiac',      label: 'Cardiac Meds',  classes: ['Antiarrhythmic', 'Antiarrhythmic (Class III)', 'Anticoagulant', 'Antiplatelet', 'Anticholinergic', 'Vagolytic', 'Vasodilator', 'Antihypertensive'] },
    { id: 'respiratory',  label: 'Respiratory',   classes: ['Bronchodilator', 'Beta-2 Agonist', 'Corticosteroid', 'Anti-inflammatory'] },
    { id: 'sedation',     label: 'Sedation',      classes: ['Anesthetic', 'Sedative', 'Antipsychotic', 'Butyrophenone'] },
    { id: 'antidotes',    label: 'Antidotes',     classes: ['Antidote', 'Adsorbent', 'Benzodiazepine Antagonist'] },
    { id: 'analgesics',   label: 'Pain Relief',   classes: ['Analgesic', 'Antipyretic', 'NSAID'] },
    { id: 'diuretics',    label: 'Diuretics',     classes: ['Loop Diuretic'] },
    { id: 'metabolic',    label: 'Metabolic',     classes: ['Carbohydrate', 'Hyperglycemic', 'Hormone', 'Antihypoglycemic', 'Electrolyte', 'Hypertonic Solution'] },
  ];

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

  function buildFilters() {
    var container = document.getElementById('filter-chips');
    container.innerHTML = CATEGORIES.map(function (cat) {
      var active = cat.id === activeCategoryId ? ' filter-chip--active' : '';
      return '<button class="filter-chip' + active + '" data-cat="' + cat.id + '">' + cat.label + '</button>';
    }).join('');
  }

  function buildList(query) {
    var list = document.getElementById('drug-list');
    var q = (query || '').trim().toLowerCase();
    var cat = CATEGORIES.find(function (c) { return c.id === activeCategoryId; });
    var filtered = DRUGS.filter(function (d) {
      if (cat && cat.classes) {
        var hasClass = cat.classes.some(function (cls) { return d.classes.indexOf(cls) !== -1; });
        if (!hasClass) return false;
      }
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
      var isOpen = sidebar.classList.toggle('picker-sidebar--open');
      if (!isOpen) {
        activeCategoryId = 'all';
        buildFilters();
        buildList(search.value);
      }
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

    var filterChips = document.getElementById('filter-chips');
    filterChips.addEventListener('click', function (e) {
      var chip = e.target.closest('.filter-chip');
      if (!chip) return;
      activeCategoryId = chip.dataset.cat;
      buildFilters();
      buildList(search.value);
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
      document.getElementById('sort-label').textContent = sortAsc ? 'A–Z' : 'Z–A';
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

    buildFilters();
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
