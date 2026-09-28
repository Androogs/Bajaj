/**
 * CATÁLOGO AKT – Concesionario Palmira (SUMOTO S.A.)
 * ------------------------------------------------------------------
 * Precios: los del proyecto original (tomados de aktmotos.com); verificados
 * contra el sitio de AKT en septiembre de 2026. Fichas técnicas: aktmotos.com.
 * ⚠️ Validar precios y especificaciones con el área comercial antes de publicar.
 *    Precios de referencia: no incluyen matrícula, SOAT ni seguros.
 *
 * Imágenes: src/assets/motos/<ruta indicada en `imagenes`>
 * `extra`: categorías adicionales donde también aparece el modelo.
 */
export const CATEGORIAS = [
  {
    "id": "calle",
    "nombre": "Calle",
    "lema": "Estilo urbano y rendimiento diario"
  },
  {
    "id": "aventura",
    "nombre": "Aventura",
    "lema": "Para explorar sin límites"
  },
  {
    "id": "akt-voge",
    "nombre": "AKT VOGE",
    "lema": "Alta cilindrada, tecnología superior"
  },
  {
    "id": "automaticas",
    "nombre": "Automáticas",
    "lema": "Comodidad total, sin embrague"
  },
  {
    "id": "semiautomaticas",
    "nombre": "Semiautomáticas",
    "lema": "Fáciles de manejar desde el primer día"
  },
  {
    "id": "enduro",
    "nombre": "Enduro",
    "lema": "Todoterreno para salir de la vía"
  },
  {
    "id": "motocarros",
    "nombre": "Motocarros",
    "lema": "Soluciones de carga para tu negocio"
  }
]

