"use client";

import { useState } from "react";
import { Lora, Noto_Sans } from "next/font/google";
import { ITEM_DATA } from "@/const/dishes";
import ItemContainer from "../common/ItemContainer";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function CateringMenu() {
  const [selectedDish, setSelectedDish] = useState(0);

  const dishes = ["North Indian", "South Indian", "Sweets"];

  // Filter items by selected category
  const filteredItems = ITEM_DATA.filter(
    (item) => item.category === dishes[selectedDish]
  );

  return (
    <div className="lg:px-30 md:px-20 sm:px-10 px-10 pb-2 mx-auto">
      <h2
        className={`px-10 font-bold text-gray-900 text-center py-6 ${lora.className}`}
        style={{ fontSize: "34px" }}
      >
        Our Catering Menu Includes
      </h2>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
        {dishes.map((dish, index) => (
          <button
            key={dish}
            onClick={() => setSelectedDish(index)}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-small transition-colors duration-200 shadow-lg ${
              notoSans.className
            }  ${
              selectedDish === index
                ? "bg-[#F67A08] text-white border-[#F67A08] hover:bg-[#E5690A] hover:border-[#E5690A]"
                : "bg-white text-black hover:bg-gray-100"
            }`}
            style={{ fontSize: "15px" }}
          >
            {dish}
          </button>
        ))}
      </div>

      {/* Grid Container for Item Cards with animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-12 max-w-7xl mx-auto p-2 md:p-8">
        {filteredItems.map((item, index) => (
          <ItemContainer
            key={item.title + index}
            image={item.image}
            title={item.title}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}
