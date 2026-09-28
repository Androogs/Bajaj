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
  );
}
