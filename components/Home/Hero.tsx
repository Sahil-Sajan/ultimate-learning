"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Variants type import kiya
import {
  Search,
  ChevronRight,
  GraduationCap,
  Trophy,
  Users,
} from "lucide-react";

const Hero = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // FIXED: Added Variants type to objects
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
        setActiveSubMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative w-full min-h-150 bg-[#392C7D] overflow-hidden py-20 px-6 md:px-12">
      {/* BACKGROUND DECORATIONS */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-64 h-64 bg-pink-500/20 blur-[100px] rounded-full" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full" 
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10"
        >
          <motion.div variants={fadeInUp} className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
            <span className="text-[13px] font-medium text-white/90 tracking-wide">
              The Leader in Online Learning
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-semibold text-white leading-[1.1] mb-6">
            Find the Best{" "}
            <span className="relative inline-block">
              <span className="text-[#FF5B5C]">Courses</span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-2 left-0 w-full"
                width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none"
              >
                <path d="M0 5C30 2 70 2 100 5" stroke="#FF5B5C" strokeWidth="3" fill="none" />
              </motion.svg>
            </span>{" "}
            from the Best{" "}
            <span className="text-[#FF5B5C] border-b-2 border-[#FF5B5C]">
              Mentors
            </span>{" "}
            Around the World
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-white/70 text-lg max-w-lg mb-10 leading-relaxed">
            Our specialized online courses are designed to bring the classroom
            experience to you, no matter where you are.
          </motion.p>

          <motion.div variants={fadeInUp} className="bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg w-full md:w-auto cursor-pointer group">
              <span className="text-slate-600 text-sm font-medium whitespace-nowrap">Select category</span>
              <ChevronRight size={16} className="text-slate-400 rotate-90 group-hover:text-[#FF5B5C]" />
            </div>
            <div className="relative w-full grow px-4 border-l border-gray-200 hidden md:block">
              <input
                type="text"
                placeholder="Search for Courses, Instructors"
                className="w-full bg-transparent outline-none text-slate-800 text-sm placeholder:text-slate-400 py-3"
              />
            </div>
            <button className="bg-[#FF5B5C] hover:bg-[#ff4646] text-white p-3.5 rounded-lg transition-all active:scale-95 flex items-center justify-center w-full md:w-auto">
              <Search size={20} strokeWidth={2.5} />
            </button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap gap-8">
            <StatItem icon={<GraduationCap className="text-purple-400" size={24} />} value="10K" label="Online Courses" bgColor="bg-purple-500/20" borderColor="border-purple-400/30" />
            <StatItem icon={<Trophy className="text-cyan-400" size={22} />} value="6K+" label="Certified Courses" bgColor="bg-cyan-500/20" borderColor="border-cyan-400/30" />
            <StatItem icon={<Users className="text-emerald-400" size={22} />} value="2K+" label="Experienced Tutors" bgColor="bg-emerald-500/20" borderColor="border-emerald-400/30" />
            <StatItem icon={<Users className="text-orange-400" size={22} />} value="30K+" label="Online Students" bgColor="bg-orange-500/20" borderColor="border-orange-400/30" />
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative z-10 w-full max-w-120">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-16 -right-12 w-36 h-36 md:w-44 md:h-44 hidden md:block z-20"
            >
              <div className="relative w-full h-full">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[8px] font-bold fill-white/40 uppercase tracking-[2.5px]">
                    <textPath xlinkHref="#circlePath">
                      Best Online Learning Platform • Best Online Learning Platform •
                    </textPath>
                  </text>
                </svg>
              </div>
            </motion.div>

            <div className="absolute -top-12 -right-28 w-36 h-36 md:w-44 md:h-44 hidden md:block z-30 items-center justify-center pointer-events-none">
              <div className="w-10 h-10 mt-10 md:w-12 md:h-12 bg-[#FF5B5C] rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                <GraduationCap className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/hero-img.png"
                alt="Hero Illustration"
                width={500}
                height={500}
                priority
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatItem = ({ icon, value, label, bgColor, borderColor }: {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgColor: string;
  borderColor: string;
}) => (
  <div className="flex items-center gap-3">
    <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center border ${borderColor}`}>
      {icon}
    </div>
    <div>
      <h4 className="text-white font-bold text-lg">{value}</h4>
      <p className="text-white/50 text-xs font-medium uppercase tracking-wider">{label}</p>
    </div>
  </div>
);

export default Hero;