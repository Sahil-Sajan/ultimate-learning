"use client";
import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Bell,
  Globe,
  Camera,
  ShieldCheck,
  Save,
  Trash2,
  Users,
  CreditCard,
  Eye,
  Settings,
  Heart,
  Activity,
  ChevronRight,
} from "lucide-react";

const ParentSettings = () => {
  const [activeTab, setActiveTab] = useState("general");

  // Consistent Light Theme Styling
  const bgClass = "bg-[#f8fafc]";
  const cardClass = "bg-white border-slate-100";
  const textPrimary = "text-[#0b1219]";
  const textSecondary = "text-gray-500";
  const inputBg = "bg-[#fcfdfe] border-slate-100 text-gray-900";

  return (
    <div className={`min-h-screen ${bgClass} p-4 md:p-8 lg:p-12 font-sans`}>
      <div
        className={`max-w-5xl mx-auto rounded-[40px] shadow-xl border ${cardClass} overflow-hidden`}
      >
        {/* --- HEADER --- */}
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h1 className={`text-2xl font-black ${textPrimary}`}>
              Parent Settings
            </h1>
            <p className={`text-sm ${textSecondary} font-medium`}>
              Manage your family account, billing, and child supervision tools.
            </p>
          </div>
          <div className="bg-[#fff5f6] p-3 rounded-2xl">
            <Users className="text-[#ff4667]" size={24} />
          </div>
        </div>

        {/* --- NAVIGATION TABS --- */}
        <div className="px-8 flex gap-8 border-b border-slate-100 overflow-x-auto">
          {["general", "family", "billing", "notifications"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-5 text-sm font-bold capitalize transition-all relative whitespace-nowrap ${
                activeTab === tab
                  ? "text-[#ff4667]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff4667] rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        <div className="p-8">
          {/* --- TAB: GENERAL --- */}
          {activeTab === "general" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
                <div className="relative group">
                  <div className="w-28 h-28 rounded-[32px] bg-slate-100 overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src="/parent.avif"
                      alt="Parent Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute -bottom-1 -right-1 p-2.5 bg-[#ff4667] text-white rounded-xl shadow-lg hover:scale-110 transition-transform">
                    <Camera size={14} />
                  </button>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${textPrimary}`}>
                    kristein watson
                  </h3>
                  <p className={`text-sm ${textSecondary} mb-2`}>
                    Family Account Administrator
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                      Family Plan Active
                    </span>
                  </div>
                </div>
              </div>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="kristein watson"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm border focus:outline-none focus:border-[#ff4667] ${inputBg}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Primary Contact Email
                  </label>
                  <input
                    type="email"
                    defaultValue="kristein@home.com"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm border focus:outline-none focus:border-[#ff4667] ${inputBg}`}
                  />
                </div>
              </section>

              <section className="pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck size={18} className="text-[#ff4667]" />
                  <h2 className={`text-lg font-bold ${textPrimary}`}>
                    Account Security
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm border ${inputBg}`}
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm border ${inputBg}`}
                  />
                </div>
              </section>
            </div>
          )}

          {/* --- TAB: FAMILY (Linked Children) --- */}
          {activeTab === "family" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-lg font-bold ${textPrimary}`}>
                  Linked Student Profiles
                </h3>
                <button className="text-[10px] font-black uppercase tracking-widest bg-[#ff4667] text-white px-4 py-2 rounded-xl shadow-md">
                  + Add Child
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    name: "Ben Smith",
                    id: "#ST-88291",
                    image: "/boy.avif",
                    grade: "6th Grade",
                  },
                  {
                    name: "Alice Smith",
                    id: "#ST-44210",
                    image: "/girl.webp",
                    grade: "8th Grade",
                  },
                ].map((child, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-5 rounded-[24px] border border-slate-100 bg-[#fcfdfe] hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={child.image}
                        className="w-12 h-12 rounded-2xl object-cover"
                        alt=""
                      />
                      <div>
                        <h4 className={`text-sm font-bold ${textPrimary}`}>
                          {child.name}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {child.grade} • {child.id}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-slate-400 hover:text-[#ff4667] transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-[#ff4667] transition-colors">
                        <Settings size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- TAB: BILLING --- */}
          {activeTab === "billing" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="p-6 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <CreditCard size={32} className="opacity-80" />
                    <span className="text-[10px] font-black uppercase bg-white/20 px-3 py-1 rounded-full">
                      Primary Card
                    </span>
                  </div>
                  <p className="text-xl font-mono tracking-[4px] mb-4">
                    •••• •••• •••• 4242
                  </p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[9px] uppercase opacity-50 font-black">
                        Card Holder
                      </p>
                      <p className="text-sm font-bold">kristein watson</p>
                    </div>
                    <p className="text-sm font-bold">12/28</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff4667] rounded-full -mr-16 -mt-16 blur-3xl opacity-20"></div>
              </div>
              <button className="w-full py-4 rounded-2xl border-2 border-dashed border-slate-100 text-sm font-bold text-slate-400 hover:border-[#ff4667] hover:text-[#ff4667] transition-all">
                Update Payment Method
              </button>
            </div>
          )}

          {/* --- TAB: NOTIFICATIONS --- */}
          {activeTab === "notifications" && (
            <div className="space-y-4 animate-in fade-in duration-500">
              {[
                {
                  title: "Weekly Progress Reports",
                  desc: "Detailed summary of Alex and Mia's quiz scores",
                  icon: <Activity size={16} />,
                },
                {
                  title: "Attendance Alerts",
                  desc: "Get notified if a child misses a live session",
                  icon: <Bell size={16} />,
                },
                {
                  title: "Financial Updates",
                  desc: "Invoices and subscription renewal alerts",
                  icon: <CreditCard size={16} />,
                },
                {
                  title: "Safety Alerts",
                  desc: "Notifications regarding platform security",
                  icon: <ShieldCheck size={16} />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-2xl border border-slate-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-slate-50 text-slate-500">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className={`text-sm font-bold ${textPrimary}`}>
                        {item.title}
                      </h5>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={idx !== 1}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-[#ff4667] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* --- FOOTER ACTIONS --- */}
          <div className="mt-12 pt-8 flex flex-col md:flex-row gap-4 justify-between items-center border-t border-slate-50">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors">
              <Trash2 size={14} /> Close Family Account
            </button>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-8 py-3.5 rounded-2xl font-bold text-sm bg-slate-100 text-slate-600">
                Discard
              </button>
              <button className="flex-1 md:flex-none px-10 py-3.5 rounded-2xl bg-[#ff4667] text-white font-bold text-sm shadow-lg shadow-red-100 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all">
                <Save size={18} /> Update Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-[11px] font-black uppercase tracking-[2px] text-gray-400">
        Ultimate Learning • Parental Control Center v2.0
      </p>
    </div>
  );
};

export default ParentSettings;
