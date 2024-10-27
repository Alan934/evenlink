import React from "react";

const CajaUsuario: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        placeholder="Escribe tu mensaje aquí..."
        style={{
          padding: "8px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ffe26e",
          width: "35%",
        }}
      />
    </div>
  );
};

export default CajaUsuario;
