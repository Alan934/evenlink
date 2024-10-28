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

  const handleShowReservation = () => {
    setShowReservation(true);
    setShowPricing(false);
    setMessage("");
  };

  const handleShowPricing = () => {
    setShowPricing(true);
    setShowReservation(false);
    setMessage("");
  };

  const generateWhatsAppMessage = () => {
    let details = "";
    const whatsappNumber = "542615406465";

    const formattedBookingDate = bookingDate
      ? `Reserva para el ${bookingDate} a las ${startHour}:${startMinute.toString().padStart(2, "0")} hasta ${endHour}:${endMinute.toString().padStart(2, "0")}`
      : "Fecha no seleccionada";

    if (orderSummary) {
      details = `${formattedBookingDate}\n${orderSummary.chairsSummary}\n${orderSummary.tablesSummary}\n${orderSummary.totalCostSummary}`;
    } else {
      details = `${formattedBookingDate}\nCosto total por horas: ${hours} x $${HOURLY_RATE} = $${hours * HOURLY_RATE}`;
    }

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

    const startTime = startHour + startMinute / 60;
    const endTime = endHour + endMinute / 60;

    const duration = endTime - startTime;

    if (duration <= 0) {
        setMessage("Error: La hora de inicio debe ser menor que la hora de fin.");
        return;
    }

    const selectedHours = Math.floor(duration);

    setHours(selectedHours);

    const totalChairsCost = chairs * CHAIR_PRICE;
    const totalTablesCost = tables * TABLE_PRICE;
    const totalHoursCost = hours * HOURLY_RATE;
    const totalCost = totalChairsCost + totalTablesCost + totalHoursCost;

    const orderSummary = {
        chairsSummary: `Total de sillas: ${chairs} x $${CHAIR_PRICE} = $${totalChairsCost}`,
        tablesSummary: `Total de mesas: ${tables} x $${TABLE_PRICE} = $${totalTablesCost}`,
        totalCostSummary: `Costo total: $${totalCost}`,
    };

    setMessage(`Reserva confirmada para el ${bookingDate} de ${startHour}:${startMinute.toString().padStart(2, "0")} a ${endHour}:${endMinute.toString().padStart(2, "0")} horas.\n\n${orderSummary.chairsSummary}\n${orderSummary.tablesSummary}\nCosto total de la reserva por horas: ${hours} x $${HOURLY_RATE} = $${totalHoursCost}\nCosto total de la reserva: $${totalCost}`);

    setWhatsappLink(generateWhatsAppMessage());
};
  

  return (
    <>
      <h4 className="titulo-asistente"></h4>
      <div className="ventana-asistente">
        <h5>Buenas tardes, ¿en qué puedo ayudarle?</h5>
        <div className="button-container" style={{ justifyContent: 'center' }}>
          <button className="asistente-button" onClick={handleShowReservation}>
            Realizar Reserva
          </button>
          <button className="asistente-button" onClick={handleShowPricing}>
            Precios
          </button>
        </div>

        {showPricing && (
          <div className="pricing-section">
            <h4>Consulta de Precios</h4>
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
              <h4>Seleccione la fecha y hora para su reserva</h4>
              <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="input-date"
              />
          
              <div className="time-selection-container">
                  <div className="time-selection">
                      <label htmlFor="startHour">Hora de inicio:</label>
                      <select
                          id="startHour"
                          value={startHour}
                          onChange={(e) => setStartHour(Number(e.target.value))}
                      >
                          {[...Array(24).keys()].map((hour) => (
                              <option key={hour} value={hour}>
                                  {hour.toString().padStart(2, '0')}
                              </option>
                          ))}
                      </select>
                      <select
                          id="startMinute"
                          value={startMinute}
                          onChange={(e) => setStartMinute(Number(e.target.value))}
                      >
                          {[0, 15, 30, 45].map((minute) => (
                              <option key={minute} value={minute}>
                                  {minute.toString().padStart(2, '0')}
                              </option>
                          ))}
                      </select>
                  </div>
          
                  <div className="time-selection">
                      <label htmlFor="endHour">Hora de fin:</label>
                      <select
                          id="endHour"
                          value={endHour}
                          onChange={(e) => setEndHour(Number(e.target.value))}
                      >
                          {[...Array(24).keys()].map((hour) => (
                              <option key={hour} value={hour}>
                                  {hour.toString().padStart(2, '0')}
                              </option>
                          ))}
                      </select>
                      <select
                          id="endMinute"
                          value={endMinute}
                          onChange={(e) => setEndMinute(Number(e.target.value))}
                      >
                          {[0, 15, 30, 45].map((minute) => (
                              <option key={minute} value={minute}>
                                  {minute.toString().padStart(2, '0')}
                              </option>
                          ))}
                      </select>
                  </div>
              </div>
          
              <button onClick={handleBooking} className="asistente-button">
                  Confirmar Alquiler
              </button>
              {message && <p className="message">{message}</p>}
              {whatsappLink && (
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <button className="whatsapp-button">Enviar vía WhatsApp</button>
                  </a>
              )}
          </div>
          
        )}
      </div>
    </>
  );
};

export default VirtualAssistant;
