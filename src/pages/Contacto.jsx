<<<<<<< HEAD
import { useState } from "react";
import { SUMOTO, waLink } from "../data/sumoto.js";
import { MOTOS } from "../data/motos.js";

export default function Contacto() {
  const [datos, setDatos] = useState({ nombre: "", tel: "", modelo: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const set = (campo) => (e) => setDatos((d) => ({...d, [campo]: e.target.value }));

  const enviar = () => {
    if (!datos.nombre.trim() ||!datos.tel.trim()) {
      setError("Escribe tu nombre y tu teléfono para poder responderte.");
      return;
    }
    setError("");
    const texto =
      `Hola SUMOTO, soy ${datos.nombre}. Teléfono: ${datos.tel}.` +
      (datos.modelo? ` Me interesa la ${datos.modelo}.` : "") +
      (datos.mensaje? ` ${datos.mensaje}` : "");
    window.open(waLink(texto), "_blank", "noopener");
    setEnviado(true);
  };

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SUMOTO.direccion)}&z=17&output=embed`;

  return (
    <main style={{ paddingBottom: 80 }}>
      {/* HEADER */}
      <section className="seccion seccion-azul" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <h1 style={{ color: "#fff", fontSize: "clamp(2.4rem,5vw,3.8rem)", textTransform: "uppercase", margin: 0 }}>
            Estamos en Palmira
          </h1>
          <p style={{ color: "#CBDAEC", marginTop: 12, fontSize: "1.1rem", maxWidth: 600 }}>
            Visítanos sin cita previa. Respondemos por WhatsApp en menos de 10 minutos en horario de atención.
          </p>
        </div>
      </section>

      {/* MAPA GRANDE */}
      <section style={{ width: "100%", height: 420, position: "relative", background: "#e9eef5" }}>
        <iframe
          title="Mapa SUMOTO Palmira"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.1) contrast(1.05)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          background: "white",
          padding: "12px 18px",
          borderRadius: 12,
          boxShadow: "0 8px 30px rgba(0,0,0,.15)",
          display: "flex",
          alignItems: "center",
          gap: 12,
          maxWidth: "90%",
          width: 480
        }}>
          <div style={{ background: "var(--azul, #0A2240)", color: "white", width: 42, height: 42, borderRadius: 10, display: "grid", placeItems: "center", fontSize: 20 }}>📍</div>
          <div style={{ flex: 1 }}>
            <b style={{ display: "block", fontSize: ".95rem", color: "#666" }}>{SUMOTO.direccion}</b>
            <span style={{ fontSize: ".82rem", color: "#666" }}>{SUMOTO.ciudad}</span>
          </div>
          <a className="btn btn-azul" href={SUMOTO.mapaLink} target="_blank" rel="noopener noreferrer" style={{ padding: "8px 14px", fontSize: ".85rem" }}>
            Cómo llegar
          </a>
        </div>
      </section>

      <div className="wrap" style={{ marginTop: 40 }}>
        <div className="duo" style={{ alignItems: "start", gap: 32 }}>
          {/* FORMULARIO */}
          <div>
            <h2 style={{ fontSize: "1.8rem", marginBottom: 8 }}>Escríbenos</h2>
            <p className="sutil" style={{ marginBottom: 20 }}>Tu mensaje llega directamente a una de nuestras asesoras de ventas.</p>
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
              <button className="btn btn-wa" onClick={enviar} style={{ width: "100%", justifyContent: "center", padding: "14px" }}>Enviar por WhatsApp</button>
              {error && <p style={{ color: "var(--rojo)", margin: 0, fontSize: ".9rem" }}>{error}</p>}
              {enviado && (
                <div className="aviso" style={{ background: "#e6f9ed", border: "1px solid #b6e8c5", padding: 12, borderRadius: 8 }}>
                  ✅ Abrimos WhatsApp con tu mensaje listo. Si no se abrió, revisa el bloqueador de ventanas emergentes.
                </div>
              )}
            </div>
          </div>

          {/* INFO */}
          <div>
            <h2 style={{ fontSize: "1.8rem", marginBottom: 16 }}>Vitrina en Palmira</h2>
            <div style={{ display: "grid", gap: 12 }}>
              <div className="caja" style={{ display: "flex", gap: 14, alignItems: "start" }}>
                <span style={{ fontSize: 22 }}></span>
                <div><b>Dirección</b><p className="sutil" style={{ margin: "4px 0 0" }}>{SUMOTO.direccion}</p></div>
              </div>
              <div className="caja" style={{ display: "flex", gap: 14, alignItems: "start" }}>
                <span style={{ fontSize: 22 }}></span>
                <div><b>Horario</b><p className="sutil" style={{ margin: "4px 0 0" }}>{SUMOTO.horario}</p></div>
              </div>
              <div className="caja" style={{ display: "flex", gap: 14, alignItems: "start" }}>
                <span style={{ fontSize: 22 }}></span>
                <div><b>Correo</b><p className="sutil" style={{ margin: "4px 0 0" }}>{SUMOTO.correo}</p></div>
              </div>
              <div className="caja" style={{ display: "flex", gap: 14, alignItems: "start" }}>
                <span style={{ fontSize: 22 }}></span>
                <div>
                  <b>WhatsApp Ventas</b>
                  <p className="sutil" style={{ margin: "4px 0 0" }}>{SUMOTO.telefonos} <br/><small>• El sistema asigna automáticamente a una asesora disponible</small></p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
              <a className="btn btn-azul" href={SUMOTO.mapaLink} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: "center" }}>
                Abrir en Google Maps
              </a>
              <a className="btn btn-rojo" href={waLink("Hola SUMOTO, quiero visitar la vitrina de Palmira.")} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: "center" }}>
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
=======
import { Link } from "react-router-dom";
import { MOTOS } from "../data/motos.js";
import { dealer, waLink } from "../data/dealer.js";
import PageHeader from "../components/PageHeader.jsx";
import LeadForm from "../components/LeadForm.jsx";
import { IconWhatsapp, IconPhone, IconMail, IconPin } from "../components/Icons.jsx";

export default function Contacto() {
  const canales = [
    { I: IconWhatsapp, t: "WhatsApp", v: "Escríbenos ahora", href: waLink("Hola, necesito información."), ext: true },
    { I: IconPhone, t: "Teléfono", v: dealer.phone, href: `tel:${dealer.phone.replace(/\s+/g, "")}` },
    { I: IconMail, t: "Correo", v: dealer.email, href: `mailto:${dealer.email}` },
  ];
  return (
    <>
      <PageHeader eyebrow="Hablemos" title="Contacto" crumbs={[{ label: "Contacto" }]}>
        <p>¿Dudas sobre un modelo, tu crédito o tu mantenimiento? Estamos para ayudarte.</p>
      </PageHeader>
      <section className="sec sec--tight">
        <div className="container contact">
          <div className="contact__channels">
            {canales.map(({ I, t, v, href, ext }) => (
              <a key={t} href={href} target={ext ? "_blank" : undefined} rel="noreferrer" className="channel">
                <span className="channel__icon"><I width="22" height="22" /></span><span><small>{t}</small><b>{v}</b></span>
              </a>
            ))}
            <Link to="/concesionario" className="channel">
              <span className="channel__icon"><IconPin width="22" height="22" /></span><span><small>Visítanos</small><b>{dealer.address}</b></span>
            </Link>
          </div>
          <LeadForm titulo="Envíanos tu mensaje" asunto="Contacto web – AKT Palmira"
            fields={[
              { name: "nombre", label: "Nombre completo", required: true },
              { name: "celular", label: "Celular", type: "tel", required: true },
              { name: "email", label: "Correo", type: "email" },
              { name: "interes", label: "Me interesa", type: "select", options: ["Comprar una moto", "Financiación", "Taller", "Repuestos", "Garantía", "Otro"] },
              { name: "moto", label: "Modelo", type: "select", options: MOTOS.map((m) => m.nombre).concat("Aún no sé"), full: true },
              { name: "mensaje", label: "Mensaje", type: "textarea", full: true },
            ]} />
        </div>
        <div className="container" id="datos">
          <details className="legal">
            <summary>Política de tratamiento de datos personales</summary>
            <p>{dealer.businessName} trata los datos personales suministrados en este sitio para atender solicitudes de cotización, financiación, servicio posventa y contacto comercial, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013. El titular puede conocer, actualizar, rectificar y suprimir sus datos, o revocar la autorización, escribiendo a {dealer.email}.</p>
            <p><b>Texto de referencia: reemplazar por la política oficial vigente de Sumoto S.A.</b></p>
          </details>
        </div>
      </section>
    </>
  );
}
>>>>>>> 540176676a648ddce5278bdbbe0782d6db2c020a
