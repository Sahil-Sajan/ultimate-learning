"use client";

import React from "react";
import {
  Users,
  UserPlus,
  Search,
  Filter,
  MoreVertical,
  Mail,
  MessageSquare,
  TrendingUp,
  Award,
} from "lucide-react";

/* ---------------- DATA MOCKUP ---------------- */
const studentsList = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice@example.com",
    courses: ["Prompt Engineering", "Data Science"],
    progress: 85,
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob.j@example.com",
    courses: ["Blockchain 101"],
    progress: 42,
    lastActive: "5 hours ago",
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie@ux.com",
    courses: ["UX Patterns"],
    progress: 98,
    lastActive: "Today",
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@logic.com",
    courses: ["Logic & Reasoning"],
    progress: 15,
    lastActive: "1 day ago",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethan@mission.com",
    courses: ["Prompt Engineering"],
    progress: 67,
    lastActive: "3 hours ago",
  },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function StudentsPage() {
  return (
    <div className="space-y-8 pb-10">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Student Directory
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Monitor engagement and performance across your classes
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#FF5B5C] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-rose-100 hover:bg-[#ff4647] transition-all flex items-center gap-2">
            <UserPlus size={18} /> Add Student
          </button>
        </div>
      </div>

      {/* 2. Engagement Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StudentStat
          label="Total Students"
          value="1,240"
          subtext="Active in 8 courses"
          trend="+12% this month"
          icon={<Users className="text-blue-500" size={20} />}
        />
        <StudentStat
          label="Avg. Engagement"
          value="78%"
          subtext="Weekly active users"
          trend="+5% vs last week"
          icon={<TrendingUp className="text-rose-500" size={20} />}
        />
        <StudentStat
          label="Top Performers"
          value="42"
          subtext="95% completion rate"
          trend="Steady growth"
          icon={<Award className="text-emerald-500" size={20} />}
        />
      </div>

      {/* 3. Main Student Management Section */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        {/* Table Controls */}
        <div className="p-6 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-96">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name, email or course..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">
              <Filter size={16} /> Filter
            </button>
            <button className="flex-1 sm:flex-none px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">
              Sort: Recent
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-5 text-[11px] font-black text-slate-400 uppercase tracking-wider">
                  Student Name
                </th>
                <th className="p-5 text-[11px] font-black text-slate-400 uppercase tracking-wider">
                  Courses
                </th>
                <th className="p-5 text-[11px] font-black text-slate-400 uppercase tracking-wider">
                  Progress
                </th>
                <th className="p-5 text-[11px] font-black text-slate-400 uppercase tracking-wider">
                  Last Activity
                </th>
                <th className="p-5 text-[11px] font-black text-slate-400 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {studentsList.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">
                          {student.name}
                        </p>
                        <p className="text-xs text-slate-400 font-medium">
                          {student.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex flex-wrap gap-1">
                      {student.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-md"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-3 w-32">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#FF5B5C] transition-all duration-500"
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-700">
                        {student.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="p-5 text-xs font-bold text-slate-400">
                    {student.lastActive}
                  </td>
                  <td className="p-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-500 transition-colors bg-slate-50 rounded-lg">
                        <Mail size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-[#FF5B5C] transition-colors bg-slate-50 rounded-lg">
                        <MessageSquare size={16} />
                      </button>
                      <button className="p-2 text-slate-300 hover:text-slate-600">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SUB-COMPONENTS ---------------- */

function StudentStat({ label, value, subtext, trend, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-5">
      <div className="p-4 bg-slate-50 rounded-2xl">{icon}</div>
      <div>
        <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">
          {label}
        </p>
        <div className="flex items-baseline gap-2">
          <h4 className="text-2xl font-black text-slate-800">{value}</h4>
          <span className="text-[10px] font-bold text-emerald-500">
            {trend}
          </span>
        </div>
        <p className="text-xs font-semibold text-slate-500">{subtext}</p>
      </div>
    </div>
  );
}
