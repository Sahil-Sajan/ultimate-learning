"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  LayoutGrid,
  List,
  Heart,
  Star,
  BookOpen,
  Clock,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ---------------- TYPES & DATA ---------------- */

type ViewType = "grid" | "list";

interface Instructor {
  id: number;
  name: string;
  role: string;
  rating: number;
  reviews: number;
  lessons: number;
  hours: string;
  image: string;
  favorite?: boolean;
}

const instructors: Instructor[] = [
  { id: 1, name: "Rolands Granger", role: "Developer", rating: 4.9, reviews: 200, lessons: 12, hours: "169hr 20min", image: "instructor1.webp" },
  { id: 2, name: "Lisa Lopez", role: "Finance", rating: 4.4, reviews: 130, lessons: 22, hours: "15hr 06min", image: "instructor2.webp" },
  { id: 3, name: "Charles Ruiz", role: "Cloud Engineer", rating: 4.5, reviews: 120, lessons: 16, hours: "2hr 25min", image: "instructor3.webp" },
  { id: 4, name: "Rogerina Grogan", role: "Vocational", rating: 4.6, reviews: 180, lessons: 6, hours: "19hr 30min", image: "instructor4.webp" },
  { id: 5, name: "Ivana Tow", role: "Corporate Trainer", rating: 4.2, reviews: 210, lessons: 25, hours: "4hr 20min", image: "instructor5.webp" },
  { id: 6, name: "Kevin Leonard", role: "Developer", rating: 4.5, reviews: 140, lessons: 11, hours: "7hr 10min", image: "instructor6.webp" },
];

/* ---------------- PAGE COMPONENT ---------------- */

