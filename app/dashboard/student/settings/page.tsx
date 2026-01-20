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
  BookOpen,
  GraduationCap,
  Save,
  Trash2,
  Check,
  Award,
  Calendar,
  Zap,
} from "lucide-react";

const StudentSettings = () => {
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
              Student Settings
            </h1>
            <p className={`text-sm ${textSecondary} font-medium`}>
              Personalize your learning environment and academic profile.
            </p>
          </div>
          <div className="bg-[#fff5f6] p-3 rounded-2xl">
            <GraduationCap className="text-[#ff4667]" size={24} />
          </div>
        </div>

        {/* --- NAVIGATION TABS --- */}
        <div className="px-8 flex gap-8 border-b border-slate-100 overflow-x-auto">
          {["general", "academics", "notifications"].map((tab) => (
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
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400"
                      alt="Student Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute -bottom-1 -right-1 p-2.5 bg-[#ff4667] text-white rounded-xl shadow-lg hover:scale-110 transition-transform">
                    <Camera size={14} />
                  </button>
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${textPrimary}`}>
                    Alex Johnson
                  </h3>
                  <p className={`text-sm ${textSecondary} mb-2`}>
                    Student ID: #ST-88291
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                      Premium Member
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
                    defaultValue="Alex Johnson"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm border focus:outline-none focus:border-[#ff4667] ${inputBg}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Student Email
                  </label>
                  <input
                    type="email"
                    defaultValue="alex.j@student.edu"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm border focus:outline-none focus:border-[#ff4667] ${inputBg}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Timezone
                  </label>
                  <select
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm border focus:outline-none focus:border-[#ff4667] ${inputBg}`}
                  >
                    <option>Pacific Time (PT)</option>
                    <option>Eastern Time (ET)</option>
                    <option>Greenwich Mean Time (GMT)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Language
                  </label>
                  <select
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm border focus:outline-none focus:border-[#ff4667] ${inputBg}`}
                  >
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>German</option>
                  </select>
                </div>
              </section>

              <section className="pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck size={18} className="text-[#ff4667]" />
                  <h2 className={`text-lg font-bold ${textPrimary}`}>
                    Security
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Update Password"
                      className={`w-full rounded-2xl px-4 py-3.5 text-sm border ${inputBg}`}
                    />
                    <Lock
                      size={14}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                    <span className="text-xs font-bold text-gray-500">
                      Two-Factor Auth
                    </span>
                    <button className="text-[10px] font-black text-[#ff4667] uppercase">
                      Enable Now
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* --- TAB: ACADEMICS --- */}
          {activeTab === "academics" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl border border-blue-100 bg-blue-50/30">
                  <Award className="text-blue-500 mb-3" size={24} />
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-400">
                    Major
                  </h4>
                  <p className="text-lg font-bold text-blue-600">
                    Computer Science
                  </p>
                </div>
                <div className="p-6 rounded-3xl border border-purple-100 bg-purple-50/30">
                  <Calendar className="text-purple-500 mb-3" size={24} />
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-400">
                    Year
                  </h4>
                  <p className="text-lg font-bold text-purple-600">
                    Junior (3rd Year)
                  </p>
                </div>
                <div className="p-6 rounded-3xl border border-amber-100 bg-amber-50/30">
                  <Zap className="text-amber-500 mb-3" size={24} />
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-400">
                    GPA
                  </h4>
                  <p className="text-lg font-bold text-amber-600">3.8 / 4.0</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Learning Interests
                  </label>
                  <input
                    type="text"
                    placeholder="Web Development, AI Ethics, Data Structures"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm border ${inputBg}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Study Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Currently focusing on mastering full-stack development..."
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm border resize-none ${inputBg}`}
                  />
                </div>
              </div>
            </div>
          )}

          {/* --- TAB: NOTIFICATIONS --- */}
          {activeTab === "notifications" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="bg-[#fff5f6] p-6 rounded-3xl border border-[#ffe4e8] mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm">
                    <Bell className="text-[#ff4667]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#ff4667]">
                      Alert Preferences
                    </h4>
                    <p className="text-xs text-gray-600">
                      Control how you stay updated with your academic journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Class Reminders",
                    desc: "Notify me 15 minutes before sessions",
                    icon: <Calendar size={16} />,
                  },
                  {
                    title: "Grade Postings",
                    desc: "Alert me when a teacher publishes grades",
                    icon: <Check size={16} />,
                  },
                  {
                    title: "Peer Messages",
                    desc: "Notifications for study group chats",
                    icon: <User size={16} />,
                  },
                  {
                    title: "Course Updates",
                    desc: "Urgent announcements from instructors",
                    icon: <BookOpen size={16} />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:border-slate-100 transition-colors"
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
                        defaultChecked={idx !== 2}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff4667]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- FOOTER ACTIONS --- */}
          <div className="mt-12 pt-8 flex flex-col md:flex-row gap-4 justify-between items-center border-t border-slate-50">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors">
              <Trash2 size={14} /> Deactivate Account
            </button>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-8 py-3.5 rounded-2xl font-bold text-sm bg-slate-100 text-slate-600 transition-all">
                Discard
              </button>
              <button className="flex-1 md:flex-none px-10 py-3.5 rounded-2xl bg-[#ff4667] text-white font-bold text-sm shadow-lg shadow-red-100 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <Save size={18} /> Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-[11px] font-black uppercase tracking-[2px] text-gray-400">
        Ultimate Learning • Version 2.0.4
      </p>
    </div>
  );
};

export default StudentSettings;
