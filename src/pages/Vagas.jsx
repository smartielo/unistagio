import React, { useState } from 'react';
import { Header } from '../components/Header';
import './Vagas.css';

export function Vagas({ vagas, usuario }) {
  const [filtroCurso, setFiltroCurso] = useState('');
  const [filtroLocal, setFiltroLocal] = useState('');
  const [vagaExpandida, setVagaExpandida] = useState(null); // Controla qual card está aberto

  const vagasFiltradas = vagas.filter((vaga) => {
    return (filtroCurso === '' || vaga.curso === filtroCurso) && 
           (filtroLocal === '' || vaga.local === filtroLocal);
  });

  const toggleDetalhes = (id) => {
    setVagaExpandida(vagaExpandida === id ? null : id); // Abre ou fecha
  };

  return (
    <div className="vagas-page">
      <Header usuario={usuario} />
      
      <main className="vagas-container">
        {/* ... (os filtros continuam os mesmos) ... */}
        
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
                
                {/* Expandindo os detalhes */}
                {vagaExpandida === vaga.id && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #eee', fontSize: '0.9rem', color: '#444' }}>
                    <p style={{ marginBottom: '1rem' }}><strong>Descrição:</strong><br/>{vaga.descricao}</p>
                    <a href={vaga.link} target="_blank" rel="noreferrer" style={{ background: '#333', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', textDecoration: 'none', display: 'inline-block', fontWeight: 'bold' }}>
                      🔗 Link de Inscrição
                    </a>
                  </div>
                )}

                <button className="candidatar-btn" onClick={() => toggleDetalhes(vaga.id)} style={{ marginTop: '1rem' }}>
                  {vagaExpandida === vaga.id ? 'Ocultar Detalhes' : 'Ver Detalhes'}
                </button>
              </div>
            ))
          ) : (
            <p className="vagas-empty">Nenhuma vaga encontrada.</p>
          )}
        </div>
      </main>
    </div>
  );
}