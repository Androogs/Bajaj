<<<<<<< HEAD
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
=======
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CATEGORIAS, MOTOS } from "../data/motos.js";
import { img, cop, getMoto } from "../utils/catalogo.js";
import PageHeader from "../components/PageHeader.jsx";
import LeadForm from "../components/LeadForm.jsx";

// Tasa mensual de REFERENCIA (del proyecto original). Ajustar según la entidad
// financiera aliada. La cuota real depende del estudio de crédito.
const RATE_MONTHLY = 0.021;
const TERMS = [12, 18, 24, 36, 48];

const PASOS = [
  ["Elige tu AKT", "Escoge el modelo que se ajusta a tu estilo y presupuesto."],
  ["Simula tu cuota", "Calcula una cuota estimada con la herramienta de esta página."],
  ["Solicita el estudio", "Envía tus datos y un asesor te acompaña en el proceso."],
  ["Estrena", "Firmas, matriculamos y te entregamos tu moto en Palmira."],
];

export default function Financiacion() {
  const [params] = useSearchParams();
  const [slug, setSlug] = useState(getMoto(params.get("moto"))?.slug || "cr4-200-pro");
  const [downPct, setDownPct] = useState(30);
  const [term, setTerm] = useState(24);
  const moto = getMoto(slug);
  const price = moto.precio;

  const { down, financed, payment } = useMemo(() => {
    const d = Math.round((price * downPct) / 100);
    const p = Math.max(price - d, 0);
    const i = RATE_MONTHLY;
    const pay = i === 0 ? p / term : (p * i) / (1 - Math.pow(1 + i, -term));
    return { down: d, financed: p, payment: Math.round(pay) };
  }, [price, downPct, term]);

  return (
    <>
      <PageHeader eyebrow="Crédito" title="Financiación" crumbs={[{ label: "Financiación" }]}>
        <p>Simula tu cuota y formaliza tu crédito con nuestro equipo de ventas en Palmira.</p>
      </PageHeader>
      <section className="sec sec--tight">
        <div className="container fin">
          <div>
            <div className="sim">
              <div className="sim__media">
                <img src={img(moto)} alt={moto.nombre} />
                <strong>{moto.nombre}</strong>
                <span>{cop(price)}*</span>
              </div>
              <div className="sim__controls">
                <h2 className="h-display h-display--sm">Simulador de cuota</h2>
                <label className="field">
                  <span>Moto</span>
                  <select value={slug} onChange={(e) => setSlug(e.target.value)}>
                    {CATEGORIAS.map((c) => (
                      <optgroup key={c.id} label={c.nombre}>
                        {MOTOS.filter((m) => m.categoria === c.id).map((m) => <option key={m.slug} value={m.slug}>{m.nombre} · {cop(m.precio)}</option>)}
                      </optgroup>
                    ))}
                  </select>
                </label>
                <label className="field">
                  <span>Cuota inicial: <b>{downPct}%</b> ({cop(down)})</span>
                  <input type="range" min={10} max={70} step={5} value={downPct} onChange={(e) => setDownPct(+e.target.value)} />
                </label>
                <div className="field">
                  <span>Plazo</span>
                  <div className="terms">
                    {TERMS.map((t) => <button key={t} type="button" className={t === term ? "is-on" : ""} onClick={() => setTerm(t)}>{t} m</button>)}
                  </div>
                </div>
                <div className="sim__out">
                  <div><small>Monto a financiar</small><b>{cop(financed)}</b></div>
                  <div className="is-main"><small>Cuota mensual estimada</small><b>{cop(payment)}</b></div>
                </div>
                <p className="fineprint">Cálculo ilustrativo con una tasa de referencia del {(RATE_MONTHLY * 100).toFixed(1).replace(".", ",")}% mensual. No constituye una oferta de crédito: la tasa, el plazo y la cuota final dependen de la entidad financiera y de tu estudio de crédito.</p>
              </div>
            </div>
            <ol className="steps">
              {PASOS.map(([t, d], k) => <li key={t}><span>{String(k + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}</p></li>)}
            </ol>
          </div>
          <aside className="fin__side">
            <LeadForm titulo="Solicita tu estudio de crédito" asunto="Solicitud de crédito – AKT Palmira" boton="Solicitar crédito"
              initial={{ moto: moto.nombre, inicial: `${downPct}% (${cop(down)})`, plazo: `${term} meses` }}
              fields={[
                { name: "nombre", label: "Nombre completo", required: true, full: true },
                { name: "celular", label: "Celular", type: "tel", required: true },
                { name: "municipio", label: "Municipio" },
                { name: "moto", label: "Moto", full: true },
                { name: "inicial", label: "Cuota inicial" },
                { name: "plazo", label: "Plazo" },
                { name: "actividad", label: "Actividad económica", type: "select", options: ["Empleado", "Independiente", "Pensionado", "Otro"], full: true },
              ]} />
          </aside>
        </div>
      </section>
    </>
>>>>>>> 540176676a648ddce5278bdbbe0782d6db2c020a
  );
}
