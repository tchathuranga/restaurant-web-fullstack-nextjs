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
    <div className="relative py-12 md:py-16 lg:py-20">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
        <p className="sv-eyebrow text-center">From the kitchen</p>
        <h2 
          className={`sv-heading mb-8 text-center text-2xl md:mb-12 md:text-3xl lg:mb-16 lg:text-4xl ${lora.className}`}
        >
          What&apos;s New at Sri Vihar
        </h2>

        {error && (
          <div className="sv-card mb-6 px-4 py-8 text-center">
            <p className="text-lg text-maroon">{error}</p>
          </div>
        )}

        {loading && (
          <div className="sv-card mb-6 px-4 py-8 text-center">
            <p className="text-lg text-ink-muted">Loading...</p>
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

