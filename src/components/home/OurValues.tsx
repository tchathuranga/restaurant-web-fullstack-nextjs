import { Lora } from 'next/font/google';
import CardContainer, { Card } from './CardContainer';

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

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
    <div className="text-center px-4 md:px-10 lg:px-30 py-20 relative" style={{ backgroundColor: '#FFF1D6' }}>
      <h2 className={`font-bold mb-8 text-gray-900 ${lora.className}`} style={{ fontSize: '34px' }}>Our Values</h2>
      <CardContainer cards={cards} />
    </div>
  );
};
export default OurValues;