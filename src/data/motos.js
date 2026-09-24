// =====================================================================
//  CATALOGO DE MOTOS
//
//  Para AGREGAR un modelo:
//    1. Crea la carpeta  public/motos/<slug>/  y mete las fotos
//       numeradas: 1.webp, 2.webp, 3.webp...  (fondo transparente)
//    2. Agrega el objeto al arreglo MOTOS con su slug y su cantidad
//       de fotos en el campo "fotos".
//
//  Para cambiar un PRECIO: escribelo en el campo precio,
//  por ejemplo  precio: "$ 12.499.000".  Si lo dejas vacio, la pagina
//  muestra "Consulta el precio".
// =====================================================================

export const LINEAS = [
  {id:"pulsar",   nombre:"Pulsar",   desc:"Deportivas y naked de 125 a 400 cc. Potencia, frenos ABS y tablero digital para quien busca carácter."},
  {id:"boxer",    nombre:"Boxer",    desc:"Las más económicas en consumo y mantenimiento. Hechas para el trabajo diario y los kilómetros duros."},
  {id:"discover", nombre:"Discover", desc:"El equilibrio entre confort y rendimiento: asiento largo, suspensión suave y buen consumo."},
  {id:"dominar",  nombre:"Dominar",  desc:"Touring y carretera. Motor refrigerado por líquido, ABS de doble canal y comodidad para viajes largos."}
];

