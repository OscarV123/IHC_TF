const map = L.map("map").setView([-12.059764, -77.035058], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Estación 1: Congreso (círculo verde)
const Estacion1 = L.circle([-12.047611, -77.026334], {
    color: 'yellow',
    fillColor: 'yellow',
    fillOpacity: 0.5,
    radius: 150
}).addTo(map);

// Popup con información extendida
Estacion1.bindPopup(`
<div style="
background-color: #fff9c4;
border-radius: 20px;
padding: 16px;
font-family: Arial, sans-serif;
width: 230px;
text-align: center;
">
<div style="font-size: 32px; font-weight: bold;">65</div>
<div style="margin: 6px 0;">Lima, estación:<br><strong>Congreso de la República</strong></div>

<div style="margin-top: 10px; font-weight: bold;">Contaminante clave</div>
<div style="font-size: 14px;">
    Polvo fino (35,4 µg/m³)<br>
    Partículas gruesas: 9,2 g/m³<br>
    Dióxido de nitrógeno: 230 µg/m³
</div>

<div style="margin-top: 10px; font-weight: bold;">Registrado el</div>
<div style="font-size: 14px;">06/07/2025 - 12:54 pm.</div>

<div style="margin-top: 10px; font-weight: bold;">Última actualización</div>
<div style="font-size: 14px;">06/07/2025 - 12:54 pm.</div>
</div>
`);

// Estación 1: Congreso (círculo verde)
const Estacion2 = L.circle([-12.051792, -77.034738], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
    radius: 150
}).addTo(map);

// Popup con información extendida
Estacion2.bindPopup(`
<div style="
background-color: #d6f8d6;
border-radius: 20px;
padding: 16px;
font-family: Arial, sans-serif;
width: 230px;
text-align: center;
">
<div style="font-size: 32px; font-weight: bold;">50</div>
<div style="margin: 6px 0;">Lima, estación:<br><strong>Plaza San Martín</strong></div>

<div style="margin-top: 10px; font-weight: bold;">Contaminante clave</div>
<div style="font-size: 14px;">
    Polvo fino (24,8 µg/m³)<br>
    Partículas gruesas: 8,2 g/m³<br>
    Dióxido de nitrógeno: 180 µg/m³
</div>

<div style="margin-top: 10px; font-weight: bold;">Registrado el</div>
<div style="font-size: 14px;">06/07/2025 - 08:00 am.</div>

<div style="margin-top: 10px; font-weight: bold;">Última actualización</div>
<div style="font-size: 14px;">06/07/2025 - 12:54 pm.</div>
</div>
`);

const Estacion3 = L.circle([-12.057908, -77.023172], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 150
}).addTo(map);

