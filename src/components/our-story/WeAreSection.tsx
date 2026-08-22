import Image from 'next/image';
import { Noto_Sans, Lora } from 'next/font/google';

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const WeAreSection = () => {
    return (
        <div className="lg:px-30 md:px-20 sm:px-10 px-10 py-12 mx-auto">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left Column - Image Grid */}
                    <div className="w-full lg:w-2/5 flex-shrink-0 lg:pt-10">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                            <Image
                                src="/images/we-are-section.png"
                                alt="Samosas, flatbreads, thali, and biryani dishes"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="w-full lg:w-3/5 flex flex-col lg:pt-0">
                        <h2
                            className={` font-bold text-gray-900  py-6 ${lora.className}`} style={{ fontSize: '34px' }}
                        >
                            We Are,
                        </h2>

                        <div className={`text-gray-700 text-base md:text-sm leading-relaxed mb-8 space-y-4 ${notoSans.className}`}>
                            <p>
                                A Legacy of Authentic Indian Vegetarian Excellence
                            </p>

                            <p>
                                For over 40 years, Sri Vihar Restaurant has been a trusted name in authentic Indian vegetarian dining, delighting generations of guests with timeless recipes, exceptional quality, and genuine hospitality. Established with a passion for preserving India's rich culinary heritage, Sri Vihar has become one of Sri Lanka's most respected vegetarian restaurant brands.
                             </p>

                            <p>
                                With branches in Thunmulla, Nugegoda, Kelaniya, Dehiwala, and Wattala, Sri Vihar continues to bring the authentic flavours of India closer to communities across the island. Every dish is crafted using premium ingredients, carefully selected spices, and traditional cooking techniques that honour centuries-old recipes. From aromatic curries and freshly prepared breads to signature dosas and sweets, every meal reflects our unwavering commitment to freshness, consistency, and excellence.
                            </p>

                            <p>
                                At Sri Vihar, hospitality extends beyond serving exceptional food—it is about creating memorable dining experiences. Our attentive service, welcoming atmosphere, and dedication to customer satisfaction have earned the trust and loyalty of families, professionals, and food enthusiasts for four decades.
                            </p>

                            <p>
                                Driven by the same values since our inception, we continue to uphold the highest standards of quality while offering convenient dine-in, takeaway, and delivery services. Every meal from Sri Vihar is a celebration of authentic Indian vegetarian cuisine, prepared with care, served with warmth, and inspired by a tradition of culinary excellence that has endured for generations.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeAreSection;

