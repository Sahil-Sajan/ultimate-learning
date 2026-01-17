"use client";
import React, { useState, useEffect } from "react";
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
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const currentItem = menuItems.find(item => item.href === pathname);
    if (currentItem) setActiveTab(currentItem.name);
  }, [pathname]);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/dashboard/student" },
    { name: "My Profile", icon: <User size={20} />, href: "/dashboard/student/profile" },
    { name: "Enrolled Courses", icon: <BookOpen size={20} />, href: "/dashboard/student/enrolled-courses" },
    { name: "My Certificates", icon: <Award size={20} />, href: "/dashboard/student/certificates" },
    { name: "Wishlist", icon: <Heart size={20} />, href: "/dashboard/student/wishlist" },
    { name: "Reviews", icon: <Star size={20} />, href: "/dashboard/student/reviews" },
    { name: "My Quiz Attempts", icon: <ClipboardList size={20} />, href: "/dashboard/student/quizzes" },
    { name: "Order History", icon: <ShoppingCart size={20} />, href: "/dashboard/student/order-history" },
    { name: "Messages", icon: <MessageSquare size={20} />, href: "/dashboard/student/messages" },
  ];

  const SidebarContent = () => (
    <div className="h-full flex flex-col p-4">
      <div className="flex items-center justify-between mb-8 px-2">
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
          Main Menu
        </h3>
        <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-full">
          <X size={20} />
        </button>
      </div>
      
      {/* Sidebar scrollbar hatai gayi hai 'no-scrollbar' class se */}
      <nav className="flex-1 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-[#FF5364] text-white shadow-lg shadow-rose-200"
                  : "text-slate-500 hover:bg-slate-50 hover:text-[#FF5364]"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 pt-6 border-t border-slate-100">
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 px-4">
          Support
        </h3>
        <Link
          href="/dashboard/student/settings"
          className="flex items-center gap-3 px-5 py-3.5 font-bold text-sm text-slate-500 hover:text-[#FF5364] transition-all"
        >
          <Settings size={20} /> Settings
        </Link>
        <button className="w-full flex items-center gap-3 px-5 py-3.5 text-slate-500 font-bold text-sm hover:text-red-500 transition-all text-left">
          <LogOut size={20} /> Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col lg:flex-row">
      
      {/* Overlay for mobile sidebar */}
      <div 
        className={`fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Mobile/Tablet Sidebar Drawer */}
      <aside className={`fixed top-0 left-0 bottom-0 z-[101] w-[300px] bg-white transition-transform duration-300 ease-out lg:hidden ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <SidebarContent />
      </aside>

      {/* Laptop Sidebar (lg screens) - Static Sidebar wapis phele jaisa layout */}
      <aside className="hidden lg:block w-[280px] xl:w-[300px] h-screen sticky top-0 border-r border-slate-100 bg-white shrink-0">
        <SidebarContent />
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between bg-white px-6 py-4 sticky top-0 z-[50] border-b border-slate-100">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 -ml-2 text-slate-600">
            <Menu size={24} />
          </button>
          <h1 className="text-lg font-black text-slate-800">{activeTab}</h1>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
             <img src="/fs-1.avif" className="w-full h-full object-cover" alt="User" />
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 lg:p-10 pb-24 lg:pb-10">
          
          {/* USER BANNER SECTION - Responsive Gradient & BG wapis set kiya hai */}
          <div
            className="hidden md:flex relative p-6 md:p-12 overflow-hidden flex-col md:flex-row items-center justify-between text-white shadow-xl bg-gradient-to-r from-[#111827] via-[#1E293B] to-[#0F172A] rounded-[32px] mb-8 min-h-[160px]"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white/10 overflow-hidden bg-white shadow-2xl">
                  <img src="/fs-1.avif" className="w-full h-full object-cover" alt="User" />
                </div>
                <div className="absolute bottom-1 right-1 bg-green-500 border-[3px] border-[#1D1B26] w-6 h-6 rounded-full flex items-center justify-center">
                  <CheckCircle size={12} className="text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight flex items-center justify-center md:justify-start gap-3">
                  Ronald Richard
                  <span className="bg-white/10 p-1.5 rounded-lg cursor-pointer hover:bg-white/20 transition-all">
                    <Pencil size={14} />
                  </span>
                </h2>
                <p className="text-rose-400 font-bold tracking-[0.2em] uppercase text-[10px] mt-1.5">
                  Premium Student Account
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-0 relative z-10 w-full md:w-auto">
              <button className="bg-white text-slate-900 px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-lg active:scale-95">
                Become Instructor
              </button>
            </div>
          </div>

          {/* PAGE CONTENT */}
          <div className="min-h-[500px]">
            {children}
          </div>
        </main>
      </div>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-slate-100 px-6 py-3 flex items-center justify-between z-[90] rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <Link href="/dashboard/student" className={`p-3 rounded-2xl ${pathname === '/dashboard/student' ? 'bg-rose-50 text-[#FF5364]' : 'text-slate-400'}`}>
          <LayoutDashboard size={24} />
        </Link>
        <Link href="/dashboard/student/enrolled-courses" className={`p-3 rounded-2xl ${pathname.includes('courses') ? 'bg-rose-50 text-[#FF5364]' : 'text-slate-400'}`}>
          <BookOpen size={24} />
        </Link>
        <Link href="/dashboard/student/messages" className={`p-3 rounded-2xl ${pathname.includes('messages') ? 'bg-rose-50 text-[#FF5364]' : 'text-slate-400'}`}>
          <MessageSquare size={24} />
        </Link>
        <Link href="/dashboard/student/profile" className={`p-3 rounded-2xl ${pathname.includes('profile') ? 'bg-rose-50 text-[#FF5364]' : 'text-slate-400'}`}>
          <User size={24} />
        </Link>
      </div>
    </div>
  );
}