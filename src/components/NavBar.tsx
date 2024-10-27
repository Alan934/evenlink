import React, { useState } from "react";
import "../styles/NavBar.css";
import logo from "../assets/logo.png"; // Importa tu logo

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" style={{ width: '60px', height: 'auto' }} />
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-item">Calendario</div>
        <div className="nav-item">Salones</div>
        <div className="nav-item">Banquetes</div>
        <div className="nav-item">Contacto</div>
      </div>
    </nav>
  );
};

export default NavBar;
