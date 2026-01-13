"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Moon, DollarSign, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Manual state to track which link is currently active
  const [activeTab, setActiveTab] = useState("");

  // Set default active tab to Home on mount
  useEffect(() => {
    setActiveTab("Home");
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Instructors", href: "/instructors" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blogs", href: "/blog" },
  ];

  return (
    <header className="w-full bg-[#392C7D] text-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* LEFT: LOGO SECTION */}
        <Link
          href="/"
          onClick={() => setActiveTab("Home")}
          className="flex items-center gap-2 sm:gap-3 group shrink-0"
        >
          <div className="relative flex items-center justify-center bg-white rounded-lg w-9 h-9 sm:w-10 sm:h-10 shadow-sm transition-transform group-hover:scale-105">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
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
          <div className="flex flex-col leading-tight">
            <span className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">
              Ultimate
            </span>
            <span className="text-[10px] sm:text-sm font-light text-[#FF5B5C] uppercase tracking-[0.2em]">
              Learning
            </span>
          </div>
        </Link>

        {/* CENTER: NAVIGATION (Desktop Only) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <div
                key={link.name}
                className="relative group flex items-center gap-1 cursor-pointer"
                onClick={() => setActiveTab(link.name)}
              >
                <Link
                  href={link.href}
                  className={`text-[20px] font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-[#FF5B5C]"
                      : "text-white/90 hover:text-[#FF5B5C]"
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* RIGHT: ACTIONS & AUTH */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:flex items-center gap-2 mr-1">
            <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full transition-all hover:bg-gray-100 shadow-sm overflow-hidden p-1.5">
              <img
                src="https://flagcdn.com/w80/iq.png"
                alt="Iraq Flag"
                className="w-full h-full object-cover rounded-full"
              />
            </button>

            <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full text-[#392C7D] transition-all hover:bg-gray-100 shadow-sm">
              <div className="w-5 h-5 rounded-full border-[1.5px] border-[#392C7D] flex items-center justify-center">
                <DollarSign size={11} strokeWidth={3} />
              </div>
            </button>

            <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full text-slate-700 transition-all hover:bg-gray-100 shadow-sm">
              <Moon size={16} fill="currentColor" className="text-slate-800" />
            </button>

            <div className="relative group">
              <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full text-slate-700 transition-all hover:bg-gray-100 shadow-sm">
                <ShoppingCart size={16} />
              </button>
              <span className="absolute -top-1 -right-1 bg-[#1AB69D] text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-[#392C7D]">
                1
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/login"
              className="hidden sm:block text-[14px] sm:text-[15px] font-medium text-white/90 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link href="/register">
              <button className="bg-[#FF5B5C] hover:bg-[#ff4646] text-white px-5 sm:px-8 py-2 sm:py-2.5 rounded-full text-[14px] sm:text-[15px] font-medium transition-all shadow-md active:scale-95">
                Register
              </button>
            </Link>

            <button
              className="lg:hidden p-1.5 text-white transition-colors hover:bg-white/10 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#2D2264] border-t border-white/10 px-6 py-8 flex flex-col gap-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveTab(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-xl font-bold flex justify-between items-center transition-colors ${
                    isActive
                      ? "text-[#FF5B5C]"
                      : "text-white/90 hover:text-[#FF5B5C]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <hr className="border-white/10" />

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 mb-2">
              <button className="flex items-center gap-2 text-white/80">
                <Moon size={18} /> Theme
              </button>
              <button className="flex items-center gap-2 text-white/80">
                <ShoppingCart size={18} /> Cart
              </button>
            </div>

            <Link
              href="/login"
              className="text-lg font-medium text-white/90 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full bg-[#FF5B5C] py-3.5 rounded-full font-bold text-center text-lg shadow-lg">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
