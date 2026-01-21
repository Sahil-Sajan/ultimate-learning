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
  
  Smartphone,
  GraduationCap,
  EyeOff,
  Clock,
  Globe,
  Award,
  AtSign,
  Monitor,
  Users,
  FileCheck,
  Zap,
} from "lucide-react";

export default function TeacherSettingsPage() {
  const [activeTab, setActiveTab] = useState("teaching");

  const tabs = [
    { id: "teaching", label: "Teaching", icon: <GraduationCap size={16} /> },
    { id: "classroom", label: "Classroom", icon: <Users size={16} /> },
    { id: "privacy", label: "Privacy", icon: <EyeOff size={16} /> },
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
              Instructor Portal
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Teaching Preferences
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Configure your classroom environment, grading automation, and
            faculty communication.
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
              {/* TEACHING TAB */}
              {activeTab === "teaching" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<Zap size={20} />}
                    title="Workflow Automation"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ToggleSetting
                      title="Automated Grading"
                      desc="Enable AI-assisted grading for multiple-choice quizzes."
                      icon={<FileCheck size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Plagiarism Checker"
                      desc="Automatically scan all student submissions via Turnitin."
                      icon={<ShieldCheck size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Late Work Deductions"
                      desc="Apply 10% daily penalty to overdue assignments."
                      icon={<Clock size={18} />}
                    />
                    <ToggleSetting
                      title="Anonymous Grading"
                      desc="Hide student names while reviewing submissions."
                      icon={<User size={18} />}
                    />
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 col-span-full">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
                      Teaching ID / Certification
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-slate-800 tracking-tight">
                        Active Faculty License: #EDU-9920-TR
                      </p>
                      <span className="text-[10px] font-black text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* CLASSROOM TAB */}
              {activeTab === "classroom" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<BookOpen size={20} />}
                    title="Classroom Environment"
                  />
                  <div className="space-y-4">
                    {[
                      {
                        name: "Advanced Mathematics",
                        students: "32 Students",
                        code: "MATH-401",
                      },
                      {
                        name: "Quantum Physics II",
                        students: "18 Students",
                        code: "PHYS-202",
                      },
                    ].map((course, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-red-200 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-[#FF5B5C] shadow-sm border border-red-50">
                            {course.name[0]}
                          </div>
                          <div>
                            <p className="text-sm font-black text-slate-800">
                              {course.name}
                            </p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              {course.students} • Course Code: {course.code}
                            </p>
                          </div>
                        </div>
                        <button className="p-2 bg-white group-hover:bg-[#FF5B5C] group-hover:text-white rounded-xl transition-all shadow-sm">
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    ))}
                    <div className="pt-4">
                      <ToggleSetting
                        title="Allow Peer Reviews"
                        desc="Let students provide feedback on each other's projects."
                        icon={<Users size={18} />}
                        defaultOn
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* PRIVACY TAB */}
              {activeTab === "privacy" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<Globe size={20} />}
                    title="Visibility & Communication"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ToggleSetting
                      title="Show Office Hours"
                      desc="Display your weekly availability on student dashboards."
                      icon={<Clock size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Public Instructor Profile"
                      desc="Allow external visitors to view your academic bio."
                      icon={<Globe size={18} />}
                    />
                    <ToggleSetting
                      title="Direct Messaging"
                      desc="Allow students to message you directly via the portal."
                      icon={<AtSign size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Read Receipts"
                      desc="Show students when you have viewed their messages."
                      icon={<Monitor size={18} />}
                    />
                  </div>
                </div>
              )}

              {/* ALERTS TAB */}
              {activeTab === "alerts" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<Bell size={20} />}
                    title="Notifications for Educators"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ToggleSetting
                      title="New Submissions"
                      desc="Notify when a student submits an assignment."
                      icon={<FileCheck size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Low Class Average"
                      desc="Alert when class average falls below 70% on a test."
                      icon={<Award size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Faculty Meetings"
                      desc="Sync department meetings with your mobile alerts."
                      icon={<Smartphone size={18} />}
                    />
                    <ToggleSetting
                      title="Course Forum Activity"
                      desc="Alert when questions are posted in the class forum."
                      icon={<AtSign size={18} />}
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
                    title="Instructor Information"
                  />
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <InputBlock
                        label="Faculty Full Name"
                        value="Dr. Sarah Jenkins"
                      />
                      <InputBlock
                        label="Work Email Address"
                        value="s.jenkins@university.edu"
                      />
                    </div>
                    <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 self-start">
                      <p className="text-xs font-black uppercase tracking-widest text-[#FF5B5C] mb-3">
                        Security Portal
                      </p>
                      <button className="text-[10px] font-bold text-[#FF5B5C] hover:text-red-700 transition-colors flex items-center gap-2 tracking-widest uppercase text-left">
                        <Lock size={14} className="inline mr-2" /> Update
                        Security Credentials
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
              Last Synced: 2 mins ago
            </span>
          </div>
          <button className="w-full sm:w-auto px-10 py-4 bg-[#FF5B5C] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-red-100 flex items-center justify-center gap-2 hover:bg-[#f14a4c] transition-all active:scale-95">
            <Check size={18} strokeWidth={3} /> Save Instructor Settings
          </button>
        </div>
      </div>
    </div>
  );
}

/* HELPER COMPONENTS (Identical Styling to previous versions) */

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
