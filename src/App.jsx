import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importação das Páginas
import { Login } from './pages/Login';
import { Vagas } from './pages/Vagas';
import { Admin } from './pages/Admin';
import { Dicas } from './pages/Dicas';
import { PainelEstudante } from './pages/PainelEstudante'; // Importando a nova página do aluno!
import { NotFound } from './pages/NotFound';

// Vagas Iniciais (Merge: Lista atualizada do seu amigo com os cursos do UNISAGRADO)
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
  const [usuario, setUsuario] = useState(null); // Controla quem está logado: { tipo: 'estudante' | 'admin' }

  // Merge: A função de logout precisa ficar dentro do App para poder usar o setUsuario (Corrigido pelo seu amigo)
  const handleLogout = () => {
    setUsuario(null);
  };

  return (
    <Router>
      <Routes>
        {/* Nova Rota: Quando acessar a raiz do site, vai direto para o login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rota de Login */}
        <Route path="/login" element={<Login setUsuario={setUsuario} />} />
        
        {/* Rota do Dashboard: Só acessa se estiver logado */}
        <Route path="/dashboard" element={usuario?.tipo === 'estudante' ? <PainelEstudante usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />} />
        
        {/* Rota de Vagas: Todos logados podem acessar */}
        <Route path="/vagas" element={usuario ? <Vagas vagas={vagas} usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />} />

        {/* Rota de Dicas: Mantida oculta no Header, mas funcional se acessada diretamente */}
        <Route path="/dicas" element={usuario ? <Dicas usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />} />
        
        {/* Rota do Admin (Painel RH): Só acessa se o tipo for 'admin' */}
        <Route path="/admin" element={usuario?.tipo === 'admin' ? <Admin vagas={vagas} setVagas={setVagas} usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/dashboard" />} />

        {/* Rota do Estudante: Só acessa se o tipo for 'aluno' */}
        <Route path="/estudante" element={usuario?.tipo === 'aluno' ? <PainelEstudante usuario={usuario} onLogout={handleLogout} /> : <Navigate to="/login" />} />

        {/* Rota 404 (Qualquer URL que não exista cai aqui) */}
      <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;