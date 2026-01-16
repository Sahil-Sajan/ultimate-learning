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
  Menu,
  X,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: "profile", label: "Profile", icon: <User size={18} /> },
    { id: "security", label: "Security", icon: <Shield size={18} /> },
    { id: "notifications", label: "Notifications", icon: <Bell size={18} /> },
    { id: "billing", label: "Billing", icon: <CreditCard size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FA] font-sans text-[#1D1B26]">
      {/* 1. TOP NAV */}
      <nav className="px-4 md:px-10 py-4 flex items-center justify-between bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-slate-50 rounded-xl text-slate-500"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-slate-400 font-bold text-xs uppercase tracking-widest">
              Dashboard
            </span>
            <ChevronRight
              size={14}
              className="hidden sm:inline text-slate-300"
            />
            <span className="text-[#1D1B26] font-black text-xs uppercase tracking-widest whitespace-nowrap">
              Settings
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#4E3796]/5 px-3 py-1.5 rounded-full">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black text-[#4E3796] uppercase tracking-wider">
            Server Online
          </span>
        </div>
      </nav>

      {/* MOBILE OVERLAY NAVIGATION */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#1D1B26]/40 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-70 bg-white z-60 p-6 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-black text-xl uppercase tracking-tighter">
                  Menu
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-slate-50 rounded-full"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-2 grow">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all ${
                      activeTab === tab.id
                        ? "bg-[#FF5364] text-white shadow-lg shadow-pink-200"
                        : "text-slate-500 hover:bg-slate-50"
                    }`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-4 px-5 py-4 text-red-500 font-bold border-t border-slate-100">
                <LogOut size={18} /> Sign Out
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* 2. DESKTOP SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-3 space-y-8">
            <div className="space-y-1 px-2">
              <h1 className="text-3xl font-black tracking-tight text-[#1D1B26]">
                Settings
              </h1>
              <p className="text-slate-500 text-xs font-medium">
                Manage workspace and privacy.
              </p>
            </div>
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all group ${
                    activeTab === tab.id
                      ? "bg-white shadow-md text-[#FF5364]"
                      : "text-slate-500 hover:bg-white/60"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={
                        activeTab === tab.id
                          ? "text-[#FF5364]"
                          : "text-slate-400"
                      }
                    >
                      {tab.icon}
                    </span>
                    <span className="text-sm font-bold">{tab.label}</span>
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
            <div className="pt-6 border-t border-slate-200">
              <button className="flex items-center gap-4 px-5 py-2 text-slate-400 hover:text-red-500 font-bold text-sm transition-colors">
                <LogOut size={18} /> Sign Out
              </button>
            </div>
          </aside>

          {/* 3. MAIN CONTENT */}
          <main className="lg:col-span-9">
            {/* Header for mobile when menu is hidden */}
            <div className="lg:hidden mb-6">
              <h1 className="text-2xl font-black text-[#1D1B26]">Settings</h1>
              <p className="text-slate-500 text-xs font-medium">
                Manage your workspace.
              </p>
            </div>

            <motion.div
              layout
              className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden"
            >
              {/* Profile Header Card */}
              <div className="bg-[#1D1B26] p-8 md:p-10 relative overflow-hidden">
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 md:gap-8 text-center sm:text-left">
                  <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden flex items-center justify-center">
                      <img
                        src="https://api.dicebear.com/7.x/shapes/svg?seed=Felix"
                        alt="User"
                        className="w-12 h-12 md:w-16 md:h-16"
                      />
                    </div>
                    <button className="absolute -bottom-1 -right-1 p-2 bg-[#FF5364] text-white rounded-xl shadow-xl hover:scale-105 transition-transform">
                      <Camera size={12} />
                    </button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                      <h2 className="text-xl md:text-2xl font-black text-white">
                        Ronald Richard
                      </h2>
                      <span className="bg-white/10 text-white/70 text-[9px] px-2 py-0.5 rounded border border-white/10 font-bold uppercase">
                        Premium
                      </span>
                    </div>
                    <p className="text-white/50 text-xs md:text-sm font-medium">
                      studentdemo@example.com
                    </p>
                  </div>
                </div>
                <Sparkles className="absolute -right-6 -bottom-6 text-white/5 w-32 h-32 md:w-48 md:h-48" />
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-10 lg:p-12 space-y-10 md:space-y-12">
                {/* Section 1: Personal */}
                <section className="space-y-6 md:space-y-8">
                  <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                    <h3 className="font-black text-[#1D1B26] uppercase tracking-[0.15em] text-[10px] md:text-xs">
                      Personal Profile
                    </h3>
                    <span className="hidden sm:inline text-[9px] font-black text-[#4E3796] bg-[#4E3796]/5 px-3 py-1 rounded-full uppercase">
                      Verified User
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">
                        Legal Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          defaultValue="Ronald Richard"
                          className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-[#4E3796]/10 focus:bg-white rounded-2xl py-3.5 px-6 text-sm font-bold text-[#1D1B26] outline-none transition-all"
                        />
                        <User
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-200"
                          size={18}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">
                        Email Handle
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          defaultValue="studentdemo@example.com"
                          className="w-full bg-[#F8FAFC] border-2 border-transparent focus:border-[#4E3796]/10 focus:bg-white rounded-2xl py-3.5 px-6 text-sm font-bold text-[#1D1B26] outline-none transition-all"
                        />
                        <Mail
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-200"
                          size={18}
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2: Security */}
                <section className="space-y-6">
                  <h3 className="font-black text-[#1D1B26] uppercase tracking-[0.15em] text-[10px] md:text-xs border-b border-slate-50 pb-4">
                    Security
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: <Lock size={18} />,
                        title: "2FA Security",
                        sub: "Enabled SMS",
                      },
                      {
                        icon: <Globe size={18} />,
                        title: "Visibility",
                        sub: "Public Profile",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-[24px] bg-slate-50 border border-slate-100 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4 overflow-hidden">
                          <div className="shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#4E3796] shadow-sm">
                            {item.icon}
                          </div>
                          <div className="truncate">
                            <p className="text-xs font-black truncate">
                              {item.title}
                            </p>
                            <p className="text-[9px] text-slate-400 font-bold truncate">
                              {item.sub}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`shrink-0 w-9 h-4.5 rounded-full flex items-center px-1 transition-colors ${
                            i === 0
                              ? "bg-green-500 justify-end"
                              : "bg-slate-200 justify-start"
                          }`}
                        >
                          <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Footer Actions */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-end gap-3 md:gap-4 border-t border-slate-50">
                  <button className="w-full sm:w-auto px-8 py-4 text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-[#1D1B26]">
                    Discard
                  </button>
                  <button className="w-full sm:w-auto bg-[#FF5364] text-white px-8 py-4 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl shadow-pink-100 active:scale-95 transition-all flex items-center justify-center gap-3">
                    <Check size={16} strokeWidth={3} /> Commit Changes
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
