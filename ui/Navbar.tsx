"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Moon,
  DollarSign,
  Menu,
  X,
  ChevronDown,
  Monitor,
  Smartphone,
  Database,
  Palette,
  Briefcase,
  Star,
  GraduationCap,
  ArrowRight,
  UserCheck,
  Zap,
  Users,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses", megaType: "courses" },
    { name: "Instructors", href: "/instructors", megaType: "instructors" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blogs", href: "/blog" },
  ];

  const closeAllMenus = () => {
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    // "relative" here is the anchor for the absolute mega menu
    <header className="w-full bg-[#392C7D] text-white relative z-[100]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 group z-[110]"
          onClick={closeAllMenus}
        >
          <div className="bg-white p-2 rounded-xl transition-transform group-hover:rotate-6 shadow-sm">
            <GraduationCap className="text-[#FF5B5C]" size={24} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold uppercase tracking-tight">
              Ultimate
            </span>
            <span className="text-xs font-light text-[#FF5B5C] uppercase tracking-[0.2em]">
              Learning
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8 h-16">
          {navLinks.map((link) => (
            <div
              key={link.name}
              // static ensures the absolute child looks at the <header> for width
              className="static flex items-center h-full"
              onMouseEnter={() => link.megaType && setActiveMenu(link.megaType)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={link.href}
                onClick={closeAllMenus}
                className={`text-[17px] font-semibold transition-all flex items-center gap-1.5 ${
                  activeMenu === link.megaType
                    ? "text-[#FF5B5C]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
                {link.megaType && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      activeMenu === link.megaType ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* FULL WIDTH DESKTOP MEGA MENU */}
              {link.megaType && (
                <div
                  className={`absolute top-full left-0 w-full transition-all duration-300 ease-out z-50 ${
                    activeMenu === link.megaType
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {/* The actual background container that takes full screen width */}
                  <div className="w-full bg-[#2D2264] border-t border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                    <div className="max-w-[1440px] mx-auto px-6 py-10">
                      <div className="grid grid-cols-12 gap-8">
                        {/* 1. SIDEBAR */}
                        <div className="col-span-3 border-r border-white/5 pr-6">
                          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6 opacity-40">
                            {link.megaType === "courses"
                              ? "Top-Rated Categories"
                              : "Expert Departments"}
                          </h3>
                          <div className="space-y-1">
                            {link.megaType === "courses" ? (
                              <>
                                <MegaSidebarItem
                                  onClick={closeAllMenus}
                                  href="/courses"
                                  icon={<Monitor size={18} />}
                                  label="Web Development"
                                />
                                <MegaSidebarItem
                                  onClick={closeAllMenus}
                                  href="/courses"
                                  icon={<Smartphone size={18} />}
                                  label="Mobile Science"
                                />
                                <MegaSidebarItem
                                  onClick={closeAllMenus}
                                  href="/courses"
                                  icon={<Database size={18} />}
                                  label="Data Science"
                                />
                                <MegaSidebarItem
                                  onClick={closeAllMenus}
                                  href="/courses"
                                  icon={<Palette size={18} />}
                                  label="Digital Design"
                                />
                                <MegaSidebarItem
                                  onClick={closeAllMenus}
                                  href="/courses"
                                  icon={<Briefcase size={18} />}
                                  label="Business"
                                />
                              </>
                            ) : (
                              <>
                                <MegaSidebarItem
                                  onClick={closeAllMenus}
                                  href="/instructors"
                                  icon={<Users size={18} />}
                                  label="Senior Mentors"
                                />
                                <MegaSidebarItem
                                  onClick={closeAllMenus}
                                  href="/instructors"
                                  icon={<Zap size={18} />}
                                  label="Industry Leaders"
                                />
                                <MegaSidebarItem
                                  onClick={closeAllMenus}
                                  href="/instructors"
                                  icon={<UserCheck size={18} />}
                                  label="Vetted Tutors"
                                />
                                <MegaSidebarItem
                                  onClick={closeAllMenus}
                                  href="/instructors"
                                  icon={<Briefcase size={18} />}
                                  label="Corporate Coaches"
                                />
                                <MegaSidebarItem
                                  onClick={closeAllMenus}
                                  href="/instructors"
                                  icon={<Monitor size={18} />}
                                  label="Tech Architects"
                                />
                              </>
                            )}
                          </div>
                          <Link href={link.href} onClick={closeAllMenus}>
                            <button className="w-full mt-8 bg-[#FF5B5C] py-4 rounded-2xl font-bold text-sm hover:bg-[#ff4646] transition-all flex items-center justify-center gap-2">
                              {link.megaType === "courses"
                                ? "View All Courses"
                                : "Meet All Instructors"}{" "}
                              <ArrowRight size={16} />
                            </button>
                          </Link>
                        </div>

                        {/* 2. TOPICS */}
                        <div className="col-span-2">
                          <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6 opacity-40">
                            {link.megaType === "courses"
                              ? "Browse by Topic"
                              : "Quick Links"}
                          </h3>
                          <div className="flex flex-col gap-5">
                            {(link.megaType === "courses"
                              ? [
                                  "Web Design",
                                  "Cloud Computing",
                                  "AI Content",
                                  "Cyber Security",
                                  "UI/UX Design",
                                  "Machine Learning",
                                ]
                              : [
                                  "Become a Teacher",
                                  "Instructor FAQ",
                                  "Teaching Rules",
                                  "Portfolio Help",
                                  "Live Sessions",
                                  "Success Stories",
                                ]
                            ).map((item) => (
                              <Link
                                key={item}
                                href={link.href}
                                onClick={closeAllMenus}
                                className="text-sm font-medium text-white/60 hover:text-[#FF5B5C] transition-colors"
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* 3. TRENDING GRID */}
                        <div className="col-span-4 border-r border-white/5 pr-4">
                          <h3 className="text-lg font-bold mb-6">
                            {link.megaType === "courses"
                              ? "New & Trending"
                              : "Top Instructors"}
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {link.megaType === "courses" ? (
                              <>
                                <CourseThumb
                                  onClick={closeAllMenus}
                                  href="/courses"
                                  title="Prompt Engineering"
                                  instructor="Caren Drew"
                                  img="/cg-1.webp"
                                />
                                <CourseThumb
                                  onClick={closeAllMenus}
                                  href="/courses"
                                  title="Blockchain 101"
                                  instructor="Dan Kenyon"
                                  img="/cg-2.avif"
                                />
                                <CourseThumb
                                  onClick={closeAllMenus}
                                  href="/courses"
                                  title="AWS Masterclass"
                                  instructor="Alex Rivera"
                                  img="/cg-3.webp"
                                />
                                <CourseThumb
                                  onClick={closeAllMenus}
                                  href="/courses"
                                  title="Next.js 15 Pro"
                                  instructor="Sarah J."
                                  img="/cg-6.avif"
                                />
                              </>
                            ) : (
                              <>
                                <CourseThumb
                                  onClick={closeAllMenus}
                                  href="/instructors"
                                  title="Dr. Alex Rivera"
                                  instructor="AI Scientist"
                                  img="/instructor1.webp"
                                />
                                <CourseThumb
                                  onClick={closeAllMenus}
                                  href="/instructors"
                                  title="Sarah Jenkins"
                                  instructor="UX Lead"
                                  img="/instructor2.webp"
                                />
                                <CourseThumb
                                  onClick={closeAllMenus}
                                  href="/instructors"
                                  title="Marcus Thorne"
                                  instructor="DevOps Expert"
                                  img="/instructor3.webp"
                                />
                                <CourseThumb
                                  onClick={closeAllMenus}
                                  href="/instructors"
                                  title="Elena Ruiz"
                                  instructor="Business Head"
                                  img="/instructor4.webp"
                                />
                              </>
                            )}
                          </div>
                        </div>

                        {/* 4. FEATURED CARD */}
                        <div className="col-span-3">
                          <h3 className="text-lg font-bold mb-6">
                            {link.megaType === "courses"
                              ? "Featured Skill"
                              : "Teacher of the Month"}
                          </h3>
                          <Link
                            href={link.href}
                            onClick={closeAllMenus}
                            className="block bg-white/5 border border-white/10 p-5 rounded-[28px] group/card cursor-pointer transition-all hover:border-[#FF5B5C]/50"
                          >
                            <div className="aspect-video bg-[#392C7D] rounded-2xl mb-4 overflow-hidden">
                              <img
                                src={
                                  link.megaType === "courses"
                                    ? "/instructor6.webp"
                                    : "/instructor5.webp"
                                }
                                className="w-full h-full object-cover group-hover/card:scale-110 transition-all duration-500"
                                alt="featured"
                              />
                            </div>
                            <p className="text-sm font-bold mb-2 group-hover/card:text-[#FF5B5C] transition-colors">
                              {link.megaType === "courses"
                                ? "Mastering UI/UX Design"
                                : "Prof. Isabella Chen"}
                            </p>
                            <div className="flex items-center gap-1 text-[#FFB800]">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={10} fill="currentColor" />
                              ))}
                              <span className="text-[10px] text-white ml-2 opacity-60">
                                {" "}
                                4.9 (2.4k Reviews){" "}
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 z-[110]">
          <div className="hidden xl:flex gap-1.5 mr-2">
            <NavCircleBtn img="https://flagcdn.com/w80/iq.png" />
            <NavCircleBtn icon={<DollarSign size={14} />} />
            <NavCircleBtn icon={<Moon size={16} fill="currentColor" />} />
            <div className="relative">
              <NavCircleBtn icon={<ShoppingCart size={16} />} />
              <span className="absolute -top-1 -right-1 bg-[#FF5B5C] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#392C7D]">
                0
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Link href="/login" onClick={closeAllMenus}>
              <button className="text-white bg-[#392C7D] border border-white/20 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white/10 transition-all active:scale-95">
                Sign In
              </button>
            </Link>
            <Link href="/register" onClick={closeAllMenus}>
              <button className="bg-[#FF5B5C] text-white px-7 py-2.5 rounded-full font-bold text-sm shadow-lg hover:shadow-[#FF5B5C]/20 hover:bg-[#ff4646] transition-all active:scale-95">
                Register
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-white hover:text-[#FF5B5C] transition-colors ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-[#2D2264]/98 backdrop-blur-xl z-[105] lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-10 overflow-y-auto">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-white/10 pb-4">
                <div
                  className="flex items-center justify-between py-2 cursor-pointer"
                  onClick={() =>
                    link.megaType
                      ? setMobileAccordion(
                          mobileAccordion === link.megaType
                            ? null
                            : link.megaType
                        )
                      : closeAllMenus()
                  }
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-bold text-white tracking-tight"
                    onClick={(e) => link.megaType && e.preventDefault()}
                  >
                    {link.name}
                  </Link>
                  {link.megaType && (
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        mobileAccordion === link.megaType
                          ? "rotate-180 text-[#FF5B5C]"
                          : ""
                      }`}
                    />
                  )}
                </div>
                {link.megaType && mobileAccordion === link.megaType && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {(link.megaType === "courses"
                      ? [
                          "Web Design",
                          "Cloud Computing",
                          "AI Content",
                          "Cyber Security",
                        ]
                      : [
                          "Meet Mentors",
                          "Teacher FAQ",
                          "Become a Tutor",
                          "Live Help",
                        ]
                    ).map((item) => (
                      <Link
                        key={item}
                        href={link.href}
                        onClick={closeAllMenus}
                        className="bg-white/5 p-4 rounded-2xl text-sm font-semibold text-white/70 active:bg-[#FF5B5C] active:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                    <Link
                      href={link.href}
                      onClick={closeAllMenus}
                      className="col-span-2"
                    >
                      <button className="w-full bg-[#FF5B5C] py-4 rounded-2xl font-bold text-center mt-2">
                        Explore All {link.name}
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-auto space-y-4 pt-10">
            <div className="grid grid-cols-4 gap-4 border-t border-white/10 pt-10">
              <NavCircleBtn img="https://flagcdn.com/w80/iq.png" />
              <NavCircleBtn icon={<DollarSign size={20} />} />
              <NavCircleBtn icon={<Moon size={20} fill="currentColor" />} />
              <NavCircleBtn icon={<ShoppingCart size={20} />} />
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/login" onClick={closeAllMenus}>
                <button className="w-full bg-transparent border border-white/20 py-4 rounded-2xl font-bold text-lg">
                  Sign In
                </button>
              </Link>
              <Link href="/register" onClick={closeAllMenus}>
                <button className="w-full bg-[#FF5B5C] py-5 rounded-2xl font-bold text-lg shadow-xl">
                  Join Ultimate Learning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// --- HELPERS (Keep these as they are or move to separate files) ---
const MegaSidebarItem = ({ icon, label, href, onClick }: any) => (
  <Link
    href={href}
    onClick={onClick}
    className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/5 transition-all cursor-pointer group"
  >
    <div className="p-2 bg-white/5 rounded-lg text-white/40 group-hover:text-[#FF5B5C] transition-all">
      {icon}
    </div>
    <span className="text-sm font-bold text-white group-hover:text-white">
      {label}
    </span>
  </Link>
);

const CourseThumb = ({ title, instructor, img, href, onClick }: any) => (
  <Link
    href={href}
    onClick={onClick}
    className="flex flex-col gap-2 p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-all cursor-pointer border border-white/5 group"
  >
    <div className="w-full h-24 overflow-hidden rounded-xl bg-[#392C7D]">
      <img
        src={img}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        alt={title}
      />
    </div>
    <p className="text-[11px] font-bold line-clamp-1 group-hover:text-[#FF5B5C] transition-colors">
      {title}
    </p>
    <p className="text-[9px] text-white opacity-40">{instructor}</p>
  </Link>
);

const NavCircleBtn = ({ icon, img }: any) => (
  <button className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white hover:text-[#392C7D] transition-all shadow-sm overflow-hidden border border-white/5">
    {img ? (
      <img
        src={img}
        className="w-full h-full object-cover p-1.5 rounded-full"
        alt="flag"
      />
    ) : (
      icon
    )}
  </button>
);

export default Navbar;
