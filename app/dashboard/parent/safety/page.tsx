"use client";

import { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ShieldCheck,
  Clock,
  ShieldAlert,
  User,
  ChevronRight,
  MapPin,
  Info,
} from "lucide-react";

/* ===================== ENHANCED DATASETS ===================== */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const controlData: any = {
  Alice: {
    dailyLimit: 3,
    usageTrend: [
      { day: "Mon", use: 1.2, limit: 3 },
      { day: "Tue", use: 2.8, limit: 3 },
      { day: "Wed", use: 1.5, limit: 3 },
      { day: "Thu", use: 3.2, limit: 3 },
      { day: "Fri", use: 2.1, limit: 3 },
      { day: "Sat", use: 0.8, limit: 3 },
      { day: "Sun", use: 1.1, limit: 3 },
    ],
    appBreakdown: [
      { name: "Learning", hours: 1.8, color: "#3b82f6" },
      { name: "Social", hours: 0.5, color: "#f43f5e" },
      { name: "Games", hours: 0.4, color: "#fbbf24" },
    ],
    lastLocation: "Westside Prep Library",
    securityScore: 92,
  },
  Ben: {
    dailyLimit: 2,
    usageTrend: [
      { day: "Mon", use: 1.8, limit: 2 },
      { day: "Tue", use: 1.2, limit: 2 },
      { day: "Wed", use: 2.5, limit: 2 },
      { day: "Thu", use: 1.9, limit: 2 },
      { day: "Fri", use: 2.1, limit: 2 },
      { day: "Sat", use: 3.5, limit: 2 },
      { day: "Sun", use: 2.8, limit: 2 },
    ],
    appBreakdown: [
      { name: "Games", hours: 2.1, color: "#fbbf24" },
      { name: "Learning", hours: 0.6, color: "#3b82f6" },
      { name: "Video", hours: 1.2, color: "#8b5cf6" },
    ],
    lastLocation: "Oak Park Sports Complex",
    securityScore: 78,
  },
};

/* ===================== MAIN COMPONENT ===================== */

