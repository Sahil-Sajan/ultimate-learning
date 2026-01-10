"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ShoppingCart,
  Moon,
  DollarSign,
  Menu,
  X,
} from "lucide-react";

const categoriesData = [
  {
    name: "Software Development",
    sub: ["Web Development", "Mobile Apps", "Python Data Science", "Cloud Computing"],
  },
  {
    name: "Business & Marketing",
    sub: ["Digital Marketing", "SEO Strategy", "Financial Analysis", "Entrepreneurship"],
  },
  {
    name: "Design & Photography",
    sub: ["UI/UX Design", "Graphic Design", "Photoshop Masterclass", "Video Editing"],
  },
  {
    name: "Health & Fitness",
    sub: ["Yoga & Meditation", "Nutrition Plans", "Body Building", "Mental Health"],
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", hasDropdown: true, active: true },
    { name: "Courses", href: "#", hasDropdown: true },
    { name: "Dashboard", href: "#", hasDropdown: true },
    { name: "Pages", href: "#", hasDropdown: true },
    { name: "Blogs", href: "#", hasDropdown: true },
  ];

  return (
    <header className="w-full bg-[#392C7D] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">
        {/* LEFT: LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center bg-white rounded-lg w-10 h-10 shadow-sm transition-transform group-hover:scale-105">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 10L12 5L2 10L12 15L22 10Z"
                stroke="#FF5B5C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 12V17C6 17 8 19 12 19C16 19 18 17 18 17V12"
                stroke="#FF5B5C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold tracking-tight leading-none flex items-start">
              Ultimate
              <span className="text-[20px] text-[#FF5B5C] font-bold ml-1 uppercase">
                Learning
              </span>
            </span>
          </div>
        </Link>

        {/* CENTER: NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group flex items-center gap-1 cursor-pointer"
            >
              <Link
                href={link.href}
                className={`text-[15px] font-medium transition-colors duration-300 ${
                  link.active
                    ? "text-[#FF5B5C]"
                    : "text-white/90 hover:text-[#FF5B5C]"
                }`}
              >
                {link.name}
              </Link>
              {link.hasDropdown && (
                <ChevronDown
                  size={14}
                  className="opacity-40 group-hover:rotate-180 transition-transform duration-300 group-hover:text-[#FF5B5C]"
                />
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT: ACTIONS & AUTH */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3 mr-2">
            {/* CIRCULAR COUNTRY ICON (Iraq) */}
            <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full transition-all hover:bg-gray-100 shadow-sm overflow-hidden p-2">
              <img
                src="https://flagcdn.com/w80/iq.png"
                alt="Iraq Flag"
                className="w-full h-full object-cover rounded-full"
              />
            </button>

            <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#392C7D] transition-all hover:bg-gray-100 shadow-sm">
              <div className="w-5 h-5 rounded-full border-[1.5px] border-[#392C7D] flex items-center justify-center">
                <DollarSign size={11} strokeWidth={3} />
              </div>
            </button>

            <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-slate-700 transition-all hover:bg-gray-100 shadow-sm">
              <Moon size={18} fill="currentColor" className="text-slate-800" />
            </button>

            <div className="relative group">
              <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-slate-700 transition-all hover:bg-gray-100 shadow-sm">
                <ShoppingCart size={18} />
              </button>
              <span className="absolute -top-1 -right-1 bg-[#1AB69D] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#392C7D]">
                1
              </span>
            </div>
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-[15px] font-medium text-white/90 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="bg-[#FF5B5C] hover:bg-[#ff4646] text-white px-8 py-2.5 rounded-full text-[15px] font-medium transition-all shadow-md active:scale-95">
              Register
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#2D2264] border-t border-white/10 px-6 py-6 flex flex-col gap-5 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium flex justify-between items-center"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown size={16} className="opacity-50" />
              )}
            </Link>
          ))}
          <hr className="border-white/10" />
          <div className="flex flex-col gap-4">
            <button className="text-left font-medium">Sign In</button>
            <button className="bg-[#FF5B5C] py-3 rounded-full font-medium">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;