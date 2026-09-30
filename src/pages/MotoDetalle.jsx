import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { waLink } from "../data/dealer.js";
import { img, cop, ahorro, getMoto, getCategoria, motosDe } from "../utils/catalogo.js";
import MotoCard from "../components/MotoCard.jsx";
import LeadForm from "../components/LeadForm.jsx";
import { IconWhatsapp, IconCard, IconCompare, IconCheck, IconEngine, IconBolt, IconGauge, IconDrop } from "../components/Icons.jsx";
import NoEncontrado from "./NoEncontrado.jsx";

const TITULOS = { Motor: "Motor", Chasis: "Frenos, suspensión y llantas", Dimensiones: "Dimensiones y capacidades" };

export default function MotoDetalle() {
  const { slug } = useParams();
  const moto = getMoto(slug);
  const [v, setV] = useState(0);
  if (!moto) return <NoEncontrado />;

  const cat = getCategoria(moto.categoria);
  const save = ahorro(moto);
  const otras = motosDe(moto.categoria).filter((m) => m.slug !== moto.slug).slice(0, 3);
  const msg = `Hola, quiero cotizar la AKT ${moto.nombre}${moto.imagenes.length > 1 ? ` (versión ${v + 1} de la galería)` : ""}.`;

  return (
    <>
      <section className="pd">
        <div className="container">
          <nav className="crumbs crumbs--dark" aria-label="Ruta">
            <Link to="/">Inicio</Link><Link to={`/motos/${cat.id}`}>{cat.nombre}</Link><span>{moto.nombre}</span>
          </nav>
        </div>
        <div className="container pd__grid">
          <div className="pd__gallery">
            <div className="pd__stage">
              <span className="pd__ghost" aria-hidden="true">{Math.round(parseFloat(String(moto.resumen.cc).replace(",", ".")))}</span>
              <img key={v} src={img(moto, v)} alt={`AKT ${moto.nombre}`} />
            </div>
            {moto.imagenes.length > 1 && (
              <div className="pd__thumbs">
                {moto.imagenes.map((_, i) => (
                  <button key={i} className={i === v ? "is-on" : ""} onClick={() => setV(i)} aria-label={`Versión ${i + 1}`}>
                    <img src={img(moto, i)} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside className="pd__info">
            <span className="eyebrow">Línea {cat.nombre}</span>
            <h1 className="h-display h-display--lg">{moto.nombre}</h1>
            <p className="pd__lema">{moto.lema}</p>

            <div className="pd__kpis">
              <div><IconEngine /><b>{moto.resumen.cc}</b><small>cc</small></div>
              <div><IconBolt /><b>{moto.resumen.hp}</b><small>hp</small></div>
              <div><IconGauge /><b>{moto.resumen.nm}</b><small>Nm</small></div>
              {moto.resumen.tanque && <div><IconDrop /><b>{moto.resumen.tanque.split(" ")[0]}</b><small>{moto.resumen.tanque.split(" ")[1]}</small></div>}
            </div>

            <div className="pbox">
              {moto.precioAntes && <div className="pbox__row"><span>Precio regular</span><s>{cop(moto.precioAntes)}</s></div>}
              <div className="pbox__main"><span>Precio desde</span><strong>{cop(moto.precio)}*</strong></div>
              {save > 0 && <span className="pbox__save">Ahorras {cop(save)}</span>}
              <small>* Precio de referencia AKT Motos Colombia. No incluye matrícula, SOAT ni seguros. Sujeto a cambios y disponibilidad.</small>
            </div>

            <div className="pd__ctas">
              <a className="btn btn--red btn--block" href={waLink(msg)} target="_blank" rel="noreferrer"><IconWhatsapp width="18" height="18" /> Cotizar por WhatsApp</a>
              <div className="pd__ctas2">
                <Link className="btn btn--line-dark" to={`/financiacion?moto=${moto.slug}`}><IconCard /> Simular crédito</Link>
                <Link className="btn btn--line-dark" to={`/comparar?m=${moto.slug}`}><IconCompare /> Comparar</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="sec">
        <div className="container pd__detail">
          <div className="pd__features">
            <span className="eyebrow">Lo mejor de la {moto.nombre}</span>
            <h2 className="h-display">Destacados</h2>
            <ul className="feats">{moto.destacados.map((d) => <li key={d}><IconCheck width="18" height="18" /> {d}</li>)}</ul>
          </div>
          <div className="pd__specs">
            <span className="eyebrow">Ficha técnica</span>
            <h2 className="h-display">Especificaciones</h2>
            {Object.entries(moto.specs).map(([g, rows]) => (
              <details key={g} className="spec" open={g === "Motor"}>
                <summary>{TITULOS[g] || g}<span>{Object.keys(rows).length} datos</span></summary>
                <dl>{Object.entries(rows).map(([k, val]) => <div key={k}><dt>{k}</dt><dd>{val}</dd></div>)}</dl>
              </details>
            ))}
            <p className="fineprint">Fuente: <a href={moto.fuente} target="_blank" rel="noreferrer">ficha publicada por AKT Motos</a>. Especificaciones sujetas a cambio por el fabricante.</p>
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="container pd__bottom">
          <div>
            <span className="eyebrow">Pruébala en Palmira</span>
            <h2 className="h-display">Agenda tu test ride</h2>
            <p className="muted">Conoce la {moto.nombre} en persona y resuelve tus dudas con un asesor de Sumoto S.A.</p>
            <LeadForm asunto={`Prueba de manejo – AKT ${moto.nombre}`} boton="Agendar prueba" initial={{ moto: moto.nombre }}
              fields={[
                { name: "nombre", label: "Nombre completo", required: true, full: true },
                { name: "celular", label: "Celular", type: "tel", required: true },
                { name: "fecha", label: "Fecha preferida", type: "date" },
                { name: "moto", label: "Moto de interés", full: true },
              ]} />
          </div>
          {otras.length > 0 && (
            <div>
              <h3 className="h-display h-display--sm">Más de la línea {cat.nombre}</h3>
              <div className="grid grid--3">{otras.map((m) => <MotoCard key={m.slug} moto={m} />)}</div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
