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

/* ===================== TYPES ===================== */

interface ChildData {
  gpa: string;
  courses: string;
  attendance: string;
  pending: string;
  color: string;
  performance: Array<{ subject: string; score: number; avg: number }>;
  monthly: Array<{ month: string; val: number }>;
  skills: Array<{ skill: string; value: number }>;
  distribution: Array<{ name: string; value: number }>;
  recent: Array<{
    subject: string;
    task: string;
    score: string;
    status: string;
  }>;
}

/* ===================== EXTENDED DATASETS ===================== */

const childrenData: Record<string, ChildData> = {
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
  const [activeChild, setActiveChild] = useState<string>("Alice");

  const data = useMemo(() => childrenData[activeChild], [activeChild]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 font-sans text-[#1D1B26]">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* TOP HEADER & CHILD SWITCHER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-black tracking-tight">
            Child Profile: {activeChild}
          </h1>
          <div className="flex gap-2 bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
            {Object.keys(childrenData).map((name) => (
              <button
                key={name}
                onClick={() => setActiveChild(name)}
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
            <div className="h-80">
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
            <div className="h-80">
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

          {/* PIE CHART: DISTRIBUTION */}
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
                    {data.distribution.map((_, i) => (
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
                {data.recent.map((row, i) => (
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

interface StatCardProps {
  title: string;
  value: string;
  sub: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, sub, icon }: StatCardProps) {
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

interface AssignmentRowProps {
  subject: string;
  task: string;
  score: string;
  status: string;
}

function AssignmentRow({ subject, task, score, status }: AssignmentRowProps) {
  const statusColors: Record<string, string> = {
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
          className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter ${
            statusColors[status] || "bg-slate-100 text-slate-700"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
