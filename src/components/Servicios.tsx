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
          Contamos con un salón versátil y adaptable a eventos de diferentes tamaños y tipos. Con una experiencia de 35 años ofreciendo espacios para reuniones, este salón es ideal para eventos que requieren capacidad y flexibilidad, permitiendo organizar desde reuniones corporativas hasta celebraciones familiares.
        </p>
      </div>

      <div className="servicio">
        <h2 className="subtitulo">Salón de Eventos Infantiles:</h2>
        <img src={salon2} alt="Salón 2" className="imagen" />
        <p className="texto">
          Nuestro salón especializado en eventos infantiles lleva más de 15 años creando experiencias memorables para los más pequeños. Este espacio está diseñado exclusivamente para celebraciones infantiles, con decoraciones y configuraciones que priorizan la seguridad y la diversión.
        </p>
      </div>

      <div className="servicio">
        <h2 className="subtitulo">Mesas:</h2>
        <img src={mesas} alt="Mesas" className="imagen" />
        <p className="texto">
          Ofrecemos una amplia gama de mesas de alta calidad en diferentes tamaños y estilos, ideales para todo tipo de eventos. Nuestro equipo se encarga de adaptarlas y prepararlas según las necesidades específicas de cada evento, asegurando comodidad y estética.
        </p>
      </div>

      <div className="servicio">
        <h2 className="subtitulo">Sillas:</h2>
        <img src={sillas} alt="Sillas" className="imagen" />
        <p className="texto">
          Disponemos de una variedad de sillas cómodas y elegantes que se ajustan a cualquier tipo de evento. Desde sillas para banquetes formales hasta opciones más casuales para eventos al aire libre, nuestro inventario garantiza calidad y estilo para complementar la decoración de cada celebración.
        </p>
      </div>
    </div>
  );
};

export default Servicios;
