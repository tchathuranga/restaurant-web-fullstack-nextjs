'use client';

import { Lora, Noto_Sans } from "next/font/google";
import { MapPin, Clock, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

interface RestaurantBranch {
    id: number;
    name: string;
    address: string;
    hours: string;
    phone: string;
}

const branches: RestaurantBranch[] = [
    {
        id: 1,
        name: "Sri Vihar Restaurant Two",
        address: "123 Thummulla Road, Colombo 05",
        hours: "10:00 AM - 10:00 PM",
        phone: "+94 11 2584739"
    },
    {
        id: 2,
        name: "Sri Vihar Restaurant 3",
        address: "456 Galle Road, Colombo 03",
        hours: "10:00 AM - 10:00 PM",
        phone: "+94 11 2584740"
    },
    {
        id: 3,
        name: "Sri Vihar Restaurant 4",
        address: "789 Kandy Road, Kandy",
        hours: "10:00 AM - 10:00 PM",
        phone: "+94 11 2584741"
    },
    {
        id: 4,
        name: "Sri Vihar Restaurant Thummulla",
        address: "321 Thummulla Road, Colombo 05",
        hours: "10:00 AM - 10:00 PM",
        phone: "+94 11 2584742"
    },
    {
        id: 5,
        name: "Sri Vihar Restaurant Dehiwala",
        address: "654 Galle Road, Dehiwala",
        hours: "10:00 AM - 10:00 PM",
        phone: "+94 11 2584743"
    }
];

export default function Branches() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollability = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScrollability();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollability);
            window.addEventListener('resize', checkScrollability);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScrollability);
            }
            window.removeEventListener('resize', checkScrollability);
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const currentScroll = scrollContainerRef.current.scrollLeft;
            const newScroll = direction === 'left' 
                ? currentScroll - scrollAmount 
                : currentScroll + scrollAmount;
            
            scrollContainerRef.current.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            });
            
            // Check scrollability after scroll animation
            setTimeout(checkScrollability, 300);
        }
    };

    return (
        <div className="lg:px-30 md:px-20 sm:px-10 px-10 py-12 mx-auto" style={{ backgroundColor: "#FFF1D6" }}>
            {/* Header with light blue highlight */}
            <div className="text-center mb-8">
                <h2 className={`px-10 font-bold text-gray-900 text-center py-6 ${lora.className}`} style={{ fontSize: '34px' }}>
                    Make Your Reservation Now!
                </h2>
            </div>

            {/* Scrollable Cards Container with Navigation */}
            <div className="relative">
                {/* Left Arrow */}
                {canScrollLeft && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                )}

                {/* Scrollable Cards */}
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScrollability}
                    className="flex gap-6 overflow-x-auto pb-4 px-2 hide-scrollbar"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {branches.map((branch) => (
                        <div
                            key={branch.id}
                            className="bg-white rounded-lg shadow-md p-6 flex-shrink-0 w-85"
                        >
                            {/* Location */}
                            <div className="flex items-start mb-3">
                                <MapPin className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className={`text-gray-700 ${notoSans.className}`} style={{ fontSize: '16px' }}>
                                    {branch.address}
                                </span>
                            </div>

                            {/* Operating Hours */}
                            <div className="flex items-start mb-3">
                                <Clock className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className={`text-gray-700 ${notoSans.className}`} style={{ fontSize: '16px' }}>
                                    {branch.hours}
                                </span>
                            </div>

                            {/* Phone Number */}
                            <div className="flex items-start">
                                <Phone className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className={`text-gray-700 ${notoSans.className}`} style={{ fontSize: '16px' }}>
                                    {branch.phone}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                {canScrollRight && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                )}
            </div>
        </div>
    );
}