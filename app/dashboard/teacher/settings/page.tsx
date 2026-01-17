"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  BookOpen,
  ClipboardList,
  MessageSquare,
  Bell,
  UserCheck,
  Calendar,
  Lock,
  ShieldCheck,
  PlusCircle,
  ArrowRight,
  Mail,
  FileText,
  Video,
  GraduationCap,
  Volume2,
  Smartphone,
  ShieldAlert,
  UserPlus,
} from "lucide-react";

export default function TeacherSettingsPage() {
  const [activeTab, setActiveTab] = useState("classroom");

  const tabs = [
    { id: "classroom", label: "Classroom", icon: <BookOpen size={16} /> },
    { id: "grading", label: "Grading", icon: <ClipboardList size={16} /> },
    { id: "comms", label: "Comms", icon: <MessageSquare size={16} /> },
    { id: "account", label: "Account", icon: <GraduationCap size={16} /> },
    { id: "alerts", label: "Alerts", icon: <Bell size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FA] font-sans text-[#1D1B26] flex items-center justify-center py-10">
      <div className="w-full max-w-5xl p-4 md:p-10">
        {/* HEADER */}
        <header className="mb-8 px-2">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#FF5364] text-white text-[10px] font-black px-2 py-1 rounded tracking-widest uppercase">
              Educator Portal
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Settings & Configuration
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Manage your digital classroom, grading logic, and communication
            channels.
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
                    ? "bg-[#FF5364] text-white shadow-lg shadow-red-100"
                    : "text-slate-400 hover:bg-red-50 hover:text-[#FF5364]"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* CONTENT BOX - FIXED HEIGHT & HIDDEN SCROLLBAR */}
        <main className="min-h-150 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              /* The classes below handle hiding the scrollbar while allowing scrolling:
                 - overflow-y-auto: allows scrolling
                 - [&::-webkit-scrollbar]:display-none: hides scrollbar for Chrome/Safari
                 - [ms-overflow-style:none]: hides for IE/Edge
                 - [scrollbar-width:none]: hides for Firefox
              */
              className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm h-150 overflow-y-auto [&::-webkit-scrollbar]:display-none [ms-overflow-style:none] [scrollbar-width:none]"
            >
              {/* CLASSROOM TAB */}
              {activeTab === "classroom" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<BookOpen size={20} />}
                    title="Active Classes"
                  />
                  <div className="space-y-4">
                    {[
                      "Advanced Biology - Period 4",
                      "General Science - Period 1",
                      "Anatomy Lab - Period 6",
                      "Bio-Chemistry - Period 2",
                    ].map((className, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-red-200 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-[#FF5364] shadow-sm border border-red-50">
                            {className[0]}
                          </div>
                          <div>
                            <p className="text-sm font-black text-slate-800">
                              {className}
                            </p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              28 Students Enrolled
                            </p>
                          </div>
                        </div>
                        <button className="p-2 bg-white group-hover:bg-[#FF5364] group-hover:text-white rounded-xl transition-all shadow-sm">
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    ))}
                    <button className="w-full py-5 border-2 border-dashed border-red-100 bg-red-50/30 rounded-2xl text-[#FF5364] font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-50 hover:border-red-300 transition-all">
                      <PlusCircle size={16} /> Create New Class
                    </button>
                  </div>
                </div>
              )}

              {/* GRADING TAB */}
              {activeTab === "grading" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<ClipboardList size={20} />}
                    title="Evaluation Metrics"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ToggleSetting
                      title="Auto-Grade Quizzes"
                      desc="Instantly grade multiple choice questions."
                      icon={<FileText size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Late Submission Penalty"
                      desc="Automatically deduct 10% per day."
                      icon={<Calendar size={18} />}
                    />
                    <ToggleSetting
                      title="Peer Review Mode"
                      desc="Enable anonymous student feedback."
                      icon={<UserCheck size={18} />}
                    />
                    <ToggleSetting
                      title="Plagiarism Checker"
                      desc="Scan all essays via Turnitin."
                      icon={<ShieldCheck size={18} />}
                      defaultOn
                    />
                  </div>
                </div>
              )}

              {/* COMMS TAB */}
              {activeTab === "comms" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<MessageSquare size={20} />}
                    title="Communication Channels"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ToggleSetting
                      title="Parent Portal Access"
                      desc="Allow parents to message you directly."
                      icon={<UserPlus size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Weekly Progress Digest"
                      desc="Auto-email grade reports to students."
                      icon={<Mail size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Virtual Office Hours"
                      desc="Show 'Available' status on student dash."
                      icon={<Video size={18} />}
                    />
                    <ToggleSetting
                      title="Group Chat"
                      desc="Enable class-wide discussion boards."
                      icon={<MessageSquare size={18} />}
                    />
                  </div>
                </div>
              )}

              {/* ALERTS TAB */}
              {activeTab === "alerts" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<Bell size={20} />}
                    title="Notifications"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ToggleSetting
                      title="Emergency Broadcasts"
                      desc="Campus safety and weather alerts."
                      icon={<ShieldAlert size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Grade Drop Alerts"
                      desc="Notify me if student drops below 65%."
                      icon={<ClipboardList size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="SMS Notifications"
                      desc="Critical updates via text message."
                      icon={<Smartphone size={18} />}
                    />
                    <ToggleSetting
                      title="Sound Alerts"
                      desc="Play chime for new submissions."
                      icon={<Volume2 size={18} />}
                    />
                  </div>
                </div>
              )}

              {/* ACCOUNT TAB */}
              {activeTab === "account" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<GraduationCap size={20} />}
                    title="Profile Information"
                  />
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <InputBlock label="Staff ID" value="EDU-99283" disabled />
                      <InputBlock label="Work Email" value="j.doe@school.edu" />
                    </div>
                    <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 self-start">
                      <p className="text-xs font-black uppercase tracking-widest text-[#FF5364] mb-3">
                        Security & Privacy
                      </p>
                      <button className="text-[10px] font-bold text-[#FF5364] hover:text-red-700 transition-colors flex items-center gap-2 tracking-widest uppercase text-left">
                        <Lock size={14} className="inline mr-2" /> Change
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
            <div className="w-2 h-2 rounded-full bg-[#FF5364] animate-pulse" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Live Cloud Sync Active
            </span>
          </div>
          <button className="w-full sm:w-auto px-10 py-4 bg-[#FF5364] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-red-100 flex items-center justify-center gap-2 hover:bg-[#e44a59] transition-all active:scale-95">
            <Check size={18} strokeWidth={3} /> Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}

/* HELPER COMPONENTS */

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-red-50 text-[#FF5364] rounded-xl">{icon}</div>
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
            : "bg-slate-50 border-slate-100 focus:border-[#FF5364] focus:bg-white"
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
        <div className="text-slate-400 group-hover:text-[#FF5364] transition-colors mt-1">
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
          on ? "bg-[#FF5364] justify-end" : "bg-slate-300 justify-start"
        }`}
      >
        <div className="w-3.5 h-3.5 bg-white rounded-full shadow-md" />
      </button>
    </div>
  );
}
