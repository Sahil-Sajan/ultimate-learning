"use client";
import React from "react";
import { Star, FileText, Heart } from "lucide-react";

// --- MAIN PAGE SWITCHER ---
export default function DashboardPage({ activeTab }: { activeTab: string }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
     {(activeTab === "Dashboard") && <DashboardOverview />}

     {activeTab !== "Dashboard" && (
        <div className="bg-white p-20 rounded-[40px] text-center border border-dashed border-slate-200">
          <h2 className="text-2xl font-black text-slate-300 italic uppercase tracking-widest">
            {activeTab}
          </h2>
        </div>
      )}
    </div>
  );
}

// --- DASHBOARD OVERVIEW COMPONENT ---
function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* 1. QUIZ PROGRESS BANNER */}
      <div className="bg-white p-6 rounded-[32px] flex flex-col md:flex-row justify-between items-center border border-slate-100 shadow-sm gap-4">
        <div>
          <h4 className="text-sm font-black text-[#1D1B26]">
            Quiz : Build Responsive Real World
          </h4>
          <p className="text-xs text-slate-400 mt-1 font-bold">
            Answered : 15/22
          </p>
        </div>
        <button className="bg-[#4E3796] text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-[#3D2B7A] transition-all">
          Continue Quiz
        </button>
      </div>

      {/* 2. STAT CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
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
        <StatCard
          label="Completed Courses"
          value="10"
          icon="✅"
          color="bg-[#E7F9ED] text-[#22C55E]"
        />
      </div>

      {/* 3. RECENTLY ENROLLED COURSES */}
      <div>
        <h3 className="text-xl font-black text-[#1D1B26] mb-6">
          Recently Enrolled Courses
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <CourseCard
            image="/couse-1.webp"
            instructor="David Benitez"
            title="Information About UI/UX Design Degree"
            rating="4.9"
            reviews="200"
            price="120"
            category="Design"
          />
          <CourseCard
            image="/cs-3.webp"
            instructor="Ana Reyes"
            title="Wordpress for Beginners - Master Wordpress Quickly"
            rating="4.4"
            reviews="180"
            price="140"
            category="Wordpress"
          />
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

      {/* 4. BOTTOM SECTION */}
      <div className="grid lg:grid-cols-2 gap-8">
        <RecentInvoices />
        <LatestQuizzes />
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatCard({ label, value, icon, color }: any) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-slate-100 flex items-center gap-6 shadow-sm">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${color}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
          {label}
        </p>
        <p className="text-3xl font-black text-[#1D1B26] mt-1">{value}</p>
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
    <div className="bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm group">
      <div className="h-44 bg-slate-200 relative overflow-hidden">
        <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full z-10 cursor-pointer shadow-sm">
          <Heart
            size={14}
            className="text-slate-400 hover:text-red-500 transition-colors"
          />
        </div>
        <img
          src={image}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          alt=""
        />
        <span className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-lg text-[10px] font-black text-[#4E3796] uppercase shadow-sm">
          {category}
        </span>
      </div>
      <div className="p-6">
        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-slate-100" /> {instructor}
        </p>
        <h5 className="font-black text-[#1D1B26] text-sm leading-tight mb-3 line-clamp-2 h-10">
          {title}
        </h5>
        <div className="flex items-center gap-1 mb-4">
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-black text-[#1D1B26]">{rating}</span>
          <span className="text-xs text-slate-400 font-medium">
            ({reviews} Reviews)
          </span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
          <span className="text-lg font-black text-[#FF5364]">${price}</span>
          <button className="text-[10px] font-black bg-[#1D1B26] text-white px-5 py-2.5 rounded-xl uppercase tracking-widest hover:bg-[#4E3796] transition-all">
            View Course
          </button>
        </div>
      </div>
    </div>
  );
}

function RecentInvoices() {
  const invoices = [
    {
      id: "#INV001",
      name: "Build Responsive Real World Websites",
      price: "$200",
    },
    { id: "#INV002", name: "Wordpress for Beginners", price: "$310" },
    {
      id: "#INV003",
      name: "Information About UI/UX Design Degree",
      price: "$270",
    },
  ];
  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
      <h4 className="text-xl font-black text-[#1D1B26] mb-6">
        Recent Invoices
      </h4>
      <div className="space-y-4">
        {invoices.map((inv, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0"
          >
            <div>
              <p className="text-sm font-black text-[#1D1B26]">{inv.name}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-widest">
                {inv.id} • Amount :{" "}
                <span className="text-[#4E3796] font-black">{inv.price}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#E7F9ED] text-[#22C55E] text-[10px] font-black px-3 py-1 rounded-lg uppercase">
                Paid
              </span>
              <FileText
                size={18}
                className="text-slate-300 hover:text-[#4E3796] cursor-pointer transition-colors"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LatestQuizzes() {
  const quizzes = [
    { name: "Sketch from A to Z (2024)", score: 95, date: "15 Jan 2025" },
    { name: "Build Responsive Real World", score: 85, date: "04 Jan 2025" },
    { name: "UI/UX Design Degree", score: 80, date: "26 Dec 2024" },
  ];

  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
      <h4 className="text-xl font-black text-[#1D1B26] mb-6">Latest Quizzes</h4>
      <div className="space-y-6">
        {quizzes.map((quiz, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-4 w-full">
              {/* CENTERED TEXT IN CIRCLE PROGRESS */}
              <div className="relative shrink-0 w-16 h-16 flex items-center justify-center">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 60 60"
                >
                  <circle
                    cx="30"
                    cy="30"
                    r="26"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    className="text-slate-100"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="26"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={163.3}
                    strokeDashoffset={163.3 - (163.3 * quiz.score) / 100}
                    strokeLinecap="round"
                    className="text-[#22C55E] transition-all duration-1000"
                  />
                </svg>
                {/* Text centered inside the circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[11px] font-black text-[#1D1B26]">
                    {quiz.score}%
                  </span>
                </div>
              </div>

              <div className="grow">
                <p className="text-sm font-black text-[#1D1B26]">{quiz.name}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-widest">
                  Date : {quiz.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
