import React from 'react';
import { Header } from '../components/Header';
import './Dicas.css';

import rodapeImg from '../assets/rodape-estagio.png'; 
import bannerImg from '../assets/banner-estagio.png'; 

import { CarrosselDicas } from '../components/Carrossel';
/* Usando apenas os ícones seguros que já funcionaram para você */
import { Search, GraduationCap, Mic2, BookOpen, UserX, Target, HelpCircle, UserCheck, Heart } from 'lucide-react';

export function Dicas({ usuario, onLogout }) {
  const dicasIniciais = [
    { id: 1, icon: <Search />, titulo: "1-Pesquise a fundo sobre a empresa", descricao: "Pesquise sobre a empresa, sua cultura e área de atuação antes da entrevista para demonstrar interesse e preparo." },
    { id: 2, icon: <GraduationCap />, titulo: "2-Valorize sua vivência universitária", descricao: "Mesmo sem experiência, destaque projetos acadêmicos, trabalhos em grupo e atividades que desenvolveram comunicação e trabalho em equipe." },
    { id: 3, icon: <Mic2 />, titulo: "3-Pratique o seu 'pitch' pessoal", descricao: "Prepare uma apresentação curta sobre sua trajetória, objetivos e motivações profissionais para responder à clássica pergunta 'fale sobre você'." },
    { id: 4, icon: <BookOpen />, titulo: "4-Transforme a teoria em prática", descricao: "Relacione conhecimentos e ferramentas aprendidas na faculdade com situações práticas e demandas do mercado de trabalho." },
    { id: 5, icon: <UserX />, titulo: "5-Seja transparente sobre o que não sabe", descricao: "Se não souber responder a uma pergunta técnica, seja honesto e demonstre disposição para aprender." },
    { id: 6, icon: <Target />, titulo: "6-Use o método STAR para dar exemplos", descricao: "Estruture sua fala em: Situação, Tarefa, Ação e Resultado." },
    { id: 7, icon: <HelpCircle />, titulo: "7-Faça perguntas inteligentes", descricao: "Ao final da entrevista, faça perguntas sobre a equipe e rotina para demonstrar interesse." },
    { id: 8, icon: <UserCheck />, titulo: "8-Cuide da sua comunicação e postura", descricao: "Seja online ou presencial, a primeira impressão conta. Mantenha uma postura profissional." },
    { id: 9, icon: <Heart />, titulo: "9-Destaque sua inteligência emocional", descricao: "Demonstre habilidades comportamentais como adaptação, responsabilidade e abertura para feedbacks." }
  ];

  return (
    <div className="bodyy">
      <Header usuario={usuario} onLogout={onLogout} />

      <div className="bannerDicas" style={{ backgroundImage: `url(${bannerImg})` }}></div>
      
      <main className="banner-container">
        <p className="text-center banner-subtitle">Toda grande carreira começa com a primeira oportunidade, seu futuro profissional começa agora.</p>
      </main>

      <div className="painelDicas">
        <main className="dicas-container">
          
          <div className="header-guia">
            <h1>Guia para Conquistar seu Estágio</h1>
            <div className="divider-red-main"></div>
            <p>Confira nossas estratégias essenciais para se destacar nos processos seletivos.</p>
          </div>

          <section className="conteudosDicas">
            
            {/* BLOCO 1: LINKEDIN */}
            <div className="blocoDica">
              <div className="cabecalho-bloco">
                <div className="titulo-alinhado">
                   <Target size={38} className="icon-red" />
                   <h2>Organize seu LinkedIn</h2>
                </div>
                <div className="linha-vermelha-inferior"></div>
              </div>
              
              <p className="texto-intro">No LinkedIn, as empresas encontram você através de palavras-chave. A plataforma funciona como um "Google" de profissionais.</p>
              
              <h3 className="subtitulo-destaque">Como otimizar seu perfil:</h3>
              <ul className="lista-sem-pontos">
                <li><span className="tag-destaque">Título</span> Evite usar "Buscando Oportunidades". Utilize: "Estudante de [Curso] | Interesse em [Área]".</li>
                <li><span className="tag-destaque">Sobre</span> Utilize seu pitch pessoal aqui. Escreva em primeira pessoa, relatando sua paixão pela profissão.</li>
                <li><span className="tag-destaque">Soft Skills</span> Demonstre que você sabe ouvir, possui resiliência e adapta-se bem a novos cenários.</li>
              </ul>

              <h3 className="subtitulo-destaque">Como o ecossistema funciona:</h3>
              <p className="texto-intro">Os recrutadores filtram por: <span className="tag-red">Localização</span> + <span className="tag-red">Curso</span> + <span className="tag-red">Competências</span>.</p>
            </div>

            {/* BLOCO 2: CURRÍCULO */}
            <div className="blocoDica">
              <div className="cabecalho-bloco">
                <div className="titulo-alinhado">
                   <BookOpen size={38} className="icon-red" />
                   <h2>Monte seu Currículo de Destaque</h2>
                </div>
                <div className="linha-vermelha-inferior"></div>
              </div>
              
              <p className="texto-intro">Seu currículo deve funcionar como um "trailer" do seu potencial profissional.</p>
              
              <div className="grid-moderno">
                {/* Caixa Verde */}
                <div className="caixa-verde">
                  <div className="titulo-caixa verde">
                    {/* Ícone SVG Moderno de Check (Não quebra a tela) */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <h3>O que colocar:</h3>
                  </div>
                  <ul className="lista-check">
                    <li><strong>Vivência universitária:</strong> Destaque projetos de extensão, iniciação científica ou trabalhos em grupo.</li>
                    <li><strong>Teoria na prática:</strong> Conecte as teorias e ferramentas aprendidas com os desafios reais da vaga.</li>
                    <li><strong>Objetivo claro:</strong> Inclua uma frase curta e direta definindo o que você busca.</li>
                  </ul>
                </div>

                {/* Caixa Vermelha */}
                <div className="caixa-vermelha">
                  <div className="titulo-caixa vermelha">
                    {/* Ícone SVG Moderno de X (Não quebra a tela) */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <h3>O que evitar:</h3>
                  </div>
                  <ul className="lista-x">
                    <li><strong>Excesso de dados:</strong> CPF, RG, endereço completo e foto são desnecessários na primeira etapa.</li>
                    <li><strong>Mentiras:</strong> A transparência é vital. Nunca minta sobre seu nível de inglês ou competências técnicas.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* BLOCO 3: ENTREVISTA */}
            <div className="blocoDica">
              <div className="cabecalho-bloco">
                <div className="titulo-alinhado">
                   <UserCheck size={38} className="icon-red" />
                   <h2>Dicas para sua Entrevista</h2>
                </div>
                <div className="linha-vermelha-inferior"></div>
              </div>
              
              <p className="texto-intro">A entrevista é o momento crucial para validar o que está no papel. A chave para o sucesso é uma preparação sólida.</p>
              
              <h3 className="subtitulo-destaque">Antes (O preparo mental):</h3>
              <ul className="lista-sem-pontos">
                <li><strong>Pesquisa Profunda:</strong> Mergulhe na cultura, na missão e nos projetos recentes da organização.</li>
                <li><strong>O Pitch Pessoal:</strong> Treine sua fala de 1 a 2 minutos focada na sua jornada acadêmica e objetivos.</li>
              </ul>
              
              <h3 className="subtitulo-destaque">Durante (Comunicação e Postura):</h3>
              <ul className="lista-sem-pontos">
                <li><strong>Método STAR:</strong> Estruture exemplos práticos em: Situação, Tarefa, Ação e Resultado.</li>
                <li><strong>Perguntas inteligentes:</strong> Ao final, pergunte sobre os desafios da equipe ou o plano de desenvolvimento.</li>
              </ul>
            </div>

          </section>
        </main>

        <div className="resumo-final">
          <h2>Resumo dos Pontos Essenciais</h2>
          <CarrosselDicas dicas={dicasIniciais} />
        </div>
      </div>

      <footer>
        <img className="footerDicas" src={rodapeImg} alt="Rodapé" />
      </footer>

    </div>
  );
}