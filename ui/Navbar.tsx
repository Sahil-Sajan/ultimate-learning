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
  CircleUserRound,
  User,
   Award,
  LogOut
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [cartCount, setCartCount] = useState(0);




  const navLinks = [
    { name: "Home", href: "/", hasDropdown: true, active: false },
    { name: "Courses", href: "/courses", hasDropdown: true, active: false },
    {
      name: "Instructors",
      href: "/instructors",
      hasDropdown: true,
      active: false,
    },
    { name: "Pricing", href: "/pricing", hasDropdown: true, active: false },
    { name: "Blogs", href: "/blog", hasDropdown: true, active: false },
  ];

  React.useEffect(() => {
  setMounted(true);

  const loggedIn = localStorage.getItem("isLoggedIn");
  setIsLoggedIn(!!loggedIn);

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  setCartCount(cart.length);
}, []);

React.useEffect(() => {
  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  };

  window.addEventListener("cartUpdated", updateCart);
  return () => window.removeEventListener("cartUpdated", updateCart);
}, []);



const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  setIsLoggedIn(false);
  setShowUserMenu(false);
};


if (!mounted) return null;

  return (
    <header className="w-full bg-[#392C7D] text-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* LEFT: LOGO SECTION */}
        <Link
          href="/"
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
            return (
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
                    className={`transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#FF5B5C] ${
                      link.active ? "text-[#FF5B5C] opacity-100" : "opacity-40"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* RIGHT: ACTIONS & AUTH */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Action Icons */}
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
              {cartCount > 0 && (
  <span className="absolute -top-1 -right-1 bg-[#1AB69D] text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-[#392C7D]">
    {cartCount}
  </span>
)}

            </div>
          </div>

        <div className="flex items-center gap-2 sm:gap-4 relative">
  {!isLoggedIn ? (
    <>
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
    </>
  ) : (
    <div className="relative">
      {/* USER ICON */}
      <button
        onClick={() => setShowUserMenu(!showUserMenu)}
        className="w-9 h-9 flex items-center justify-center bg-white rounded-full text-black shadow-sm"
      >
        < CircleUserRound size={18} />
      </button>

      {/* DROPDOWN */}
      {showUserMenu && (
        <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
          <Link
            href="/dashboard/profile"
            onClick={() => setShowUserMenu(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            <User size={14} />
            Profile
          </Link>

          <Link
            href="/dashboard"
            onClick={() => setShowUserMenu(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            <User size={14} />
            Dashboard
          </Link>

           <Link
            href="/dashboard/certificates"
            onClick={() => setShowUserMenu(false)}
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            <Award size={14} />
            Certificates
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      )}
    </div>
  )}

  {/* MOBILE MENU BUTTON (AS IT IS) */}
  <button
    className="lg:hidden p-1.5 text-white transition-colors hover:bg-white/10 rounded-md"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium flex justify-between items-center transition-colors ${
                    link.active
                      ? "text-[#FF5B5C]"
                      : "text-white/90 hover:text-[#FF5B5C]"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={18} className="opacity-50" />
                  )}
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
