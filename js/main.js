(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  if (stored === 'light' || stored === 'dark') {
    root.setAttribute('data-theme', stored);
  }

  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = current ? current === 'dark' : prefersDark;
    var next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
