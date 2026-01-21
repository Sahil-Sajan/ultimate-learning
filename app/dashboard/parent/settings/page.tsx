"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Users,
  CreditCard,
  MessageCircle,
  Bell,
  User,
  ShieldCheck,
  Calendar,
  Lock,
  PlusCircle,
  ArrowRight,
  Mail,
  History,
  Phone,
  Backpack,
  Heart,
  Smartphone,
  ShieldAlert,
  UserPlus,
} from "lucide-react";

export default function ParentSettingsPage() {
  const [activeTab, setActiveTab] = useState("students");

  const tabs = [
    { id: "students", label: "Children", icon: <Users size={16} /> },
    { id: "finances", label: "Finances", icon: <CreditCard size={16} /> },
    { id: "comms", label: "Connect", icon: <MessageCircle size={16} /> },
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
              Family Portal
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Parental Controls
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Manage your children's enrollment, school finances, and security
            preferences.
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
              {/* STUDENTS TAB */}
              {activeTab === "students" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<Backpack size={20} />}
                    title="Student Profiles"
                  />
                  <div className="space-y-4">
                    {[
                      {
                        name: "Alice Smith",
                        grade: "Grade 11",
                        id: "STU-22901",
                      },
                      {
                        name: "Mark Smith",
                        grade: "Grade 08",
                        id: "STU-24105",
                      },
                    ].map((student, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-red-200 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-[#FF5B5C] shadow-sm border border-red-50">
                            {student.name[0]}
                          </div>
                          <div>
                            <p className="text-sm font-black text-slate-800">
                              {student.name}
                            </p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                              {student.grade} • ID: {student.id}
                            </p>
                          </div>
                        </div>
                        <button className="p-2 bg-white group-hover:bg-[#FF5B5C] group-hover:text-white rounded-xl transition-all shadow-sm">
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    ))}
                    <button className="w-full py-5 border-2 border-dashed border-red-100 bg-red-50/30 rounded-2xl text-[#FF5B5C] font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-red-50 hover:border-red-300 transition-all">
                      <UserPlus size={16} /> Link New Student Account
                    </button>
                  </div>
                </div>
              )}

              {/* FINANCES TAB */}
              {activeTab === "finances" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<CreditCard size={20} />}
                    title="Billing & Tuition"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ToggleSetting
                      title="Auto-Pay Monthly Fees"
                      desc="Automatically process tuition on the 1st of each month."
                      icon={<CreditCard size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Electronic Receipts"
                      desc="Send tax-compliant receipts to your email."
                      icon={<Mail size={18} />}
                      defaultOn
                    />
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 col-span-full">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                          Current Balance
                        </span>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                          No Overdue Fees
                        </span>
                      </div>
                      <div className="flex items-end justify-between">
                        <h2 className="text-3xl font-black text-slate-800">
                          $0.00
                        </h2>
                        <button className="px-6 py-2 bg-[#FF5B5C] text-white rounded-lg text-[10px] font-black uppercase tracking-widest">
                          Manage Cards
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* COMMS TAB */}
              {activeTab === "comms" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<MessageCircle size={20} />}
                    title="Communication Setup"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ToggleSetting
                      title="Instant Teacher Messaging"
                      desc="Allow teachers to reach you via the portal."
                      icon={<MessageCircle size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Weekly Academic Digest"
                      desc="Receive a summary of your child's weekly performance."
                      icon={<History size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Meeting SMS Alerts"
                      desc="Receive text reminders for parent-teacher conferences."
                      icon={<Smartphone size={18} />}
                    />
                    <ToggleSetting
                      title="Public Announcements"
                      desc="General school news and holiday notices."
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
                    icon={<ShieldAlert size={20} />}
                    title="Safety & Attendance Alerts"
                  />
                  <div className="grid md:grid-cols-2 gap-6">
                    <ToggleSetting
                      title="Unverified Absence"
                      desc="Notify immediately if child is not in class."
                      icon={<ShieldAlert size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Bus Proximity"
                      desc="Alert when the school bus is within 1 mile."
                      icon={<Phone size={18} />}
                    />
                    <ToggleSetting
                      title="Clinic Visits"
                      desc="Notification if child visits the school nurse."
                      icon={<Heart size={18} />}
                      defaultOn
                    />
                    <ToggleSetting
                      title="Grade Drop Warning"
                      desc="Alert when any subject grade falls below 65%."
                      icon={<ShieldCheck size={18} />}
                    />
                  </div>
                </div>
              )}

              {/* ACCOUNT TAB */}
              {activeTab === "account" && (
                <div className="space-y-6">
                  <SectionHeader
                    icon={<User size={20} />}
                    title="Guardian Information"
                  />
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <InputBlock label="Primary Guardian" value="Jane Smith" />
                      <InputBlock
                        label="Registered Phone"
                        value="+1 (555) 012-3456"
                      />
                    </div>
                    <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 self-start">
                      <p className="text-xs font-black uppercase tracking-widest text-[#FF5B5C] mb-3">
                        Account Security
                      </p>
                      <button className="text-[10px] font-bold text-[#FF5B5C] hover:text-red-700 transition-colors flex items-center gap-2 tracking-widest uppercase text-left">
                        <Lock size={14} className="inline mr-2" /> Reset
                        Guardian Access Pin
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
              Last saved: Just now
            </span>
          </div>
          <button className="w-full sm:w-auto px-10 py-4 bg-[#FF5B5C] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-red-100 flex items-center justify-center gap-2 hover:bg-[#f14a4c] transition-all active:scale-95">
            <Check size={18} strokeWidth={3} /> Update Family Profile
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
