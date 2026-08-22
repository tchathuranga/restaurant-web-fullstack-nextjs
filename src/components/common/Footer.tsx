"use client";

import React from "react";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import {
  Phone,
  Mail,
  Facebook,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const BRANCHES = [
  "Thummulla",
  "Nugegoda",
  "Kelaniya",
  "Dehiwala",
  "Wattala"
];

export default function Footer() {
  return (
    <footer className="relative bg-[#F36A3A] text-white pt-12 pb-6 overflow-hidden">
      {/* decorative mandalas - place SVG/PNG in public/images */}
      <Image
        src="/images/decorative/mandala-icon-left.png"
        alt=""
        className="hidden lg:block absolute left-0 top-0 h-full pointer-events-none opacity-100"
        width={180}
        height={100}
      />

      <Image
        src="/images/decorative/mandala-icon-right.png"
        alt=""
        className="hidden lg:block absolute right-0 top-0 h-full pointer-events-none opacity-100"
        width={180}
        height={100}
      />

      <div className="container mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-40">
        {/* Mobile: Logo & Contact Section */}
        <div className="flex flex-col md:hidden mb-8 border-b border-white/20 pb-6 items-center">
          {/* Logo */}
          <div className="mb-5">
            <Image
              src="/images/Logo-white.png"
              alt="LOGO"
              width={140}
              height={40}
              className="w-32 h-auto"
            />
          </div>

          {/* Tagline */}
          <p
            className={`${notoSans.className} text-xs mb-5 text-white/80 leading-relaxed text-center`}
          >
            Authentic Indian cuisine served with love and tradition.
          </p>

          {/* Contact Info - More Organized */}
          <div className="mb-5 space-y-2 flex flex-col items-center">
            <div className="flex items-center gap-2.5 text-xs justify-start w-full">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-3 h-3 text-white/90" strokeWidth={2} />
              </div>
              <a
                href="tel:+941123456789"
                className={`text-white/80 ${notoSans.className}`}
              >
                +94 11 2345 6789
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs justify-start w-full">
              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-3 h-3 text-white/90" strokeWidth={2} />
              </div>
              <a
                href="mailto:info@srivihar.lk"
                className={`text-white/80 ${notoSans.className}`}
              >
                info@srivihar.lk
              </a>
            </div>
          </div>

          {/* Social Icons - Enhanced */}
          <div className="flex gap-5 justify-center">
            {/* <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:bg-white/20 hover:border-white/60 transition-all duration-200"
            >
              <Instagram className="w-4 h-4" strokeWidth={2.5} />
            </a> */}

            <a
              href="https://www.facebook.com/share/1DsUBgNnQk/"
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:bg-white/20 hover:border-white/60 transition-all duration-200"
            >
              <Facebook
                className="w-4 h-4"
                strokeWidth={1.5}
                fill="currentColor"
              />
            </a>

            {/* <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white/80 hover:bg-white/20 hover:border-white/60 transition-all duration-200"
            >
              <Twitter
                className="w-4 h-4"
                strokeWidth={1.5}
                fill="currentColor"
              />
            </a> */}
          </div>
        </div>

        {/* Mobile: Branches Section */}
        <div className="flex flex-col md:hidden mb-8 border-b border-white/20 pb-6 items-center">
          <h4 className={`font-semibold mb-3 text-sm ${notoSans.className}`}>
            Branches
          </h4>
          <div className="flex gap-10 w-full justify-center">
            {[BRANCHES.slice(0, 3), BRANCHES.slice(3)].map((column, index) => (
              <div key={index}>
                <ul className="space-y-2 text-xs">
                  {column.map((branch) => (
                    <li
                      key={branch}
                      className={`flex items-start gap-2 ${notoSans.className}`}
                    >
                      <MapPin
                        className="w-3.5 h-3.5 text-white/80 flex-shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span className="text-white/90">{branch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Order Now Section */}
        <div className="flex flex-col md:hidden pb-2 items-center">
          <h4 className={`font-semibold mb-3 text-sm ${notoSans.className}`}>
            Order Now
          </h4>
          <div className="flex gap-5 items-center justify-center">
            <Link
              href="https://shorturl.at/MAj5h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-lg p-3 bg-white/15 transition-colors cursor-pointer hover:bg-white/20">
                <Image
                  src="/images/icons/uber.png"
                  alt="Uber Eats"
                  width={56}
                  height={36}
                  className="object-contain hover:opacity-80 transition-opacity"
                />
              </div>
            </Link>
            {/* <div className="rounded-lg p-3 bg-white/15  transition-colors">
              <Image
                src="/images/icons/pickme.png"
                alt="Pick Me"
                width={56}
                height={36}
                className="object-contain hover:opacity-80 transition-opacity"
              />
            </div> */}
          </div>
        </div>

        {/* Main Grid: Branches, Links, Delivery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-2 md:gap-0 mb-6">
          {/* Desktop: Logo & Contact Section */}
          <div className="hidden md:flex flex-col space-y-4 md:pr-6 lg:pr-8">
            <Image
              src="/images/Logo-white.png"
              alt="LOGO"
              width={160}
              height={36}
              className="w-32 h-auto"
            />

            <p className={`${notoSans.className} text-sm text-white/90`}>
              Authentic Indian cuisine served with love and tradition.
            </p>

            <div className="text-xs space-y-3">
              <div className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 text-white/80 flex-shrink-0"
                  strokeWidth={1.5}
                  fill="currentColor"
                />
                <a
                  href="tel:+941123456789"
                  className={`text-white/80 ${notoSans.className}`}
                >
                  +94 11 2345 6789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/80 flex-shrink-0" />
                <a
                  href="mailto:info@srivihar.lk"
                  className={`text-white/80 ${notoSans.className}`}
                >
                  info@srivihar.lk
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-2">
              {/* <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center text-white/90 hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={2.5} />
              </a> */}
              <a
                href="https://www.facebook.com/share/1DsUBgNnQk/"
                className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center text-white/90 hover:bg-white/20 transition-colors"
              >
                <Facebook
                  className="w-4 h-4"
                  strokeWidth={1.5}
                  fill="currentColor"
                />
              </a>
              {/* <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center text-white/90 hover:bg-white/20 transition-colors"
              >
                <Twitter
                  className="w-4 h-4"
                  strokeWidth={1.5}
                  fill="currentColor"
                />
              </a> */}
            </div>
          </div>

          {/* Branches */}
          <div className="hidden md:flex flex-col md:pr-6 lg:pr-8">
            <h4
              className={`font-semibold mb-3 text-sm sm:text-base ${notoSans.className}`}
            >
              Branches
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {BRANCHES.map((branch) => (
                <li
                  key={branch}
                  className={`flex items-start gap-2 ${notoSans.className}`}
                >
                  <MapPin
                    className="w-3.5 h-3.5 text-white/80 flex-shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <span className="text-white/90">{branch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="hidden md:flex flex-col md:pr-6 lg:pr-8">
            <h4
              className={`font-semibold mb-3 text-sm sm:text-base ${notoSans.className}`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="/"
                  className={`text-white/90 hover:text-white transition-colors ${notoSans.className}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/outdoor-catering"
                  className={`text-white/90 hover:text-white transition-colors ${notoSans.className}`}
                >
                  Outdoor Catering
                </a>
              </li>
              <li>
                <a
                  href="/join-the-team"
                  className={`text-white/90 hover:text-white transition-colors ${notoSans.className}`}
                >
                  Join the Team
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className={`text-white/90 hover:text-white transition-colors ${notoSans.className}`}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/our-story"
                  className={`text-white/90 hover:text-white transition-colors ${notoSans.className}`}
                >
                  Our Story
                </a>
              </li>
            </ul>
          </div>

          {/* Available On - with full height divider */}
          <div className="hidden md:flex flex-col col-span-2 md:col-span-1 border-t md:border-t-0 border-white/20 pt-4 md:pt-0 md:pl-0">
            <h4
              className={`font-semibold mb-3 text-sm sm:text-base ${notoSans.className}`}
            >
              Order Now
            </h4>
            <div className="flex gap-2 items-center">
              <Link
                href="https://shorturl.at/MAj5h"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-lg p-3 bg-white/15 transition-colors cursor-pointer hover:bg-white/20">
                  <Image
                    src="/images/icons/uber.png"
                    alt="Uber Eats"
                    width={56}
                    height={36}
                    className="object-contain hover:opacity-80 transition-opacity"
                  />
                </div>
              </Link>
              {/* <div className="rounded-lg p-3 bg-white/15  transition-colors">
                <Image
                  src="/images/icons/pickme.png"
                  alt="Pick Me"
                  width={36}
                  height={36}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain hover:opacity-80 transition-opacity"
                />
              </div> */}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 text-center border-t border-white/20">
          <p className={`text-xs text-white/70 ${notoSans.className}`}>
            &copy; {new Date().getFullYear()} Sri Vihar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
