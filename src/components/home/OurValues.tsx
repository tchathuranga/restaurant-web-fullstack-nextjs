import CardContainer, { Card } from './CardContainer';
import SectionHeading from '../common/SectionHeading';

const cards: Card[] = [
  {
    icon: "/images/icons/vegetarian.png",
    title: "Vegetarian Friendly",
    desc: "Wide selection of vegetarian specialties",
  },
  {
    icon: "/images/icons/meal-types.png",
    title: "Meal Types",
    desc: "Serving breakfast, lunch and dinner",
  },
  {
    icon: "/images/icons/event-catering.png",
    title: "Event Catering",
    desc: "Professional catering for any event",
  },
  {
    icon: "/images/icons/quality-food.png",
    title: "Quality Food",
    desc: "Fresh ingredients and authentic recipes",
  },
  {
    icon: "/images/icons/takeaway.png",
    title: "Takeaway Available",
    desc: "Convenient pickup and delivery options",
  },
  {
    icon: "/images/icons/premium-service.png",
    title: "Premium Service",
    desc: "Professional and friendly staff",
  },
];

const OurValues = () => {
  return (
    <div className="sv-band relative px-4 py-20 md:px-10 lg:px-30">
      <SectionHeading
        className="mb-10"
        eyebrow="What we stand for"
        title="Our Values"
        subtitle="Hospitality, freshness, and recipes passed down with care."
      />
      <CardContainer cards={cards} />
    </div>
  );
};
export default OurValues;
