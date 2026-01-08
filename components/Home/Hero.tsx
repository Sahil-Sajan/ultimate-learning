"use client";

import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

const cardData = [
  {
    title: "Trending Courses",
    desc: "Your chance to be a trending expert in IT industries and make a successful career after completion of our courses.",
    color: "bg-[#1ecd6e]",
    icon: Rocket,
  },
  {
    title: "Books & Library",
    desc: "Masterstudy is one of the world's busiest public library systems, with over 10 million books, movies and other items to.",
    color: "bg-[#f8c12c]",
    icon: BookOpen,
  },
  {
    title: "Certified Teachers",
    desc: "Get professional education and reliable consultation by our team of certified teachers and instructors.",
    color: "bg-[#307ad5]",
    icon: Users,
  },
  {
    title: "Certification",
    desc: "Upon successful completion receive a certificate showing your achievement for completing one of our rigorous classes.",
    color: "bg-[#ea51a0]",
    icon: GraduationCap,
  },
];

const Hero = () => {
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      {/* 1. HERO SECTION (W/ INCREASED HEIGHT FOR BETTER OVERLAP) */}
      <section className="relative h-[95vh] min-h-187.5 w-full flex flex-col">
        {/* Original Background & Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.75), rgba(30, 41, 59, 0.85)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')`,
          }}
        />

        {/* Navbar */}
        <header className="relative z-50 w-full">
          <div className="py-6 px-6 flex items-center justify-between gap-4 container mx-auto">
            <div className="flex items-center gap-2 min-w-fit cursor-pointer">
              <div className="bg-white text-black p-1.5 rounded-sm font-bold text-xl">
                <span className="border-2 border-black px-1">UL</span>
              </div>
              <div className="flex flex-col leading-none uppercase">
                <span className="text-2xl font-bold text-white">Ultimate</span>
                <span className="text-xl font-light tracking-[0.2em] text-gray-300">
                  Learning
                </span>
              </div>
            </div>

                <span className="text-xs tracking-widest uppercase">
                  Category
                </span>
              </button>
              <input
                type="text"
                placeholder="Search courses..."
                className="flex-1 h-full px-4 text-black bg-white outline-none text-sm font-medium"
              />
              <button className="bg-[#3858e9] h-full px-6 flex items-center justify-center rounded-r-sm text-white transition">
                <Search size={20} />
              </button>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative bg-[#3858e9] flex items-center gap-2 py-2.5 px-5 rounded-full cursor-pointer hover:bg-blue-600 transition shadow-lg text-white">
                <User size={18} />

                <span className="text-xs font-bold hidden sm:inline">Demo Instructor</span>
                <ChevronDown size={14} />
              </div>
              <Heart size={24} className="text-white cursor-pointer hover:text-red-400 transition" />
              <Settings size={24} className="text-white cursor-pointer hover:rotate-90 transition-transform duration-500" />

                <span className="text-xs font-bold hidden sm:inline">
                  Demo Instructor
                </span>
                <ChevronDown size={14} />
              </div>
              <Heart
                size={24}
                className="text-white cursor-pointer hover:text-red-400 transition"
              />
              <Settings
                size={24}
                className="text-white cursor-pointer hover:rotate-90 transition-transform duration-500"
        <div className="relative z-10 container mx-auto px-6 grow flex flex-col justify-center items-start pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="h-1.5 w-24 bg-[#f8c12c] mb-10" />
            <h1 className="text-6xl md:text-[80px] font-black text-white leading-[0.95] mb-10 tracking-tighter uppercase">
              Learn Anything <br />
              <span className="font-extralight text-gray-300 italic">With Expert</span> <br />
              <span className="text-[#f8c12c]">Teachers</span>
            </h1>
              Explore Courses
            </button>
          </motion.div>
        </div>

        {/* --- THE OVERLAPPING CARDS (NOW INSIDE SECTION TO SHOW BG ON HOVER) --- */}
        <div className="relative z-30 container mx-auto max-w-6xl px-4 lg:px-0 translate-y-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 ">
            {cardData.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -25 }} // Lift higher on hover
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className={`${card.color} p-10 text-white flex flex-col gap-6 min-h-80 cursor-pointer`}
                >
                  <div className="mb-2">
                    <Icon
                      size={56}
                      strokeWidth={1.2}
                      className="text-white opacity-95"
                    />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight leading-none">
                    {card.title}
                  </h3>
                  <p className="text-[15px] font-normal leading-relaxed text-white/90">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. SPACING FOR NEXT CONTENT */}
      <div className="h-75 w-full bg-white" />
    </div>
  );
};

export default Hero;