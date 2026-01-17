"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Heart,
  Star,
  BookOpen,
  Clock,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  LayoutGrid,
} from "lucide-react";

/* ---------------- TYPES & DATA ---------------- */

interface Instructor {
  id: number;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  lessons: number;
  hours: string;
  image: string;
}

const instructors: Instructor[] = [
  { id: 1, name: "Rolands Granger", role: "Developer", rating: 4.9, reviews: 200, lessons: 12, hours: "169hr 20min", image: "/instructor1.webp" },
  { id: 2, name: "Lisa Lopez", role: "Finance", rating: 4.4, reviews: 130, lessons: 22, hours: "15hr 06min", image: "/instructor2.webp" },
  { id: 3, name: "Charles Ruiz", role: "Cloud Engineer", rating: 4.5, reviews: 120, lessons: 16, hours: "2hr 25min", image: "/instructor3.webp" },
  { id: 4, name: "Rogerina Grogan", role: "Vocational", rating: 4.6, reviews: 180, lessons: 6, hours: "19hr 30min", image: "/instructor4.webp" },
  { id: 5, name: "Ivana Tow", role: "Corporate Trainer", rating: 4.2, reviews: 210, lessons: 25, hours: "4hr 20min", image: "/instructor5.webp" },
  { id: 6, name: "Kevin Leonard", role: "Developer", rating: 4.5, reviews: 140, lessons: 11, hours: "7hr 10min", image: "/instructor6.webp" },
];

/* ---------------- PAGE COMPONENT ---------------- */

