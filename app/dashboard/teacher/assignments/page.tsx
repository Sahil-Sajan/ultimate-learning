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
    <div className="space-y-8 pb-10">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Assignments</h2>
          <p className="text-sm text-slate-500 font-medium">
            Review submissions and manage grading workflows
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#FF5B5C] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-rose-100 hover:bg-[#ff4647] transition-all flex items-center gap-2">
            <Plus size={18} /> Create Assignment
          </button>
        </div>
      </div>

      {/* 2. Assignment Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* 3. Pending Review Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-slate-800 px-2 flex items-center gap-2">
          Pending Review
          <span className="text-xs bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full font-bold">
            Action Required
          </span>
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {pendingAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm hover:border-rose-200 transition-all flex flex-col md:flex-row items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div
                  className={`p-3 rounded-2xl ${
                    assignment.status === "Urgent"
                      ? "bg-rose-50 text-rose-500"
                      : "bg-slate-50 text-slate-400"
                  }`}
                >
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 group-hover:text-[#FF5B5C] transition-colors">
                    {assignment.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    {assignment.course}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
                <div className="text-center">
                  <p className="text-[10px] font-black text-slate-300 uppercase">
                    Submissions
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    {assignment.submitted}/{assignment.total}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-black text-slate-300 uppercase">
                    Pending
                  </p>
                  <p className="text-sm font-bold text-rose-500">
                    {assignment.pending}
                  </p>
                </div>
                <div className="text-center hidden sm:block">
                  <p className="text-[10px] font-black text-slate-300 uppercase">
                    Due Date
                  </p>
                  <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
                    <Clock size={14} className="text-slate-400" />
                    {assignment.dueDate}
                  </div>
                </div>
                <button className="bg-slate-50 text-slate-800 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#FF5B5C] hover:text-white transition-all flex items-center gap-1">
                  Grade <ChevronRight size={14} />
                </button>
                <button className="p-1 text-slate-300 hover:text-slate-600">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Filtered List Controls */}
      <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search assignments..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">
            <Filter size={16} /> All Courses
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">
            Status: Active
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SUB-COMPONENTS ---------------- */

function AssignmentStat({ label, value, subtext, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-5">
      <div className="p-4 bg-slate-50 rounded-2xl">{icon}</div>
      <div>
        <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">
          {label}
        </p>
        <h4 className="text-2xl font-black text-slate-800">{value}</h4>
        <p className="text-xs font-semibold text-slate-500">{subtext}</p>
      </div>
    </div>
  );
}
