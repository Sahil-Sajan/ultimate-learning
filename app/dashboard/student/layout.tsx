"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  User,
  BookOpen,
  Award,
  Heart,
  Star,
  ClipboardList,
  ShoppingCart,
  MessageSquare,
  Settings,
  LogOut,
  CheckCircle,
  Pencil,
  Menu,
  X,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, href: "/dashboard" },
    { name: "My Profile", icon: <User size={18} />, href: "/dashboard/profile" },
    { name: "Enrolled Courses", icon: <BookOpen size={18} />, href: "/dashboard/enrolled-courses" },
    { name: "My Certificates", icon: <Award size={18} />, href: "/dashboard/certificates" },
    { name: "Wishlist", icon: <Heart size={18} />, href: "/dashboard/wishlist" },
    { name: "Reviews", icon: <Star size={18} />, href: "/dashboard/reviews" },
    { name: "My Quiz Attempts", icon: <ClipboardList size={18} />, href: "/dashboard/quizzes" },
    { name: "Order History", icon: <ShoppingCart size={18} />, href: "/dashboard/order-history" },
    { name: "Messages", icon: <MessageSquare size={18} />, href: "/dashboard/messages" },
  ];

  const SidebarContent = () => (
    <>
      <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-4">
        Main Menu
      </h3>
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveTab(item.name);
                setIsSidebarOpen(false);
              }}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-[#FF5364] text-white shadow-lg shadow-pink-100"
                  : "text-slate-500 hover:bg-pink-50 hover:text-[#FF5364]"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>

      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-10 mb-6 px-4">
        Account Settings
      </h3>
      <div className="space-y-1">
        <Link
          href="/dashboard/settings"
          onClick={() => {
            setActiveTab("Settings");
            setIsSidebarOpen(false);
          }}
          className={`flex items-center gap-3 px-5 py-3.5 font-bold text-sm transition-all ${
            activeTab === "Settings" ? "text-[#FF5364]" : "text-slate-500 hover:text-[#FF5364]"
          }`}
        >
          <Settings size={18} /> Settings
        </Link>
        <button className="w-full flex items-center gap-3 px-5 py-3.5 text-slate-500 font-bold text-sm hover:text-red-500 transition-all text-left">
          <LogOut size={18} /> Logout
        </button>
      </div>
    </>
  );

  return (
   <div className="min-h-screen bg-[#F8FAFC] font-sans">
  {/* 1. DYNAMIC BREADCRUMB HEADER */}
  <div className="bg-white border-b border-slate-100 py-6 md:py-10 px-6">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
      >
        <Menu size={24} />
      </button>

      <div className="text-center flex-1">
        <h1 className="text-2xl md:text-3xl font-black text-[#1D1B26] capitalize">{activeTab}</h1>
        <p className="hidden md:block text-sm text-slate-400 mt-2 font-medium uppercase tracking-widest">
          Home <span className="text-[#FF5364] mx-2">/</span> {activeTab}
        </p>
      </div>

      {/* Placeholder for symmetry on mobile */}
      <div className="lg:hidden w-10" />
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid lg:grid-cols-12 gap-8">
    {/* 2. PERSISTENT SIDEBAR (Desktop) */}
    <aside className="hidden lg:block lg:col-span-3">
      <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 sticky top-6">
        <SidebarContent />
      </div>
    </aside>

    {/* 3. MAIN CONTENT */}
    <main className="lg:col-span-9 space-y-8">
      {/* PROFILE INFO CARD */}
      <div className="bg-[#1D1B26] rounded-[32px] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
        <div className="relative z-10 text-center lg:text-left">
          <h2 className="text-xl md:text-2xl font-black text-white flex items-center justify-center lg:justify-start gap-3">
            Ronald Richard
            <span className="text-sm bg-white/20 p-1.5 rounded-lg cursor-pointer hover:bg-white/40 transition-all">
              <Pencil size={14} />
            </span>
          </h2>
          <p className="text-white/80 font-bold tracking-widest uppercase text-[10px] md:text-xs mt-1">
            Student
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 lg:mt-0 relative z-10 w-full lg:w-auto">
          <button className="bg-white text-[#1D1B26] px-6 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-tight shadow-xl hover:bg-slate-50 transition-colors w-full sm:w-auto">
            Become Instructor
          </button>
          <button className="bg-[#FF5364] text-white px-6 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-tight shadow-xl hover:bg-[#e04857] transition-colors w-full sm:w-auto">
            Instructor Dashboard
          </button>
        </div>
      </div>

      {/* DYNAMIC CONTENT AREA */}
      <div className="min-h-[400px]">
        {children}
      </div>
    </main>
  </div>
</div>