import Image from 'next/image';
import { Kalam, Noto_Sans } from 'next/font/google';

const kalam = Kalam({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Promotions() {
  return (
    <div className="relative w-full max-h-[95vh] sm:max-h-[80vh] overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full h-auto">
        <Image
          src="/images/promotion-bg-image.png"
          alt="Craving South Indian Flavors"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-cover sm:object-contain max-h-[95vh] sm:max-h-[80vh] min-h-[60vh] sm:min-h-auto"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 bg-black/20">
        <h2
          className={`text-white text-center mb-4 sm:mb-6 ${kalam.className}`}
          style={{ fontSize: '32px', fontStyle: 'italic', fontWeight: '600' }}
        >
          Craving South Indian Flavors?
        </h2>

        <p className={`text-white text-center mb-6 sm:mb-8 text-sm sm:text-base max-w-md ${notoSans.className}`}>
          Order now and get 10% off on your first order.
        </p>

        <button className={`bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded transition-colors duration-200 ${notoSans.className}`}>
          ORDER NOW
        </button>
      </div>
    </div>
  );
}