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
  subcategories?: string[];
  activeSubcategory?: string | null;
  onSubcategorySelect?: (subcategory: string | null) => void;
}

export default function FilterBar({
  activeIndex,
  onSelect,
  subcategories = [],
  activeSubcategory = null,
  onSubcategorySelect,
}: FilterBarProps) {
  return (
    <div className="mb-4" style={{ backgroundColor: "#F5E6D8" }}>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 py-4">
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

      {subcategories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 pb-4 px-4">
          <button
            onClick={() => onSubcategorySelect?.(null)}
            className={`px-3 py-1.5 rounded-full text-xs md:text-sm transition-colors duration-200 ${
              notoSans.className
            } ${
              !activeSubcategory
                ? "bg-[#F67A08] text-white"
                : "bg-white text-black border border-orange-200 hover:bg-orange-50"
            }`}
          >
            All
          </button>
          {subcategories.map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => onSubcategorySelect?.(subcategory)}
              className={`px-3 py-1.5 rounded-full text-xs md:text-sm transition-colors duration-200 ${
                notoSans.className
              } ${
                activeSubcategory === subcategory
                  ? "bg-[#F67A08] text-white"
                  : "bg-white text-black border border-orange-200 hover:bg-orange-50"
              }`}
            >
              {subcategory}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
