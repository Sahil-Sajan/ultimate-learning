"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  favorite?: boolean;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Rolands Granger",
    role: "Developer",
    rating: 4.9,
    reviews: 200,
    lessons: 12,
    hours: "169hr 20min",
    image: "/instructor1.webp",
    favorite: true,
  },
  {
    id: 2,
    name: "Lisa Lopez",
    role: "Finance",
    rating: 4.4,
    reviews: 130,
    lessons: 22,
    hours: "15hr 06min",
    image: "/instructor2.webp",
  },
  {
    id: 3,
    name: "Charles Ruiz",
    role: "Cloud Engineer",
    rating: 4.5,
    reviews: 120,
    lessons: 16,
    hours: "2hr 25min",
    image: "/instructor3.webp",
  },
  {
    id: 4,
    name: "Rogerina Grogan",
    role: "Vocational",
    rating: 4.6,
    reviews: 180,
    lessons: 6,
    hours: "19hr 30min",
    image: "/instructor4.webp",
  },
  {
    id: 5,
    name: "Ivana Tow",
    role: "Corporate Trainer",
    rating: 4.2,
    reviews: 210,
    lessons: 25,
    hours: "4hr 20min",
    image: "/instructor5.webp",
    favorite: true,
  },
  {
    id: 6,
    name: "Kevin Leonard",
    role: "Developer",
    rating: 4.5,
    reviews: 140,
    lessons: 11,
    hours: "7hr 10min",
    image: "/instructor6.webp",
  },
];

/* ---------------- PAGE COMPONENT ---------------- */

export default function InstructorGridPage() {
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
              </CustomAccordion>

              <CustomAccordion title="Level">
                {["Beginner", "Intermediate", "Advanced", "Expert"].map(
                  (item) => (
                    <CustomCheckbox
                      key={item}
                      label={item}
                      count={Math.floor(Math.random() * 20)}
                    />
                  )
                )}
              </CustomAccordion>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 order-1 lg:order-2">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <span className="text-sm text-slate-500">
                Showing{" "}
                <span className="text-black font-bold">1-6 of 50 results</span>
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <select className="bg-white border border-slate-300 rounded-md text-xs font-bold py-2.5 px-3 outline-none focus:border-black grow sm:grow-0">
                  <option>Newly Published</option>
                  <option>Best Rated</option>
                </select>

                <div className="relative grow sm:grow-0">
                  <input
                    type="text"
                    placeholder="Search instructors..."
                    className="h-10 w-full sm:w-60 text-xs pl-10 pr-4 bg-white border border-slate-300 rounded-md outline-none focus:border-black"
                  />
                  <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {instructors.map((ins) => (
                  <InstructorCard key={ins.id} instructor={ins} />
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

function CustomAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
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

function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden shrink-0">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center z-10 hover:scale-110 transition-transform active:scale-90">
          <Heart
            size={18}
            className="text-[#FF5364] fill-transparent hover:fill-[#FF5364] transition-colors"
            strokeWidth={2.5}
          />
        </button>
      </div>

      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-1.5 mb-2.5">
          <Star size={14} className="text-[#FFB800] fill-[#FFB800]" />
          <span className="text-sm font-bold text-black">
            {instructor.rating}
          </span>
          <span className="text-xs font-medium text-slate-400">
            ({instructor.reviews} Reviews)
          </span>
        </div>

        <h3 className="text-lg font-bold text-black group-hover:text-[#FF5364] transition-colors mb-1">
          {instructor.name}
        </h3>
        <p className="text-sm text-slate-500 font-medium mb-5">
          {instructor.role}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-rose-50 rounded-lg">
              <BookOpen size={16} className="text-[#FF5364]" />
            </div>
            <span className="text-[11px] font-extrabold text-slate-600 uppercase tracking-tight">
              {instructor.lessons}+ Lessons
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-50 rounded-lg">
              <Clock size={16} className="text-[#6440FB]" />
            </div>
            <span className="text-[11px] font-extrabold text-slate-600 uppercase tracking-tight">
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
    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-800 hover:bg-[#FF5B5C] hover:text-white transition-all">
      {icon}
    </button>
  );
}