export default function InstructorGridPage() {
  const [view, setView] = useState<ViewType>("grid");
  const [price, setPrice] = useState(69850);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-linear-to-r from-[#FFF0F0] to-[#E5F3FF] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-[32px] font-bold text-slate-900 mb-2">
            Instructor Grid
          </h1>
          <nav className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
            <span>Home</span>
            <span className="text-[#FF5B5C]">—</span>
            <span className="text-slate-400">Instructor Grid</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 md:mt-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-75 space-y-6 order-2 lg:order-1">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h2 className="text-sm font-bold flex items-center gap-2 text-black">
                <Filter size={18} /> Filters
              </h2>
              <button className="text-xs font-bold text-[#FF5364] hover:underline transition-all">
                Clear All
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">{isFilterOpen ? "Close" : "Filter By"}</span>
              <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${isFilterOpen ? "rotate-180" : ""}`} />
            </div>
          </button>

            <div className="space-y-4">
              <CustomAccordion title="Categories">
                {["Backend", "CSS", "Frontend", "General", "IT & Software"].map(
                  (item) => (
                    <CustomCheckbox
                      key={item}
                      label={item}
                      count={Math.floor(Math.random() * 5) + 1}
                    />
                  )
                )}
                <button className="text-[#FF5364] text-sm font-semibold mt-2 text-left">
                  See More
                </button>
              </CustomAccordion>

              <CustomAccordion title="Price Range">
                <div className="py-4">
                  <input
                    type="range"
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF5B5C]"
                  />
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>$0</span>
                    <span>$2985.0</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          
          {/* DESKTOP SIDEBAR (Hidden on Mobile) */}
          <aside className="hidden lg:block space-y-8 sticky top-6 self-start">
            <FilterContent price={price} setPrice={setPrice} />
          </aside>

          {/* Main Content Area */}
          <main>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-8 bg-white p-2 rounded-xl border border-slate-100 shadow-sm lg:shadow-none lg:border-none lg:p-0 lg:bg-transparent">
              <span className="text-sm text-slate-500 font-medium">
                Showing <span className="text-slate-900 font-bold">1-9 of 50</span> results
              </span>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="hidden sm:flex bg-slate-100 rounded-lg p-1">
                  <button onClick={() => setView("grid")} className={`p-2 rounded-md transition-all ${view === "grid" ? "bg-white text-[#FF5364] shadow-sm" : "text-slate-400"}`}>
                    <LayoutGrid size={18} />
                  </button>
                  <button onClick={() => setView("list")} className={`p-2 rounded-md transition-all ${view === "list" ? "bg-white text-[#FF5364] shadow-sm" : "text-slate-400"}`}>
                    <List size={18} />
                  </button>
                </div>
                
                <select className="bg-white border border-slate-200 rounded-lg text-xs font-bold py-2.5 px-4 outline-none grow sm:grow-0 focus:ring-2 ring-[#FF5364]/20">
                  <option>Sort by: Newest</option>
                  <option>Best Rated</option>
                  <option>Price: Low to High</option>
                </select>

                <div className="relative grow sm:grow-0">
                  <input type="text" placeholder="Search..." className="h-10 w-full sm:w-56 text-xs pl-10 pr-4 bg-white border border-slate-200 rounded-lg outline-none focus:border-[#FF5364] shadow-sm" />
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Grid/List Display */}
            <div className={`grid gap-6 ${view === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
              <AnimatePresence mode="popLayout">
                {instructors.map((ins) => (
                  <InstructorCard key={ins.id} instructor={ins} view={view} />
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center gap-3">
              <PaginationButton icon={<ChevronLeft size={18} />} />
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF5B5C] text-white font-bold">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-400 font-bold hover:bg-gray-100 border border-slate-100">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-400 font-bold hover:bg-gray-100 border border-slate-100">
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

function CustomAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-[#1D2026] font-bold text-lg mb-4"
      >
        {title}
        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="flex flex-col gap-4">{children}</div>}
    </div>
  );
}

/**
 * UPDATED: CustomCheckbox now matches the design of the Courses page
 */
function CustomCheckbox({
  label,
  count,
  initialChecked = false,
}: {
  label: string;
  count: number;
  initialChecked?: boolean;
}) {
  const [checked, setChecked] = useState(initialChecked);
  return (
    <label
      className="flex items-center justify-between group cursor-pointer"
      onClick={() => setChecked(!checked)}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded border transition-all flex items-center justify-center ${
            checked
              ? "bg-[#FF5B5C] border-[#FF5B5C]"
              : "border-black group-hover:border-[#FF5B5C]"
          }`}
        >
          {checked && <div className="w-2 h-2 bg-white rounded-full" />}
        </div>
        <span
          className={`text-sm ${
            checked ? "text-[#1D2026] font-bold" : "text-gray-500"
          }`}
        >
          {label}
        </span>
      </div>
      <span className="text-xs text-gray-400">({count})</span>
    </label>
  );
}

function InstructorCard({ instructor, view }: { instructor: Instructor; view: ViewType }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
        view === "list" ? "flex flex-col sm:flex-row p-4 gap-6" : "flex flex-col"
      }`}
    >
      <div className={`relative overflow-hidden shrink-0 ${view === "list" ? "w-full sm:w-56 h-56 sm:h-44 rounded-xl" : "aspect-4/3"}`}>
        <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center hover:bg-[#FF5364] hover:text-white transition-colors">
          <Heart size={16} className={instructor.favorite ? "fill-current" : ""} />
        </button>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center bg-orange-50 px-2 py-1 rounded-md">
            <Star size={12} className="text-[#FFB800] fill-[#FFB800]" />
            <span className="text-xs font-black text-orange-700 ml-1">{instructor.rating}</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">({instructor.reviews} Reviews)</span>
        </div>
        
        <h3 className="text-xl font-black text-slate-900 group-hover:text-[#FF5364] transition-colors mb-1">{instructor.name}</h3>
        <p className="text-[13px] text-slate-400 font-bold mb-6">{instructor.role}</p>
        
        <div className="mt-auto grid grid-cols-2 gap-4 border-t border-slate-50 pt-5">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-red-50 rounded-lg"><BookOpen size={14} className="text-[#FF5364]" /></div>
            <span className="text-[11px] font-black text-slate-500">{instructor.lessons} Lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-purple-50 rounded-lg"><Clock size={14} className="text-purple-600" /></div>
            <span className="text-[11px] font-black text-slate-500 whitespace-nowrap">{instructor.hours.split(' ')[0]} Hrs</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}