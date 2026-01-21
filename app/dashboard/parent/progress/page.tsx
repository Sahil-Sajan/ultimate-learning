"use client";

import React, { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ChevronRight,
  CheckCircle2,
  Clock,
  Award,
  BookOpen,
} from "lucide-react";

/* ===================== EXTENDED DATASETS ===================== */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const childrenData: any = {
  Alice: {
    gpa: "3.89",
    courses: "08",
    attendance: "98%",
    pending: "03",
    color: "#6366F1",
    performance: [
      { subject: "Math", score: 88, avg: 82 },
      { subject: "Physics", score: 91, avg: 86 },
      { subject: "Chemistry", score: 84, avg: 87 },
      { subject: "History", score: 86, avg: 78 },
      { subject: "English", score: 94, avg: 90 },
    ],
    monthly: [
      { month: "Jan", val: 3.6 },
      { month: "Feb", val: 3.7 },
      { month: "Mar", val: 3.8 },
      { month: "Apr", val: 3.9 },
      { month: "May", val: 4.0 },
    ],
    skills: [
      { skill: "Logic", value: 135 },
      { skill: "Creativity", value: 120 },
      { skill: "Memory", value: 125 },
      { skill: "Focus", value: 118 },
      { skill: "Communication", value: 130 },
    ],
    distribution: [
      { name: "Lectures", value: 45 },
      { name: "Assignments", value: 30 },
      { name: "Revision", value: 15 },
      { name: "Quizzes", value: 10 },
    ],
    recent: [
      {
        subject: "Math",
        task: "Algebra Test",
        score: "94/100",
        status: "Completed",
      },
      {
        subject: "Physics",
        task: "Motion Assignment",
        score: "—",
        status: "Pending",
      },
    ],
  },
  Ben: {
    gpa: "3.62",
    courses: "07",
    attendance: "94%",
    pending: "05",
    color: "#10B981",
    performance: [
      { subject: "Math", score: 76, avg: 82 },
      { subject: "Physics", score: 83, avg: 86 },
      { subject: "Chemistry", score: 90, avg: 87 },
      { subject: "History", score: 72, avg: 78 },
      { subject: "English", score: 88, avg: 90 },
    ],
    monthly: [
      { month: "Jan", val: 3.2 },
      { month: "Feb", val: 3.3 },
      { month: "Mar", val: 3.4 },
      { month: "Apr", val: 3.6 },
      { month: "May", val: 3.7 },
    ],
    skills: [
      { skill: "Logic", value: 115 },
      { skill: "Creativity", value: 132 },
      { skill: "Memory", value: 118 },
      { skill: "Focus", value: 110 },
      { skill: "Communication", value: 122 },
    ],
    distribution: [
      { name: "Lectures", value: 35 },
      { name: "Assignments", value: 40 },
      { name: "Revision", value: 10 },
      { name: "Quizzes", value: 15 },
    ],
    recent: [
      {
        subject: "Biology",
        task: "Cell Report",
        score: "82/100",
        status: "Graded",
      },
      {
        subject: "History",
        task: "Midterm Essay",
        score: "—",
        status: "Pending",
      },
    ],
  },
};

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444"];

/* ===================== MAIN COMPONENT ===================== */

