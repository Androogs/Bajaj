import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { SUMOTO, waLink } from "../data/sumoto.js";

const PAGINAS = [
  { ruta: "/", titulo: "Inicio" },
  { ruta: "/motos", titulo: "Motos" },
  { ruta: "/repuestos", titulo: "Repuestos" },
  { ruta: "/taller", titulo: "Taller" },
  { ruta: "/financiacion", titulo: "Financiación" },
  { ruta: "/nosotros", titulo: "Nosotros" },
  { ruta: "/contacto", titulo: "Contacto" }
];

export default function Barra() {
  const [abierto, setAbierto] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setAbierto(false);
  }, [pathname]);

  return (
    <>
      <div className="cinta">
        <div className="wrap">
          <span>📌 {SUMOTO.direccion}</span>
          <span>✉ {SUMOTO.correo}</span>
        </div>
      </div>

      <header className="barra">
        <div className="wrap">
          <Link to="/" className="logo" aria-label="SUMOTO S.A., ir al inicio">
            <img src="/motos/logos/logo_house.png" alt="SUMOTO S.A. - Bajaj Palmira" />
          </Link>

          <nav className={"menu" + (abierto ? " abierto" : "")}>
            {PAGINAS.map((p) => (
              <NavLink
                key={p.ruta}
                to={p.ruta}
                end={p.ruta === "/"}
                className={({ isActive }) => (isActive ? "activo" : "")}
              >
                {p.titulo}
              </NavLink>
            ))}
          </nav>

          <a className="btn btn-rojo cta-barra" href={waLink()} target="_blank" rel="noopener noreferrer">
            Cotizar por WhatsApp
          </a>

          <button
            className="btn-menu"
            aria-expanded={abierto}
            aria-label="Abrir menú"
            onClick={() => setAbierto((v) => !v)}
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
}
