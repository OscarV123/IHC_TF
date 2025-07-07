document.addEventListener("DOMContentLoaded", function () {
    const btnGenerar = document.querySelector(".btn-generar");
    const desde = document.getElementById("fecha-desde");
    const hasta = document.getElementById("fecha-hasta");

    btnGenerar.addEventListener("click", function () {
      const fechaDesde = new Date(desde.value);
      const fechaHasta = new Date(hasta.value);

      if (!desde.value || !hasta.value) {
        alert("Por favor, selecciona ambas fechas.");
        return;
      }

      if (fechaDesde > fechaHasta) {
        alert("La fecha 'Desde' no puede ser posterior a la fecha 'Hasta'.");
        return;
      }

      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);

      if (fechaDesde > hoy || fechaHasta > hoy) {
        alert("Las fechas no pueden estar en el futuro.");
        return;
      }

      alert("Fechas válidas. Generando informe...");
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