"use client";

import React from "react";
import {
  Users,
  Eye,
  Share2,
  LayoutGrid,
  Calendar,
  BookOpen,
  ChevronDown,
  MoreVertical,
  Clock,
  ArrowRight,
} from "lucide-react";

/* ---------------- TYPES ---------------- */

interface ClassCardProps {
  title: string;
  semester: string;
  enrolledCount: number;
  image: string;
  progress: number;
  nextClass: string;
  isInviteLink?: boolean;
}

/* ---------------- MAIN CONTENT ---------------- */

export default function ClassManagementContent() {
  return (
    <div className="space-y-10">
      {/* 1. Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Class Management
          </h2>
          <p className="text-sm text-slate-500">
            Manage your active classes and student engagement
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all">
            Archive
          </button>
          <button className="bg-[#FF5B5C] text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-rose-200 hover:bg-[#ff4647] transition-all">
            + New Class
          </button>
        </div>
      </div>

      {/* 2. Detailed Class Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <ClassCard
          title="Prompt Engineering - Section A"
          semester="Spring 2024"
          enrolledCount={33}
          progress={75}
          nextClass="Tomorrow, 10:00 AM"
          image="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
        />
        <ClassCard
          title="Blockchain 101 - Spring 2024"
          semester="Spring 2024"
          enrolledCount={88}
          progress={40}
          nextClass="Monday, 02:00 PM"
          image="https://cdn-icons-png.flaticon.com/512/2092/2092663.png"
        />
        <ClassCard
          title="Fullstack Web Dev - Section B"
          semester="Summer 2024"
          enrolledCount={89}
          progress={10}
          nextClass="Wednesday, 09:00 AM"
          image="https://cdn-icons-png.flaticon.com/512/1197/1197460.png"
          isInviteLink
        />
      </div>

      {/* 3. Utility Section (Attendance & Gradebook) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Attendance Utility */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-slate-800">
              Attendance Tracking
            </h3>
            <div className="p-3 bg-rose-50 rounded-2xl">
              <Calendar className="text-[#FF5B5C]" size={24} />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Active Session
            </label>
            <button className="w-full flex items-center justify-between bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-slate-700 font-semibold text-sm hover:border-[#FF5B5C] transition-colors">
              Prompt Engineering - Section A
              <ChevronDown size={18} className="text-slate-400" />
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3 text-[#FF5B5C] font-bold text-sm cursor-pointer group">
              <LayoutGrid size={18} />
              <span className="group-hover:underline">
                VIEW TODAY'S ATTENDANCE
              </span>
            </div>
            <ArrowRight size={18} className="text-[#FF5B5C]" />
          </div>
        </div>

        {/* Gradebook Utility */}
        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-slate-800">
              Gradebook Setup
            </h3>
            <div className="p-3 bg-blue-50 rounded-2xl">
              <BookOpen className="text-blue-500" size={24} />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Select Class
            </label>
            <button className="w-full flex items-center justify-between bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-slate-700 font-semibold text-sm">
              Blockchain 101 - Spring 2024
              <ChevronDown size={18} className="text-slate-400" />
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-50 space-y-4">
            <div className="flex items-center gap-3 text-[#FF5B5C] font-bold text-sm cursor-pointer hover:opacity-80">
              <LayoutGrid size={18} />
              <span>DEFINE GRADING CRITERIA</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 font-bold text-sm cursor-pointer hover:text-slate-600 transition-colors pl-7">
              <span>IMPORT ROSTER FROM CSV</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SUB-COMPONENTS ---------------- */

function ClassCard({
  title,
  semester,
  enrolledCount,
  image,
  progress,
  nextClass,
  isInviteLink,
}: ClassCardProps) {
  return (
    <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex flex-col hover:border-[#FF5B5C]/30 transition-all group">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-rose-50 transition-colors">
          <img src={image} alt="" className="w-10 h-10 object-contain" />
        </div>
        <button className="p-1 text-slate-300 hover:text-slate-600">
          <MoreVertical size={20} />
        </button>
      </div>

      <h3 className="text-lg font-bold text-slate-800 leading-tight mb-1">
        {title}
      </h3>
      <p className="text-xs font-semibold text-slate-400 mb-6">{semester}</p>

      {/* Detailed Stats Area */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500 flex items-center gap-1.5 font-medium">
            <Users size={14} className="text-slate-400" /> {enrolledCount}{" "}
            Enrolled
          </span>
          <span className="font-bold text-slate-700">{progress}% Syllabus</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-[#FF5B5C] h-full rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg">
          <Clock size={12} />
          <span>
            Next: <b>{nextClass}</b>
          </span>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-slate-50">
        {isInviteLink ? (
          <div className="flex gap-2">
            <button className="flex-[3] bg-[#FF5B5C] text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95 transition-all">
              <Share2 size={14} /> SHARE INVITE
            </button>
            <button className="flex-1 bg-slate-50 text-slate-400 py-3 rounded-2xl flex items-center justify-center hover:bg-slate-100 transition-colors">
              <LayoutGrid size={16} />
            </button>
          </div>
        ) : (
          <button className="w-full bg-slate-900 text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-black transition-all">
            <Eye size={14} /> VIEW DETAILS
          </button>
        )}
      </div>
    </div>
  );
}
