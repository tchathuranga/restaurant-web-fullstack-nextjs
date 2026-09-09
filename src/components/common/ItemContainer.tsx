import Image from 'next/image';
import { Caveat } from 'next/font/google';
import { PaisleyCorner } from './IndianMotifs';

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
    <div className="sv-card group relative overflow-hidden p-4 transition-transform duration-300 hover:-translate-y-1">
      <PaisleyCorner className="absolute right-3 top-3 z-10 h-8 w-8 rotate-90 text-gold/60" />
      <div className="relative mt-2 h-56 w-full overflow-hidden rounded-2xl border border-gold/25 bg-cream">
        <Image
          src={image}
          alt={imageAlt || title}
          width={400}
          height={100}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className={`text-center text-2xl font-bold text-maroon transition-colors duration-300 group-hover:text-saffron ${caveat.className}`}>
          {title}
        </h3>
      </div>
    </div>
  );
}
