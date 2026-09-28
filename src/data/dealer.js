// ─────────────────────────────────────────────────────────────
// DATOS DEL CONCESIONARIO — edite este archivo con la información
// real de Sumoto S.A. antes de publicar el sitio.
// ─────────────────────────────────────────────────────────────
export const dealer = {
  businessName: "Sumoto S.A.",
  displayName: "AKT Palmira",
  city: "Palmira, Valle del Cauca",
  address: "CRA. 33A # 30-114, Palmira, Valle del Cauca", // TODO: dirección exacta
  addressMapsQuery: "Sumoto S.A. AKT Palmira Valle del Cauca",
  phone: "+573218127741", // TODO: teléfono fijo o celular de la sala de ventas
  whatsapp: "573218127741", // TODO: número de WhatsApp sin espacios ni símbolos
  email: "jefecomercialakt@sumoto.com.co", // TODO: correo real
  hours: [
    { day: "Lunes a viernes", time: "8:30 a.m. – 6:00 p.m." },
    { day: "Sábados", time: "8:00 a.m. – 2:00 p.m." },
  ],
  socials: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },
  nationalLine: "01 8000 524 066",
};

export function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${dealer.whatsapp}?text=${text}`;
}
