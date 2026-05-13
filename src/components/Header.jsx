import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo_unisagrado.png';

export function Header({ usuario, onLogout }) {
  const navigate = useNavigate();

  const executarSair = () => {
    if(onLogout) onLogout(); // Limpa o usuário no App.jsx
    navigate('/login');
  };

  return (
    <header className="main-header">
      <div className="header-brand">
        <img src={logo} alt="Logo UNISAGRADO" className="header-logo" />
        <span className="header-title">Unistágio</span>
      </div>
      
      <nav className="header-nav">
        <Link to="/vagas" className="nav-link">Vagas e Estágios</Link>
        <Link to="/dicas" className="nav-link">Dicas de Carreira</Link>
        {/* Só mostra o menu Admin se o usuário for do tipo 'admin' */}
        {usuario?.tipo === 'admin' && (
          <Link to="/admin" className="nav-link" style={{ color: '#ED1C24' }}>Painel Admin</Link>
        )}
      </nav>

      <div className="header-actions">
        <span className="user-name">
          {usuario?.tipo === 'admin' ? 'Olá, RH' : 'Olá, Estudante'}
        </span>
        <button onClick={executarSair} className="logout-button">Sair</button>
      </div>
    </header>
  );
}