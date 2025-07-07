const form = document.getElementById("login-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const mensaje = document.getElementById('mensaje');

    if (email === "trabajador@senamhi.com") {
        window.location.href = "trabajador_main.html";
        return;
    }

    const registradoEmail = localStorage.getItem('airtrack_email');
    const registradoPassword = localStorage.getItem('airtrack_password');
    const tipo = localStorage.getItem('airtrack_perfil');
    const nombre = localStorage.getItem('airtrack_nombre');

    if (!email || !password) {
        mensaje.textContent = "Por favor complete todos los campos.";
        return;
    }

    if (email !== registradoEmail || password !== registradoPassword) {
        mensaje.textContent = "Email o contraseña incorrectos.";
        return;
    }

    // Guardar sesión
    localStorage.setItem("airtrack_sesion_nombre", nombre);
    localStorage.setItem("airtrack_sesion_tipo", tipo);

    if (tipo === 'Vendedor ambulante') {
        window.location.href = 'ambulantePrincipal.html';
    } else if (tipo === 'Deportista') {
        window.location.href = 'deportistaPrincipal.html';
    } else {
        mensaje.textContent = "Tipo de usuario no reconocido.";
    }
});