import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Vagas } from './pages/Vagas';
import { Admin } from './pages/Admin';
import { Dicas } from './pages/Dicas';
import { PainelEstudante } from '../src/pages/PainelEstudante';

const vagasIniciais = [
  { id: 1, titulo: "Estágio em Desenvolvimento Front-end", empresa: "Tech Solutions", curso: "Ciência da Computação", local: "Remoto", bolsa: "R$ 1.500,00", descricao: "Atuar no desenvolvimento de interfaces com React e prototipagem.", link: "https://forms.gle/exemplo1" },
  { id: 2, titulo: "Estágio em Sistemas Embarcados", empresa: "Indústria Inova", curso: "Engenharia da Computação", local: "Bauru - SP", bolsa: "R$ 1.800,00", descricao: "Programação de microcontroladores em C/C++.", link: "https://vagas.inova.com" },
  { id: 3, titulo: "Estágio em Nutrição Clínica", empresa: "Hospital Beneficência", curso: "Nutrição", local: "Bauru - SP", bolsa: "R$ 1.200,00", descricao: "Auxílio no acompanhamento nutricional de pacientes internados e elaboração de dietas hospitalares.", link: "https://hospital.com/vagas" },
  { id: 4, titulo: "Estágio em Psicologia Organizacional (RH)", empresa: "RH Consultoria", curso: "Psicologia", local: "Híbrido", bolsa: "R$ 1.400,00", descricao: "Apoio em processos de recrutamento e seleção, aplicação de testes psicológicos e dinâmicas de grupo.", link: "https://rhconsultoria.com/vagas" },
  { id: 5, titulo: "Estágio em Clínica Odontológica", empresa: "Sorriso Saudável Clínicas", curso: "Odontologia", local: "Bauru - SP", bolsa: "R$ 1.100,00", descricao: "Auxiliar em procedimentos clínicos, esterilização de materiais e atendimento humanizado aos pacientes.", link: "https://sorrisosaudavel.com/estagios" },
  { id: 6, titulo: "Estágio em Educação Infantil", empresa: "Colégio Futuro", curso: "Pedagogia", local: "Bauru - SP", bolsa: "R$ 1.000,00", descricao: "Auxílio em sala de aula na educação infantil, elaboração de atividades lúdicas e acompanhamento do desenvolvimento infantil.", link: "https://colegiofuturo.edu.br/vagas" },
  { id: 7, titulo: "Estágio em Planejamento de Obras", empresa: "Construtora Bauru", curso: "Engenharia Civil", local: "Bauru - SP", bolsa: "R$ 1.600,00", descricao: "Acompanhamento de cronograma físico-financeiro, leitura de projetos e medição de serviços na obra.", link: "https://construtorabauru.com.br/vagas" }
];

function App() {
  const [vagas, setVagas] = useState(vagasIniciais);
  const [usuario, setUsuario] = useState(null); // Controla quem está logado: { tipo: 'aluno' | 'admin' }

  // A função de logout precisa ficar dentro do App para poder usar o setUsuario
  const handleLogout = () => {
    setUsuario(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Passamos as vagas para a tela de visualização */}
        <Route path="/vagas" element={<Vagas vagas={vagas} />} />
        {/* Passamos as vagas E a função de adicionar para o Admin */}
        <Route path="/admin" element={<Admin vagas={vagas} setVagas={setVagas} />} />
        <Route path="/dicas" element={<Dicas />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;