import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Vagas } from './pages/Vagas';
import { Admin } from './pages/Admin';
import { Dicas } from './pages/Dicas';

const handleLogout = () => {
  setUsuario(null);
};

const vagasIniciais = [
  { id: 1, titulo: "Estágio em Desenvolvimento Front-end", empresa: "Tech Solutions", curso: "Ciência da Computação", local: "Remoto", bolsa: "R$ 1.500,00", descricao: "Atuar no desenvolvimento de interfaces com React e prototipagem.", link: "https://forms.gle/exemplo1" },
  { id: 2, titulo: "Estágio em Sistemas Embarcados", empresa: "Indústria Inova", curso: "Engenharia da Computação", local: "Bauru - SP", bolsa: "R$ 1.800,00", descricao: "Programação de microcontroladores em C/C++.", link: "https://vagas.inova.com" },
];

function App() {
  const [vagas, setVagas] = useState(vagasIniciais);
  const [usuario, setUsuario] = useState(null); // Controla quem está logado: { tipo: 'aluno' | 'admin' }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUsuario={setUsuario} />} />
        
        {/* Protegendo as rotas: Só acessa se estiver logado */}
        <Route path="/vagas" element={usuario ? <Vagas vagas={vagas} usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />} />

        <Route path="/dicas" element={usuario ? <Dicas usuario={usuario} /> : <Navigate to="/login" />} />
        
        {/* Rota do Admin: Só acessa se o tipo for 'admin' */}
        <Route path="/admin" element={usuario?.tipo === 'admin' ? <Admin vagas={vagas} setVagas={setVagas} usuario={usuario} /> : <Navigate to="/vagas" />} />
        
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;