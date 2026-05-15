import React, { useState } from 'react';
import {useEffect} from 'react';
import { Header } from '../components/Header';
import './Admin.css';

export function Admin({ vagas, setVagas, usuario }) {

  useEffect(() => {
      document.title = 'Painel Admin | UniStágio';
    }, []);

  const [novaVaga, setNovaVaga] = useState({
    id: null, titulo: '', empresa: '', curso: 'Ciência da Computação', local: 'Bauru - SP', bolsa: '', descricao: '', link: ''
  });
  const [moeda, setMoeda] = useState('R$');
  const [modoEdicao, setModoEdicao] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bolsaFormatada = novaVaga.bolsa.includes(moeda) ? novaVaga.bolsa : `${moeda} ${novaVaga.bolsa}`;

    if (modoEdicao) {
      // Atualiza vaga existente
      setVagas(vagas.map(v => v.id === novaVaga.id ? { ...novaVaga, bolsa: bolsaFormatada } : v));
      setModoEdicao(false);
      alert('Vaga atualizada com sucesso!');
    } else {
      // Cria nova vaga
      const novoId = vagas.length > 0 ? Math.max(...vagas.map(v => v.id)) + 1 : 1;
      setVagas([...vagas, { ...novaVaga, id: novoId, bolsa: bolsaFormatada }]);
      alert('Vaga publicada com sucesso!');
    }
    setNovaVaga({ id: null, titulo: '', empresa: '', curso: 'Ciência da Computação', local: 'Bauru - SP', bolsa: '', descricao: '', link: '' });
  };

  const handleExcluir = (id) => {
    if(window.confirm('Tem certeza que deseja excluir esta vaga?')) {
      setVagas(vagas.filter(v => v.id !== id));
    }
  };

  const handleEditar = (vaga) => {
    setNovaVaga(vaga);
    setModoEdicao(true);
    // Tenta extrair a moeda para o select
    if (vaga.bolsa.includes('US$')) setMoeda('US$');
    else if (vaga.bolsa.includes('€')) setMoeda('€');
    else setMoeda('R$');
  };

  return (
    <div className="admin-page">
      <Header usuario={usuario} />
      <main className="admin-container">
        
        {/* Formulário de Cadastro/Edição */}
        <div className="admin-form-card" style={{ marginBottom: '2rem' }}>
          <h2>{modoEdicao ? 'Editar Vaga' : 'Cadastrar Nova Vaga'}</h2><br/>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-row">
              <div className="input-group"><label>Título</label><input type="text" required value={novaVaga.titulo} onChange={e => setNovaVaga({...novaVaga, titulo: e.target.value})} /></div>
              <div className="input-group"><label>Empresa</label><input type="text" required value={novaVaga.empresa} onChange={e => setNovaVaga({...novaVaga, empresa: e.target.value})} /></div>
            </div>
            
            <div className="form-row">
              <div className="input-group"><label>Curso Alvo</label><select value={novaVaga.curso} onChange={e => setNovaVaga({...novaVaga, curso: e.target.value})}><option>Ciência da Computação</option><option>Design</option><option>Engenharia Civil</option><option>Engenharia da Computação</option><option>Nutrição</option><option>Odontologia</option><option>Pedagogia</option><option>Psicologia</option></select></div>
              <div className="input-group"><label>Localidade</label><select value={novaVaga.local} onChange={e => setNovaVaga({...novaVaga, local: e.target.value})}><option>Bauru - SP</option><option>Remoto</option><option>Híbrido</option></select></div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>Valor da Bolsa</label>
                <div className="currency-input-wrapper">
                  <select className="currency-select" value={moeda} onChange={e => setMoeda(e.target.value)}><option value="R$">BRL (R$)</option><option value="US$">USD (US$)</option></select>
                  <input type="text" className="currency-input" required value={novaVaga.bolsa} onChange={e => setNovaVaga({...novaVaga, bolsa: e.target.value})} />
                </div>
              </div>
              <div className="input-group"><label>Link de Inscrição</label><input type="url" required value={novaVaga.link} onChange={e => setNovaVaga({...novaVaga, link: e.target.value})} placeholder="https://..." /></div>
            </div>

            <div className="input-group">
              <label>Descrição e Requisitos</label>
              <textarea required value={novaVaga.descricao} onChange={e => setNovaVaga({...novaVaga, descricao: e.target.value})} style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc', resize: 'vertical', minHeight: '80px' }}></textarea>
            </div>

            <button type="submit" className="btn-publicar">{modoEdicao ? 'Salvar Alterações' : 'Publicar Vaga'}</button>
            {modoEdicao && <button type="button" onClick={() => {setModoEdicao(false); setNovaVaga({id: null, titulo: '', empresa: '', curso: 'Ciência da Computação', local: 'Bauru - SP', bolsa: '', descricao: '', link: ''});}} style={{marginTop: '10px', background: 'transparent', color: '#ED1C24', border: 'none', cursor: 'pointer'}}>Cancelar Edição</button>}
          </form>
        </div>

        {/* Lista de Vagas para Gerenciamento */}
        <h2>Vagas Publicadas</h2>
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {vagas.map(vaga => (
            <div key={vaga.id} style={{ background: 'white', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{vaga.titulo}</strong> - {vaga.empresa}
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                
                {/* Botão de Editar (Estilo Line-Art) */}
                <button 
                  onClick={() => handleEditar(vaga)} 
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0.5rem 1rem', background: '#f8f9fa', color: '#333', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  Editar
                </button>

                {/* Botão de Excluir (Estilo Line-Art Vermelho Unisagrado) */}
                <button 
                  onClick={() => handleExcluir(vaga.id)} 
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0.5rem 1rem', background: '#ffebee', color: '#ED1C24', border: '1px solid #ffcdd2', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                  Excluir
                </button>

              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}