import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import GrupoLista from "./components/GrupoLista";
import NavBar from "./components/NavBar";
import Encabezado from "./components/Encabezado";
import VentanaAsistente from "./components/VentanaAsistente";
import CajaUsuario from "./components/CajaUsuario";
import BotonEnviar from "./components/BotonEnviar";
import FloatingBubble from "./components/BurbujaWhatsApp";

function App() {
  const mensaje = "Bienvenido a nuestro servicio!";
  return (
    <div>
      <Encabezado />
      <NavBar />
      <VentanaAsistente mensaje={mensaje} />
      <FloatingBubble />
      <CajaUsuario />
      <BotonEnviar />
    </div>
  );
}

export default App;
