import React from "react";
import "../styles/VentanaAsistente.css";

interface VentanaAsistenteProps {
  mensaje: string;
}

const VentanaAsistente: React.FC<VentanaAsistenteProps> = ({ mensaje }) => {
  return (
    <>
      <h4 className="titulo-asistente">Asistente Virtual</h4>
      <div className="ventana-asistente">
        <h5>
          Buenas tardes ¿En qué puedo ayudarle? ¿Le gustaría realizar una
          reserva o consultar precios y horarios?
        </h5>
        {/*<p>{mensaje}</p>*/}
      </div>
    </>
  );
};

export default VentanaAsistente;
