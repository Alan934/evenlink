import React from "react";
import "../styles/PieDePagina.css";

const PieDePagina: React.FC = () => {
  return (
    <footer className="pie-de-pagina">
      <div className="contacto">
        <p>Contacto:</p>
        <p>Email: ejemplo@mail.com</p>
        <p>Teléfono: +54 11 1234-5678</p>
      </div>
      <div className="empresa-info">
        <p>Empresa Palermo</p>
        <p>CUIT/CUIL: 20-12345678-9</p>
      </div>
    </footer>
  );
};

export default PieDePagina;
