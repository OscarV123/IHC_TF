document.addEventListener("DOMContentLoaded", function () {
    const niveles = document.querySelectorAll('input[name="nivel"]');

    niveles.forEach((nivel) => {
      nivel.addEventListener("change", function () {
        if (this.checked) {
          // Desmarcar todos los demás
          niveles.forEach((otro) => {
            if (otro !== this) {
              otro.checked = false;
            }
          });
        }
      });
    });
  });

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggle-btn");

    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
    });

    document.addEventListener("click", function (e) {
    const isClickInside = sidebar.contains(e.target) || toggleBtn.contains(e.target);

    if (!isClickInside && !sidebar.classList.contains("collapsed")) {
      sidebar.classList.add("collapsed");
    }
  });
});