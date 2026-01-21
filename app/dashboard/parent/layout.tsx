"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  ClipboardList,
  MessageSquare,
  Settings,
  LogOut,
  TrendingUp,
  Clock,
  FileText,
  Shield,
  GraduationCap,
  Search,
  Bell,
  ChevronDown,
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

  const parentMenuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      href: "/dashboard/parent",
    },
    {
      name: "Child Profile",
      icon: <User size={18} />,
      href: "/dashboard/parent/child-profile",
    },
    {
      name: "Progress",
      icon: <TrendingUp size={18} />,
      href: "/dashboard/parent/progress",
    },
    {
      name: "Assignments",
      icon: <ClipboardList size={18} />,
      href: "/dashboard/parent/assignments",
    },
    {
      name: "Attendance",
      icon: <Clock size={18} />,
      href: "/dashboard/parent/attendance",
    },
    {
      name: "Reports",
      icon: <FileText size={18} />,
      href: "/dashboard/parent/reports",
    },
    {
      name: "Messages",
      icon: <MessageSquare size={18} />,
      href: "/dashboard/parent/messages",
    },
    {
      name: "Safety & Controls",
      icon: <Shield size={18} />,
      href: "/dashboard/parent/safety",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex items-start">
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR - STICKY */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-[70] w-64 bg-white border-r border-slate-100 flex flex-col transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen lg:shrink-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="p-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-50">
              <GraduationCap className="text-[#FF5B5C]" size={24} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold uppercase tracking-tight text-[#1D1B26]">
                Ultimate
              </span>
              <span className="text-xs font-light text-[#FF5B5C] uppercase tracking-[0.2em]">
                Learning
              </span>
            </div>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 text-slate-500"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 py-4 overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden">
          <p className="text-[11px] font-bold text-slate-400 tracking-[0.2em] mb-4 px-4">
            MENU
          </p>
          <nav className="space-y-1">
            {parentMenuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#FF5364]/10 text-[#FF5364]"
                      : "text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <p className="text-[11px] font-bold text-slate-400 tracking-[0.2em] mt-8 mb-4 px-4">
            OTHERS
          </p>
          <nav className="space-y-1">
            <Link
              href="/dashboard/parent/settings"
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                pathname === "/dashboard/parent/settings"
                  ? "text-[#FF5364] bg-[#FF5364]/10"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Settings size={18} /> Settings
            </Link>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 font-bold text-sm hover:text-red-500 hover:bg-red-50 transition-all text-left">
              <LogOut size={18} /> Logout
            </button>
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER - NON-STICKY */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-4 lg:px-8 z-50">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
            >
              <Menu size={24} />
            </button>

            <div className="relative hidden sm:block lg:w-96 w-64">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#F8FAFC] border-none rounded-xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-[#FF5364]/20 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-6">
            <div className="flex items-center gap-3 px-3 py-1.5 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/parent.avif"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-bold text-[#1D1B26] hidden md:block">
                Jane Smith
              </span>
              <ChevronDown
                size={16}
                className="text-slate-400 hidden md:block"
              />
            </div>
            <button className="relative p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF5364] rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
