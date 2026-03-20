// about.pocallum.cat — main.js

// ─── Goatcounter analytics ────────────────────────────────────
(function () {
  var s = document.createElement('script');
  s.setAttribute('data-goatcounter', 'https://about-pocallum.goatcounter.com/count');
  s.async = true;
  s.src = '//gc.zgo.at/count.js';
  document.head.appendChild(s);
})();

// ─── Mailto ofuscat ───────────────────────────────────────────
document.querySelectorAll('a[data-mailto]').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'mai' + 'lto:' + 'hola' + '@' + 'pocallum.cat';
  });
  el.setAttribute('href', '#');
});

// ─── Wizard modal ─────────────────────────────────────────────
(function () {

  var LANG = document.documentElement.lang || 'ca';

  var i18n = {
    ca: {
      step: 'Pas', of: 'de',
      next: 'Següent →', prev: '← Anterior', send: 'Genera el correu', close: 'Tancar',
      required: 'Aquest camp és obligatori.',
      privacy_required: 'Cal acceptar la política de privacitat.',
      extras_serveis_label: 'Serveis complementaris:',
      steps: [
        { label: 'Qui ets?', type: 'radio', key: 'perfil',
          options: ['Artista', 'Actor / Actriu', 'Manager', 'Sala de concerts', 'Festival', 'Discogràfica / Promotora'] },
        { label: 'Què necessites?', hint: 'Pots triar més d\'una opció.', type: 'checkbox', key: 'necessitats',
          options: ['Fotografia de directes', 'Fotografia promocional', 'Identitat visual', 'Web o microsite', 'Xarxes socials', 'Pla de comunicació global', 'Automatismes i eines IA', 'Vídeo'] },
        { label: 'Quins són els teus objectius?', hint: 'Pots triar més d\'una opció.', type: 'checkbox', key: 'objectius',
          options: ['Augmentar visibilitat', 'Llançar un nou projecte', 'Consolidar la meva imatge', 'Arribar a nous públics', 'Professionalitzar la comunicació', 'Millorar la presència digital', 'Preparar una gira o estrena'] },
        { label: 'Ja saps com assolir-los?', type: 'radio', key: 'enfocament',
          options: ['Sí, tinc una idea clara i sé el que vull', 'Tinc una idea però necessito orientació', 'No, necessito assessorament complet'] },
        { label: 'Detalls addicionals', hint: 'Tot és opcional.', type: 'extras', key: 'extras',
          options: ['Maquillatge', 'Perruqueria', 'Estilisme', 'Vídeo professional'],
          fields: [
            { key: 'data', label: 'Tens data límit?', placeholder: 'ex. juny 2026' },
            { key: 'pressupost', label: 'Pressupost orientatiu', placeholder: 'ex. 500–1.000 €' },
            { key: 'comentari', label: 'Comentari lliure', placeholder: 'Explica\'ns el que vulguis...', multiline: true }
          ]
        }
      ],
      contact: {
        label: 'Parlem?',
        name_label: 'Nom', name_placeholder: 'El teu nom',
        email_label: 'Correu electrònic', email_placeholder: 'hola@exemple.com',
        privacy_text: 'Accepto la ',
        privacy_link_text: 'política de privacitat',
        privacy_url: 'https://pocallum.cat/contacte/politica-de-ptivacitat-avis-legal/',
        subject: 'Consulta des de about.pocallum.cat',
        body_intro: 'Hola Joan,\n\nT\'escric des del formulari de about.pocallum.cat amb la informació següent:\n\n',
        label_data: 'Data límit', label_pressupost: 'Pressupost', label_extras: 'Serveis complementaris'
      }
    },
    en: {
      step: 'Step', of: 'of',
      next: 'Next →', prev: '← Back', send: 'Generate email', close: 'Close',
      required: 'This field is required.',
      privacy_required: 'You must accept the privacy policy.',
      extras_serveis_label: 'Additional services:',
      steps: [
        { label: 'Who are you?', type: 'radio', key: 'perfil',
          options: ['Artist', 'Actor / Actress', 'Manager', 'Concert venue', 'Festival', 'Record label / Promoter'] },
        { label: 'What do you need?', hint: 'You can select more than one.', type: 'checkbox', key: 'necessitats',
          options: ['Live photography', 'Promotional photography', 'Visual identity', 'Website or microsite', 'Social media', 'Global communication plan', 'Automation & AI tools', 'Video'] },
        { label: 'What are your goals?', hint: 'You can select more than one.', type: 'checkbox', key: 'objectius',
          options: ['Increase visibility', 'Launch a new project', 'Strengthen my image', 'Reach new audiences', 'Professionalise my communication', 'Improve digital presence', 'Prepare a tour or premiere'] },
        { label: 'Do you know how to achieve them?', type: 'radio', key: 'enfocament',
          options: ['Yes, I have a clear idea of what I want', 'I have an idea but need guidance', 'No, I need full consultancy'] },
        { label: 'Additional details', hint: 'All optional.', type: 'extras', key: 'extras',
          options: ['Make-up', 'Hair', 'Styling', 'Professional video'],
          fields: [
            { key: 'data', label: 'Do you have a deadline?', placeholder: 'e.g. June 2026' },
            { key: 'pressupost', label: 'Approximate budget', placeholder: 'e.g. 500–1,000 €' },
            { key: 'comentari', label: 'Free comment', placeholder: 'Tell us whatever you like...', multiline: true }
          ]
        }
      ],
      contact: {
        label: 'Let\'s talk?',
        name_label: 'Name', name_placeholder: 'Your name',
        email_label: 'Email', email_placeholder: 'hello@example.com',
        privacy_text: 'I accept the ',
        privacy_link_text: 'privacy policy',
        privacy_url: 'https://pocallum.cat/contacte/politica-de-ptivacitat-avis-legal/',
        subject: 'Enquiry from about.pocallum.cat',
        body_intro: 'Hi Joan,\n\nI\'m writing from the about.pocallum.cat form:\n\n',
        label_data: 'Deadline', label_pressupost: 'Budget', label_extras: 'Additional services'
      }
    },
    es: {
      step: 'Paso', of: 'de',
      next: 'Siguiente →', prev: '← Anterior', send: 'Generar correo', close: 'Cerrar',
      required: 'Este campo es obligatorio.',
      privacy_required: 'Debes aceptar la política de privacidad.',
      extras_serveis_label: 'Servicios complementarios:',
      steps: [
        { label: '¿Quién eres?', type: 'radio', key: 'perfil',
          options: ['Artista', 'Actor / Actriz', 'Manager', 'Sala de conciertos', 'Festival', 'Discográfica / Promotora'] },
        { label: '¿Qué necesitas?', hint: 'Puedes elegir más de una opción.', type: 'checkbox', key: 'necessitats',
          options: ['Fotografía de directos', 'Fotografía promocional', 'Identidad visual', 'Web o microsite', 'Redes sociales', 'Plan de comunicación global', 'Automatismos y herramientas IA', 'Vídeo'] },
        { label: '¿Cuáles son tus objetivos?', hint: 'Puedes elegir más de una opción.', type: 'checkbox', key: 'objectius',
          options: ['Aumentar visibilidad', 'Lanzar un nuevo proyecto', 'Consolidar mi imagen', 'Llegar a nuevos públicos', 'Profesionalizar la comunicación', 'Mejorar la presencia digital', 'Preparar una gira o estreno'] },
        { label: '¿Ya sabes cómo conseguirlos?', type: 'radio', key: 'enfocament',
          options: ['Sí, tengo una idea clara y sé lo que quiero', 'Tengo una idea pero necesito orientación', 'No, necesito asesoramiento completo'] },
        { label: 'Detalles adicionales', hint: 'Todo es opcional.', type: 'extras', key: 'extras',
          options: ['Maquillaje', 'Peluquería', 'Estilismo', 'Vídeo profesional'],
          fields: [
            { key: 'data', label: '¿Tienes fecha límite?', placeholder: 'ej. junio 2026' },
            { key: 'pressupost', label: 'Presupuesto orientativo', placeholder: 'ej. 500–1.000 €' },
            { key: 'comentari', label: 'Comentario libre', placeholder: 'Cuéntanos lo que quieras...', multiline: true }
          ]
        }
      ],
      contact: {
        label: '¿Hablamos?',
        name_label: 'Nombre', name_placeholder: 'Tu nombre',
        email_label: 'Correo electrónico', email_placeholder: 'hola@ejemplo.com',
        privacy_text: 'Acepto la ',
        privacy_link_text: 'política de privacidad',
        privacy_url: 'https://pocallum.cat/contacte/politica-de-ptivacitat-avis-legal/',
        subject: 'Consulta desde about.pocallum.cat',
        body_intro: 'Hola Joan,\n\nTe escribo desde el formulario de about.pocallum.cat:\n\n',
        label_data: 'Fecha límite', label_pressupost: 'Presupuesto', label_extras: 'Servicios complementarios'
      }
    }
  };

  var t = i18n[LANG] || i18n['ca'];
  var TOTAL_STEPS = t.steps.length;
  var currentStep = 0;
  var answers = {};

  // ── Modal HTML ───────────────────────────────────────────────
  function createModal() {
    var overlay = document.createElement('div');
    overlay.id = 'wizard-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<div id="wizard-box">' +
        '<button id="wizard-close" aria-label="' + t.close + '">&times;</button>' +
        '<div id="wizard-progress"></div>' +
        '<div id="wizard-content"></div>' +
        '<div id="wizard-nav"></div>' +
      '</div>';
    document.body.appendChild(overlay);
    document.getElementById('wizard-close').addEventListener('click', closeModal);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  }

  function openModal() {
    currentStep = 0;
    answers = {};
    if (!document.getElementById('wizard-overlay')) createModal();
    document.getElementById('wizard-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    renderStep(0);
  }

  function closeModal() {
    var o = document.getElementById('wizard-overlay');
    if (o) o.style.display = 'none';
    document.body.style.overflow = '';
  }

  // ── Renderitzar pas ──────────────────────────────────────────
  function renderStep(idx) {
    var isContact = idx === TOTAL_STEPS;
    var displayStep = idx + 1;
    var total = TOTAL_STEPS + 1;
    var pct = Math.round(displayStep / total * 100);

    document.getElementById('wizard-progress').innerHTML =
      '<span class="wiz-step-count">' + t.step + ' ' + displayStep + ' ' + t.of + ' ' + total + '</span>' +
      '<div class="wiz-bar"><div class="wiz-bar-fill" style="width:' + pct + '%"></div></div>';

    document.getElementById('wizard-content').innerHTML =
      isContact ? renderContact() : renderStepHTML(t.steps[idx]);

    restoreValues(idx);
    renderNav(idx, isContact);
    document.getElementById('wizard-box').scrollTop = 0;
  }

  function renderStepHTML(step) {
    var html = '<h3 class="wiz-title">' + step.label + '</h3>';
    if (step.hint) html += '<p class="wiz-hint">' + step.hint + '</p>';

    if (step.type === 'radio' || step.type === 'checkbox') {
      step.options.forEach(function (opt) {
        html += '<label class="wiz-option">' +
          '<input type="' + step.type + '" name="wiz_' + step.key + '" value="' + opt + '"> ' +
          '<span>' + opt + '</span></label>';
      });
    } else if (step.type === 'extras') {
      html += '<p class="wiz-sublabel">' + t.extras_serveis_label + '</p>';
      step.options.forEach(function (opt) {
        html += '<label class="wiz-option"><input type="checkbox" name="wiz_extras_serveis" value="' + opt + '"> <span>' + opt + '</span></label>';
      });
      step.fields.forEach(function (f) {
        html += '<div class="wiz-field"><label class="wiz-field-label" for="wiz_' + f.key + '">' + f.label + '</label>';
        if (f.multiline) {
          html += '<textarea id="wiz_' + f.key + '" placeholder="' + f.placeholder + '" rows="3"></textarea>';
        } else {
          html += '<input type="text" id="wiz_' + f.key + '" placeholder="' + f.placeholder + '">';
        }
        html += '</div>';
      });
    }
    return html;
  }

  function renderContact() {
    var c = t.contact;
    return '<h3 class="wiz-title">' + c.label + '</h3>' +
      '<div class="wiz-field"><label class="wiz-field-label" for="wiz_nom">' + c.name_label + ' *</label>' +
      '<input type="text" id="wiz_nom" placeholder="' + c.name_placeholder + '"></div>' +
      '<div class="wiz-field"><label class="wiz-field-label" for="wiz_email">' + c.email_label + ' *</label>' +
      '<input type="email" id="wiz_email" placeholder="' + c.email_placeholder + '"></div>' +
      '<label class="wiz-option wiz-privacy"><input type="checkbox" id="wiz_privacy"> <span>' +
      c.privacy_text + '<a href="' + c.privacy_url + '" target="_blank" rel="noopener">' + c.privacy_link_text + '</a> *</span></label>';
  }

  function renderNav(idx, isContact) {
    var navEl = document.getElementById('wizard-nav');
    navEl.innerHTML = '';
    if (idx > 0) {
      var prev = document.createElement('button');
      prev.className = 'wiz-btn wiz-outline';
      prev.textContent = t.prev;
      prev.addEventListener('click', function () { goTo(idx - 1); });
      navEl.appendChild(prev);
    }
    var next = document.createElement('button');
    next.className = 'wiz-btn wiz-primary';
    next.textContent = isContact ? t.send : t.next;
    next.addEventListener('click', function () { isContact ? submit() : goTo(idx + 1); });
    navEl.appendChild(next);
  }

  // ── Guardar / restaurar ──────────────────────────────────────
  function saveValues(idx) {
    if (idx === TOTAL_STEPS) {
      answers._nom = gv('wiz_nom');
      answers._email = gv('wiz_email');
      var p = document.getElementById('wiz_privacy');
      answers._privacy = p ? p.checked : false;
      return;
    }
    var step = t.steps[idx];
    if (step.type === 'radio') {
      var sel = document.querySelector('input[name="wiz_' + step.key + '"]:checked');
      answers[step.key] = sel ? sel.value : '';
    } else if (step.type === 'checkbox') {
      answers[step.key] = Array.from(document.querySelectorAll('input[name="wiz_' + step.key + '"]:checked')).map(function (el) { return el.value; });
    } else if (step.type === 'extras') {
      answers.extras_serveis = Array.from(document.querySelectorAll('input[name="wiz_extras_serveis"]:checked')).map(function (el) { return el.value; });
      step.fields.forEach(function (f) { answers['extras_' + f.key] = gv('wiz_' + f.key); });
    }
  }

  function restoreValues(idx) {
    if (idx === TOTAL_STEPS) {
      sv('wiz_nom', answers._nom || '');
      sv('wiz_email', answers._email || '');
      if (answers._privacy) { var p = document.getElementById('wiz_privacy'); if (p) p.checked = true; }
      return;
    }
    var step = t.steps[idx];
    if (step.type === 'radio' && answers[step.key]) {
      var r = document.querySelector('input[name="wiz_' + step.key + '"][value="' + answers[step.key] + '"]');
      if (r) r.checked = true;
    } else if (step.type === 'checkbox' && answers[step.key]) {
      (answers[step.key] || []).forEach(function (v) {
        var cb = document.querySelector('input[name="wiz_' + step.key + '"][value="' + v + '"]');
        if (cb) cb.checked = true;
      });
    } else if (step.type === 'extras') {
      (answers.extras_serveis || []).forEach(function (v) {
        var cb = document.querySelector('input[name="wiz_extras_serveis"][value="' + v + '"]');
        if (cb) cb.checked = true;
      });
      step.fields.forEach(function (f) { sv('wiz_' + f.key, answers['extras_' + f.key] || ''); });
    }
  }

  function goTo(idx) {
    saveValues(currentStep);
    currentStep = idx;
    renderStep(currentStep);
  }

  // ── Enviament ────────────────────────────────────────────────
  function submit() {
    if (!gv('wiz_nom').trim()) { alert(t.required); return; }
    if (!gv('wiz_email').trim()) { alert(t.required); return; }
    var p = document.getElementById('wiz_privacy');
    if (!p || !p.checked) { alert(t.privacy_required); return; }
    saveValues(TOTAL_STEPS);

    var c = t.contact;
    var body = c.body_intro;
    var labels = [t.steps[0].label, t.steps[1].label, t.steps[2].label, t.steps[3].label];
    var keys   = ['perfil', 'necessitats', 'objectius', 'enfocament'];

    keys.forEach(function (k, i) {
      var v = answers[k];
      if (v && (Array.isArray(v) ? v.length : v.trim())) {
        body += labels[i] + '\n' + (Array.isArray(v) ? v.join(', ') : v) + '\n\n';
      }
    });

    if (answers.extras_serveis && answers.extras_serveis.length) {
      body += c.label_extras + ': ' + answers.extras_serveis.join(', ') + '\n';
    }
    if (answers.extras_data && answers.extras_data.trim())       body += c.label_data + ': ' + answers.extras_data + '\n';
    if (answers.extras_pressupost && answers.extras_pressupost.trim()) body += c.label_pressupost + ': ' + answers.extras_pressupost + '\n';
    if (answers.extras_comentari && answers.extras_comentari.trim())   body += '\n' + answers.extras_comentari + '\n';

    body += '\n──\n' + answers._nom + '\n' + answers._email;

    window.location.href = 'mailto:hola@pocallum.cat?subject=' + encodeURIComponent(c.subject) + '&body=' + encodeURIComponent(body);
    closeModal();
  }

  // ── Helpers ──────────────────────────────────────────────────
  function gv(id) { var el = document.getElementById(id); return el ? el.value : ''; }
  function sv(id, v) { var el = document.getElementById(id); if (el) el.value = v; }

  // ── Init ─────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn-wizard');
    if (btn) btn.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
  });

})();