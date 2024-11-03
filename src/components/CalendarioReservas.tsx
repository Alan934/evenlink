import React from 'react';
import '../styles/CalendarioReservas.css';

const CalendarComponent: React.FC = () => {
  return (
    <div className="calendar-container">
      <h2 className="titulo">Calendario de Reservas</h2>
      <div className="calendar-wrapper">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=400&wkst=1&ctz=America%2FArgentina%2FMendoza&mode=MONTH&showTabs=0&showTitle=0&showPrint=0&src=ZTllNmRmMzdiYmVkNWRiNzgxZjZiMWE3MDJkNDRmZmZmYWVkYjAwNjNmODU5ZGQ2YWU2NDA1OTQyODUxN2NkMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4"
          className="calendar-iframe"
          style={{ border: 0 }}
          title="Google Calendar"
          allowFullScreen
        ></iframe>
      </div>
      <p className="descripcion">
        Este es el calendario de reservas, donde puedes ver los dias disponibles para tus eventos.
      </p>
    </div>
  );
};

export default CalendarComponent;
