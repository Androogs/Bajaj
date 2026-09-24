import { useState } from "react";
import { SUMOTO, waLink } from "../data/sumoto.js";
import { MOTOS } from "../data/motos.js";

export default function Contacto() {
  const [datos, setDatos] = useState({ nombre: "", tel: "", modelo: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const set = (campo) => (e) => setDatos((d) => ({ ...d, [campo]: e.target.value }));

  const enviar = () => {
    if (!datos.nombre.trim() || !datos.tel.trim()) {
      setError("Escribe tu nombre y tu teléfono para poder responderte.");
      return;
    }
    setError("");
    const texto =
      `Hola SUMOTO, soy ${datos.nombre}. Teléfono: ${datos.tel}.` +
      (datos.modelo ? ` Me interesa la ${datos.modelo}.` : "") +
      (datos.mensaje ? ` ${datos.mensaje}` : "");
    window.open(waLink(texto), "_blank", "noopener");
    setEnviado(true);
  };

  return (
    <main className="seccion">
      <div className="wrap">
        <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.4rem)", textTransform: "uppercase" }}>Contacto</h1>
        <p className="intro sutil">
          Respondemos por WhatsApp en horario de atención. También puedes visitarnos en la vitrina sin cita previa.
        </p>

        <div className="duo">
          <div>
            <h2 style={{ fontSize: "1.6rem", marginBottom: 16 }}>Escríbenos</h2>
            <div className="form">
              <div className="campo">
                <label htmlFor="n">Nombre</label>
                <input id="n" value={datos.nombre} onChange={set("nombre")} placeholder="Tu nombre completo" />
              </div>
              <div className="campo">
                <label htmlFor="t">Teléfono</label>
                <input id="t" value={datos.tel} onChange={set("tel")} placeholder="321 123 4567" />
              </div>
              <div className="campo">
                <label htmlFor="mo">Modelo de interés</label>
                <select id="mo" value={datos.modelo} onChange={set("modelo")}>
                  <option value="">Sin definir todavía</option>
                  {MOTOS.map((m) => (
                    <option key={m.slug} value={m.nombre}>{m.nombre}</option>
                  ))}
                </select>
              </div>
              <div className="campo">
                <label htmlFor="ms">Mensaje</label>
                <textarea id="ms" rows="4" value={datos.mensaje} onChange={set("mensaje")} placeholder="¿En qué te podemos ayudar?" />
              </div>
              <button className="btn btn-wa" onClick={enviar}>Enviar por WhatsApp</button>
              {error && <p style={{ color: "var(--rojo)", margin: 0 }}>{error}</p>}
              {enviado && (
                <div className="aviso">
                  Abrimos WhatsApp con tu mensaje listo. Si no se abrió, escríbenos al {SUMOTO.whatsapp}.
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "1.6rem", marginBottom: 16 }}>Vitrina en Palmira</h2>
            <div className="caja">
              <table className="tabla-specs">
                <tbody>
                  <tr><th>Dirección</th><td>{SUMOTO.direccion}</td></tr>
                  <tr><th>Correo</th><td>{SUMOTO.correo}</td></tr>
                  <tr><th>Horario</th><td>{SUMOTO.horario}</td></tr>
                </tbody>
              </table>
            </div>
            <a className="mapa-caja" href={SUMOTO.mapaLink} target="_blank" rel="noopener noreferrer">
              <b>Cómo llegar</b>
              <span>{SUMOTO.direccion} — abrir la ubicación en Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
