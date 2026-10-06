"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ItemContainer from "../common/ItemContainer";
import { ItemProps } from "@/interfaces/Items";
import { fetchAllItems } from "@/services/ItemService";
import SectionHeading from "../common/SectionHeading";

const PopularDishes = () => {
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

  const filteredItems = ItemData.filter(
    (item) => item.category === dishes[selectedDish],
  );

  return (
    <div className="relative px-4 pb-20 md:px-10 lg:px-30">
      {/* Bottom Left Background Image */}
      <Image
        src="/images/mandala-bottom-left-icon.png"
        alt=""
        className="hidden md:block absolute left-0 bottom-0 h-auto pointer-events-none opacity-40"
        width={180}
        height={180}
      />
      {/* Bottom Right Background Image */}
      <Image
        src="/images/mandala-bottom-right-icon.png"
        alt=""
        className="hidden md:block absolute right-0 bottom-0 h-auto pointer-events-none opacity-40"
        width={180}
        height={180}
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <SectionHeading
          className="py-8 md:py-12"
          eyebrow="From our kitchen"
          title="Popular Dishes"
          subtitle="A taste of our most-loved North Indian, South Indian, and sweet specialties."
        />

        <div className="mb-6 flex flex-wrap justify-center gap-2 md:mb-10 md:gap-4">
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

        {/* Grid Container for Item Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-12 max-w-7xl mx-auto p-2 md:p-8">
          {filteredItems.map((item, idx) => (
            <ItemContainer
              key={idx}
              image={item.image}
              title={item.title}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
