"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Star,
  ChevronDown,
  Search,
  LayoutGrid,
  Heart,
  ChevronRight,
  Filter,
  X
} from "lucide-react";

// Updated data with review counts
export const courses: any[] = [
  { id: 1, title: "Mastering C++ for Systems", instructor: "Dr. Robert Pike", price: 49.99, category: "Software Development", rating: 4.8, reviews: 154, image: "blog1.webp" },
  { id: 2, title: "Java Enterprise Edition", instructor: "James Gosling", price: 59.0, category: "Software Development", rating: 4.5, reviews: 82, image: "blog2.avif" },
  { id: 3, title: "Python for Data Science", instructor: "Guido van Rossum", price: 39.99, category: "Software Development", rating: 4.2, reviews: 210, image: "blog3.webp" },
  { id: 4, title: "Digital Illustration 101", instructor: "Alice Blue", price: 25.0, category: "Art", rating: 3.8, reviews: 45, image: "blog4.webp" },
  { id: 5, title: "Modern JavaScript (ES6+)", instructor: "Sarah Drasner", price: 19.99, category: "Software Development", rating: 4.9, reviews: 512, image: "blog5.webp" },
  { id: 6, title: "Public Speaking Mastery", instructor: "Dale Carnegie", price: 45.0, category: "Material Design", rating: 4.6, reviews: 98, image: "blog6.webp" },
  { id: 7, title: "Financial Literacy", instructor: "Warren B.", price: 0.0, category: "Material Design", rating: 4.7, reviews: 320, image: "blog7.avif" },
  { id: 8, title: "Machine Learning A-Z", instructor: "Andrew Ng", price: 89.99, category: "Software Development", rating: 4.8, reviews: 415, image: "blog8.webp" },
  { id: 9, title: "Yoga & Mindfulness", instructor: "Adriene Mishler", price: 15.0, category: "Exercise", rating: 4.4, reviews: 76, image: "blog9.avif" },
];

export default function CourseCatalog() {
  const [selectedCats, setSelectedCats] = useState<string[]>(["IT & Software"]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCFD] pb-20">
      {/* 1. TOP BREADCRUMB SECTION */}
      <div className="w-full bg-linear-to-r from-pink-50 to-blue-50 py-10 md:py-16 text-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-[#1D2026] mb-2">Course Grid</h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#FF5B5C]">Home</Link>
          <span className="text-[#FF5B5C]">—</span>
          <span>Course Grid</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:-mt-12">
        {/* 2. FILTER TOP BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <div className="flex items-center gap-2 text-[#6E7485] font-medium">
              <span className="bg-[#FF5B5C] text-white p-2 rounded-md">
                <LayoutGrid size={18} />
              </span>
              <span className="text-sm">Showing 1-9 of {courses.length} results</span>
            </div>
            
            {/* MOBILE FILTER TOGGLE BUTTON */}
            <button 
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-[#1D2026]"
            >
              {showMobileFilters ? <X size={18}/> : <Filter size={18} />}
              Filters
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-auto">
              <select className="w-full appearance-none bg-white border border-gray-200 px-4 py-2.5 pr-10 rounded-lg text-sm text-[#1D2026] outline-none cursor-pointer">
                <option>Newly Published</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={16} />
            </div>
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="w-full md:w-64 border border-gray-200 px-4 py-2.5 rounded-lg text-sm outline-none"
              />
              <Search className="absolute right-3 top-3 text-gray-400" size={16} />
            </div>
          </div>
        </div>

        {/* 3. RESPONSIVE LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* FILTER SECTION: Dropdown on Mobile, Sidebar on Desktop */}
          <aside className={`
            ${showMobileFilters ? "flex" : "hidden"} 
            lg:flex flex-col gap-6 w-full lg:w-75 transition-all duration-300
          `}>
            <FilterBox title="Categories">
              {["Backend", "CSS", "Frontend", "IT & Software", "Photography", "Programming Language"].map((cat, index) => (
                <FilterCheckbox
                  key={`${cat}-${index}`}
                  label={cat}
                  checked={selectedCats.includes(cat)}
                  count={3}
                />
              ))}
              <button className="text-[#FF5B5C] text-sm font-semibold mt-2 text-left">See More</button>
            </FilterBox>

            <FilterBox title="Instructors">
              {["Kerry White", "Hinata Hyuga", "John Doe", "Nicole Brown"].map((ins) => (
                <FilterCheckbox key={ins} label={ins} checked={ins === "Nicole Brown"} count={10} />
              ))}
            </FilterBox>

            <FilterBox title="Price">
              <div className="space-y-3">
                <FilterCheckbox label="All" count={10} checked />
                <FilterCheckbox label="Free" count={5} />
                <FilterCheckbox label="Paid" count={3} />
              </div>
            </FilterBox>
          </aside>

          {/* 4. COURSE GRID */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  <Link href={`/courses/${course.id}`} className="relative h-52 block overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <button className="absolute top-3 left-3 bg-white/90 p-2 rounded-full text-gray-600 hover:text-red-500 shadow-sm" onClick={(e) => e.preventDefault()}>
                      <Heart size={18} />
                    </button>
                  </Link>

                  <div className="p-5">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-orange-100 overflow-hidden">
                          <img src={`https://i.pravatar.cc/150?u=${course.id}`} alt="instructor" />
                        </div>
                        <span className="text-xs text-gray-500 font-medium">{course.instructor}</span>
                      </div>
                      <span className="bg-gray-50 text-gray-500 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">{course.category}</span>
                    </div>

                    <Link href={`/courses/${course.id}`}>
                      <h3 className="text-[16px] font-bold text-[#1D2026] leading-snug mb-3 group-hover:text-[#FF5B5C] transition-colors line-clamp-2 min-h-11">
                        {course.title}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-1 mb-4">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill={i < 4 ? "#FFB133" : "none"} stroke={i < 4 ? "#FFB133" : "#D1D5DB"} />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-[#1D2026] ml-1">{course.rating}</span>
                      <span className="text-xs text-gray-400">({course.reviews} Reviews)</span>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xl font-bold text-[#FF5B5C]">${course.price}</span>
                      <Link href={`/courses/${course.id}`}>
                        <button className="flex items-center gap-1 bg-[#1D2026] text-white text-[11px] font-bold px-4 py-2 rounded-full hover:bg-[#FF5B5C] transition-all">
                          View Course <ChevronRight size={14} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF5B5C] text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-400 font-bold hover:bg-gray-100">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-400 font-bold hover:bg-gray-100"><ChevronRight size={18} /></button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function FilterBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
      <h3 className="text-[#1D2026] font-bold text-lg mb-6 flex justify-between items-center">
        {title} <ChevronDown size={18} className="text-gray-400" />
      </h3>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

function FilterCheckbox({ label, checked = false, count = 0 }: { label: string; checked?: boolean; count?: number }) {
  return (
    <label className="flex items-center justify-between group cursor-pointer">
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded border transition-all flex items-center justify-center ${checked ? "bg-[#FF5B5C] border-[#FF5B5C]" : "border-gray-200 group-hover:border-[#FF5B5C]"}`}>
          {checked && <div className="w-2 h-2 bg-white rounded-full" />}
        </div>
        <span className={`text-sm ${checked ? "text-[#1D2026] font-bold" : "text-gray-500"}`}>{label}</span>
      </div>
      <span className="text-xs text-gray-400">({count})</span>
    </label>
  );
}
