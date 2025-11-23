"use client";

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { NAVIGATION_LINKS, FOOD_MENU_ITEMS, OPENING_HOURS } from '@/const/headerContens';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showOpeningHours, setShowOpeningHours] = useState(false);
  const [showFoodMenu, setShowFoodMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleFoodMenuItemClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, dishName: string) => {
      event.preventDefault();

      const encodedCategory = encodeURIComponent(dishName);
      setActiveLink('Food Menu');
      setShowFoodMenu(false);
      setShowMobileMenu(false);

      if (pathname === '/food-menu') {
        window.dispatchEvent(
          new CustomEvent('food-menu-select', { detail: dishName })
        );
      } else {
        router.push(`/food-menu?category=${encodedCategory}`);
      }
    },
    [pathname, router]
  );

  return (
    <header className="bg-white relative z-50">
      {/* Top section with logo */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/images/Logo.png"
              alt="Sri Vihar Logo"
              width={150}
              height={60}
              className="object-contain lg:w-[190px] lg:h-[80px]"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Bottom section with navigation */}
      <div className="container mx-auto pb-8 px-4 py-3">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center relative">
          {/* Opening Hours Button - Left (Absolute positioned) */}
          <div className="absolute left-0">
            <button
              onClick={() => setShowOpeningHours(!showOpeningHours)}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium bg-white border-2 border-[#F67A08] text-[#F67A08] hover:bg-gray-50 rounded-md transition-colors"
              style={{ borderColor: '#F67A08', color: '#F67A08' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Find out our opening hours</span>
            </button>

            {/* Opening Hours Dropdown */}
            {showOpeningHours && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Opening Hours</h3>
                  {OPENING_HOURS.map((hours, index) => (
                    <p key={index} className="text-sm text-gray-600 mb-1">
                      {hours}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Links - Center */}
          <nav className="flex space-x-8 items-center">
            {/* Home Link */}
            <Link
              href="/"
              onClick={() => setActiveLink('Home')}
              className={`text-sm font-medium transition-colors whitespace-nowrap ${
                activeLink === 'Home' 
                  ? 'text-[#F67A08]' 
                  : 'text-gray-700 hover:text-[#F67A08]'
              }`}
            >
              Home
            </Link>

            {/* Food Menu Dropdown */}
            <div className="relative">
              <div className="flex items-center">
                <Link
                  href="/food-menu"
                  onClick={() => setActiveLink('Food Menu')}
                  className={`text-sm font-medium transition-colors ${
                    activeLink === 'Food Menu' 
                      ? 'text-[#F67A08]' 
                      : 'text-gray-700 hover:text-[#F67A08]'
                  }`}
                >
                  Food Menu
                </Link>
                <button
                  onClick={() => setShowFoodMenu(!showFoodMenu)}
                  className="ml-1 text-gray-700 hover:text-[#F67A08] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Food Menu Dropdown */}
              {showFoodMenu && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-2">
                    {FOOD_MENU_ITEMS.map((item) => {
                      const encodedHref = `/food-menu?category=${encodeURIComponent(
                        item.name
                      )}`;
                      return (
                        <Link
                          key={item.name}
                          href={encodedHref}
                          onClick={(event) =>
                            handleFoodMenuItemClick(event, item.name)
                          }
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  activeLink === link.name 
                    ? 'text-[#F67A08]' 
                    : 'text-gray-700 hover:text-[#F67A08]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Opening Hours Button - Left */}
          <div className="relative">
            <button
              onClick={() => setShowOpeningHours(!showOpeningHours)}
              className="flex items-center space-x-2 px-3 py-2 text-xs font-medium bg-white border-2 border-[#F67A08] text-[#F67A08] hover:bg-gray-50 rounded-md transition-colors"
              style={{ borderColor: '#F67A08', color: '#F67A08' }}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Hours</span>
            </button>

            {/* Opening Hours Dropdown */}
            {showOpeningHours && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Opening Hours</h3>
                  {OPENING_HOURS.map((hours, index) => (
                    <p key={index} className="text-sm text-gray-600 mb-1">
                      {hours}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Hamburger Menu Button - Right */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 text-gray-700 hover:text-[#F67A08] transition-colors"
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {showMobileMenu && (
          <div className="lg:hidden mt-4 bg-white border border-gray-200 rounded-md shadow-lg relative z-50">
            <div className="py-2">
              {/* Home Link */}
              <Link
                href="/"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLink('Home');
                  setShowMobileMenu(false);
                }}
                className={`block px-4 py-2 text-sm font-medium transition-colors ${
                  activeLink === 'Home' 
                    ? 'text-[#F67A08]' 
                    : 'text-gray-700 hover:text-[#F67A08]'
                }`}
              >
                Home
              </Link>

              {/* Food Menu with dropdown */}
              <div className="relative">
                <div className="flex items-center justify-between px-4 py-2">
                  <Link
                    href="/food-menu"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveLink('Food Menu');
                      setShowMobileMenu(false);
                    }}
                    className={`text-sm font-medium transition-colors ${
                      activeLink === 'Food Menu' 
                        ? 'text-[#F67A08]' 
                        : 'text-gray-700 hover:text-[#F67A08]'
                    }`}
                  >
                    Food Menu
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowFoodMenu(!showFoodMenu);
                    }}
                    className="p-1 text-gray-700 hover:text-[#F67A08] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                {/* Food Menu Dropdown in Mobile */}
                {showFoodMenu && (
                  <div className="bg-gray-50 border-t border-gray-200">
                    {FOOD_MENU_ITEMS.map((item) => {
                      const encodedHref = `/food-menu?category=${encodeURIComponent(
                        item.name
                      )}`;
                      return (
                        <Link
                          key={item.name}
                          href={encodedHref}
                          onClick={(event) => {
                            event.stopPropagation();
                            handleFoodMenuItemClick(event, item.name);
                          }}
                          className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveLink(link.name);
                    setShowMobileMenu(false);
                  }}
                  className={`block px-4 py-2 text-sm font-medium transition-colors ${
                    activeLink === link.name 
                      ? 'text-[#F67A08]' 
                      : 'text-gray-700 hover:text-[#F67A08]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {(showOpeningHours || showFoodMenu || showMobileMenu) && (
        <div
          className="fixed inset-0 z-40"
          onClick={(e) => {
            // Only close if clicking directly on the overlay, not on child elements
            if (e.target === e.currentTarget) {
              setShowOpeningHours(false);
              setShowFoodMenu(false);
              setShowMobileMenu(false);
            }
          }}
        />
      )}
    </header>
  );
};

export default Header;