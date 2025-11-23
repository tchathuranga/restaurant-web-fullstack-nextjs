"use client";

import { Noto_Sans } from "next/font/google";
import { FOOD_MENU_ITEMS } from "@/const/headerContens";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

interface FilterBarProps {
  activeIndex: number;
  onSelect?: (dishName: string, index: number) => void;
}

export default function FilterBar({ activeIndex, onSelect }: FilterBarProps) {

  return (
    <div className="mb-4" style={{ backgroundColor: "#F5E6D8" }}>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-2 py-4">
        {FOOD_MENU_ITEMS.map((dish, index) => (
          <button
            key={dish.name}
            onClick={() => {
              onSelect?.(dish.name, index);
            }}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-small transition-colors duration-200 ${
              notoSans.className
            }  ${
              activeIndex === index
                ? "bg-[#F67A08] text-white border-[#F67A08] hover:bg-[#E5690A] hover:border-[#E5690A]"
                : "bg-white text-black hover:bg-gray-100"
            }`}
            style={{ fontSize: "15px" }}
          >
            {dish.name}
          </button>
        ))}
      </div>
    </div>
  );
}
