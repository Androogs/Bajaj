import { useState } from "react";
import { waLink } from "../data/sumoto.js";

// Tasa mensual de referencia usada solo para la simulación.
const TASA_MENSUAL = 0.0189;

export default function Financiacion() {
  const [valor, setValor] = useState(9000000);
  const [inicial, setInicial] = useState(0);
  const [meses, setMeses] = useState(36);

  const monto = Math.max(valor - inicial, 0);
  const cuota =
    monto === 0 ? 0 : Math.round((monto * TASA_MENSUAL) / (1 - Math.pow(1 + TASA_MENSUAL, -meses)));
  const pesos = (n) => "$ " + n.toLocaleString("es-CO");

  return (
    <main>
      <section className="seccion seccion-azul">
        <div className="wrap">
          <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem,5vw,3.6rem)", textTransform: "uppercase" }}>
            Financiación
          </h1>
          <p style={{ color: "#CBDAEC", marginTop: 14 }}>
            Financiamos hasta el 100% del valor de tu moto, sin cuota inicial, con aprobación el mismo día.
            Solo necesitas tu cédula.
          </p>
        </div>
      </section>

      <section className="seccion">
        <div className="wrap duo">
          <div>
            <h2 className="titulo-seccion">Simula tu cuota</h2>
            <p className="sutil">
              Cálculo aproximado con una tasa de referencia del 1,89% mensual. La cuota real depende de la entidad
              que apruebe tu crédito.
            </p>
            <div className="form" style={{ marginTop: 22 }}>
              <div className="campo">
                <label htmlFor="v">Valor de la moto</label>
                <input id="v" type="number" min="1000000" step="100000" value={valor}
                  onChange={(e) => setValor(Number(e.target.value) || 0)} />
              </div>
              <div className="campo">
                <label htmlFor="ci">Cuota inicial</label>
                <input id="ci" type="number" min="0" step="100000" value={inicial}
                  onChange={(e) => setInicial(Number(e.target.value) || 0)} />
              </div>
              <div className="campo">
                <label htmlFor="pl">Plazo</label>
                <select id="pl" value={meses} onChange={(e) => setMeses(Number(e.target.value))}>
                  {[12, 18, 24, 36, 48, 60].map((p) => (
                    <option key={p} value={p}>{p} meses</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <div className="caja" style={{ marginTop: 56 }}>
              <span className="chip">Cuota mensual estimada</span>
              <div style={{ fontFamily: "var(--display)", fontSize: "3.2rem", fontWeight: 800, lineHeight: 1, margin: "14px 0" }}>
                {pesos(cuota)}
              </div>
              <p className="sutil" style={{ fontSize: ".92rem" }}>
                Monto a financiar: {pesos(monto)} · {meses} meses.
                <br />
                Valor estimado; no constituye una oferta de crédito.
              </p>
              <a
                className="btn btn-wa"
                href={waLink(`Hola SUMOTO, simulé una cuota de ${pesos(cuota)} a ${meses} meses. Quiero aplicar al crédito.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Aplicar al crédito
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="seccion seccion-clara">
        <div className="wrap duo">
          <div>
            <h2 className="titulo-seccion">Requisitos</h2>
            <ul className="lista-check" style={{ marginTop: 18 }}>
              <li>Cédula de ciudadanía original.</li>
              <li>Ser mayor de 18 años.</li>
              <li>Ingresos demostrables o certificación laboral, según la entidad.</li>
              <li>No requiere codeudor en la mayoría de los casos.</li>
            </ul>
          </div>
          <div>
            <h2 className="titulo-seccion">Cómo funciona</h2>
            <ul className="lista-check" style={{ marginTop: 18 }}>
              <li>Escoges tu moto en el catálogo o en la vitrina.</li>
              <li>Radicamos tu solicitud con las entidades aliadas.</li>
              <li>Recibes la respuesta el mismo día en la mayoría de los casos.</li>
              <li>Firmas y te llevas la moto con la matrícula en trámite.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
