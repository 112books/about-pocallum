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

  var FORMSPREE = 'https://formspree.io/f/xnjgrpnn';
  var LANG = document.documentElement.lang || 'ca';

  var i18n = {
    ca: {
      step: 'Pas', of: 'de',
      next: 'Següent →', prev: '← Anterior', send: 'Envia la consulta', close: 'Tancar',
      sending: 'Enviant…',
      err_required_radio: 'Cal triar una opció.',
      err_required_checkbox: 'Cal triar almenys una opció.',
      err_required_field: 'Aquest camp és obligatori.',
      err_email_invalid: 'L\'adreça de correu no és vàlida.',
      err_privacy: 'Cal acceptar la política de privacitat.',
      err_send: 'Hi ha hagut un error en l\'enviament. Torna-ho a provar.',
      success_title: 'Missatge enviat!',
      success_body: 'Gràcies. Et respondré tan aviat com sigui possible.',
      success_close: 'Tancar',
      fallback_label: 'O envia\'l per correu electrònic',
      fallback_btn: 'Obre el client de correu',
      extras_serveis_label: 'Serveis complementaris:',
      steps: [
        { label: 'Qui ets?', type: 'radio', key: 'perfil', required: true,
          options: ['Artista', 'Actor / Actriu', 'Manager', 'Sala de concerts', 'Festival', 'Discogràfica / Promotora'] },
        { label: 'Què necessites?', hint: 'Pots triar més d\'una opció.', type: 'checkbox', key: 'necessitats', required: true,
          options: ['Fotografia de directes', 'Fotografia promocional', 'Identitat visual', 'Web o microsite', 'Xarxes socials', 'Pla de comunicació global', 'Automatismes i eines IA', 'Vídeo'] },
        { label: 'Quins són els teus objectius?', hint: 'Pots triar més d\'una opció.', type: 'checkbox', key: 'objectius', required: true,
          options: ['Augmentar visibilitat', 'Llançar un nou projecte', 'Consolidar la meva imatge', 'Arribar a nous públics', 'Professionalitzar la comunicació', 'Millorar la presència digital', 'Preparar una gira o estrena'] },
        { label: 'Ja saps com assolir-los?', type: 'radio', key: 'enfocament', required: true,
          options: ['Sí, tinc una idea clara i sé el que vull', 'Tinc una idea però necessito orientació', 'No, necessito assessorament complet'] },
        { label: 'Detalls addicionals', hint: 'Tot és opcional.', type: 'extras', key: 'extras', required: false,
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
      next: 'Next →', prev: '← Back', send: 'Send enquiry', close: 'Close',
      sending: 'Sending…',
      err_required_radio: 'Please select an option.',
      err_required_checkbox: 'Please select at least one option.',
      err_required_field: 'This field is required.',
      err_email_invalid: 'Please enter a valid email address.',
      err_privacy: 'You must accept the privacy policy.',
      err_send: 'There was an error sending your message. Please try again.',
      success_title: 'Message sent!',
      success_body: 'Thank you. I will get back to you as soon as possible.',
      success_close: 'Close',
      fallback_label: 'Or send it by email',
      fallback_btn: 'Open email client',
      extras_serveis_label: 'Additional services:',
      steps: [
        { label: 'Who are you?', type: 'radio', key: 'perfil', required: true,
          options: ['Artist', 'Actor / Actress', 'Manager', 'Concert venue', 'Festival', 'Record label / Promoter'] },
        { label: 'What do you need?', hint: 'You can select more than one.', type: 'checkbox', key: 'necessitats', required: true,
          options: ['Live photography', 'Promotional photography', 'Visual identity', 'Website or microsite', 'Social media', 'Global communication plan', 'Automation & AI tools', 'Video'] },
        { label: 'What are your goals?', hint: 'You can select more than one.', type: 'checkbox', key: 'objectius', required: true,
          options: ['Increase visibility', 'Launch a new project', 'Strengthen my image', 'Reach new audiences', 'Professionalise my communication', 'Improve digital presence', 'Prepare a tour or premiere'] },
        { label: 'Do you know how to achieve them?', type: 'radio', key: 'enfocament', required: true,
          options: ['Yes, I have a clear idea of what I want', 'I have an idea but need guidance', 'No, I need full consultancy'] },
        { label: 'Additional details', hint: 'All optional.', type: 'extras', key: 'extras', required: false,
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
      next: 'Siguiente →', prev: '← Anterior', send: 'Enviar consulta', close: 'Cerrar',
      sending: 'Enviando…',
      err_required_radio: 'Por favor, elige una opción.',
      err_required_checkbox: 'Por favor, elige al menos una opción.',
      err_required_field: 'Este campo es obligatorio.',
      err_email_invalid: 'Por favor, introduce una dirección de correo válida.',
      err_privacy: 'Debes aceptar la política de privacidad.',
      err_send: 'Ha habido un error al enviar. Por favor, inténtalo de nuevo.',
      success_title: '¡Mensaje enviado!',
      success_body: 'Gracias. Te responderé lo antes posible.',
      success_close: 'Cerrar',
      fallback_label: 'O envíalo por correo electrónico',
      fallback_btn: 'Abrir cliente de correo',
      extras_serveis_label: 'Servicios complementarios:',
      steps: [
        { label: '¿Quién eres?', type: 'radio', key: 'perfil', required: true,
          options: ['Artista', 'Actor / Actriz', 'Manager', 'Sala de conciertos', 'Festival', 'Discográfica / Promotora'] },
        { label: '¿Qué necesitas?', hint: 'Puedes elegir más de una opción.', type: 'checkbox', key: 'necessitats', required: true,
          options: ['Fotografía de directos', 'Fotografía promocional', 'Identidad visual', 'Web o microsite', 'Redes sociales', 'Plan de comunicación global', 'Automatismos y herramientas IA', 'Vídeo'] },
        { label: '¿Cuáles son tus objetivos?', hint: 'Puedes elegir más de una opción.', type: 'checkbox', key: 'objectius', required: true,
          options: ['Aumentar visibilidad', 'Lanzar un nuevo proyecto', 'Consolidar mi imagen', 'Llegar a nuevos públicos', 'Profesionalizar la comunicación', 'Mejorar la presencia digital', 'Preparar una gira o estreno'] },
        { label: '¿Ya sabes cómo conseguirlos?', type: 'radio', key: 'enfocament', required: true,
          options: ['Sí, tengo una idea clara y sé lo que quiero', 'Tengo una idea pero necesito orientación', 'No, necesito asesoramiento completo'] },
        { label: 'Detalles adicionales', hint: 'Todo es opcional.', type: 'extras', key: 'extras', required: false,
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
      html += '<p class="wiz-error" id="err_' + step.key + '"></p>';
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
      '<div class="wiz-field">' +
        '<label class="wiz-field-label" for="wiz_nom">' + c.name_label + ' *</label>' +
        '<input type="text" id="wiz_nom" placeholder="' + c.name_placeholder + '">' +
        '<p class="wiz-error" id="err_nom"></p>' +
      '</div>' +
      '<div class="wiz-field">' +
        '<label class="wiz-field-label" for="wiz_email">' + c.email_label + ' *</label>' +
        '<input type="email" id="wiz_email" placeholder="' + c.email_placeholder + '">' +
        '<p class="wiz-error" id="err_email"></p>' +
      '</div>' +
      '<label class="wiz-option wiz-privacy">' +
        '<input type="checkbox" id="wiz_privacy"> ' +
        '<span>' + c.privacy_text + '<a href="' + c.privacy_url + '" target="_blank" rel="noopener">' + c.privacy_link_text + '</a> *</span>' +
      '</label>' +
      '<p class="wiz-error" id="err_privacy"></p>';
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
    next.id = 'wiz-next-btn';
    next.className = 'wiz-btn wiz-primary';
    next.textContent = isContact ? t.send : t.next;
    next.addEventListener('click', function () { isContact ? submit() : goTo(idx + 1); });
    navEl.appendChild(next);
  }

  // ── Validació inline ─────────────────────────────────────────
  function showError(id, msg) {
    var el = document.getElementById(id);
    if (el) { el.textContent = msg; el.style.display = msg ? 'block' : 'none'; }
  }

  function clearErrors() {
    document.querySelectorAll('.wiz-error').forEach(function (el) {
      el.textContent = '';
      el.style.display = 'none';
    });
    document.querySelectorAll('.wiz-option.wiz-invalid, input.wiz-invalid').forEach(function (el) {
      el.classList.remove('wiz-invalid');
    });
  }

  function validateStep(idx) {
    clearErrors();
    var isContact = idx === TOTAL_STEPS;

    if (isContact) {
      var ok = true;
      var nom = gv('wiz_nom').trim();
      var email = gv('wiz_email').trim();
      var privacy = document.getElementById('wiz_privacy');

      if (!nom) { showError('err_nom', t.err_required_field); markInvalid('wiz_nom'); ok = false; }
      if (!email) {
        showError('err_email', t.err_required_field); markInvalid('wiz_email'); ok = false;
      } else if (!isValidEmail(email)) {
        showError('err_email', t.err_email_invalid); markInvalid('wiz_email'); ok = false;
      }
      if (!privacy || !privacy.checked) { showError('err_privacy', t.err_privacy); ok = false; }
      return ok;
    }

    var step = t.steps[idx];
    if (!step.required) return true;

    if (step.type === 'radio') {
      var sel = document.querySelector('input[name="wiz_' + step.key + '"]:checked');
      if (!sel) { showError('err_' + step.key, t.err_required_radio); return false; }
    } else if (step.type === 'checkbox') {
      var checked = document.querySelectorAll('input[name="wiz_' + step.key + '"]:checked');
      if (checked.length === 0) { showError('err_' + step.key, t.err_required_checkbox); return false; }
    }
    return true;
  }

  function markInvalid(id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('wiz-invalid');
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    if (!validateStep(currentStep)) return;
    saveValues(currentStep);
    currentStep = idx;
    renderStep(currentStep);
  }

  // ── Construir missatge ───────────────────────────────────────
  function buildMessage() {
    var c = t.contact;
    var body = c.body_intro;
    var keys = ['perfil', 'necessitats', 'objectius', 'enfocament'];
    var labels = [t.steps[0].label, t.steps[1].label, t.steps[2].label, t.steps[3].label];

    keys.forEach(function (k, i) {
      var v = answers[k];
      if (v && (Array.isArray(v) ? v.length : v.trim())) {
        body += labels[i] + '\n' + (Array.isArray(v) ? v.join(', ') : v) + '\n\n';
      }
    });
    if (answers.extras_serveis && answers.extras_serveis.length)
      body += c.label_extras + ': ' + answers.extras_serveis.join(', ') + '\n';
    if (answers.extras_data && answers.extras_data.trim())
      body += c.label_data + ': ' + answers.extras_data + '\n';
    if (answers.extras_pressupost && answers.extras_pressupost.trim())
      body += c.label_pressupost + ': ' + answers.extras_pressupost + '\n';
    if (answers.extras_comentari && answers.extras_comentari.trim())
      body += '\n' + answers.extras_comentari + '\n';
    body += '\n──\n' + answers._nom + '\n' + answers._email;
    return body;
  }

  // ── Enviament Formspree ──────────────────────────────────────
  function submit() {
    if (!validateStep(TOTAL_STEPS)) return;
    saveValues(TOTAL_STEPS);

    var btn = document.getElementById('wiz-next-btn');
    btn.textContent = t.sending;
    btn.disabled = true;

    var message = buildMessage();
    var c = t.contact;

    var data = {
      _subject: c.subject,
      nom: answers._nom,
      email: answers._email,
      missatge: message
    };

    fetch(FORMSPREE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(function (res) { return res.json().then(function(json) { return { ok: res.ok, json: json }; }); })
    .then(function (r) {
      if (r.ok) {
        showSuccess();
      } else {
        btn.textContent = t.send;
        btn.disabled = false;
        showError('err_privacy', t.err_send);
      }
    })
    .catch(function () {
      // Fallback mailto si no hi ha connexió
      btn.textContent = t.send;
      btn.disabled = false;
      showFallback(message, c);
    });
  }

  // ── Pantalla d'èxit ──────────────────────────────────────────
  function showSuccess() {
    document.getElementById('wizard-progress').innerHTML = '';
    document.getElementById('wizard-content').innerHTML =
      '<div class="wiz-success">' +
        '<div class="wiz-success-icon">✓</div>' +
        '<h3 class="wiz-title">' + t.success_title + '</h3>' +
        '<p class="wiz-hint">' + t.success_body + '</p>' +
      '</div>';
    document.getElementById('wizard-nav').innerHTML =
      '<button class="wiz-btn wiz-primary" onclick="document.getElementById(\'wizard-overlay\').style.display=\'none\';document.body.style.overflow=\'\';">' + t.success_close + '</button>';
  }

  // ── Fallback mailto ──────────────────────────────────────────
  function showFallback(message, c) {
    var mailto = 'mailto:hola@pocallum.cat?subject=' + encodeURIComponent(c.subject) + '&body=' + encodeURIComponent(message);
    var navEl = document.getElementById('wizard-nav');
    var fallbackDiv = document.getElementById('wiz-fallback');
    if (!fallbackDiv) {
      fallbackDiv = document.createElement('div');
      fallbackDiv.id = 'wiz-fallback';
      fallbackDiv.className = 'wiz-fallback';
      fallbackDiv.innerHTML =
        '<p class="wiz-fallback-label">' + t.fallback_label + '</p>' +
        '<a href="' + mailto + '" class="wiz-btn wiz-outline">' + t.fallback_btn + '</a>';
      navEl.parentNode.insertBefore(fallbackDiv, navEl.nextSibling);
    }
  }

  // ── Helpers ──────────────────────────────────────────────────
  function gv(id) { var el = document.getElementById(id); return el ? el.value : ''; }
  function sv(id, v) { var el = document.getElementById(id); if (el) el.value = v; }

  // ── Init ─────────────────────────────────────────────────────
  function initWizard() {
    var btn = document.getElementById('btn-wizard');
    if (btn) btn.addEventListener('click', function (e) { e.preventDefault(); openModal(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWizard);
  } else {
    initWizard();
  }

})();