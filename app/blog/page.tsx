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
      {/* 1. HERO SECTION (REMAINED AS REQUESTED) */}
      <section className="relative bg-linear-to-r from-[#FFF0F0] to-[#E5F3FF] pt-16 pb-20 px-6 overflow-hidden">
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

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-[#FF5364] font-bold uppercase tracking-widest text-[10px] bg-white/50 px-3 py-1 rounded-full border border-pink-100">
              Explore Blogs
            </span>
            <h1 className="text-5xl font-black text-[#1D1B26] leading-tight">
              Explore Our Blog <br />
              <span className="text-[#4E3796] text-3xl font-medium">
                Insights & Trends
              </span>
            </h1>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed">
              Stay updated with the latest trends in technology, design, and
              education from our expert instructors.
            </p>
            <div className="flex gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF5364] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-pink-200"
              >
                Read More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1D1B26] text-white px-8 py-3.5 rounded-full font-bold"
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
            <div className="relative z-10 w-full max-w-137.5 group">
              <img
                src="/blog.jpeg"
                alt="Blog Illustration"
                className="w-full h-auto transition-transform duration-500 group-hover:rotate-1"
              />
              <div className="absolute -inset-4 bg-linear-to-tr from-[#FF5364]/20 to-[#4E3796]/20 blur-2xl -z-10 rounded-full opacity-50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRANSITION BANNER (Using dashboard-ban.png as Background) */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20 px-6 overflow-hidden flex items-center min-h-55"
      >
        {/* The Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/dashboard-ban.png"
            alt="Banner Background"
            className="w-full h-full object-cover"
          />
          {/* Overlays to ensure text readability while keeping the banner look */}
          <div className="absolute inset-0 bg-[#4E3796]/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-linear-to-r from-[#1D1B26]/60 to-transparent" />
        </div>

        {/* Added content to keep the banner visible */}
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <h2 className="text-white text-2xl font-bold">
            Featured Content Area
          </h2>
        </div>
      </motion.section>
    </div>
  );
}
