import Image from "next/image";
import { PaisleyCorner } from "../common/IndianMotifs";

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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {events.map((event, id) => (
                <div 
                    key={id}
                    className="sv-card relative overflow-hidden p-6 text-center transition-transform duration-300 hover:-translate-y-1"
                >
                    <PaisleyCorner className="absolute right-2 top-2 h-7 w-7 rotate-90 text-gold/40" />
                    <Image
                        src={event.icon}
                        alt={event.imageAlt || event.title}
                        width={40}
                        height={40}
                        className="mx-auto mb-4 h-10 w-10 object-contain"
                    />
                    <h3 className="sv-heading text-base">{event.title}</h3>
                </div>
            ))}
            
        </div>
    )
}
