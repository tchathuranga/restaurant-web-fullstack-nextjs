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
    bookingType: string;
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function SendMessage() {
    const [formData, setFormData] = useState<FormData>({
        bookingType: '',
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="lg:px-30 md:px-20 sm:px-10 px-10 py-12 mx-auto" style={{ backgroundColor: "#FBFBFA" }}>
            {/* Contact Form Section */}
            <div className="max-w-2xl mx-auto mb-16">
                <h2 className={`text-3xl font-bold text-gray-900 mb-8 text-center ${lora.className}`}>
                    Send us a Message
                </h2>

                <div className="bg-white rounded-lg shadow-md p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Booking Type */}
                        <div>
                            <label htmlFor="bookingType" className={`block text-sm text-gray-600 mb-2 ${notoSans.className}`}>
                                Booking type
                            </label>
                            <select
                                id="bookingType"
                                name="bookingType"
                                value={formData.bookingType}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent ${notoSans.className}`}
                                required
                            >
                                <option value="">Select your preference</option>
                                <option value="dine-in">Dine In</option>
                                <option value="takeaway">Takeaway</option>
                                <option value="delivery">Delivery</option>
                                <option value="catering">Catering</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* Name */}
                        <div>
                            <label htmlFor="name" className={`block text-sm text-gray-600 mb-2 ${notoSans.className}`}>
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
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className={`block text-sm text-gray-600 mb-2 ${notoSans.className}`}>
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
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className={`block text-sm text-gray-600 mb-2 ${notoSans.className}`}>
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
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className={`block text-sm text-gray-600 mb-2 ${notoSans.className}`}>
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
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className={`w-full bg-orange-400 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-500 transition-colors ${notoSans.className}`}
                            >
                                Send Message
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

                <p className={`text-xl sm:text-2xl md:text-3xl text-gray-700 py-8 md:py-20 text-center md:text-left ${kalam.className}`} style={{ transform: 'rotate(-1deg)' }}>
                    We are just a phone call away....
                </p>
            </div>
        </div>
    );
}