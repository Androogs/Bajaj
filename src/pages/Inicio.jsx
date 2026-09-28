import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIAS, MOTOS } from "../data/motos.js";
import { dealer, waLink } from "../data/dealer.js";
import { img, cop, getMoto, getCategoria, motosDe, ahorro, DESTACADAS } from "../utils/catalogo.js";
import { IconArrow, IconWhatsapp, IconCard, IconWrench, IconBox, IconShield, categoryIcon } from "../components/Icons.jsx";
import useReveal from "../components/useReveal.js";

const SLIDES = DESTACADAS.map(getMoto).filter(Boolean);
const MS = 6000;

export default function Inicio() {
  const [i, setI] = useState(0);
  const [pausa, setPausa] = useState(false);
  useReveal();
  useEffect(() => {
    if (pausa) return;
    const t = setTimeout(() => setI((i + 1) % SLIDES.length), MS);
    return () => clearTimeout(t);
  }, [i, pausa]);

  const m = SLIDES[i];
  const cat = getCategoria(m.categoria);
  const save = ahorro(m);

  return (
    <>
      <section className="hx" onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)}>
        <div className="hx__stripes" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="hx__big" aria-hidden="true" key={`b${i}`}>{Math.round(parseFloat(String(m.resumen.cc).replace(",", ".")))}<small>cc</small></div>
        <div className="container hx__inner">
          <div className="hx__copy" key={`c${i}`}>
            <span className="eyebrow eyebrow--light">Línea {cat.nombre}</span>
            <h1 className="h-display h-display--xl">{m.nombre}</h1>
            <p className="hx__lema">{m.lema}</p>
            <dl className="hx__kpis">
              <div><dt>Potencia</dt><dd>{m.resumen.hp}<small>hp</small></dd></div>
              <div><dt>Torque</dt><dd>{m.resumen.nm}<small>Nm</small></dd></div>
              <div><dt>Precio desde</dt><dd className="is-price">{cop(m.precio)}*</dd></div>
            </dl>
            {save > 0 && <p className="hx__save">Ahorra {cop(save)} frente al precio regular</p>}
            <div className="hx__ctas">
              <Link to={`/moto/${m.slug}`} className="btn btn--red">Ver ficha completa <IconArrow /></Link>
              <a className="btn btn--line" href={waLink(`Hola, quiero cotizar la AKT ${m.nombre}.`)} target="_blank" rel="noreferrer"><IconWhatsapp width="18" height="18" /> Cotizar</a>
            </div>
          </div>
          <div className="hx__media" key={`m${i}`}>
            <img src={img(m)} alt={`AKT ${m.nombre}`} />
          </div>
        </div>
        <div className="container hx__rail" role="tablist" aria-label="Modelos destacados">
          {SLIDES.map((s, k) => (
            <button key={s.slug} role="tab" aria-selected={k === i} className={`hx__thumb ${k === i ? "is-on" : ""}`} onClick={() => setI(k)}>
              <img src={img(s)} alt="" />
              <span>{s.nombre}</span>
              <i className="hx__progress"><b style={{ animationDuration: `${MS}ms`, animationPlayState: pausa ? "paused" : "running" }} /></i>
            </button>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="sec__head reveal">
            <div>
              <span className="eyebrow">Portafolio AKT</span>
              <h2 className="h-display">Elige tu línea</h2>
            </div>
            <Link to="/motos" className="link-arrow">Ver los {MOTOS.length} modelos <IconArrow width="18" /></Link>
          </div>
          <div className="lines">
            {CATEGORIAS.map((c, k) => {
              const lista = motosDe(c.id);
              const hero = lista.reduce((a, b) => (b.precio > a.precio ? b : a), lista[0]);
              const Icon = categoryIcon[c.id];
              return (
                <Link key={c.id} to={`/motos/${c.id}`} className={`line reveal ${k === 0 ? "line--wide" : ""}`} style={{ "--d": `${k * 60}ms` }}>
                  <div className="line__text">
                    {Icon && <Icon width="30" height="30" />}
                    <h3>{c.nombre}</h3>
                    <p>{c.lema}</p>
                    <small>{lista.length} modelos · desde {cop(Math.min(...lista.map((x) => x.precio)))}*</small>
                  </div>
                  <img src={img(hero)} alt="" loading="lazy" />
                  <span className="line__go"><IconArrow /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container band__grid">
          <div className="band__intro reveal">
            <span className="eyebrow eyebrow--light">{dealer.displayName}</span>
            <h2 className="h-display">Compra, financia y mantén tu AKT en un solo lugar</h2>
            <a className="btn btn--red" href={waLink("Hola, quiero agendar una visita al concesionario AKT Palmira.")} target="_blank" rel="noreferrer">
              <IconWhatsapp width="18" height="18" /> Agenda tu visita
            </a>
          </div>
          {[
            { i: <IconCard />, t: "Financiación", d: "Simula tu cuota y solicita tu estudio de crédito con nuestro equipo.", to: "/financiacion" },
            { i: <IconWrench />, t: "Taller especializado", d: "Mantenimiento preventivo y correctivo con técnicos AKT.", to: "/posventa" },
            { i: <IconBox />, t: "Repuestos originales", d: "Repuestos y accesorios originales para todas las líneas.", to: "/posventa?s=repuestos" },
            { i: <IconShield />, t: "Garantía y respaldo", d: "Te acompañamos durante toda la garantía de fábrica.", to: "/posventa?s=garantia" },
          ].map((p, k) => (
            <Link key={p.t} to={p.to} className="perk reveal" style={{ "--d": `${k * 70}ms` }}>
              <span className="perk__icon">{p.i}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <span className="perk__more">Ver más <IconArrow width="14" height="14" /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
