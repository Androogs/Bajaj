// ─────────────────────────────────────────────────────────────
// DATOS DEL CONCESIONARIO AKT - SUMOTO S.A.
// ─────────────────────────────────────────────────────────────
export const dealer = {
  businessName: "Sumoto S.A.",
  displayName: "AKT Palmira",
  city: "Palmira, Valle del Cauca",
  address: "CRA. 33A # 30-114, Palmira, Valle del Cauca",
  addressMapsQuery: "Sumoto S.A. AKT Palmira Valle del Cauca",
  phone: "+57 310 2889425",
  email: "jefecomercialakt@sumoto.com.co",
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

  // NÚMEROS POR ÁREA - sin + ni espacios
  whatsappDigitales: ["573102889425"], 
  whatsappRepuestos: "573208500909",
  whatsappTaller: "573233089863",
};

// --- lógica interna para rotar digitales ---
function getSiguienteDigital() {
  if (typeof window === "undefined") return dealer.whatsappDigitales[0];
  const last = sessionStorage.getItem("akt_last_digital");
  let opciones = dealer.whatsappDigitales.filter(n => n!== last);
  if (opciones.length === 0) opciones = dealer.whatsappDigitales;
  const numero = opciones[Math.floor(Math.random() * opciones.length)];
  sessionStorage.setItem("akt_last_digital", numero);
  return numero;
}

// DIGITALES / VENTAS - con rotación si hay varias asesoras
export function waLink(message) {
  const numero = getSiguienteDigital();
  return `https://wa.me/${numero}?text=${encodeURIComponent(message || "Hola AKT Palmira, quiero información sobre una moto.")}`;
}

export function openWaDigitales(message) {
  const numero = getSiguienteDigital();
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(message || "Hola AKT Palmira, quiero información sobre una moto.")}`;
  window.open(url, "_blank", "noopener");
}

// REPUESTOS - fijo
export function waRepuestos(message) {
  return `https://wa.me/${dealer.whatsappRepuestos}?text=${encodeURIComponent(message || "Hola, necesito cotizar repuestos AKT.")}`;
}

export function openWaRepuestos(message) {
  const url = waRepuestos(message);
  window.open(url, "_blank", "noopener");
}

// TALLER - fijo
export function waTaller(message) {
  return `https://wa.me/${dealer.whatsappTaller}?text=${encodeURIComponent(message || "Hola, quiero agendar servicio en el taller AKT Palmira.")}`;
}

export function openWaTaller(message) {
  const url = waTaller(message);
  window.open(url, "_blank", "noopener");
}