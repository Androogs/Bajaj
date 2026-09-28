import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CATEGORIAS, MOTOS } from "../data/motos.js";
import { waLink } from "../data/dealer.js";
import { img, cop, getMoto, getCategoria } from "../utils/catalogo.js";
import PageHeader from "../components/PageHeader.jsx";
import { IconWhatsapp, IconClose } from "../components/Icons.jsx";

const s = (m, g, k) => m.specs[g]?.[k] || "—";
const FILAS = [
  ["Línea", (m) => getCategoria(m.categoria).nombre],
  ["Precio desde*", (m) => cop(m.precio)],
  ["Precio regular", (m) => (m.precioAntes ? cop(m.precioAntes) : "—")],
  ["Cilindraje", (m) => `${m.resumen.cc} cc`],
  ["Potencia máxima", (m) => s(m, "Motor", "Potencia máxima")],
  ["Torque máximo", (m) => s(m, "Motor", "Torque máximo")],
  ["Tanque", (m) => s(m, "Dimensiones", "Tanque de combustible")],
  ["Freno delantero", (m) => s(m, "Chasis", "Freno delantero")],
  ["Freno trasero", (m) => s(m, "Chasis", "Freno trasero")],
  ["Suspensión trasera", (m) => s(m, "Chasis", "Suspensión trasera")],
  ["Llanta delantera", (m) => s(m, "Chasis", "Llanta delantera")],
  ["Llanta trasera", (m) => s(m, "Chasis", "Llanta trasera")],
  ["Largo", (m) => s(m, "Dimensiones", "Largo")],
  ["Distancia al piso", (m) => s(m, "Dimensiones", "Distancia al piso")],
];

export default function Comparar() {
  const [params, setParams] = useSearchParams();
  const sel = useMemo(() => (params.get("m") || "").split(",").filter((x) => getMoto(x)).slice(0, 3), [params]);
  const motos = sel.map(getMoto);
  const setSlot = (k, slug) => {
    const next = [...sel];
    if (slug) next[k] = slug; else next.splice(k, 1);
    setParams({ m: next.filter(Boolean).join(",") });
  };

  return (
    <>
      <PageHeader eyebrow="Herramienta" title="Comparador" crumbs={[{ label: "Comparar" }]}>
        <p>Pon hasta tres motos AKT lado a lado y decide con datos.</p>
      </PageHeader>
      <section className="sec sec--tight">
        <div className="container">
          <div className="cmp">
            <div className="cmp__row cmp__row--head">
              <div className="cmp__label">Modelo</div>
              {[0, 1, 2].map((k) => {
                const m = motos[k];
                return (
                  <div key={k} className={`cmp__slot ${m ? "" : "is-empty"}`}>
                    {m ? (<>
                      <button className="cmp__x" onClick={() => setSlot(k, null)} aria-label="Quitar"><IconClose width="16" height="16" /></button>
                      <img src={img(m)} alt={m.nombre} />
                      <Link to={`/moto/${m.slug}`} className="cmp__name">{m.nombre}</Link>
                    </>) : <span className="cmp__plus">+</span>}
                    <select className="select" value={m?.slug || ""} disabled={!m && k > sel.length} onChange={(e) => setSlot(k, e.target.value)} aria-label={`Moto ${k + 1}`}>
                      <option value="">{m ? "Cambiar moto" : "Agregar moto"}</option>
                      {CATEGORIAS.map((c) => (
                        <optgroup key={c.id} label={c.nombre}>
                          {MOTOS.filter((x) => x.categoria === c.id && (!sel.includes(x.slug) || x.slug === m?.slug)).map((x) => <option key={x.slug} value={x.slug}>{x.nombre}</option>)}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                );
              })}
            </div>
            {motos.length > 0 && FILAS.map(([label, fn]) => (
              <div key={label} className="cmp__row">
                <div className="cmp__label">{label}</div>
                {[0, 1, 2].map((k) => <div key={k} className="cmp__cell">{motos[k] ? fn(motos[k]) : ""}</div>)}
              </div>
            ))}
            {motos.length > 0 && (
              <div className="cmp__row">
                <div className="cmp__label" />
                {[0, 1, 2].map((k) => <div key={k} className="cmp__cell">{motos[k] && <a className="btn btn--red btn--sm" href={waLink(`Hola, quiero cotizar la AKT ${motos[k].nombre}.`)} target="_blank" rel="noreferrer"><IconWhatsapp width="16" height="16" /> Cotizar</a>}</div>)}
              </div>
            )}
          </div>
          {motos.length === 0 && <p className="empty">Agrega una moto para empezar a comparar.</p>}
          <p className="fineprint">* Precios de referencia AKT Motos Colombia. No incluyen matrícula, SOAT ni seguros. "—" indica que el dato no está publicado en la ficha oficial.</p>
        </div>
      </section>
    </>
  );
}
