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
    <div className="min-h-screen bg-white text-slate-900 font-sans pb-20">
      {/* Header Section with Gradient Background matching image */}
      <div className="bg-gradient-to-r from-[#FFF0F0] to-[#E5F3FF] py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-[32px] font-bold text-slate-900 mb-2">
            Instructor Grid
          </h1>
          <nav className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
            <span>Home</span>
            <div className="w-3 h-[2px] bg-[#FF5364]" />
            <span className="text-slate-400">Instructor Grid</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar Filters */}
          <aside className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h2 className="text-sm font-bold flex items-center gap-2">
                <Filter size={18} /> Filters
              </h2>
              <button className="text-xs font-bold text-[#FF5364] hover:opacity-70 transition-opacity">
                Clear
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
                <button className="text-[#FF5364] text-xs font-bold pt-2 block">
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
                <div className="py-4">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={price}
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#FF5364]"
                  />
                  <div className="flex justify-between mt-3 text-xs text-slate-400">
                    <span>$0</span>
                    <span className="font-bold text-slate-900">
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

          {/* Main Content */}
          <main>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <span className="text-sm text-slate-500">
                Showing{" "}
                <span className="text-slate-900 font-semibold">
                  1-9 of 50 results
                </span>
              </span>

              <div className="flex items-center gap-3">
                <div className="flex bg-white rounded-md border border-slate-200 p-1">
                  <button
                    onClick={() => setView("grid")}
                    className={`p-1.5 rounded ${
                      view === "grid"
                        ? "bg-[#FF5364] text-white"
                        : "text-slate-400"
                    }`}
                  >
                    <LayoutGrid size={18} />
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className={`p-1.5 rounded ${
                      view === "list"
                        ? "bg-[#FF5364] text-white"
                        : "text-slate-400"
                    }`}
                  >
                    <List size={18} />
                  </button>
                </div>

                <select className="bg-white border border-slate-200 rounded-md text-xs font-semibold py-2 px-3 outline-none focus:border-[#FF5364]">
                  <option>Newly Published</option>
                  <option>Best Rated</option>
                </select>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="h-9 w-48 text-xs pl-9 pr-4 bg-white border border-slate-200 rounded-md outline-none focus:border-[#FF5364]"
                  />
                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
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

            {/* Pagination matched to image */}
            <div className="mt-12 flex justify-center items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-100 text-slate-400">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF5364] text-white text-xs font-bold">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 text-xs font-bold">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 text-xs font-bold">
                3
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-100 text-slate-400">
                <ChevronRight size={16} />
              </button>
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
    <div className="border-b border-slate-100 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800"
      >
        {title}
        <ChevronDown
          size={16}
          className={`text-slate-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="pt-3 space-y-2.5">{children}</div>}
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
      className="flex items-center justify-between cursor-pointer group"
      onClick={() => setChecked(!checked)}
    >
      <div className="flex items-center gap-2.5">
        <div
          className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
            checked ? "bg-[#FF5364] border-[#FF5364]" : "border-slate-200"
          }`}
        >
          {checked && (
            <Check size={10} className="text-white" strokeWidth={4} />
          )}
        </div>
        <span
          className={`text-xs font-medium ${
            checked ? "text-slate-900" : "text-slate-500"
          }`}
        >
          {label}
        </span>
      </div>
      <span className="text-[10px] text-slate-300">({count})</span>
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
      className={`group bg-white rounded-lg border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
        view === "list" ? "flex flex-row p-4 gap-6" : "flex flex-col"
      }`}
    >
      <div
        className={`relative ${
          view === "list" ? "w-48 h-40" : "aspect-[4/3]"
        } overflow-hidden`}
      >
        <img
          src={instructor.image}
          alt={instructor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center">
          <Heart
            size={14}
            className={
              instructor.favorite
                ? "text-[#FF5364] fill-[#FF5364]"
                : "text-slate-300"
            }
          />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          <Star size={12} className="text-[#FFB800] fill-[#FFB800]" />
          <span className="text-xs font-bold text-slate-900">
            {instructor.rating}
          </span>
          <span className="text-[10px] text-slate-400">
            ({instructor.reviews} Reviews)
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF5364] transition-colors mb-0.5">
          {instructor.name}
        </h3>
        <p className="text-xs text-slate-400 font-medium mb-4">
          {instructor.role}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-4">
          <div className="flex items-center gap-1.5">
            <BookOpen size={14} className="text-[#FF5364]" />
            <span className="text-[10px] font-bold text-slate-500 uppercase">
              {instructor.lessons}+ Lesson
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-[#6440FB]" />
            <span className="text-[10px] font-bold text-slate-500 uppercase">
              {instructor.hours}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
