"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Lora, Noto_Sans, Caveat } from "next/font/google";
import ItemContainer from "../common/ItemContainer";
import { ItemProps } from "@/interfaces/Items";
import { LotusIcon, OrnamentDivider, PaisleyCorner } from "./IndianMotifs";

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

interface SubcategoryShowcaseProps {
  category: string;
  subcategory: string;
  items: ItemProps[];
  isExpanded: boolean;
  onToggle: () => void;
}

export default function SubcategoryShowcase({
  category,
  subcategory,
  items,
  isExpanded,
  onToggle,
}: SubcategoryShowcaseProps) {
  const coverImage = items[0]?.image;
  const sideImages = items.slice(1, 3).map((item) => item.image);
  const dishLabel = items.length === 1 ? "1 dish" : `${items.length} dishes`;

  return (
    <div
      className={`overflow-hidden rounded-[1.6rem] bg-[#FFF8F0] transition-shadow duration-500 ${
        isExpanded
          ? "shadow-[0_16px_40px_rgba(139,37,0,0.18)]"
          : "shadow-xl hover:shadow-2xl"
      }`}
    >
      <button
          type="button"
          onClick={onToggle}
          aria-expanded={isExpanded}
          className="group relative block w-full text-left"
        >
          <div className="relative h-56 overflow-hidden sm:h-64 md:h-80">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={subcategory}
                fill
                sizes="(max-width: 768px) 100vw, 1100px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-[#F5E6D8] to-[#F4BD50]" />
            )}

            {sideImages.length > 0 && (
              <div className="absolute top-5 right-5 hidden w-24 flex-col gap-3 sm:flex md:w-28">
                {sideImages.map((image, index) => (
                  <div
                    key={`${subcategory}-side-${index}`}
                    className="relative h-[4.5rem] w-[4.5rem] overflow-hidden rounded-full border-2 border-[#F4BD50] shadow-[0_0_0_3px_rgba(139,37,0,0.35)] md:h-20 md:w-20"
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#4A1408]/90 via-[#8B2500]/45 to-[#F4BD50]/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3D1F0A]/55 to-transparent" />

            <PaisleyCorner className="absolute left-3 top-3 h-9 w-9 text-[#F4BD50]/80" />
            <PaisleyCorner className="absolute right-3 top-3 h-9 w-9 rotate-90 text-[#F4BD50]/80" />

            <div
              className="absolute inset-x-0 top-0 h-8 opacity-40"
              style={{
                backgroundImage: "radial-gradient(circle, #F4BD50 1.2px, transparent 1.6px)",
                backgroundSize: "10px 10px",
              }}
            />

            <div className="absolute inset-0 flex items-end justify-between gap-4 p-5 sm:p-8">
              <div className="min-w-0">
                <div className="mb-2 flex items-center gap-2">
                  <LotusIcon className="h-5 w-8 text-[#F4BD50]" />
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.32em] text-[#F5E6D8] ${notoSans.className}`}
                  >
                    {category}
                  </p>
                </div>
                <h3
                  className={`text-3xl font-bold text-[#FFF6E4] drop-shadow-lg sm:text-4xl md:text-5xl ${lora.className}`}
                >
                  {subcategory}
                </h3>
                <p className={`mt-2 text-xl text-[#F4BD50] ${caveat.className}`}>
                  {dishLabel} from our traditional kitchen
                </p>
              </div>

              <div className="flex flex-shrink-0 flex-col items-center gap-2">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300 ${
                    isExpanded
                      ? "rotate-180 border-[#F4BD50] bg-gradient-to-b from-[#F67A08] to-[#8B2500] text-[#FFF6E4]"
                      : "border-[#F4BD50] bg-[#3D1F0A]/50 text-[#F4BD50] backdrop-blur-md group-hover:bg-[#F67A08]"
                  }`}
                >
                  <ChevronDown className="h-6 w-6" />
                </span>
                <span
                  className={`text-[11px] uppercase tracking-[0.18em] text-[#F5E6D8] ${notoSans.className}`}
                >
                  {isExpanded ? "Close" : "Open"}
                </span>
              </div>
            </div>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="items"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="bg-gradient-to-b from-[#FFF1D6] via-[#F5E6D8] to-[#FFF8F0] px-4 py-8 sm:px-8">
                <OrnamentDivider className="mb-2" />
                <p
                  className={`mb-6 text-center text-sm uppercase tracking-[0.22em] text-[#8B2500] ${notoSans.className}`}
                >
                  {subcategory} selection
                </p>
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, index) => (
                    <motion.div
                      key={item._id || item.title}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.35 }}
                    >
                      <ItemContainer
                        image={item.image}
                        title={item.title}
                        imageAlt={item.imageAlt}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  );
}
