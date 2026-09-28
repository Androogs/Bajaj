// =====================================================================
// DATOS DEL CONCESIONARIO
// =====================================================================
export const SUMOTO = {
  nombre: "SUMOTO S.A.",
  eslogan: "Concesionario autorizado Bajaj",
  ciudad: "Palmira, Valle del Cauca",
  direccion: "Cra. 33a #30 - 23 / Palmira - Valle del Cauca",
  telefonos: "+57 314 4352451 +57 313 2485021",
  correo: "asesort2bajajpalmira@sumoto.com.co",
  nit: "NIT 800.235.505-9",
  horario: "Lunes a viernes 8:30 a.m. – 6:00 p.m. · Sábados 8:30 a.m. – 1:00 p.m.",
  mapaLink: "https://maps.app.goo.gl/UvsRsESDJ5V339e6A",
  whatsappVentas: ["573123093766", "573132485021"],
  whatsappTaller: "573255233347",
};

function getVendedora() {
  if (typeof window === "undefined") return SUMOTO.whatsappVentas[0];

  // 50/50 aleatorio pero evitando que toque 2 veces seguidas la misma
  const last = sessionStorage.getItem("sumoto_last_asesora");
  let opciones = SUMOTO.whatsappVentas.filter(n => n!== last);
  if (opciones.length === 0) opciones = SUMOTO.whatsappVentas;

  const numero = opciones[Math.floor(Math.random() * opciones.length)];
  sessionStorage.setItem("sumoto_last_asesora", numero);
  return numero;
}

// Para usar en href={waLink(...)} -> ahora es random puro sin efecto secundario
export const waLink = (texto) => {
  const numero = SUMOTO.whatsappVentas[Math.floor(Math.random() * SUMOTO.whatsappVentas.length)];
  return `https://wa.me/${numero}?text=${encodeURIComponent(
    texto || "Hola SUMOTO, quiero información sobre una moto Bajaj."
  )}`;
};

// ESTA es la que debes usar en botones con onClick - esta sí intercala bien
export const openWaVentas = (texto) => {
  const numero = getVendedora();
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto || "Hola SUMOTO, quiero información sobre una moto Bajaj.")}`;
  window.open(url, "_blank", "noopener");
};

export const waTaller = (texto) =>
  `https://wa.me/${SUMOTO.whatsappTaller}?text=${encodeURIComponent(
    texto || "Hola SUMOTO, necesito ayuda con taller/repuestos."
  )}`;