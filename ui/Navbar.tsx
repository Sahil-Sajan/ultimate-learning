"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Menu,
  ChevronDown,
  User,
  Heart,
  Settings,
  ChevronRight,
} from "lucide-react";

// Categories Data with Sub-menus (Max 4 items each)
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
    sub: ["UI/UX Design", "Graphic Design", "Photoshop Master", "Video Editing"],
  },
  {
    name: "Music & Art",
    sub: ["Guitar Basics", "Music Production", "Oil Painting", "Digital Illustration"],
  },
];

const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const mainNavBg = "bg-[#1e272e]";

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
        setActiveSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative z-50 w-full shadow-lg">
      <div
        className={`${mainNavBg} py-4 px-8 flex items-center justify-between gap-4 transition-colors duration-500`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 min-w-fit cursor-pointer group">
          <div className="border-2 border-white p-1 rounded-md">
            <div className="bg-white text-black px-1.5 py-0.5 font-black text-xl leading-none">
              UL
            </div>
          </div>
          <div className="flex flex-col leading-tight uppercase">
            <span className="text-xl font-extrabold text-white tracking-tight">
              Ultimate
            </span>
            <span className="text-sm font-light tracking-[0.3em] text-gray-400 -mt-1">
              Learning
            </span>
          </div>
        </div>

        {/* Search Bar & Category Dropdown */}
        <div className="flex flex-1 max-w-3xl items-center h-11 ml-8 bg-white rounded-sm relative">
          <div className="relative h-full" ref={dropdownRef}>
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="text-yellow-500 font-bold px-5 h-full flex items-center gap-2 hover:bg-gray-50 transition border-r border-gray-100"
            >
              <Menu size={18} />
              <span className="text-[11px] tracking-widest uppercase">
                Category
              </span>
            </button>

            {/* Main Dropdown Menu */}
            <AnimatePresence>
              {isCategoryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[110%] left-0 w-64 bg-white shadow-2xl rounded-md z-[60] border border-gray-100 py-2"
                  onMouseLeave={() => setActiveSubMenu(null)}
                >
                  {categoriesData.map((cat, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setActiveSubMenu(i)}
                      className={`px-5 py-3 text-sm flex justify-between items-center cursor-pointer transition-colors ${
                        activeSubMenu === i
                          ? "bg-[#3858f6] text-white"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {cat.name}
                      <ChevronRight
                        size={14}
                        className={
                          activeSubMenu === i ? "opacity-100" : "opacity-30"
                        }
                      />

                      {/* Sub-Menu */}
                      {activeSubMenu === i && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="absolute top-0 left-full ml-1 w-60 bg-white shadow-2xl rounded-md border border-gray-100 overflow-hidden"
                        >
                          {cat.sub.map((item, idx) => (
                            <div
                              key={idx}
                              className="px-5 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#3858f6] border-b border-gray-50 last:border-0 transition-all"
                            >
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
            placeholder="Search courses..."
            className="flex-1 h-full px-5 text-gray-700 outline-none text-sm font-normal"
          />

          <button className="bg-[#3858f6] h-full px-6 flex items-center justify-center hover:bg-blue-700 text-white transition">
            <Search size={19} />
          </button>
        </div>

        {/* User Actions Section */}
        <div className="flex items-center gap-5 ml-4">
          <div className="flex items-center gap-2 bg-yellow-500 py-2.5 px-6 rounded-full cursor-pointer hover:bg-blue-700 transition">
            <User size={16} className="text-white" />
            <span className="text-xs font-bold text-white whitespace-nowrap">
              Demo Instructor
            </span>
            <ChevronDown size={14} className="text-white ml-1" />
          </div>

          <div className="bg-gray-800/50 p-2.5 rounded-full cursor-pointer hover:bg-gray-700 transition group">
            <Heart size={20} className="text-white group-hover:fill-white" />
          </div>

          <Settings
            size={22}
            className="text-white cursor-pointer hover:rotate-90 transition-transform duration-500"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
