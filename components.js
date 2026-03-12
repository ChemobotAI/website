function renderHeader(activePage, basePath) {
  const navLinks = [
    { id: 'home', label: 'Home', href: basePath + 'index.html' },
    { id: 'projects', label: 'Projects', href: basePath + 'projects.html' },
    { id: 'testimonials', label: 'Testimonials', href: basePath + 'testimonials.html' },
  ];

  const navHTML = navLinks
    .map(link => '<a' + (link.id === activePage ? ' class="active"' : '') + ' href="' + link.href + '">' + link.label + '</a>')
    .join('\n                ');

  return '<header>'
    + '<a class="brand" href="' + basePath + 'index.html"><img class="logo" src="' + basePath + 'images/ChemoBot-logo.svg" alt="ChemoBotAI logo" /></a>'
    + '<nav class="main-nav">'
    + navHTML
    + '<a class="contact" href="mailto:chemobotai@gmail.com">Get In touch</a>'
    + '</nav>'
    + '</header>';
}

function renderFooter() {
  return '<section class="black">'
    + '<div class="wrapper footer">'
    + '<h3>Contact</h3>'
    + '<p>Get in touch to discuss your requirements.</p>'
    + '<p> // <a href="mailto:chemobotai@gmail.com">chemobotai@gmail.com</a></p>'
    + '<p class="copyright"> \u00A9 CHEMOBOTAI 2026</p>'
    + '<button id="backToTop" title="Back to Top">\u2191</button>'
    + '</div>'
    + '</section>';
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
