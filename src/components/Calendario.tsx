import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Importa los estilos predeterminados de react-calendar
import "../styles/Calendario.css";

const Calendario: React.FC = () => {
  return (
    <div className="calendario-container">
      <h1 className="titulo">Calendario</h1>
      <Calendar className="calendario" />
      <p className="descripcion">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet.
      </p>
    </div>
  );
};

export default Calendario;
