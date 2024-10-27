import React from "react";
import "../styles/Encabezado.css";
import logo from "../assets/logo.png";

const Encabezado: React.FC = () => {
  return (
    <header className="encabezado">
      <div className="encabezado-texto">
        <h1>PALERMO</h1>
        <h4>Salones y banquetes</h4>
      </div>
      <div className="encabezado-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </header>
  );
};

export default Encabezado;
