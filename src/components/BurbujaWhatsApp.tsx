import React from 'react';
import '../styles/BurbujaWhatsApp.css';

const FloatingBubble = () => {
  const whatsappNumber = '542615406465';
  const mensaje = 'Hola, me comunico con usted por una consulta';

  const handleClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${mensaje}`, '_blank');
  };

  return (
    <div onClick={handleClick} className="floating-bubble">
      <img 
        src="https://res.cloudinary.com/de9ojxknm/image/upload/v1722532720/Footer/bybzpetuzhkypkmlkwax.svg" 
        alt="WhatsApp Icon" 
        style={{
          width: '60px',
          height: '60px',
        }} 
      />
    </div>
  );
};

export default FloatingBubble;
