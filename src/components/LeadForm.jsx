import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { waLink } from "../data/dealer.js";
import { IconWhatsapp, IconCheck } from "./Icons.jsx";

/**
 * Formulario genérico: arma el mensaje y lo abre en WhatsApp.
 * Para conectarlo a un CRM o correo, reemplaza la función `enviar`.
 * fields: [{ name, label, type, options, required, full }]
 */
export default function LeadForm({ titulo, subtitulo, fields, asunto, boton = "Enviar por WhatsApp", initial = {} }) {
  const [data, setData] = useState(initial);
  const [acepta, setAcepta] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const initKey = JSON.stringify(initial);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setData((d) => ({ ...d, ...initial })); }, [initKey]);
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const enviar = (e) => {
    e.preventDefault();
    const lineas = fields.map((f) => `• ${f.label}: ${data[f.name] || "—"}`).join("\n");
    window.open(waLink(`*${asunto}*\n${lineas}`), "_blank", "noopener");
    setEnviado(true);
  };

  return (
    <form className="form" onSubmit={enviar}>
      {titulo && <h3 className="form__title">{titulo}</h3>}
      {subtitulo && <p className="form__sub">{subtitulo}</p>}
      <div className="form__grid">
        {fields.map((f) => (
          <label key={f.name} className={`field ${f.full ? "field--full" : ""}`}>
            <span>{f.label}{f.required && " *"}</span>
            {f.type === "select" ? (
              <select required={f.required} value={data[f.name] || ""} onChange={(e) => set(f.name, e.target.value)}>
                <option value="" disabled>Selecciona…</option>
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : f.type === "textarea" ? (
              <textarea rows={3} required={f.required} value={data[f.name] || ""} onChange={(e) => set(f.name, e.target.value)} />
            ) : (
              <input type={f.type || "text"} required={f.required} value={data[f.name] || ""} onChange={(e) => set(f.name, e.target.value)} />
            )}
          </label>
        ))}
      </div>
      <label className="consent">
        <input type="checkbox" checked={acepta} onChange={(e) => setAcepta(e.target.checked)} required />
        <span>Autorizo el tratamiento de mis datos personales conforme a la <Link to="/contacto#datos">política de datos</Link> de Sumoto S.A.</span>
      </label>
      <button className="btn btn--red btn--block" type="submit">
        {enviado ? <><IconCheck /> Listo · Reenviar</> : <><IconWhatsapp width="18" height="18" /> {boton}</>}
      </button>
    </form>
  );
}
