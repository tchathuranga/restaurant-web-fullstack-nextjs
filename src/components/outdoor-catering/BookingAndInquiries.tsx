import Image from "next/image";
import { Lora, Noto_Sans } from "next/font/google";
import { Phone, Mail } from "lucide-react";

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export default function BookingAndInquiries() {
    return (
        <div className="lg:px-30 md:px-20 sm:px-10 px-10 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
                {/* Left Side - Text Content */}
                <div className="flex-1 w-full lg:w-auto">
                    <h2 className={`font-bold text-gray-800 mb-6 ${lora.className}`} style={{ fontSize: '34px' }}>
                        Booking & Inquiries
                    </h2>

                    <p className={`text-gray-600 mb-6 ${notoSans.className}`} style={{ fontSize: '16px' }}>
                        We recommend booking your catering at least 1-2 weeks in advance to ensure availability and quality service.
                    </p>

                    {/* Contact Information */}
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-gray-700" strokeWidth={2} />
                            <span className={`text-gray-700 ${notoSans.className}`} style={{ fontSize: '16px' }}>
                                +94 11 2345 6789
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gray-700" strokeWidth={2} />
                            <span className={`text-gray-700 ${notoSans.className}`} style={{ fontSize: '16px' }}>
                                info@srivihar.lk
                            </span>
                        </div>
                    </div>

                    <p className={`text-gray-600 mb-6 ${notoSans.className}`} style={{ fontSize: '16px' }}>
                        Or fill out our simple Inquiry Form and we&apos;ll get back to you promptly.
                    </p>

                    {/* Contact Us Button */}
                    <button
                        className={`px-8 py-3 rounded-lg border-2 font-semibold uppercase tracking-wide transition-colors ${notoSans.className}`}
                        style={{
                            borderColor: '#F67A08',
                            color: '#F67A08'
                        }}
                    >
                        CONTACT US
                    </button>
                </div>

                {/* Right Side - Illustration */}
                <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-lg">
                        <Image
                            src="/images/inquiries-section-image.png"
                            alt="Catering event setup illustration"
                            width={500}
                            height={300}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}