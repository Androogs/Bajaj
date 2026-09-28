import { useState } from "react";
import { Link } from "react-router-dom";
import { img, cop, ahorro, getCategoria } from "../utils/catalogo.js";
import { IconArrow } from "./Icons.jsx";

export default function MotoCard({ moto, onCompare, comparing }) {
  const [v, setV] = useState(0);
  const cat = getCategoria(moto.categoria);
  const save = ahorro(moto);
  return (
    <article className="mc">
      <Link to={`/moto/${moto.slug}`} className="mc__media" aria-label={`Ver ${moto.nombre}`}>
        <span className="mc__line">{cat.nombre}</span>
        {save > 0 && <span className="mc__save">Ahorra {cop(save)}</span>}
        <img key={v} src={img(moto, v)} alt={moto.nombre} loading="lazy" />
      </Link>
      {moto.imagenes.length > 1 && (
        <div className="mc__variants" aria-label="Versiones y colores">
          {moto.imagenes.map((_, i) => (
            <button key={i} className={i === v ? "is-on" : ""} onClick={() => setV(i)} aria-label={`Ver versión ${i + 1}`}>
              <img src={img(moto, i)} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
      <div className="mc__body">
        <div className="mc__title">
          <h3>{moto.nombre}</h3>
          <span className="mc__cc">{moto.resumen.cc}<small>cc</small></span>
        </div>
        <p className="mc__lema">{moto.lema}</p>
        <ul className="mc__stats">
          <li><b>{moto.resumen.hp}</b> hp</li>
          <li><b>{moto.resumen.nm}</b> Nm</li>
          {moto.resumen.tanque && <li><b>{moto.resumen.tanque}</b></li>}
        </ul>
      </div>
      <div className="mc__foot">
        <div className="mc__price">
          {moto.precioAntes && <s>{cop(moto.precioAntes)}</s>}
          <strong>{cop(moto.precio)}*</strong>
        </div>
        <Link to={`/moto/${moto.slug}`} className="mc__go" aria-label={`Ver ${moto.nombre}`}><IconArrow /></Link>
      </div>
      {onCompare && (
        <label className={`mc__cmp ${comparing ? "is-on" : ""}`}>
          <input type="checkbox" checked={comparing} onChange={() => onCompare(moto.slug)} /> Comparar
        </label>
      )}
    </article>
  );
}
