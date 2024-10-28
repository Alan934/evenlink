import React, { useState } from "react";
import "../styles/VentanaAsistente.css";

const VirtualAssistant: React.FC = () => {
  const [bookingDate, setBookingDate] = useState("");
  const [chairs, setChairs] = useState(0);
  const [tables, setTables] = useState(0);
  const [message, setMessage] = useState("");
  const [orderSummary, setOrderSummary] = useState<{
    chairsSummary: string;
    tablesSummary: string;
    totalCostSummary: string;
  } | null>(null);
  const [showReservation, setShowReservation] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [hours, setHours] = useState(1);
  const [startHour, setStartHour] = useState(12);
  const [startMinute, setStartMinute] = useState(0);
  const [endHour, setEndHour] = useState(13);
  const [endMinute, setEndMinute] = useState(0);
  const HOURLY_RATE = 100;

  const CHAIR_PRICE = 10;
  const TABLE_PRICE = 20;

  const [whatsappLink, setWhatsappLink] = useState("");

  const generateWhatsAppMessage = () => {
    let details = "";
    const whatsappNumber = "542615406465";
  
    // Añadir la fecha de reserva al mensaje
    const formattedBookingDate = bookingDate
      ? `Reserva para el ${bookingDate} de ${startHour}:${startMinute.toString().padStart(2, "0")} a ${endHour}:${endMinute.toString().padStart(2, "0")}`
      : "Fecha no seleccionada";
  
    if (orderSummary) {
      details = `${formattedBookingDate}\n${orderSummary.chairsSummary}\n${orderSummary.tablesSummary}\n${orderSummary.totalCostSummary}`;
    } else {
      details = `${formattedBookingDate}\nCosto total por horas: ${hours} x $${HOURLY_RATE} = $${hours * HOURLY_RATE}`;
    }
  
    // Solo incluye la invitación si se está generando el mensaje sin orderSummary
    details += `\n\nPor favor, elija una fecha para su reserva.`;
  
    return `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(details)}`;
  };
  

  const handleLoadOrder = () => {
    const totalChairsCost = chairs * CHAIR_PRICE;
    const totalTablesCost = tables * TABLE_PRICE;
    const totalCost = totalChairsCost + totalTablesCost;

    setOrderSummary({
      chairsSummary: `Total de sillas: ${chairs} x $${CHAIR_PRICE} = $${totalChairsCost}`,
      tablesSummary: `Total de mesas: ${tables} x $${TABLE_PRICE} = $${totalTablesCost}`,
      totalCostSummary: `Costo total: $${totalCost}`,
    });

    setMessage("Se cargó el banquete con éxito. Ahora puede realizar la reserva.");
  };

  const handleBooking = async () => {
    if (!bookingDate) {
      setMessage("Por favor, selecciona una fecha.");
      return;
    }

    const today = new Date();
    const selectedDate = new Date(bookingDate);
    if (selectedDate <= today) {
      setMessage("Error: La fecha de la reserva debe ser posterior al día de hoy.");
      return;
    }

    const startTime = startHour + startMinute / 60;
    const endTime = endHour + endMinute / 60;
    const duration = endTime - startTime;

    if (duration !== hours) {
      setMessage("Error: La cantidad de horas debe coincidir con el rango de horas seleccionadas.");
      return;
    }

    if (startTime >= endTime) {
      setMessage("Error: La hora de inicio debe ser menor que la hora de fin.");
      return;
    }

    if (endHour === 22 && endMinute !== 0) {
      setMessage("Error: La hora de 'Hasta' no puede tener minutos si es 22:00.");
      return;
    }

    const totalChairsCost = chairs * CHAIR_PRICE;
    const totalTablesCost = tables * TABLE_PRICE;
    const totalHoursCost = hours * HOURLY_RATE;

    if (chairs === 0 && tables === 0) {
      const totalReservationCost = totalHoursCost;
      setMessage(`Reserva confirmada para el ${bookingDate} de ${startHour}:${startMinute.toString().padStart(2, "0")} a ${endHour}:${endMinute.toString().padStart(2, "0")} horas.\n\nCosto total de la reserva por horas: ${hours} x $${HOURLY_RATE} = $${totalHoursCost}\nCosto total de la reserva: $${totalReservationCost}`);
    } else {
      const totalCost = totalChairsCost + totalTablesCost + totalHoursCost;
      setOrderSummary({
        chairsSummary: `Total de sillas: ${chairs} x $${CHAIR_PRICE} = $${totalChairsCost}`,
        tablesSummary: `Total de mesas: ${tables} x $${TABLE_PRICE} = $${totalTablesCost}`,
        totalCostSummary: `Costo total: $${totalCost}`,
      });

      setMessage(`Reserva confirmada para el ${bookingDate} de ${startHour}:${startMinute.toString().padStart(2, "0")} a ${endHour}:${endMinute.toString().padStart(2, "0")} horas.\n\n${orderSummary?.chairsSummary}\n${orderSummary?.tablesSummary}\nCosto total de la reserva por horas: ${hours} x $${HOURLY_RATE} = $${totalHoursCost}\nCosto total de la reserva: $${totalCost}`);

      // Generar el enlace de WhatsApp solo después de confirmar la reserva
      setWhatsappLink(generateWhatsAppMessage());
    }
  };

  return (
    <>
      <h4 className="titulo-asistente">Asistente Virtual</h4>
      <div className="ventana-asistente">
        <h5>Buenas tardes, ¿en qué puedo ayudarle?</h5>
        <div className="button-container">
          <button
            className="asistente-button"
            onClick={() => {
              setShowReservation(true);
              setShowPricing(false);
            }}
          >
            Realizar Reserva
          </button>
          <button
            className="asistente-button"
            onClick={() => {
              setShowPricing(true);
              setShowReservation(false);
            }}
          >
            Precios y Horarios
          </button>
        </div>

        {showPricing && (
          <div className="pricing-section">
            <h4>Consulta de precios y horarios</h4>
            <div className="input-group">
              <h4>Pedido de Sillas</h4>
              <input
                type="number"
                value={chairs}
                onChange={(e) => setChairs(Number(e.target.value))}
                placeholder="Cantidad de sillas"
                className="input-number"
              />
              <ul className="price-list">
                <li>Precio por silla: $10</li>
              </ul>
            </div>
            <div className="input-group">
              <h4>Pedido de Mesas</h4>
              <input
                type="number"
                value={tables}
                onChange={(e) => setTables(Number(e.target.value))}
                placeholder="Cantidad de mesas"
                className="input-number"
              />
              <ul className="price-list">
                <li>Precio por mesa: $20</li>
              </ul>
            </div>
            <button onClick={handleLoadOrder} className="asistente-button">
              Cargar Pedido
            </button>
            {orderSummary && (
              <div className="order-summary">
                <p>{orderSummary.chairsSummary}</p>
                <p>{orderSummary.tablesSummary}</p>
                <p>{orderSummary.totalCostSummary}</p>
              </div>
            )}
          </div>
        )}

        {showReservation && (
          <div className="reservation-section">
            <h4>Seleccione la fecha para su reserva</h4>
            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="input-date"
            />
            <h4>Seleccionar horario</h4>
            {/* Código existente para seleccionar horario */}
            
            <button onClick={handleBooking} className="asistente-button">
              Confirmar Alquiler
            </button>

            {message && (
              <>
                <p>{message}</p>
                {/* Botón para enviar vía WhatsApp solo después de confirmar */}
                {whatsappLink && (
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <button className="asistente-button">Enviar vía WhatsApp</button>
                  </a>
                )}
              </>
            )}
          </div>
        )}

        {message && (
          <p>{message.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}</p>
        )}
      </div>
    </>
  );
};

export default VirtualAssistant;
