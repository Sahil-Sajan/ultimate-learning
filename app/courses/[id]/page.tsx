"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { courses } from "../page";
import Navbar from "@/ui/Navbar";
import {
  Star,
  User,
  Clock,
  BookOpen,
  Play,
  CheckCircle2,
  Heart,
  Share2,
  BarChart,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

export default function CourseDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Description");

  const course = courses.find((c) => c.id === Number(id));

  // 1. Get 10 Popular Courses (Cycling the list to ensure it's full)
  const popularSidebar = [...courses, ...courses].slice(0, 10);

  // 2. Get Related Courses
  const relatedCourses = courses.filter((c) => c.id !== Number(id)).slice(0, 3);

  if (!course)
    return (
      <div className="p-20 text-center font-bold text-slate-900">
        Course not found
      </div>
    );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white font-sans text-slate-700 pb-20">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* HEADER SECTION */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2 text-[20px] font-black text-slate-400 uppercase tracking-widest">
              <span>{course.category}</span>
              {course.status !== "Normal" && (
                <span className="bg-[#f39c12] text-white px-2 py-0.5 rounded-sm text-[17px] font-black uppercase italic ml-2">
                  {course.status}
                </span>
              )}
            </div>
            <div className="flex gap-4 text-slate-400 text-[20px] font-bold">
              <button className="flex items-center gap-1.5 hover:text-slate-900 transition-colors uppercase">
                <Share2 size={20} /> Share
              </button>
            </div>
          </div>

          <h1 className="text-[42px] font-black text-[#0f2137] mb-6 leading-none tracking-tighter">
            {course.title} from professional
          </h1>

          {/* STATS BAR */}
          <div className="flex flex-wrap items-center gap-10 mb-5 pb-10 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <User size={20} />
              </div>
              <div className="leading-tight">
                <p className="text-[18px] text-slate-400 font-black uppercase tracking-widest">
                  Instructor
                </p>
                <p className="font-bold text-[#0f2137] text-[18px]">
                  {course.instructor}
                </p>
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-[18px] text-slate-400 font-black uppercase tracking-widest">
                Enrolled
              </p>
              <p className="font-bold text-[#0f2137] text-[18px]">
                1,240 students
              </p>
            </div>
            <div className="flex items-center gap-2 leading-tight">
              <div className="flex text-[#f39c12] text-[18px]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={
                      i < Math.floor(course.rating) ? "currentColor" : "none"
                    }
                    strokeWidth={2}
                  />
                ))}
              </div>
              <span className="font-black text-[#0f2137] text-[18px]">
                {course.rating}{" "}
                <span className="text-black text-[18px] font-bold ml-1 ">
                  / 5.0
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* LEFT COLUMN */}
            <div className="grow">
              <div className="flex gap-8 border-b border-slate-200 mb-6 overflow-x-auto no-scrollbar">
                {["Description", "Curriculum", "FAQ", "Notice", "Reviews"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-4 text-[18px] font-black uppercase tracking-widest transition-all relative ${
                        activeTab === tab
                          ? "text-[#f39c12] border-b-2 border-[#f39c12]"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>

              <div className="bg-slate-100 aspect-video rounded-sm overflow-hidden mb-12 border border-slate-200 shadow-sm">
                <img
                  src={course.image}
                  className="w-full h-full object-cover"
                  alt={course.title}
                />
              </div>

              <div className="space-y-12 mb-12">
                <section>
                  <h2 className="text-[28px] font-black text-[#0f2137] mb-6 tracking-normal uppercase">
                    What you'll learn
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      `Master ${course.category} fundamentals`,
                      "Industry standard projects",
                      "Direct support from experts",
                      "Lifetime access to materials",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-3 text-slate-600 font-bold text-[20px]"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-[#f39c12] shrink-0"
                        />{" "}
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-slate-50 border border-slate-200 rounded-sm">
                  <h2 className="text-[22px] font-black text-[#0f2137] mb-4 tracking-tighter uppercase">
                    Targeted Audience
                  </h2>
                  <ul className="space-y-3 text-slate-500 font-medium text-[20px]">
                    <li className="flex gap-2">
                      <span>•</span> {course.level} learners looking to
                      specialize in {course.category}.
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> Professionals wanting to upgrade their
                      skills with {course.instructor}.
                    </li>
                    <li className="flex gap-2">
                      <span>•</span> Anyone looking to start a career in
                      technical {course.category}.
                    </li>
                  </ul>
                </section>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="w-full lg:w-87.5 shrink-0 space-y-10">
              <div className="bg-white border border-slate-200 shadow-xl shadow-slate-100">
                <div className="p-8 border-b border-slate-100">
                  <div className="text-center mb-6">
                    <p className="text-[17px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
                      Course Price
                    </p>
                    <h2 className="text-6xl font-black text-[#0f2137]">
                      {course.price === 0
                        ? "FREE"
                        : `$${course.price.toFixed(2)}`}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-[#f39c12] text-white py-5 rounded-sm font-black uppercase text-[17px] tracking-widest hover:bg-[#e67e22] transition-all shadow-lg shadow-orange-100">
                      Continue Learning
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-2 border cursor-pointer border-slate-200 py-3 text-[14px] font-black text-[#0f2137] uppercase hover:bg-slate-50 transition-colors">
                        <ShoppingCart size={14} /> Add to Cart
                      </button>
                      <button className="flex items-center justify-center gap-2 border cursor-pointer border-slate-200 py-3 text-[14px] font-black text-[#0f2137] uppercase hover:bg-slate-50 transition-colors">
                        <Heart size={14} /> Wishlist
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50/50 space-y-5 ">
                  <SidebarDetail
                    icon={<Clock size={18} />}
                    label="Duration"
                    value="12 hours"
                  />
                  <SidebarDetail
                    icon={<BookOpen size={18} />}
                    label="Lectures"
                    value="14"
                  />
                  <SidebarDetail
                    icon={<BarChart size={18} />}
                    label="Level"
                    value={course.level}
                  />
                </div>
              </div>

              {/* POPULAR COURSES - 10 ITEMS */}
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                  <h3 className="text-[17px] font-black text-[#0f2137] uppercase tracking-widest">
                    Popular courses
                  </h3>
                  <span className="text-[#f39c12] text-[17px] font-black uppercase cursor-pointer">
                    View All
                  </span>
                </div>
                <div className="space-y-6">
                  {popularSidebar.map((item, idx) => (
                    <PopularItem key={idx} course={item} />
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* RELATED COURSES - IMPROVED CARDS */}
          <section className=" border-t border-slate-200">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-black text-[#0f2137] tracking-tighter uppercase mb-2">
                  Related courses
                </h2>
                <div className="h-1.5 w-20 bg-[#f39c12]"></div>
              </div>
              <button className="text-sm font-black text-slate-500 uppercase tracking-widest hover:text-[#f39c12]">
                Browse All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCourses.map((rc) => (
                <RelatedCourseCard key={rc.id} course={rc} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

// --- SUB-COMPONENTS ---

function SidebarDetail({ icon, label, value }: any) {
  return (
    <div className="flex justify-between items-center text-slate-500 text-[22px] font-bold">
      <div className="flex items-center gap-3">
        <span className="text-[#f39c12]">{icon}</span> {label}
      </div>
      <span className="text-[#0f2137]">{value}</span>
    </div>
  );
}

function PopularItem({ course }: { course: any }) {
  return (
    <Link href={`/courses/${course.id}`} className="flex gap-4 group">
      <div className="w-20 h-16 bg-slate-100 rounded-sm shrink-0 relative overflow-hidden border border-slate-100">
        <img
          src={course.image}
          alt="thumb"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
        />
        {course.status !== "Normal" && (
          <div className="absolute top-0 left-0 bg-[#f39c12] text-white text-[7px] font-black px-1.5 py-0.5 uppercase italic">
            {course.status}
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-[13px] font-black text-[#0f2137] leading-tight group-hover:text-[#f39c12] transition-colors line-clamp-2 mb-1">
          {course.title}
        </h4>
        <div className="flex items-center gap-2">
          <span className="text-[12px] font-black text-slate-900">
            {course.price === 0 ? "FREE" : `$${course.price.toFixed(2)}`}
          </span>
          <div className="flex text-[#f39c12]">
            <Star size={10} fill="currentColor" strokeWidth={0} />
            <span className="text-[10px] ml-1 text-slate-400 font-bold">
              {course.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function RelatedCourseCard({ course }: { course: any }) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group block bg-white border border-slate-200 overflow-hidden transition-all duration-500"
    >
      <div className="relative aspect-4/3">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Professional Status Badge */}
        {course.status !== "Normal" && (
          <div className="absolute top-0 right-0 bg-[#f39c12] text-white text-[10px] font-black px-4 py-1.5 uppercase italic z-10">
            {course.status}
          </div>
        )}
        {/* Dark Price Badge Overlap */}
        <div className="absolute bottom-0 right-0 bg-[#0f2137] text-white px-5 py-2 text-[20px] font-black z-10">
          {course.price === 0 ? "FREE" : `$${course.price.toFixed(2)}`}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <p className="text-[12px] font-black text-[#f39c12] uppercase tracking-widest">
          {course.category}
        </p>
        <h3 className="text-[22px] font-black text-[#0f2137] leading-tight line-clamp-2 min-h-14 group-hover:text-[#f39c12] transition-colors">
          {course.title}
        </h3>
        <p className="text-slate-400 text-[18px] font-bold line-clamp-1 -mt-2.5 italic">
          {course.description}
        </p>

        {/* Instructor Info */}
        <div className="flex items-center gap-3 -mt-2.5 pt-4 border-t border-slate-50">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
            <User size={19} />
          </div>
          <span className="text-[19px] font-bold text-slate-600">
            {course.instructor}
          </span>
        </div>

        {/* Professional Meta Grid */}
        <div className="grid grid-cols-3 -mt-2.5 gap-0.5 pt-4 border-t border-slate-100 text-[18px] font-black text-slate-300 uppercase tracking-tighter">
          <div className="text-center py-2 border-r border-slate-100 text-slate-500 transition-colors">
            {course.level}
          </div>
          <div className="text-center py-2 border-r border-slate-100 text-slate-500 transition-colors">
            14 MODULES
          </div>
          <div className="text-center py-2 text-slate-500 transition-colors">
            LIFETIME
          </div>
        </div>
      </div>
    </Link>
  );
}
