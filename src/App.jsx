<<<<<<< HEAD
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Barra from "./components/Barra.jsx";
import Footer from "./components/Footer.jsx";
import BotonWhatsApp from "./components/BotonWhatsApp.jsx";
import Inicio from "./pages/Inicio.jsx";
import Motos from "./pages/Motos.jsx";
import Ficha from "./pages/Ficha.jsx";
import Repuestos from "./pages/Repuestos.jsx";
import Taller from "./pages/Taller.jsx";
import Financiacion from "./pages/Financiacion.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Contacto from "./pages/Contacto.jsx";
import NoEncontrada from "./pages/NoEncontrada.jsx";

// Sube el scroll al inicio cada vez que cambia de pagina.
function SubirAlInicio() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <SubirAlInicio />
      <Barra />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/motos" element={<Motos />} />
        <Route path="/motos/:slug" element={<Ficha />} />
        <Route path="/repuestos" element={<Repuestos />} />
        <Route path="/taller" element={<Taller />} />
        <Route path="/financiacion" element={<Financiacion />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
      <Footer />
      <BotonWhatsApp />
=======
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsappFab from "./components/WhatsappFab.jsx";
import Inicio from "./pages/Inicio.jsx";
import Motos from "./pages/Motos.jsx";
import MotoDetalle from "./pages/MotoDetalle.jsx";
import Comparar from "./pages/Comparar.jsx";
import Financiacion from "./pages/Financiacion.jsx";
import Posventa from "./pages/Posventa.jsx";
import Concesionario from "./pages/Concesionario.jsx";
import Contacto from "./pages/Contacto.jsx";
import NoEncontrado from "./pages/NoEncontrado.jsx";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);

  return (
    <>
      <Navbar />
      <main key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/motos" element={<Motos />} />
          <Route path="/motos/:linea" element={<Motos />} />
          <Route path="/moto/:slug" element={<MotoDetalle />} />
          <Route path="/comparar" element={<Comparar />} />
          <Route path="/financiacion" element={<Financiacion />} />
          <Route path="/posventa" element={<Posventa />} />
          <Route path="/concesionario" element={<Concesionario />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappFab />
>>>>>>> 540176676a648ddce5278bdbbe0782d6db2c020a
    </>
  );
}
