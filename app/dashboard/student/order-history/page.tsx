"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Award,
  Clock,
  CheckCircle2,
  TrendingUp,
  Calendar,
  Download,
  AlertCircle,
} from "lucide-react";

export default function DetailedReportPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans p-4 md:p-12">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        
        {/* HEADER SECTION - Responsive Flex */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4 md:gap-5">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#3B82F6] rounded-2xl flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-lg shadow-blue-200 shrink-0">
              AS
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-tight">
                Alice Smith
              </h1>
              <p className="text-slate-600 font-bold text-[10px] md:text-xs uppercase tracking-widest mt-0.5">
                Grade 11 • Student ID: #22901
              </p>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 md:px-6 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
              <Download size={18} /> <span className="hidden sm:inline">Export</span>
            </button>
            <button className="flex-1 md:flex-none px-4 md:px-6 py-3 bg-[#3B82F6] text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
              Print Report
            </button>
          </div>
        </header>

        {/* TOP METRICS GRID - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <SimpleMetric label="GPA" value="3.82" trend="+0.12" color="blue" />
          <SimpleMetric label="Attendance" value="98%" trend="Optimal" color="green" />
          <SimpleMetric label="Assignments" value="24/25" trend="96%" color="indigo" />
          <SimpleMetric label="Credits" value="120" trend="On Track" color="purple" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* PERFORMANCE BREAKDOWN */}
          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 md:mb-8 flex items-center gap-2">
              <TrendingUp size={16} className="text-blue-500" /> Subject Performance
            </h3>
            <div className="space-y-6 md:space-y-8">
              <DetailBar label="Advanced Physics" score={92} lastScore={88} />
              <DetailBar label="Pure Mathematics" score={85} lastScore={89} />
              <DetailBar label="English Literature" score={96} lastScore={90} />
              <DetailBar label="World History" score={78} lastScore={75} />
              <DetailBar label="Computer Science" score={94} lastScore={94} />
            </div>
          </div>

          {/* STATUS SECTION */}
          <div className="bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 md:mb-8">
                Semester Status
              </h3>
              <div className="space-y-5 md:space-y-6">
                <StatusItem icon={<CheckCircle2 className="text-green-500" size={18} />} label="Tuition Status" status="Paid" />
                <StatusItem icon={<Calendar className="text-blue-500" size={18} />} label="Next Exam" status="Mar 12" />
                <StatusItem icon={<Award className="text-amber-500" size={18} />} label="Conduct" status="Excellent" />
                <StatusItem icon={<AlertCircle className="text-red-500" size={18} />} label="Missing Work" status="1 Task" />
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">
                  Teacher Recommendation
                </p>
                <p className="text-xs font-bold text-[#3B82F6] leading-relaxed">
                  Promote to Advanced Honors for the upcoming Spring Term.
                </p>
              </div>
            </div>
          </div>

          {/* TABLE SECTION - Added horizontal scroll for mobile */}
          <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 md:mb-8">
              Recent Submissions
            </h3>
            <div className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100">
                    <th className="pb-4">Task Name</th>
                    <th className="pb-4">Category</th>
                    <th className="pb-4">Date</th>
                    <th className="pb-4">Status</th>
                    <th className="pb-4 text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-bold text-slate-700">
                  <TableRow name="Thermodynamics Quiz" cat="Quiz" date="Jan 15" status="Graded" score="18/20" />
                  <TableRow name="Macbeth Essay" cat="Essay" date="Jan 12" status="Graded" score="95%" />
                  <TableRow name="Algebra Final" cat="Exam" date="Jan 08" status="Graded" score="A-" />
                  <TableRow name="Binary Trees Lab" cat="Practical" date="Jan 05" status="Pending" score="--" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- UI COMPONENTS ---

function SimpleMetric({ label, value, trend, color }: any) {
  const colors: any = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    indigo: "bg-indigo-50 text-indigo-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-[28px] border border-slate-200 shadow-sm group hover:border-blue-300 transition-all">
      <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 md:mb-2">
        {label}
      </p>
      <div className="flex items-end justify-between">
        <h4 className="text-xl md:text-2xl font-black text-slate-800">{value}</h4>
        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-lg ${colors[color]}`}>
          {trend}
        </span>
      </div>
    </div>
  );
}

function DetailBar({ label, score, lastScore }: any) {
  return (
    <div className="space-y-2 md:space-y-3">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs font-black text-slate-800 truncate max-w-[150px] sm:max-w-none">{label}</p>
          <p className="text-[9px] md:text-[10px] font-bold text-slate-400">
            Previous: {lastScore}%
          </p>
        </div>
        <span className="text-xs md:text-sm font-black text-[#3B82F6]">{score}%</span>
      </div>
      <div className="h-3 md:h-4 w-full bg-slate-100 rounded-full overflow-hidden flex">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-full bg-[#3B82F6] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
        />
      </div>
    </div>
  );
}

function StatusItem({ icon, label, status }: any) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-slate-50 rounded-lg shrink-0">{icon}</div>
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          {label}
        </span>
      </div>
      <span className="text-[10px] md:text-xs font-black text-slate-800 shrink-0 text-right">{status}</span>
    </div>
  );
}

function TableRow({ name, cat, date, status, score }: any) {
  return (
    <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors group">
      <td className="py-4 md:py-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors shrink-0">
            <FileText size={14} className="text-slate-400 group-hover:text-[#3B82F6]" />
          </div>
          <span className="text-slate-800 text-sm">{name}</span>
        </div>
      </td>
      <td className="py-4 md:py-5 text-slate-400 text-[11px] uppercase whitespace-nowrap">{cat}</td>
      <td className="py-4 md:py-5 text-slate-400 text-[11px] whitespace-nowrap">{date}</td>
      <td className="py-4 md:py-5">
        <span className={`px-2 py-1 rounded-md text-[9px] font-black uppercase whitespace-nowrap ${
          status === "Graded" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
        }`}>
          {status}
        </span>
      </td>
      <td className="py-4 md:py-5 text-right font-black text-[#3B82F6] text-sm">{score}</td>
    </tr>
  );
}