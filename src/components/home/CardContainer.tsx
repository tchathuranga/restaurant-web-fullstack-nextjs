import React from 'react';
import Image from 'next/image';
import { PaisleyCorner } from '../common/IndianMotifs';

export interface CardContainerProps {
    cards: Card[];
}

export interface Card {
    icon: string;
    title: string;
    desc: string;
    imageAlt?: string; 
}

const CardContainer = ({ cards }: CardContainerProps) => {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="sv-card group relative overflow-hidden p-7 text-center transition-transform duration-300 hover:-translate-y-1"
        >
          <PaisleyCorner className="absolute right-3 top-3 h-8 w-8 rotate-90 text-gold/50" />
          <Image
            src={card.icon}
            alt={card.imageAlt || card.title}
            width={40}
            height={40}
            className="mx-auto mb-4 h-10 w-10 object-contain"
          />
          <h3 className="sv-heading mb-2 text-xl">
            {card.title}
          </h3>
          <p className="text-sm leading-relaxed text-ink-muted">{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
