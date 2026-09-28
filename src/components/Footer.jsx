import { Link } from "react-router-dom";
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
      </div>
    </footer>
  );
}
