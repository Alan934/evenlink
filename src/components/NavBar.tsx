import React, { useContext, useState } from "react";
import { GlobalContext } from "../App";
import "../styles/NavBar.css";
import logo from "../assets/logo.png";

const NavBar: React.FC = () => {
  const globalContext = useContext(GlobalContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!globalContext) {
    return null;
  }

  const { setMensajeGlobal } = globalContext;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavItemClick = (mensaje: string) => {
    setIsMenuOpen(false);

    if (mensaje === "contacto") {
      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setMensajeGlobal(mensaje);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" style={{ width: "60px", height: "auto" }} />
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
        <div onClick={() => handleNavItemClick("inicio")} className="nav-item">
          Inicio
        </div>
        <div onClick={() => handleNavItemClick("servicios")} className="nav-item">
          Servicios
        </div>
        <div onClick={() => handleNavItemClick("calendario")} className="nav-item">
          Calendario
        </div>
        <div onClick={() => handleNavItemClick("mapa")} className="nav-item">
          Mapa
        </div>
        <div onClick={() => handleNavItemClick("contacto")} className="nav-item">
          Contacto
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
