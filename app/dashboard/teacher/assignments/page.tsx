"use client";

import React from "react";
import {
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  Search,
  Filter,
  MoreVertical,
  ChevronRight,
  BookOpen,
} from "lucide-react";

/* ---------------- DATA MOCKUP ---------------- */
const pendingAssignments = [
  {
    id: 1,
    title: "Module 3: Prompt Engineering Essay",
    course: "Prompt Engineering - Section A",
    submitted: 28,
    total: 30,
    pending: 12,
    dueDate: "Oct 24, 2024",
    status: "Urgent",
  },
  {
    id: 2,
    title: "Final Project Proposal",
    course: "Advanced Algorithms",
    submitted: 45,
    total: 50,
    pending: 5,
    dueDate: "Oct 28, 2024",
    status: "Active",
  },
  {
    id: 3,
    title: "UX Case Study Analysis",
    course: "UI/UX Design Systems",
    submitted: 15,
    total: 20,
    pending: 15,
    dueDate: "Nov 02, 2024",
    status: "New",
  },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function AssignmentsPage() {
  return (
    <div className="space-y-6 md:space-y-8 pb-10">
      {/* 1. Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-100 shadow-sm">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">Assignments</h2>
          <p className="text-xs md:text-sm text-slate-500 font-medium">
            Review submissions and manage grading workflows
          </p>
        </div>
        <button className="w-full sm:w-auto bg-[#FF5B5C] text-white px-5 py-3 rounded-xl text-sm font-bold shadow-lg shadow-rose-100 hover:bg-[#ff4647] transition-all flex items-center justify-center gap-2">
          <Plus size={18} /> Create Assignment
        </button>
      </div>

      {/* 2. Assignment Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <AssignmentStat
          label="Total Assignments"
          value="32"
          subtext="7 due this month"
          icon={<FileText className="text-blue-500" size={20} />}
        />
        <AssignmentStat
          label="Pending Review"
          value="18"
          subtext="Needs immediate grading"
          icon={<AlertCircle className="text-rose-500" size={20} />}
        />
        <AssignmentStat
          label="Average Grade"
          value="B+"
          subtext="Across all submissions"
          icon={<CheckCircle2 className="text-emerald-500" size={20} />}
        />
      </div>

      {/* 3. SEARCH & FILTERS (Moved Up for Mobile) */}
      <div className="bg-white p-4 md:p-6 rounded-[24px] md:rounded-[32px] border border-slate-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="relative w-full lg:w-96">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search assignments..."
            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20"
          />
        </div>
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs md:text-sm font-bold text-slate-600 hover:bg-slate-50">
            <Filter size={16} /> All Courses
          </button>
          <button className="flex-1 lg:flex-none px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs md:text-sm font-bold text-slate-600 hover:bg-slate-50">
            Status: Active
          </button>
        </div>
      </div>

      {/* 4. Pending Review Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-lg md:text-xl font-bold text-slate-800 flex items-center gap-2">
            Pending Review
            <span className="hidden sm:inline-block text-[10px] bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Action Required
            </span>
          </h3>
          <button className="text-[#FF5B5C] text-xs font-bold md:hidden">View All</button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {pendingAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white p-4 md:p-5 rounded-[24px] border border-slate-100 shadow-sm hover:border-rose-200 transition-all flex flex-col md:flex-row items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div
                  className={`p-3 rounded-2xl shrink-0 ${
                    assignment.status === "Urgent"
                      ? "bg-rose-50 text-rose-500"
                      : "bg-slate-50 text-slate-400"
                  }`}
                >
                  <BookOpen size={24} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-[#FF5B5C] transition-colors truncate">
                    {assignment.title}
                  </h4>
                  <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider truncate">
                    {assignment.course}
                  </p>
                </div>
              </div>

              {/* Responsive Metrics Row */}
              <div className="flex items-center justify-between md:justify-end gap-4 md:gap-8 w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
                <div className="text-center">
                  <p className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase">
                    Submissions
                  </p>
                  <p className="text-xs md:text-sm font-bold text-slate-700">
                    {assignment.submitted}/{assignment.total}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase">
                    Pending
                  </p>
                  <p className="text-xs md:text-sm font-bold text-rose-500">
                    {assignment.pending}
                  </p>
                </div>
                <div className="text-center hidden lg:block">
                  <p className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase">
                    Due Date
                  </p>
                  <div className="flex items-center gap-1 text-xs md:text-sm font-bold text-slate-700">
                    <Clock size={14} className="text-slate-400" />
                    {assignment.dueDate}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-slate-50 text-slate-800 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#FF5B5C] hover:text-white transition-all flex items-center gap-1">
                    Grade <ChevronRight size={14} className="hidden sm:block" />
                  </button>
                  <button className="p-1.5 text-slate-300 hover:text-slate-600">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ---------------- SUB-COMPONENTS ---------------- */

function AssignmentStat({ label, value, subtext, icon }: any) {
  return (
    <div className="bg-white p-5 md:p-6 rounded-[24px] md:rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-4 md:gap-5">
      <div className="p-3 md:p-4 bg-slate-50 rounded-2xl shrink-0">{icon}</div>
      <div className="min-w-0">
        <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">
          {label}
        </p>
        <h4 className="text-xl md:text-2xl font-black text-slate-800">{value}</h4>
        <p className="text-[10px] md:text-xs font-semibold text-slate-500 truncate">{subtext}</p>
      </div>
    </div>
  );
}