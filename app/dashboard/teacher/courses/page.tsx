"use client";

import React from "react";
import {
  BookOpen,
  Users,
  Clock,
  MoreVertical,
  Plus,
  Search,
  Filter,
  Layers,
  CheckCircle2,
  Calendar,
} from "lucide-react";

/* ---------------- TYPES ---------------- */

interface CourseStat {
  label: string;
  value: string | number;
  subtext: string;
  icon: React.ReactNode;
}

interface CourseCardProps {
  title: string;
  students: number;
  lastActive: string;
  modulesCompleted: number;
  totalModules: number;
  isNew?: boolean;
  status: "Teaching" | "Upcoming";
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function MyCoursesPage() {
  return (
    <div className="space-y-8 pb-10">
      {/* 1. Page Header with Search and Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">My Courses</h2>
          <p className="text-sm text-slate-500 font-medium">
            Manage and track your curriculum progress
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all w-64"
            />
          </div>
          <button className="p-2.5 bg-slate-50 text-slate-500 rounded-xl hover:bg-slate-100 transition-colors">
            <Filter size={20} />
          </button>
          <button className="bg-[#FF5B5C] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-rose-100 hover:bg-[#ff4647] transition-all flex items-center gap-2">
            <Plus size={18} /> Create Course
          </button>
        </div>
      </div>

      {/* 2. Top-Level Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          label="Total Courses Taught"
          value="8"
          subtext="Students Enrolled: 125"
          icon={<BookOpen size={20} className="text-blue-500" />}
        />
        <StatCard
          label="Total Active Students"
          value="482"
          subtext="+12% from last month"
          icon={<Users size={20} className="text-rose-500" />}
        />
        <StatCard
          label="Avg. Completion Rate"
          value="84%"
          subtext="Across all active modules"
          icon={<CheckCircle2 size={20} className="text-emerald-500" />}
        />
      </div>

      {/* 3. Courses I'm Teaching Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            Courses I'm Teaching
            <span className="bg-slate-100 text-slate-500 text-xs px-2.5 py-1 rounded-full">
              4 Active
            </span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CourseCard
            title="Prompt Engineering - Section B"
            students={125}
            lastActive="3 days ago"
            modulesCompleted={5}
            totalModules={10}
            status="Teaching"
          />
          <CourseCard
            title="Advanced Algorithms"
            students={84}
            lastActive="Today"
            modulesCompleted={8}
            totalModules={12}
            isNew
            status="Teaching"
          />
          <CourseCard
            title="Data Science Fundamentals"
            students={156}
            lastActive="5 days ago"
            modulesCompleted={2}
            totalModules={10}
            status="Teaching"
          />
          <CourseCard
            title="UI/UX Design Systems"
            students={92}
            lastActive="1 day ago"
            modulesCompleted={7}
            totalModules={9}
            status="Teaching"
          />
        </div>
      </section>

      {/* 4. Upcoming Courses Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            Upcoming Courses
            <span className="bg-slate-100 text-slate-500 text-xs px-2.5 py-1 rounded-full">
              3 Planned
            </span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CourseCard
            title="Blockchain Technologies"
            students={0}
            lastActive="Fall 2024"
            modulesCompleted={0}
            totalModules={15}
            status="Upcoming"
          />
          <CourseCard
            title="Digital Marketing Strategies"
            students={0}
            lastActive="Summer 2024"
            modulesCompleted={0}
            totalModules={8}
            status="Upcoming"
          />
          <CourseCard
            title="Cybersecurity Stressing"
            students={0}
            lastActive="Winter 2024"
            modulesCompleted={0}
            totalModules={12}
            status="Upcoming"
          />
        </div>
      </section>
    </div>
  );
}

/* ---------------- SUB-COMPONENTS ---------------- */

function StatCard({ label, value, subtext, icon }: CourseStat) {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-slate-100 transition-colors">
          {icon}
        </div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          {label}
        </p>
      </div>
      <div className="flex items-baseline gap-2">
        <h4 className="text-3xl font-black text-slate-800">{value}</h4>
      </div>
      <p className="text-xs font-semibold text-slate-500 mt-1">{subtext}</p>
    </div>
  );
}

function CourseCard({
  title,
  students,
  lastActive,
  modulesCompleted,
  totalModules,
  isNew,
  status,
}: CourseCardProps) {
  const progress = (modulesCompleted / totalModules) * 100;

  return (
    <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col hover:border-rose-200 transition-all group relative overflow-hidden">
      {isNew && (
        <span className="absolute top-4 right-4 bg-rose-500 text-white text-[10px] font-black px-2 py-0.5 rounded-lg shadow-sm">
          NEW!
        </span>
      )}

      {/* Course Thumbnail Placeholder */}
      <div className="w-full aspect-video bg-slate-50 rounded-2xl mb-5 flex items-center justify-center relative overflow-hidden">
        <Layers className="text-slate-200" size={48} />
        {status === "Upcoming" && (
          <div className="absolute inset-0 bg-slate-900/5 flex items-center justify-center backdrop-blur-[1px]">
            <Calendar className="text-slate-400" size={24} />
          </div>
        )}
      </div>

      <div className="flex-1 space-y-4">
        <div>
          <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-[#FF5B5C] transition-colors line-clamp-2 min-h-[40px]">
            {title}
          </h4>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
              <Users size={14} /> {students} Students
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
              <Clock size={14} />{" "}
              {status === "Upcoming" ? "Starts: " : "Active: "} {lastActive}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-tighter">
            <span>
              Modules: {modulesCompleted}/{totalModules}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                status === "Upcoming" ? "bg-slate-300" : "bg-[#FF5B5C]"
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
        <button className="text-[11px] font-black text-slate-800 uppercase tracking-wider hover:text-[#FF5B5C] transition-colors">
          View Details
        </button>
        <button className="p-1 text-slate-300 hover:text-slate-600 transition-colors">
          <MoreVertical size={18} />
        </button>
      </div>
    </div>
  );
}
