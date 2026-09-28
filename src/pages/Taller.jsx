import { waTaller } from "../data/sumoto.js";

const SERVICIOS = [
  ["Mantenimiento preventivo", "Cambio de aceite, filtros, ajuste de válvulas, sincronización y revisión de frenos según el kilometraje."],
  ["Revisiones de garantía", "Las revisiones incluidas en tu garantía de fábrica, registradas en el sistema de Bajaj."],
  ["Mecánica correctiva", "Diagnóstico y reparación de motor, transmisión, sistema eléctrico e inyección electrónica."],
  ["Llantas y frenos", "Montaje, balanceo, cambio de pastillas, rectificado de discos y purga del sistema hidráulico."],
  ["Lavado y alistamiento", "Lavado técnico, engrase de cadena y alistamiento antes de viaje."]
];

const PLAN = [
  ["500 km", "Primera revisión, cambio de aceite y ajuste general"],
  ["3.000 km", "Cambio de aceite, revisión de frenos y tensión de cadena"],
  ["6.000 km", "Aceite, filtro de aire, bujía y sincronización"],
  ["12.000 km", "Ajuste de válvulas, revisión de suspensión y sistema eléctrico"],
  ["24.000 km", "Mantenimiento mayor y revisión completa de motor"]
];

export default function Taller() {
  return (
    <main>
      <section className="seccion seccion-azul">
        <div className="wrap">
          <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem,5vw,3.6rem)", textTransform: "uppercase" }}>
            Taller autorizado
          </h1>
          <p style={{ color: "#CBDAEC", marginTop: 14 }}>
            Técnicos certificados por Bajaj, herramienta especializada y repuestos originales. Tu garantía se
            mantiene intacta.
          </p>
          <a
            className="btn btn-rojo"
            style={{ marginTop: 18 }}
            href={waTaller("Hola SUMOTO, quiero agendar una cita en el taller.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar cita
          </a>
        </div>
      </section>

      <section className="seccion">
        <div className="wrap">
          <h2 className="titulo-seccion">Servicios</h2>
          <div className="columnas" style={{ marginTop: 26 }}>
            {SERVICIOS.map(([t, d]) => (
              <div key={t} className="caja">
                <h3 style={{ marginBottom: 8 }}>{t}</h3>
                <p className="sutil" style={{ fontSize: ".96rem", margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion seccion-clara">
        <div className="wrap">
          <h2 className="titulo-seccion">Plan de mantenimiento</h2>
          <p className="intro">Referencia general para la línea Bajaj. Tu manual del propietario manda sobre esta tabla.</p>
          <div className="tabla-scroll">
            <table className="tabla-specs" style={{ maxWidth: 760 }}>
              <tbody>
                {PLAN.map(([km, d]) => (
                  <tr key={km}>
                    <th>{km}</th>
                    <td>{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}