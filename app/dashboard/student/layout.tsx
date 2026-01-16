"use client";
import React, { useState, useEffect } from "react";
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
  Menu, // Mobile toggle ke liye
  X,    // Close icon ke liye
} from "lucide-react";



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, href: "/dashboard/student" },
    { name: "My Profile", icon: <User size={18} />, href: "/dashboard/student/profile" },
    { name: "Enrolled Courses", icon: <BookOpen size={18} />, href: "/dashboard/student/enrolled-courses" },
    { name: "My Certificates", icon: <Award size={18} />, href: "/dashboard/student/certificates" },
    { name: "Wishlist", icon: <Heart size={18} />, href: "/dashboard/student/wishlist" },
    { name: "Reviews", icon: <Star size={18} />, href: "/dashboard/student/reviews" },
    { name: "My Quiz Attempts", icon: <ClipboardList size={18} />, href: "/dashboard/student/quizzes" },
    { name: "Order History", icon: <ShoppingCart size={18} />, href: "/dashboard/student/order-history" },
    { name: "Messages", icon: <MessageSquare size={18} />, href: "/dashboard/student/messages" },
  ];

  // Sidebar reusable content
  const SidebarContent = () => (
    <>
      <div className="flex items-center justify-between lg:block mb-4 px-4 lg:px-0">
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-600 mt-2 px-2">
        Main Menu
      </h3>
        {/* Mobile Close Button */}
        <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-slate-500">
          <X size={20} />
        </button>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveTab(item.name);
                setIsSidebarOpen(false); // Mobile par click hote hi close ho jaye
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
          href="/dashboard/student/settings"
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
    <div className="min-h-screen bg-[#F8FAFC] font-sans relative overflow-x-hidden">
      
      {/* --- MOBILE SIDEBAR DRAWER --- */}
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

      {/* --- 1. DYNAMIC BREADCRUMB HEADER --- */}
      <div className="bg-white border-b border-slate-100 py-6 md:py-10 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Burger Menu Button */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>

          <div className="text-center flex-1">
            <h1 className="text-2xl md:text-3xl font-black text-[#1D1B26]">{activeTab}</h1>
            <p className="hidden md:block text-sm text-slate-400 mt-2 font-medium uppercase tracking-widest">
              Home <span className="text-[#FF5364] mx-2">/</span> {activeTab}
            </p>
          </div>
          
          {/* Placeholder for symmetry on mobile */}
          <div className="lg:hidden w-10" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10 grid lg:grid-cols-12 gap-8">
        {/* --- 2. PERSISTENT SIDEBAR (Desktop) --- */}
       <aside className="hidden lg:block lg:col-span-3">
          <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 sticky top-10">
            <SidebarContent />
          </div>
        </aside>

        {/* --- 3. MAIN CONTENT AREA --- */}
        <main className="lg:col-span-9 space-y-8">
          {/* USER BANNER */}
          <div
            className="relative p-6 md:p-10 overflow-hidden flex flex-col lg:flex-row items-center justify-between text-white shadow-2xl bg-cover bg-center rounded-[32px] min-h-55"
            style={{ backgroundImage: "url('/dashboard-ban.png')" }}
          >
            <div className="absolute inset-0 bg-black/30 z-0" />

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 relative z-10 text-center md:text-left">
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white/30 overflow-hidden bg-white mx-auto md:mx-0">
                  <img
                    src="/fs-1.avif"
                    className="w-full h-full object-cover"
                    alt="User"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-green-500 border-2 border-white w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle size={12} className="text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black flex items-center justify-center md:justify-start gap-3">
                  Ronald Richard
                  <span className="text-sm bg-white/20 p-1.5 rounded-lg cursor-pointer hover:bg-white/40 transition-all">
                    <Pencil size={14} />
                  </span>
                </h2>
                <p className="text-white/80 font-bold tracking-widest uppercase text-[10px] md:text-xs mt-1">
                  Student
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 lg:mt-0 relative z-10 w-full sm:w-auto">
              <button className="bg-white text-[#1D1B26] px-6 py-3 md:py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-tight shadow-xl hover:bg-slate-50 transition-colors w-full sm:w-auto">
                Become Instructor
              </button>
              <button className="bg-[#FF5364] text-white px-6 py-3 md:py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-tight shadow-xl hover:bg-[#e04857] transition-colors w-full sm:w-auto">
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