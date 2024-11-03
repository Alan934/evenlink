import React from "react";
import "../styles/PieDePagina.css";

const PieDePagina: React.FC = () => {
  const whatsappNumber = '542615406465';
  const mensaje = 'Hola, me comunico con usted por una consulta';

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
  const email = "gabilex295@gmail.com";

  return (
    <footer className="pie-de-pagina" id="contacto">
      <div className="contacto">
        <p>Contacto:</p>
        <p>
          Email: <a href={`mailto:${email}`} className="contact-link">{email}</a>
        </p>
        <p>
          Teléfono:{" "}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-link">
            +54 261 540-6465
          </a>
        </p>
      </div>
      <div className="empresa-info">
        <p>Empresa Palermo</p>
        <p>CUIT/CUIL: 20-12345678-9</p>
      </div>
    </footer>
  );
};

export default PieDePagina;
