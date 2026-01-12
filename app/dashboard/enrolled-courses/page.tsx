"use client";
import React, { useState } from "react";
import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const COURSES_DATA = [
  {
    id: 1,
    image: "/couse-1.webp",
    instructor: "David Benitez",
    title: "Information About UI/UX Design Degree",
    rating: "4.9",
    reviews: "200",
    price: "120",
    category: "Design",
  },
  {
    id: 2,
    image: "/cs-3.webp",
    instructor: "Ana Reyes",
    title: "Wordpress for Beginners - Master Wordpress Quickly",
    rating: "4.4",
    reviews: "160",
    price: "140",
    category: "Wordpress",
  },
  {
    id: 3,
    image: "/cs-4.webp",
    instructor: "Andrew Pirtle",
    title: "Sketch from A to Z (2024): Become an app designer",
    rating: "4.6",
    reviews: "170",
    price: "160",
    category: "Design",
  },
  {
    id: 4,
    image: "/cg-6.avif",
    instructor: "Christy Garner",
    title: "Build Responsive Real World Websites with Crash Course",
    rating: "4.2",
    reviews: "220",
    price: "200",
    category: "Programming",
  },
  {
    id: 5,
    image: "/cg-2.avif",
    instructor: "Justin Gregory",
    title: "Learn JavaScript and Express to become a Expert",
    rating: "4.4",
    reviews: "180",
    price: "130",
    category: "Programming",
  },
  {
    id: 6,
    image: "/cg-1.webp",
    instructor: "Carolyn Hines",
    title: "Introduction to Python Programming",
    rating: "4.7",
    reviews: "130",
    price: "150",
    category: "Programming",
  },
  {
    id: 7,
    image: "/fs-3.avif",
    instructor: "Rafael Miller",
    title: "Build Responsive Websites with HTML5 and CSS3",
    rating: "4.1",
    reviews: "140",
    price: "170",
    category: "Programming",
  },
  {
    id: 8,
    image: "/cg-4.webp",
    instructor: "Nancy Duarte",
    title: "Information About Photoshop Design Degree",
    rating: "4.3",
    reviews: "190",
    price: "110",
    category: "Design",
  },
  {
    id: 9,
    image: "/cs-4.webp",
    instructor: "James Kagan",
    title: "C# Developers Double Your Coding with Visual Studio",
    rating: "4.8",
    reviews: "110",
    price: "180",
    category: "Programming",
  },
];

export default function EnrolledCoursesView() {
  const [filter, setFilter] = useState("Enrolled");

  return (
    <div className="space-y-8">
      {/* Header with Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="text-xl font-black text-[#1D1B26]">Enrolled Courses</h3>

        <div className="flex bg-slate-100 p-1 rounded-2xl">
          {["Enrolled (09)", "Active (06)", "Completed (03)"].map((tab) => {
            const isSelected = tab.startsWith(filter);
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab.split(" ")[0])}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-[#FF5364] text-white shadow-lg"
                    : "text-slate-500 hover:text-[#1D1B26]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES_DATA.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-100">
        <p className="text-xs font-bold text-slate-400">Page 1 of 2</p>
        <div className="flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-100 text-slate-400 hover:bg-slate-50 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF5364] text-white font-bold text-xs shadow-md">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-100 text-slate-600 font-bold text-xs hover:bg-slate-50 transition-colors">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-100 text-slate-400 hover:bg-slate-50 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function CourseCard({
  image,
  instructor,
  title,
  rating,
  reviews,
  price,
  category,
}: any) {
  return (
    <div className="bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm group hover:shadow-xl transition-all duration-500">
      <div className="h-48 bg-slate-200 relative overflow-hidden">
        <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full z-10 cursor-pointer shadow-sm group/heart">
          <Heart
            size={14}
            className="text-slate-400 group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-all"
          />
        </div>
        <img
          src={image}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          alt={title}
        />
        <span className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded-xl text-[10px] font-black text-[#4E3796] uppercase shadow-sm">
          {category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200" />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            {instructor}
          </p>
          <span className="ml-auto bg-slate-50 text-slate-400 text-[9px] font-black px-2 py-0.5 rounded uppercase">
            {category}
          </span>
        </div>

        <h5 className="font-black text-[#1D1B26] text-[15px] leading-tight mb-4 line-clamp-2 h-10 group-hover:text-[#4E3796] transition-colors">
          {title}
        </h5>

        <div className="flex items-center gap-1 mb-6">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-black text-[#1D1B26]">{rating}</span>
          <span className="text-xs text-slate-400 font-bold">
            ({reviews} Reviews)
          </span>
        </div>

        <div className="flex justify-between items-center pt-5 border-t border-slate-50">
          <span className="text-xl font-black text-[#FF5364]">${price}</span>
          <button className="text-[11px] font-black bg-[#1D1B26] text-white px-5 py-3 rounded-2xl uppercase tracking-widest hover:bg-[#4E3796] transition-all shadow-sm active:scale-95">
            View Course
          </button>
        </div>
      </div>
    </div>
  );
}
