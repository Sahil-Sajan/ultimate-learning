"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";
import {
  CheckCircle2,
  BookOpen,
  Calendar,
  ChevronRight,
  User,
  Clock,
  GraduationCap,
} from "lucide-react";

// --- DATA ---
const childrenData = {
  Alice: {
    name: "Alice Smith",
    grade: "7th",
    school: "Westside Prep",
    gpa: "3.8",
    attendance: "92%",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    courses: [
      {
        name: "Math",
        instructor: "Dr. Aristhostle",
        credits: "4.0",
        date: "10/26/23",
        grade: "A",
        progress: 65,
        data: [{ v: 45 }, { v: 85 }, { v: 60 }, { v: 95 }, { v: 70 }],
      },
      {
        name: "English Literature",
        instructor: "Ms. Bennet",
        credits: "3.0",
        date: "10/26/23",
        grade: "A-",
        progress: 85,
        data: [{ v: 60 }, { v: 40 }, { v: 90 }, { v: 55 }, { v: 80 }],
      },
    ],
    recentGrades: [
      {
        assignment: "Math Quiz",
        date: "Nov 12",
        grade: "B+",
        status: "Graded",
      },
      {
        assignment: "Science Lab",
        date: "Nov 10",
        grade: "A",
        status: "Graded",
      },
      {
        assignment: "History Essay",
        date: "Nov 08",
        grade: "B-",
        status: "Feedback",
      },
    ],
  },
  Ben: {
    name: "Ben Smith",
    grade: "5th",
    school: "Westside Prep",
    gpa: "3.5",
    attendance: "95%",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ben",
    courses: [
      {
        name: "Science",
        instructor: "Mr. Nye",
        credits: "4.0",
        date: "10/24/23",
        grade: "B+",
        progress: 45,
        data: [{ v: 30 }, { v: 60 }, { v: 45 }, { v: 75 }, { v: 50 }],
      },
      {
        name: "Geography",
        instructor: "Mrs. Atlas",
        credits: "3.0",
        date: "10/24/23",
        grade: "A",
        progress: 70,
        data: [{ v: 50 }, { v: 85 }, { v: 75 }, { v: 90 }, { v: 80 }],
      },
    ],
    recentGrades: [
      {
        assignment: "Art Project",
        date: "Nov 11",
        grade: "A+",
        status: "Graded",
      },
      {
        assignment: "Spelling Bee",
        date: "Nov 09",
        grade: "B",
        status: "Graded",
      },
    ],
  },
};

export default function ChildProfilePage() {
  const [activeChild, setActiveChild] = useState<"Alice" | "Ben">("Alice");
  const child = childrenData[activeChild];

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans text-[#1D1B26]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* TOP HEADER & CHILD SWITCHER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-black tracking-tight">
            Child Profile: {child.name}
          </h1>
          <div className="flex gap-2 bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
            {Object.keys(childrenData).map((name) => (
              <button
                key={name}
                onClick={() => setActiveChild(name as any)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeChild === name
                    ? "bg-[#3B82F6] text-white shadow-md shadow-blue-100"
                    : "text-slate-400 hover:bg-slate-50"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* PROFILE HEADER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex items-center gap-6">
            <div className="w-24 h-24 rounded-full border-[6px] border-blue-50 overflow-hidden shadow-md">
              <img
                src={child.img}
                alt={child.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-black text-xl">{child.name}</h2>
              <div className="flex flex-col gap-1 mt-1">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-md w-fit">
                  Grade: {child.grade}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {child.school}
                </span>
              </div>
            </div>
          </div>

          <MetricCard
            label="Current GPA"
            value={child.gpa}
            sub="Top 10% of Class"
            color="text-blue-600"
          />
          <MetricCard
            label="Attendance"
            value={child.attendance}
            sub="Total 180 Days"
            color="text-emerald-500"
          />
        </div>

        {/* CURRENT COURSES - UPDATED WITH TALLER BARS & MORE DETAILS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-black text-sm uppercase tracking-widest text-slate-400">
              Enrolled Courses
            </h3>
            <button className="text-[10px] font-black text-blue-500 uppercase tracking-widest hover:underline">
              View All Schedule
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {child.courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col gap-6 hover:translate-y-[-4px] transition-transform duration-300"
              >
                <div className="flex items-center gap-8">
                  {/* Taller Bar Chart */}
                  <div className="w-24 h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={course.data}>
                        <Bar
                          dataKey="v"
                          fill="#3B82F6"
                          radius={[4, 4, 0, 0]}
                          barSize={12}
                        >
                          {course.data.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={index % 2 === 0 ? "#3B82F6" : "#93C5FD"}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-black text-lg leading-tight">
                          {course.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 font-bold flex items-center gap-1.5 mt-1">
                          <User size={12} className="text-slate-300" />{" "}
                          {course.instructor}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-black text-blue-600">
                          {course.grade}
                        </span>
                        <p className="text-[9px] font-black text-slate-300 uppercase">
                          {course.credits} Credits
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-50 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-400 to-orange-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT GRADES TABLE */}
        <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-black text-xl">Academic History</h3>
            <div className="p-2 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
              <Calendar size={18} className="text-slate-400" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-10 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    Assignment Name
                  </th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    Submission Date
                  </th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    Score
                  </th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest text-center">
                    Outcome
                  </th>
                </tr>
              </thead>
              <tbody>
                {child.recentGrades.map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-slate-50/80 transition-colors group border-b border-slate-50 last:border-0"
                  >
                    <td className="px-10 py-6 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                        <BookOpen size={18} />
                      </div>
                      <span className="text-sm font-bold text-slate-700">
                        {row.assignment}
                      </span>
                    </td>
                    <td className="px-10 py-6 text-xs font-bold text-slate-400">
                      {row.date}
                    </td>
                    <td className="px-10 py-6 text-sm font-black text-[#1D1B26]">
                      {row.grade}
                    </td>
                    <td className="px-10 py-6 text-center">
                      <span
                        className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter ${
                          row.status === "Graded"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-orange-50 text-orange-600"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function MetricCard({ label, value, sub, color }: any) {
  return (
    <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm text-center space-y-2 group hover:border-blue-200 transition-colors">
      <p className="text-[10px] font-black uppercase tracking-widest text-[#4E3796]">
        {label}
      </p>
      <p className={`text-5xl font-black ${color}`}>{value}</p>
      <p className="text-[10px] font-bold text-slate-300">{sub}</p>
    </div>
  );
}
