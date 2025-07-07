document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".formulario-incidente");
    const fechaInput = document.getElementById("fecha");

    formulario.addEventListener("submit", function (e) {
        const fechaSeleccionada = fechaInput.value;

        if (!fechaSeleccionada) {
        alert("Por favor selecciona una fecha.");
        e.preventDefault();
        return;
        }

        const hoy = new Date();
        const fechaElegida = new Date(fechaSeleccionada);

        // Validar que no sea una fecha futura
        if (fechaElegida > hoy) {
        alert("La fecha no puede ser en el futuro.");
        e.preventDefault();
        return;
        }

        // Validación opcional: que no sea más de X días atrás
        const diasMaximos = 30;
        const limitePasado = new Date();
        limitePasado.setDate(hoy.getDate() - diasMaximos);

        if (fechaElegida < limitePasado) {
        alert("Solo puedes registrar incidentes de los últimos 30 días.");
        e.preventDefault();
        return;
        }

    // Si todo está bien, el formulario se envía normalmente
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