export default function InstructorGridPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col gap-6">
      <FilterBox title="Categories">
        {["Backend", "CSS", "Frontend", "General", "IT & Software"].map((item) => (
          <FilterCheckbox key={item} label={item} count={Math.floor(Math.random() * 5) + 1} />
        ))}
        <button className="text-[#FF5364] text-sm font-semibold mt-2 text-left">See More</button>
      </FilterBox>

      <FilterBox title="Price Range">
        <div className="py-2">
          <input type="range" className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF5B5C]" />
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>$0</span>
            <span>$2985.0</span>
          </div>
        </div>
      </FilterBox>

      <FilterBox title="Level">
        {["Beginner", "Intermediate", "Advanced", "Expert"].map((item) => (
          <FilterCheckbox key={item} label={item} count={Math.floor(Math.random() * 20)} />
        ))}
      </FilterBox>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFCFD] pb-20 font-sans">
      {/* 1. TOP BREADCRUMB */}
      <div className="w-full bg-linear-to-r from-[#FFF0F0] to-[#E5F3FF] py-10 md:py-16 text-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1D2026] mb-2">Instructor Grid</h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#FF5B5C]">Home</Link>
          <span className="text-[#FF5B5C]">—</span>
          <span>Instructor Grid</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:-mt-12">
        {/* 2. FILTER TOP BAR (Courses Style) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <div className="flex items-center gap-2 text-[#6E7485] font-medium">
              <span className="bg-[#FF5B5C] text-white p-2 rounded-md hidden md:block shadow-lg shadow-rose-100">
                <LayoutGrid size={18} />
              </span>
              <span className="text-sm md:text-base">Showing 1-6 results</span>
            </div>

            {/* MOBILE FILTER TOGGLE */}
            <button 
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-[#1D2026] hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
            >
              <Filter size={16} className="text-[#FF5B5C]" /> Filters
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-auto">
              <select className="w-full appearance-none bg-white border border-gray-200 px-4 py-2.5 pr-10 rounded-lg text-sm text-[#1D2026] outline-none shadow-sm">
                <option>Newly Published</option>
                <option>Best Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={14} />
            </div>
            <div className="relative w-full sm:w-auto">
              <input type="text" placeholder="Search instructors..." className="w-full md:w-64 border border-gray-200 px-4 py-2.5 rounded-lg text-sm outline-none shadow-sm focus:border-[#FF5B5C] transition-all" />
              <Search className="absolute right-3 top-3 text-gray-400" size={16} />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 3. DESKTOP SIDEBAR */}
          <aside className="hidden lg:block w-[300px] shrink-0">
            <SidebarContent />
          </aside>

          {/* 4. MOBILE DRAWER FILTER */}
          <AnimatePresence>
            {isFilterOpen && (
              <div className="fixed inset-0 z-[200] lg:hidden">
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
                  onClick={() => setIsFilterOpen(false)} 
                />
                <motion.div 
                  initial={{ x: "100%" }} 
                  animate={{ x: 0 }} 
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl p-6 overflow-y-auto"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-[#1D2026]">Filter Instructors</h2>
                    <button onClick={() => setIsFilterOpen(false)} className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-rose-50 hover:text-[#FF5B5C] transition-all">
                      <X size={20}/>
                    </button>
                  </div>
                  <SidebarContent />
                  <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full bg-[#FF5B5C] text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs mt-8 shadow-lg shadow-rose-200 active:scale-95 transition-all"
                  >
                    Show Results
                  </button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* 5. INSTRUCTOR GRID */}
          <main className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {instructors.map((ins) => (
                <InstructorCard key={ins.id} instructor={ins} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center gap-3">
              <PaginationButton icon={<ChevronLeft size={18} />} />
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF5B5C] text-white font-bold shadow-lg shadow-rose-100">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-400 font-bold hover:bg-gray-100 border border-slate-100 transition-all">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-400 font-bold hover:bg-gray-100 border border-slate-100 transition-all">
                3
              </button>
              <PaginationButton icon={<ChevronRight size={18} />} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------------- UI COMPONENTS ---------------- */

function FilterBox({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
      <h3 
        className="text-[#1D2026] font-bold text-lg mb-4 flex justify-between items-center cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} 
        <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 group-hover:text-[#FF5B5C] ${isOpen ? "" : "-rotate-90"}`} />
      </h3>
      {isOpen && <div className="flex flex-col gap-3">{children}</div>}
    </div>
  );
}

function FilterCheckbox({ label, count = 0 }: { label: string; count?: number }) {
  const [checked, setChecked] = useState(false);
  return (
    <label 
      className="flex items-center justify-between group cursor-pointer"
      onClick={() => setChecked(!checked)}
    >
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded border transition-all flex items-center justify-center ${checked ? "bg-[#FF5B5C] border-[#FF5B5C]" : "border-gray-300 group-hover:border-[#FF5B5C]"}`}>
          {checked && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
        </div>
        <span className={`text-sm transition-colors ${checked ? "text-[#1D2026] font-bold" : "text-gray-500 group-hover:text-gray-700"}`}>{label}</span>
      </div>
      <span className="text-xs text-gray-400 font-medium">({count})</span>
    </label>
  );
}

function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col"
    >
      <div className="relative h-56 overflow-hidden shrink-0">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center z-10 hover:scale-110 transition-transform active:scale-90 text-gray-400 hover:text-[#FF5364]">
          <Heart size={18} />
        </button>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-1.5 mb-3">
          <Star size={14} className="text-[#FFB800] fill-[#FFB800]" />
          <span className="text-sm font-bold text-black">{instructor.rating}</span>
          <span className="text-xs font-medium text-slate-400">({instructor.reviews} Reviews)</span>
        </div>

        <h3 className="text-lg font-bold text-[#1D2026] group-hover:text-[#FF5364] transition-colors mb-1 line-clamp-1">
          {instructor.name}
        </h3>
        <p className="text-sm text-slate-500 font-medium mb-6">{instructor.role}</p>

        <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-5">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-rose-50 rounded-lg">
              <BookOpen size={16} className="text-[#FF5364]" />
            </div>
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight">
              {instructor.lessons}+ Lessons
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-50 rounded-lg">
              <Clock size={16} className="text-[#6440FB]" />
            </div>
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-tight">
              {instructor.hours}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PaginationButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-100 text-slate-400 hover:bg-[#FF5B5C] hover:text-white hover:border-[#FF5B5C] transition-all shadow-sm">
      {icon}
    </button>
  );
}