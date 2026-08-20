function renderHeader(activePage, basePath) {
  const navLinks = [
    // './' from the root, '../' from projects/: both land on the site root
    // without ever showing index.html in the address bar
    { id: 'home', label: 'Home', href: basePath || './' },
    { id: 'projects', label: 'Projects', href: basePath + 'projects.html' },
    { id: 'testimonials', label: 'Testimonials', href: basePath + 'testimonials.html' },
  ];

  const navHTML = navLinks
    .map(link => '<a' + (link.id === activePage ? ' class="active"' : '') + ' href="' + link.href + '">' + link.label + '</a>')
    .join('\n                ');

  return '<header>'
    + '<a class="brand" href="' + (basePath || './') + '"><img class="logo" src="' + basePath + 'images/logos/chemobot-ai-logo.svg" alt="ChemoBotAI logo" /></a>'
    + '<nav class="main-nav">'
    + navHTML
    // scrolls to the contact block rather than firing mailto, which fails
    // silently on machines with no mail client configured
    + '<a class="contact" href="#contact">Contact</a>'
    + '</nav>'
    + '</header>';
}

// bgClass is passed per page so the band never sits next to a section of the
// same colour: white on the homepage, grey where it precedes the black footer
function renderCta(text, bgClass) {
  return '<section class="' + (bgClass || 'grey') + '">'
    + '<div class="wrapper cta">'
    + '<p class="cta-text">' + text + '</p>'
    + '<a class="btn cta-btn" href="https://cal.com/jgrizou/chemobotai" target="_blank" rel="noopener">Book a 15 min call</a>'
    + '</div>'
    + '</section>';
}

function renderFooter() {
  return '<section class="black" id="contact">'
    + '<div class="wrapper footer">'
    + '<h3>Contact</h3>'
    + '<p>Get in touch to discuss your requirements.</p>'
    + '<p class="contact-line">'
    + '<span class="highlight">//</span>'
    + '<a class="contact-email" href="mailto:chemobotai@gmail.com">chemobotai@gmail.com</a>'
    + '<button class="copy-email" id="copyEmail" type="button"'
    + ' data-email="chemobotai@gmail.com"'
    + ' aria-label="Copy email address" title="Copy email address">'
    + '<svg class="copy-icon copy-icon-default" viewBox="0 0 24 24" aria-hidden="true">'
    + '<rect x="9" y="9" width="12" height="12" rx="2"/>'
    + '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'
    + '</svg>'
    + '<svg class="copy-icon copy-icon-done" viewBox="0 0 24 24" aria-hidden="true">'
    + '<polyline points="20 6 9 17 4 12"/>'
    + '</svg>'
    + '</button>'
    + '<span class="copy-status" id="copyStatus" role="status" aria-live="polite"></span>'
    + '</p>'
    // btn-light, not btn: the default dark button is invisible on the black
    // footer. This is the nav Contact destination, so it must offer booking.
    + '<a class="btn btn-light contact-book" href="https://cal.com/jgrizou/chemobotai" target="_blank" rel="noopener">Book a 15 min call</a>'
    + '<p class="copyright"> \u00A9 CHEMOBOTAI 2026</p>'
    + '<button id="backToTop" title="Back to Top">\u2191</button>'
    + '</div>'
    + '</section>';
}

function initCopyEmail() {
  var btn = document.getElementById('copyEmail');
  if (!btn) return;

  var status = document.getElementById('copyStatus');

  // swap the icon rather than the label, so the button never changes width
  function flash(ok, msg) {
    btn.classList.add(ok ? 'copied' : 'copy-failed');
    if (status) status.textContent = msg;
    setTimeout(function () {
      btn.classList.remove('copied', 'copy-failed');
      if (status) status.textContent = '';
    }, 1800);
  }

  // execCommand fallback: navigator.clipboard needs a secure context, so it
  // is absent when the site is opened over plain file:// or http://
  function legacyCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  btn.addEventListener('click', function () {
    var email = btn.getAttribute('data-email');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(function () {
        flash(true, 'Email address copied');
      }).catch(function () {
        var ok = legacyCopy(email);
        flash(ok, ok ? 'Email address copied' : 'Could not copy, please select the address');
      });
    } else {
      var ok = legacyCopy(email);
      flash(ok, ok ? 'Email address copied' : 'Could not copy, please select the address');
    }
  });
}

function initBackToTop() {
  var backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