export const MOTOS = [
  {
    "slug": "ds-300",
    "nombre": "DS 300",
    "categoria": "akt-voge",
    "extra": [],
    "lema": "Atrévete a lo que otros sueñan",
    "precio": 15590000,
    "precioAntes": 15990000,
    "imagenes": [
      "akt-voge/ds-300/ds-300-1.webp",
      "akt-voge/ds-300/ds-300-2.webp"
    ],
    "destacados": [
      "Motor monocilíndrico DOHC de 292 cc refrigerado por líquido",
      "Suspensión invertida delantera para mayor estabilidad",
      "Sistema de frenos ABS de doble canal",
      "Cuadro de instrumentos LCD digital",
      "Chasis de acero reforzado para rutas mixtas"
    ],
    "resumen": {
      "cc": "292",
      "hp": "25,5",
      "nm": "23,5",
      "tanque": "16 L"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "292 cc",
        "Potencia máxima": "25,5 hp @ 8.500 rpm",
        "Torque máximo": "23,5 Nm @ 7.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco 300 mm, 2 pistones ABS",
        "Freno trasero": "Disco 200 mm, 1 pistón ABS",
        "Suspensión delantera": "Invertida de 35 mm-134 mm recorrido",
        "Suspensión trasera": "Amortiguador con bieleta",
        "Llanta delantera": "110/80-17",
        "Llanta trasera": "150/60-17"
      },
      "Dimensiones": {
        "Tanque de combustible": "16 litros"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/aventura/ds-300/"
  },
  {
    "slug": "ds525x",
    "nombre": "DS525X",
    "categoria": "akt-voge",
    "extra": [],
    "lema": "Domina cualquier terreno",
    "precio": 31990000,
    "precioAntes": null,
    "imagenes": [
      "akt-voge/ds525x/ds525x-1.webp",
      "akt-voge/ds525x/ds525x-2.webp"
    ],
    "destacados": [
      "Motor de 494 cc con potencia controlada y eficiente",
      "Peso ligero de 190 kg con dos modos de conducción",
      "Pantalla TFT de 7″ con conectividad Bluetooth",
      "Frenos Nissin con ABS de doble canal y TCS desconectable",
      "Suspensión KYB para estabilidad en todo terreno"
    ],
    "resumen": {
      "cc": "494",
      "hp": "47",
      "nm": "44,5",
      "tanque": "4,4 gal"
    },
    "specs": {
      "Motor": {
        "Tipo de motor": "Bíclindrico – DOHC",
        "Cilindraje": "494 cc",
        "Potencia máxima": "47 hp @ 8.500 rpm",
        "Torque máximo": "44,5 Nm @ 7.000 rpm"
      },
      "Chasis": {
        "Freno delantero": "Doble disco ABS Nissin",
        "Freno trasero": "Disco ABS Nissin",
        "Suspensión delantera": "Invertida KYB",
        "Suspensión trasera": "Monoamortiguador regulable KYB",
        "Llanta delantera": "Metzeler Tourance",
        "Llanta trasera": "Metzeler Tourance"
      },
      "Dimensiones": {
        "Largo": "2170 mm",
        "Ancho": "820 mm",
        "Alto": "1380 mm",
        "Distancia entre ejes": "1450 mm",
        "Distancia al piso": "200 mm",
        "Altura del sillín": "820 mm",
        "Tanque de combustible": "4,4 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/aventura/ds525x/"
  },
  {
    "slug": "ds800x-rally",
    "nombre": "DS800X Rally",
    "categoria": "akt-voge",
    "extra": [],
    "lema": "Potencia hecha aventura",
    "precio": 42990000,
    "precioAntes": null,
    "imagenes": [
      "akt-voge/ds800x-rally/ds800x-rally-1.webp"
    ],
    "destacados": [
      "Motor bicilíndrico 798 cc con 93.8 HP",
      "Frenos radiales NISSIN con ABS de doble canal",
      "Suspensión KYB totalmente ajustable",
      "Llantas Pirelli Scorpion Trail",
      "Entregas enero y febrero 2027"
    ],
    "resumen": {
      "cc": "798",
      "hp": "93,8",
      "nm": "81",
      "tanque": null
    },
    "specs": {
      "Motor": {
        "Cilindraje": "798 cc",
        "Cilindros": "2",
        "Potencia máxima": "93,8 hp @ 9.000 rpm",
        "Torque máximo": "81 Nm @ 6.500 rpm"
      },
      "Chasis": {
        "Freno delantero": "Disco hidráulico",
        "Freno trasero": "Disco hidráulico",
        "Llanta delantera": "90/90-21",
        "Llanta trasera": "150/70R18"
      },
      "Dimensiones": {
        "Distancia entre ejes": "1575 mm"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/aventura/ds800x-rally/"
  },
  {
    "slug": "ds900x",
    "nombre": "DS900X",
    "categoria": "akt-voge",
    "extra": [],
    "lema": "La potencia hecha aventura",
    "precio": 51990000,
    "precioAntes": null,
    "imagenes": [
      "akt-voge/ds900x/ds900x-1.webp"
    ],
    "destacados": [
      "Motor bicilíndrico 895 cc con 94 HP",
      "Quickshifter de serie y 4 modos de conducción",
      "Frenos Brembo con ABS desconectable",
      "Pantalla TFT de 7 pulgadas",
      "Sistema keyless y calefacción en asiento y manillares"
    ],
    "resumen": {
      "cc": "895",
      "hp": "94",
      "nm": "95",
      "tanque": "4,5 gal"
    },
    "specs": {
      "Motor": {
        "Tipo de motor": "Bicilíndrico 8 válvulas – DOHC",
        "Cilindraje": "895 cc",
        "Potencia máxima": "94 hp @ 8.250 rpm",
        "Torque máximo": "95 Nm @ 6.000 rpm"
      },
      "Chasis": {
        "Freno delantero": "Doble disco ABS Brembo",
        "Freno trasero": "Disco ABS Brembo",
        "Suspensión delantera": "Invertida KYB",
        "Suspensión trasera": "Monoamortiguador regulable en extensión y precarga KYB",
        "Llanta delantera": "Pirelli Scorpion Trail",
        "Llanta trasera": "Pirelli Scorpion Trail"
      },
      "Dimensiones": {
        "Largo": "2325 mm",
        "Ancho": "940 mm",
        "Alto": "1429 mm",
        "Distancia entre ejes": "1580 mm",
        "Distancia al piso": "190 mm",
        "Tanque de combustible": "4,5 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/aventura/ds900x/"
  },
  {
    "slug": "rally-300",
    "nombre": "Rally 300",
    "categoria": "akt-voge",
    "extra": [],
    "lema": "El terreno no será excusa",
    "precio": 17590000,
    "precioAntes": 17990000,
    "imagenes": [
      "akt-voge/rally-300/rally-300-1.webp",
      "akt-voge/rally-300/rally-300-2.webp",
      "akt-voge/rally-300/rally-300-3.webp"
    ],
    "destacados": [
      "Motor 292 cc monocilíndrico refrigerado por líquido con 28.1 HP",
      "Chasis robusto con gran despeje y suspensiones largas",
      "Pantalla LCD con indicador de cambio y temperatura",
      "Frenos ABS de doble canal con desconexión de llanta trasera",
      "Horquilla invertida con mayor recorrido para terrenos irregulares"
    ],
    "resumen": {
      "cc": "292",
      "hp": "28,1",
      "nm": "25",
      "tanque": "11 L"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "292 cc",
        "Potencia máxima": "28,1 hp @ 9.000 rpm",
        "Torque máximo": "25 Nm @ 6.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco 265 mm, ABS",
        "Freno trasero": "Disco 220 mm, ABS desconectable",
        "Suspensión delantera": "Invertida de 41 mm-206 mm recorrido",
        "Suspensión trasera": "Amortiguador con bieleta",
        "Llanta delantera": "3.00 – 21 51P",
        "Llanta trasera": "5.10 – 18 69P",
        "Tipo de llanta": "Con cámara"
      },
      "Dimensiones": {
        "Tanque de combustible": "11 litros"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/aventura/rally-300/"
  },
  {
    "slug": "rally-300-arena",
    "nombre": "Rally 300 Arena",
    "categoria": "akt-voge",
    "extra": [],
    "lema": "El terreno no será excusa",
    "precio": 19090000,
    "precioAntes": 19490000,
    "imagenes": [
      "akt-voge/rally-300-arena/rally-300-arena-1.webp"
    ],
    "destacados": [
      "Motor 292 cc monocilíndrico refrigerado por líquido con 28.1 HP",
      "Chasis robusto con gran despeje del suelo y suspensiones largas",
      "Exploradoras Full LED con iluminación potente y bajo consumo",
      "Defensas integradas para protección del motor",
      "Protector de cárter AKT-VOGE para terrenos difíciles"
    ],
    "resumen": {
      "cc": "292",
      "hp": "28,1",
      "nm": "25",
      "tanque": "11 L"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "292 cc",
        "Potencia máxima": "28,1 hp @ 9.000 rpm",
        "Torque máximo": "25 Nm @ 6.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco 265 mm, ABS",
        "Freno trasero": "Disco 220 mm, ABS desconectable",
        "Suspensión delantera": "Invertida de 41 mm-206 mm recorrido",
        "Suspensión trasera": "Amortiguador con bieleta",
        "Llanta delantera": "3.00 – 21 51P",
        "Llanta trasera": "5.10 – 18 69P",
        "Tipo de llanta": "Con cámara"
      },
      "Dimensiones": {
        "Tanque de combustible": "11 litros"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/aventura/rally-300-arena/"
  },
  {
    "slug": "xrs-180",
    "nombre": "XRS 180",
    "categoria": "akt-voge",
    "extra": [
      "automaticas"
    ],
    "lema": "Inteligente. Dominante.",
    "precio": 13990000,
    "precioAntes": null,
    "imagenes": [
      "akt-voge/xrs-180/xrs-180-1.webp",
      "akt-voge/xrs-180/xrs-180-2.webp",
      "akt-voge/xrs-180/xrs-180-3.webp"
    ],
    "destacados": [
      "Motor 174CC con 4 válvulas para potencia y eficiencia",
      "TCS Control de tracción para estabilidad en superficies mojadas",
      "Autostart & Stop para ahorro de combustible",
      "Pantalla TFT con mirroring y conectividad smartphone",
      "Frenos ABS doble canal y Smart Key"
    ],
    "resumen": {
      "cc": "174,1",
      "hp": "17,4",
      "nm": "16",
      "tanque": "2,4 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "174,1 cc",
        "Potencia máxima": "17,4 hp @ 8.500 rpm",
        "Torque máximo": "16 Nm @ 6.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco hidráulico ABS",
        "Freno trasero": "Disco hidráulico ABS",
        "Llanta delantera": "110/80-14",
        "Llanta trasera": "130/70-13"
      },
      "Dimensiones": {
        "Largo": "1930 mm",
        "Ancho": "770 mm",
        "Alto": "1300 mm",
        "Distancia entre ejes": "1330 mm",
        "Tanque de combustible": "2,4 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/akt-voge/180-xrs/"
  },
  {
    "slug": "dynamic-pro-cbs",
    "nombre": "Dynamic Pro CBS",
    "categoria": "automaticas",
    "extra": [],
    "lema": "Comodidad y eficiencia",
    "precio": 8090000,
    "precioAntes": 8490000,
    "imagenes": [
      "automaticas/dynamic-pro-cbs/dynamic-pro-cbs-1.webp",
      "automaticas/dynamic-pro-cbs/dynamic-pro-cbs-2.webp",
      "automaticas/dynamic-pro-cbs/dynamic-pro-cbs-3.webp",
      "automaticas/dynamic-pro-cbs/dynamic-pro-cbs-4.webp"
    ],
    "destacados": [
      "Llantas Dunlop Scootsmart con gran agarre y estabilidad",
      "Diseño compacto y ergonómico para agilidad urbana",
      "Peso liviano que facilita conducción y parqueo",
      "Frenos CBS (delantero disco, trasero tambor)",
      "Motor 124.6 cc CDI con potencia de 9.78 hp"
    ],
    "resumen": {
      "cc": "124,6",
      "hp": "9,78",
      "nm": "8,6",
      "tanque": "1,62 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "124,6 cc",
        "Potencia máxima": "9,78 hp @ 8.500 rpm",
        "Torque máximo": "8,6 Nm @ 7.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco lobulado accionado por CBS",
        "Freno trasero": "Tambor accionado por CBS",
        "Suspensión delantera": "Telescópica hidráulica",
        "Suspensión trasera": "Doble amortiguador graduable",
        "Llanta delantera": "Dunlop 120/70-12",
        "Llanta trasera": "Dunlop 130/70-12"
      },
      "Dimensiones": {
        "Largo": "1905 mm",
        "Ancho": "690 mm",
        "Alto": "1238 mm",
        "Distancia entre ejes": "1350 mm",
        "Distancia al piso": "130 mm",
        "Tanque de combustible": "1,62 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/automaticas/dynamic-pro-cbs/"
  },
  {
    "slug": "dynamic-rx-fi",
    "nombre": "Dynamic RX Fi",
    "categoria": "automaticas",
    "extra": [],
    "lema": "Más tecnología",
    "precio": 9490000,
    "precioAntes": 9890000,
    "imagenes": [
      "automaticas/dynamic-rx-fi/dynamic-rx-fi-1.webp",
      "automaticas/dynamic-rx-fi/dynamic-rx-fi-2.webp",
      "automaticas/dynamic-rx-fi/dynamic-rx-fi-3.webp"
    ],
    "destacados": [
      "Motor 150 FI de alto rendimiento con inyección electrónica",
      "Frenos CBS con discos delantero y trasero",
      "Farola LED para iluminación eficiente",
      "Llantas Dunlop Sellomatic",
      "Velocímetro digital"
    ],
    "resumen": {
      "cc": "149,6",
      "hp": "11,13",
      "nm": "11,5",
      "tanque": "1,7 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "149,6 cc",
        "Potencia máxima": "11,13 hp @ 8.000 rpm",
        "Torque máximo": "11,5 Nm @ 6.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco accionado por CBS",
        "Freno trasero": "Disco accionado por CBS",
        "Suspensión trasera": "Doble amortiguador",
        "Llanta delantera": "120/70-12",
        "Llanta trasera": "130/70-12"
      },
      "Dimensiones": {
        "Largo": "1905 mm",
        "Ancho": "690 mm",
        "Alto": "1238 mm",
        "Distancia entre ejes": "1350 mm",
        "Distancia al piso": "130 mm",
        "Tanque de combustible": "1,7 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/automaticas/dynamic-rx-fi/"
  },
  {
    "slug": "jet-evo",
    "nombre": "Jet Evo",
    "categoria": "automaticas",
    "extra": [],
    "lema": "Evoluciona contigo",
    "precio": 12590000,
    "precioAntes": 12990000,
    "imagenes": [
      "automaticas/jet-evo/jet-evo-1.webp",
      "automaticas/jet-evo/jet-evo-2.webp"
    ],
    "destacados": [
      "Frenos ABS de doble canal para máxima seguridad",
      "Control de tracción (TCS) para estabilidad en todo momento",
      "Inyección electrónica con precisión y menor consumo",
      "Tablero digital con información clara y precisa",
      "Motor 149.6 cc automático CVT, diseño moderno urbano"
    ],
    "resumen": {
      "cc": "149,6",
      "hp": "14",
      "nm": "13,5",
      "tanque": "3,2 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "149,6 cc",
        "Potencia máxima": "14 hp @ 8.500 rpm",
        "Torque máximo": "13,5 Nm @ 6.500 rpm",
        "Transmisión": "Automática CVT"
      },
      "Chasis": {
        "Freno delantero": "Disco ABS doble canal",
        "Freno trasero": "Disco ABS doble canal",
        "Suspensión delantera": "Telescópica hidráulica",
        "Suspensión trasera": "Doble amortiguador",
        "Llanta delantera": "100 / 90 – 14",
        "Llanta trasera": "120 / 80 – 14"
      },
      "Dimensiones": {
        "Largo": "2015 mm",
        "Ancho": "760 mm",
        "Alto": "1208 mm",
        "Tanque de combustible": "3,2 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/automaticas/jet-evo/"
  },
  {
    "slug": "tt200-rally",
    "nombre": "TT200 Rally",
    "categoria": "aventura",
    "extra": [],
    "lema": "Domina cualquier terreno",
    "precio": 10590000,
    "precioAntes": 11390000,
    "imagenes": [
      "aventura/tt200-rally/tt200-rally-1.webp"
    ],
    "destacados": [
      "Motor SOHC de 197 cc, 16.5 HP y 15.5 Nm de torque",
      "Frenos ABS con asistencia inteligente de frenado",
      "Exploradoras LED para mayor visibilidad",
      "Llantas Enduro 3 SAHARA Metzeler de alto desempeño",
      "Maletero Spartan resistente y funcional"
    ],
    "resumen": {
      "cc": "197",
      "hp": "16,5",
      "nm": "15,5",
      "tanque": "3,17 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "197 cc",
        "Potencia máxima": "16,5 hp @ 8.500 rpm",
        "Torque máximo": "15,5 Nm @ 6.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco lobulado",
        "Freno trasero": "Disco lobulado",
        "Suspensión delantera": "Telescópica hidráulica",
        "Suspensión trasera": "Unishock",
        "Llanta delantera": "90/90-19 doble propósito",
        "Llanta trasera": "110/90-17 doble propósito"
      },
      "Dimensiones": {
        "Largo": "2080 mm",
        "Ancho": "780 mm",
        "Alto": "1170 mm",
        "Distancia entre ejes": "1370 mm",
        "Distancia al piso": "255 mm",
        "Tanque de combustible": "3,17 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/aventura/tt200-rally/"
  },
  {
    "slug": "tt200-con-abs",
    "nombre": "TT200 con ABS",
    "categoria": "aventura",
    "extra": [],
    "lema": "Domina cualquier terreno",
    "precio": 9790000,
    "precioAntes": 10590000,
    "imagenes": [
      "aventura/tt200-con-abs/tt200-con-abs-1.webp",
      "aventura/tt200-con-abs/tt200-con-abs-2.webp"
    ],
    "destacados": [
      "Motor SOHC de 197 cc, 16.5 HP y 15.5 Nm de torque",
      "Suspensión preparada para absorber irregularidades del terreno",
      "Tablero digital con visualización clara de datos de conducción",
      "Llantas Metzeler de alto desempeño en todo terreno",
      "Sistema ABS integrado"
    ],
    "resumen": {
      "cc": "197",
      "hp": "16,5",
      "nm": "15,5",
      "tanque": "3,17 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "197 cc",
        "Potencia máxima": "16,5 hp @ 8.500 rpm",
        "Torque máximo": "15,5 Nm @ 6.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco lobulado",
        "Freno trasero": "Disco lobulado",
        "Suspensión delantera": "Telescópica hidráulica",
        "Suspensión trasera": "Unishock",
        "Llanta delantera": "90/90-19 doble propósito",
        "Llanta trasera": "110/90-17 doble propósito"
      },
      "Dimensiones": {
        "Largo": "2080 mm",
        "Ancho": "780 mm",
        "Alto": "1170 mm",
        "Distancia entre ejes": "1370 mm",
        "Distancia al piso": "255 mm",
        "Tanque de combustible": "3,17 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/aventura/tt200/"
  },
  {
    "slug": "250-r",
    "nombre": "250 R",
    "categoria": "calle",
    "extra": [],
    "lema": "Revolución sobre el asfalto",
    "precio": 11590000,
    "precioAntes": 11990000,
    "imagenes": [
      "calle/250-r/250-r-1.webp",
      "calle/250-r/250-r-2.webp",
      "calle/250-r/250-r-3.webp"
    ],
    "destacados": [
      "Motor 249.4 cc con 24.1 HP y 23 Nm de torque",
      "Sistema ABS en freno delantero",
      "Inyección electrónica Bosch",
      "Slipper clutch para mayor seguridad",
      "Tablero digital"
    ],
    "resumen": {
      "cc": "249,4",
      "hp": "24,1",
      "nm": "23",
      "tanque": "3,17 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "249,4 cc",
        "Potencia máxima": "24,1 hp @ 7.500 rpm",
        "Torque máximo": "23 Nm @ 6.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco ABS",
        "Freno trasero": "Disco",
        "Llanta delantera": "110 – 70 17P",
        "Llanta trasera": "140 – 60 17P"
      },
      "Dimensiones": {
        "Largo": "2020 mm",
        "Ancho": "780 mm",
        "Alto": "1030 mm",
        "Distancia entre ejes": "1350 mm",
        "Distancia al piso": "170 mm",
        "Tanque de combustible": "3,17 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/calle/250-r/"
  },
  {
    "slug": "chr-125",
    "nombre": "CHR 125",
    "categoria": "calle",
    "extra": [],
    "lema": "Desafiando tradiciones",
    "precio": 5490000,
    "precioAntes": 5990000,
    "imagenes": [
      "calle/chr-125/chr-125-1.webp",
      "calle/chr-125/chr-125-2.webp",
      "calle/chr-125/chr-125-3.webp",
      "calle/chr-125/chr-125-4.webp"
    ],
    "destacados": [
      "Motor confiable CGR 125 cc con 10.3 HP",
      "Diseño para cualquier terreno con llantas doble propósito",
      "Slipper Clutch - Sistema anti rebote",
      "Tablero digital",
      "Frenos CBS para seguridad en cada frenada"
    ],
    "resumen": {
      "cc": "124,9",
      "hp": "10,3",
      "nm": "9,3",
      "tanque": "2,5 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "124,9 cc",
        "Potencia máxima": "10,3 hp @ 8.000 rpm",
        "Torque máximo": "9,3 Nm @ 7.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco",
        "Freno trasero": "Campana",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Doble spring regulable",
        "Llanta delantera": "2.75-18",
        "Llanta trasera": "110/90-16"
      },
      "Dimensiones": {
        "Largo": "1970 mm",
        "Ancho": "830 mm",
        "Alto": "1130 mm",
        "Distancia entre ejes": "1275 mm",
        "Distancia al piso": "240 mm",
        "Tanque de combustible": "2,5 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/calle/chr-125/"
  },
  {
    "slug": "cr4-125",
    "nombre": "CR4 125",
    "categoria": "calle",
    "extra": [],
    "lema": "Muévete distinto, rueda con carácter",
    "precio": 6590000,
    "precioAntes": 6990000,
    "imagenes": [
      "calle/cr4-125/cr4-125-1.webp",
      "calle/cr4-125/cr4-125-2.webp"
    ],
    "destacados": [
      "Motor 124 cc con balance ideal entre rendimiento y consumo",
      "Peso seco 118 kg para maniobrabilidad perfecta",
      "Frenos CBS para frenado seguro y equilibrado",
      "Suspensión trasera Unishock ajustable",
      "Diseño aerodinámico moderno con velocímetro digital"
    ],
    "resumen": {
      "cc": "124",
      "hp": "10",
      "nm": "9,2",
      "tanque": null
    },
    "specs": {
      "Motor": {
        "Cilindraje": "124 cc",
        "Potencia máxima": "10 hp @ 8.000 rpm",
        "Torque máximo": "9,2 Nm @ 8.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco lobulado",
        "Freno trasero": "Tambor",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Unishock",
        "Llanta delantera": "80/90 -17",
        "Llanta trasera": "120/70 – 17"
      },
      "Dimensiones": {
        "Largo": "1990 mm",
        "Ancho": "780 mm",
        "Alto": "1030 mm",
        "Distancia entre ejes": "1300 mm",
        "Distancia al piso": "170 mm",
        "Peso en seco": "118 kg"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/calle/cr4-125/"
  },
  {
    "slug": "cr4-150",
    "nombre": "CR4 150",
    "categoria": "calle",
    "extra": [],
    "lema": "Estilo y versatilidad en una sola moto",
    "precio": 6990000,
    "precioAntes": 7590000,
    "imagenes": [
      "calle/cr4-150/cr4-150-1.webp",
      "calle/cr4-150/cr4-150-2.webp"
    ],
    "destacados": [
      "Sistema slipper clutch que reduce el rebote de la rueda trasera",
      "Frenos CBS para frenado seguro y equilibrado",
      "Luces LED para mayor seguridad y visibilidad",
      "Velocímetro moderno con información detallada",
      "Eficiencia con estilo y excelente relación rendimiento-economía"
    ],
    "resumen": {
      "cc": "149",
      "hp": "11",
      "nm": "10",
      "tanque": "3,6 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "149 cc",
        "Potencia máxima": "11 hp @ 8.500 rpm",
        "Torque máximo": "10 Nm @ 7.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco lobulado",
        "Freno trasero": "Disco lobulado",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Unishock",
        "Llanta delantera": "80/90 -17",
        "Llanta trasera": "120/70 – 17"
      },
      "Dimensiones": {
        "Largo": "1990 mm",
        "Ancho": "780 mm",
        "Alto": "1030 mm",
        "Distancia entre ejes": "1300 mm",
        "Distancia al piso": "170 mm",
        "Tanque de combustible": "3,6 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/calle/cr4-150/"
  },
  {
    "slug": "cr4-200-pro",
    "nombre": "CR4 200 Pro",
    "categoria": "calle",
    "extra": [],
    "lema": "Versatilidad en una sola moto",
    "precio": 8590000,
    "precioAntes": 8990000,
    "imagenes": [
      "calle/cr4-200-pro/cr4-200-pro-1.webp",
      "calle/cr4-200-pro/cr4-200-pro-2.webp",
      "calle/cr4-200-pro/cr4-200-pro-3.webp"
    ],
    "destacados": [
      "Motor SOHC de 197 cc, 16.5 HP y 15.5 Nm de torque",
      "Transmisión de 6 velocidades",
      "Sistema de freno ABS",
      "Velocímetro digital con información de velocidad, gasolina, hora y odómetro",
      "Suspensión trasera Unishock ajustable"
    ],
    "resumen": {
      "cc": "197",
      "hp": "16,5",
      "nm": "15,5",
      "tanque": "3,96 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "197 cc",
        "Potencia máxima": "16,5 hp @ 8.000 rpm",
        "Torque máximo": "15,5 Nm @ 7.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco 272 mm, pinza 2 pistones",
        "Freno trasero": "Disco 230 mm",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Unishock con precarga graduable",
        "Llanta delantera": "80/90 – 17",
        "Llanta trasera": "120/70 – 17"
      },
      "Dimensiones": {
        "Largo": "2020 mm",
        "Ancho": "780 mm",
        "Alto": "1030 mm",
        "Distancia entre ejes": "1350 mm",
        "Distancia al piso": "170 mm",
        "Tanque de combustible": "3,96 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/calle/cr4-200-pro/"
  },
  {
    "slug": "nkd-125",
    "nombre": "NKD 125",
    "categoria": "calle",
    "extra": [],
    "lema": "Renovada por fuera, fiel a lo que eres por dentro",
    "precio": 4890000,
    "precioAntes": 5490000,
    "imagenes": [
      "calle/nkd-125/nkd-125-1.webp",
      "calle/nkd-125/nkd-125-2.webp",
      "calle/nkd-125/nkd-125-3.webp",
      "calle/nkd-125/nkd-125-4.webp",
      "calle/nkd-125/nkd-125-5.webp"
    ],
    "destacados": [
      "Diseño clásico renovado con farola LED",
      "Motor 124 cc con bajo consumo",
      "Frenos CBS para mayor estabilidad",
      "Slipper Clutch incorporado",
      "Tablero digital"
    ],
    "resumen": {
      "cc": "124",
      "hp": "10,34",
      "nm": "9,3",
      "tanque": "2,6 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "124 cc",
        "Potencia máxima": "10,34 hp @ 8.000 rpm",
        "Torque máximo": "9,3 Nm @ 7.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco",
        "Freno trasero": "Tambor",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Doble amortiguador regulable",
        "Llanta delantera": "2.75-18",
        "Llanta trasera": "3.00-18"
      },
      "Dimensiones": {
        "Largo": "1900 mm",
        "Ancho": "770 mm",
        "Alto": "800 mm",
        "Distancia entre ejes": "1270 mm",
        "Distancia al piso": "240 mm",
        "Tanque de combustible": "2,6 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/calle/nkd-125/"
  },
  {
    "slug": "nkd-125-classic",
    "nombre": "NKD 125 Classic",
    "categoria": "calle",
    "extra": [],
    "lema": "Más que una cara bonita, ¡es una leyenda!",
    "precio": 5490000,
    "precioAntes": 6090000,
    "imagenes": [
      "calle/nkd-125-classic/nkd-125-classic-1.webp"
    ],
    "destacados": [
      "Diseño retro con potencia moderna",
      "Rines Murelli en tono dorado",
      "Fuelles protectores de alta durabilidad",
      "La moto más vendida del país",
      "Freno trasero con CBS"
    ],
    "resumen": {
      "cc": "124",
      "hp": "10,34",
      "nm": "9,3",
      "tanque": "2,6 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "124 cc",
        "Potencia máxima": "10,34 hp @ 8.000 rpm",
        "Torque máximo": "9,3 Nm @ 7.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco",
        "Freno trasero": "Tambor con CBS",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Doble amortiguador regulable",
        "Llanta delantera": "2.75-18",
        "Llanta trasera": "3.00-18"
      },
      "Dimensiones": {
        "Largo": "1900 mm",
        "Ancho": "770 mm",
        "Alto": "800 mm",
        "Distancia entre ejes": "1270 mm",
        "Distancia al piso": "240 mm",
        "Tanque de combustible": "2,6 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/calle/nkd-125-classic/"
  },
  {
    "slug": "nkd-125-fp",
    "nombre": "NKD 125 FP",
    "categoria": "calle",
    "extra": [],
    "lema": "Más que una cara bonita, ¡es una leyenda!",
    "precio": 5890000,
    "precioAntes": 6490000,
    "imagenes": [
      "calle/nkd-125-fp/nkd-125-fp-1.webp"
    ],
    "destacados": [
      "Motor 124 cc CGR de 10.3 HP con Slipper Clutch",
      "Diseño neo-retro con detalles personalizados",
      "Rines Murelli metálicos",
      "Manubrio tipo fatbar",
      "Farola con protector integrado"
    ],
    "resumen": {
      "cc": "124",
      "hp": "10,34",
      "nm": "9,3",
      "tanque": "2,6 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "124 cc",
        "Potencia máxima": "10,34 hp @ 8.000 rpm",
        "Torque máximo": "9,3 Nm @ 7.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco",
        "Freno trasero": "Tambor",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Doble amortiguador regulable",
        "Llanta delantera": "2.75-18",
        "Llanta trasera": "3.00-18"
      },
      "Dimensiones": {
        "Largo": "1900 mm",
        "Ancho": "770 mm",
        "Alto": "800 mm",
        "Distancia entre ejes": "1270 mm",
        "Distancia al piso": "240 mm",
        "Tanque de combustible": "2,6 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/calle/nkd-125-fp/"
  },
  {
    "slug": "ttr-125",
    "nombre": "TTR 125",
    "categoria": "enduro",
    "extra": [],
    "lema": "Domina cualquier terreno",
    "precio": 7390000,
    "precioAntes": 7790000,
    "imagenes": [
      "enduro/ttr-125/ttr-125-1.webp",
      "enduro/ttr-125/ttr-125-2.webp"
    ],
    "destacados": [
      "Motor 124 cc eficiente y versátil",
      "Velocímetro digital con medidor de combustible",
      "Farola tipo enduro con luces LED",
      "Sistema de frenos CBS",
      "Carenajes en polipropileno de alta calidad"
    ],
    "resumen": {
      "cc": "124",
      "hp": "10,3",
      "nm": "9,3",
      "tanque": "2,9 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "124 cc",
        "Potencia máxima": "10,3 hp @ 8.000 rpm",
        "Torque máximo": "9,3 Nm @ 7.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco",
        "Freno trasero": "Campana",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Unishock",
        "Llanta delantera": "90/90-19 doble propósito",
        "Llanta trasera": "110/90-17 doble propósito"
      },
      "Dimensiones": {
        "Largo": "1998 mm",
        "Ancho": "780 mm",
        "Alto": "1120 mm",
        "Distancia entre ejes": "1330 mm",
        "Distancia al piso": "255 mm",
        "Tanque de combustible": "2,9 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/enduro/ttr-125/"
  },
  {
    "slug": "ttr-125-verde-militar",
    "nombre": "TTR 125 Verde militar",
    "categoria": "enduro",
    "extra": [],
    "lema": "Domina cualquier terreno",
    "precio": 7800000,
    "precioAntes": 8200000,
    "imagenes": [
      "enduro/ttr-125-verde-militar/ttr-125-verde-militar-1.webp"
    ],
    "destacados": [
      "Motor monocilíndrico 125cc Euro 3",
      "Sistema CBS de frenos antibloqueo",
      "Maletero amplio incluido",
      "Velocímetro flexible con lectura clara",
      "Construcción con materiales de alta resistencia"
    ],
    "resumen": {
      "cc": "125",
      "hp": "10,3",
      "nm": "9,3",
      "tanque": "2,9 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "125 cc",
        "Potencia máxima": "10,3 hp @ 8.000 rpm",
        "Torque máximo": "9,3 Nm @ 7.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco",
        "Freno trasero": "Campana",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Unishock",
        "Llanta delantera": "90/90-19 doble propósito",
        "Llanta trasera": "110/90-17 doble propósito"
      },
      "Dimensiones": {
        "Largo": "1998 mm",
        "Ancho": "780 mm",
        "Alto": "1120 mm",
        "Distancia entre ejes": "1330 mm",
        "Distancia al piso": "255 mm",
        "Tanque de combustible": "2,9 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/enduro/ttr125-verde-militar/"
  },
  {
    "slug": "ttr-200",
    "nombre": "TTR 200",
    "categoria": "enduro",
    "extra": [],
    "lema": "Domina cualquier terreno",
    "precio": 9190000,
    "precioAntes": 9590000,
    "imagenes": [
      "enduro/ttr-200/ttr-200-1.webp",
      "enduro/ttr-200/ttr-200-2.webp"
    ],
    "destacados": [
      "Motor de alto desempeño 200 cc",
      "16.5 HP y torque de 15.5 Nm",
      "Llantas Metzeler",
      "Doble disco lobulado y ABS",
      "Velocímetro digital"
    ],
    "resumen": {
      "cc": "197",
      "hp": "16,5",
      "nm": "15,5",
      "tanque": "2,9 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "197 cc",
        "Potencia máxima": "16,5 hp @ 8.500 rpm",
        "Torque máximo": "15,5 Nm @ 6.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco lobulado",
        "Freno trasero": "Disco lobulado",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Unishock",
        "Llanta delantera": "Metzeler",
        "Llanta trasera": "Metzeler"
      },
      "Dimensiones": {
        "Largo": "2080 mm",
        "Ancho": "780 mm",
        "Alto": "1120 mm",
        "Distancia entre ejes": "1370 mm",
        "Distancia al piso": "225 mm",
        "Tanque de combustible": "2,9 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/enduro/ttr-200/"
  },
  {
    "slug": "ttr-200-abs",
    "nombre": "TTR 200 ABS",
    "categoria": "enduro",
    "extra": [],
    "lema": "Domina cualquier terreno",
    "precio": 9390000,
    "precioAntes": 9790000,
    "imagenes": [
      "enduro/ttr-200-abs/ttr-200-abs-1.webp"
    ],
    "destacados": [
      "Motor de alto desempeño 200 cc con 16.5 HP",
      "Diseño renovado y robusto con look agresivo",
      "Defensas delanteras para protección extra",
      "Hand Savers para protección de manos",
      "Protector de cárter para terrenos exigentes"
    ],
    "resumen": {
      "cc": "197",
      "hp": "16,5",
      "nm": "15,5",
      "tanque": "2,9 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "197 cc",
        "Potencia máxima": "16,5 hp @ 8.500 rpm",
        "Torque máximo": "15,5 Nm @ 6.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco lobulado",
        "Freno trasero": "Disco lobulado",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Unishock",
        "Llanta delantera": "Metzeler",
        "Llanta trasera": "Metzeler"
      },
      "Dimensiones": {
        "Largo": "2080 mm",
        "Ancho": "780 mm",
        "Alto": "1120 mm",
        "Distancia entre ejes": "1370 mm",
        "Distancia al piso": "225 mm",
        "Tanque de combustible": "2,9 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/enduro/ttr-200-abs/"
  },
  {
    "slug": "karguero-200-edicion-especial",
    "nombre": "Karguero 200 Edición Especial",
    "categoria": "motocarros",
    "extra": [],
    "lema": "Hecho para trabajar. Diseñado para durar.",
    "precio": 15690000,
    "precioAntes": 16690000,
    "imagenes": [
      "motocarros/karguero-200-edicion-especial/karguero-200-edicion-especial-1.webp"
    ],
    "destacados": [
      "Motor 200cc con refrigeración por aire forzado",
      "Carga útil de 410 kg",
      "Parasol DuraLine impermeable y resistente a UV",
      "Defensa tubular de alta resistencia",
      "Volco robusto con laterales abatibles"
    ],
    "resumen": {
      "cc": "197",
      "hp": "12,07",
      "nm": "13,9",
      "tanque": "3,55 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "197 cc",
        "Potencia máxima": "12,07 hp @ 7.000 rpm",
        "Torque máximo": "13,9 Nm @ 5.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco hidráulico",
        "Freno trasero": "Tambor hidráulico",
        "Suspensión delantera": "Telescópica Reforzada",
        "Suspensión trasera": "Ballestas (5 Hojas)",
        "Llanta delantera": "4.50 – 12",
        "Llanta trasera": "4.50 – 12"
      },
      "Dimensiones": {
        "Largo": "3260 mm",
        "Ancho": "1250 mm",
        "Alto": "1420 mm",
        "Distancia entre ejes": "2250 mm",
        "Distancia al piso": "305 mm",
        "Peso en seco": "377 kg",
        "Capacidad de carga": "410 kg",
        "Tanque de combustible": "3,55 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/kargueros/karguero-200-edicion-especial/"
  },
  {
    "slug": "karguero-3w-200",
    "nombre": "Karguero 3W 200",
    "categoria": "motocarros",
    "extra": [],
    "lema": "Hecho para trabajar. Diseñado para durar.",
    "precio": 14490000,
    "precioAntes": 15490000,
    "imagenes": [
      "motocarros/karguero-3w-200/karguero-3w-200-1.webp"
    ],
    "destacados": [
      "Motor 197 cc de alto rendimiento con 12,07 HP",
      "Carga útil de 410 kg",
      "Freno delantero de disco hidráulico",
      "Velocímetro LED",
      "Suspensión reforzada"
    ],
    "resumen": {
      "cc": "197",
      "hp": "12,07",
      "nm": "13,9",
      "tanque": "3,55 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "197 cc",
        "Potencia máxima": "12,07 hp @ 7.000 rpm",
        "Torque máximo": "13,9 Nm @ 5.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco hidráulico",
        "Freno trasero": "Tambor hidráulico",
        "Suspensión delantera": "Telescópica Reforzada",
        "Suspensión trasera": "Ballestas (5 Hojas)",
        "Llanta delantera": "4.50 – 12",
        "Llanta trasera": "4.50 – 12"
      },
      "Dimensiones": {
        "Largo": "3260 mm",
        "Ancho": "1250 mm",
        "Alto": "1420 mm",
        "Distancia entre ejes": "2250 mm",
        "Distancia al piso": "305 mm",
        "Peso en seco": "377 kg",
        "Capacidad de carga": "410 kg",
        "Tanque de combustible": "3,55 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/kargueros/karguero-3w-200/"
  },
  {
    "slug": "karguero-carpado",
    "nombre": "Karguero Carpado",
    "categoria": "motocarros",
    "extra": [],
    "lema": "Hecho para trabajar. Diseñado para durar.",
    "precio": 17490000,
    "precioAntes": 18490000,
    "imagenes": [
      "motocarros/karguero-carpado/karguero-carpado-1.webp"
    ],
    "destacados": [
      "Motor 197 cc de alto rendimiento con 12,07 HP",
      "Carga útil de 410 kg",
      "Carpa protectora para resguardar productos",
      "Laterales abatibles para carga y descarga fácil",
      "Diseño robusto para uso rudo y terreno exigente"
    ],
    "resumen": {
      "cc": "197",
      "hp": "12,07",
      "nm": "13,9",
      "tanque": "3,55 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "197 cc",
        "Potencia máxima": "12,07 hp @ 7.000 rpm",
        "Torque máximo": "13,9 Nm @ 5.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco hidráulico",
        "Freno trasero": "Tambor hidráulico",
        "Suspensión delantera": "Telescópica Reforzada",
        "Suspensión trasera": "Ballestas (5 Hojas)",
        "Llanta delantera": "4.50 – 12",
        "Llanta trasera": "4.50 – 12"
      },
      "Dimensiones": {
        "Largo": "3260 mm",
        "Ancho": "1250 mm",
        "Alto": "1420 mm",
        "Distancia entre ejes": "2250 mm",
        "Distancia al piso": "305 mm",
        "Peso en seco": "377 kg",
        "Capacidad de carga": "410 kg",
        "Tanque de combustible": "3,55 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/kargueros/karguero-carpado/"
  },
  {
    "slug": "tuk-tuk-200",
    "nombre": "Tuk Tuk 200",
    "categoria": "motocarros",
    "extra": [],
    "lema": "Hecho para trabajar, diseñado para durar",
    "precio": 16490000,
    "precioAntes": null,
    "imagenes": [
      "motocarros/tuk-tuk-200/tuk-tuk-200-1.webp"
    ],
    "destacados": [
      "Motor 4T de 198.6 cc con caja de 4 velocidades y reversa",
      "Cabina ampla con asientos largos",
      "Farolas halógenas para máxima visibilidad",
      "Guardabarros metálicos",
      "Tablero completo con guanteras, sonido integrado y cargador USB"
    ],
    "resumen": {
      "cc": "198,6",
      "hp": "10",
      "nm": "13,6",
      "tanque": "10 L"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "198,6 cc",
        "Potencia máxima": "10 hp @ 6.000 rpm",
        "Torque máximo": "13,6 Nm @ 3.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Tambor",
        "Freno trasero": "Tambor",
        "Suspensión delantera": "Muelle helicoidal + Amortiguador telescópico",
        "Suspensión trasera": "Muelle helicoidal + Amortiguador telescópico",
        "Llanta delantera": "4 in – R8",
        "Llanta trasera": "4 in – R8"
      },
      "Dimensiones": {
        "Largo": "2760 mm",
        "Ancho": "1390 mm",
        "Alto": "1840 mm",
        "Distancia entre ejes": "1950 mm",
        "Tanque de combustible": "10 litros"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/tuk-tuk/tuk-tuk-200/"
  },
  {
    "slug": "flex-125",
    "nombre": "Flex 125",
    "categoria": "semiautomaticas",
    "extra": [],
    "lema": "Un look FLEX que se adapta a tu estilo",
    "precio": 5690000,
    "precioAntes": 6290000,
    "imagenes": [
      "semiautomaticas/flex-125/flex-125-1.webp",
      "semiautomaticas/flex-125/flex-125-2.webp",
      "semiautomaticas/flex-125/flex-125-3.webp",
      "semiautomaticas/flex-125/flex-125-4.webp"
    ],
    "destacados": [
      "Freno CBS para más seguridad",
      "Diseño moderno y funcional",
      "Farola LED",
      "Nuevo stop LED",
      "Gráficos renovados"
    ],
    "resumen": {
      "cc": "123,7",
      "hp": "8,6",
      "nm": "8,5",
      "tanque": "1 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "123,7 cc",
        "Potencia máxima": "8,6 hp @ 8.000 rpm",
        "Torque máximo": "8,5 Nm @ 6.000 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco lobulado",
        "Freno trasero": "Tambor",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Doble amortiguador",
        "Llanta delantera": "2.50 – 17",
        "Llanta trasera": "2.75 – 17"
      },
      "Dimensiones": {
        "Largo": "1960 mm",
        "Ancho": "710 mm",
        "Alto": "1100 mm",
        "Distancia entre ejes": "1240 mm",
        "Distancia al piso": "130 mm",
        "Tanque de combustible": "1 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/semi-automaticas/flex-125/"
  },
  {
    "slug": "special-110-x",
    "nombre": "Special 110 X",
    "categoria": "semiautomaticas",
    "extra": [],
    "lema": "Rendimiento ágil, eficiencia comprobada",
    "precio": 5190000,
    "precioAntes": 5590000,
    "imagenes": [
      "semiautomaticas/special-110-x/special-110-x-1.webp",
      "semiautomaticas/special-110-x/special-110-x-2.webp",
      "semiautomaticas/special-110-x/special-110-x-3.webp"
    ],
    "destacados": [
      "Motor eficiente de 107 cc con bajo consumo",
      "Más de 80.000 unidades vendidas en Colombia",
      "Frenos CBS para mayor estabilidad y control",
      "Diseño renovado con texturas deportivas",
      "Ideal para trayectos diarios en ciudad"
    ],
    "resumen": {
      "cc": "107",
      "hp": "7,21",
      "nm": "7,7",
      "tanque": "1 gal"
    },
    "specs": {
      "Motor": {
        "Cilindraje": "107 cc",
        "Potencia máxima": "7,21 hp @ 8.000 rpm",
        "Torque máximo": "7,7 Nm @ 5.500 rpm",
        "Encendido": "CDI"
      },
      "Chasis": {
        "Freno delantero": "Disco lobulado",
        "Freno trasero": "Tambor",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Doble amortiguador regulable",
        "Llanta delantera": "2.50 – 17",
        "Llanta trasera": "2.75 – 17"
      },
      "Dimensiones": {
        "Largo": "1919 mm",
        "Ancho": "624 mm",
        "Alto": "1110 mm",
        "Distancia entre ejes": "1246 mm",
        "Distancia al piso": "140 mm",
        "Tanque de combustible": "1 galones"
      }
    },
    "fuente": "https://aktmotos.com/motos-akt/semi-automaticas/special-110-x/"
  }
]
