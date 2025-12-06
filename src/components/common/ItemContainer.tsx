import Image from 'next/image';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

interface ItemContainerProps {
  image: string;
  title: string;
  imageAlt?: string;
}

export default function ItemContainer({ image, title, imageAlt }: ItemContainerProps) {
  return (
    <div className=" ">
        
        {/* Card 2 - Rounded Image with Padding */}
        <div className="group relative flex flex-col items-center bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-orange-100 hover:border-orange-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-400 transform rotate-45 translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative w-full h-56 overflow-hidden mt-8 mx-4 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50">
            <Image
              src={image}
              alt={imageAlt || title}
              width={400}
              height={100}
              className="object-cover w-full h-full transform group-hover:scale-125 rotate-2 group-hover:rotate-0 transition-all duration-700"
            />
          </div>
          <div className="p-6 w-full relative z-10">
            <h3 className={`text-2xl font-bold text-orange-400 mt-4 text-center group-hover:text-orange-600 transition-colors duration-300 ${caveat.className}`}>
              {title}
            </h3>
          </div>
        </div>
      </div>
  );
}