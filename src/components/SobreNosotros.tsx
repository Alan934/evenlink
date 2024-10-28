import React from "react";
import "../styles/SobreNosotros.css";
import salon from "../assets/salon.jpg";

const SobreNosotros: React.FC = () => {
  return (
    <div className="sobre-nosotros">
      <h1 className="titulo">Quiénes somos:</h1>
      <p className="texto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris.
      </p>
      <div className="imagen-container">
        <img src={salon} alt="Sobre Nosotros" className="imagen" />
      </div>
      <h2 className="subtitulo">Nuestro objetivo:</h2>
      <p className="texto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris.
      </p>
    </div>
  );
};

export default SobreNosotros;
