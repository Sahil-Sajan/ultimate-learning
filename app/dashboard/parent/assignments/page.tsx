"use client";

import React, { useState, useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import {
  BookOpen,
  Star,
  User,
  Award,
  GraduationCap,
} from "lucide-react";

/* ===================== DETAILED DATASETS ===================== */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const childrenData: any = {
  Alice: {
    fullName: "Alice Smith",
    grade: "7th Grade",
    termCompletion: 78, // Circular Data
    topSubject: "Science",
    gpa: "3.8",
    attendance: "92%",
    assignments: [
      {
        task: "Biology Lab Report",
        subject: "Science",
        date: "Jan 12",
        status: "Pending",
        progress: "10%",
      },
      {
        task: "English Lit Essay",
        subject: "English",
        date: "Jan 15",
        status: "In Progress",
        progress: "60%",
      },
      {
        task: "Algebra Quiz",
        subject: "Math",
        date: "Jan 18",
        status: "New",
        progress: "0%",
      },
      {
        task: "History Timeline",
        subject: "History",
        date: "Jan 20",
        status: "Completed",
        progress: "100%",
      },
    ],
    skills: [
      { subject: "Logic", value: 120 },
      { subject: "Creativity", value: 98 },
      { subject: "Memory", value: 86 },
      { subject: "Writing", value: 115 },
    ],
  },
  Ben: {
    fullName: "Ben Smith",
    grade: "7th Grade",
    termCompletion: 64, // Circular Data
    topSubject: "Math",
    gpa: "3.5",
    attendance: "88%",
    assignments: [
      {
        task: "Calculus Set",
        subject: "Math",
        date: "Jan 14",
        status: "In Progress",
        progress: "18%",
      },
      {
        task: "Physics Simulation",
        subject: "Science",
        date: "Jan 17",
        status: "New",
        progress: "5%",
      },
      {
        task: "Ancient Rome Study",
        subject: "History",
        date: "Jan 19",
        status: "Pending",
        progress: "10%",
      },
    ],
    skills: [
      { subject: "Logic", value: 140 },
      { subject: "Creativity", value: 125 },
      { subject: "Memory", value: 110 },
      { subject: "Writing", value: 85 },
    ],
  },
};

const subjectScores = [
  { subject: "Math", Alice: 85, Ben: 70 },
  { subject: "Science", Alice: 95, Ben: 82 },
  { subject: "English", Alice: 88, Ben: 92 },
  { subject: "History", Alice: 82, Ben: 78 },
];

/* ===================== MAIN COMPONENT ===================== */

export default function DetailedAcademicDashboard() {
  const [activeChild, setActiveChild] = useState<"Alice" | "Ben">("Alice");

  const current = useMemo(() => childrenData[activeChild], [activeChild]);

  // Dynamic Pie Data for the Circular Progress
  const pieData = [
    { name: "Done", value: current.termCompletion },
    { name: "Remaining", value: 100 - current.termCompletion },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header & Context Switcher */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-800">
              Academic Progress
            </h1>
            <p className="text-slate-500 font-medium">
              Monitoring {current.fullName} • {current.grade}
            </p>
          </div>

          <div className="flex bg-white border border-slate-200 p-1.5 rounded-2xl shadow-sm w-fit">
            {(["Alice", "Ben"] as const).map((name) => (
              <button
                key={name}
                onClick={() => setActiveChild(name)}
                className={`flex items-center gap-2 px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeChild === name
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                }`}
              >
                <User size={14} /> {name}
              </button>
            ))}
          </div>
        </header>

        {/* Dynamic Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Current GPA"
            value={current.gpa}
            sub="Semester Avg"
            icon={<GraduationCap className="text-blue-500" />}
          />
          <StatCard
            title="Attendance"
            value={current.attendance}
            sub="Current Year"
            icon={<Award className="text-emerald-500" />}
          />
          <StatCard
            title="Assignments"
            value={String(current.assignments.length)}
            sub="Active Tasks"
            icon={<BookOpen className="text-indigo-500" />}
          />
          <StatCard
            title="Top Subject"
            value={current.topSubject}
            sub="Highest Grade"
            icon={<Star className="text-amber-500" />}
          />
        </div>

        {/* Charts & Circular Data */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Circular Progress Card */}
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-center justify-center relative">
            <h3 className="font-black text-slate-800 mb-2 w-full text-center">
              Term Completion
            </h3>
            <p className="text-xs text-slate-400 font-bold uppercase mb-6 italic">
              Updated Daily
            </p>
            <div className="relative w-56 h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={75}
                    outerRadius={95}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                    startAngle={90}
                    endAngle={450}
                  >
                    <Cell fill="#2563eb" />
                    <Cell fill="#F1F5F9" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-slate-800">
                  {current.termCompletion}%
                </span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                  Done
                </span>
              </div>
            </div>
          </div>

          {/* Shrunk Bar Chart Card */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
            <h3 className="font-black text-slate-800 mb-8">
              Subject Grade Overview
            </h3>
            <div className="h-70">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={subjectScores}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#F1F5F9"
                  />
                  <XAxis
                    dataKey="subject"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 700 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                  />
                  <Tooltip
                    cursor={{ fill: "#F8FAFC" }}
                    contentStyle={{
                      borderRadius: "16px",
                      border: "none",
                      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  {/* barSize set to 24 to shrink the width */}
                  <Bar
                    dataKey={activeChild}
                    fill="#2563eb"
                    radius={[8, 8, 0, 0]}
                    barSize={24}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Assignment Table Section */}
        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <h3 className="font-black text-slate-800 italic">
              {activeChild}&apos;s Current Assignments
            </h3>
            <span className="text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase">
              Term 1
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                  <th className="px-8 py-4">Subject</th>
                  <th className="px-8 py-4">Task Name</th>
                  <th className="px-8 py-4">Due Date</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4 text-right">Progress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {current.assignments.map((item: any, i: number) => (
                  <tr
                    key={i}
                    className="group hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-8 py-5">
                      <span className="text-xs font-bold text-slate-400">
                        {item.subject}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <p className="text-sm font-black text-slate-700">
                        {item.task}
                      </p>
                    </td>
                    <td className="px-8 py-5 text-sm text-slate-500 font-medium">
                      {item.date}
                    </td>
                    <td className="px-8 py-5">
                      <span
                        className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter ${
                          item.status === "Completed"
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right font-mono font-black text-blue-600">
                      {item.progress}
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

/* ===================== HELPER COMPONENTS ===================== */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function StatCard({ title, value, sub, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-[28px] shadow-sm border border-slate-100 flex items-center gap-5 hover:-translate-y-0.5 transition-transform cursor-default">
      <div className="bg-slate-50 p-4 rounded-2xl">{icon}</div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          {title}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-black text-slate-800 tracking-tight">
            {value}
          </span>
          <span className="text-[10px] text-slate-400 font-bold italic">
            {sub}
          </span>
        </div>
      </div>
    </div>
  );
}
