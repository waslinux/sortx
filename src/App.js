import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import PolicyScreen from "./screens/PolicyScreen"
import PaginaLotoFacil from "./screens/PaginaLotoFacil";
import PaginaLotoMania from "./screens/PaginaLotoMania";
import PaginaMegaSena from "./screens/PaginaMegaSena";

import "./styles.css"; // CSS global para estilos comuns

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className="app">
        {/* Botão do Menu Hamburger */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Menu de Navegação */}
        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className="menu-item inicio" end onClick={closeMenu}>
            Início
          </NavLink>
          <NavLink
            to="/lotofacil"
            className="menu-item lotofacil"
            onClick={closeMenu}
          >
            LotoFácil
          </NavLink>
          <NavLink
            to="/megasena"
            className="menu-item megasena"
            onClick={closeMenu}
          >
            MegaSena
          </NavLink>
          <NavLink
            to="/lotomania"
            className="menu-item lotomania"
            onClick={closeMenu}
          >
            LotoMania
          </NavLink>
        </nav>

        {/* Overlay para fechar o menu ao clicar fora */}
        {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
      </div>

      {/* Conteúdo */}
      <div className="content">
        <BrowserRouter basename="/"
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/Policy" element={<PolicyScreen />} />
          <Route path="/lotofacil" element={<PaginaLotoFacil />} />
          <Route path="/lotomania" element={<PaginaLotoMania />} />
          <Route path="/megasena" element={<PaginaMegaSena />} />
          {/* Redirecionamento para a rota inicial */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
            </BrowserRouter>
      </div>
    </Router>
  );
};

export default App;


