import { Link } from "react-router-dom";
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
      </div>
    </footer>
  );
}
