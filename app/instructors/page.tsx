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
  RotateCcw,
  ChevronDown,
  Check,
} from "lucide-react";
import Navbar from "@/ui/Navbar";

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
  {
    id: 1,
    name: "Rolands Granger",
    role: "Developer",
    rating: 4.9,
    reviews: 200,
    lessons: 12,
    hours: "169hr 20min",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Lisa Lopez",
    role: "Finance",
    rating: 4.4,
    reviews: 130,
    lessons: 22,
    hours: "15hr 06min",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    favorite: true,
  },
  {
    id: 3,
    name: "Charles Ruiz",
    role: "Cloud Engineer",
    rating: 4.5,
    reviews: 120,
    lessons: 16,
    hours: "2hr 25min",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Rogerina Grogan",
    role: "Vocational",
    rating: 4.6,
    reviews: 180,
    lessons: 6,
    hours: "19hr 30min",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Ivana Tow",
    role: "Corporate Trainer",
    rating: 4.2,
    reviews: 210,
    lessons: 25,
    hours: "4hr 20min",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Kevin Leonard",
    role: "Developer",
    rating: 4.5,
    reviews: 140,
    lessons: 11,
    hours: "7hr 10min",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
];

/* ---------------- PAGE COMPONENT ---------------- */

export default function InstructorGridPage() {
  const [view, setView] = useState<ViewType>("grid");
  const [price, setPrice] = useState(69850);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-20">
      <Navbar />

      <div className="bg-[#EBF5FF] py-14 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-[42px] font-black text-slate-900 mb-3 tracking-tight">
            Instructor Grid
          </h1>
          <nav className="flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <div className="w-4 h-[2px] bg-pink-500" />
            <span className="text-slate-500">Instructor Grid</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          <aside className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-slate-200 mb-4">
              <h2 className="text-[13px] font-black uppercase tracking-widest flex items-center gap-2">
                <Filter size={16} className="text-pink-500" /> Filters
              </h2>
              <button className="text-[10px] font-black text-pink-500 uppercase flex items-center gap-1 hover:opacity-70 transition-opacity">
                <RotateCcw size={12} /> Clear
              </button>
            </div>

            <div className="flex flex-col gap-4">
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
                <button className="text-pink-500 text-[11px] font-black uppercase tracking-widest pt-2 hover:underline">
                  See More
                </button>
              </CustomAccordion>

              <CustomAccordion title="Instructors">
                {["Nicole Brown", "Hinata Hyuga", "John Doe"].map((item) => (
                  <CustomCheckbox
                    key={item}
                    label={item}
                    count={10}
                    initialChecked={item === "Nicole Brown"}
                  />
                ))}
              </CustomAccordion>

              <CustomAccordion title="Price Range">
                <div className="py-4 px-1">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-pink-500"
                  />
                  <div className="flex justify-between mt-4 text-[11px] font-black text-slate-400">
                    <span>$0</span>
                    <span className="text-slate-900 bg-slate-100 px-2 py-1 rounded-sm">
                      ${price.toLocaleString()}
                    </span>
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

          <main className="flex-grow">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <span className="text-[13px] font-bold text-slate-400">
                Showing{" "}
                <span className="text-slate-900 font-black">
                  1-9 of 50 results
                </span>
              </span>

              <div className="flex items-center gap-4">
                <div className="flex bg-white rounded-md border border-slate-200 p-1 shadow-sm">
                  <button
                    onClick={() => setView("grid")}
                    className={`p-1.5 rounded transition-all ${
                      view === "grid"
                        ? "bg-pink-500 text-white"
                        : "text-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className={`p-1.5 rounded transition-all ${
                      view === "list"
                        ? "bg-pink-500 text-white"
                        : "text-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    <List size={16} />
                  </button>
                </div>

                <select className="bg-white border border-slate-200 rounded-md text-[11px] font-black uppercase py-2.5 px-4 shadow-sm outline-none cursor-pointer tracking-widest text-slate-600 focus:border-pink-500">
                  <option>Newly Published</option>
                  <option>Best Rated</option>
                </select>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="SEARCH..."
                    className="h-10 w-44 text-[10px] font-black tracking-widest pl-10 pr-4 bg-white border border-slate-200 rounded-md outline-none focus:border-pink-500 transition-all shadow-sm"
                  />
                  <Search
                    size={14}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>
            </div>

            <div
              className={`grid gap-6 ${
                view === "grid"
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              <AnimatePresence mode="popLayout">
                {instructors.map((ins) => (
                  <InstructorCard key={ins.id} instructor={ins} view={view} />
                ))}
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------------- CUSTOM UI COMPONENTS ---------------- */

function CustomAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="border border-slate-100 rounded-sm bg-white shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-[12px] font-black uppercase tracking-widest text-slate-800 hover:bg-slate-50 transition-colors"
      >
        {title}
        <ChevronDown
          size={14}
          className={`text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 pt-0 space-y-3">{children}</div>
      </div>
    </div>
  );
}

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
    <div
      className="flex items-center justify-between group cursor-pointer"
      onClick={() => setChecked(!checked)}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
            checked
              ? "bg-pink-500 border-pink-500"
              : "border-slate-200 bg-white"
          }`}
        >
          {checked && (
            <Check size={12} className="text-white" strokeWidth={4} />
          )}
        </div>
        <span
          className={`text-[13px] font-bold transition-colors ${
            checked
              ? "text-slate-900"
              : "text-slate-500 group-hover:text-slate-700"
          }`}
        >
          {label}
        </span>
      </div>
      <span className="text-[11px] font-black text-slate-300">({count})</span>
    </div>
  );
}

function InstructorCard({
  instructor,
  view,
}: {
  instructor: Instructor;
  view: ViewType;
}) {
  return (
    <motion.div
      layout
      className={`group bg-white rounded-sm border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 ${
        view === "list" ? "flex flex-row p-4 gap-6" : "flex flex-col h-full"
      }`}
    >
      <div
        className={`relative overflow-hidden shrink-0 ${
          view === "list" ? "w-52 h-44 rounded-sm" : "aspect-[4/3]"
        }`}
      >
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <button
          className={`absolute top-4 left-4 h-9 w-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
            instructor.favorite
              ? "bg-pink-500 text-white shadow-lg"
              : "bg-white/90 text-slate-400 hover:bg-pink-500 hover:text-white"
          }`}
        >
          <Heart
            size={16}
            fill={instructor.favorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 mb-3">
          <Star size={12} className="text-[#f39c12] fill-[#f39c12]" />
          <span className="text-[13px] font-black text-slate-900">
            {instructor.rating}
          </span>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
            ({instructor.reviews} Reviews)
          </span>
        </div>

        <h3 className="text-[20px] font-black text-[#0f2137] group-hover:text-pink-500 transition-colors mb-1 leading-tight">
          {instructor.name}
        </h3>
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
          {instructor.role}
        </p>

        <div className="mt-auto pt-5 border-t border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-pink-500" />
            <span className="text-[11px] font-black uppercase text-slate-500 tracking-tighter">
              {instructor.lessons}+ Lessons
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-blue-400" />
            <span className="text-[11px] font-black uppercase text-slate-500 tracking-tighter">
              {instructor.hours}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