export default function DetailedSafetyPage() {
  const [activeChild, setActiveChild] = useState<"Alice" | "Ben">("Alice");
  const data = useMemo(() => controlData[activeChild], [activeChild]);

  return (
    <div className="min-h-screen bg-[#F4F7FE] p-4 md:p-10 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* TOP HEADER SECTION */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              Safety & Device Control
            </h1>
            <p className="text-slate-500 font-medium">
              Managing security protocols for{" "}
              <span className="text-blue-600 font-bold">{activeChild}</span>
            </p>
          </div>

          <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200/60">
            {(["Alice", "Ben"] as const).map((name) => (
              <button
                key={name}
                onClick={() => setActiveChild(name)}
                className={`flex items-center gap-2 px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  activeChild === name
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <User size={14} /> {name}
              </button>
            ))}
          </div>
        </header>

        {/* ROW 1: SECURITY SCORE & PASSWORD */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-8 rounded-[35px] border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <ShieldCheck className="text-blue-600" size={28} />
              </div>
              <div>
                <h3 className="font-black text-slate-800">
                  Account Security Status
                </h3>
                <p className="text-sm text-slate-400 font-medium italic">
                  Everything looks good. No recent threats.
                </p>
              </div>
            </div>
            <button className="px-6 py-3 bg-[#FF5F6D] text-white font-black rounded-xl text-xs  transition-all">
              CHANGE PASSWORD
            </button>
          </div>
          <div className="bg-white p-8 rounded-[35px] border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="h-12 w-12 rounded-full border-4 border-emerald-500 flex items-center justify-center font-black text-emerald-600 text-sm">
              {data.securityScore}%
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Security Score
              </p>
              <p className="text-sm font-bold text-slate-700 italic">
                Highly Protected
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2: DETAILED SCREEN TIME CHART */}
        <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h3 className="text-xl font-black text-slate-800">
                Visual Usage Analytics
              </h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                Weekly Screen Time vs Allocated Limit
              </p>
            </div>
            <div className="flex items-center gap-6 bg-slate-50 p-3 rounded-2xl">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-[10px] font-black text-slate-500">
                  ACTUAL USE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-slate-200" />
                <span className="text-[10px] font-black text-slate-500">
                  LIMIT ({data.dailyLimit}h)
                </span>
              </div>
            </div>
          </div>

          <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data.usageTrend}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="usageGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 700 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 12 }}
                />
                <Tooltip content={<CustomChartTooltip />} />
                {/* Safety Boundary */}
                <Area
                  type="stepAfter"
                  dataKey="limit"
                  stroke="#e2e8f0"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  fill="none"
                />
                {/* Actual Usage */}
                <Area
                  type="monotone"
                  dataKey="use"
                  stroke="#3b82f6"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#usageGradient)"
                  dot={{
                    r: 4,
                    fill: "#fff",
                    stroke: "#3b82f6",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ROW 3: APP BREAKDOWN & PRIVACY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* App Category Breakdown */}
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="font-black text-slate-800 mb-8">
              Category Breakdown
            </h3>
            <div className="space-y-6">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {data.appBreakdown.map((app: any, i: number) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4 w-1/3">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        app.color === "#3b82f6"
                          ? "bg-blue-500"
                          : app.color === "#f43f5e"
                          ? "bg-rose-500"
                          : "bg-amber-400"
                      }`}
                    />
                    <span className="text-xs font-bold text-slate-600">
                      {app.name}
                    </span>
                  </div>
                  <div className="flex-1 h-2 bg-slate-50 rounded-full overflow-hidden mx-4">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${(app.hours / data.dailyLimit) * 100}%`,
                        backgroundColor: app.color,
                      }}
                    />
                  </div>
                  <span className="text-xs font-black text-slate-400 w-12 text-right">
                    {app.hours}h
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-6 border-t border-slate-50 flex justify-between items-center">
              <div className="flex items-center gap-2 text-slate-400">
                <Clock size={14} />
                <span className="text-[10px] font-black uppercase italic">
                  Resetting in 4h 20m
                </span>
              </div>
              <button className="text-blue-600 text-xs font-black uppercase flex items-center gap-1">
                Detailed Logs <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Location & Quick Toggles */}
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-slate-800">Device Location</h3>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-black rounded-lg uppercase">
                Live
              </span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <MapPin className="text-rose-500" size={20} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-800">
                  {data.lastLocation}
                </p>
                <p className="text-[10px] text-slate-400 font-bold uppercase italic">
                  Last Ping: 2 mins ago
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <ToggleItem
                label="Two-Factor Authentication"
                active={data.twoFactor}
              />
              <ToggleItem label="Content Filtering (AI)" active={true} />
              <ToggleItem label="Remote Screen Lock" active={false} />
            </div>
          </div>
        </div>

        {/* ROW 4: QUICK HELP FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FF5F6D] p-6 rounded-[30px] flex items-center justify-between text-white shadow-lg shadow-red-100 cursor-pointer hover:scale-[1.01] transition-transform">
            <div className="flex items-center gap-4">
              <ShieldAlert size={24} />
              <span className="font-black text-sm uppercase tracking-wider">
                Emergency Device Lock
              </span>
            </div>
            <ChevronRight size={20} />
          </div>
          <div className="bg-slate-800 p-6 rounded-[30px] flex items-center justify-between text-white shadow-lg shadow-slate-200 cursor-pointer hover:scale-[1.01]  transition-transform">
            <div className="flex items-center gap-4">
              <Info size={24} className="text-blue-400" />
              <span className="font-black text-sm uppercase tracking-wider">
                Parental Control Guide
              </span>
            </div>
            <ChevronRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===================== HELPER UI COMPONENTS ===================== */

function ToggleItem({ label, active }: { label: string; active: boolean }) {
  const [isOn, setIsOn] = useState(active);
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-sm font-bold text-slate-600">{label}</span>
      <button
        onClick={() => setIsOn(!isOn)}
        className={`w-11 h-6 rounded-full transition-all relative flex items-center px-1 shadow-inner ${
          isOn ? "bg-blue-600" : "bg-slate-200"
        }`}
      >
        <div
          className={`h-4 w-4 bg-white rounded-full transition-transform shadow-sm ${
            isOn ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomChartTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-50 flex flex-col gap-1">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
          {payload[0].payload.day}
        </p>
        <p className="text-sm font-black text-blue-600">
          {payload[0].value} Hours Used
        </p>
        <p className="text-[10px] font-bold text-slate-300 italic">
          Target: {payload[0].payload.limit}h
        </p>
      </div>
    );
  }
  return null;
};
