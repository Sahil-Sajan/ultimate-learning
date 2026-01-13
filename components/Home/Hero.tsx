"use client";

import React, { useState, useRef, useEffect } from "react";
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
    <section className="relative w-full min-h-150 bg-[#392C7D] overflow-hidden py-20 px-6 md:px-12">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full" />

      <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
            <span className="text-[13px] font-medium text-white/90 tracking-wide">
              The Leader in Online Learning
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-[1.1] mb-6">
            Find the Best{" "}
            <span className="relative">
              <span className="text-[#FF5B5C]">Courses</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                width="100%"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5C30 2 70 2 100 5"
                  stroke="#FF5B5C"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </span>{" "}
            from the Best{" "}
            <span className="text-[#FF5B5C] border-b-2 border-[#FF5B5C]">
              Mentors
            </span>{" "}
            Around the World
          </h1>

          <p className="text-white/70 text-lg max-w-lg mb-10 leading-relaxed">
            Our specialized online courses are designed to bring the classroom
            experience to you, no matter where you are.
          </p>

          {/* SEARCH BAR */}
          <div className="bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-2xl">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg w-full md:w-auto cursor-pointer group">
              <span className="text-slate-600 text-sm font-medium whitespace-nowrap">
                Select category
              </span>
              <ChevronRight
                size={16}
                className="text-slate-400 rotate-90 group-hover:text-[#FF5B5C]"
              />
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
          </div>

          {/* STATS */}
          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-400/30">
                <GraduationCap className="text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">10K</h4>
                <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
                  Online Courses
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl  bg-cyan-500/20 flex items-center justify-center border border-cyan-400/30">
                <Trophy className="text-cyan-400" size={22} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">6K+</h4>
                <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
                  Certified Courses
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30">
                <Users className="text-emerald-400" size={22} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">2K+</h4>
                <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
                  Experienced Tutors
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-400/30">
                <Users className="text-orange-400" size={22} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">30K+</h4>
                <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
                  Online Students
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT: FLOATING IMAGE/CARDS */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main Hero Image from your public folder */}
          <div className="relative z-10 w-full max-w-125 animate-float">
            <img
              src="/hero-img.png" // Ensure your file is named exactly this in /public
              alt="Hero Illustration"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Background Rotating Seal (Best Online Learning) */}
          <div className="absolute -top-10 right-0 w-32 h-32 hidden md:block animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="transparent"
              />
              <text className="text-[10px] font-bold fill-white/30 uppercase tracking-[2px]">
                <textPath xlinkHref="#circlePath">
                  Best Online Learning Platform •{" "}
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-[#FF5B5C] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xs">🎓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
