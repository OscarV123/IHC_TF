const map = L.map("map").setView([-12.059764, -77.035058], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Estación 1: Congreso (círculo verde)
const Estacion1 = L.circle([-12.047611, -77.026334], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
    radius: 150
}).addTo(map);

    Estacion1.bindPopup(`
  <div style="
    background-color: #d6f8d6;
    border-radius: 20px;
    padding: 16px;
    font-family: Arial, sans-serif;
    width: 230px;
    text-align: center;
  ">
    <div style="font-size: 32px; font-weight: bold;">Conexión OK</div>
    <div style="margin: 6px 0;">Lima, estación:<br><strong>Congreso de la República</strong></div>

    <div style="margin-top: 10px; font-weight: bold;">Errores detectados</div>
    <div style="font-size: 14px;">
      Ninguno
    </div>

    <div style="margin-top: 10px; font-weight: bold;">Próximo chequeo</div>
    <div style="font-size: 14px;">06/12/2025</div>

    <div style="margin-top: 10px; font-weight: bold;">Último mantenimiento</div>
    <div style="font-size: 14px;">01/02/2025</div>
  </div>
`);

    const Estacion2 = L.circle([-12.051792, -77.034738], {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.5,
      radius: 250
    }).addTo(map);

    // Popup con información extendida
    Estacion2.bindPopup(`
 <div style="
    background-color: #ffcdd2;
    border-radius: 20px;
    padding: 16px;
    font-family: Arial, sans-serif;
    width: 230px;
    text-align: center;
  ">
    <div style="font-size: 32px; font-weight: bold;">Sin Conexión</div>
    <div style="margin: 6px 0;">Lima, estación:<br><strong>Plaza San Martín</strong></div>

    <div style="margin-top: 10px; font-weight: bold;">Errores detectados</div>
    <div style="font-size: 14px;">
      Sensor de NO2, fuera de rango. Fallo en módulo de conexión. Requiere intervención urgente.
    </div>

    <div style="margin-top: 10px; font-weight: bold;">Próximo chequeo</div>
    <div style="font-size: 14px;">06/12/2025</div>

    <div style="margin-top: 10px; font-weight: bold;">Último mantenimiento</div>
    <div style="font-size: 14px;">01/02/2025</div>
  </div>
`);

    const Estacion3 = L.circle([-12.057908, -77.023172], {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.5,
      radius: 150
    }).addTo(map);

    // Popup con información extendida
    Estacion3.bindPopup(`
     <div style="
    background-color: #d6f8d6;
    border-radius: 20px;
    padding: 16px;
    font-family: Arial, sans-serif;
    width: 230px;
    text-align: center;
  ">
    <div style="font-size: 32px; font-weight: bold;">Conexión OK</div>
    <div style="margin: 6px 0;">Lima, estación:<br><strong>Barrios Altos</strong></div>

    <div style="margin-top: 10px; font-weight: bold;">Errores detectados</div>
    <div style="font-size: 14px;">
      Ninguno
    </div>

    <div style="margin-top: 10px; font-weight: bold;">Próximo chequeo</div>
    <div style="font-size: 14px;">06/12/2025</div>

    <div style="margin-top: 10px; font-weight: bold;">Último mantenimiento</div>
    <div style="font-size: 14px;">01/02/2025</div>
  </div>
`);

    const Estacion4 = L.circle([-12.067402, -77.039790], {
        color: 'green',
        fillColor: 'green',
        fillOpacity: 0.5,
        radius: 150
    }).addTo(map);

    // Popup con información extendida
    Estacion4.bindPopup(`
    <div style="
    background-color: #d6f8d6;
    border-radius: 20px;
    padding: 16px;
    font-family: Arial, sans-serif;
    width: 230px;
    text-align: center;
  ">
    <div style="font-size: 32px; font-weight: bold;">Conexión OK</div>
    <div style="margin: 6px 0;">Jesús María, estación:<br><strong>Campo de Marte</strong></div>

    <div style="margin-top: 10px; font-weight: bold;">Errores detectados</div>
    <div style="font-size: 14px;">
      Ninguno
    </div>

    <div style="margin-top: 10px; font-weight: bold;">Próximo chequeo</div>
    <div style="font-size: 14px;">06/12/2025</div>

    <div style="margin-top: 10px; font-weight: bold;">Último mantenimiento</div>
    <div style="font-size: 14px;">01/02/2025</div>
  </div>
`);

// Comportamiento al hacer clic
Estacion1.on('click', function () {
    Estacion1.openPopup();
});

// Comportamiento al pasar el mouse (opcional)
Estacion1.on('mouseover', function () {
    Estacion1.setStyle({ fillOpacity: 0.8 });
});
Estacion1.on('mouseout', function () {
    Estacion1.setStyle({ fillOpacity: 0.5 });
});


function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

window.addEventListener("resize", function () {
    map.invalidateSize();
});