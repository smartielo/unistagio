import React, { useState } from 'react';
import { Header } from '../components/Header';
import './Dicas.css';
import EmojiPicker from 'emoji-picker-react';


export function Dicas() {

    const dicasIniciais = [
        { id: 1, titulo: "Dica 1: Pesquise a fundo sobre a empresa", descricao: "Antes da entrevista, entenda a cultura, a missão e os projetos recentes da organização. Mostrar que você conhece o lugar onde quer trabalhar demonstra proatividade e interesse genuíno, algo que os recrutadores adoram em estudantes." },
        { id: 2, titulo: "Dica 2: Valorize sua vivência universitária", descricao: "Mesmo sem experiência formal, suas atividades na faculdade importam muito. Destaque projetos de extensão, iniciação científica, empresa júnior, centro acadêmico ou grandes trabalhos em grupo que desenvolveram sua liderança e trabalho em equipe." },
        { id: 3, titulo: "Dica 3: Pratique o seu 'pitch' pessoal", descricao: "Prepare uma apresentação curta e objetiva sobre quem você é para responder à clássica pergunta 'fale sobre você'. Foque na sua jornada acadêmica, no porquê de ter escolhido seu curso e onde você quer chegar na carreira." },
        { id: 4, titulo: "Dica 4: Transforme a teoria em prática", descricao: "Durante a conversa, tente conectar as teorias e ferramentas que você está aprendendo em sala de aula com os desafios reais que a vaga exige. Isso mostra que você sabe aplicar o conhecimento acadêmico no mercado de trabalho." },
        { id: 5, titulo: "Dica 5: Seja transparente sobre o que não sabe", descricao: "Como estudante, ninguém espera que você seja um especialista sênior. Se não souber responder a uma pergunta técnica, seja honesto. O mais importante é demonstrar curiosidade, vontade de aprender e proatividade para buscar soluções." },
        { id: 6, titulo: "Dica 6: Use o método STAR para dar exemplos", descricao: "Ao responder sobre situações desafiadoras, estruture sua fala em: Situação, Tarefa, Ação e Resultado. Use exemplos de provas complexas, prazos apertados ou conflitos em trabalhos da faculdade para mostrar como você resolve problemas na prática." },
        { id: 7, titulo: "Dica 7: Faça perguntas inteligentes ao recrutador", descricao: "Ao final da entrevista, quando perguntarem se você tem dúvidas, não fique calado. Pergunte sobre os desafios da equipe, o plano de desenvolvimento para estagiários/juniores ou como a empresa avalia o sucesso na vaga." },
        { id: 8, titulo: "Dica 8: Cuide da sua comunicação e postura", descricao: "Seja online (cuidado com fundo e ruídos) ou presencial, a primeira impressão conta. Vista-se de acordo com o perfil da empresa, mantenha contato visual, evite gírias em excesso e demonstre energia e entusiasmo ao falar." },
        { id: 9, titulo: "Dica 9: Destaque sua inteligência emocional", descricao: "Para vagas de entrada, a atitude (soft skills) frequentemente vale mais que o conhecimento técnico (hard skills). Demonstre que você sabe ouvir, tem facilidade para receber feedbacks, possui resiliência e adapta-se bem a novos cenários." }
];

    return(
    
    <div classname= "painelDicas">
        <Header />
        <div className="dicas-container">
            <h1>Dicas para Conseguir um Estágio</h1>
            <p>Confira nossas dicas para aumentar suas chances de conseguir o estágio dos seus sonhos.</p>
        <div/>
        <div className="dicas-grid">
            {dicasIniciais.map((dica) => (
                <div key={dica.id} className="dica-card">
                    <h2>{dica.titulo}</h2>
                    <p>{dica.descricao}</p>
                </div>
            ))}
        </div>
     </div>
    </div>
    )
}