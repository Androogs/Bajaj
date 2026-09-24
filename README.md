# SUMOTO S.A. — Sitio web

Sitio del concesionario autorizado Bajaj **SUMOTO S.A.**, Palmira (Valle del Cauca).
Hecho con **React 18 + Vite + React Router**. Cada sección es una página con su propia
URL, no un scroll largo.

---

## Arrancar el proyecto

Necesitas [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install     # instala las dependencias (solo la primera vez)
npm run dev     # abre el sitio en http://localhost:5173
```

Para generar la versión lista para publicar:

```bash
npm run build     # deja los archivos finales en dist/
npm run preview   # revisa el resultado del build antes de subirlo
```

---

## Lo primero que debes cambiar

Abre **`src/data/sumoto.js`** y reemplaza los datos marcados con `<-- REEMPLAZAR`:

| Campo | Qué es |
|---|---|
| `whatsapp` | **Importante.** Va en formato `57` + celular, sin espacios ni `+`. Ejemplo: `573001234567`. Mientras tenga el número de ejemplo, ningún botón de WhatsApp funciona. |
| `direccion`, `telefono`, `correo`, `nit` | Aparecen en la barra superior, en el pie y en la página de contacto. |
| `horario` | Se muestra en contacto y en el pie. |
| `mapaLink` | Enlace de Google Maps del local. Búscalo en Google Maps y usa "Compartir → Copiar vínculo". |

---

## Poner los precios

Están en **`src/data/motos.js`**. Cada moto tiene un campo `precio` vacío:

```js
precio: "",                 // muestra "Consulta el precio"
precio: "$ 12.499.000",     // muestra el precio
```

---

## Agregar un modelo nuevo

1. Crea la carpeta `public/motos/<slug>/` con las fotos numeradas: `1.webp`, `2.webp`, `3.webp`…
   La primera es la que sale en la tarjeta del catálogo.
2. Agrega el objeto al arreglo `MOTOS` en `src/data/motos.js`:

```js
{
  slug: "pulsar-n150",       // debe coincidir con el nombre de la carpeta
  fotos: 3,                  // cuántas fotos hay en la carpeta
  nombre: "Pulsar N 150",
  linea: "pulsar",           // pulsar | boxer | discover | dominar
  precio: "",
  cc: "149.5 cc",
  resumen: "Texto corto que aparece en la ficha.",
  specs: { "Cilindraje": "149.5 cc", "Potencia": "14 HP" }
}
```

Para crear una línea nueva (por ejemplo Avenger o vehículos de trabajo), agrégala al
arreglo `LINEAS` en el mismo archivo. El filtro del catálogo y el pie de página se
actualizan solos.

### Sobre las fotos

Las imágenes están en **WebP con fondo transparente**, recortadas al contorno de la moto
y a 1200 px de ancho. Conserva ese formato al agregar nuevas: el diseño usa la
transparencia para que la moto "flote" sobre el fondo oscuro y sobre las secciones claras.

---

## Estructura

```
public/motos/<slug>/1.webp   Fotos de cada modelo
src/data/sumoto.js           Datos de contacto del concesionario
src/data/motos.js            Catálogo: líneas, modelos, fichas técnicas
src/components/              Barra de navegación, pie, tarjeta de moto, botón de WhatsApp
src/pages/                   Una página por sección
src/styles.css               Todos los estilos (colores en variables al inicio)
src/App.jsx                  Rutas del sitio
```

### Rutas

| URL | Página |
|---|---|
| `/` | Inicio |
| `/motos` | Catálogo con filtros por línea |
| `/motos/:slug` | Ficha del modelo con galería |
| `/repuestos` | Repuestos y accesorios |
| `/taller` | Taller autorizado |
| `/financiacion` | Financiación con simulador de cuota |
| `/nosotros` | Sobre la empresa |
| `/contacto` | Formulario y ubicación |

---

## Colores y tipografía

Todo se controla desde las variables CSS al inicio de `src/styles.css`:

```css
--azul-900: #04204A;   /* azul Bajaj, fondos de sección */
--azul-600: #0F5FB5;   /* botones y enlaces */
--rojo:     #D81E05;   /* acento, botones principales */
--carbon:   #11151A;   /* fondo general */
```

Tipografías: **Saira Condensed** para títulos y **Barlow** para texto, cargadas desde
Google Fonts en `index.html`.

---

## Publicar el sitio

Corre `npm run build` y sube la carpeta `dist/` a tu hosting.

En Netlify o Vercel se detecta solo. En un hosting propio (Apache, Nginx, cPanel) hay que
redirigir todas las rutas a `index.html`, porque el enrutamiento es del lado del cliente;
si no, al recargar `/motos` el servidor devuelve 404. Para Apache, crea un `.htaccess`
en la raíz:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Si vas a publicarlo dentro de un subdirectorio, cambia `base` en `vite.config.js`.

---

## Pendientes conocidos

- Datos de contacto y NIT son de ejemplo.
- Los precios están vacíos.
- Las fichas técnicas son valores de referencia de cada modelo; conviene contrastarlas
  con la ficha oficial de Bajaj Colombia antes de publicar.
- El formulario de contacto no envía correo: arma el mensaje y lo abre en WhatsApp.
  Si prefieres recibirlo por email, se puede conectar a un servicio como Formspree.
