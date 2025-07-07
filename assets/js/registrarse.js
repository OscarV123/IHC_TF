const form = document.getElementById("registro-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const terminos = document.getElementById("terminos").checked;
    const perfil = document.querySelector('input[name="perfil"]:checked')?.value;

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const celularValido = /^[0-9]{9}$/.test(celular);

    if (!nombre || !email || !password || !celular || !terminos) {
        alert("Por favor completa todos los campos y acepta los términos.");
        return;
    }

    if (!correoValido) {
        alert("Por favor ingresa un correo válido.");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    if (!celularValido) {
        alert("El número de celular debe tener exactamente 9 dígitos.");
        return;
    }

    // Guardar en localStorage
    localStorage.setItem("airtrack_nombre", nombre);
    localStorage.setItem("airtrack_email", email);
    localStorage.setItem("airtrack_password", password);
    localStorage.setItem("airtrack_perfil", perfil);

    window.location.href = "iniciar_sesion.html";
});