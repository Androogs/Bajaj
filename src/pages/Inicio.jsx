import { Link } from "react-router-dom";
import { MOTOS, LINEAS, porLinea, buscarMoto, imagenesDe } from "../data/motos.js";
import { waLink } from "../data/sumoto.js";
import TarjetaMoto from "../components/TarjetaMoto.jsx";

// Modelos que aparecen en la portada. Cambia los slugs para destacar otros.
const DESTACADOS = ["pulsar-ns400z", "dominar-400", "pulsar-n160", "boxer-ct100-ks", "pulsar-ns200", "discover-125"];

export default function Inicio() {
  const destacadas = DESTACADOS.map(buscarMoto).filter(Boolean);
  const heroMoto = buscarMoto("pulsar-ns400z");

  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div>
            <div className="hero-marca">CONCESIONARIO AUTORIZADO BAJAJ · PALMIRA</div>
            <h1>Tu Bajaj<em>sale de aquí</em></h1>
            <p>
              Somos SUMOTO S.A., distribuidor autorizado Bajaj en Palmira. Catálogo completo de motos nuevas,
              repuestos originales, taller autorizado y financiación hasta del 100% con entrega el mismo día.
            </p>
            <div className="hero-acciones">
              <Link to="/motos" className="btn btn-rojo">Ver el catálogo</Link>
              <a className="btn btn-linea" style={{ color: "#fff" }} href={waLink()} target="_blank" rel="noopener noreferrer">
                Hablar con un asesor
              </a>
            </div>
          </div>
          <div className="hero-foto">
            <img src={imagenesDe(heroMoto)[0]} alt={`Bajaj ${heroMoto.nombre}`} />
          </div>
        </div>

        <div className="datos-hero">
          <div><b>{MOTOS.length}</b><span>MODELOS EN CATÁLOGO</span></div>
          <div><b>100%</b><span>FINANCIACIÓN SIN CUOTA INICIAL</span></div>
          <div><b>2 años</b><span>GARANTÍA DE FÁBRICA</span></div>
          <div><b>24.000 km</b><span>COBERTURA DE GARANTÍA</span></div>
        </div>
      </section>

      <section className="seccion seccion-clara" style={{ paddingTop: "90px" }}>
        <div className="wrap">
          <h2 className="titulo-seccion">Líneas Bajaj</h2>
          <p className="intro sutil">
            Cada familia responde a un uso distinto. Si no sabes cuál te conviene, escríbenos y te ayudamos a
            elegir según tu recorrido diario.
          </p>
          <div className="columnas">
            {LINEAS.map((l) => (
              <div key={l.id} className="caja">
                <h3 style={{ marginBottom: 10 }}>{l.nombre}</h3>
                <p className="sutil" style={{ fontSize: ".96rem" }}>{l.desc}</p>
                <Link to={`/motos?linea=${l.id}`} className="ver">
                  Ver {porLinea(l.id).length} modelos
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="seccion seccion-clara" style={{ paddingTop: "13px" }}>
        <div className="wrap">
          <h2 className="titulo-seccion">Modelos destacados</h2>
          <p className="intro">Los más buscados en nuestra vitrina de Palmira. Todos disponibles para prueba de manejo.</p>
          <div className="grid-motos">
            {destacadas.map((m) => <TarjetaMoto key={m.slug} moto={m} />)}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/motos" className="btn btn-azul">Ver catálogo completo</Link>
          </div>
        </div>
      </section>

      <section className="seccion_por seccion-azul">
        <div className="wrap">
          <h2 className="titulo-seccion">Por qué comprar en SUMOTO</h2>
          <div className="columnas" style={{ marginTop: 28 }}>
            {[
              ["Concesionario autorizado", "Motos nuevas con garantía de fábrica de 2 años o 24.000 km y matrícula tramitada por nosotros."],
              ["Taller con técnicos certificados", "Mantenimientos preventivos, garantías y diagnóstico con herramienta especializada Bajaj."],
              ["Repuestos originales", "Inventario permanente de partes para toda la línea, con asesoría de referencia exacta."],
              ["Crédito aprobado rápido", "Trabajamos con varias entidades financieras. Respuesta el mismo día con tu cédula."]
            ].map(([t, d]) => (
              <div key={t} className="caja">
                <h3 style={{ marginBottom: 8 }}>{t}</h3>
                <p style={{ fontSize: ".96rem", color: "#CBDAEC", margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
