import { Link } from "react-router-dom";
<<<<<<< HEAD
import { SUMOTO } from "../data/sumoto.js";
import { LINEAS } from "../data/motos.js";

export default function Footer() {
  return (
    <footer className="pie">
      <div className="wrap">
        <div className="pie-grid">
          <div>
            <div className="logo" style={{ marginBottom: 12 }}>
              <Link to="/" className="logo" aria-label="SUMOTO S.A., ir al inicio">
                <img src="/motos/logos/logo_house.png" alt="SUMOTO S.A. - Bajaj Palmira" />
              </Link>
            </div>
            <p style={{ fontSize: ".92rem" }}>
              Concesionario autorizado Bajaj en Palmira, Valle del Cauca. Motos nuevas, repuestos originales
              y taller certificado.
            </p>
          </div>

          <div>
            <h4>Motos</h4>
            <ul>
              {LINEAS.map((l) => (
                <li key={l.id}>
                  <Link to={`/motos?linea=${l.id}`}>{l.nombre}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Servicios</h4>
            <ul>
              <li><Link to="/repuestos">Repuestos</Link></li>
              <li><Link to="/taller">Taller</Link></li>
              <li><Link to="/financiacion">Financiación</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li>{SUMOTO.direccion}</li>
              <li>{SUMOTO.telefono}</li>
              <li>{SUMOTO.correo}</li>
              <li>{SUMOTO.horario}</li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© {new Date().getFullYear()} {SUMOTO.nombre} · {SUMOTO.nit}</span>
          <span>Imágenes y especificaciones de referencia. Bajaj es una marca registrada de Bajaj Auto Ltd.</span>
        </div>
=======
import { CATEGORIAS } from "../data/motos.js";
import { dealer } from "../data/dealer.js";
import { IconFacebook, IconInstagram, IconTiktok, IconPin, IconPhone, IconMail } from "./Icons.jsx";

export default function Footer() {
  const redes = [
    [dealer.socials.facebook, IconFacebook, "Facebook"],
    [dealer.socials.instagram, IconInstagram, "Instagram"],
    [dealer.socials.tiktok, IconTiktok, "TikTok"],
  ];
  return (
    <footer className="footer">
      <div className="footer__stripe" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/akt-logo-white-crop.png" alt="AKT Motos" />
          <p>{dealer.businessName} · Concesionario oficial AKT Motos en {dealer.city}. Venta, financiación, taller y repuestos originales.</p>
          <div className="footer__social">
            {redes.map(([href, Icon, label]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon /></a>
            ))}
          </div>
        </div>
        <div>
          <h4>Líneas</h4>
          <ul>{CATEGORIAS.map((c) => <li key={c.id}><Link to={`/motos/${c.id}`}>{c.nombre}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Servicios</h4>
          <ul>
            <li><Link to="/financiacion">Financiación</Link></li>
            <li><Link to="/posventa">Taller</Link></li>
            <li><Link to="/posventa?s=repuestos">Repuestos</Link></li>
            <li><Link to="/posventa?s=garantia">Garantía</Link></li>
            <li><Link to="/comparar">Comparador</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul className="footer__contact">
            <li><IconPin width="16" height="16" /> {dealer.address}</li>
            <li><IconPhone width="16" height="16" /> <a href={`tel:${dealer.phone.replace(/\s+/g, "")}`}>{dealer.phone}</a></li>
            <li><IconMail width="16" height="16" /> <a href={`mailto:${dealer.email}`}>{dealer.email}</a></li>
            <li>Línea nacional AKT: {dealer.nationalLine}</li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {dealer.businessName} Concesionario autorizado AKT Motos. Todos los derechos reservados.</p>
        <p>Sitio del concesionario de Palmira, no es el sitio oficial de AKT Motos nacional. Precios de referencia sujetos a cambio sin previo aviso; no incluyen matrícula, SOAT ni seguros. Imágenes de referencia.</p>
        <p><Link to="/contacto#datos">Política de tratamiento de datos personales (Ley 1581 de 2012)</Link></p>
>>>>>>> 540176676a648ddce5278bdbbe0782d6db2c020a
      </div>
    </footer>
  );
}
