import { useSearchParams } from "react-router-dom";
import { MOTOS } from "../data/motos.js";
import { dealer, waLink } from "../data/dealer.js";
import PageHeader from "../components/PageHeader.jsx";
import LeadForm from "../components/LeadForm.jsx";
import { IconWrench, IconBox, IconShield, IconCheck, IconBook, IconWhatsapp } from "../components/Icons.jsx";

const SECCIONES = {
  taller: {
    icon: IconWrench, titulo: "Taller especializado", corto: "Taller",
    texto: "Mantenimiento preventivo y correctivo con técnicos certificados AKT, usando repuestos originales.",
    items: ["Mantenimientos preventivos según el manual del propietario", "Diagnóstico y reparaciones", "Revisiones de garantía", "Alistamiento de motos nuevas"],
    form: { asunto: "Cita de taller – AKT Palmira", boton: "Agendar cita", servicio: ["Mantenimiento preventivo", "Revisión de garantía", "Reparación / diagnóstico", "Otro"] },
  },
  repuestos: {
    icon: IconBox, titulo: "Repuestos originales", corto: "Repuestos",
    texto: "Contamos con inventario de repuestos y accesorios originales para todas las líneas AKT. Consulta disponibilidad con nuestro asesor.",
    items: ["Repuestos originales AKT", "Accesorios y equipamiento", "Lubricantes y consumibles", "Pedidos especiales bajo consulta"],
    form: { asunto: "Consulta de repuesto – AKT Palmira", boton: "Consultar repuesto", servicio: ["Repuesto", "Accesorio", "Lubricante", "Otro"] },
  },
  garantia: {
    icon: IconShield, titulo: "Garantía y respaldo", corto: "Garantía",
    texto: "Te acompañamos durante todo el periodo de garantía de fábrica de tu moto AKT. Las condiciones aplican según la política de garantía vigente de AKT Motos.",
    items: ["Cumple los mantenimientos en el kilometraje indicado", "Conserva tu manual y soportes de mantenimiento", "Usa repuestos y lubricantes originales", "Consulta las condiciones con nuestro asesor"],
    form: { asunto: "Consulta de garantía – AKT Palmira", boton: "Consultar garantía", servicio: ["Consulta de condiciones", "Solicitud de revisión", "Otro"] },
  },
};

export default function Posventa() {
  const [params, setParams] = useSearchParams();
  const tab = SECCIONES[params.get("s")] ? params.get("s") : "taller";
  const s = SECCIONES[tab];
  const Icon = s.icon;

  return (
    <>
      <PageHeader eyebrow="Servicio" title="Posventa" crumbs={[{ label: "Posventa" }]}>
        <p>Servicio posventa, repuestos y garantía respaldados por {dealer.businessName}.</p>
      </PageHeader>
      <section className="sec sec--tight">
        <div className="container">
          <div className="seg" role="tablist">
            {Object.entries(SECCIONES).map(([k, v]) => {
              const I = v.icon;
              return (
                <button key={k} role="tab" aria-selected={tab === k} className={`seg__btn ${tab === k ? "is-on" : ""}`} onClick={() => setParams({ s: k })}>
                  <I /> {v.corto}
                </button>
              );
            })}
          </div>
          <div className="pv" key={tab}>
            <div className="pv__panel">
              <span className="pv__icon"><Icon width="30" height="30" /></span>
              <h2 className="h-display">{s.titulo}</h2>
              <p className="muted pv__text">{s.texto}</p>
              <ul className="feats feats--2">{s.items.map((i) => <li key={i}><IconCheck width="18" height="18" /> {i}</li>)}</ul>
              <div className="pv__links">
                <a className="btn btn--line-dark btn--sm" href="https://aktmotos.com/manuales/" target="_blank" rel="noreferrer"><IconBook /> Manuales AKT</a>
                <a className="btn btn--line-dark btn--sm" href={waLink(`Hola, tengo una consulta de ${s.corto.toLowerCase()}.`)} target="_blank" rel="noreferrer"><IconWhatsapp width="16" height="16" /> Escríbenos</a>
              </div>
              <p className="fineprint">Línea nacional AKT: {dealer.nationalLine}</p>
            </div>
            <LeadForm titulo={s.form.boton} asunto={s.form.asunto} boton={s.form.boton}
              fields={[
                { name: "nombre", label: "Nombre", required: true, full: true },
                { name: "celular", label: "Celular", type: "tel", required: true },
                { name: "placa", label: "Placa" },
                { name: "moto", label: "Modelo", type: "select", options: MOTOS.map((m) => m.nombre).concat("Otro") },
                { name: "servicio", label: "Tipo de solicitud", type: "select", options: s.form.servicio },
                { name: "detalle", label: "Detalle", type: "textarea", full: true },
              ]} />
          </div>
        </div>
      </section>
    </>
  );
}
