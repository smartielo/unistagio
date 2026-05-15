import React from 'react';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import './PainelEstudante.css';

export function PainelEstudante({ usuario, onLogout }) {
  return (
    <div className="dashboard-page">
      <Header usuario={usuario} onLogout={onLogout} />
      
      <main className="dashboard-container">
        <header className="welcome-section">
          <h1>Bem-vindo, {usuario?.nome ? usuario.nome : 'Estudante'}! 👋</h1>
          <p>Curso: <strong>{usuario?.curso || 'Não informado'}</strong> | RA: 1234567</p>
        </header>

        <div className="dashboard-grid">
          {/* Card de Progresso de Perfil */}
          <div className="dash-card profile-status">
            <h3>Seu Perfil Profissional</h3>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '75%' }}></div>
            </div>
            <p>75% concluído. Complete seu currículo para se destacar para as empresas parceiras!</p>
            <button className="secondary-btn">Editar Perfil</button>
          </div>

          {/* NOVO Card: Recomendação de Vagas (Substitui as candidaturas internas) */}
          <div className="dash-card activities">
            <h3>Vagas Recomendadas</h3>
            <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.9rem' }}>
              Baseado no seu curso de {usuario?.curso || 'Ciência da Computação'}, separamos estas oportunidades:
            </p>
            <ul>
              <li>🔥 <strong>Estágio em Frontend</strong> - Tech Solutions</li>
              <li>🔥 <strong>Desenvolvedor Junior</strong> - Inova Sistemas</li>
            </ul>
            <Link to="/vagas" className="primary-link">Ver todas as vagas abertas</Link>
          </div>
        </div>
      </main>
    </div>
  );
}