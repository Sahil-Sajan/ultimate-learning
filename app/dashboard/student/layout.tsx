"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook for path detection
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
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get current URL
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      href: "/dashboard/student",
    },
    {
      name: "My Profile",
      icon: <User size={18} />,
      href: "/dashboard/student/profile",
    },
    {
      name: "Enrolled Courses",
      icon: <BookOpen size={18} />,
      href: "/dashboard/student/enrolled-courses",
    },
    {
      name: "My Certificates",
      icon: <Award size={18} />,
      href: "/dashboard/student/certificates",
    },
    {
      name: "Wishlist",
      icon: <Heart size={18} />,
      href: "/dashboard/student/wishlist",
    },
    {
      name: "Reviews",
      icon: <Star size={18} />,
      href: "/dashboard/student/reviews",
    },
    {
      name: "My Quiz Attempts",
      icon: <ClipboardList size={18} />,
      href: "/dashboard/student/quizzes",
    },
    {
      name: "Order History",
      icon: <ShoppingCart size={18} />,
      href: "/dashboard/student/order-history",
    },
    {
      name: "Messages",
      icon: <MessageSquare size={18} />,
      href: "/dashboard/student/messages",
    },
  ];

  // Helper to determine the active tab name from the pathname
  const getActiveTabName = () => {
    const currentItem = menuItems.find((item) => item.href === pathname);
    if (currentItem) return currentItem.name;
    if (pathname.includes("/settings")) return "Settings";
    return "Dashboard";
  };

  const activeTabName = getActiveTabName();

  const SidebarContent = () => (
    <>
      <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-4">
        Main Menu
      </h3>
      <nav className="space-y-1">
        {menuItems.map((item) => {
          // Check if current path matches item href
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsSidebarOpen(false)}
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
          href="/dashboard/student/settings"
          onClick={() => setIsSidebarOpen(false)}
          className={`flex items-center gap-3 px-5 py-3.5 font-bold text-sm transition-all rounded-2xl ${
            pathname.includes("/settings")
              ? "bg-[#FF5364] text-white shadow-lg shadow-pink-100"
              : "text-slate-500 hover:text-[#FF5364]"
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
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            <Menu size={24} />
          </button>

          <div className="text-center flex-1">
            <h1 className="text-2xl md:text-3xl font-black text-[#1D1B26]">
              {activeTabName}
            </h1>
            <p className="hidden md:block text-sm text-slate-400 mt-2 font-medium uppercase tracking-widest">
              Home <span className="text-[#FF5364] mx-2">/</span>{" "}
              {activeTabName}
            </p>
          </div>

          <div className="lg:hidden w-10" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-12 gap-8">
        {/* 2. PERSISTENT SIDEBAR */}
        <aside className="lg:col-span-3">
          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 sticky top-6">
            <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-600 mb-4 px-4">
              Main Menu
            </h3>
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveTab(item.name)}
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

        {/* MOBILE SIDEBAR OVERLAY */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsSidebarOpen(false)}
            />
            <div className="absolute top-0 left-0 w-80 h-full bg-white p-6 shadow-2xl overflow-y-auto">
              <div className="flex justify-between items-center mb-8 px-4">
                <span className="font-black text-[#FF5364]">MENU</span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-slate-400"
                >
                  <X size={24} />
                </button>
              </div>
              <SidebarContent />
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
                    src="/fs-1.avif"
                    className="w-full h-full object-cover"
                    alt="User"
                  />
                </div>
                <div className="absolute bottom-1 right-1 bg-green-500 border-4 border-white/20 w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle size={14} className="text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-black flex items-center gap-3">
                  Ronald Richard
                  <span className="text-sm bg-white/20 p-1.5 rounded-lg cursor-pointer hover:bg-white/40 transition-all">
                    <Pencil size={14} />
                  </span>
                </h2>
                <p className="text-white/80 font-bold tracking-widest uppercase text-xs mt-1">
                  Student
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-0 relative z-10">
              <button className="bg-white text-[#1D1B26] px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-tight shadow-xl hover:bg-slate-50 transition-colors">
                Become Instructor
              </button>
              <button className="bg-[#FF5364] text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-tight shadow-xl hover:bg-[#e04857] transition-colors">
                Instructor Dashboard
              </button>
            </div>
          </div>

          <div className="min-h-100">{children}</div>
        </main>
      </div>
    </div>
  );
}