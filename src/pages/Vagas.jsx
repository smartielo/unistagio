import React, { useState } from 'react';
import { Header } from '../components/Header';
import './Vagas.css';
import { useEffect } from 'react';

export function Vagas({ vagas, usuario, onLogout }) {

  useEffect(() => {
          document.title = 'Vagas | UniStágio';
        }, []);

  const [buscaTexto, setBuscaTexto] = useState(''); // Novo estado para a barra de pesquisa
  const [filtroCurso, setFiltroCurso] = useState('');
  const [filtroLocal, setFiltroLocal] = useState('');
  const [vagaExpandida, setVagaExpandida] = useState(null);

  // Lógica de filtragem aprimorada (Texto + Curso + Local)
  const vagasFiltradas = vagas.filter((vaga) => {
    // Verifica se o texto digitado existe no título OU na empresa (ignorando maiúsculas/minúsculas)
    const matchTexto = vaga.titulo.toLowerCase().includes(buscaTexto.toLowerCase()) || 
                       vaga.empresa.toLowerCase().includes(buscaTexto.toLowerCase());
    
    const matchCurso = filtroCurso === '' || vaga.curso === filtroCurso;
    const matchLocal = filtroLocal === '' || vaga.local === filtroLocal;

    return matchTexto && matchCurso && matchLocal;
  });

  const toggleDetalhes = (id) => {
    setVagaExpandida(vagaExpandida === id ? null : id);
  };

  return (
    <div className="vagas-page">
      <Header usuario={usuario} onLogout={onLogout} />
      
      <main className="vagas-container">
        
        {/* ==========================================
            PAINEL DE BUSCA E FILTROS
            ========================================== */}
        <section className="filtros-section">
          
          {/* Barra de Busca por Nome */}
          <div className="filtro-grupo">
            <label>Buscar Vaga</label>
            <input 
              type="text" 
              placeholder="Ex: Desenvolvedor, RH, Nutrição..." 
              value={buscaTexto}
              onChange={(e) => setBuscaTexto(e.target.value)}
              className="filtro-input"
            />
          </div>

          {/* Filtro por Curso */}
          <div className="filtro-grupo">
            <label>Curso Alvo</label>
            <select value={filtroCurso} onChange={(e) => setFiltroCurso(e.target.value)} className="filtro-select">
              <option value="">Todos os Cursos</option>
              <option value="Ciência da Computação">Ciência da Computação</option>
              <option value="Engenharia da Computação">Engenharia da Computação</option>
              <option value="Engenharia Civil">Engenharia Civil</option>
              <option value="Nutrição">Nutrição</option>
              <option value="Odontologia">Odontologia</option>
              <option value="Pedagogia">Pedagogia</option>
              <option value="Psicologia">Psicologia</option>
            </select>
          </div>

          {/* Filtro por Localidade */}
          <div className="filtro-grupo">
            <label>Localidade</label>
            <select value={filtroLocal} onChange={(e) => setFiltroLocal(e.target.value)} className="filtro-select">
              <option value="">Todas as Localidades</option>
              <option value="Bauru - SP">Bauru - SP</option>
              <option value="Remoto">Remoto</option>
              <option value="Híbrido">Híbrido</option>
            </select>
          </div>

        </section>
        
        {/* ==========================================
            MURAL DE VAGAS (CARDS)
            ========================================== */}
        <div className="vagas-grid">
          {vagasFiltradas.length > 0 ? (
            vagasFiltradas.map((vaga) => (
              <div key={vaga.id} className="vaga-card">
                <h3>{vaga.titulo}</h3>
                <h4 className="vaga-empresa">{vaga.empresa}</h4>
                
                <div className="vaga-tags">
                  <span className="tag curso">{vaga.curso}</span>
                  <span className="tag local">{vaga.local}</span>
                </div>
                
                <p className="vaga-bolsa">Bolsa: <strong>{vaga.bolsa}</strong></p>
                
                {vagaExpandida === vaga.id && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee', fontSize: '0.9rem', color: '#444' }}>
                    <p style={{ marginBottom: '1rem' }}><strong>Descrição:</strong><br/>{vaga.descricao}</p>
                    <a href={vaga.link} target="_blank" rel="noreferrer" style={{ background: '#ED1C24', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', display: 'inline-block', fontWeight: 'bold' }}>
                      🔗 Candidatar-se
                    </a>
                  </div>
                )}

                <button className="candidatar-btn" onClick={() => toggleDetalhes(vaga.id)} style={{ marginTop: '1rem' }}>
                  {vagaExpandida === vaga.id ? 'Ocultar Detalhes' : 'Ver Detalhes'}
                </button>
              </div>
            ))
          ) : (
            <div className="vagas-empty">
              <p>Nenhuma vaga encontrada para esses filtros.</p>
              <button onClick={() => {setBuscaTexto(''); setFiltroCurso(''); setFiltroLocal('');}} style={{marginTop: '10px', padding: '8px 16px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '4px', background: '#fff'}}>Limpar Filtros</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}