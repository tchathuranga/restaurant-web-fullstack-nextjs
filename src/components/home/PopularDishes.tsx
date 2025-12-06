"use client"

import { Noto_Sans, Lora } from 'next/font/google';
import { useState } from 'react';
import Image from 'next/image';
import ItemContainer from '../common/ItemContainer';
import { ITEM_DATA } from '@/const/dishes';

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const PopularDishes = () => {
  const [selectedDish, setSelectedDish] = useState(0);
  
  const dishes = ['North Indian', 'South Indian', 'Sweets'];

  // Filter ITEM_DATA by selected category
  const filteredItems = ITEM_DATA.filter(item => item.category === dishes[selectedDish]);

  return (
    <div className="px-4 md:px-10 lg:px-30 pb-20">
      {/* Bottom Left Background Image */}
      <Image
        src="/images/mandala-bottom-left-icon.png"
        alt=""
        className="hidden md:block absolute left-0 bottom-0 h-auto pointer-events-none opacity-40"
        width={180}
        height={180}
      />
      {/* Bottom Right Background Image */}
      <Image
        src="/images/mandala-bottom-right-icon.png"
        alt=""
        className="hidden md:block absolute right-0 bottom-0 h-auto pointer-events-none opacity-40"
        width={180}
        height={180}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
      <h2 className={`px-2 md:px-10 font-bold text-gray-900 py-6 md:py-10 ${lora.className}`} style={{ fontSize: '28px' }}>
        Popular Dishes
      </h2>
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-10">
        {dishes.map((dish, index) => (
          <button
            key={dish}
            onClick={() => setSelectedDish(index)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-small transition-colors duration-200 shadow-lg ${notoSans.className}  ${
              selectedDish === index
                ? 'bg-[#F67A08] text-white border-[#F67A08] hover:bg-[#E5690A] hover:border-[#E5690A]'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
            style={{ fontSize: '15px' }}
          >
            {dish}
          </button>
        ))}
      </div>

      {/* Grid Container for Item Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-12 max-w-7xl mx-auto p-2 md:p-8">
        {filteredItems.map((item, idx) => (
          <ItemContainer
            key={idx}
            image={item.image}
            title={item.title}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>

      </div>
    </div>
  );
};

export default PopularDishes;