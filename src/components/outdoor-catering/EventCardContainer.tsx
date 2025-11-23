import Image from "next/image";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export interface EventCardProps {
    events: Event[];
}

interface Event{
    icon: string;
    title: string;
    imageAlt?: string; 
}

export default function EventCardContainer({ events } : EventCardProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
            {events.map((event, id) => (
                <div 
                    key={id}
                    className="bg-white rounded-lg shadow-sm p-7 flex flex-col items-center text-center"
                >
                    <Image
                        src={event.icon}
                        alt={event.imageAlt || event.title}
                        width={40}
                        height={40}
                        className="mb-4 w-10 h-10 object-contain"
                    />
                    <h1 className={`font-semibold text-md mb-2 text-gray-800 ${notoSans.className}`}>{event.title}</h1>
                </div>
            ))}
            
        </div>
    )
}