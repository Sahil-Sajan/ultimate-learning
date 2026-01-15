"use client";

import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import {
  Edit3,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
} from "lucide-react";

/* ---------------- DATA MOCKUP ---------------- */
const enrollmentData = [
  { name: "1000", value: 15 },
  { name: "1100", value: 25 },
  { name: "1200", value: 20 },
  { name: "1300", value: 30 },
  { name: "1400", value: 28 },
  { name: "1500", value: 40 },
];

const studentActivity = [
  { day: "Mon", hours: 4 },
  { day: "Tue", hours: 7 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 2 },
  { day: "Sat", hours: 9 },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function TeacherInsightsPage() {
  return (
    <div className="space-y-6 sm:space-y-8 pb-8 sm:pb-10 px-4 sm:px-0">
      {/* Page Header */}
      <div className="flex items-center justify-between bg-white p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-slate-100 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
          Teacher Insights
        </h2>
        <button className="p-2 sm:p-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-100 transition-colors">
          <Edit3 size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <CircularStatCard
          label="Average Course Rating"
          value="4.8/5.0"
          percent={96}
          color="#3B82F6"
          icon={<TrendingUp size={14} />}
        />
        <CircularStatCard
          label="Total Enrolled"
          value="350+"
          percent={70}
          color="#2563EB"
          icon={<Users size={14} />}
        />
        <CircularStatCard
          label="Completion Rate"
          value="72%"
          percent={72}
          color="#94A3B8"
          icon={<CheckCircle size={14} />}
        />

        {/* Top Performing Course Box */}
        <div className="bg-white p-5 sm:p-6 rounded-[24px] sm:rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-center">
          <p className="text-sm font-bold text-slate-800 mb-1">
            Top Performing Course
          </p>
          <p className="text-xs font-bold text-slate-400 mb-3 sm:mb-4">
            Prompt Engineering - Section A
          </p>
          <div className="flex items-end justify-between">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Blockchain 101
            </span>
            <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-tighter">
              500%
            </span>
          </div>
        </div>
      </div>

      {/* Courses Snapshot Section */}
      <div className="bg-white p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-slate-100 shadow-sm">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-6 sm:mb-8">
          My Courses Snapshot
        </h3>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 sm:gap-10">
          {/* Enrollment Trends Chart */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-800">
              Enrollment Trends
            </h4>
            <div className="h-[180px] sm:h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={enrollmentData}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f1f5f9"
                  />
                  <XAxis
                    dataKey="name"
                    fontSize={10}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8" }}
                  />
                  <YAxis
                    fontSize={10}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8" }}
                  />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorVal)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Student Activity Bar Chart */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-800">
              Student Activity
            </h4>
            <div className="h-[180px] sm:h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={studentActivity}>
                  <Bar dataKey="hours" radius={[4, 4, 0, 0]}>
                    {studentActivity.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 5 ? "#2563EB" : "#BFDBFE"}
                      />
                    ))}
                  </Bar>
                  <XAxis
                    dataKey="day"
                    fontSize={10}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8" }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-[11px] font-bold text-slate-400 mt-2 flex items-center justify-center gap-1">
              <Clock size={12} /> Avg: Response Time: 3 hrs
            </p>
          </div>

          {/* Popular Content List */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-800">
              Popular Content
            </h4>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Top 3 Lectures Watched:
            </p>
            <ul className="space-y-4 sm:space-y-5 pt-2">
              <PopularItem label="Prompt Engineering Intro" percent="78%" />
              <PopularItem label="Logic & Reasoning" percent="73%" />
              <PopularItem label="Advanced UX Patterns" percent="33%" />
            </ul>
            <button className="w-full mt-5 sm:mt-6 bg-[#FF5B5C] text-white py-3 sm:py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-rose-100 hover:bg-[#ff4647] transition-all active:scale-95">
              Explore More Insights <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- HELPER COMPONENTS ---------------- */

function CircularStatCard({ label, value, percent, color, icon }: any) {
  // State to handle the entry animation
  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    // Small timeout to ensure the component is mounted before animating
    const timer = setTimeout(() => {
      setAnimatedPercent(percent);
    }, 100);
    return () => clearTimeout(timer);
  }, [percent]);

  // SVG Calculations
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedPercent / 100) * circumference;
  const svgSize = (radius + 10) * 2;
  const center = svgSize / 2;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center text-center">
      <div
        className="relative mb-3 sm:mb-4"
        style={{ width: svgSize, height: svgSize }}
      >
        {/* Background Circle */}
        <svg
          className="w-full h-full transform -rotate-90 shadow-inner rounded-full"
          viewBox={`0 0 ${svgSize} ${svgSize}`}
        >
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#f1f5f9"
            strokeWidth="10"
            fill="transparent"
          />
          {/* Progress Circle with CSS Transition */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke={color}
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            style={{
              strokeDashoffset: offset,
              transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            strokeLinecap="round"
          />
        </svg>

        {/* PERFECTLY CENTERED TEXT OVERLAY */}
        <div
          className="absolute flex flex-col items-center justify-center pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-base sm:text-lg font-black text-slate-800 leading-none">
            {value}
          </span>
          <div className="mt-1 text-slate-300">{icon}</div>
        </div>
      </div>
      <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-tight leading-tight px-2">
        {label}
      </p>
    </div>
  );
}

function PopularItem({ label, percent }: { label: string; percent: string }) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FF5B5C]" />
        <span className="text-xs font-bold text-slate-600">{label}</span>
      </div>
      <span className="text-xs font-bold text-slate-800 bg-slate-50 px-2 py-1 rounded-md">
        {percent}
      </span>
    </li>
  );
}
