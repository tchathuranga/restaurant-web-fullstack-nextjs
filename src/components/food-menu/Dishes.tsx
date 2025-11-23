import ItemCardContainer from "../common/ItemCardContainer";
import { ItemDataProps } from "../../interfaces/dishes";
import { Lora } from 'next/font/google';

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface DishesProps {
    title: string;
    itemsData: ItemDataProps[];
}

export default function Dishes({title, itemsData}: DishesProps) {
  return (
    <div className="lg:px-30 md:px-20 sm:px-10">
      <h2 className={`px-10 font-bold text-gray-900 ${lora.className}`} style={{ fontSize: '34px' }}>
        {title}
      </h2>
      {/* Grid Container for Item Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 max-w-7xl mx-auto p-10">
        
        {itemsData.map((item, index) => (
          <ItemCardContainer
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            imageAlt={item.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}
