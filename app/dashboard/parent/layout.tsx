"use client";

import React from "react";
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
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col sticky top-0 h-screen shrink-0">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="bg-white p-2 rounded-xl transition-transform group-hover:rotate-6 shadow-sm border border-slate-50">
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
        </div>

        {/* Scrollbar hidden via CSS utility */}
        <div className="px-4 py-4 overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
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

      {/* MAIN LAYOUT */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-50">
          <div className="relative w-96">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#F8FAFC] border-none rounded-xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-[#FF5364]/20 outline-none"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-3 py-1.5 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/parent.avif"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-bold text-[#1D1B26]">
                Kristein Watson
              </span>
              <ChevronDown size={16} className="text-slate-400" />
            </div>
            <button className="relative p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF5364] rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* CONTENT AREA - Heading removed to match reference image */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
