import { FoodMenuItemsProps } from "@/interfaces/header";

export const NAVIGATION_LINKS = [
    { name: 'Outdoor Catering', href: '/outdoor-catering' },
    { name: 'Join the Team', href: '/join-the-team' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'News Feed', href: '/news-feed' },
    { name: 'Our Story', href: '/our-story' },
];

export const FOOD_MENU_ITEMS : FoodMenuItemsProps[] = [
    { name: 'All', href: '/food-menu' },
    { name: 'Cafe Items', href: '/food-menu/Cafe Items' },
    { name: 'North Indian', href: '/food-menu/north-Indian' },
    { name: 'South Indian', href: '/food-menu/south-Indian' },
    { name: 'Cakes', href: '/food-menu/Cakes' },
    { name: 'Ice Cream', href: '/food-menu/Ice Cream' },
    { name: 'Chaat Items', href: '/food-menu/Chaat Items' },
    { name: 'Juices', href: '/food-menu/Juices' },
    { name: 'Sweets', href: '/food-menu/Sweets' },
];

export const OPENING_HOURS: string[] = [
    'Monday - Friday: 11:00 AM - 10:00 PM',
    'Saturday: 10:00 AM - 11:00 PM',
    'Sunday: 10:00 AM - 9:00 PM'
  ];