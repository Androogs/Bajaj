import { dealer, waLink } from "../data/dealer.js";
import { getMoto, img } from "../utils/catalogo.js";
import PageHeader from "../components/PageHeader.jsx";
import { IconPin, IconClock, IconPhone, IconMail, IconWhatsapp, IconCard, IconWrench, IconBox, IconShield } from "../components/Icons.jsx";

export default function Concesionario() {
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(dealer.addressMapsQuery)}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dealer.addressMapsQuery)}`;
  return (
    <>
      <PageHeader eyebrow={dealer.businessName} title="El concesionario" crumbs={[{ label: "Concesionario" }]} image={img(getMoto("ds900x"))}>
        <p>{dealer.businessName} es concesionario oficial AKT Motos. Ven a conocer, probar y cotizar tu próxima moto con asesoría experta.</p>
      </PageHeader>
      <section className="sec sec--tight">
        <div className="container store">
          <div className="store__about">
            <span className="eyebrow">Visítanos en Palmira</span>
            <h2 className="h-display">Tu punto AKT en el Valle del Cauca</h2>
            <p className="muted">Te acompañamos a elegir, financiar y mantener tu moto: venta de motos nuevas, crédito, taller especializado y repuestos originales en un mismo lugar.</p>
            <div className="store__services">
              {[[IconShield, "Motos nuevas AKT"], [IconCard, "Financiación"], [IconWrench, "Taller especializado"], [IconBox, "Repuestos y accesorios"]].map(([I, t]) => (
                <div key={t}><I /><span>{t}</span></div>
              ))}
            </div>
          </div>
          <div className="store__card">
            <ul>
              <li><IconPin width="22" height="22" /><div><small>Dirección</small><b>{dealer.address}</b><a href={mapsLink} target="_blank" rel="noreferrer">Cómo llegar →</a></div></li>
              <li><IconClock width="22" height="22" /><div><small>Horario de atención</small>{dealer.hours.map((h) => <span key={h.day}><em>{h.day}</em> {h.time}</span>)}</div></li>
              <li><IconPhone width="22" height="22" /><div><small>Línea de ventas</small><a href={`tel:${dealer.phone.replace(/\s+/g, "")}`}>{dealer.phone}</a></div></li>
              <li><IconMail width="22" height="22" /><div><small>Correo</small><a href={`mailto:${dealer.email}`}>{dealer.email}</a></div></li>
            </ul>
            <a className="btn btn--red btn--block" href={waLink("Hola, quiero más información sobre el concesionario en Palmira.")} target="_blank" rel="noreferrer"><IconWhatsapp width="18" height="18" /> Escríbenos por WhatsApp</a>
          </div>
          <div className="store__map">
            <iframe title={`Ubicación de ${dealer.displayName}`} src={mapsSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
    </>
  );
}
