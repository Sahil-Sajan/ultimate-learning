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
  CreditCard,
  History,
  Briefcase,
  MapPin,
  Check,
} from "lucide-react";

const TeacherSettings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Styling logic based on dark mode toggle
  const bgClass = isDarkMode ? "bg-[#0b1219]" : "bg-[#f8fafc]";
  const cardClass = isDarkMode
    ? "bg-[#161f28] border-gray-800"
    : "bg-white border-slate-100";
  const textPrimary = isDarkMode ? "text-white" : "text-[#0b1219]";
  const textSecondary = isDarkMode ? "text-gray-400" : "text-gray-500";
  const inputBg = isDarkMode
    ? "bg-[#1c2631] border-gray-700 text-white"
    : "bg-[#fcfdfe] border-slate-100 text-gray-900";

  return (
    <div
      className={`min-h-screen ${bgClass} p-4 md:p-8 lg:p-12 font-sans transition-colors duration-300`}
    >
      <div
        className={`max-w-5xl mx-auto rounded-[40px] shadow-xl border ${cardClass} overflow-hidden transition-colors duration-300`}
      >
        {/* --- HEADER --- */}
        <div className="p-8 border-b border-opacity-10 border-gray-500 flex justify-between items-center">
          <div>
            <h1 className={`text-2xl font-black ${textPrimary}`}>
              Account Settings
            </h1>
            <p className={`text-sm ${textSecondary} font-medium`}>
              Manage your professional instructor profile and preferences.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#fff5f6] p-2 rounded-xl">
              <GraduationCap className="text-[#ff4667]" size={20} />
            </div>
          </div>
        </div>

        {/* --- NAVIGATION TABS --- */}
        <div className="px-8 flex gap-8 border-b border-opacity-10 border-gray-500 overflow-x-auto">
          {["general", "profile", "notifications"].map((tab) => (
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
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Dr. Sarah Connor"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff4667] ${inputBg}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    placeholder="Senior Mathematics Professor"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff4667] ${inputBg}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="sarah.c@ultimate.edu"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff4667] ${inputBg}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Language
                  </label>
                  <select
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#ff4667] ${inputBg}`}
                  >
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </section>

              <section className="pt-6 border-t border-opacity-5 border-gray-500">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck size={18} className="text-[#ff4667]" />
                  <h2 className={`text-lg font-bold ${textPrimary}`}>
                    Security
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="password"
                    placeholder="Current Password"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm ${inputBg}`}
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm ${inputBg}`}
                  />
                </div>
              </section>
            </div>
          )}

          {/* --- TAB: PROFILE (Instructor Details) --- */}
          {activeTab === "profile" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative group mx-auto md:mx-0">
                  <div className="w-32 h-32 rounded-[32px] bg-slate-200 overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute -bottom-2 -right-2 p-3 bg-[#ff4667] text-white rounded-2xl shadow-xl hover:scale-110 transition-transform">
                    <Camera size={16} />
                  </button>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className={`text-xl font-bold ${textPrimary}`}>
                    Public Instructor Profile
                  </h3>
                  <p className={`text-sm ${textSecondary}`}>
                    This information will be visible to students on course
                    pages.
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                      Verified Educator
                    </span>
                    <span className="bg-amber-50 text-amber-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                      Top Rated
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Expertise / Specialized Subjects
                  </label>
                  <input
                    type="text"
                    placeholder="Quantum Physics, Applied Mathematics, Logic"
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm ${inputBg}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                    Biography
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell your students about your journey..."
                    className={`w-full rounded-2xl px-4 py-3.5 text-sm resize-none ${inputBg}`}
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
                      Notification Hub
                    </h4>
                    <p className="text-xs text-gray-600">
                      Control how and when you receive updates about your
                      classes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Student Inquiries",
                    desc: "Receive email when a student asks a question",
                    icon: <Mail size={16} />,
                  },
                  {
                    title: "Grading Reminders",
                    desc: "Get notified about pending assignments to grade",
                    icon: <Briefcase size={16} />,
                  },
                  {
                    title: "Platform Updates",
                    desc: "News about new teaching tools and features",
                    icon: <Globe size={16} />,
                  },
                  {
                    title: "Course Reviews",
                    desc: "Weekly digest of student feedback and ratings",
                    icon: <BookOpen size={16} />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-colors ${
                      isDarkMode ? "border-gray-800" : "border-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2 rounded-xl ${
                          isDarkMode
                            ? "bg-gray-800 text-gray-400"
                            : "bg-slate-50 text-slate-500"
                        }`}
                      >
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
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff4667]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- FOOTER ACTIONS --- */}
          <div className="mt-12 pt-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors">
              <Trash2 size={14} /> Delete Account
            </button>
            <div className="flex gap-4 w-full md:w-auto">
              <button
                className={`flex-1 md:flex-none px-8 py-3.5 rounded-2xl font-bold text-sm transition-all ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                Discard
              </button>
              <button className="flex-1 md:flex-none px-10 py-3.5 rounded-2xl bg-[#ff4667] text-white font-bold text-sm shadow-lg shadow-red-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <Save size={18} /> Save Settings
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

export default TeacherSettings;
