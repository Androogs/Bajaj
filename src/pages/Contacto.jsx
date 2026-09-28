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
