import { SUMOTO } from "../data/sumoto.js";

export default function Nosotros() {
  return (
    <main>
      <section className="seccion seccion-azul">
        <div className="wrap">
          <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem,5vw,3.6rem)", textTransform: "uppercase" }}>
            Sobre SUMOTO S.A.
          </h1>
          <p style={{ color: "#CBDAEC", marginTop: 14, maxWidth: "60ch" }}>
            Concesionario autorizado Bajaj en Palmira, Valle del Cauca. Vendemos, financiamos y mantenemos motos
            Bajaj bajo el estándar de la marca.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="wrap duo">
          <div>
            <h2 className="titulo-seccion">Quiénes somos</h2>
            <p>
              SUMOTO S.A. atiende a los motociclistas de Palmira y del centro del Valle del Cauca con el respaldo
              de Bajaj, una de las marcas de mayor rotación en Colombia por su costo de mantenimiento y
              disponibilidad de repuestos.
            </p>
            <p>
              En un mismo lugar encuentras vitrina de motos nuevas, almacén de repuestos originales y taller con
              técnicos certificados. Eso significa que la moto que compras aquí se mantiene aquí, sin perder la
              garantía de fábrica.
            </p>

            <h2 className="titulo-seccion" style={{ marginTop: 36 }}>Cómo trabajamos</h2>
            <ul className="lista-check" style={{ marginTop: 16 }}>
              <li>Asesoría según tu recorrido diario, no según la moto que más nos convenga vender.</li>
              <li>Prueba de manejo disponible para los modelos en vitrina.</li>
              <li>Trámite de matrícula y SOAT gestionado por nosotros.</li>
              <li>Historial de mantenimientos registrado para respaldar tu garantía.</li>
            </ul>
          </div>

          <div>
            <div className="caja">
              <h3 style={{ marginBottom: 12 }}>Datos de la empresa</h3>
              <table className="tabla-specs">
                <tbody>
                  <tr><th>Razón social</th><td>{SUMOTO.nombre}</td></tr>
                  <tr><th>NIT</th><td>{SUMOTO.nit}</td></tr>
                  <tr><th>Ciudad</th><td>{SUMOTO.ciudad}</td></tr>
                  <tr><th>Dirección</th><td>{SUMOTO.direccion}</td></tr>
                  <tr><th>Horario</th><td>{SUMOTO.horario}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
