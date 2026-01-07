"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Menu,
  ChevronDown,
  User,
  Heart,
  Settings,
  TrendingUp,
  Library,
  GraduationCap,
  Award,
} from "lucide-react";

const cardData = [
  {
    title: "Trending Courses",
    desc: "Your chance to be a trending expert in IT industries and make a successful career.",
    color: "bg-[#1ecd6e]",
    icon: TrendingUp,
  },
  {
    title: "Books & Library",
    desc: "Access our vast digital library with over 10 million items and specialized research tools.",
    color: "bg-[#f8c12c]",
    icon: Library,
  },
  {
    title: "Certified Teachers",
    desc: "Get professional education and reliable consultation by our team of world-class instructors.",
    color: "bg-[#307ad5]",
    icon: GraduationCap,
  },
  {
    title: "Certification",
    desc: "Receive a globally recognized certificate upon successful completion of your rigorous classes.",
    color: "bg-[#ea51a0]",
    icon: Award,
  },
];

const Hero = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-hidden">
      
      {/* Background with Dark Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.75), rgba(30, 41, 59, 0.85)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')`,
        }}
      />

      {/* --- NAVBAR SECTION --- */}
      <header className="relative z-50 w-full">
        <div className="py-6 px-6 flex items-center justify-between gap-4 container mx-auto">
          {/* Logo Section */}
          <div className="flex items-center gap-2 min-w-fit cursor-pointer">
            <div className="bg-white text-black p-1.5 rounded-sm font-bold text-xl">
              <span className="border-2 border-black px-1">UL</span>
            </div>
            <div className="flex flex-col leading-none uppercase">
              <span className="text-2xl font-bold text-white">Ultimate</span>
              <span className="text-xl font-light tracking-[0.2em] text-gray-300">Learning</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl items-center h-12 ml-4 shadow-2xl">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="bg-gray-100 text-[#3858e9] font-bold px-5 h-full flex items-center gap-2 rounded-l-sm hover:bg-white transition"
            >
              <Menu size={18} />
              <span className="text-xs tracking-widest uppercase">Category</span>
            </button>
            <input
              type="text"
              placeholder="Search courses..."
              className="flex-1 h-full px-4 text-black outline-none text-sm font-medium"
            />
            <button className="bg-[#3858e9] h-full px-6 flex items-center justify-center rounded-r-sm hover:bg-blue-600 text-white transition">
              <Search size={20} />
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-6">
            <div className="relative bg-[#3858e9] flex items-center gap-2 py-2.5 px-5 rounded-full cursor-pointer hover:bg-blue-600 transition shadow-lg">
              <User size={18} className="text-white" />
              <span className="text-xs font-bold text-white hidden sm:inline">Demo Instructor</span>
              <ChevronDown size={14} className="text-white" />
            </div>
            <Heart size={24} className="text-white cursor-pointer hover:text-red-400 transition" />
            <Settings size={24} className="text-white cursor-pointer hover:rotate-90 transition-transform duration-500" />
          </div>
        </div>
      </header>

      {/* --- HERO CONTENT --- */}
      <main className="relative z-10 grow flex items-center">
        <div className="container mx-auto px-6 md:px-12 py-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="h-1.5 w-24 bg-[#f8c12c] mb-10" />
            <h1 className="text-6xl md:text-[80px] font-black text-white leading-[0.95] mb-10 tracking-tighter uppercase">
              Learn Anything <br />
              <span className="font-extralight text-gray-300 italic">With Expert</span> <br />
              <span className="text-[#f8c12c]">Teachers</span>
            </h1>
            <p className="text-gray-300 text-lg mb-10 max-w-xl font-medium">
              Join 10,000+ students already learning from the world's most experienced industry experts and change your career path today.
            </p>
            <button className="bg-[#1e73be] hover:bg-blue-700 text-white font-black py-5 px-14 rounded-sm text-sm uppercase transition-all shadow-2xl hover:scale-105 active:scale-95 tracking-[0.2em]">
              Explore Courses
            </button>
          </motion.div>
        </div>
      </main>

      {/* --- FEATURE CARDS SECTION --- */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-xl overflow-hidden shadow-2xl">
            {cardData.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{
                    y: -15,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                  className={`${card.color} p-10 text-white flex flex-col gap-5 cursor-pointer relative`}
                >
                  <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-2">
                    <IconComponent size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-widest">{card.title}</h3>
                  <p className="text-sm font-medium leading-relaxed opacity-95">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;