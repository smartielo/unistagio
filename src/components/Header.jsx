import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo_unisagrado.png'; 

export function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redireciona o usuário de volta para a tela de login
    navigate('/login');
  };

  return (
    <header className="main-header">
      <div className="header-brand">
        <img src={logo} alt="Logo UNISAGRADO" className="header-logo" />
        <span className="header-title">Unistágio</span>
      </div>
      
      <nav className="header-nav">
        {/* O Link substitui a tag <a> clássica para não recarregar a página */}
        <Link to="/vagas" className="nav-link">Vagas e Estágios</Link>
        <Link to="/admin" className="nav-link">Painel Admin</Link>
        <Link to="/dicas" className="nav-link">Dicas de Carreira</Link>
      </nav>

      <div className="header-actions">
        <div className="user-profile">
          <span className="user-name">Olá, Estudante</span>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Sair
        </button>
      </div>
    </header>
  );
}