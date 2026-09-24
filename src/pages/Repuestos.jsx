import { waLink } from "../data/sumoto.js";

const CATEGORIAS = [
  ["Motor y transmisión", "Kits de arrastre, pistones, empaques, embragues y filtros de aceite originales Bajaj."],
  ["Frenos y suspensión", "Pastillas, bandas, discos, bombas, amortiguadores y retenedores para toda la línea."],
  ["Eléctricos", "Baterías, CDI, bobinas, reguladores, arranques y luces LED homologadas."],
  ["Carrocería y plásticos", "Carenajes, guardabarros, tanques y calcomanías originales por modelo y color."],
  ["Llantas y rines", "Llantas para uso urbano, carretera y mixto, con montaje y balanceo en el taller."],
  ["Accesorios", "Cascos certificados, baúles, defensas, protectores de motor, guantes e impermeables."]
];

export default function Repuestos() {
  return (
    <main>
      <section className="seccion seccion-azul">
        <div className="wrap">
          <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem,5vw,3.6rem)", textTransform: "uppercase" }}>
            Repuestos originales
          </h1>
          <p style={{ color: "#CBDAEC", marginTop: 14 }}>
            Trabajamos únicamente con partes originales Bajaj. Cada repuesto conserva la garantía de tu moto y se
            instala bajo la especificación del fabricante.
          </p>
          <a
            className="btn btn-rojo"
            style={{ marginTop: 18 }}
            href={waLink("Hola SUMOTO, necesito cotizar un repuesto. Mi moto es:")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar un repuesto
          </a>
        </div>
      </section>

      <section className="seccion">
        <div className="wrap">
          <h2 className="titulo-seccion">Qué encuentras en mostrador</h2>
          <p className="intro sutil">Inventario permanente para las líneas Pulsar, Boxer, Discover y Dominar.</p>
          <div className="columnas">
            {CATEGORIAS.map(([t, d]) => (
              <div key={t} className="caja">
                <h3 style={{ marginBottom: 8 }}>{t}</h3>
                <p className="sutil" style={{ fontSize: ".96rem", margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion seccion-clara">
        <div className="wrap duo">
          <div>
            <h2 className="titulo-seccion">Cómo pedir un repuesto</h2>
            <ul className="lista-check" style={{ marginTop: 18 }}>
              <li>Escríbenos por WhatsApp con el modelo y el año de tu moto.</li>
              <li>Si lo tienes, envía el número de chasis para confirmar la referencia exacta.</li>
              <li>Te confirmamos precio, existencia y tiempo de entrega el mismo día.</li>
              <li>Recoges en el almacén o lo instalamos directamente en el taller.</li>
            </ul>
          </div>
          <div>
            <h2 className="titulo-seccion">Envíos</h2>
            <p>
              Despachamos a todo el Valle del Cauca y al resto del país por transportadora. El costo del envío se
              confirma antes de despachar y el pedido sale el mismo día si se confirma antes de las 3:00 p.m.
            </p>
            <a className="btn btn-azul" href={waLink("Hola SUMOTO, quiero un repuesto con envío.")} target="_blank" rel="noopener noreferrer">
              Pedir con envío
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