export default function DetailedParentDashboard() {
  const [activeChild, setActiveChild] = useState("Alice");

  // Memoize data for performance
  const data = useMemo(() => childrenData[activeChild], [activeChild]);

  return (
    <div className="min-h-screen bg-[#F1F5F9] p-4 md:p-8 text-slate-900 font-sans">
      <div className="max-w-400 mx-auto space-y-6">
        {/* HEADER */}
        <header className="bg-white p-6 rounded-[32px] border border-slate-200/60 flex flex-col md:row justify-between items-center gap-4 shadow-sm">
          <div>
            <h1 className="text-3xl font-black">
              {activeChild}&apos;s Academic Insights
            </h1>
            <p className="text-slate-500 font-medium">
              Real-time performance tracking for 2026 Academic Session
            </p>
          </div>

          <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            {["Alice", "Ben"].map((name) => (
              <button
                key={name}
                onClick={() => setActiveChild(name)}
                className={`px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  activeChild === name
                    ? "bg-white shadow-md text-indigo-600 scale-105"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </header>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            title="Overall GPA"
            value={data.gpa}
            sub="Current Semester"
            icon={<Award />}
          />
          <StatCard
            title="Courses"
            value={data.courses}
            sub="Active Subjects"
            icon={<BookOpen />}
          />
          <StatCard
            title="Attendance"
            value={data.attendance}
            sub="Presence Rate"
            icon={<CheckCircle2 />}
          />
          <StatCard
            title="Pending Tasks"
            value={data.pending}
            sub="Actions Required"
            icon={<Clock />}
          />
        </div>

        {/* CHARTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* BAR CHART: PERFORMANCE */}
          <div className="lg:col-span-8 bg-white p-8 rounded-[40px] border border-slate-200/60 shadow-sm">
            <h2 className="text-xl font-black mb-6">
              Subject Proficiency Matrix
            </h2>
            <div className="h-95">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.performance}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f0f0f0"
                  />
                  <XAxis
                    dataKey="subject"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontWeight: 600 }}
                  />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip
                    cursor={{ fill: "#f8fafc" }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Bar
                    dataKey="score"
                    fill={data.color}
                    radius={[10, 10, 0, 0]}
                    barSize={45}
                  />
                  <Bar
                    dataKey="avg"
                    fill="#E2E8F0"
                    radius={[10, 10, 0, 0]}
                    barSize={45}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* RADAR CHART: SKILLS */}
          <div className="lg:col-span-4 bg-white p-8 rounded-[40px] border border-slate-200/60 shadow-sm">
            <h2 className="text-xl font-black mb-6">Cognitive Mastery</h2>
            <div className="h-85">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data.skills}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: "#64748b", fontSize: 12, fontWeight: 700 }}
                  />
                  <Radar
                    name={activeChild}
                    dataKey="value"
                    stroke={data.color}
                    fill={data.color}
                    fillOpacity={0.5}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* LINE CHART: PROGRESSION */}
          <div className="lg:col-span-7 bg-white p-8 rounded-[40px] border border-slate-200/60 shadow-sm">
            <h2 className="text-xl font-black mb-6">Monthly GPA Progression</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data.monthly}>
                  <CartesianGrid
                    strokeDasharray="5 5"
                    vertical={false}
                    stroke="#f0f0f0"
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontWeight: 700 }}
                  />
                  <YAxis
                    domain={[3.0, 4.2]}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="val"
                    stroke={data.color}
                    strokeWidth={4}
                    dot={{
                      r: 6,
                      fill: data.color,
                      strokeWidth: 3,
                      stroke: "#fff",
                    }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* PIE CHART: DISTRIBUTION (WITH CENTER TEXT) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-[40px] border border-slate-200/60 shadow-sm relative">
            <h2 className="text-xl font-black mb-6">Study Time Distribution</h2>
            <div className="h-80 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.distribution}
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {data.distribution.map((_: any, i: number) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              {/* CENTER GPA TEXT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none translate-y-2">
                <span className="text-4xl font-black text-slate-800">
                  {data.gpa}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Current GPA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ASSIGNMENT LOG */}
        <div className="bg-white rounded-[40px] border border-slate-200/60 shadow-sm overflow-hidden">
          <div className="p-8 flex justify-between items-center border-b border-slate-100">
            <h2 className="text-xl font-black">Assignment Performance Log</h2>
            <button className="px-4 py-2 rounded-xl bg-slate-50 text-indigo-600 text-sm font-black flex items-center gap-1 hover:bg-indigo-50 transition-colors">
              Detailed Export <ChevronRight size={16} />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-8 py-4 text-[11px] font-black uppercase text-slate-400 tracking-wider">
                    Subject
                  </th>
                  <th className="px-8 py-4 text-[11px] font-black uppercase text-slate-400 tracking-wider">
                    Task
                  </th>
                  <th className="px-8 py-4 text-[11px] font-black uppercase text-slate-400 tracking-wider">
                    Score
                  </th>
                  <th className="px-8 py-4 text-[11px] font-black uppercase text-slate-400 tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {data.recent.map((row: any, i: number) => (
                  <AssignmentRow key={i} {...row} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== SUB COMPONENTS ===================== */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function StatCard({ title, value, sub, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-slate-200/60 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl shadow-inner">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest mb-0.5">
          {title}
        </p>
        <p className="text-3xl font-black tracking-tight">{value}</p>
        <p className="text-[11px] text-slate-500 font-bold">{sub}</p>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AssignmentRow({ subject, task, score, status }: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const colors: any = {
    Completed: "bg-emerald-100 text-emerald-700",
    Graded: "bg-blue-100 text-blue-700",
    Pending: "bg-amber-100 text-amber-700",
  };

  return (
    <tr className="hover:bg-slate-50/30 transition-colors">
      <td className="px-8 py-5 text-sm font-bold text-slate-600">{subject}</td>
      <td className="px-8 py-5 text-sm font-black text-slate-800">{task}</td>
      <td className="px-8 py-5 text-sm font-black text-indigo-600">{score}</td>
      <td className="px-8 py-5">
        <span
          className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${colors[status]}`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
