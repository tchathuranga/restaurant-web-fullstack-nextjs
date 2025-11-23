"use client"

import { useState } from 'react';
import { Lora, Noto_Sans } from "next/font/google";
import ItemCardContainer from '../common/ItemCardContainer';

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export default function CateringMenu() {
    const [selectedDish, setSelectedDish] = useState(0);

    const dishes = ['Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Drinks'];

    const itemsData = [
        {
            image: "/images/here-slider/hero-slide1.png",
            title: "Chicken Biryani",
            description: "Aromatic basmati rice cooked with tender chicken pieces and traditional spices",
            price: "$12.99",
            imageAlt: "Delicious chicken biryani"
        },
        {
            image: "/images/here-slider/hero-slide1.png",
            title: "Butter Chicken",
            description: "Creamy and rich butter chicken with tender pieces in a flavorful tomato-based sauce",
            price: "$14.99",
            imageAlt: "Delicious butter chicken"
        },
        {
            image: "/images/here-slider/hero-slide1.png",
            title: "Paneer Tikka",
            description: "Grilled cottage cheese marinated in aromatic spices and served with mint chutney",
            price: "$11.99",
            imageAlt: "Delicious paneer tikka"
        },
        {
            image: "/images/here-slider/hero-slide1.png",
            title: "Masala Dosa",
            description: "Crispy South Indian crepe filled with spiced potato filling and served with sambar",
            price: "$9.99",
            imageAlt: "Delicious masala dosa"
        },
        {
            image: "/images/here-slider/hero-slide1.png",
            title: "Tandoori Chicken",
            description: "Marinated chicken cooked in traditional clay oven with aromatic spices",
            price: "$16.99",
            imageAlt: "Delicious tandoori chicken"
        },
        {
            image: "/images/here-slider/hero-slide1.png",
            title: "Tandoori Chicken",
            description: "Marinated chicken cooked in traditional clay oven with aromatic spices",
            price: "$16.99",
            imageAlt: "Delicious tandoori chicken"
        }
    ];

    return (
        <div className="lg:px-30 md:px-20 sm:px-10 px-10 pb-2 mx-auto">
            <h2 className={`px-10 font-bold text-gray-900 text-center py-6 ${lora.className}`} style={{ fontSize: '34px' }}>
                Our Catering Menu Includes
            </h2>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-20">
                {dishes.map((dish, index) => (
                    <button
                        key={dish}
                        onClick={() => setSelectedDish(index)}
                        className={`px-4 py-2 rounded-full text-sm md:text-base font-small transition-colors duration-200 shadow-lg ${notoSans.className}  ${selectedDish === index
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 max-w-7xl mx-auto p-10">
                {itemsData.map((item, index) => (
                    <ItemCardContainer
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        imageAlt={item.imageAlt}
                    />
                ))}
            </div>
        </div>
    )
}