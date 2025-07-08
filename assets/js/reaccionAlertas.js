document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll(".toggle-btn");

    botones.forEach(btn => {
        btn.addEventListener("click", () => {
        const contenido = btn.closest(".tarjeta-alerta").querySelector(".contenido-alerta");
        contenido.style.display = (contenido.style.display === "none") ? "block" : "none";
        btn.classList.toggle("activa");
        });

        // Ocultar contenido por defecto
        btn.closest(".tarjeta-alerta").querySelector(".contenido-alerta").style.display = "none";
    });
});
