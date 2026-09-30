<<<<<<< HEAD
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
=======
import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CATEGORIAS, MOTOS } from "../data/motos.js";
import { img, getCategoria, getMoto, motosDe, ccNum, ahorro } from "../utils/catalogo.js";
import MotoCard from "../components/MotoCard.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { IconCompare, IconSearch, IconClose, IconFilter, categoryIcon } from "../components/Icons.jsx";

const RANGOS = [
  { id: "hasta-125", label: "Hasta 125 cc", fn: (c) => c <= 125 },
  { id: "126-200", label: "126 – 200 cc", fn: (c) => c > 125 && c <= 200 },
  { id: "201-300", label: "201 – 300 cc", fn: (c) => c > 200 && c <= 300 },
  { id: "300+", label: "Más de 300 cc", fn: (c) => c > 300 },
];
const ORDEN = {
  relevancia: ["Relevancia", () => 0],
  menor: ["Menor precio", (a, b) => a.precio - b.precio],
  mayor: ["Mayor precio", (a, b) => b.precio - a.precio],
  cc: ["Mayor cilindraje", (a, b) => ccNum(b) - ccNum(a)],
  ahorro: ["Mayor ahorro", (a, b) => ahorro(b) - ahorro(a)],
};
const MAXP = Math.ceil(Math.max(...MOTOS.map((m) => m.precio)) / 1e6) * 1e6;

export default function Motos() {
  const { linea } = useParams();
  const cat = linea ? getCategoria(linea) : null;
  const [q, setQ] = useState("");
  const [rangos, setRangos] = useState([]);
  const [maxP, setMaxP] = useState(MAXP);
  const [orden, setOrden] = useState("relevancia");
  const [comp, setComp] = useState([]);
  const [filtros, setFiltros] = useState(false);
  const navigate = useNavigate();

  const base = cat ? motosDe(cat.id) : MOTOS;
  const lista = useMemo(() => {
    let l = base.filter((m) => m.precio <= maxP);
    if (q) l = l.filter((m) => m.nombre.toLowerCase().includes(q.toLowerCase()));
    if (rangos.length) l = l.filter((m) => RANGOS.some((r) => rangos.includes(r.id) && r.fn(ccNum(m))));
    return [...l].sort(ORDEN[orden][1]);
  }, [base, q, rangos, maxP, orden]);

  if (linea && !cat) return <div className="container sec"><h1 className="h-display">Línea no encontrada</h1><Link to="/motos" className="link-arrow">Ver todas las motos</Link></div>;

  const toggleR = (id) => setRangos((r) => (r.includes(id) ? r.filter((x) => x !== id) : [...r, id]));
  const toggleC = (s) => setComp((c) => (c.includes(s) ? c.filter((x) => x !== s) : c.length < 3 ? [...c, s] : c));
  const limpiar = () => { setQ(""); setRangos([]); setMaxP(MAXP); };
  const destacada = base.reduce((a, b) => (b.precio > a.precio ? b : a), base[0]);

  return (
    <>
      <PageHeader eyebrow={cat ? "Línea AKT" : "Catálogo"} title={cat ? cat.nombre : "Todas las motos"}
        crumbs={cat ? [{ label: "Motos", to: "/motos" }, { label: cat.nombre }] : [{ label: "Motos" }]} image={img(destacada)}>
        <p>{cat ? `${cat.lema}. ${base.length} modelos disponibles en Palmira.` : `${MOTOS.length} modelos en ${CATEGORIAS.length} líneas. Filtra, compara y cotiza tu próxima AKT.`}</p>
      </PageHeader>

      <section className="sec sec--tight">
        <div className="container cat">
          <aside className={`filters ${filtros ? "is-open" : ""}`}>
            <div className="filters__block">
              <h4>Líneas</h4>
              <Link to="/motos" className={`filters__cat ${!cat ? "is-on" : ""}`}><span>Todas</span><small>{MOTOS.length}</small></Link>
              {CATEGORIAS.map((c) => {
                const Icon = categoryIcon[c.id];
                return (
                  <Link key={c.id} to={`/motos/${c.id}`} className={`filters__cat ${cat?.id === c.id ? "is-on" : ""}`}>
                    {Icon && <Icon width="22" height="22" />}<span>{c.nombre}</span><small>{motosDe(c.id).length}</small>
                  </Link>
                );
              })}
            </div>
            <div className="filters__block">
              <h4>Cilindraje</h4>
              {RANGOS.map((r) => (
                <label key={r.id} className="check"><input type="checkbox" checked={rangos.includes(r.id)} onChange={() => toggleR(r.id)} /> {r.label}</label>
              ))}
            </div>
            <div className="filters__block">
              <h4>Precio máximo</h4>
              <input type="range" min={4000000} max={MAXP} step={500000} value={maxP} onChange={(e) => setMaxP(+e.target.value)} aria-label="Precio máximo" />
              <p className="filters__val">Hasta <b>{maxP.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 })}</b></p>
            </div>
            <button className="btn btn--ghost btn--sm" onClick={limpiar}>Limpiar filtros</button>
          </aside>

          <div className="cat__main">
            <div className="toolbar">
              <button className="btn btn--line-dark btn--sm toolbar__filters" onClick={() => setFiltros(!filtros)}><IconFilter width="16" height="16" /> Filtros</button>
              <label className="search"><IconSearch width="18" height="18" /><input placeholder="Buscar modelo…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Buscar modelo" /></label>
              <span className="toolbar__count">{lista.length} resultados</span>
              <select className="select" value={orden} onChange={(e) => setOrden(e.target.value)} aria-label="Ordenar">
                {Object.entries(ORDEN).map(([k, [l]]) => <option key={k} value={k}>{l}</option>)}
              </select>
            </div>
            <div className="grid">
              {lista.map((m) => <MotoCard key={m.slug} moto={m} onCompare={toggleC} comparing={comp.includes(m.slug)} />)}
              {lista.length === 0 && <div className="empty"><p>No hay modelos con esos filtros.</p><button className="btn btn--red btn--sm" onClick={limpiar}>Limpiar filtros</button></div>}
            </div>
            <p className="fineprint">* Precio de referencia publicado por AKT Motos Colombia. No incluye matrícula, SOAT ni seguros. Sujeto a cambios sin previo aviso y a disponibilidad en el concesionario.</p>
          </div>
        </div>
      </section>

      {comp.length > 0 && (
        <div className="cbar">
          <div className="container cbar__inner">
            <div className="cbar__items">
              {comp.map((s) => { const m = getMoto(s); return (
                <span key={s} className="cbar__item"><img src={img(m)} alt="" />{m.nombre}<button onClick={() => toggleC(s)} aria-label={`Quitar ${m.nombre}`}><IconClose width="14" height="14" /></button></span>
              ); })}
              <small>{comp.length}/3</small>
            </div>
            <button className="btn btn--red btn--sm" disabled={comp.length < 2} onClick={() => navigate(`/comparar?m=${comp.join(",")}`)}><IconCompare width="18" height="18" /> Comparar</button>
          </div>
        </div>
      )}
    </>
>>>>>>> 540176676a648ddce5278bdbbe0782d6db2c020a
  );
}
