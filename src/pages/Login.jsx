import React, { useState } from 'react'; // Adicionado o { useState }
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logo_unisagrado.png'; 

export function Login({ setUsuario }) {
  const navigate = useNavigate();
  const [tipoAcesso, setTipoAcesso] = useState('aluno');

  const handleLogin = (e) => {
    e.preventDefault();
    setUsuario({ tipo: tipoAcesso });
    
    if (tipoAcesso === 'admin') navigate('/admin');
    else navigate('/vagas');
  };

  return (
    <div className="login-container">
      <div className="login-banner">
        <img src={logo} alt="UNISAGRADO" className="login-logo" />
        <h1>Unistágio</h1>
        <p>Conectando talentos acadêmicos ao mercado de trabalho.</p>
      </div>

      <div className="login-form-section">
        <div className="login-box">
          <h2>Acesse sua conta</h2>
          <p className="login-subtitle">Utilize seus dados do Portal do Aluno</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Tipo de Acesso</label>
              <select 
                value={tipoAcesso} 
                onChange={(e) => setTipoAcesso(e.target.value)} 
                style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '1rem', width: '100%' }}
              >
                <option value="aluno">Portal do Aluno</option>
                <option value="admin">Portal do RH (Administrador)</option>
              </select>
            </div>

            {/* Campo de CPF adicionado novamente */}
            <div className="input-group">
              <label htmlFor="cpf">CPF</label>
              <input 
                type="text" 
                id="cpf" 
                placeholder="Ex: 12345678900" 
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Mesma senha do Portal" 
                required
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