"use client";

import { useMemo, useRef, useCallback, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Banner from "@/components/common/Banner";
import { Lora, Noto_Sans } from "next/font/google";
import FilterBar from "@/components/food-menu/FilterBar";
import Dishes from "@/components/food-menu/Dishes";
import { FOOD_MENU_ITEMS } from "@/const/headerContens";
import { ItemProps } from "@/interfaces/Items";
import { fetchAllItems } from "@/services/ItemService";
import { getSubcategory, sortSubcategories } from "@/const/itemSubcategories";

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
  const subcategoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const topRef = useRef<HTMLDivElement | null>(null);
  const sections = useMemo(() => FOOD_MENU_ITEMS.filter((section) => section.name !== "All"), []);
  const searchParams = useSearchParams();
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [ItemData, setItemData] = useState<ItemProps[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        setError("");
        const result = await fetchAllItems();
        if (result.success) {
          setItemData(result.data || []);
        } else {
          setError(result.error || "Failed to fetch items");
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch items");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const selectedCategory = FOOD_MENU_ITEMS[selectedFilterIndex]?.name || "All";

  const categorySubcategories = useMemo(() => {
    if (selectedCategory === "All") return [];

    const names = Array.from(
      new Set(
        ItemData.filter((item) => item.category === selectedCategory).map(
          (item) => item.subcategory || getSubcategory(item.title, item.category)
        )
      )
    );

    return sortSubcategories(selectedCategory, names);
  }, [ItemData, selectedCategory]);

  const handleFilterSelect = useCallback(
    (dishName: string, menuIndexParam?: number) => {
      const menuIndex =
        typeof menuIndexParam === "number"
          ? menuIndexParam
          : FOOD_MENU_ITEMS.findIndex((item) => item.name === dishName);

      setSelectedFilterIndex(menuIndex >= 0 ? menuIndex : 0);
      setSelectedSubcategory(null);

      if (dishName === "All") {
        topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      const targetIndex = sections.findIndex((section) => section.name === dishName);
      if (targetIndex !== -1) {
        sectionRefs.current[targetIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    [sections]
  );

  const handleSubcategorySelect = useCallback(
    (subcategory: string | null) => {
      setSelectedSubcategory((current) =>
        subcategory && current === subcategory ? null : subcategory
      );

      if (!subcategory) {
        const targetIndex = sections.findIndex((section) => section.name === selectedCategory);
        if (targetIndex !== -1) {
          sectionRefs.current[targetIndex]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        return;
      }

      window.setTimeout(() => {
        const key = `${selectedCategory}::${subcategory}`;
        subcategoryRefs.current[key]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    },
    [sections, selectedCategory]
  );

  const handleSubcategoryToggle = useCallback(
    (categoryName: string, subcategory: string) => {
      const categoryIndex = FOOD_MENU_ITEMS.findIndex((item) => item.name === categoryName);
      if (categoryIndex >= 0) {
        setSelectedFilterIndex(categoryIndex);
      }

      setSelectedSubcategory((current) => (current === subcategory ? null : subcategory));
    },
    []
  );

  useEffect(() => {
    const handler = ((event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (!customEvent.detail) return;
      const menuIndex = FOOD_MENU_ITEMS.findIndex((item) => item.name === customEvent.detail);
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
      const menuIndex = FOOD_MENU_ITEMS.findIndex((item) => item.name === decodedCategory);
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
          subcategories={categorySubcategories}
          activeSubcategory={selectedSubcategory}
          onSubcategorySelect={handleSubcategorySelect}
        />
      </div>
      <div className="px-4 md:px-10 pb-10">
        {error && (
          <div className="text-center py-8 px-4 bg-red-50 rounded-lg">
            <p className="text-red-600 text-lg">{error}</p>
          </div>
        )}
        {loading && (
          <div className="text-center py-8 px-4 bg-red-50 rounded-lg">
            <p className="text-red-600 text-lg">Loading Items</p>
          </div>
        )}
        {sections.map((section, index) => (
          <div
            key={section.name}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="scroll-mt-36"
          >
            <Dishes
              title={section.name}
              itemsData={ItemData}
              expandedSubcategory={
                selectedCategory === "All" || selectedCategory === section.name
                  ? selectedSubcategory
                  : null
              }
              onSubcategoryToggle={(subcategory) =>
                handleSubcategoryToggle(section.name, subcategory)
              }
              subcategoryRefs={subcategoryRefs}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FoodMenu() {
  return (
    <Suspense
      fallback={
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
      }
    >
      <FoodMenuContent />
    </Suspense>
  );
}
