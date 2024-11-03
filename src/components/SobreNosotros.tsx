import React from "react";
import "../styles/SobreNosotros.css";
import salon from "../assets/salon.jpg";

const SobreNosotros: React.FC = () => {
  return (
    <div className="sobre-nosotros">
      <h1 className="titulo">Quiénes somos:</h1>
      <p className="texto">
        Somos "Palermo", una empresa familiar ubicada en Rodeo del Medio, Maipú, con más de 58 años de trayectoria en el alquiler de salones para eventos y banquetes. Nos especializamos en ofrecer espacios para todo tipo de celebraciones, incluyendo eventos infantiles y grandes reuniones. Nos distinguimos por nuestro compromiso con la calidad y la personalización de nuestros servicios, y nuestro objetivo es seguir siendo la opción preferida en la región, expandiéndonos hacia nuevas áreas para satisfacer la creciente demanda.
      </p>
      <div className="imagen-container">
        <img src={salon} alt="Sobre Nosotros" className="imagen" />
      </div>
      <h2 className="subtitulo">Nuestro objetivo:</h2>
      <p className="texto">
        Buscamos proporcionar una experiencia sencilla y eficiente para nuestros clientes, permitiéndoles acceder fácilmente a información sobre disponibilidad, precios y servicios adicionales. Nuestro enfoque es asegurar que cada evento se desarrolle sin inconvenientes y con la mejor planificación posible, beneficiando tanto a nuestros clientes como al equipo de "Palermo".
      </p>
    </div>
  );
};

export default SobreNosotros;
