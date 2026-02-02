import { Lora } from 'next/font/google';
import NewsItem from './NewsItem';
import { NewsProps } from '@/interfaces/news';

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});



interface WhatsNewSectionProps {
  newsItems: NewsProps[];
  error: string;
  loading: boolean;
}

const WhatsNewSection = ({ newsItems, error, loading }: WhatsNewSectionProps) => {
  return (
    <div className="relative py-12 md:py-16 lg:py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 relative z-10">
        <h2 
          className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 lg:mb-16 text-center ${lora.className}`}
        >
          What&apos;s New at Sri Vihar
        </h2>

        {error && (
          <div className="text-center py-8 px-4 bg-red-50 rounded-lg">
            <p className="text-red-600 text-lg">{error}</p>
          </div>
        )}

        {loading && (
          <div className="text-center py-8 px-4 bg-red-50 rounded-lg">
            <p className="text-gray-600 text-lg">Loading...</p>
          </div>
        )}

        <div className="max-w-5xl mx-auto">
          {newsItems.map((item, index) => (
            <NewsItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              imageAlt={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsNewSection;

