import EventCardContainer from "./EventCardContainer";
import SectionHeading from "../common/SectionHeading";

export default function EventCatering() {

    const eventData = [
        {icon: "/images/Event-card-icons/wedding.png", title: "Weddings & Engagements", imageAlt: "Weddings & Engagements"},
        {icon: "/images/Event-card-icons/birthday.png", title: "Birthday & Anniversary", imageAlt: "Birthday & Anniversary"},
        {icon: "/images/Event-card-icons/religious.png", title: "Religious Gatherings", imageAlt: "Religious Gatherings"},
        {icon: "/images/Event-card-icons/coporate.png", title: "Corporate Events", imageAlt: "Corporate Events"},
        {icon: "/images/Event-card-icons/house-warmings.png", title: "Housewarmings & More", imageAlt: "Housewarmings & More"}
    ]
    return (
        <div className="sv-band mx-auto px-6 pb-14 sm:px-10 md:px-20 lg:px-30">
            <SectionHeading
              className="py-10"
              eyebrow="Every occasion"
              title="Events We Cater To"
            />
            <EventCardContainer events={eventData} />
        </div>
    )
}
