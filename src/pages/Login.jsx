import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logo_unisagrado.png'; 

export function Login() {
    const navigate = useNavigate(); 

  // 3. Crie a função que simula o login
  const handleLogin = (e) => {
    e.preventDefault(); // Evita que a página recarregue
    navigate('/vagas'); // Leva o usuário para a tela de vagas
  };

  return (
    <div className="login-container">
      {/* Lado Esquerdo - Branding */}
      <div className="login-banner">
        <img src={logo} alt="UNISAGRADO" className="login-logo" />
        <h1>Unistágio</h1>
        <p>Conectando talentos acadêmicos ao mercado de trabalho.</p>
      </div>

      {/* Lado Direito - Formulário */}
      <div className="login-form-section">
        <div className="login-box">
          <h2>Acesse sua conta</h2>
          <p className="login-subtitle">Utilize seus dados do Portal do Aluno</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="cpf">CPF (sem pontos ou traços)</label>
              <input 
                type="text" 
                id="cpf" 
                placeholder="Ex: 12345678900" 
                maxLength="11"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Mesma senha do Portal" 
              />
            </div>

            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>

          <div className="login-footer">
            <a href="#" className="forgot-password">Esqueceu sua senha?</a>
          </div>
        </div>
      </div>
    </div>
  );
}