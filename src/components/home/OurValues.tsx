import { Noto_Sans, Lora } from 'next/font/google';

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const OurValues = () => {
  return (
    <div className="text-center py-8 relative" style={{ backgroundColor: '#FFF1D6' }}>
      <h2 className={`font-bold mb-8 text-gray-900 ${lora.className}`} style={{ fontSize: '34px' }}>Our Values</h2>
      <p>We believe in quality, integrity, and customer satisfaction.</p>
    </div>
  );
};
export default OurValues;