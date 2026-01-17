"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  BookOpen,
  Users,
  Star,
  ClipboardList,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  CheckCircle,
  Pencil,
  PlusCircle,
  Menu,
  X,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on route change (Mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, href: "/dashboard/teacher" },
    { name: "My Profile", icon: <User size={18} />, href: "/dashboard/teacher/profile" },
    { name: "My Courses", icon: <BookOpen size={18} />, href: "/dashboard/teacher/courses" },
    { name: "Students", icon: <Users size={18} />, href: "/dashboard/teacher/students" },
    { name: "Assignments", icon: <ClipboardList size={18} />, href: "/dashboard/teacher/assignments" },
    { name: "Class Management", icon: <BarChart3 size={18} />, href: "/dashboard/teacher/class-management" },
    { name: "Insights", icon: <Star size={18} />, href: "/dashboard/teacher/insights" },
    { name: "Messages", icon: <MessageSquare size={18} />, href: "/dashboard/teacher/messages" },
  ];

  const currentItem = [
    ...menuItems,
    { name: "Settings", href: "/dashboard/teacher/settings" },
  ].find((item) => item.href === pathname);

  const activeLabel = currentItem ? currentItem.name : "Dashboard";

  // Shared Sidebar Component
  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white p-6">
      <div className="flex items-center justify-between lg:hidden mb-10">
        <span className="font-black text-2xl text-[#FF5364]">UL</span>
        <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <X size={24} className="text-slate-600" />
        </button>
      </div>

      <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-4">
        Main Menu
      </h3>
      <nav className="space-y-1 flex-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
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

      <div className="pt-8 border-t border-slate-100 mt-6">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">
          Account Settings
        </h3>
        <div className="space-y-1">
          <Link
            href="/dashboard/settings"
            className={`flex items-center gap-3 px-5 py-3.5 font-bold text-sm transition-all ${
              pathname === "/dashboard/settings" ? "text-[#FF5364]" : "text-slate-500 hover:text-[#FF5364]"
            }`}
          >
            <Settings size={18} /> Settings
          </Link>
          <button className="w-full flex items-center gap-3 px-5 py-3.5 text-slate-500 font-bold text-sm hover:text-red-500 transition-all text-left">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans relative overflow-x-hidden">
      
      {/* 1. MOBILE SIDEBAR DRAWER & OVERLAY */}
      <div 
        className={`fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />
      
      <aside className={`fixed top-0 left-0 bottom-0 z-[101] w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out transform lg:hidden ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <SidebarContent />
      </aside>

      {/* 2. DYNAMIC BREADCRUMB HEADER (CENTRALIZED) */}
      <div className="bg-white border-b border-slate-100 py-10 text-center relative">
        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden absolute left-6 top-1/2 -translate-y-1/2 p-2.5 bg-slate-50 text-slate-600 rounded-xl border border-slate-200"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-2xl md:text-3xl font-black text-[#1D1B26]">{activeLabel}</h1>
        <p className="text-xs md:text-sm text-slate-400 mt-2 font-medium uppercase tracking-widest">
          Home <span className="text-[#FF5364] mx-2">/</span> {activeLabel}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-12 gap-8">
        {/* 2. PERSISTENT SIDEBAR */}
        <aside className="lg:col-span-3">
          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 sticky top-6">
            <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-4">
              Main Menu
            </h3>
            <nav className="space-y-1">
              {menuItems.map((item) => {
                // Check if the current URL matches the item href
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
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
                href="/dashboard/teacher/settings"
                className={`flex items-center gap-3 px-5 py-3.5 font-bold text-sm transition-all ${
                  pathname === "/dashboard/settings"
                    ? "text-[#FF5364]"
                    : "text-slate-500 hover:text-[#FF5364]"
                }`}
              >
                <Settings size={18} /> Settings
              </Link>
              <button className="w-full flex items-center gap-3 px-5 py-3.5 text-slate-500 font-bold text-sm hover:text-red-500 transition-all text-left">
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>
        </aside>

        {/* 4. MAIN CONTENT AREA */}
        <main className="lg:col-span-9 space-y-8">
          {/* USER BANNER (RESPONSIVE) */}
          <div
            className="relative p-6 md:p-10 overflow-hidden flex flex-col xl:flex-row items-center justify-between text-white shadow-2xl bg-cover bg-center rounded-[32px] min-h-55"
            style={{ backgroundImage: "url('/dashboard-ban.png')" }}
          >
            <div className="absolute inset-0 bg-black/30 z-0" />

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 relative z-10 text-center md:text-left">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-white/30 overflow-hidden bg-white mx-auto md:mx-0">
                  <img
                    src="/teacher.avif"
                    className="w-full h-[135%] object-cover"
                    alt="User"
                  />
                </div>
                <div className="absolute bottom-1 right-1 bg-green-500 border-4 border-white/20 w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle size={14} className="text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black flex items-center justify-center md:justify-start gap-3">
                  Emma Watson
                  <span className="text-sm bg-white/20 p-1.5 rounded-lg cursor-pointer hover:bg-white/40 transition-all">
                    <Pencil size={14} />
                  </span>
                </h2>
                <p className="text-white/80 font-bold tracking-widest uppercase text-xs mt-1">
                  Instructor
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 xl:mt-0 relative z-10 w-full sm:w-auto">
              <button className="bg-white text-[#1D1B26] px-6 py-3 rounded-full text-xs font-black uppercase tracking-tight shadow-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                <PlusCircle size={14} /> Create New Course
              </button>
              <button className="bg-[#FF5364] text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-tight shadow-xl hover:bg-[#e04857] transition-colors flex items-center justify-center">
                View Public Profile
              </button>
            </div>
          </div>

          <div className="min-h-100">{children}</div>
        </main>
      </div>
    </div>
  );
}