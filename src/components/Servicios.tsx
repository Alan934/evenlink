import React from "react";
import "../styles/Servicios.css";
import salon1 from "../assets/salon1.jpg";
import salon2 from "../assets/salon2.jfif";
import mesas from "../assets/mesas.jfif";
import sillas from "../assets/sillas.jpg";

const Servicios: React.FC = () => {
  return (
    <div className="servicios">
      <h1 className="titulo">Servicios</h1>

      <div className="servicio">
        <h2 className="subtitulo">Salón Multi-Propósito:</h2>
        <img src={salon1} alt="Logo, Salón 1" className="imagen" />
        <p className="texto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </div>

      <div className="servicio">
        <h2 className="subtitulo">Salón de Eventos Infantiles:</h2>
        <img src={salon2} alt="Salón 2" className="imagen" />
        <p className="texto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </div>

      <div className="servicio">
        <h2 className="subtitulo">Mesas:</h2>
        <img src={mesas} alt="Mesas" className="imagen" />
        <p className="texto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </div>

      <div className="servicio">
        <h2 className="subtitulo">Sillas:</h2>
        <img src={sillas} alt="Sillas" className="imagen" />
        <p className="texto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </div>
    </div>
  );
};

export default Servicios;
