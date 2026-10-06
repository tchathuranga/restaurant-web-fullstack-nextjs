"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  NAVIGATION_LINKS,
  FOOD_MENU_ITEMS,
} from "@/const/headerContens";
import { getAllNews } from "@/services/newsService";
import { NewsProps } from "@/interfaces/news";

type OrderOption = "Uber" | "PickMe";

const ORDER_OPTIONS: OrderOption[] = ["Uber", "PickMe"];

const BRANCHES = [
  {
    id: 1,
    name: "Sri Vihar – Thummulla",
    address: "3, Sri Sambuddhathva Jayanthi Mawatha, Colombo 05, Sri Lanka",
    hours: "10:00 AM - 10:00 PM",
    phone: "+94 11 259 6597",
    orderLinks: {
      Uber: "https://www.ubereats.com/lk/store/sri-vihar-havelock/SAO0JNhOQeKKtYKeE4V0IA",
      PickMe: "https://food.pickme.lk/",
    },
  },
  {
    id: 2,
    name: "Sri Vihar – Nugegoda",
    address: "280 High Level Road, Nugegoda, Sri Lanka",
    hours: "10:00 AM - 10:00 PM",
    phone: "+94 11 282 9298",
    orderLinks: {
      Uber: "https://www.ubereats.com/lk/store/sri-vihar-nugegoda/xEm-qJG8SvaLzY_A7aV_sA",
      PickMe: "https://food.pickme.lk/",
    },
  },
  {
    id: 3,
    name: "Sri Vihar – Kelaniya",
    address: "No 10, Vihara MAwatha, Kelaniya",
    hours: "10:00 AM - 10:00 PM",
    phone: "0112 269 099",
    orderLinks: {
      Uber: "https://www.ubereats.com/lk/search?q=Sri%20Vihar%20Kelaniya",
      PickMe: "https://food.pickme.lk/",
    },
  },
  {
    id: 4,
    name: "Sri Vihar – Dehiwala",
    address: "No 27, Station road, Dehiwala",
    hours: "10:00 AM - 10:00 PM",
    phone: "0112 734 343",
    orderLinks: {
      Uber: "https://www.ubereats.com/lk/search?q=Sri%20Vihar%20Dehiwala",
      PickMe: "https://food.pickme.lk/",
    },
  },
  {
    id: 5,
    name: "Sri Vihar – Wattala",
    address: "No 313, Negombo road, Wattala",
    hours: "10:00 AM - 10:00 PM",
    phone: "0112 949 422",
    orderLinks: {
      Uber: "https://www.ubereats.com/lk/search?q=Sri%20Vihar%20Wattala",
      PickMe: "https://food.pickme.lk/",
    },
  },
];

