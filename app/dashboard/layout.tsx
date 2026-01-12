"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  BookOpen,
  Award,
  Heart,
  Star,
  ClipboardList,
  ShoppingCart,
  Users,
  MessageSquare,
  LifeBuoy,
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
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      href: "/dashboard",
    },
    {
      name: "My Profile",
      icon: <User size={18} />,
      href: "/dashboard/profile",
    },
    {
      name: "Enrolled Courses",
      icon: <BookOpen size={18} />,
      href: "/dashboard/enrolled-courses",
    },
    {
      name: "My Certificates",
      icon: <Award size={18} />,
      href: "/dashboard/certificates",
    },
    {
      name: "Wishlist",
      icon: <Heart size={18} />,
      href: "/dashboard/wishlist",
    },
    { name: "Reviews", icon: <Star size={18} />, href: "/dashboard/reviews" },
    {
      name: "My Quiz Attempts",
      icon: <ClipboardList size={18} />,
      href: "/dashboard/quizzes",
    },
    {
      name: "Order History",
      icon: <ShoppingCart size={18} />,
      href: "/dashboard/order-history",
    },
    {
      name: "Referrals",
      icon: <Users size={18} />,
      href: "/dashboard/referrals",
    },
    {
      name: "Messages",
      icon: <MessageSquare size={18} />,
      href: "/dashboard/messages",
    },
    {
      name: "Support Tickets",
      icon: <LifeBuoy size={18} />,
      href: "/dashboard/support",
    },
  ];

  const currentItem =
    menuItems.find((item) => item.href === pathname) || menuItems[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* 1. DYNAMIC BREADCRUMB HEADER */}
      <div className="bg-white border-b border-slate-100 py-10 text-center">
        <h1 className="text-3xl font-black text-[#1D1B26]">
          {currentItem.name}
        </h1>
        <p className="text-sm text-slate-400 mt-2 font-medium uppercase tracking-widest">
          Home <span className="text-red-500 mx-2">/</span> {currentItem.name}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-12 gap-8">
        {/* 2. PERSISTENT SIDEBAR */}
        <aside className="lg:col-span-3">
          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 sticky top-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">
              Main Menu
            </h3>
            <nav className="space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all ${
                      isActive
                        ? "bg-[#FF5364] text-white shadow-lg shadow-red-100"
                        : "text-slate-500 hover:bg-slate-50 hover:text-[#4E3796]"
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
                className="flex items-center gap-3 px-5 py-3.5 text-slate-500 font-bold text-sm hover:text-[#4E3796] transition-all"
              >
                <Settings size={18} /> Settings
              </Link>
              <button className="w-full flex items-center gap-3 px-5 py-3.5 text-slate-500 font-bold text-sm hover:text-red-500 transition-all">
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>
        </aside>

        {/* 3. MAIN CONTENT AREA */}
        <main className="lg:col-span-9 space-y-8">
          {/* USER BANNER WITH DYNAMIC BACKGROUND IMAGE */}
          <div
            className="relative  p-10 overflow-hidden flex flex-col md:flex-row items-center justify-between text-white shadow-2xl bg-cover bg-center min-h-[220px]"
            style={{ backgroundImage: "url('/dashboard-ban.png')" }} // Use your image path here
          >
            {/* Overlay to ensure text readability */}
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
                <div className="absolute bottom-1 right-1 bg-green-500 border-4 border-[#1E40AF] w-7 h-7 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle size={14} className="text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-black -ml-4 flex items-center gap-3">
                  Ronald Richard
                  <span className="text-sm bg-white/20 p-1.5 rounded-lg cursor-pointer hover:bg-white/40 transition-all">
                    <Pencil size={14} />
                  </span>
                </h2>
                <p className="text-white/80 font-bold -ml-4  tracking-widest uppercase text-xs mt-1">
                  Student
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-0 relative z-10">
              <button className="bg-white text-[#1E40AF] px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-tightshadow-xl hover:bg-slate-50 transition-colors">
                Become Instructor
              </button>
              <button className="bg-[#FF5364] text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-tight shadow-xl hover:bg-[#e04857] transition-colors">
                Instructor Dashboard
              </button>
            </div>
          </div>

          <div className="min-h-[400px]">{children}</div>
        </main>
      </div>
    </div>
  );
}
