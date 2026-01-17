"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Users,
  BookOpen,
  Calendar,
  ChevronRight,
  MessageSquare,
  LifeBuoy,
  CheckCircle2,
} from "lucide-react";

// --- DATA ---
const barData = [
  { subject: "Math", grade: 38, avg: 48 },
  { subject: "Science", grade: 88, avg: 68 },
  { subject: "English", grade: 92, avg: 85 },
  { subject: "History", grade: 48, avg: 72 },
  { subject: "Arts", grade: 52, avg: 35 },
];

const weeklyActivityData = [
  { day: "Mon", value: 5 },
  { day: "Tue", value: 35 },
  { day: "Wed", value: 25 },
  { day: "Thu", value: 42 },
  { day: "Fri", value: 38 },
  { day: "Sat", value: 45 },
];

const pieData = [
  { name: "Completed", value: 75, color: "#4E3796" },
  { name: "Developed", value: 15, color: "#10B981" },
  { name: "Exempted", value: 10, color: "#FF5364" },
];

export default function ParentalDashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8 font-sans text-[#1D1B26]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* HEADER */}
        <h1 className="text-3xl font-black tracking-tight">
          Parental Dashboard
        </h1>

        {/* TOP STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Children Enrolled"
            value="2"
            subtitle="Dependents listed"
            icon={<Users className="text-slate-400" size={20} />}
            active
          />
          <StatCard
            title="Active Courses Monitored"
            value="5"
            subtitle="Engagements monitored"
            icon={<BookOpen className="text-slate-400" size={20} />}
          />
          <StatCard
            title="Upcoming Assignments Due"
            value="5"
            subtitle="Engagements Mentioned"
            icon={<Calendar className="text-slate-400" size={20} />}
          />
        </div>

        {/* MY CHILDREN & WEEKLY ACTIVITY */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">My Children</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ChildCard name="Alice Smith" grade="7th" img="/girl.webp" />
            <ChildCard name="Ben Smith" grade="7th" img="/boy.avif" />

            {/* Weekly Activity Chart Card - UPDATED HEIGHT AND BAR SIZE */}
            <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="font-bold text-sm mb-4">Weekly Activity</h3>
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyActivityData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#F1F5F9"
                    />
                    <XAxis
                      dataKey="day"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 11, fontWeight: 600 }}
                    />
                    <YAxis hide />
                    <Tooltip cursor={{ fill: "#F8FAFC" }} />
                    <Bar
                      dataKey="value"
                      fill="#3B82F6"
                      radius={[6, 6, 0, 0]}
                      barSize={35}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* ACADEMIC SNAPSHOT */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
          <h2 className="text-xl font-bold">Academic Snapshot</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bar Chart */}
            <div className="h-75">
              <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">
                Grades by Subject (Last Semester)
              </p>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#F1F5F9"
                  />
                  <XAxis
                    dataKey="subject"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fontWeight: 600 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip cursor={{ fill: "#F8FAFC" }} />
                  <Bar
                    dataKey="grade"
                    fill="#3B82F6"
                    radius={[4, 4, 0, 0]}
                    barSize={30}
                  />
                  <Bar
                    dataKey="avg"
                    fill="#93C5FD"
                    radius={[4, 4, 0, 0]}
                    barSize={30}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Donut Chart */}
            <div className="h-75 flex flex-col items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-2xl font-black">75%</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Completed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RECENT ACTIVITY & QUICK ACTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activity List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold">Recent Activity</h2>
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-2 space-y-1">
                <ActivityItem
                  label="Downloaded Math Homework"
                  percentage="10%"
                />
                <ActivityItem label="Reviewed Math Homework" percentage="10%" />
                <ActivityItem label="Finished Math Quiz" percentage="19%" />
                <div className="h-px bg-slate-50 my-2 mx-4" />
                <ActivityItem label="Submitted Science Lab" percentage="19%" />
                <ActivityItem label="Drafted English Essay" percentage="19%" />
                <ActivityItem label="Math test scheduled" percentage="23%" />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Quick Actions</h2>
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-4">
              <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all group">
                <div className="flex items-center gap-3">
                  <div className=" bg-white rounded-xl shadow-sm">
                    <MessageSquare size={18} className="text-[#4E3796]" />
                  </div>
                  <span className="font-bold text-sm">Message Teacher</span>
                </div>
                <ChevronRight
                  size={16}
                  className="text-slate-300 group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 rounded-2xl transition-all">
                <div className=" bg-slate-50 rounded-xl">
                  <LifeBuoy size={18} className="text-slate-400" />
                </div>
                <span className="font-bold text-sm text-slate-600">
                  Support Center
                </span>
              </button>

              <button className="w-full bg-[#FF5364] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-red-100 hover:brightness-110 active:scale-95 transition-all mt-4">
                Support Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatCard({ title, value, subtitle, icon, active = false }: any) {
  return (
    <div
      className={`p-6 rounded-[28px] bg-white border shadow-sm relative overflow-hidden ${
        active
          ? "border-l-4 border-l-[#3B82F6] border-slate-200"
          : "border-slate-100"
      }`}
    >
      <div className="flex justify-between items-start relative z-10">
        <div className="space-y-1">
          <p className="text-[11px] font-black uppercase tracking-widest text-[#4E3796]">
            {title}
          </p>
          <p className="text-4xl font-black text-[#1D1B26]">{value}</p>
          <p className="text-[10px] font-bold text-slate-400">{subtitle}</p>
        </div>
        <div className="p-3 bg-slate-50 rounded-2xl">{icon}</div>
      </div>
    </div>
  );
}

function ChildCard({ name, grade, img }: any) {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col items-center text-center space-y-4">
      <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-md">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-black text-sm">{name}</h4>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          School: Westside Prep
        </p>
        <p className="text-[10px] text-slate-400 font-bold">Grade: {grade}</p>
      </div>
      <button className="w-full py-2.5 bg-[#3B82F6] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all">
        View Profile
      </button>
    </div>
  );
}

function ActivityItem({ label, percentage }: any) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors cursor-default">
      <div className="flex items-center gap-3">
        <CheckCircle2 size={18} className="text-blue-400" />
        <span className="text-xs font-bold text-slate-600">{label}</span>
      </div>
      <span className="text-xs font-black text-slate-400">{percentage}</span>
    </div>
  );
}
