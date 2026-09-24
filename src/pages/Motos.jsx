// import { useState, useMemo, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import { MOTOS, LINEAS, porLinea } from "../data/motos.js";
// import TarjetaMoto from "../components/TarjetaMoto.jsx";

// export default function Motos() {
//   const [params, setParams] = useSearchParams();
//   const lineaUrl = params.get("linea") || "todas";
//   const [linea, setLinea] = useState(lineaUrl);
//   const [texto, setTexto] = useState("");

//   useEffect(() => {
//     setLinea(lineaUrl);
//   }, [lineaUrl]);

//   const cambiarLinea = (id) => {
//     setLinea(id);
//     if (id === "todas") setParams({});
//     else setParams({ linea: id });
//   };

//   const lista = useMemo(
//     () =>
//       MOTOS.filter(
//         (m) =>
//           (linea === "todas" || m.linea === linea) &&
//           (texto.trim() === "" || `${m.nombre} ${m.cc}`.toLowerCase().includes(texto.toLowerCase()))
//       ),
//     [linea, texto]
//   );

//   useEffect(() => {
//     document.title = "Motos — SUMOTO S.A. Bajaj Palmira";
//   }, []);

//   return (
//     <main className="seccion">
//       <div className="wrap">
//         <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.4rem)", textTransform: "uppercase" }}>Catálogo de motos</h1>
//         <p className="intro sutil">
//           Todos los modelos Bajaj disponibles en nuestra vitrina de Palmira. Precios y disponibilidad sujetos a
//           confirmación con el asesor.
//         </p>

//         <div className="filtros">
//           <button className={"filtro" + (linea === "todas" ? " on" : "")} onClick={() => cambiarLinea("todas")}>
//             Todas ({MOTOS.length})
//           </button>
//           {LINEAS.map((l) => (
//             <button
//               key={l.id}
//               className={"filtro" + (linea === l.id ? " on" : "")}
//               onClick={() => cambiarLinea(l.id)}
//             >
//               {l.nombre} ({porLinea(l.id).length})
//             </button>
//           ))}
//         </div>

//         <div className="campo" style={{ maxWidth: 360, marginBottom: 28 }}>
//           <label htmlFor="q">Buscar modelo</label>
//           <input id="q" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Pulsar, Boxer, 160 cc…" />
//         </div>

//         {lista.length === 0 ? (
//           <p>No hay modelos que coincidan con la búsqueda. Prueba con otro nombre o escríbenos para consultar disponibilidad.</p>
//         ) : (
//           <div className="grid-motos">
//             {lista.map((m) => <TarjetaMoto key={m.slug} moto={m} />)}
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }



import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MOTOS, LINEAS, porLinea } from "../data/motos.js";
import TarjetaMoto from "../components/TarjetaMoto.jsx";

export default function Motos() {
  const [params, setParams] = useSearchParams();

  const lineaUrl = params.get("linea") || "todas";
  const [linea, setLinea] = useState(lineaUrl);
  const [texto, setTexto] = useState("");

  useEffect(() => {
    setLinea(lineaUrl);
  }, [lineaUrl]);

  const cambiarLinea = (id) => {
    setLinea(id);

    if (id === "todas") setParams({});
    else setParams({ linea: id });
  };

  const lista = useMemo(
    () =>
      MOTOS.filter(
        (m) =>
          (linea === "todas" || m.linea === linea) &&
          (texto.trim() === "" ||
            `${m.nombre} ${m.cc}`
              .toLowerCase()
              .includes(texto.toLowerCase()))
      ),
    [linea, texto]
  );

  useEffect(() => {
    document.title = "Motos — SUMOTO S.A. Bajaj Palmira";
  }, []);

  return (
    <main
      className="seccion"
      style={{
        backgroundColor: "#ffffff",
        color: "#171717",
        minHeight: "100vh",
      }}
    >
      <div className="wrap">
        <h1
          style={{
            fontSize: "clamp(2.2rem,5vw,3.4rem)",
            textTransform: "uppercase",
            color: "#111111",
          }}
        >
          Catálogo de motos
        </h1>

        <p
          className="intro sutil"
          style={{
            color: "#555555",
          }}
        >
          Todos los modelos Bajaj disponibles en nuestra vitrina de Palmira.
          Precios y disponibilidad sujetos a confirmación con el asesor.
        </p>

        <div className="filtros">
          <button
            className={"filtro" + (linea === "todas" ? " on" : "")}
            onClick={() => cambiarLinea("todas")}
            style={{
              color: linea === "todas" ? "#ffffff" : "#222222",
            }}
          >
            Todas ({MOTOS.length})
          </button>

          {LINEAS.map((l) => (
            <button
              key={l.id}
              className={"filtro" + (linea === l.id ? " on" : "")}
              onClick={() => cambiarLinea(l.id)}
              style={{
                color: linea === l.id ? "#ffffff" : "#222222",
              }}
            >
              {l.nombre} ({porLinea(l.id).length})
            </button>
          ))}
        </div>

        <div
          className="campo"
          style={{
            maxWidth: 360,
            marginBottom: 28,
          }}
        >
          <label
            htmlFor="q"
            style={{
              color: "#222222",
            }}
          >
            Buscar modelo
          </label>

          <input
            id="q"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Pulsar, Boxer, 160 cc…"
            style={{
              color: "#222222",
              backgroundColor: "#ffffff",
              borderColor: "#cccccc",
            }}
          />
        </div>

        {lista.length === 0 ? (
          <p style={{ color: "#444444" }}>
            No hay modelos que coincidan con la búsqueda. Prueba con otro
            nombre o escríbenos para consultar disponibilidad.
          </p>
        ) : (
          <div className="grid-motos">
            {lista.map((m) => (
              <TarjetaMoto key={m.slug} moto={m} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
