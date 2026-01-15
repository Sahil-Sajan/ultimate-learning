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
  Check,
  ChevronLeft,
  ChevronRight,
  X,
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-20">
      {/* Header Section */}
      <div className="bg-linear-to-r from-[#FFF0F0] to-[#E5F3FF] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-2xl md:text-[32px] font-bold text-slate-900 mb-2">Instructor Grid</h1>
          <nav className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
            <span>Home</span>
            <div className="w-3 h-0.5 bg-[#FF5364]" />
            <span className="text-slate-400">Instructor Grid</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:-mt-6">
        
        {/* MOBILE FILTER TOGGLE (Hidden on Desktop) */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-between bg-white border border-slate-200 px-5 py-3.5 rounded-xl shadow-sm hover:border-[#FF5364] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#FF5364]/10 p-2 rounded-lg group-hover:bg-[#FF5364] transition-colors">
                <Filter size={18} className="text-[#FF5364] group-hover:text-white" />
              </div>
              <span className="font-bold text-slate-700">Refine Search</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">{isFilterOpen ? "Close" : "Filter By"}</span>
              <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${isFilterOpen ? "rotate-180" : ""}`} />
            </div>
          </button>

          {/* Expandable Mobile Filter Content */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-6 shadow-inner">
                   <FilterContent price={price} setPrice={setPrice} />
                   <button 
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full bg-[#FF5364] text-white py-4 rounded-xl font-bold shadow-lg shadow-red-200"
                   >
                     Apply Filters
                   </button>
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

            {/* Professional Pagination */}
            <div className="mt-16 flex justify-center items-center gap-3">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:bg-slate-50 transition-colors"><ChevronLeft size={20} /></button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#FF5364] text-white text-sm font-black shadow-lg shadow-red-100">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 text-sm font-bold border border-transparent hover:border-slate-200">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:bg-slate-50 transition-colors"><ChevronRight size={20} /></button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SHARED FILTER CONTENT ---------------- */

function FilterContent({ price, setPrice }: { price: number; setPrice: (v: number) => void }) {
  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <h2 className="text-base font-black tracking-tight flex items-center gap-2">Filters</h2>
        <button className="text-[11px] font-black uppercase tracking-widest text-[#FF5364] hover:underline">Reset</button>
      </div>

      <div className="space-y-2">
        <CustomAccordion title="Categories">
          {["Backend", "CSS", "Frontend", "General", "IT & Software"].map((item) => (
            <CustomCheckbox key={item} label={item} count={Math.floor(Math.random() * 5) + 1} />
          ))}
          <button className="text-[#FF5364] text-xs font-bold mt-2 hover:translate-x-1 transition-transform">View All Categories →</button>
        </CustomAccordion>

        <CustomAccordion title="Instructors">
          {["Nicole Brown", "Hinata Hyuga", "John Doe"].map((item) => (
            <CustomCheckbox key={item} label={item} count={12} initialChecked={item === "Nicole Brown"} />
          ))}
        </CustomAccordion>

        <CustomAccordion title="Budget Range">
          <div className="py-4 px-1">
            <input
              type="range" min="0" max="100000" value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF5364]"
            />
            <div className="flex justify-between mt-4">
              <div className="bg-white border border-slate-200 rounded-md px-3 py-1.5 text-xs font-bold">$0</div>
              <div className="bg-slate-900 text-white rounded-md px-3 py-1.5 text-xs font-bold">${price.toLocaleString()}</div>
            </div>
          </div>
        </CustomAccordion>

        <CustomAccordion title="Skill Level">
          {["Beginner", "Intermediate", "Advanced", "Expert"].map((item) => (
            <CustomCheckbox key={item} label={item} count={Math.floor(Math.random() * 20)} />
          ))}
        </CustomAccordion>
      </div>
    </div>
  );
}

/* ---------------- UI HELPER COMPONENTS ---------------- */

function CustomAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="py-2">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between py-2.5 text-[13px] font-black text-slate-800 group"
      >
        <span className="group-hover:text-[#FF5364] transition-colors">{title}</span>
        <div className={`p-1 rounded-md transition-all ${isOpen ? "bg-slate-100 rotate-180" : ""}`}>
          <ChevronDown size={14} className="text-slate-500" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 space-y-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CustomCheckbox({ label, count, initialChecked = false }: { label: string; count: number; initialChecked?: boolean }) {
  const [checked, setChecked] = useState(initialChecked);
  return (
    <div className="flex items-center justify-between cursor-pointer group/item" onClick={() => setChecked(!checked)}>
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${checked ? "bg-[#FF5364] border-[#FF5364]" : "border-slate-200 group-hover/item:border-slate-300"}`}>
          {checked && <Check size={12} className="text-white" strokeWidth={4} />}
        </div>
        <span className={`text-xs font-bold ${checked ? "text-slate-900" : "text-slate-500"}`}>{label}</span>
      </div>
      <span className="text-[10px] font-black text-slate-300 bg-slate-50 px-2 py-0.5 rounded-full">+{count}</span>
    </div>
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