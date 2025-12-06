import { ItemDataProps } from "../../interfaces/dishes";
import { Lora  } from 'next/font/google';
import ItemContainer from "../common/ItemContainer";

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface DishesProps {
  title: string;
  itemsData: ItemDataProps[];
}

export default function Dishes({ title, itemsData }: DishesProps) {
  const itemsToRender = itemsData.filter((item) => item.category === title);
  const hasItems = itemsToRender.length > 0;

  return (
    <div className="lg:px-30 md:px-20 sm:px-10 pt-10">

      <h2 className={`px-10 font-bold text-gray-900 ${lora.className}`} style={{ fontSize: '34px' }}>
        {title}
      </h2>
      {/* Grid Container for Item Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 max-w-7xl mx-auto p-10">

      {hasItems ? (
        itemsToRender.map((item, index) => (
            <ItemContainer
              key={index}
              image={item.image}
              title={item.title}
              imageAlt={item.imageAlt}
            />
          ))
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-16 text-center text-gray-500">
          <p className={`text-2xl font-semibold text-gray-700 ${lora.className}`}>
            Dishes coming soon
          </p>
          <p className="mt-3 text-base max-w-md">
            We&apos;re working on adding delicious options to the {title} category. Please check back shortly!
          </p>
        </div>
      )}
      </div>
    </div>
  );
}

 

