import { Link } from "react-router-dom";

export default function NoEncontrada() {
  return (
    <main className="seccion">
      <div className="wrap">
        <h1>Página no encontrada</h1>
        <p className="sutil">El enlace que abriste no existe en el sitio.</p>
        <Link to="/" className="btn btn-azul">Ir al inicio</Link>
      </div>
    </main>
  );
}
