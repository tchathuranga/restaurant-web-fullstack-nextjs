"use client";

import { useEffect, useState } from "react";
import ItemContainer from "../common/ItemContainer";
import { fetchAllItems } from "@/services/ItemService";
import { ItemProps } from "@/interfaces/Items";
import SectionHeading from "../common/SectionHeading";

export default function CateringMenu() {
  const [selectedDish, setSelectedDish] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [ItemData, setItemData] = useState<ItemProps[]>([]);

  const dishes = ["North Indian", "South Indian", "Sweets"];

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

  // Filter items by selected category
  const filteredItems = ItemData.filter(
    (item) => item.category === dishes[selectedDish],
  );

  return (
    <div className="mx-auto px-6 pb-8 sm:px-10 md:px-20 lg:px-30">
      <SectionHeading
        className="py-8"
        eyebrow="Feast for your guests"
        title="Our Catering Menu Includes"
      />

      <div className="mb-10 flex flex-wrap justify-center gap-3 md:gap-4">
        {error && (
          <div className="sv-card px-4 py-6 text-center">
            <p className="text-lg text-maroon">{error}</p>
          </div>
        )}
        {loading && (
          <div className="sv-card px-4 py-6 text-center">
            <p className="text-lg text-ink-muted">Loading items...</p>
          </div>
        )}
        {dishes.map((dish, index) => (
          <button
            key={dish}
            onClick={() => setSelectedDish(index)}
            className={`sv-chip ${selectedDish === index ? "sv-chip-active" : ""}`}
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
