document.addEventListener("DOMContentLoaded", function () {
  var burger = document.getElementById("hamburger");
  var panel = document.getElementById("menuPanel");
  if (!burger || !panel) return;

  burger.addEventListener("click", function () {
    var open = panel.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  panel.querySelectorAll(".menu-link").forEach(function (link) {
    link.addEventListener("click", function () {
      panel.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
});
