import Image from 'next/image';

interface PromotionsProps {
  image: string;
}

export default function Promotions({ image }: PromotionsProps) {
  return (
    <div className="relative w-full max-h-[95vh] sm:max-h-[80vh] overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-auto">
        <Image
          src={image}
          alt="Craving South Indian Flavors"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-cover sm:object-contain max-h-[95vh] sm:max-h-[80vh] min-h-[60vh] sm:min-h-auto"
        />
      </div>
    </div>
  );
}