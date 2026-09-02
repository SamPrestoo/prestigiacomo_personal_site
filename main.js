// Highlight the active nav link based on the current page filename
(function () {
  var links = document.querySelectorAll('.nav-links a');
  var path = location.pathname;
  var page = path.split('/').pop() || 'index.html';

  links.forEach(function (a) {
    var href = a.getAttribute('href');
    if (
      href === page ||
      (href === 'index.html' && (page === '' || page === '/'))
    ) {
      a.classList.add('active');
    }
  });
})();
