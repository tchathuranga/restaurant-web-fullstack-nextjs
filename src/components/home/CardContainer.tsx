import React from 'react';
import Image from 'next/image';

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow-sm p-7 flex flex-col items-center text-center"
        >
          <Image
            src={card.icon}
            alt={card.imageAlt || card.title}
            width={40}
            height={40}
            className="mb-4 w-10 h-10 object-contain"
          />
          <h3 className="font-semibold text-lg mb-2 text-gray-900">
            {card.title}
          </h3>
          <p className="text-gray-500 text-sm">{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;