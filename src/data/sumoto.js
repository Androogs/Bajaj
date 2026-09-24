// =====================================================================
//  DATOS DEL CONCESIONARIO
//  Este es el unico archivo que necesitas editar para cambiar los datos
//  de contacto en todo el sitio.
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
  mapaLink: "https://maps.app.goo.gl/UvsRsESDJ5V339e6A"
};

// Arma un enlace de WhatsApp con un mensaje ya escrito.
export const waLink = (texto) =>
  `https://wa.me/${SUMOTO.whatsapp}?text=${encodeURIComponent(
    texto || "Hola SUMOTO, quiero información sobre una moto Bajaj."
  )}`;
