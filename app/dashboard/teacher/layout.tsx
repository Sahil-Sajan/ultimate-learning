"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to detect current URL
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
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      href: "/dashboard/teacher",
    },
    {
      name: "My Profile",
      icon: <User size={18} />,
      href: "/dashboard/teacher/profile",
    },
    {
      name: "My Courses",
      icon: <BookOpen size={18} />,
      href: "/dashboard/teacher/courses",
    },
    {
      name: "Students",
      icon: <Users size={18} />,
      href: "/dashboard/teacher/students",
    },
    {
      name: "Assignments",
      icon: <ClipboardList size={18} />,
      href: "/dashboard/teacher/assignments",
    },
    {
      name: "Class Management",
      icon: <BarChart3 size={18} />,
      href: "/dashboard/teacher/class-management",
    },
    {
      name: "Insights",
      icon: <Star size={18} />,
      href: "/dashboard/teacher/insights",
    },
    {
      name: "Messages",
      icon: <MessageSquare size={18} />,
      href: "/dashboard/teacher/messages",
    },
  ];

  // Logic to determine the active tab name for the Breadcrumb
  const currentItem = [
    ...menuItems,
    { name: "Settings", href: "/dashboard/settings" },
  ].find((item) => item.href === pathname);

  const activeLabel = currentItem ? currentItem.name : "Dashboard";

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* 1. DYNAMIC BREADCRUMB HEADER */}
      <div className="bg-white border-b border-slate-100 py-10 text-center">
        <h1 className="text-3xl font-black text-[#1D1B26]">{activeLabel}</h1>
        <p className="text-sm text-slate-400 mt-2 font-medium uppercase tracking-widest">
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
                href="/dashboard/settings"
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

        {/* 3. MAIN CONTENT AREA */}
        <main className="lg:col-span-9 space-y-8">
          {/* USER BANNER */}
          <div
            className="relative p-10 overflow-hidden flex flex-col md:flex-row items-center justify-between text-white shadow-2xl bg-cover bg-center rounded-[32px] min-h-55"
            style={{ backgroundImage: "url('/dashboard-ban.png')" }}
          >
            <div className="absolute inset-0 bg-black/20 z-0" />

            <div className="flex items-center gap-8 relative z-10">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-white/30 overflow-hidden bg-white">
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
                <h2 className="text-3xl font-black flex items-center gap-3">
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

            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-0 relative z-10">
              <button className="bg-white text-[#1D1B26] px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-tight shadow-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
                <PlusCircle size={14} /> Create New Course
              </button>
              <button className="bg-[#FF5364] text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-tight shadow-xl hover:bg-[#e04857] transition-colors">
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
