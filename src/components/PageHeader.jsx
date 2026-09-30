import { Link } from "react-router-dom";

/** Encabezado compacto de cada pestaña. */
export default function PageHeader({ eyebrow, title, children, crumbs = [], image }) {
  return (
    <section className="ph">
      <div className="ph__stripes" aria-hidden="true"><i /><i /><i /></div>
      <div className="container ph__inner">
        <div>
          <nav className="crumbs" aria-label="Ruta">
            <Link to="/">Inicio</Link>
            {crumbs.map((c) => (c.to ? <Link key={c.label} to={c.to}>{c.label}</Link> : <span key={c.label}>{c.label}</span>))}
          </nav>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="h-display">{title}</h1>
          {children && <div className="ph__lead">{children}</div>}
        </div>
        {image && <img className="ph__img" src={image} alt="" />}
      </div>
    </section>
  );
}
