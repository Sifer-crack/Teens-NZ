document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("pdfModal");
  var frame = document.getElementById("pdfModalFrame");
  var title = document.getElementById("pdfModalTitle");
  var links = document.querySelectorAll("[data-pdf-src]");
  if (!modal || !frame) return;

  function open(src, label) {
    frame.setAttribute("data", src);
    if (title) title.textContent = label || "Документ";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      open(link.getAttribute("data-pdf-src"), link.getAttribute("data-pdf-title"));
    });
  });

  modal.querySelectorAll("[data-close-pdf]").forEach(function (el) {
    el.addEventListener("click", close);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
});
