"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Bell,
  CreditCard,
  Check,
  CircleUser,
  Smartphone,
  Wallet,
  History,
  Users,
  ShieldAlert,
  Globe,
  MapPin,
  Eye,
  ShieldCheck,
  UserPlus,
  ArrowRight,
  Mail,
  Lock,
  LogOut,
  SmartphoneNfc,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";

export default function ParentSettingsPage() {
  const [activeTab, setActiveTab] = useState("children");

  const tabs = [
    { id: "children", label: "Children", icon: <Users size={16} /> },
    { id: "safety", label: "Safety", icon: <ShieldAlert size={16} /> },
    { id: "billing", label: "Billing", icon: <CreditCard size={16} /> },
    { id: "account", label: "Account", icon: <CircleUser size={16} /> },
    { id: "notifications", label: "Alerts", icon: <Bell size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FA] font-sans text-[#1D1B26] pb-20">
      <div className="max-w-5xl mx-auto p-4 md:p-10">
        {/* HEADER */}
        <div className="mb-8 px-2">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-blue-500 text-white text-[10px] font-black px-2 py-1 rounded tracking-widest">
              GUARDIAN
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Parent Settings
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Manage family preferences and student safety protocols.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="bg-white p-2 rounded-[24px] shadow-sm border border-slate-200 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 py-3.5 rounded-[18px] transition-all font-bold text-xs uppercase tracking-widest ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-100"
                    : "text-slate-400 hover:bg-blue-50 hover:text-blue-500"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid gap-6"
          >
            {/* CHILDREN TAB */}
            {activeTab === "children" && (
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">
                    <Users size={20} />
                  </div>
                  <h3 className="font-black text-sm uppercase tracking-widest text-slate-700">
                    Child Profiles
                  </h3>
                </div>
                <div className="space-y-4">
                  {["Alice Smith", "Ben Smith"].map((name, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-blue-500 shadow-sm border border-blue-50">
                          {name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-black text-slate-800">
                            {name}
                          </p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {i === 0 ? "10th" : "8th"} Grade
                          </p>
                        </div>
                      </div>
                      <button className="p-2 bg-white group-hover:bg-blue-500 group-hover:text-white rounded-xl transition-all shadow-sm">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  ))}
                  <button className="w-full py-5 border-2 border-dashed border-blue-100 bg-blue-50/30 rounded-2xl text-blue-600 font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-blue-50 hover:border-blue-300 transition-all">
                    <UserPlus size={16} /> Add New Student
                  </button>
                </div>
              </div>
            )}

            {/* SAFETY TAB */}
            {activeTab === "safety" && (
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">
                    <ShieldAlert size={20} />
                  </div>
                  <h3 className="font-black text-sm uppercase tracking-widest text-slate-700">
                    Safety & Monitoring
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <ToggleSetting
                    title="Content Filter"
                    desc="Block social media."
                    icon={<Globe size={18} />}
                    defaultOn
                  />
                  <ToggleSetting
                    title="Location Ping"
                    desc="Receive geofence alerts."
                    icon={<MapPin size={18} />}
                  />
                  <ToggleSetting
                    title="In-App Monitoring"
                    desc="Review teacher feedback."
                    icon={<Eye size={18} />}
                    defaultOn
                  />
                  <ToggleSetting
                    title="Night Mode Lock"
                    desc="Restrict usage after 9 PM."
                    icon={<Smartphone size={18} />}
                  />
                </div>
              </div>
            )}

            {/* BILLING TAB */}
            {activeTab === "billing" && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">
                      <Wallet size={20} />
                    </div>
                    <h3 className="font-black text-sm uppercase tracking-widest text-slate-700">
                      Subscription
                    </h3>
                  </div>
                  <p className="text-4xl font-black mt-6 text-slate-900">
                    $45.00
                  </p>
                  <p className="text-[10px] font-black text-emerald-500 uppercase mt-1">
                    Premium Family Plan (Active)
                  </p>
                  <button className="mt-8 w-full py-4 bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 shadow-lg shadow-blue-100 transition-all">
                    Manage Payments
                  </button>
                </div>
                <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">
                      <History size={20} />
                    </div>
                    <h3 className="font-black text-sm uppercase tracking-widest text-slate-700">
                      Invoices
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0 text-xs font-bold text-slate-600"
                      >
                        <span>Jan {12 - i}, 2026</span>
                        <span className="font-black text-slate-900">
                          $45.00
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ACCOUNT TAB */}
            {activeTab === "account" && (
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">
                    <CircleUser size={20} />
                  </div>
                  <h3 className="font-black text-sm uppercase tracking-widest text-slate-700">
                    Profile
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Emma Watson"
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue="emma.watson@mail.com"
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm font-bold outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 self-start">
                    <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">
                      Password Settings
                    </p>
                    <button className="text-[10px] font-black uppercase tracking-widest text-blue-500 hover:underline">
                      Update Security Credentials
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ALERTS TAB */}
            {activeTab === "notifications" && (
              <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">
                    <Bell size={20} />
                  </div>
                  <h3 className="font-black text-sm uppercase tracking-widest text-slate-700">
                    Alerts
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <ToggleSetting
                    title="Emergency Alerts"
                    desc="School closures/safety drills."
                    icon={<AlertTriangle size={18} className="text-rose-500" />}
                    defaultOn
                  />
                  <ToggleSetting
                    title="Grade Drops"
                    desc="Performance drops below 70%."
                    icon={<Shield size={18} className="text-blue-500" />}
                    defaultOn
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <ActionBar />
      </div>
    </div>
  );
}

/* HELPER COMPONENTS */
function ToggleSetting({ title, desc, icon, defaultOn = false }: any) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start justify-between hover:bg-white hover:border-blue-100 transition-all">
      <div className="flex gap-4">
        <div className="text-slate-400 mt-1">{icon}</div>
        <div>
          <p className="text-sm font-bold text-slate-800">{title}</p>
          <p className="text-[11px] text-slate-500 font-medium">{desc}</p>
        </div>
      </div>
      <button
        onClick={() => setOn(!on)}
        className={`w-10 h-5 rounded-full flex items-center px-1 transition-all ${
          on ? "bg-blue-500 justify-end" : "bg-slate-300 justify-start"
        }`}
      >
        <div className="w-3.5 h-3.5 bg-white rounded-full shadow-sm" />
      </button>
    </div>
  );
}

function ActionBar() {
  return (
    <div className="mt-8 bg-white rounded-[28px] p-4 border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3 px-4">
        <ShieldCheck className="text-emerald-500" size={18} />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          Guardian Sync Verified
        </span>
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button className="flex-1 sm:flex-none px-8 py-3 text-slate-400 text-xs font-black uppercase tracking-widest hover:text-blue-500 transition-colors">
          Discard
        </button>
        <button className="flex-1 sm:flex-none bg-blue-500 text-white px-12 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-100 flex items-center justify-center gap-2 transition-all hover:bg-blue-600">
          <Check size={18} strokeWidth={3} /> Save Changes
        </button>
      </div>
    </div>
  );
}
