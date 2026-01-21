"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  BookOpen,
  ShieldCheck,
  Bell,
  User,
  Lock,
  ArrowRight,
  Mail,
  Smartphone,
  GraduationCap,
  EyeOff,
  Clock,
  Globe,
  Award,
  AtSign,
  Monitor,
} from "lucide-react";

export default function StudentSettingsPage() {
  const [activeTab, setActiveTab] = useState("academic");

  const tabs = [
    { id: "academic", label: "Academic", icon: <GraduationCap size={16} /> },
    { id: "courses", label: "Courses", icon: <BookOpen size={16} /> },
    { id: "social", label: "Social", icon: <Globe size={16} /> },
    { id: "account", label: "Profile", icon: <User size={16} /> },
    { id: "alerts", label: "Alerts", icon: <Bell size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FA] font-sans text-[#1D1B26] flex items-center justify-center py-10">
      <div className="w-full max-w-5xl p-4 md:p-10">
        {/* HEADER */}
        <header className="mb-8 px-2">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#FF5B5C] text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase">
              Student Portal
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Account Settings
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Manage your learning preferences, privacy settings, and academic
            notifications.
          </p>
        </header>

        {/* NAVIGATION */}
        <nav className="bg-white p-2 rounded-[24px] shadow-sm border border-slate-200 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 py-3.5 rounded-[18px] transition-all font-bold text-xs uppercase tracking-widest ${
                  activeTab === tab.id
                    ? "bg-[#FF5B5C] text-white shadow-lg shadow-red-100"
                    : "text-slate-400 hover:bg-red-50 hover:text-[#FF5B5C]"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* CONTENT BOX */}
        <main className="min-h-150 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm h-150 overflow-y-auto [&::-webkit-scrollbar]:display-none [ms-overflow-style:none] [scrollbar-width:none]"
            >
              {/* ACADEMIC TAB */}
              {activeTab === "academic" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<Award size={20} />}
                    title="Learning Goals"
                  />
                  <div className="space-y-4">
                    {[
                      {
                        title: "Current Major",
                        value: "Computer Science",
                        code: "DEPT-CS",
                      },
                      {
                        title: "Expected Graduation",
                        value: "June 2026",
                        code: "CLASS-26",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-red-200 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-[#FF5B5C] shadow-sm border border-red-50">
                            {item.title[0]}
                          </div>
                          <div>
                            <p className="text-sm font-black text-slate-800">
                              {item.title}
                            </p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              {item.value} • {item.code}
                            </p>
                          </div>
                        </div>
                        <button className="p-2 bg-white group-hover:bg-[#FF5B5C] group-hover:text-white rounded-xl transition-all shadow-sm">
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    ))}
                    <div className="p-6 rounded-2xl bg-[#FF5B5C]/5 border border-[#FF5B5C]/10 col-span-full">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#FF5B5C] mb-2">
                        GPA Visibility
                      </p>
                      <ToggleSetting
                        title="Public Leaderboard"
                        desc="Allow your ranking to be visible on the course leaderboard."
                        icon={<Monitor size={18} />}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* COURSES TAB */}
              {activeTab === "courses" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<BookOpen size={20} />}
                    title="Course Preferences"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ToggleSetting
                      title="Auto-Enroll Waitlist"
                      desc="Automatically join classes if a spot opens up."
                      icon={<Clock size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Course Syllabus Emails"
                      desc="Receive PDF copies of syllabi upon registration."
                      icon={<Mail size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Show Progress Bars"
                      desc="Display completion percentage on dashboard."
                      icon={<Award size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Beta Course Access"
                      desc="Try new platform features before official release."
                      icon={<ShieldCheck size={18} />}
                    />
                  </div>
                </div>
              )}

              {/* SOCIAL TAB */}
              {activeTab === "social" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<Globe size={20} />}
                    title="Social & Privacy"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ToggleSetting
                      title="Show Online Status"
                      desc="Let classmates see when you are active."
                      icon={<AtSign size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Study Group Invites"
                      desc="Allow other students to invite you to groups."
                      icon={<User size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Privacy Mode"
                      desc="Hide your profile picture from non-classmates."
                      icon={<EyeOff size={18} />}
                    />
                    <ToggleSetting
                      title="Forum Notifications"
                      desc="Get notified when someone replies to your post."
                      icon={<Bell size={18} />}
                      defaultOn
                    />
                  </div>
                </div>
              )}

              {/* ALERTS TAB */}
              {activeTab === "alerts" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<Bell size={20} />}
                    title="Notification Center"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ToggleSetting
                      title="Assignment Deadlines"
                      desc="Notify 24 hours before a task is due."
                      icon={<Clock size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Grade Post Alerts"
                      desc="Immediate alert when a teacher posts a grade."
                      icon={<Award size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="SMS Reminders"
                      desc="Receive urgent school alerts via text."
                      icon={<Smartphone size={18} />}
                    />
                    <ToggleSetting
                      title="Live Class Starts"
                      desc="Notify when a scheduled Zoom/Meet link is live."
                      icon={<Monitor size={18} />}
                      defaultOn
                    />
                  </div>
                </div>
              )}

              {/* ACCOUNT TAB */}
              {activeTab === "account" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<User size={20} />}
                    title="Personal Information"
                  />
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <InputBlock
                        label="Student Full Name"
                        value="Kristein Watson"
                      />
                      <InputBlock
                        label="Academic Email"
                        value="k.watson@university.edu"
                      />
                    </div>
                    <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 self-start">
                      <p className="text-xs font-black uppercase tracking-widest text-[#FF5B5C] mb-3">
                        Security Portal
                      </p>
                      <button className="text-[10px] font-bold text-[#FF5B5C] hover:text-red-700 transition-colors flex items-center gap-2 tracking-widest uppercase text-left">
                        <Lock size={14} className="inline mr-2" /> Change
                        Account Password
                      </button>
                      <button className="mt-4 text-[10px] font-bold text-slate-400 hover:text-slate-600 transition-colors flex items-center gap-2 tracking-widest uppercase text-left">
                        <Smartphone size={14} className="inline mr-2" /> Setup
                        Two-Factor Auth
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* ACTION BAR */}
        <div className="mt-8 bg-white rounded-[28px] p-5 border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 px-2">
            <div className="w-2 h-2 rounded-full bg-[#FF5B5C] animate-pulse" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Ready to sync
            </span>
          </div>
          <button className="w-full sm:w-auto px-10 py-4 bg-[#FF5B5C] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-red-100 flex items-center justify-center gap-2 hover:bg-[#f14a4c] transition-all active:scale-95">
            <Check size={18} strokeWidth={3} /> Save Student Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

/* HELPER COMPONENTS (Identical Styling to Parent Page) */

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-red-50 text-[#FF5B5C] rounded-xl">{icon}</div>
      <h3 className="font-black text-sm uppercase tracking-widest text-slate-700">
        {title}
      </h3>
    </div>
  );
}

function InputBlock({
  label,
  value,
  disabled = false,
}: {
  label: string;
  value: string;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
        {label}
      </label>
      <input
        type="text"
        defaultValue={value}
        disabled={disabled}
        className={`w-full border rounded-xl px-4 py-3 text-sm font-bold outline-none transition-all ${
          disabled
            ? "bg-slate-100 border-slate-100 opacity-70 cursor-not-allowed"
            : "bg-slate-50 border-slate-100 focus:border-[#FF5B5C] focus:bg-white"
        }`}
      />
    </div>
  );
}

function ToggleSetting({ title, desc, icon, defaultOn = false }: any) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start justify-between hover:bg-white hover:border-red-100 transition-all group">
      <div className="flex gap-4">
        <div className="text-slate-400 group-hover:text-[#FF5B5C] transition-colors mt-1">
          {icon}
        </div>
        <div>
          <p className="text-sm font-bold text-slate-800">{title}</p>
          <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
            {desc}
          </p>
        </div>
      </div>
      <button
        onClick={() => setOn(!on)}
        className={`w-10 h-5 rounded-full flex items-center px-1 transition-all shrink-0 ${
          on ? "bg-[#FF5B5C] justify-end" : "bg-slate-300 justify-start"
        }`}
      >
        <div className="w-3.5 h-3.5 bg-white rounded-full shadow-md" />
      </button>
    </div>
  );
}
