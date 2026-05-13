import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carrossel.css'; // IMPORTANTE: Importando o CSS que criamos

export function CarrosselDicas({ dicas }) {
  // Inicializando o Embla (align start para começar do primeiro card)
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="carrossel-wrapper">
      
      {/* Viewport: esconde os cards extras */}
      <div className="embla__viewport" ref={emblaRef}>
        
        {/* Container: coloca os cards lado a lado */}
        <div className="embla__container">
          
          {/* Mapeando os cards */}
          {dicas.map((dica) => (
            <div className="embla__slide" key={dica.id}>
              <div className="dica-card">
                <div className="dica-icon">{dica.icon}</div>
                <h3 className="dica-titulo">{dica.titulo}</h3>
                <p className="dica-descricao">{dica.descricao}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Botões de Navegação */}
      <button className="embla__button embla__button--prev" onClick={scrollPrev}>
        <ChevronLeft />
      </button>

      <button className="embla__button embla__button--next" onClick={scrollNext}>
        <ChevronRight />
      </button>

    </div>
  );
}