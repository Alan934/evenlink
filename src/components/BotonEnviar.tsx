import React from "react";
import "../styles/BotonEnviar.css";

const BotonEnviar: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button className="boton">Enviar Vía WhatsApp</button>
    </div>
  );
};

export default BotonEnviar;
