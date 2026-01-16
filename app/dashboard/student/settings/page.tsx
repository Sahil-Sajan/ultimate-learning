"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Bell,
  CreditCard,
  Check,
  Globe,
  BookOpen,
  CircleUser,
  Smartphone,
  MousePointer2,
  Clock,
  Lock,
  Fingerprint,
  Mail,
  Calendar,
  Wallet,
  History,
  Languages,
  Zap,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("learning");

  const tabs = [
    { id: "learning", label: "Learning", icon: <BookOpen size={16} /> },
    { id: "account", label: "Account", icon: <CircleUser size={16} /> },
    { id: "security", label: "Security", icon: <Shield size={16} /> },
    { id: "notifications", label: "Alerts", icon: <Bell size={16} /> },
    { id: "billing", label: "Billing", icon: <CreditCard size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FA] font-sans text-[#1D1B26] pb-20">
      <div className="max-w-5xl mx-auto p-4 md:p-10">
        {/* 1. PAGE HEADER */}
        <div className="mb-8 px-2">
          <h1 className="text-3xl font-black tracking-tight text-[#1D1B26]">
            Settings
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Configure your study environment and account preferences.
          </p>
        </div>

        {/* 2. GRID NAVIGATION */}
        <div className="bg-white p-2 rounded-[24px] shadow-sm border border-slate-200 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 py-3.5 rounded-[18px] transition-all font-bold text-xs uppercase tracking-widest ${
                  activeTab === tab.id
                    ? "bg-[#4E3796] text-white shadow-lg shadow-indigo-100"
                    : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. SETTINGS CONTENT */}
        <div className="grid gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* LEARNING TAB */}
              {activeTab === "learning" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-[32px] p-6 md:p-8 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-2 bg-indigo-50 text-[#4E3796] rounded-xl">
                        <Zap size={20} />
                      </div>
                      <h3 className="font-black text-sm uppercase tracking-[0.15em]">
                        Study Preferences
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Languages size={18} className="text-slate-400" />
                            <span className="text-sm font-bold">
                              Auto-Captions
                            </span>
                          </div>
                          <div className="w-10 h-5 bg-emerald-500 rounded-full flex items-center justify-end px-1 cursor-pointer">
                            <div className="w-3.5 h-3.5 bg-white rounded-full" />
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium">
                          Enable subtitles for all video lectures by default.
                        </p>
                      </div>
                      <div className="space-y-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <MousePointer2
                              size={18}
                              className="text-slate-400"
                            />
                            <span className="text-sm font-bold">
                              Focus Mode
                            </span>
                          </div>
                          <div className="w-10 h-5 bg-slate-200 rounded-full flex items-center justify-start px-1 cursor-pointer">
                            <div className="w-3.5 h-3.5 bg-white rounded-full" />
                          </div>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium">
                          Hide sidebars and navigation during playback.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ACCOUNT TAB */}
              {activeTab === "account" && (
                <div className="bg-white rounded-[32px] p-6 md:p-8 border border-slate-200 shadow-sm space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-50 text-[#FF5364] rounded-xl">
                      <CircleUser size={20} />
                    </div>
                    <h3 className="font-black text-sm uppercase tracking-[0.15em]">
                      Public Profile
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Ronald Richard"
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white rounded-2xl py-4 px-6 text-sm font-bold outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">
                        Institutional Email
                      </label>
                      <input
                        type="email"
                        defaultValue="ronald.richard@edu.com"
                        className="w-full bg-slate-100 text-slate-400 border-2 border-transparent rounded-2xl py-4 px-6 text-sm font-bold cursor-not-allowed"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* SECURITY TAB */}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <div className="bg-white rounded-[32px] p-6 md:p-8 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                        <Lock size={20} />
                      </div>
                      <h3 className="font-black text-sm uppercase tracking-[0.15em]">
                        Password Management
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-1 gap-6 max-w-xl">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white rounded-2xl py-4 px-6 text-sm font-bold outline-none transition-all"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-indigo-100 focus:bg-white rounded-2xl py-4 px-6 text-sm font-bold outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-[32px] p-6 md:p-8 border border-slate-200 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-50 text-slate-400 rounded-2xl">
                        <Fingerprint size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-black">
                          Two-Factor Authentication
                        </p>
                        <p className="text-[11px] text-slate-400 font-bold">
                          Secure your account with an extra layer of safety.
                        </p>
                      </div>
                    </div>
                    <button className="px-6 py-2.5 bg-slate-100 text-[#1D1B26] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-colors">
                      Setup
                    </button>
                  </div>
                </div>
              )}

              {/* NOTIFICATIONS TAB */}
              {activeTab === "notifications" && (
                <div className="bg-white rounded-[32px] p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-yellow-50 text-yellow-600 rounded-xl">
                      <Bell size={20} />
                    </div>
                    <h3 className="font-black text-sm uppercase tracking-[0.15em]">
                      Alert Preferences
                    </h3>
                  </div>
                  {[
                    {
                      title: "Course Updates",
                      sub: "New lessons, materials, and instructor announcements.",
                      icon: <BookOpen size={16} />,
                    },
                    {
                      title: "Deadlines & Reminders",
                      sub: "Upcoming assignment due dates and quiz windows.",
                      icon: <Calendar size={16} />,
                    },
                    {
                      title: "General Inquiries",
                      sub: "Replies to your forum posts and direct messages.",
                      icon: <Mail size={16} />,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-white shadow-sm border border-slate-100 rounded-xl text-slate-400">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-black text-[#1D1B26]">
                            {item.title}
                          </p>
                          <p className="text-[11px] text-slate-400 font-medium">
                            {item.sub}
                          </p>
                        </div>
                      </div>
                      <div className="w-10 h-5 bg-emerald-500 rounded-full flex items-center justify-end px-1 cursor-pointer">
                        <div className="w-3.5 h-3.5 bg-white rounded-full shadow-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* BILLING TAB */}
              {activeTab === "billing" && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="p-3 bg-indigo-50 text-[#4E3796] rounded-2xl">
                            <Wallet size={24} />
                          </div>
                          <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-lg uppercase">
                            Active
                          </span>
                        </div>
                        <div>
                          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                            Premium Student Plan
                          </p>
                          <p className="text-3xl font-black text-[#1D1B26] mt-1">
                            $12.00
                            <span className="text-sm text-slate-400">/mo</span>
                          </p>
                        </div>
                      </div>
                      <button className="mt-8 w-full py-4 border-2 border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-indigo-100 hover:text-[#4E3796] transition-all">
                        Manage Subscription
                      </button>
                    </div>
                    <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm space-y-6">
                      <div className="flex items-center gap-3">
                        <History size={18} className="text-slate-400" />
                        <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-400">
                          Recent Transactions
                        </h4>
                      </div>
                      <div className="space-y-4">
                        {[
                          {
                            date: "Jan 12, 2026",
                            amt: "$12.00",
                            status: "Paid",
                          },
                          {
                            date: "Dec 12, 2025",
                            amt: "$12.00",
                            status: "Paid",
                          },
                        ].map((inv, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0"
                          >
                            <span className="text-xs font-bold">
                              {inv.date}
                            </span>
                            <span className="text-xs font-black">
                              {inv.amt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* 4. PERSISTENT ACTION BAR */}
          <div className="bg-white rounded-[28px] p-4 border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 px-4">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-[#4E3796]">
                <Smartphone size={16} />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Settings Sync Enabled
              </span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-6 py-3 text-slate-400 text-xs font-black uppercase tracking-widest hover:text-[#1D1B26]">
                Cancel
              </button>
              <button className="flex-1 sm:flex-none bg-[#4E3796] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-indigo-100 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
                <Check size={18} strokeWidth={3} /> Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
