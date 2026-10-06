"use client";

import { MutableRefObject } from "react";
import Image from "next/image";
import { Lora, Noto_Sans, Caveat } from "next/font/google";
import { ItemProps } from "@/interfaces/Items";
import { getSubcategory, sortSubcategories } from "@/const/itemSubcategories";
import SubcategoryShowcase from "./SubcategoryShowcase";
import { MandalaRing, OrnamentDivider, PaisleyCorner } from "./IndianMotifs";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

interface DishesProps {
  title: string;
  itemsData: ItemProps[];
  expandedSubcategory?: string | null;
  onSubcategoryToggle?: (subcategory: string) => void;
  subcategoryRefs?: MutableRefObject<Record<string, HTMLDivElement | null>>;
}

export default function Dishes({
  title,
  itemsData,
  expandedSubcategory = null,
  onSubcategoryToggle,
  subcategoryRefs,
}: DishesProps) {
  const itemsToRender = itemsData.filter((item) => item.category === title);
  const hasItems = itemsToRender.length > 0;

  const groupedSubcategories = sortSubcategories(
    title,
    Array.from(
      new Set(
        itemsToRender.map(
          (item) => item.subcategory || getSubcategory(item.title, item.category)
        )
      )
    )
  );

  return (
    <div className="lg:px-30 md:px-20 sm:px-10 pt-10">
      <div className="mx-auto max-w-7xl px-2 md:px-6">
        <div className="sv-card relative overflow-hidden px-6 py-8 text-center sm:px-12">
          
            <MandalaRing className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-[#F67A08]/15" />

            <p
              className={`relative text-xs font-semibold uppercase tracking-[0.38em] text-[#8B2500] ${notoSans.className}`}
            >
              Sri Vihar Menu
            </p>
            <h2
              className={`relative mt-2 font-bold text-[#6B1D12] ${lora.className}`}
              style={{ fontSize: "34px" }}
            >
              {title}
            </h2>
            <OrnamentDivider className="relative mt-4" />
             
        </div>
      </div>

      {hasItems ? (
        <div className="mx-auto mt-8 max-w-7xl grid-cols-1 gap-8 px-2 md:grid-cols-1 md:px-6">
          {groupedSubcategories
            .map((subcategory) => ({
              subcategory,
              items: itemsToRender.filter(
                (item) =>
                  (item.subcategory || getSubcategory(item.title, item.category)) ===
                  subcategory
              ),
            }))
            .filter(({ items }) => items.length > 0)
            .map(({ subcategory, items }, index, visible) => {
              const isOddLeftover =
                visible.length % 2 === 1 && index === visible.length - 1;
              const isHalfWidth = !isOddLeftover;

              return (
                <div
                  key={`${title}-${subcategory}`}
                  ref={(el) => {
                    if (subcategoryRefs) {
                      subcategoryRefs.current[`${title}::${subcategory}`] = el;
                    }
                  }}
                  className={`scroll-mt-40 ${isHalfWidth ? "" : "md:col-span-2"}`}
                >
                  <SubcategoryShowcase
                    category={title}
                    subcategory={subcategory}
                    items={items}
                    isExpanded={expandedSubcategory === subcategory}
                    onToggle={() => onSubcategoryToggle?.(subcategory)}
                     
                  />
                </div>
              );
            })}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 max-w-7xl mx-auto p-10">
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-center text-gray-500">
            <p className={`text-2xl font-semibold text-[#6B1D12] ${lora.className}`}>
              Dishes coming soon
            </p>
            <p className="mt-3 text-base max-w-md">
              We&apos;re working on adding delicious options to the {title} category.
              Please check back shortly!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
