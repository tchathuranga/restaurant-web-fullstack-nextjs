// "use client";

// import { useMemo, useRef, useCallback, useState, useEffect, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import Banner from "@/components/common/Banner";
// import { Lora, Noto_Sans } from "next/font/google";
// import FilterBar from "@/components/food-menu/FilterBar";
// import Dishes from "@/components/food-menu/Dishes";
// import { ITEM_DATA } from "@/const/dishes";
// import { FOOD_MENU_ITEMS } from "@/const/headerContens";


// const lora = Lora({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
// });

// const notoSans = Noto_Sans({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });

// function FoodMenuContent() {
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const topRef = useRef<HTMLDivElement | null>(null);
//   const sections = useMemo(
//     () => FOOD_MENU_ITEMS.filter((section) => section.name !== "All"),
//     []
//   );
//   const searchParams = useSearchParams();
//   const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

//   const handleFilterSelect = useCallback(
//     (dishName: string, menuIndexParam?: number) => {
//       const menuIndex =
//         typeof menuIndexParam === "number" ? menuIndexParam : FOOD_MENU_ITEMS.findIndex((item) => item.name === dishName);

//       setSelectedFilterIndex(menuIndex >= 0 ? menuIndex : 0);

//       if (dishName === "All") {
//         topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//         return;
//       }

//       const targetIndex = sections.findIndex(
//         (section) => section.name === dishName
//       );
//       if (targetIndex !== -1) {
//         sectionRefs.current[targetIndex]?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     },
//     [sections]
//   );

//   useEffect(() => {
//     const handler = ((event: Event) => {
//       const customEvent = event as CustomEvent<string>;
//       if (!customEvent.detail) return;
//       const menuIndex = FOOD_MENU_ITEMS.findIndex(
//         (item) => item.name === customEvent.detail
//       );
//       handleFilterSelect(customEvent.detail, menuIndex);
//     }) as EventListener;

//     window.addEventListener("food-menu-select", handler);
//     return () => {
//       window.removeEventListener("food-menu-select", handler);
//     };
//   }, [handleFilterSelect]);

//   useEffect(() => {
//     const category = searchParams.get("category");
//     if (category) {
//       const decodedCategory = decodeURIComponent(category);
//       const menuIndex = FOOD_MENU_ITEMS.findIndex(
//         (item) => item.name === decodedCategory
//       );
//       handleFilterSelect(decodedCategory, menuIndex);
//     }
//   }, [handleFilterSelect, searchParams]);

//   return (
//     <div ref={topRef}>
//       <Banner
//         singleImage="/images/foodMenuBanner.png"
//         content={{
//           title: "Our Menu",
//           subtitle: "Authentic flavors, traditional recipes",
//           titleFont: lora,
//           subtitleFont: notoSans,
//           titleFontSize: "font-medium",
//         }}
//       />

//       <div className="sticky top-0 z-100 bg-[#F5E6D8]">
//         <FilterBar
//           activeIndex={selectedFilterIndex}
//           onSelect={handleFilterSelect}
//         />
//       </div>
//       <div className="px-4 md:px-10 pb-10">
//         {sections.map((section, index) => (
//           <div
//             key={section.name}
//             ref={(el) => {
//               sectionRefs.current[index] = el;
//             }}
//           >
//             <Dishes title={section.name} itemsData={ITEM_DATA} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function FoodMenu() {
//   return (
//     <Suspense fallback={
//       <div>
//         <Banner
//           singleImage="/images/foodMenuBanner.png"
//           content={{
//             title: "Our Menu",
//             subtitle: "Authentic flavors, traditional recipes",
//             titleFont: lora,
//             subtitleFont: notoSans,
//             titleFontSize: "font-medium",
//           }}
//         />
//         <div className="flex items-center justify-center py-10">
//           <div className="text-gray-600">Loading menu...</div>
//         </div>
//       </div>
//     }>
//       <FoodMenuContent />
//     </Suspense>
//   );
// }

"use client";

import { useMemo, useRef, useCallback, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Banner from "@/components/common/Banner";
import { Lora, Noto_Sans } from "next/font/google";
import FilterBar from "@/components/food-menu/FilterBar";
import Dishes from "@/components/food-menu/Dishes";
import { ITEM_DATA } from "@/const/dishes";
import { FOOD_MENU_ITEMS } from "@/const/headerContens";


const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

function FoodMenuContent() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const topRef = useRef<HTMLDivElement | null>(null);
  const sections = useMemo(() => FOOD_MENU_ITEMS.filter((section) => section.name !== "All"), []);
  const searchParams = useSearchParams();
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const handleFilterSelect = useCallback(
    (dishName: string, menuIndexParam?: number) => {
      const menuIndex =
        typeof menuIndexParam === "number" ? menuIndexParam : FOOD_MENU_ITEMS.findIndex((item) => item.name === dishName);

      setSelectedFilterIndex(menuIndex >= 0 ? menuIndex : 0);

      if (dishName === "All") {
        topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      const targetIndex = sections.findIndex(
        (section) => section.name === dishName
      );
      if (targetIndex !== -1) {
        sectionRefs.current[targetIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    [sections]
  );

  useEffect(() => {
    const handler = ((event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (!customEvent.detail) return;
      const menuIndex = FOOD_MENU_ITEMS.findIndex(
        (item) => item.name === customEvent.detail
      );
      handleFilterSelect(customEvent.detail, menuIndex);
    }) as EventListener;

    window.addEventListener("food-menu-select", handler);
    return () => {
      window.removeEventListener("food-menu-select", handler);
    };
  }, [handleFilterSelect]);

  useEffect(() => {
    if (!searchParams) return;
    
    const category = searchParams.get("category");
    if (category) {
      const decodedCategory = decodeURIComponent(category);
      const menuIndex = FOOD_MENU_ITEMS.findIndex(
        (item) => item.name === decodedCategory
      );
      handleFilterSelect(decodedCategory, menuIndex);
    }
  }, [handleFilterSelect, searchParams]);

  return (
    <div ref={topRef}>
      <Banner
        singleImage="/images/foodMenuBanner.png"
        content={{
          title: "Our Menu",
          subtitle: "Authentic flavors, traditional recipes",
          titleFont: lora,
          subtitleFont: notoSans,
          titleFontSize: "font-medium",
        }}
      />

      <div className="sticky top-0 z-100 bg-[#F5E6D8]">
        <FilterBar
          activeIndex={selectedFilterIndex}
          onSelect={handleFilterSelect}
        />
      </div>
      <div className="px-4 md:px-10 pb-10">
        {sections.map((section, index) => (
          <div
            key={section.name}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
          >
            <Dishes title={section.name} itemsData={ITEM_DATA} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FoodMenu() {
  return (
    <Suspense fallback={
      <div>
        <Banner
          singleImage="/images/foodMenuBanner.png"
          content={{
            title: "Our Menu",
            subtitle: "Authentic flavors, traditional recipes",
            titleFont: lora,
            subtitleFont: notoSans,
            titleFontSize: "font-medium",
          }}
        />
        <div className="flex items-center justify-center py-10">
          <div className="text-gray-600">Loading menu...</div>
        </div>
      </div>
    }>
      <FoodMenuContent />
    </Suspense>
  );
}
