import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Vagas } from './pages/Vagas';
import { Admin } from './pages/Admin';
import { Dicas } from './pages/Dicas';
import { PainelEstudante } from '../src/pages/PainelEstudante';

const vagasIniciais = [
  { id: 1, titulo: "Estágio em Desenvolvimento Front-end", empresa: "Tech Solutions", curso: "Ciência da Computação", local: "Remoto", bolsa: "R$ 1.500,00" },
  { id: 2, titulo: "Estágio em Sistemas Embarcados", empresa: "Indústria Inova", curso: "Engenharia da Computação", local: "Bauru - SP", bolsa: "R$ 1.800,00" },
  { id: 3, titulo: "Estagiário de UI/UX", empresa: "Agência Criativa", curso: "Design", local: "Bauru - SP", bolsa: "R$ 1.200,00" },
];

function App() {
  
  const [vagas, setVagas] = useState(vagasIniciais);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Passamos as vagas para a tela de visualização */}
        <Route path="/vagas" element={<Vagas vagas={vagas} />} />
        {/* Passamos as vagas E a função de adicionar para o Admin */}
        <Route path="/admin" element={<Admin vagas={vagas} setVagas={setVagas} />} />
        <Route path="/dicas" element={<Dicas />} />
        <Route path="/estudante" element={<PainelEstudante />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;