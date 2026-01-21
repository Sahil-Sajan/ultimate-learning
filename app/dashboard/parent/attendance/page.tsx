"use client";

import React, { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  User,
  Calendar,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";

/* ===================== DATASETS ===================== */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const attendanceData: any = {
  Alice: {
    totalClasses: 120,
    attendanceRate: 95,
    bestSubject: "Math",
    termCompletion: 78,
    // Sparkline data: Smoother transitions for a better look
    sparkline: [
      { day: "Mon", value: 85 },
      { day: "Tue", value: 92 },
      { day: "Wed", value: 88 },
      { day: "Thu", value: 98 },
      { day: "Fri", value: 95 },
      { day: "Sat", value: 90 },
      { day: "Sun", value: 96 },
    ],
    subjectProgress: [
      { name: "Mathematics", rate: 98, color: "bg-blue-500" },
      { name: "Science", rate: 92, color: "bg-indigo-500" },
      { name: "English", rate: 85, color: "bg-cyan-500" },
    ],
    heatmap: [1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
  },
  Ben: {
    totalClasses: 118,
    attendanceRate: 89,
    bestSubject: "History",
    termCompletion: 64,
    sparkline: [
      { day: "Mon", value: 70 },
      { day: "Tue", value: 75 },
      { day: "Wed", value: 85 },
      { day: "Thu", value: 82 },
      { day: "Fri", value: 90 },
      { day: "Sat", value: 88 },
      { day: "Sun", value: 92 },
    ],
    subjectProgress: [
      { name: "History", rate: 94, color: "bg-emerald-500" },
      { name: "Math", rate: 82, color: "bg-blue-500" },
      { name: "Science", rate: 88, color: "bg-indigo-500" },
    ],
    heatmap: [1, 0, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1],
  },
};

/* ===================== MAIN COMPONENT ===================== */

export default function AttendanceDashboard() {
  const [activeChild, setActiveChild] = useState<"Alice" | "Ben">("Alice");
  const data = useMemo(() => attendanceData[activeChild], [activeChild]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-800">
              Attendance Overview
            </h1>
            <p className="text-slate-500 font-medium">
              Monitoring activity for {activeChild} Smith
            </p>
          </div>

          <div className="flex bg-white border border-slate-200 p-1.5 rounded-2xl shadow-sm">
            {(["Alice", "Ben"] as const).map((name) => (
              <button
                key={name}
                onClick={() => setActiveChild(name)}
                className={`flex items-center gap-2 px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeChild === name
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-400 hover:bg-slate-50"
                }`}
              >
                <User size={14} /> {name}
              </button>
            ))}
          </div>
        </header>

        {/* TOP SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Classes"
            value={data.totalClasses}
            icon={<Calendar className="text-blue-500" />}
          />
          <StatCard
            title="Attendance Rate"
            value={`${data.attendanceRate}%`}
            icon={<CheckCircle className="text-emerald-500" />}
          />
          <StatCard
            title="Best Performing"
            value={data.bestSubject}
            icon={<Star className="text-amber-500" />}
          />
        </div>

        {/* SPARKLINE & PROGRESS SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* IMPROVED SPARKLINE CARD */}
          <div className="lg:col-span-8 bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-black text-slate-800">Weekly Activity</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Attendance Fluctuations
                </p>
              </div>
              <div className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-2xl flex items-center gap-2">
                <TrendingUp size={16} />
                <span className="text-sm font-black">+4.2%</span>
              </div>
            </div>

            <div className="h-62.5 -ml-5 -mr-5 -mb-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.sparkline}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={4}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* CIRCULAR DATA (DONUT) */}
          <div className="lg:col-span-4 bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex flex-col items-center justify-center">
            <h3 className="font-black text-slate-800 mb-8 w-full">
              Term Completion
            </h3>
            <div className="relative w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { v: data.termCompletion },
                      { v: 100 - data.termCompletion },
                    ]}
                    innerRadius={65}
                    outerRadius={85}
                    dataKey="v"
                    stroke="none"
                    startAngle={90}
                    endAngle={450}
                  >
                    <Cell fill="#3b82f6" />
                    <Cell fill="#f1f5f9" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-slate-800">
                  {data.termCompletion}%
                </span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Done
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* HORIZONTAL PROGRESS & HEATMAP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* HORIZONTAL PROGRESS BARS */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
            <h3 className="font-black text-slate-800 mb-6">
              Course Attendance Rate
            </h3>
            <div className="space-y-6">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {data.subjectProgress.map((subject: any, i: number) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-slate-600">
                      {subject.name}
                    </span>
                    <span className="text-sm font-black text-blue-600">
                      {subject.rate}%
                    </span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${subject.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${subject.rate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HEATMAP DOTS */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
            <h3 className="font-black text-slate-800 mb-6">Activity Heatmap</h3>
            <div className="grid grid-cols-10 gap-3">
              {data.heatmap.map((val: number, i: number) => (
                <div
                  key={i}
                  className={`h-8 w-8 rounded-xl shadow-inner ${
                    val === 1
                      ? "bg-blue-500"
                      : val === 2
                      ? "bg-amber-400"
                      : "bg-slate-100"
                  }`}
                />
              ))}
            </div>
            <div className="mt-8 flex gap-6">
              <LegendItem color="bg-blue-500" label="Present" />
              <LegendItem color="bg-amber-400" label="Late" />
              <LegendItem color="bg-slate-100" label="Absent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== SUB-COMPONENTS ===================== */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function StatCard({ title, value, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
      <div className="p-4 bg-slate-50 rounded-2xl">{icon}</div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          {title}
        </p>
        <p className="text-2xl font-black text-slate-800 tracking-tight">
          {value}
        </p>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LegendItem({ color, label }: any) {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-3 w-3 rounded-full ${color}`} />
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
        {label}
      </span>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-4 py-2 rounded-xl shadow-2xl border border-slate-50">
        <p className="text-sm font-black text-blue-600">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};
