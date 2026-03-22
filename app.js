(function () {
  var activeDrugId = DRUGS[0].id;
  var activeCategoryId = 'all';

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

  function renderCard(drug) {
    var moaHTML;
    if (drug.moaTiered) {
      var tiers = drug.moaTiered.map(function (t, i) {
        var dividerClass = i > 0 ? ' moa-tier--divider' : '';
        return '<div class="moa-tier' + dividerClass + '">' +
          '<div class="moa-tier-header">' +
            '<span class="moa-tier-label">' + t.tier + '</span>' +
            '<span class="moa-tier-range">' + t.range + '</span>' +
            (t.label ? '<span class="moa-tier-category">' + t.label + '</span>' : '') +
          '</div>' +
          '<p class="moa-tier-brief">' + t.brief + '</p>' +
        '</div>';
      }).join('');
      moaHTML = tiers;
    } else if (drug.moa) {
      var items = drug.moa.map(function (m) {
        var hlClass = m.type === 'alpha' ? 'hl--alpha' : 'hl--beta';
        return '<div class="moa-item"><span class="hl ' + hlClass + '">' + m.receptor + '</span><span class="moa-arrow">→</span>' + m.effect + '</div>';
      }).join('');
      moaHTML = '<div class="moa-grid">' + items + '</div>';
    } else {
      moaHTML = '<p class="moa-brief">' + drug.moaBrief + '</p>';
    }

    var indicationsHTML = drug.indications.map(function (i) {
      return '<li>' + i + '</li>';
    }).join('');

    var contraindicationsHTML = drug.contraindications.map(function (c) {
      return '<li>' + c.text + (c.relative ? ' <span class="tag">relative</span>' : '') + '</li>';
    }).join('');

    var doseRowsHTML = drug.doses.map(function (d, i) {
      var notesHTML = (d.notes || []).map(function (n) {
        return '<span class="dose-note">' + n + '</span>';
      }).join('');
      var divider = i > 0 ? ' dose-row--divider' : '';
      return '<div class="dose-row' + divider + '">' +
        '<div class="dose-main"><span class="dose-pop">' + d.population + '</span><span class="dose-amt">' + d.amount + '</span></div>' +
        (notesHTML ? '<div class="dose-notes">' + notesHTML + '</div>' : '') +
      '</div>';
    }).join('');

    var adverseHTML = drug.adverseEffects.map(function (e) {
      return '<li>' + e + '</li>';
    }).join('');

    var classesHTML = drug.classes.map(function (c) {
      return '<span class="drug-class-pill">' + c + '</span>';
    }).join('');

    document.getElementById('card-container').innerHTML =
      '<article class="card">' +
        '<header class="card-header">' +
          '<h1 class="drug-name">' + drug.genericName + '</h1>' +
          '<p class="drug-trade-name">' + drug.tradeName + '</p>' +
          '<div class="drug-class-row">' + classesHTML + '</div>' +
        '</header>' +

        '<section class="section">' +
          '<h2 class="section-label section-label--muted">Summary</h2>' +
          '<p class="summary-text">' + drug.summary + '</p>' +
        '</section>' +

        '<section class="section">' +
          '<h2 class="section-label section-label--blue">' + (drug.moaTiered ? 'Mechanism of Action<span class="tag tag--blue">Dose-Dependent</span>' : 'Mechanism of Action') + '</h2>' +
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
          doseRowsHTML +
          '<div class="pharma-inline">' +
            '<span>Onset <strong>' + drug.onset + '</strong></span>' +
            '<span class="pharma-sep">·</span>' +
            '<span>Duration <strong>' + drug.duration + '</strong></span>' +
          '</div>' +
        '</section>' +

        '<section class="section">' +
          '<h2 class="section-label section-label--orange">Adverse Effects</h2>' +
          '<ul class="pill-list">' + adverseHTML + '</ul>' +
        '</section>' +

        '<section class="section">' +
          '<h2 class="section-label section-label--orange">Precautions</h2>' +
          '<p class="precaution-text">' + drug.precautions + '</p>' +
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
      return fuzzyMatch(q, d.genericName) || fuzzyMatch(q, d.tradeName);
    });
    list.innerHTML = filtered.map(function (d) {
      var active = d.id === activeDrugId ? ' picker-item--active' : '';
      return '<li class="picker-item' + active + '" data-id="' + d.id + '">' +
        d.genericName +
        '<span class="picker-trade"> ' + d.tradeName + '</span>' +
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

  function init() {
    var list = document.getElementById('drug-list');
    var search = document.getElementById('drug-search');
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
