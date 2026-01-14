"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Monitor,
  Database,
  Code,
  TrendingUp,
  BookOpen,
  Mail,
  Clock,
} from "lucide-react";

/* ---------------- DATA (Preserved) ---------------- */
const blogPosts = [
  {
    id: 1,
    title: "Mastering React Hooks in 2026",
    category: "Development",
    author: "Admin User",
    date: "Jan 15, 2026",
    image: "/cg-6.avif",
    excerpt:
      "Learn how to use hooks effectively to build cleaner and more performant applications.",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Future of UI Design",
    category: "Design",
    author: "Jane Smith",
    date: "Jan 12, 2026",
    image: "/couse-1.webp",
    excerpt:
      "Exploring upcoming trends in minimal and accessible user interface systems.",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Effective Time Management",
    category: "Study Tips",
    author: "Dr. Robert",
    date: "Jan 10, 2026",
    image: "/courses-2.avif",
    excerpt:
      "Maximize your learning efficiency with these proven time management techniques.",
    readTime: "12 min read",
  },
  {
    id: 4,
    title: "The Future of AI in Education",
    category: "Technology",
    author: "Admin User",
    date: "Jan 08, 2026",
    image: "/cg-1.webp",
    excerpt:
      "How artificial intelligence is personalizing the learning experience globally.",
    readTime: "10 min read",
  },
];

const sidebarCategories = [
  { name: "Development", icon: <Code size={18} />, count: 12 },
  { name: "Data Science", icon: <Database size={18} />, count: 8 },
  { name: "UI/UX Design", icon: <Monitor size={18} />, count: 15 },
  { name: "Entity Growth", icon: <TrendingUp size={18} />, count: 5 },
  { name: "Study Tips", icon: <BookOpen size={18} />, count: 22 },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#F8F9FB] font-sans overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-r from-[#FFF0F0] to-[#E5F3FF] pt-16 pb-20 px-6 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-12 h-12 bg-[#FF5364]/10 rounded-xl border border-[#FF5364]/20 z-0"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[40%] w-24 h-24 bg-[#4E3796]/5 rounded-full blur-2xl z-0"
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-[#FF5364] font-bold uppercase tracking-widest text-[10px] bg-white/50 px-3 py-1 rounded-full border border-pink-100">
              Explore Blogs
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#1D1B26] leading-tight">
              Explore Our Blog <br />
              <span className="text-[#4E3796] text-2xl md:text-3xl font-medium">
                Insights & Trends
              </span>
            </h1>
            <p className="text-slate-500 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Stay updated with the latest trends in technology, design, and
              education from our expert instructors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#FF5364] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-pink-200"
              >
                Read More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#1D1B26] text-white px-8 py-3.5 rounded-full font-bold"
              >
                See Event
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative z-10 w-full max-w-lg group">
              <img
                src="/blog.jpeg"
                alt="Blog Illustration"
                className="w-full h-auto transition-transform duration-500 group-hover:rotate-1"
              />
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF5364]/20 to-[#4E3796]/20 blur-2xl -z-10 rounded-full opacity-50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRANSITION BANNER */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 px-6 overflow-hidden flex items-center min-h-[220px]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/dashboard-ban.png"
            alt="Banner Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#4E3796]/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D1B26]/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 text-center md:text-left">
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight drop-shadow-md">
            Latest Articles
          </h2>
          <p className="text-white/80 text-[11px] mt-2 uppercase font-black tracking-[0.4em]">
            Real Insights & Professional Growth
          </p>
        </div>
      </motion.section>

      {/* 3. CONTENT GRID */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* SEARCH BAR: Visible at the top on Mobile, hidden on Desktop (handled inside Sidebar) */}
          <div className="lg:hidden mb-10 bg-white p-6 rounded-[32px] shadow-sm border border-slate-100">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search stories..."
                className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:border-[#FF5364]/20 focus:bg-white transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#FF5364] transition-colors"
                size={18}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* BLOG LIST */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:col-span-8 grid md:grid-cols-2 gap-8 order-1"
            >
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-100 group transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100/50"
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/90 backdrop-blur-md text-[#1D1B26] text-[10px] font-black px-4 py-1.5 rounded-full uppercase shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 right-4 z-20 bg-[#1D1B26]/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-lg flex items-center gap-2">
                      <Clock size={12} className="text-[#FF5364]" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-4 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                      <div className="flex items-center gap-1.5">
                        <User size={14} className="text-[#FF5364]" /> {post.author}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#4E3796]" /> {post.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-[#1D1B26] leading-tight group-hover:text-[#4E3796] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-medium italic opacity-80">
                      "{post.excerpt}"
                    </p>
                    <button className="flex items-center gap-2 text-[#FF5364] font-black text-xs uppercase tracking-[0.2em] group/btn pt-2">
                      Read Story
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-2 transition-transform"
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* SIDEBAR */}
            <motion.div className="lg:col-span-4 space-y-8 order-2">
              {/* Desktop Only Search */}
              <div className="hidden lg:block bg-white p-6 rounded-[32px] shadow-sm border border-slate-100">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search stories..."
                    className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:border-[#FF5364]/20 focus:bg-white transition-all outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#FF5364] transition-colors"
                    size={18}
                  />
                </div>
              </div>

              {/* Desktop Only Popular Topics */}
              <div className="hidden lg:block bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
                <h4 className="text-lg font-black text-[#1D1B26] mb-6">
                  Popular Topics
                </h4>
                <div className="space-y-3">
                  {sidebarCategories.map((cat, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ x: 5 }}
                      className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 group transition-all"
                    >
                      <div className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                        <span className="text-[#4E3796] bg-slate-100 p-2 rounded-lg group-hover:bg-[#4E3796] group-hover:text-white transition-all">
                          {cat.icon}
                        </span>
                        {cat.name}
                      </div>
                      <span className="text-[10px] font-black text-[#FF5364] bg-pink-50 w-8 h-8 flex items-center justify-center rounded-lg">
                        {cat.count}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Newsletter - Visible at the bottom on Mobile */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#1D1B26] to-[#4E3796] p-10 rounded-[48px] text-white relative overflow-hidden shadow-2xl"
              >
                <div className="relative z-10">
                  <Mail className="text-[#FF5364] mb-4" size={32} />
                  <h4 className="text-2xl font-black mb-2 leading-tight">
                    Join Our <br /> Newsletter
                  </h4>
                  <p className="text-white/50 text-[11px] mb-8 font-bold uppercase tracking-widest">
                    Weekly learning paths inboxed.
                  </p>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="yourname@email.com"
                      className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-4 text-sm focus:outline-none focus:border-[#FF5364] transition-all"
                    />
                    <button className="w-full bg-[#FF5364] py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#ff3d50] transition-all">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}