"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  BookOpen,
  Calendar,
  Clock,
  Trophy,
} from "lucide-react";

// --- Types ---
type StudentData = {
  name: string;
  totalClasses: number;
  pendingAssignments: number;
  topPerformer: string;
  completionRate: number;
  gradeTrend: { subject: string; grade: number; avg: number }[];
  subjectBreakdown: { name: string; score: number }[];
  recentWork: {
    task: string;
    aliceGrade: string;
    benGrade: string;
    status: "ontime" | "late";
  }[];
  milestones: string[];
};

// --- Mock Data ---
const students: Record<string, StudentData> = {
  Alice: {
    name: "Alice",
    totalClasses: 65,
    pendingAssignments: 4,
    topPerformer: "Science (Alice)",
    completionRate: 88,
    gradeTrend: [
      { subject: "Math", grade: 82, avg: 75 },
      { subject: "Science", grade: 95, avg: 80 },
      { subject: "English", grade: 88, avg: 82 },
      { subject: "History", grade: 90, avg: 78 },
    ],
    subjectBreakdown: [
      { name: "Math", score: 75 },
      { name: "Science", score: 95 },
      { name: "English", score: 88 },
    ],
    recentWork: [
      {
        task: "Vector Algebra",
        aliceGrade: "A+",
        benGrade: "B-",
        status: "ontime",
      },
      {
        task: "Plant Cell Lab",
        aliceGrade: "A",
        benGrade: "A-",
        status: "ontime",
      },
    ],
    milestones: ["Alice won the Science Fair", "Perfect attendance in Math"],
  },
  Ben: {
    name: "Ben",
    totalClasses: 58,
    pendingAssignments: 10,
    topPerformer: "Math (Ben)",
    completionRate: 75,
    gradeTrend: [
      { subject: "Math", grade: 92, avg: 75 },
      { subject: "Science", grade: 78, avg: 80 },
      { subject: "English", grade: 72, avg: 82 },
      { subject: "History", grade: 85, avg: 78 },
    ],
    subjectBreakdown: [
      { name: "Math", score: 92 },
      { name: "Science", score: 70 },
      { name: "English", score: 65 },
    ],
    recentWork: [
      {
        task: "Vector Algebra",
        aliceGrade: "A+",
        benGrade: "B-",
        status: "late",
      },
      {
        task: "Ancient Rome",
        aliceGrade: "B",
        benGrade: "A",
        status: "ontime",
      },
    ],
    milestones: ["Ben improved History by 15%", "Regional Math Runner-up"],
  },
};

export default function StudentReportPage() {
  const [activeTab, setActiveTab] = useState<"Alice" | "Ben">("Ben");
  const data = students[activeTab];

  return (
    <div className="min-h-screen bg-[#F9FBFF] p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Switcher */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-2xl font-black text-slate-800">
            Total Assignments & Grades
          </h1>
          <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-100">
            <button
              onClick={() => setActiveTab("Alice")}
              className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "Alice"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-400 hover:bg-slate-50"
              }`}
            >
              ALICE
            </button>
            <button
              onClick={() => setActiveTab("Ben")}
              className={`px-6 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "Ben"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-400 hover:bg-slate-50"
              }`}
            >
              BEN
            </button>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <MetricCard
            label="TOTAL CLASSES"
            value={data.totalClasses}
            sub="Total Assignments Due"
            icon={<BookOpen size={18} className="text-blue-500" />}
          />
          <MetricCard
            label="ASSIGNMENT RATE"
            value={data.pendingAssignments}
            sub="Assignments Pending"
            icon={<Calendar size={18} className="text-blue-500" />}
          />
          <div className="md:col-span-1 lg:col-span-2 bg-[#FF5F6D] rounded-3xl p-6 flex flex-col justify-center text-white shadow-lg shadow-red-100">
            <span className="text-xs font-bold uppercase opacity-80">
              Top Performer:
            </span>
            <span className="text-2xl font-black">{data.topPerformer}</span>
          </div>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Grade Trend Area Chart */}
          <div className="lg:col-span-7 bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
            <div className="mb-6">
              <h3 className="font-bold text-slate-800">Overall Grade Trend</h3>
              <p className="text-xs text-slate-400 font-medium">
                (Last 6 Months)
              </p>
            </div>
            <div className="h-62.5 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data.gradeTrend}>
                  <defs>
                    <linearGradient id="colorGrade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#F1F5F9"
                  />
                  <XAxis
                    dataKey="subject"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "16px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="grade"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorGrade)"
                  />
                  <Area
                    type="monotone"
                    dataKey="avg"
                    stroke="#10b981"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    fill="none"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Completion Donut Chart */}
          <div className="lg:col-span-5 bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center">
            <h3 className="w-full font-bold text-slate-800 mb-6">
              Overall Grade Trend (Last 6 Months)
            </h3>
            <div className="relative h-50 w-50">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { value: data.completionRate },
                      { value: 100 - data.completionRate },
                    ]}
                    innerRadius={65}
                    outerRadius={85}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                  >
                    <Cell fill="#3b82f6" />
                    <Cell fill="#F1F5F9" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-slate-800">
                  {data.completionRate}%
                </span>
                <span className="text-[10px] font-bold text-slate-400">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Subject Breakdown Bar Chart */}
          <div className="lg:col-span-4 bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Subject Breakdown</h3>
            <div className="h-50 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.subjectBreakdown}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <Bar
                    dataKey="score"
                    fill="#3b82f6"
                    radius={[4, 4, 4, 4]}
                    barSize={30}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Work Table */}
          <div className="lg:col-span-4 bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Recent Work</h3>
            <div className="space-y-4">
              {data.recentWork.map((work, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-2xl transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <BookOpen size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700">
                        {work.task}
                      </p>
                      <p className="text-[10px] text-slate-400 font-medium italic">
                        Mathematics
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className="text-sm font-black text-slate-800">
                      {work.aliceGrade}
                    </span>
                    <span className="text-sm font-black text-slate-400">
                      {work.benGrade}
                    </span>
                    <Clock
                      size={16}
                      className={
                        work.status === "ontime"
                          ? "text-blue-400"
                          : "text-red-400"
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Milestones */}
          <div className="lg:col-span-4 bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Key Milestones</h3>
            <div className="space-y-4">
              {data.milestones.map((milestone, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-amber-50 rounded-full">
                    <Trophy size={14} className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">
                      {milestone}
                    </p>
                    <p className="text-[10px] text-slate-400 font-medium italic">
                      Last week ago
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Helper Components ---
function MetricCard({
  label,
  value,
  sub,
  icon,
}: {
  label: string;
  value: number | string;
  sub: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-blue-200 transition-all">
      <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 tracking-wider uppercase">
          {label}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-black text-slate-800 tracking-tight">
            {value}
          </span>
          <span className="text-[10px] font-bold text-slate-400">{sub}</span>
        </div>
      </div>
    </div>
  );
}
