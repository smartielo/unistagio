import React, { useState } from 'react';
import { Header } from '../components/Header';
import './Admin.css';

export function Admin({ vagas, setVagas }) {
  const [novaVaga, setNovaVaga] = useState({
    titulo: '', empresa: '', curso: 'Ciência da Computação', local: 'Bauru - SP', bolsa: ''
  });
  const [moeda, setMoeda] = useState('R$');

  // Função para criar a máscara de dinheiro em tempo real
  const formatarMoeda = (valor) => {
    // Remove tudo que não for número
    const apenasNumeros = valor.replace(/\D/g, '');
    if (!apenasNumeros) return '';
    
    // Divide por 100 para criar as casas decimais e formata
    const valorFormatado = (parseInt(apenasNumeros) / 100).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return valorFormatado;
  };

  const handleChangeBolsa = (e) => {
    setNovaVaga({ ...novaVaga, bolsa: formatarMoeda(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const novoId = vagas.length > 0 ? Math.max(...vagas.map(v => v.id)) + 1 : 1;
    
    // Na hora de salvar, junta a Moeda selecionada com o Valor formatado
    const vagaFinal = {
      ...novaVaga,
      id: novoId,
      bolsa: `${moeda} ${novaVaga.bolsa}`
    };
    
    setVagas([...vagas, vagaFinal]);
    alert('Vaga publicada com sucesso!');
    
    // Limpa o formulário e reseta a moeda
    setNovaVaga({ titulo: '', empresa: '', curso: 'Ciência da Computação', local: 'Bauru - SP', bolsa: '' });
    setMoeda('R$');
  };

  return (
    <div className="admin-page">
      <Header />
      <main className="admin-container">
        <div className="admin-header">
          <h1>Painel Administrativo</h1>
          <p>Cadastre novas oportunidades no portal.</p>
        </div>

        <div className="admin-form-card">
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="input-group">
              <label>Título da Vaga</label>
              <input type="text" required value={novaVaga.titulo} onChange={e => setNovaVaga({...novaVaga, titulo: e.target.value})} placeholder="Ex: Desenvolvedor Mobile" />
            </div>

            <div className="input-group">
              <label>Empresa</label>
              <input type="text" required value={novaVaga.empresa} onChange={e => setNovaVaga({...novaVaga, empresa: e.target.value})} placeholder="Ex: Google" />
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Curso Alvo</label>
                <select value={novaVaga.curso} onChange={e => setNovaVaga({...novaVaga, curso: e.target.value})}>
                  <option value="Ciência da Computação">Ciência da Computação</option>
                  <option value="Engenharia da Computação">Engenharia da Computação</option>
                  <option value="Design">Design</option>
                </select>
              </div>

              <div className="input-group">
                <label>Localidade</label>
                <select value={novaVaga.local} onChange={e => setNovaVaga({...novaVaga, local: e.target.value})}>
                  <option value="Bauru - SP">Bauru - SP</option>
                  <option value="Remoto">Remoto</option>
                  <option value="Híbrido">Híbrido</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>Valor da Bolsa</label>
              {/* input de moeda fundido com o select */}
              <div className="currency-input-wrapper">
                <select 
                  className="currency-select" 
                  value={moeda} 
                  onChange={(e) => setMoeda(e.target.value)}
                >
                  <option value="R$">BRL (R$)</option>
                  <option value="US$">USD (US$)</option>
                  <option value="€">EUR (€)</option>
                </select>
                <input 
                  type="text" 
                  required 
                  value={novaVaga.bolsa} 
                  onChange={handleChangeBolsa} 
                  placeholder="0,00" 
                  className="currency-input"
                />
              </div>
            </div>

            <button type="submit" className="btn-publicar">Publicar Vaga</button>
          </form>
        </div>
      </main>
    </div>
  );
}