'use client';

import { useState } from 'react';
import { Noto_Sans, Lora } from 'next/font/google';
import { ChevronDown } from 'lucide-react';
import Image from "next/image";

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What are your operating hours?',
    answer: 'We are open from 10:00 AM to 10:00 PM, Monday to Sunday.'
  },
  {
    question: 'Do you take reservations?',
    answer: 'Yes, you can make reservations by calling us or through our website.'
  },
  {
    question: 'Do you cater for events?',
    answer: 'Yes, we offer catering services for events. Please contact us for more details.'
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, we have parking available for our customers.'
  },
  {
    question: 'Are you available on food delivery platforms?',
    answer: 'Yes, We are Available on Uber Eats and PickMe Food.'
  }
];

export default function FreqQuestion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 relative overflow-hidden">
      {/* Background Decorative Images */}
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">

        <Image
            src="/images/decorative/mandala-icon-top.png"
            alt="mandala bg"
            width={1100}
            height={106}
            className="absolute left-1/2 top-0 transform -translate-x-1/2 opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className={`font-bold mb-12 text-gray-900 text-center ${lora.className}`} style={{ fontSize: '34px' }}>
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                onMouseEnter={() => toggleAccordion(index)}
                className={`w-full px-6 py-4 flex items-center justify-between ${
                  openIndex === index ? 'bg-gray-200' : 'bg-white'
                } hover:bg-gray-100 transition-colors`}
              >
                <span className={`text-left font-medium text-gray-800 ${notoSans.className}`}>
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-100 border-t border-gray-300">
                  <p className={`text-gray-700 ${notoSans.className}`}>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}