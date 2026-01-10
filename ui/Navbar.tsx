"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, Menu, ChevronDown, User, Heart, Settings, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
        setActiveSubMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative z-50 w-full bg-white shadow-md border-b border-gray-100">
      <div className="py-4 px-6 md:px-10 flex items-center justify-between gap-4 max-w-[1440px] mx-auto">
        
        {/* LOGO SECTION */}
        <div className="flex items-center gap-3 min-w-fit cursor-pointer group">
          <div className="border-2 border-[#f8c12c] p-1 rounded-lg group-hover:bg-[#f8c12c] transition-colors">
            <div className="bg-white text-[#f8c12c] px-2 py-0.5 font-black text-xl rounded-md leading-none">
              UL
            </div>
          </div>
          <div className="flex flex-col leading-tight uppercase">
            <span className="text-2xl font-black text-[#f8c12c] tracking-tighter">Ultimate</span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-gray-400 -mt-1.5">Learning</span>
          </div>
        </div>

        {/* SEARCH & CATEGORY BAR */}
        <div className="hidden lg:flex flex-1 max-w-2xl items-center h-12 bg-gray-50 rounded-lg relative overflow-hidden border border-gray-200 focus-within:bg-white focus-within:border-[#f8c12c] transition-all">
          <div className="relative h-full" ref={dropdownRef}>
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="text-gray-600 font-bold px-6 h-full flex items-center gap-3 hover:text-[#f8c12c] transition-colors border-r border-gray-200"
            >
              <Menu size={18} className="text-[#f8c12c]" />
              <span className="text-[11px] tracking-widest uppercase font-black">Category</span>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isCategoryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[115%] left-0 w-64 bg-white shadow-2xl rounded-xl z-[60] py-3 border border-gray-100"
                  onMouseLeave={() => setActiveSubMenu(null)}
                >
                  {categoriesData.map((cat, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setActiveSubMenu(i)}
                      className={`px-6 py-3 text-sm font-bold flex justify-between items-center cursor-pointer transition-all ${
                        activeSubMenu === i ? "text-[#f8c12c] bg-yellow-50" : "text-gray-700"
                      }`}
                    >
                      {cat.name}
                      <ChevronRight size={14} className={activeSubMenu === i ? "opacity-100 translate-x-1" : "opacity-30"} />
                      
                      {activeSubMenu === i && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="absolute top-0 left-[102%] w-60 bg-white shadow-2xl rounded-xl border border-gray-100 py-2"
                        >
                          {cat.sub.map((item, idx) => (
                            <div key={idx} className="px-6 py-2.5 text-sm text-gray-500 hover:text-[#f8c12c] hover:bg-gray-50 font-medium transition-colors">
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <input
            type="text"
            placeholder="Search for courses..."
            className="flex-1 h-full px-6 bg-transparent text-gray-700 outline-none text-sm font-medium"
          />
          
          <button className="text-[#f8c12c] h-full px-6 flex items-center justify-center hover:scale-110 transition-transform">
            <Search size={20} strokeWidth={3} />
          </button>
        </div>

        {/* ACTIONS SECTION */}
        <div className="flex items-center gap-6">
          {/* Profile Pill */}
          <div className="flex items-center gap-3 bg-[#f8c12c] py-2 px-5 rounded-full cursor-pointer hover:bg-yellow-500 transition shadow-md shadow-yellow-100">
            <User size={16} className="text-white" />
            <span className="text-[12px] font-bold text-white whitespace-nowrap uppercase tracking-tighter">
              Demo Instructor
            </span>
            <ChevronDown size={14} className="text-white" />
          </div>

          {/* Icon Group */}
          <div className="hidden md:flex items-center gap-5 text-gray-400 border-l border-gray-100 pl-6">
            <div className="relative cursor-pointer hover:text-[#f8c12c] transition-colors">
              <Heart size={22} />
              <span className="absolute -top-2 -right-2 bg-[#f8c12c] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
            </div>
            <Settings size={22} className="hover:rotate-90 transition-transform duration-500 hover:text-[#f8c12c] cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;