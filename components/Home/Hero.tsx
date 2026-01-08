"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Search,
  Menu,
  Heart,
  Settings,
  ChevronDown,
  Rocket,
  BookOpen,
  Users,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

// Updated Data with Sub-categories (Max 4 each)
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
  {
    name: "Music & Art",
    sub: ["Guitar Basics", "Music Production", "Oil Painting", "Digital Illustration"],
  },
];

const cardData = [
  { title: "Trending Courses", desc: "Your chance to be a trending expert...", color: "bg-[#1ecd6e]", icon: Rocket },
  { title: "Books & Library", desc: "Masterstudy is one of the world's...", color: "bg-[#f8c12c]", icon: BookOpen },
  { title: "Certified Teachers", desc: "Get professional education...", color: "bg-[#307ad5]", icon: Users },
  { title: "Certification", desc: "Upon successful completion...", color: "bg-[#ea51a0]", icon: GraduationCap },
];

const Hero = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on click outside
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
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <section className="relative h-[95vh] min-h-187.5 w-full flex flex-col">
        {/* Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.75), rgba(30, 41, 59, 0.85)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />

        {/* Navbar */}
        <header className="relative z-50 w-full">
          <div className="py-6 px-6 flex items-center justify-between gap-4 container mx-auto">
            {/* Logo */}
            <div className="flex items-center gap-2 min-w-fit cursor-pointer">
              <div className="bg-yellow-500 text-white p-1.5 rounded-sm font-bold text-xl">
                <span className="border-2 border-white px-1">UL</span>
              </div>
              <div className="flex flex-col leading-none uppercase text-white">
                <span className="text-2xl font-bold">Ultimate</span>
                <span className="text-xl font-light tracking-[0.2em]">Learning</span>
              </div>
            </div>

            {/* Search Bar with NESTED Dropdown */}
            <div className="hidden lg:flex items-center flex-1 max-w-xl h-12 bg-white rounded-sm ml-8 relative">
              <div className="relative h-full" ref={dropdownRef}>
                <button
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center gap-2 px-4 text-gray-700 hover:bg-gray-100 transition h-full border-r font-bold"
                >
                  <Menu size={18} className="text-yellow-500" />
                  <span className="text-xs tracking-widest uppercase">Category</span>
                </button>

                <AnimatePresence>
                  {isCategoryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-[110%] left-0 w-64 bg-white shadow-2xl rounded-md z-60 border border-gray-100"
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      {categoriesData.map((cat, i) => (
                        <div
                          key={i}
                          onMouseEnter={() => setActiveSubMenu(i)}
                          className={`px-5 py-4 text-sm flex justify-between items-center cursor-pointer transition-colors border-b border-gray-50 last:border-0 ${
                            activeSubMenu === i
                              ? "bg-yellow-500 text-white"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {cat.name}
                          <ChevronRight
                            size={14}
                            className={activeSubMenu === i ? "opacity-100" : "opacity-30"}
                          />

                          {/* SUB-MENU */}
                          {activeSubMenu === i && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="absolute top-0 left-full ml-1 w-60 bg-white shadow-2xl rounded-md border border-gray-100 overflow-hidden"
                            >
                              {cat.sub.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="px-5 py-4 text-sm text-gray-600 hover:bg-gray-100 hover:text-yellow-600 border-b border-gray-50 last:border-0 transition-all"
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
                className="flex-1 h-full px-4 text-black bg-white outline-none text-sm font-medium"
              />
              <button className="bg-yellow-500 h-full px-6 flex items-center justify-center text-white transition hover:bg-yellow-600">
                <Search size={20} />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6 text-white">
              <div className="relative bg-yellow-500 flex items-center gap-2 py-2.5 px-5 rounded-full cursor-pointer hover:bg-yellow-600 transition shadow-lg">
                <User size={18} />
                <span className="text-xs font-bold hidden sm:inline">Demo Instructor</span>
                <ChevronDown size={14} />
              </div>
              <Heart size={24} className="cursor-pointer hover:text-red-400 transition" />
              <Settings size={24} className="cursor-pointer hover:rotate-90 transition-transform duration-500" />
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 grow flex flex-col justify-center items-start pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="h-1.5 w-24 bg-yellow-500 mb-10" />
            <h1 className="text-6xl md:text-[80px] font-black text-white leading-[0.95] mb-10 tracking-tighter uppercase">
              Learn Anything <br />
              <span className="font-extralight text-gray-300 italic">With Expert</span> <br />
              <span className="text-yellow-500">Teachers</span>
            </h1>
            <button className="bg-yellow-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-yellow-600 transition shadow-2xl">
              Explore Courses
            </button>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="relative z-30 container mx-auto max-w-6xl px-4 lg:px-0 translate-y-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {cardData.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -25 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className={`${card.color} p-10 text-white flex flex-col gap-6 min-h-80 cursor-pointer`}
                >
                  <Icon size={56} strokeWidth={1.2} className="opacity-95 text-white" />
                  <h3 className="text-xl font-black uppercase tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[15px] font-normal leading-relaxed opacity-90">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="h-64 w-full bg-white" />
    </div>
  );
};

export default Hero;
