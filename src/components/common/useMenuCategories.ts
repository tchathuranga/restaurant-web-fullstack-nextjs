"use client";

import { useEffect, useState } from "react";
import { FOOD_MENU_ITEMS } from "@/const/headerContens";
import { SUBCATEGORY_ORDER } from "@/const/itemSubcategories";

export interface MenuCategory {
  name: string;
  subcategories: string[];
}

const DEFAULT_CATEGORIES: MenuCategory[] = FOOD_MENU_ITEMS.filter((item) => item.name !== "All").map((item) => ({
  name: item.name,
  subcategories: SUBCATEGORY_ORDER[item.name] || [],
}));

// Categories managed in the dashboard; falls back to the built-in list when none are stored
export function useMenuCategories() {
  const [categories, setCategories] = useState<MenuCategory[]>(DEFAULT_CATEGORIES);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/categories", { cache: "no-store" })
      .then((response) => response.json())
      .then((result) => {
        if (!cancelled && result.success && Array.isArray(result.data) && result.data.length > 0) {
          setCategories(result.data);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return categories;
}
