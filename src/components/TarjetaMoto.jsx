// import { Link } from "react-router-dom";
// import { imagenesDe, nombreLinea } from "../data/motos.js";

// export default function TarjetaMoto({ moto }) {
//   return (
//     <Link to={`/motos/${moto.slug}`} className="moto">
//       <div className="moto-img">
//         <span className="moto-linea">{nombreLinea(moto.linea)}</span>
//         <img src={imagenesDe(moto)[0]} alt={`Bajaj ${moto.nombre}`} loading="lazy" />
//       </div>
//       <div className="moto-cuerpo">
//         <h3>{moto.nombre}</h3>
//         <div className="chips">
//           <span className="chip">{moto.cc}</span>
//           <span className="chip">Modelo nuevo</span>
//         </div>
//         <div className="moto-pie">
//           <span className="precio">
//             {moto.precio || "Consulta el precio"}
//             <small>{moto.precio ? "PRECIO DESDE" : "COTIZACIÓN INMEDIATA"}</small>
//           </span>
//           <span className="ver">Ver ficha</span>
//         </div>
//       </div>
//     </Link>
//   );
// }

import { Link } from "react-router-dom";
import { imagenesDe, nombreLinea } from "../data/motos.js";

export default function TarjetaMoto({ moto }) {
  return (
    <Link
      to={`/motos/${moto.slug}`}
      className="moto"
      style={{
        backgroundColor: "#ffffff",
        color: "#171717",
        border: "1px solid #e3e3e3",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 18px rgba(0, 0, 0, 0.08)",
        textDecoration: "none",
      }}
    >
      <div
        className="moto-img"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <span
          className="moto-linea"
          style={{
            backgroundColor: "#D81E00",
            color: "#ffffff",
          }}
        >
          {nombreLinea(moto.linea)}
        </span>

        <img
          src={imagenesDe(moto)[0]}
          alt={`Bajaj ${moto.nombre}`}
          loading="lazy"
        />
      </div>

      <div
        className="moto-cuerpo"
        style={{
          backgroundColor: "#ffffff",
          color: "#171717",
        }}
      >
        <h3
          style={{
            color: "#111111",
          }}
        >
          {moto.nombre}
        </h3>

        <div className="chips">
          <span
            className="chip"
            style={{
              backgroundColor: "#f1f1f1",
              color: "#333333",
              border: "1px solid #dddddd",
            }}
          >
            {moto.cc}
          </span>

          <span
            className="chip"
            style={{
              backgroundColor: "#f1f1f1",
              color: "#333333",
              border: "1px solid #dddddd",
            }}
          >
            Modelo nuevo
          </span>
        </div>

        <div className="moto-pie">
          <span
            className="precio"
            style={{
              color: "#111111",
            }}
          >
            {moto.precio || "Consulta el precio"}

            <small
              style={{
                color: "#777777",
              }}
            >
              {moto.precio ? "PRECIO DESDE" : "COTIZACIÓN INMEDIATA"}
            </small>
          </span>

          <span
            className="ver"
            style={{
              color: "#111111",
              fontWeight: "600",
            }}
          >
            Ver ficha →
          </span>
        </div>
      </div>
    </Link>
  );
}