// Popup con información extendida
Estacion3.bindPopup(`
<div style="
background-color: #ffcdd2;
border-radius: 20px;
padding: 16px;
font-family: Arial, sans-serif;
width: 230px;
text-align: center;
">
<div style="font-size: 32px; font-weight: bold;">152</div>
<div style="margin: 6px 0;">Lima, estación:<br><strong>Barrios Altos</strong></div>

<div style="margin-top: 10px; font-weight: bold;">Contaminante clave</div>
<div style="font-size: 14px;">
    Polvo fino (84,3 µg/m³)<br>
    Partículas gruesas: 14,2 g/m³<br>
    Dióxido de nitrógeno: 380 µg/m³
</div>

<div style="margin-top: 10px; font-weight: bold;">Registrado el</div>
<div style="font-size: 14px;">06/07/2025 - 07:30 am.</div>

<div style="margin-top: 10px; font-weight: bold;">Última actualización</div>
<div style="font-size: 14px;">06/07/2025 - 12:54 pm.</div>
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
<div style="font-size: 32px; font-weight: bold;">48</div>
<div style="margin: 6px 0;">Jesús María, estación:<br><strong>Campo de Marte</strong></div>

<div style="margin-top: 10px; font-weight: bold;">Contaminante clave</div>
<div style="font-size: 14px;">
    Polvo fino (17,3 µg/m³)<br>
    Partículas gruesas: 5,2 g/m³<br>
    Dióxido de nitrógeno: 120 µg/m³
</div>

<div style="margin-top: 10px; font-weight: bold;">Registrado el</div>
<div style="font-size: 14px;">06/07/2025 - 10:00 am.</div>

<div style="margin-top: 10px; font-weight: bold;">Última actualización</div>
<div style="font-size: 14px;">06/07/2025 - 12:54 pm.</div>
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

const sliderDia = document.getElementById("sliderDia");
const valorDia = document.getElementById("valorDia");

const fechas = [
    "01-Jul-2025",
    "02-Jul-2025",
    "03-Jul-2025",
    "04-Jul-2025",
    "05-Jul-2025",
    "06-Jul-2025"
];

// Simulación de colores AQI por día
const coloresAQI = ["green", "green", "yellow", "yellow", "red", "yellow"];

const datosEstacion1 = [
    { aqi: 42, fondo: '#d6f8d6', pm25: 12.5, pm10: 8.2, no2: 110 },
    { aqi: 47, fondo: '#d6f8d6', pm25: 13.2, pm10: 7.9, no2: 115 },
    { aqi: 68, fondo: '#fff9c4', pm25: 33.5, pm10: 11.2, no2: 190 },
    { aqi: 72, fondo: '#fff9c4', pm25: 36.1, pm10: 12.5, no2: 205 },
    { aqi: 158, fondo: '#ffcdd2', pm25: 88.4, pm10: 17.8, no2: 310 },
    { aqi: 65, fondo: '#fff9c4', pm25: 35.4, pm10: 9.2, no2: 230 } // Día fijo con datos reales
];

sliderDia.addEventListener("input", () => {
    const dia = parseInt(sliderDia.value);
    valorDia.textContent = fechas[dia];

    // Si es el último día (06-Jul-2025), siempre amarillo
    const color = (dia === 5) ? "yellow" : coloresAQI[dia];

    Estacion1.setStyle({
    color: color,
    fillColor: color
    });

    function actualizarPopupEstacion1(dia) {
    const datos = datosEstacion1[dia];
    const fecha = fechas[dia];

    const contenido = `
    <div style="
    background-color: ${datos.fondo};
    border-radius: 20px;
    padding: 16px;
    font-family: Arial, sans-serif;
    width: 230px;
    text-align: center;
    ">
    <div style="font-size: 32px; font-weight: bold;">${datos.aqi}</div>
    <div style="margin: 6px 0;">Lima, estación:<br><strong>Congreso de la República</strong></div>

    <div style="margin-top: 10px; font-weight: bold;">Contaminante clave</div>
    <div style="font-size: 14px;">
        Polvo fino (${datos.pm25} µg/m³)<br>
        Partículas gruesas: ${datos.pm10} g/m³<br>
        Dióxido de nitrógeno: ${datos.no2} µg/m³
    </div>

    <div style="margin-top: 10px; font-weight: bold;">Registrado el</div>
    <div style="font-size: 14px;">${fecha} - 12:54 pm.</div>

    <div style="margin-top: 10px; font-weight: bold;">Última actualización</div>
    <div style="font-size: 14px;">${fecha} - 12:54 pm.</div>
    </div>
`;

    Estacion1.bindPopup(contenido);
    }
    actualizarPopupEstacion1(dia);

});

const iconoPersona = L.icon({
    iconUrl: '../assets/imagenes/persona.png',
    iconSize: [30, 30],
    iconAnchor: [30, 30],
    popupAnchor: [0, -30]
});

const Persona1 = L.marker([-12.057826, -77.025222], { icon: iconoPersona }).addTo(map);
Persona1.bindPopup("<strong>Mi Ubicación</strong><br>Av. Nicolas de Pierola 124");

const rutaEstacion = [
    [-12.057826, -77.025222],
    [-12.056523, -77.027222],
    [-12.054851, -77.029901],
    [-12.053204, -77.032376],
    [-12.052718, -77.033014],
    [-12.051201, -77.032041],
    [-12.050541, -77.033073]
];

const lineaRuta = L.polyline(rutaEstacion, {
    color: 'green',
    weight: 6,
    opacity: 0.8,
}).addTo(map);

const iconoBanderaVerde = L.icon({
    iconUrl: '../assets/imagenes/banderaVerde.png',
    iconSize: [30, 30],
    iconAnchor: [20, 30],
    popupAnchor: [0, -30]
});

const BanderaVerde = L.marker([-12.050541, -77.033073], { icon: iconoBanderaVerde }).addTo(map);
BanderaVerde.bindPopup("<strong>Mi Llegada</strong><br>Jr. Puno 3244");
