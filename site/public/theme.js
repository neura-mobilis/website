// Applies a saved theme before first paint. Loaded as a blocking file so the CSP needs no inline script.
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || t === 'light') document.documentElement.dataset.theme = t;
  } catch (e) {}
})();
