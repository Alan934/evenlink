import React from 'react';
import '../styles/BurbujaWhatsApp.css';

const FloatingBubble = () => {
  const whatsappNumber = '542615406465';

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div onClick={handleClick} className="floating-bubble">
      💬
    </div>
  );
};

export default FloatingBubble;
