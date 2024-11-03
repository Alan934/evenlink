import React, { createContext, useState } from "react";
import Encabezado from "./components/Encabezado";
import NavBar from "./components/NavBar";
import VentanaAsistente from "./components/VentanaAsistente";
import SobreNosotros from "./components/SobreNosotros";
import PieDePagina from "./components/PieDePagina";
import Servicios from "./components/Servicios";
import Calendario from "./components/Calendario";
import FloatingBubble from "./components/BurbujaWhatsApp";
import CalendarioReservas from "./components/CalendarioReservas";
import Mapa from "./components/Mapa";

// VARIABLE GLOBAL PARA PANEJO DE PÁGINAS
interface GlobalContextProps {
  mensajeGlobal: string;
  setMensajeGlobal: (mensaje: string) => void;
}
export const GlobalContext = createContext<GlobalContextProps | undefined>(
  undefined
);

function App() {
  const [mensajeGlobal, setMensajeGlobal] = useState("inicio");

  return (
    <GlobalContext.Provider value={{ mensajeGlobal, setMensajeGlobal }}>
      <Encabezado />
      <NavBar />
      {mensajeGlobal === "inicio" && (
        <>
          <VentanaAsistente />
          <SobreNosotros />
        </>
      )}
      {mensajeGlobal === "servicios" && <Servicios />}
      {mensajeGlobal === "calendario" && <CalendarioReservas />}
      {mensajeGlobal === "mapa" && <Mapa />}
      {mensajeGlobal === "contacto" && <div>Contacto</div>}
      <PieDePagina />
      <FloatingBubble />
    </GlobalContext.Provider>
  );
}

export default App;
