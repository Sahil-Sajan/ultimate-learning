"use client";

import React from "react";
import { Star, FileText, Heart } from "lucide-react";

// --- MAIN PAGE SWITCHER ---
export default function DashboardPage({ activeTab }: { activeTab: string }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {(activeTab === "Dashboard" || !activeTab) && <DashboardOverview />}
    </div>
  );
}

// --- DASHBOARD OVERVIEW COMPONENT ---
function DashboardOverview() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* 1. QUIZ PROGRESS BANNER - Responsive padding aur flex direction */}
      <div className="bg-white p-5 md:p-6 rounded-[32px] flex flex-col md:flex-row justify-between items-center border border-slate-100 shadow-sm gap-4">
        <div className="text-center md:text-left">
          <h4 className="text-sm font-black text-[#1D1B26]">
            Quiz : Build Responsive Real World
          </h4>
          <p className="text-xs text-slate-400 mt-1 font-bold">
            Answered : 15/22
          </p>
        </div>
        <button className="w-full md:w-auto bg-[#4E3796] text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-[#3D2B7A] transition-all">
          Continue Quiz
        </button>
      </div>

      {/* 2. STAT CARDS - Mobile par 2 columns (01.PNG style) aur desktop par 3 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <StatCard
          label="Enrolled Courses"
          value="12"
          icon="🎓"
          color="bg-[#F1F0F7] text-[#4E3796]"
        />
        <StatCard
          label="Active Courses"
          value="03"
          icon="📖"
          color="bg-[#FFF0F2] text-[#FF5364]"
        />
        {/* Mobile par 3rd card full width ho jayega balance ke liye */}
        <div className="col-span-2 md:col-span-1">
          <StatCard
            label="Completed Courses"
            value="10"
            icon="✅"
            color="bg-[#E7F9ED] text-[#22C55E]"
          />
        </div>
      </div>

      {/* 3. RECENTLY ENROLLED COURSES - Mobile par single column (image scrollable/stack) */}
      {/* 3. RECENTLY ENROLLED COURSES - SWIPE FEATURE FOR MOBILE */}
<div>
  <h3 className="text-xl font-black text-[#1D1B26] mb-6 px-2">
    Recently Enrolled Courses
  </h3>
  
  {/* Yahan changes hain: mobile par 'flex' aur 'overflow-x-auto', desktop par normal grid */}
  <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-2 scroll-smooth">
    
    {/* Har card ko 'min-w-[85%]' diya hai taaki mobile par ek pura dikhe aur baqi swipe se aaye */}
    <div className="min-w-[85%] md:min-w-full snap-center">
      <CourseCard
        image="/couse-1.webp"
        instructor="David Benitez"
        title="Information About UI/UX Design Degree"
        rating="4.9"
        reviews="200"
        price="120"
        category="Design"
      />
    </div>

    <div className="min-w-[85%] md:min-w-full snap-center">
      <CourseCard
        image="/cs-3.webp"
        instructor="Ana Reyes"
        title="Wordpress for Beginners - Master Wordpress Quickly"
        rating="4.4"
        reviews="180"
        price="140"
        category="Wordpress"
      />
    </div>

    <div className="min-w-[85%] md:min-w-full snap-center">
      <CourseCard
        image="/cs-4.webp"
        instructor="Andrew Pirtle"
        title="Sketch from A to Z (2024): Become an app designer"
        rating="4.6"
        reviews="170"
        price="160"
        category="Design"
      />
    </div>
  </div>
</div>

      {/* 4. BOTTOM SECTION - Stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 pb-10">
        <RecentInvoices />
        <LatestQuizzes />
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS (Design Unchanged, only Responsive tweaks) ---

function StatCard({ label, value, icon, color }: any) {
  return (
    <div className="bg-white p-4 md:p-8 rounded-[32px] border border-slate-100 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-6 shadow-sm h-full">
      <div
        className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-xl md:text-2xl shrink-0 ${color}`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest truncate">
          {label}
        </p>
        <p className="text-xl md:text-3xl font-black text-[#1D1B26] mt-1">{value}</p>
      </div>
    </div>
  );
}

function CourseCard({ image, instructor, title, rating, reviews, price, category }: any) {
  return (
    <div className="bg-white rounded-[32px] md:rounded-[40px] overflow-hidden border border-slate-100 shadow-sm group">
      <div className="h-40 md:h-44 bg-slate-200 relative overflow-hidden">
        <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full z-10 shadow-sm">
          <Heart size={14} className="text-slate-400" />
        </div>
        <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
        <span className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-lg text-[10px] font-black text-[#4E3796] uppercase shadow-sm">
          {category}
        </span>
      </div>
      <div className="p-5 md:p-6">
        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-slate-100" /> {instructor}
        </p>
        <h5 className="font-black text-[#1D1B26] text-sm leading-tight mb-3 line-clamp-2 h-10">
          {title}
        </h5>
        <div className="flex items-center gap-1 mb-4">
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-black text-[#1D1B26]">{rating}</span>
          <span className="text-xs text-slate-400">({reviews})</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
          <span className="text-lg font-black text-[#FF5364]">${price}</span>
          <button className="text-[9px] font-black bg-[#1D1B26] text-white px-4 py-2 rounded-xl uppercase tracking-widest">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

function RecentInvoices() {
  const invoices = [
    { id: "#INV001", name: "Build Responsive Websites", price: "$200" },
    { id: "#INV002", name: "Wordpress for Beginners", price: "$310" },
    { id: "#INV003", name: "UI/UX Design Degree", price: "$270" },
  ];
  return (
    <div className="bg-white p-5 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm">
      <h4 className="text-xl font-black text-[#1D1B26] mb-6">Recent Invoices</h4>
      <div className="space-y-4">
        {invoices.map((inv, i) => (
          <div key={i} className="flex flex-row items-center justify-between py-3 border-b border-slate-50 last:border-0 gap-2">
            <div className="min-w-0">
              <p className="text-xs md:text-sm font-black text-[#1D1B26] truncate">{inv.name}</p>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest truncate">{inv.id}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[9px] font-black text-[#4E3796]">{inv.price}</span>
              <span className="bg-[#E7F9ED] text-[#22C55E] text-[8px] font-black px-2 py-1 rounded-md uppercase">Paid</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LatestQuizzes() {
  const quizzes = [
    { name: "Sketch from A to Z (2024)", score: 95, date: "15 Jan" },
    { name: "Build Responsive Websites", score: 85, date: "04 Jan" },
    { name: "UI/UX Design Degree", score: 80, date: "26 Dec" },
  ];
  return (
    <div className="bg-white p-5 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-sm">
      <h4 className="text-xl font-black text-black mb-6">Latest Quizzes</h4>
      <div className="space-y-5">
        {quizzes.map((quiz, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="relative shrink-0 w-12 h-12">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="26" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-100" />
                <circle cx="30" cy="30" r="26" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={163.3} strokeDashoffset={163.3 - (163.3 * quiz.score) / 100} strokeLinecap="round" className="text-[#22C55E]" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[9px] font-black">{quiz.score}%</div>
            </div>
            <div className="min-w-0">
              <p className="text-xs md:text-sm font-black text-black truncate">{quiz.name}</p>
              <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">{quiz.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}