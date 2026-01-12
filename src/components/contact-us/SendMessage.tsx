'use client';

import { Lora, Noto_Sans, Kalam } from "next/font/google";
import { useState } from "react";
import Image from "next/image";

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const kalam = Kalam({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
});

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function SendMessage() {
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("");

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('subject', formData.subject);
        data.append('message', formData.message);

        try {
            const response = await fetch('/api/send-email-customer-message', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                const errorData = await response.json();
                setStatus(errorData.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
      <div
        className="lg:px-30 md:px-20 sm:px-10 px-10 py-12 mx-auto"
        style={{ backgroundColor: "#FBFBFA" }}
      >
        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2
            className={`text-3xl font-bold text-gray-900 mb-8 text-center ${lora.className}`}
          >
            Send us a Message
          </h2>

          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm text-gray-600 mb-2 ${notoSans.className}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent ${notoSans.className}`}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm text-gray-600 mb-2 ${notoSans.className}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent ${notoSans.className}`}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm text-gray-600 mb-2 ${notoSans.className}`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message Subject"
                  className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent ${notoSans.className}`}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm text-gray-600 mb-2 ${notoSans.className}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none ${notoSans.className}`}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {status && (
                <div
                  className={`text-center p-3 rounded-md ${
                    status.includes("error") || status.includes("failed") || status.includes("Failed")
                      ? "bg-red-50 text-red-600 border border-red-200"
                      : "bg-green-50 text-green-600 border border-green-200"
                  } ${notoSans.className}`}
                >
                  {status}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">

                {/* <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-orange-400 text-white font-semibold py-3 rounded-lg hover:bg-[#e35f31] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed ${notoSans.className}`}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button> */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-orange-400 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-500 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center ${notoSans.className}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 max-w-2xl mx-auto mb-16 px-4">
          <Image
            src={"/images/Calling.png"}
            alt={`Calling illustration`}
            width={400}
            height={100}
            className="object-contain w-full max-w-[300px] md:max-w-[400px] h-auto"
          />

          <p
            className={`text-xl sm:text-2xl md:text-3xl text-gray-700 py-8 md:py-20 text-center md:text-left ${kalam.className}`}
            style={{ transform: "rotate(-1deg)" }}
          >
            We are just a phone call away....
          </p>
        </div>
      </div>
    );
}

 