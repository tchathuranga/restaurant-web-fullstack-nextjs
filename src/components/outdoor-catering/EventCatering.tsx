import { Lora } from "next/font/google";
import EventCardContainer from "./EventCardContainer";

const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
});

export default function EventCatering() {

    const eventData = [
        {icon: "/images/Event-card-icons/wedding.png", title: "Weddings & Engagements", imageAlt: "Weddings & Engagements"},
        {icon: "/images/Event-card-icons/birthday.png", title: "Birthday & Anniversary", imageAlt: "Birthday & Anniversary"},
        {icon: "/images/Event-card-icons/religious.png", title: "Religious Gatherings", imageAlt: "Religious Gatherings"},
        {icon: "/images/Event-card-icons/coporate.png", title: "Corporate Events", imageAlt: "Corporate Events"},
        {icon: "/images/Event-card-icons/house-warmings.png", title: "Housewarmings & More", imageAlt: "Housewarmings & More"}
    ]
    return (
        <div className="lg:px-30 md:px-20 sm:px-10 px-10 pb-10 mx-auto">
            <h2 className={`px-10 font-bold text-gray-900 text-center py-6 ${lora.className}`} style={{ fontSize: '34px' }}>
                Events We Cater To
            </h2>
            <EventCardContainer events={eventData} />
        </div>
    )
}