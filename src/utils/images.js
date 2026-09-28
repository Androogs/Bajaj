const modules = import.meta.glob("/src/assets/motos/**/*.webp", {
  eager: true,
  import: "default",
});

export function getImage(relativePath) {
  const key = `/src/assets/motos/${relativePath}`;
  return modules[key] || "";
}

export function moneyCOP(value) {
  if (value == null) return null;
  return value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
}
