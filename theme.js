document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function updateIcon(theme) {
    toggle.textContent = theme === "light" ? "\u2600\uFE0F" : "\u{1F319}";
    toggle.setAttribute(
      "aria-label",
      theme === "light" ? "Включить тёмную тему" : "Включить светлую тему"
    );
  }

  updateIcon(currentTheme());

  toggle.addEventListener("click", function () {
    var next = currentTheme() === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("molodezh-theme", next);
    } catch (e) {
      /* localStorage unavailable — theme just won't persist */
    }
    updateIcon(next);
  });
});
