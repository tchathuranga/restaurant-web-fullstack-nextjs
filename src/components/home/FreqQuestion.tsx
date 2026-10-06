'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from "next/image";
import SectionHeading from '../common/SectionHeading';

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
      {/* <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">

        <Image
            src="/images/decorative/mandala-icon-top.png"
            alt="mandala bg"
            width={1100}
            height={106}
            className="absolute left-1/2 top-0 transform -translate-x-1/2 opacity-20"
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10">
        <SectionHeading
          className="mb-12"
          eyebrow="Helpful answers"
          title="Frequently Asked Questions"
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="sv-card overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex w-full items-center justify-between px-6 py-4 text-left transition-colors ${
                  openIndex === index ? 'bg-cream' : 'bg-ivory'
                } hover:bg-cream`}
              >
                <span className="pr-4 font-medium text-ink">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-saffron transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-gold/30 bg-parchment px-6 py-4">
                  <p className="text-ink-muted">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}