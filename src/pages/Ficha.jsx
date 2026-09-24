import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { buscarMoto, porLinea, imagenesDe, nombreLinea } from "../data/motos.js";
import { waLink } from "../data/sumoto.js";
import TarjetaMoto from "../components/TarjetaMoto.jsx";
import NoEncontrada from "./NoEncontrada.jsx";

export default function Ficha() {
  const { slug } = useParams();
  const moto = buscarMoto(slug);
  const [activa, setActiva] = useState(0);

  useEffect(() => {
    setActiva(0);
    if (moto) document.title = `Bajaj ${moto.nombre} — SUMOTO S.A. Bajaj Palmira`;
  }, [slug, moto]);

  if (!moto) return <NoEncontrada />;

  const fotos = imagenesDe(moto);
  const relacionadas = porLinea(moto.linea).filter((m) => m.slug !== moto.slug).slice(0, 4);

  return (
    <main className="seccion">
      <div className="wrap">
        <div className="migas">
          <Link to="/">Inicio</Link> / <Link to="/motos">Motos</Link> /{" "}
          <Link to={`/motos?linea=${moto.linea}`}>{nombreLinea(moto.linea)}</Link> / {moto.nombre}
        </div>

        <div className="ficha">
          <div className="galeria">
            <div className="principal">
              <img src={fotos[activa]} alt={`Bajaj ${moto.nombre}`} />
            </div>
            {fotos.length > 1 && (
              <div className="miniaturas">
                {fotos.map((f, i) => (
                  <button
                    key={f}
                    className={i === activa ? "on" : ""}
                    onClick={() => setActiva(i)}
                    aria-label={`Foto ${i + 1} de ${moto.nombre}`}
                  >
                    <img src={f} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="chip" style={{ marginBottom: 12, display: "inline-block" }}>
              Línea {nombreLinea(moto.linea)}
            </span>
            <h1 style={{ fontSize: "clamp(2rem,4.6vw,3.2rem)", textTransform: "uppercase" }}>{moto.nombre}</h1>
            <p className="sutil" style={{ marginTop: 14 }}>{moto.resumen}</p>

            <div className="precio" style={{ fontSize: "1.9rem", margin: "18px 0 6px" }}>
              {moto.precio || "Consulta el precio"}
              <small>{moto.precio ? "PRECIO DESDE, MATRÍCULA NO INCLUIDA" : "PRECIO ACTUALIZADO CON TU ASESOR"}</small>
            </div>

            <div className="hero-acciones">
              <a
                className="btn btn-wa"
                href={waLink(`Hola SUMOTO, me interesa la Bajaj ${moto.nombre}. ¿Me pueden dar precio y disponibilidad?`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </a>
              <Link to="/financiacion" className="btn btn-linea">Ver financiación</Link>
            </div>

            <h3 style={{ marginTop: 36, marginBottom: 6 }}>Ficha técnica</h3>
            <div className="tabla-scroll">
              <table className="tabla-specs">
                <tbody>
                  {Object.entries(moto.specs).map(([k, v]) => (
                    <tr key={k}>
                      <th>{k}</th>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="sutil" style={{ fontSize: ".85rem", marginTop: 14 }}>
              Las especificaciones pueden variar según el año del modelo y la versión disponible en inventario.
            </p>
          </div>
        </div>

        {relacionadas.length > 0 && (
          <div style={{ marginTop: 70 }}>
            <h2 className="titulo-seccion">Otras {nombreLinea(moto.linea)}</h2>
            <div className="grid-motos" style={{ marginTop: 22 }}>
              {relacionadas.map((m) => <TarjetaMoto key={m.slug} moto={m} />)}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
