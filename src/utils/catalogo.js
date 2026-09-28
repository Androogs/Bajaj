import { CATEGORIAS, MOTOS } from "../data/motos.js";

const modules = import.meta.glob("/src/assets/motos/**/*.webp", { eager: true, import: "default" });

/** Devuelve la URL de una imagen del catálogo (índice = variante/color). */
export const img = (moto, i = 0) => modules[`/src/assets/motos/${moto.imagenes[i] || moto.imagenes[0]}`] || "";

export const cop = (n) =>
  n == null ? "" : n.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

export const ahorro = (m) => (m.precioAntes ? m.precioAntes - m.precio : 0);
export const ccNum = (m) => parseFloat(String(m.resumen.cc).replace(",", "."));

export const getMoto = (slug) => MOTOS.find((m) => m.slug === slug);
export const getCategoria = (id) => CATEGORIAS.find((c) => c.id === id);
export const motosDe = (cat) => MOTOS.filter((m) => m.categoria === cat || m.extra.includes(cat));

/** Modelos destacados del slider de inicio (edítalos a tu gusto). */
export const DESTACADAS = ["250-r", "cr4-200-pro", "rally-300", "jet-evo", "ds525x", "ttr-200-abs"];
