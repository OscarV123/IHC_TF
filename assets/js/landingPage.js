if (localStorage.getItem("airtrack_sesion_nombre")) {
  fetch("headerSesionIniciada.html")
      .then(res => res.text())
      .then(html => {
          document.querySelector("header").outerHTML = html;
      });
}


document.querySelectorAll('.acordeon-titulo').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('active');
    });
});







