import React, { useState } from 'react';
import { Header } from '../components/Header';
import './Vagas.css'; 



export function Vagas({ vagas }) {
  //  Criando os estados para guardar o que o usuário selecionou no filtro
  const [filtroCurso, setFiltroCurso] = useState('');
  const [filtroLocal, setFiltroLocal] = useState('');

  // Lógica de Filtragem: só mostra as vagas que baterem com os filtros
  const vagasFiltradas = vagas.filter((vaga) => {
    const cursoBate = filtroCurso === '' || vaga.curso === filtroCurso;
    const localBate = filtroLocal === '' || vaga.local === filtroLocal;
    return cursoBate && localBate;
  });

  return (
    <div className="vagas-page">
      <Header />
      
      <main className="vagas-container">
        <div className="vagas-header">
          <h1>Oportunidades Disponíveis</h1>
          <p>Encontre o estágio ideal para a sua carreira.</p>
        </div>

        {/* A Barra de Filtros */}
        <div className="filtros-section">
          <div className="filtro-group">
            <label>Filtrar por Curso:</label>
            <select 
              value={filtroCurso} 
              onChange={(e) => setFiltroCurso(e.target.value)}
            >
              <option value="">Todos os Cursos</option>
              <option value="Ciência da Computação">Ciência da Computação</option>
              <option value="Engenharia da Computação">Engenharia da Computação</option>
              <option value="Design">Design</option>
            </select>
          </div>

          <div className="filtro-group">
            <label>Filtrar por Localidade:</label>
            <select 
              value={filtroLocal} 
              onChange={(e) => setFiltroLocal(e.target.value)}
            >
              <option value="">Todas as Localidades</option>
              <option value="Remoto">Remoto</option>
              <option value="Híbrido">Híbrido</option>
              <option value="Bauru - SP">Bauru - SP</option>
            </select>
          </div>
        </div>

        {/* Renderizando os Cards das Vagas Filtradas */}
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
                <button className="candidatar-btn">Ver Detalhes</button>
              </div>
            ))
          ) : (
            <p className="vagas-empty">Nenhuma vaga encontrada para estes filtros.</p>
          )}
        </div>
      </main>
    </div>
  );
}