const ORDER_OPTION_LINK_CLASS =
  "block w-full rounded-2xl border border-gold/40 bg-ivory px-3 py-2.5 text-center text-sm text-ink hover:bg-cream";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showOpeningHours, setShowOpeningHours] = useState(false);
  const [showOrderOnline, setShowOrderOnline] = useState(false);
  const [showFoodMenu, setShowFoodMenu] = useState(false);
  const [selectedOrderBranch, setSelectedOrderBranch] = useState<number | null>(null);
  const [activeLink, setActiveLink] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [newsData, setNewsData] = useState<NewsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllNews();
        if (result.success) {
          setNewsData(result.data || []);
        } else {
          console.log("Failed to fetch News");
        }
      } catch (err: any) {
        console.log("Failed to fetch News");
      }
    };

    fetchData();
  }, []);

  const handleFoodMenuItemClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, dishName: string) => {
      event.preventDefault();

      const encodedCategory = encodeURIComponent(dishName);
      setActiveLink("Food Menu");
      setShowFoodMenu(false);
      setShowMobileMenu(false);

      if (pathname === "/food-menu") {
        window.dispatchEvent(
          new CustomEvent("food-menu-select", { detail: dishName }),
        );
      } else {
        router.push(`/food-menu?category=${encodedCategory}`);
      }
    },
    [pathname, router],
  );

  const selectedBranch =
    BRANCHES.find((branch) => branch.id === selectedOrderBranch) ?? null;

  const closeOrderOnline = () => {
    setShowOrderOnline(false);
    setShowMobileMenu(false);
  };

  return (
    <header className="relative z-50 border-b  bg-ivory/95 backdrop-blur-md">
      {/* <div className="h-1.5 bg-gradient-to-r from-maroon via-saffron to-gold" /> */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center">
          <Link href="/" className="cursor-pointer" onClick={() => setActiveLink("")}>
            <Image
              src="/images/Logo/Logo.png"
              alt="Sri Vihar Logo"
              width={200}
              height={60}
              className="object-contain lg:w-[380px] lg:h-[140px]"
              priority
            />
          </Link>
        </div>
      </div>
      {/* <div className="sv-gold-rule mx-auto w-4/5" /> */}

      <div className="container mx-auto kolam-border px-4 py-3 pb-8">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center relative">
          {/* Opening Hours Button - Left (Absolute positioned) */}
          <div className="absolute left-0">
            <button
              onClick={() => setShowOpeningHours(!showOpeningHours)}
              onMouseEnter={() => setShowOpeningHours(!showOpeningHours)}
              className="sv-btn-outline text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Find out our opening hours</span>
            </button>

            {/* Branches Dropdown */}
            {showOpeningHours && (
              <div className="absolute top-full left-0 z-50 mt-2 w-[28rem] max-w-[calc(100vw-1rem)] overflow-hidden rounded-3xl border border-gold/40 bg-ivory shadow-xl">
                <div className="p-4">
                  <h3 className="sv-heading mb-3 text-lg">
                    Branches & Opening Hours
                  </h3>
                  <div className="space-y-3">
                    {BRANCHES.map((branch) => (
                      <div key={branch.id} className="rounded-2xl border border-gold/30 bg-cream/70 p-3">
                        <p className="text-sm font-semibold text-maroon">{branch.name}</p>
                        <p className="pr-18 text-sm text-ink-muted">{branch.address}</p>
                        <p className="text-sm text-ink-muted">Hours: {branch.hours}</p>
                        <p className="text-sm text-ink-muted">Phone: {branch.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Links - Center */}
          <nav className="flex space-x-8 items-center">
            {/* Home Link */}
            {/* <Link
              href="/"
              onClick={() => setActiveLink("Home")}
              className={`text-sm font-medium transition-colors whitespace-nowrap ${
                activeLink === "Home"
                  ? "text-[#F67A08]"
                  : "text-gray-700 hover:text-[#F67A08]"
              }`}
            >
              Home
            </Link> */}

            {/* Food Menu Dropdown */}
            <div className="relative">
              <div className="flex items-center">
                <Link
                  href="/food-menu"
                  onClick={() => setActiveLink("Food Menu")}
                  onMouseEnter={() => setShowFoodMenu(!showFoodMenu)}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    activeLink === "Food Menu"
                      ? "text-saffron"
                      : "text-ink hover:text-saffron"
                  }`}
                >
                  Food Menu
                </Link>
                <button
                  onClick={() => setShowFoodMenu(!showFoodMenu)}
                  className="ml-1 text-ink hover:text-saffron transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Food Menu Dropdown */}
              {showFoodMenu && (
                <div className="absolute top-full left-0 z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-gold/40 bg-ivory shadow-xl">
                  <div className="py-2">
                    {FOOD_MENU_ITEMS.map((item) => {
                      const encodedHref = `/food-menu?category=${encodeURIComponent(
                        item.name,
                      )}`;
                      return (
                        <Link
                          key={item.name}
                          href={encodedHref}
                          onClick={(event) =>
                            handleFoodMenuItemClick(event, item.name)
                          }
                          className="block px-4 py-2.5 text-sm text-ink transition-colors hover:bg-cream hover:text-maroon"
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
            {NAVIGATION_LINKS.filter(
              (link) =>
                link.name !== "News Feed" ||
                (link.name === "News Feed" && newsData.length > 0),
            ).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`whitespace-nowrap text-sm font-medium tracking-wide transition-colors ${
                  activeLink === link.name
                    ? "text-saffron"
                    : "text-ink hover:text-saffron"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Order Online Button - Right (Absolute positioned) */}
          <div className="absolute right-0">
            <button
              type="button"
              onClick={() => setShowOrderOnline(!showOrderOnline)}
              onMouseEnter={() => setShowOrderOnline(!showOrderOnline)}
              className="sv-btn px-4 text-xs sm:text-sm"
            >
              <ShoppingBag size={16} className="text-white" />
              <span>Order Online</span>
            </button>

            {showOrderOnline && (
              <div className="absolute top-full right-0 z-50 mt-2 w-[32rem] max-w-[calc(100vw-1rem)] overflow-hidden rounded-3xl border border-gold/40 bg-ivory shadow-xl">
                <div className="grid gap-4 p-4 md:grid-cols-[1.1fr_1.4fr]">
                  <div className="rounded-2xl border border-gold/30 bg-cream/70 p-4">
                    <p className="sv-eyebrow mb-3">
                      Order options
                    </p>
                    {selectedBranch ? (
                      <div className="grid gap-2">
                        {ORDER_OPTIONS.map((option) => (
                          <a
                            key={option}
                            href={selectedBranch.orderLinks[option]}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeOrderOnline}
                            className={ORDER_OPTION_LINK_CLASS}
                          >
                            {option}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-ink-muted">
                        Select a branch on the right to show online ordering options.
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="sv-heading mb-3 text-lg">Order online from a branch</h3>
                    <div className="space-y-2">
                      {BRANCHES.map((branch) => (
                        <button
                          key={branch.id}
                          type="button"
                          onClick={() => setSelectedOrderBranch((current) => current === branch.id ? null : branch.id)}
                          className={`w-full rounded-2xl border px-3 py-3 text-left transition ${
                            selectedOrderBranch === branch.id
                              ? "border-saffron bg-cream"
                              : "border-gold/30 bg-parchment/70 hover:border-gold hover:bg-cream"
                          }`}
                        >
                          <p className="text-sm font-semibold text-maroon">{branch.name}</p>
                          <p className="text-sm text-ink-muted">{branch.address}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Opening Hours Button - Left */}
          <div className="relative">
            <button
              onClick={() => setShowOpeningHours(!showOpeningHours)}
              className="sv-btn-outline px-3 text-xs"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Branches</span>
            </button>

            {/* Branches Dropdown */}
            {showOpeningHours && (
              <div className="absolute top-full left-0 z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-gold/40 bg-ivory shadow-lg">
                <div className="p-4">
                  <h3 className="sv-heading mb-3 text-lg">
                    Branches & Opening Hours
                  </h3>
                  <div className="space-y-3">
                    {BRANCHES.map((branch) => (
                      <div key={branch.id} className="rounded-2xl border border-gold/30 bg-cream/70 p-3">
                        <p className="text-sm font-semibold text-maroon">{branch.name}</p>
                        <p className="text-sm text-ink-muted">{branch.address}</p>
                        <p className="text-sm text-ink-muted">Hours: {branch.hours}</p>
                        <p className="text-sm text-ink-muted">Phone: {branch.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative ml-2 flex-1">
            <button
              type="button"
              onClick={() => setShowOrderOnline((open) => !open)}
              className="sv-btn w-full px-3 text-xs sm:text-sm"
            >
              <ShoppingBag size={16} className="text-white" />
              <span>Order Online</span>
            </button>

            {showOrderOnline && (
              <div className="fixed left-1/2 top-20 z-50 w-[min(92vw,26rem)] -translate-x-1/2 rounded-2xl border border-gold/40 bg-ivory shadow-lg">
                <div className="p-4">
                  <h3 className="sv-heading mb-3 text-lg">Order Online</h3>
                  <div className="space-y-2">
                    {BRANCHES.map((branch) => (
                      <button
                        key={branch.id}
                        type="button"
                        onClick={() => setSelectedOrderBranch((current) => current === branch.id ? null : branch.id)}
                        className={`w-full rounded-2xl border px-3 py-3 text-left transition ${
                          selectedOrderBranch === branch.id
                            ? "border-saffron bg-cream"
                            : "border-gold/30 bg-parchment/70 hover:border-gold hover:bg-cream"
                        }`}
                      >
                        <p className="text-sm font-semibold text-maroon">{branch.name}</p>
                        <p className="text-sm text-ink-muted">{branch.address}</p>
                      </button>
                    ))}
                  </div>
                  {selectedBranch && (
                    <div className="mt-4 rounded-2xl border border-gold/30 bg-cream/70 p-3">
                      <p className="sv-eyebrow mb-2">Choose delivery option</p>
                      <div className="grid gap-2">
                        {ORDER_OPTIONS.map((option) => (
                          <a
                            key={option}
                            href={selectedBranch.orderLinks[option]}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeOrderOnline}
                            className={ORDER_OPTION_LINK_CLASS}
                          >
                            {option}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Hamburger Menu Button - Right */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 text-ink hover:text-saffron transition-colors"
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {showMobileMenu && (
          <div className="relative z-50 mt-4 rounded-2xl border border-gold/40 bg-ivory shadow-lg lg:hidden">
            <div className="py-2">
              {/* Home Link */}
              <Link
                href="/"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLink("Home");
                  setShowMobileMenu(false);
                }}
                className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeLink === "Home"
                    ? "text-saffron"
                    : "text-ink hover:text-saffron"
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
                      setActiveLink("Food Menu");
                      setShowMobileMenu(false);
                    }}
                    className={`text-sm font-medium transition-colors ${
                      activeLink === "Food Menu"
                        ? "text-saffron"
                        : "text-ink hover:text-saffron"
                    }`}
                  >
                    Food Menu
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowFoodMenu(!showFoodMenu);
                    }}
                    className="p-1 text-ink hover:text-saffron transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Food Menu Dropdown in Mobile */}
                {showFoodMenu && (
                  <div className="border-t border-gold/30 bg-cream/60">
                    {FOOD_MENU_ITEMS.map((item) => {
                      const encodedHref = `/food-menu?category=${encodeURIComponent(
                        item.name,
                      )}`;
                      return (
                        <Link
                          key={item.name}
                          href={encodedHref}
                          onClick={(event) => {
                            event.stopPropagation();
                            handleFoodMenuItemClick(event, item.name);
                          }}
                          className="block px-8 py-2.5 text-sm text-ink-muted transition-colors hover:bg-cream hover:text-maroon"
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              {NAVIGATION_LINKS.filter(
                (link) =>
                  link.name !== "News Feed" ||
                  (link.name === "News Feed" && newsData.length > 0),
              ).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveLink(link.name);
                    setShowMobileMenu(false);
                  }}
                  className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeLink === link.name
                      ? "text-saffron"
                      : "text-ink hover:text-saffron"
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
      {(showOpeningHours || showOrderOnline || showFoodMenu || showMobileMenu) && (
        <div
          className="fixed inset-0 z-40"
          onClick={(e) => {
            // Only close if clicking directly on the overlay, not on child elements
            if (e.target === e.currentTarget) {
              setShowOpeningHours(false);
              setShowOrderOnline(false);
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
