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
                    <div className="w-full lg:w-2/5 flex-shrink-0">
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
                    <div className="w-full lg:w-3/5 flex flex-col lg:pt-10">
                        <h2
                            className={` font-bold text-gray-900  py-6 ${lora.className}`} style={{ fontSize: '34px' }}
                        >
                            We Are,
                        </h2>

                        <div className={`text-gray-700 text-base md:text-sm leading-relaxed mb-8 space-y-4 ${notoSans.className}`}>
                            <p>
                                A special place where you can enjoy delicious South Indian vegetarian food and some tasty North Indian dishes too. Our menu includes popular items like dosai, vadais, curry, idly, breads, and much more.
                            </p>

                            <p>
                                We have a comfortable air-conditioned dining room where you can relax and enjoy your meal. Every Friday night, we offer a buffet so you can try a little bit of everything!
                            </p>

                            <p>
                                You may know us as Shanti Vihar from before. We are committed to serving authentic Indian cuisine while maintaining the highest standards of quality and service.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeAreSection;

