"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  ChevronDown,
  User,
  Heart,
  Settings,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const pathname = usePathname();

  // Check if we are on the Home page
  const isHome = pathname === "/";

  // Dynamic Styles
  const topBarBg = isHome
    ? "bg-black/20 border-white/10"
    : "bg-[#2d2d2d] border-gray-700";
  const mainNavBg = isHome ? "bg-transparent" : "bg-[#1a1a1a]";
  const textColor = isHome ? "text-white" : "text-white";
  const subTextColor = isHome ? "text-gray-300" : "text-gray-400";

  return (
    <header
      className={`relative z-50 w-full ${
        isHome ? "absolute top-0 left-0" : ""
      }`}
    >
      {/* Top Utility Bar */}
      <div
        className={`${topBarBg} text-gray-300 py-2 px-6 flex justify-between items-center text-xs border-b backdrop-blur-sm transition-colors duration-500`}
      >
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition">
          English <ChevronDown size={14} />
        </div>
        <div className="flex items-center gap-6">
          <ul className="hidden lg:flex items-center gap-6 text-[13px] font-medium">
            {["Home", "Courses", "Course Formats", "Memberships"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item}
                </li>
              )
            )}
            <li className="relative hover:text-white cursor-pointer transition">
              Add Course{" "}
              <span className="absolute -top-3 -right-4 bg-pink-600 text-[10px] text-white px-1 rounded uppercase font-bold">
                Hot
              </span>
            </li>
          </ul>
          <div className="flex items-center gap-3 border-l border-white/20 pl-6 cursor-pointer">
            <Twitter size={14} className="hover:text-white" />
            <Instagram size={14} className="hover:text-white" />
            <Linkedin size={14} className="hover:text-white" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`${mainNavBg} py-6 px-6 flex items-center justify-between gap-4 container mx-auto transition-colors duration-500`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 min-w-fit cursor-pointer">
          <div className="bg-white text-black p-1.5 rounded-sm font-bold text-xl">
            <span className="border-2 border-black px-1">MS</span>
          </div>
          <div className="flex flex-col leading-none uppercase">
            <span className={`text-2xl font-bold ${textColor}`}>Master</span>
            <span
              className={`text-xl font-light tracking-[0.2em] ${subTextColor}`}
            >
              Study
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-2xl items-center h-12 ml-4">
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="bg-gray-100 text-[#3858e9] font-bold px-5 h-full flex items-center gap-2 rounded-l-sm hover:bg-white transition"
          >
            <Menu size={18} />
            <span className="text-xs tracking-widest uppercase">Category</span>
          </button>
          <input
            type="text"
            placeholder="Search courses"
            className="flex-1 h-full px-4 text-black outline-none text-sm font-medium"
          />
          <button className="bg-[#3858e9] h-full px-6 flex items-center justify-center rounded-r-sm hover:bg-blue-600 text-white transition">
            <Search size={20} />
          </button>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-6 ml-2">
          <div className="relative bg-[#3858e9] flex items-center gap-2 py-2.5 px-5 rounded-full cursor-pointer hover:bg-blue-600 transition shadow-lg">
            <User size={18} className="text-white" />
            <span className="text-xs font-bold text-white hidden sm:inline">
              Hey, Demo Instructor
            </span>
            <ChevronDown size={14} className="text-white" />
            <span className="absolute -top-1 -right-1 bg-blue-400 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#1e293b]">
              16
            </span>
          </div>
          <Heart
            size={24}
            className={`${textColor} cursor-pointer hover:text-red-400`}
          />
          <Settings
            size={24}
            className={`${textColor} cursor-pointer hover:rotate-90 transition-transform duration-500`}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
