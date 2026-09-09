"use client";

import { FOOD_MENU_ITEMS } from "@/const/headerContens";

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
    <div className="sv-band mb-4 border-b border-gold/30">
      <div className="flex flex-wrap justify-center gap-3 px-3 py-4 md:gap-4">
        {FOOD_MENU_ITEMS.map((dish, index) => (
          <button
            key={dish.name}
            onClick={() => {
              onSelect?.(dish.name, index);
            }}
            className={`sv-chip ${activeIndex === index ? "sv-chip-active" : ""}`}
          >
            {dish.name}
          </button>
        ))}
      </div>

      {subcategories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 px-4 pb-4 md:gap-3">
          <button
            onClick={() => onSubcategorySelect?.(null)}
            className={`sv-chip py-1.5 text-xs md:text-sm ${
              !activeSubcategory ? "sv-chip-active" : ""
            }`}
          >
            All
          </button>
          {subcategories.map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => onSubcategorySelect?.(subcategory)}
              className={`sv-chip py-1.5 text-xs md:text-sm ${
                activeSubcategory === subcategory ? "sv-chip-active" : ""
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
