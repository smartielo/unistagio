import React, { useState } from 'react';
import { Header } from '../components/Header';
import './Dicas.css';
import EmojiPicker from 'emoji-picker-react';
import { CarrosselDicas } from '../components/Carrossel';
import { Search, GraduationCap, Mic2, BookOpen, UserX, Target, HelpCircle, UserCheck, Heart } from 'lucide-react';

export function Dicas() {
  const dicasIniciais = [
    { 
      id: 1, 
      icon: <Search />, 
      titulo: "Dica 1: Pesquise a fundo sobre a empresa", 
      descricao: "Antes da entrevista, entenda a cultura, a missão e os projetos recentes da organização. Mostrar que você conhece o lugar onde quer trabalhar demonstra proatividade e interesse genuíno, algo que os recrutadores adoram em estudantes." 
    },
    { 
      id: 2, 
      icon: <GraduationCap />, 
      titulo: "Dica 2: Valorize sua vivência universitária", 
      descricao: "Mesmo sem experiência formal, suas atividades na faculdade importam muito. Destaque projetos de extensão, iniciação científica, empresa júnior, centro acadêmico ou grandes trabalhos em grupo que desenvolveram sua liderança e trabalho em equipe." 
    },
    { 
      id: 3, 
      icon: <Mic2 />, 
      titulo: "Dica 3: Pratique o seu 'pitch' pessoal", 
      descricao: "Prepare uma apresentação curta e objetiva sobre quem você é para responder à clássica pergunta 'fale sobre você'. Foque na sua jornada acadêmica, no porquê de ter escolhido seu curso e onde você quer chegar na carreira." 
    },
    { 
      id: 4, 
      icon: <BookOpen />, 
      titulo: "Dica 4: Transforme a teoria em prática", 
      descricao: "Durante a conversa, tente conectar as teorias e ferramentas que você está aprendendo em sala de aula com os desafios reais que a vaga exige. Isso mostra que você sabe aplicar o conhecimento acadêmico no mercado de trabalho." 
    },
    { 
      id: 5, 
      icon: <UserX />, 
      titulo: "Dica 5: Seja transparente sobre o que não sabe", 
      descricao: "Como estudante, ninguém espera que você seja um especialista sênior. Se não souber responder a uma pergunta técnica, seja honesto. O mais importante é demonstrar curiosidade, vontade de aprender e proatividade para buscar soluções." 
    },
    { 
      id: 6, 
      icon: <Target />, 
      titulo: "Dica 6: Use o método STAR para dar exemplos", 
      descricao: "Ao responder sobre situações desafiadoras, estruture sua fala em: Situação, Tarefa, Ação e Resultado. Use exemplos de provas, prazos apertados ou conflitos em trabalhos da faculdade para mostrar como você resolve problemas na prática." 
    },
    { 
      id: 7, 
      icon: <HelpCircle />, 
      titulo: "Dica 7: Faça perguntas inteligentes ao recrutador", 
      descricao: "Ao final da entrevista, quando perguntarem se você tem dúvidas, não fique calado. Pergunte sobre os desafios da equipe, o plano de desenvolvimento para estagiários/juniores ou como a empresa avalia o sucesso na vaga." 
    },
    { 
      id: 8, 
      icon: <UserCheck />, 
      titulo: "Dica 8: Cuide da sua comunicação e postura",     
      descricao: "Seja online (cuidado com fundo e ruídos) ou presencial, a primeira impressão conta. Vista-se de acordo com o perfil da empresa, mantenha contato visual, evite gírias em excesso e demonstre energia e entusiasmo ao falar." 
    },
    { 
      id: 9, 
      icon: <Heart />, 
      titulo: "Dica 9: Destaque sua inteligência emocional", 
      descricao: "Para vagas de entrada, a atitude (soft skills) frequentemente vale mais que o conhecimento técnico (hard skills). Demonstre que você sabe ouvir, tem facilidade para receber feedbacks, possui resiliência e adapta-se bem a novos cenários." 
    }
  ];

  return (
    <div><Header />
    <div className="painelDicas min-h-screen bg-[#0a0a0a] text-white">

      <main className="dicas-container max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Dicas para Conseguir um Estágio
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Confira nossas dicas para aumentar suas chances de conseguir a vaga dos seus sonhos.
          </p>
        </div>
            <CarrosselDicas dicas={dicasIniciais} />
      </main>
    </div>
    </div>
  );
}