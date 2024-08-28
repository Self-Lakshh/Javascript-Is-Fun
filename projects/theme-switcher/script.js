function setTheme(name, gradient, element) {
  document.documentElement.style.setProperty('--theme-bg', gradient);
  try {
    if (window.parent && window.parent.document) {
      window.parent.document.body.style.background = gradient;
    }
  } catch (e) {
    // Suppress cross-origin frame constraints
  }
  document.querySelectorAll('.theme-option').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
}