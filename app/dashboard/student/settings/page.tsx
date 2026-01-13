"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Shield,
  Bell,
  CreditCard,
  Camera,
  Check,
  ChevronRight,
  Globe,
  Mail,
  Lock,
  LogOut,
  Sparkles,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: <User size={18} /> },
    { id: "security", label: "Security", icon: <Shield size={18} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
    { id: "billing", label: "Billing", icon: <CreditCard size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FA] font-sans text-[#1D1B26]">
      {/* 1. TOP NAV / BREADCRUMB */}
      <nav className="px-10 py-6 flex items-center justify-between bg-white border-b border-slate-200">
        <div className="flex items-center gap-4">
          <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">
            Dashboard
          </span>
          <ChevronRight size={14} className="text-slate-300" />
          <span className="text-[#1D1B26] font-black text-sm uppercase tracking-widest">
            Settings
          </span>
        </div>
        <div className="flex items-center gap-3 bg-[#4E3796]/5 px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[11px] font-black text-[#4E3796] uppercase tracking-wider">
            Server: Online
          </span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* 2. SIDEBAR NAVIGATION */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="space-y-1">
              <h1 className="text-3xl font-black tracking-tight text-[#1D1B26]">
                Settings
              </h1>
              <p className="text-slate-500 text-xs font-medium">
                Manage your workspace and privacy.
              </p>
            </div>

            <nav className="flex flex-col gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-200 group ${
                    activeTab === tab.id
                      ? "bg-white shadow-md text-[#FF5364]"
                      : "text-slate-500 hover:bg-white/60 hover:text-[#4E3796]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`${
                        activeTab === tab.id
                          ? "text-[#FF5364]"
                          : "text-slate-400 group-hover:text-[#4E3796]"
                      }`}
                    >
                      {tab.icon}
                    </span>
                    <span className="text-sm font-bold tracking-tight">
                      {tab.label}
                    </span>
                  </div>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="dot"
                      className="w-1.5 h-1.5 bg-[#FF5364] rounded-full"
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="pt-8 border-t border-slate-200">
              <button className="flex items-center gap-4 px-5 py-4 text-slate-400 hover:text-red-500 transition-colors font-bold text-sm">
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </aside>

          {/* 3. MAIN CONTENT PANEL */}
          <main className="lg:col-span-9">
            <motion.div
              layout
              className="bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-slate-100 overflow-hidden"
            >
              {/* Profile Header Card */}
              <div className="bg-[#1D1B26] p-10 relative overflow-hidden">
                <div className="relative z-10 flex items-center gap-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden flex items-center justify-center">
                      <img
                        src="https://api.dicebear.com/7.x/shapes/svg?seed=Felix"
                        alt="User"
                        className="w-16 h-16"
                      />
                    </div>
                    <button className="absolute -bottom-2 -right-2 p-2.5 bg-[#FF5364] text-white rounded-xl shadow-xl hover:scale-105 transition-transform">
                      <Camera size={14} />
                    </button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-black text-white">
                        Ronald Richard
                      </h2>
                      <span className="bg-white/10 text-white/70 text-[10px] px-2 py-0.5 rounded border border-white/10 font-bold uppercase tracking-widest">
                        Premium
                      </span>
                    </div>
                    <p className="text-white/50 text-sm font-medium">
                      studentdemo@example.com
                    </p>
                  </div>
                </div>
                {/* Decorative Pattern */}
                <Sparkles className="absolute right-10 top-1/2 -translate-y-1/2 text-white/5 w-40 h-40" />
              </div>

              {/* Form Content */}
              <div className="p-12 space-y-12">
                {/* Section 1: Personal */}
                <section className="space-y-8">
                  <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                    <h3 className="font-black text-[#1D1B26] uppercase tracking-[0.15em] text-xs">
                      Personal Profile
                    </h3>
                    <span className="text-[10px] font-black text-[#4E3796] bg-[#4E3796]/5 px-3 py-1 rounded-full uppercase">
                      Verified User
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">
                        Legal Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          defaultValue="
Ronald Richard"
                          className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-[#4E3796]/10 focus:bg-white rounded-2xl py-4 px-6 text-sm font-bold text-[#1D1B26] transition-all outline-none"
                        />
                        <User
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-200 group-focus-within:text-[#4E3796] transition-colors"
                          size={18}
                        />
                      </div>
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-1">
                        Email Handle
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          defaultValue="studentdemo@example.com"
                          className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-[#4E3796]/10 focus:bg-white rounded-2xl py-4 px-6 text-sm font-bold text-[#1D1B26] transition-all outline-none"
                        />
                        <Mail
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-200 group-focus-within:text-[#4E3796] transition-colors"
                          size={18}
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2: Security Mini-Grid */}
                <section className="space-y-6">
                  <h3 className="font-black text-[#1D1B26] uppercase tracking-[0.15em] text-xs border-b border-slate-50 pb-4">
                    Security Preferences
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-6 rounded-[24px] bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#4E3796]">
                          <Lock size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-black">2FA Security</p>
                          <p className="text-[10px] text-slate-400 font-bold">
                            Enabled via SMS
                          </p>
                        </div>
                      </div>
                      <div className="w-10 h-5 bg-green-500 rounded-full flex items-center justify-end px-1">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    </div>

                    <div className="p-6 rounded-[24px] bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#4E3796]">
                          <Globe size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-black">Visibility</p>
                          <p className="text-[10px] text-slate-400 font-bold">
                            Public Profile
                          </p>
                        </div>
                      </div>
                      <div className="w-10 h-5 bg-slate-200 rounded-full flex items-center justify-start px-1">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Footer Actions */}
                <div className="pt-6 flex items-center justify-end gap-4 border-t border-slate-50">
                  <button className="px-8 py-4 text-slate-400 text-xs font-black uppercase tracking-widest hover:text-[#1D1B26] transition-colors">
                    Discard
                  </button>
                  <button className="bg-[#FF5364] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-pink-100 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3">
                    <Check size={16} strokeWidth={3} />
                    Commit Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
