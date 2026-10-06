import Image from "next/image";
import { Lora, Noto_Sans } from "next/font/google";
import { Phone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export default function BookingAndInquiries() {
    const router = useRouter();
    
    return (
      <div className="mx-auto px-6 py-10 sm:px-10 md:px-20 lg:px-30">
        <div className="sv-card mx-auto flex max-w-7xl flex-col items-center gap-8 p-6 lg:flex-row lg:gap-12 lg:p-10">
          <div className="w-full flex-1 lg:w-auto">
            <p className="sv-eyebrow mb-2">Plan your event</p>
            <h2
              className={`sv-heading mb-6 ${lora.className}`}
              style={{ fontSize: "34px" }}
            >
              Booking & Inquiries
            </h2>

            <p
              className={`mb-6 text-ink-muted ${notoSans.className}`}
              style={{ fontSize: "16px" }}
            >
              We recommend booking your catering at least 1-2 weeks in advance
              to ensure availability and quality service.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-saffron" strokeWidth={2} />
                <a
                  href="tel:+941123456789"
                  className={`text-ink ${notoSans.className}`}
                  style={{ fontSize: "16px" }}
                >
                  +94 11 2345 6789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-saffron" strokeWidth={2} />
                <a
                  href="mailto:info@srivihar.lk"
                  className={`text-ink ${notoSans.className}`}
                  style={{ fontSize: "16px" }}
                >
                  info@srivihar.lk
                </a>
              </div>
            </div>

            <p
              className={`mb-6 text-ink-muted ${notoSans.className}`}
              style={{ fontSize: "16px" }}
            >
              Or fill out our simple Inquiry Form and we&apos;ll get back to you
              promptly.
            </p>

            {/* Contact Us Button */}
            <button
              className={`sv-btn-outline uppercase tracking-wide ${notoSans.className}`}
              onClick={() => router.push("/contact-us#send-message")}
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
    );
}