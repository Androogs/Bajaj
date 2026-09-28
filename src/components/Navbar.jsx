import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CATEGORIAS } from "../data/motos.js";
import { dealer, waLink } from "../data/dealer.js";
import { img, motosDe, cop } from "../utils/catalogo.js";
import { IconMenu, IconClose, IconDown, IconWhatsapp, IconArrow, IconPhone, categoryIcon } from "./Icons.jsx";

const LINKS = [
  { to: "/", label: "Inicio", end: true },
  { to: "/motos", label: "Motos", mega: true },
  { to: "/comparar", label: "Comparar" },
  { to: "/financiacion", label: "Financiación" },
  { to: "/posventa", label: "Posventa" },
  { to: "/concesionario", label: "Concesionario" },
  { to: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); setMega(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav__top">
        <div className="container nav__topInner">
          <span>{dealer.businessName} · Concesionario oficial AKT Motos en {dealer.city}</span>
          <a href={`tel:${dealer.phone.replace(/\s+/g, "")}`}><IconPhone width="14" height="14" /> {dealer.phone}</a>
        </div>
      </div>
      <div className="container nav__bar">
        <Link to="/" className="nav__logo" aria-label="AKT Palmira – inicio">
          <img src="/akt-logo-white-crop.png" alt="AKT Motos" />
          <span>Palmira</span>
        </Link>

        <nav className="nav__links" aria-label="Principal">
          {LINKS.map((l) =>
            l.mega ? (
              <div key={l.to} className="nav__item" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
                <NavLink to={l.to} onFocus={() => setMega(true)} aria-expanded={mega}
                  className={({ isActive }) => `nav__link ${isActive || pathname.startsWith("/moto/") ? "is-active" : ""}`}>
                  {l.label} <IconDown width="14" height="14" />
                </NavLink>
                <MegaMenu visible={mega} />
              </div>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}>{l.label}</NavLink>
            )
          )}
        </nav>

        <a className="btn btn--red btn--sm nav__cta" href={waLink("Hola, quiero cotizar una moto AKT en Palmira.")} target="_blank" rel="noreferrer">
          <IconWhatsapp width="18" height="18" /> Cotiza tu AKT
        </a>
        <button className="nav__burger" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
          {open ? <IconClose width="26" height="26" /> : <IconMenu width="26" height="26" />}
        </button>
      </div>

      <div className={`drawer ${open ? "is-open" : ""}`}>
        <nav className="drawer__inner" aria-label="Móvil">
          {LINKS.map((l, i) => (
            <div key={l.to} className="drawer__row" style={{ "--i": i }}>
              <NavLink to={l.to} end={l.end} className={({ isActive }) => `drawer__link ${isActive ? "is-active" : ""}`}>{l.label}</NavLink>
              {l.mega && (
                <div className="drawer__cats">
                  {CATEGORIAS.map((c) => <Link key={c.id} to={`/motos/${c.id}`}>{c.nombre}</Link>)}
                </div>
              )}
            </div>
          ))}
          <a className="btn btn--red btn--block" href={waLink("Hola, quiero cotizar una moto AKT en Palmira.")} target="_blank" rel="noreferrer">
            <IconWhatsapp width="18" height="18" /> Cotiza por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

function MegaMenu({ visible }) {
  const [cat, setCat] = useState(CATEGORIAS[0].id);
  const lista = motosDe(cat);
  return (
    <div className={`mega ${visible ? "is-visible" : ""}`}>
      <div className="container mega__inner">
        <ul className="mega__cats">
          {CATEGORIAS.map((c) => {
            const Icon = categoryIcon[c.id];
            return (
              <li key={c.id}>
                <Link to={`/motos/${c.id}`} onMouseEnter={() => setCat(c.id)} className={cat === c.id ? "is-on" : ""}>
                  {Icon && <Icon width="26" height="26" />}
                  <span>{c.nombre}</span>
                  <small>{motosDe(c.id).length}</small>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mega__models">
          {lista.map((m) => (
            <Link key={m.slug} to={`/moto/${m.slug}`} className="mega__model">
              <img src={img(m)} alt="" loading="lazy" />
              <strong>{m.nombre}</strong>
              <small>Desde {cop(m.precio)}</small>
            </Link>
          ))}
          <Link to={`/motos/${cat}`} className="mega__all">Ver toda la línea <IconArrow width="16" height="16" /></Link>
        </div>
      </div>
    </div>
  );
}