export const MOTOS = [
  {slug:"pulsar-n125", fotos:4, nombre:"Pulsar N 125", linea:"pulsar", precio:"", cc:"124.4 cc",
   resumen:"La entrada a la familia Pulsar: inyección electrónica, tablero digital y consumo bajo para moverte todos los días por Palmira.",
   specs:{"Cilindraje":"124.4 cc","Potencia":"12 HP @ 8.500 rpm","Torque":"11 Nm @ 6.000 rpm","Alimentación":"Inyección electrónica","Arranque":"Eléctrico","Frenos":"Disco delantero / tambor trasero con CBS","Transmisión":"5 velocidades","Tanque":"11 litros"}},

  {slug:"pulsar-ns125", fotos:5, nombre:"Pulsar NS 125", linea:"pulsar", precio:"", cc:"124.5 cc",
   resumen:"El chasis perimetral de la familia NS en formato 125. Ágil en ciudad y con la postura deportiva que caracteriza a la línea.",
   specs:{"Cilindraje":"124.5 cc","Potencia":"12 HP @ 8.500 rpm","Torque":"11 Nm @ 7.000 rpm","Chasis":"Perimetral","Frenos":"Disco 240 mm / tambor trasero","Suspensión":"Telescópica / monoamortiguador Nitrox","Transmisión":"5 velocidades","Tanque":"12 litros"}},

  {slug:"pulsar-p150", fotos:1, nombre:"Pulsar P150", linea:"pulsar", precio:"", cc:"149.68 cc",
   resumen:"Pensada para el uso diario sin renunciar al nombre Pulsar: asiento largo, postura erguida y buen rendimiento de combustible.",
   specs:{"Cilindraje":"149.68 cc","Potencia":"14.5 HP @ 8.500 rpm","Torque":"13.5 Nm @ 6.000 rpm","Arranque":"Eléctrico","Frenos":"Disco 260 mm / disco 130 mm","Suspensión":"Telescópica / doble amortiguador","Transmisión":"5 velocidades","Tanque":"14 litros"}},

  {slug:"pulsar-n160", fotos:4, nombre:"Pulsar N 160 FI ABS", linea:"pulsar", precio:"", cc:"164.82 cc",
   resumen:"Naked de 160 cc con ABS, freno de disco en ambas ruedas y llantas anchas. Uno de los modelos de mayor rotación de la marca.",
   specs:{"Cilindraje":"164.82 cc","Potencia":"16 HP @ 8.750 rpm","Torque":"14.65 Nm @ 6.750 rpm","Alimentación":"Inyección electrónica","Frenos":"Disco 300 mm / disco 230 mm con ABS","Suspensión":"Telescópica / monoamortiguador","Transmisión":"5 velocidades","Tanque":"14 litros"}},

  {slug:"pulsar-ns160", fotos:3, nombre:"Pulsar NS 160 FI ABS", linea:"pulsar", precio:"", cc:"160.3 cc",
   resumen:"Deportiva naked con chasis perimetral y motor de cuatro válvulas. Estabilidad alta en carretera y frenado con ABS.",
   specs:{"Cilindraje":"160.3 cc","Potencia":"17.2 HP @ 9.000 rpm","Torque":"14.6 Nm @ 7.250 rpm","Chasis":"Perimetral","Frenos":"Disco 240 mm / disco 230 mm con ABS","Suspensión":"Telescópica / monoamortiguador Nitrox","Transmisión":"5 velocidades","Tanque":"12 litros"}},

  {slug:"pulsar-ns200", fotos:4, nombre:"Pulsar NS 200 FI ABS", linea:"pulsar", precio:"", cc:"199.5 cc",
   resumen:"Refrigeración líquida, cuatro válvulas y triple bujía. La naked de 200 cc de referencia en Colombia.",
   specs:{"Cilindraje":"199.5 cc","Potencia":"24.5 HP @ 9.750 rpm","Torque":"18.7 Nm @ 8.000 rpm","Refrigeración":"Líquida","Frenos":"Disco 300 mm / disco 230 mm con ABS","Chasis":"Perimetral","Transmisión":"6 velocidades","Tanque":"12 litros"}},

  {slug:"pulsar-rs200", fotos:1, nombre:"Pulsar RS 200 FI ABS", linea:"pulsar", precio:"", cc:"199.5 cc",
   resumen:"La única carenada de la familia: aerodinámica completa, faros proyectores y ABS. Pensada para carretera abierta.",
   specs:{"Cilindraje":"199.5 cc","Potencia":"24.5 HP @ 9.750 rpm","Torque":"18.6 Nm @ 8.000 rpm","Refrigeración":"Líquida","Frenos":"Disco 300 mm / disco 230 mm con ABS","Carrocería":"Carenado completo","Transmisión":"6 velocidades","Tanque":"13 litros"}},

  {slug:"pulsar-n250", fotos:1, nombre:"Pulsar N 250", linea:"pulsar", precio:"", cc:"249.07 cc",
   resumen:"Naked de un cuarto de litro con embrague asistido antirrebote, ABS de doble canal y tablero con conectividad.",
   specs:{"Cilindraje":"249.07 cc","Potencia":"24.5 HP @ 8.750 rpm","Torque":"21.5 Nm @ 6.500 rpm","Embrague":"Asistido y antirrebote","Frenos":"Disco 300 mm / disco 230 mm con ABS doble canal","Transmisión":"5 velocidades","Llantas":"17 pulgadas delantera y trasera","Tanque":"14 litros"}},

  {slug:"pulsar-ns400z", fotos:4, nombre:"Pulsar NS 400Z", linea:"pulsar", precio:"", cc:"373.27 cc",
   resumen:"La Pulsar más potente de la historia. Modos de manejo, ABS de doble canal y 40 HP en un chasis perimetral.",
   specs:{"Cilindraje":"373.27 cc","Potencia":"40 HP @ 8.800 rpm","Torque":"35 Nm @ 6.500 rpm","Refrigeración":"Líquida","Modos de manejo":"Road, Rain, Sport y Off-road","Frenos":"Disco 320 mm / disco 230 mm con ABS doble canal","Transmisión":"6 velocidades","Tanque":"12 litros"}},

  {slug:"boxer-ct100-ks", fotos:1, nombre:"Boxer CT 100 KS", linea:"boxer", precio:"", cc:"102 cc",
   resumen:"La moto de trabajo por excelencia: consumo mínimo, suspensión reforzada y el costo de mantenimiento más bajo del catálogo.",
   specs:{"Cilindraje":"102 cc","Potencia":"7.9 HP @ 7.500 rpm","Torque":"8.34 Nm @ 5.500 rpm","Arranque":"Pedal","Frenos":"Tambor delantero y trasero","Suspensión":"Telescópica / doble amortiguador","Transmisión":"4 velocidades","Tanque":"10.5 litros"}},

  {slug:"boxer-ct100-es", fotos:2, nombre:"Boxer CT 100 ES", linea:"boxer", precio:"", cc:"102 cc",
   resumen:"La misma CT 100 de siempre, ahora con arranque eléctrico. Comodidad para el uso urbano intensivo y de reparto.",
   specs:{"Cilindraje":"102 cc","Potencia":"7.9 HP @ 7.500 rpm","Torque":"8.34 Nm @ 5.500 rpm","Arranque":"Eléctrico y pedal","Frenos":"Tambor delantero y trasero","Suspensión":"Telescópica reforzada","Transmisión":"4 velocidades","Tanque":"10.5 litros"}},

  {slug:"boxer-ct125", fotos:1, nombre:"Boxer CT 125", linea:"boxer", precio:"", cc:"124.5 cc",
   resumen:"Más torque que la CT 100 manteniendo el consumo bajo. Ideal para domicilios y trayectos con carga.",
   specs:{"Cilindraje":"124.5 cc","Potencia":"10.7 HP @ 7.500 rpm","Torque":"11 Nm @ 5.500 rpm","Arranque":"Eléctrico y pedal","Frenos":"Tambor / tambor","Suspensión":"Telescópica reforzada","Transmisión":"5 velocidades","Tanque":"11 litros"}},

  {slug:"boxer-s", fotos:1, nombre:"Boxer S", linea:"boxer", precio:"", cc:"144.8 cc",
   resumen:"La versión más equipada de la Boxer: freno de disco delantero y acabados deportivos sin perder la economía de la línea.",
   specs:{"Cilindraje":"144.8 cc","Potencia":"12 HP @ 7.500 rpm","Torque":"12.5 Nm @ 5.000 rpm","Arranque":"Eléctrico y pedal","Frenos":"Disco delantero / tambor trasero","Suspensión":"Telescópica / doble amortiguador","Transmisión":"5 velocidades","Tanque":"12 litros"}},

  {slug:"boxer-150x", fotos:2, nombre:"Boxer 150 X", linea:"boxer", precio:"", cc:"144.8 cc",
   resumen:"Chasis y suspensión reforzados para carga y vías destapadas. La opción del transportador y del campo.",
   specs:{"Cilindraje":"144.8 cc","Potencia":"12 HP @ 7.500 rpm","Torque":"12.5 Nm @ 5.000 rpm","Suspensión":"Telescópica larga / doble amortiguador reforzado","Frenos":"Tambor / tambor","Llantas":"Taco mixto","Transmisión":"5 velocidades","Tanque":"12 litros"}},

  {slug:"discover-125", fotos:1, nombre:"Discover 125 ST-R Sport", linea:"discover", precio:"", cc:"124.6 cc",
   resumen:"Punto medio entre economía y confort: asiento largo, suspensión suave y buen rendimiento de combustible para el día a día.",
   specs:{"Cilindraje":"124.6 cc","Potencia":"11 HP @ 7.500 rpm","Torque":"11 Nm @ 5.500 rpm","Frenos":"Disco delantero / tambor trasero","Suspensión":"Telescópica / Nitrox","Transmisión":"5 velocidades","Tanque":"8 litros"}},

  {slug:"dominar-250", fotos:1, nombre:"Dominar 250", linea:"dominar", precio:"", cc:"248.77 cc",
   resumen:"La entrada a la familia touring: motor refrigerado por líquido, ABS de doble canal y postura cómoda para viaje.",
   specs:{"Cilindraje":"248.77 cc","Potencia":"27 HP @ 8.500 rpm","Torque":"23.5 Nm @ 6.500 rpm","Refrigeración":"Líquida","Frenos":"Disco 300 mm / disco 230 mm con ABS doble canal","Transmisión":"6 velocidades","Tanque":"13 litros"}},

  {slug:"dominar-400", fotos:3, nombre:"Dominar 400 UG", linea:"dominar", precio:"", cc:"373.3 cc",
   resumen:"La insignia de Bajaj para carretera: 40 HP, suspensión invertida, iluminación LED y tablero secundario en el tanque.",
   specs:{"Cilindraje":"373.3 cc","Potencia":"40 HP @ 8.800 rpm","Torque":"35 Nm @ 7.000 rpm","Suspensión":"Invertida USD 43 mm / monoamortiguador","Frenos":"Disco 320 mm / disco 230 mm con ABS doble canal","Transmisión":"6 velocidades","Iluminación":"LED completa","Tanque":"13 litros"}},

  {slug:"dominar-400-tera", fotos:2, nombre:"Dominar 400 Tera Touring", linea:"dominar", precio:"", cc:"373.3 cc",
   resumen:"La Dominar 400 preparada de fábrica para viajar: accesorios de touring instalados y protección adicional para carretera.",
   specs:{"Cilindraje":"373.3 cc","Potencia":"40 HP @ 8.800 rpm","Torque":"35 Nm @ 7.000 rpm","Equipamiento":"Kit touring de fábrica","Suspensión":"Invertida USD 43 mm / monoamortiguador","Frenos":"Disco 320 mm / disco 230 mm con ABS doble canal","Transmisión":"6 velocidades","Tanque":"13 litros"}}
];

// Cada modelo apunta a public/motos/<slug>/1.webp, 2.webp, ...
export const imagenesDe = (moto) =>
  Array.from({ length: moto.fotos || 1 }, (_, i) => `${import.meta.env.BASE_URL}motos/${moto.slug}/${i + 1}.webp`);

export const porLinea = (id) => MOTOS.filter((m) => m.linea === id);
export const buscarMoto = (slug) => MOTOS.find((m) => m.slug === slug);
export const nombreLinea = (id) => (LINEAS.find((l) => l.id === id) || {}).nombre || id;
