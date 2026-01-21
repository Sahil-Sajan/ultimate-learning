"use client";

import React from "react";
import { m } from "framer-motion";
import { ArrowUpRight,  Clock } from "lucide-react";
import Image from "next/image";

/* ---------------- ULTIMATE LEARNING DATA ---------------- */
const blogPosts = [
  {
    id: 1,
    title: "The Future of Hybrid Learning in 2026",
    categories: ["Education", "Trends"],
    author: "Cody Fisher",
    date: "18 Jan 2026",
    image: "/cg-6.avif",
    excerpt:
      "Explore how the blend of physical classrooms and digital platforms is creating a more inclusive and flexible environment for global students.",
    avatar: "/cs-2.webp",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "5 Strategies to Boost Student Engagement",
    categories: ["Tips", "Inspiration"],
    author: "Guy Hawkins",
    date: "15 Jan 2026",
    image: "/cg-1.webp",
    excerpt:
      "Gamification and interactive storytelling are no longer optional. Learn how to keep your learners motivated throughout the semester.",
    avatar: "/cs-3.webp",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Mastering Course Design: A Practical Guide",
    categories: ["Tutorials", "News"],
    author: "Floyd Miles",
    date: "12 Jan 2026",
    image: "/cg-2.avif",
    excerpt:
      "A step-by-step breakdown of how to structure your LMS content for maximum retention and intuitive navigation.",
    avatar: "/cs-4.webp",
    readTime: "12 min read",
  },
  {
    id: 4,
    title: "The Impact of AI on Personalised Learning",
    categories: ["Technology", "Inspiration"],
    author: "Cody Fisher",
    date: "10 Jan 2026",
    image: "/blog2.avif",
    excerpt:
      "Artificial intelligence is allowing educators to tailor lessons to individual student needs at a scale never seen before.",
    avatar: "/teacher2.webp",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Accessibility: Designing for All Learners",
    categories: ["News", "Trends"],
    author: "Guy Hawkins",
    date: "05 Jan 2026",
    image: "/blog8.webp",
    excerpt:
      "Inclusivity is at the heart of Ultimate Learning. Discover how to make your digital resources accessible to everyone.",
    avatar: "/teacher3.webp",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Building Community in a Digital World",
    categories: ["Community", "Education"],
    author: "Floyd Miles",
    date: "02 Jan 2026",
    image: "/cg-2.avif",
    excerpt:
      "How to foster meaningful connections between students and instructors in a purely online or asynchronous setting.",
    avatar: "/teacher4.webp",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-24 font-sans text-[#2D3134] antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <header className="mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8676FF] block mb-2">
            Ultimate Learning Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1A1D1F]">
            Insights & <span className="text-[#FF5B5C]">Resources</span>
          </h1>
        </header>

        {/* --- FEATURED ARTICLE (LMS THEMED) --- */}
        <m.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group rounded-xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mb-20"
        >
          <div className="grid lg:grid-cols-2">
            {/* IMAGE */}
            <div className="relative h-80 lg:h-auto w-full overflow-hidden">
              <Image
                src="/graduate.jpg"
                alt="Ultimate Learning Transformation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8 lg:p-16 flex flex-col justify-center">
              <div className="flex gap-3 mb-6">
                <span className="rounded-md bg-[#EEECFF] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8676FF]">
                  Featured
                </span>
                <span className="rounded-md bg-[#FFF0EB] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E87D55]">
                  Student Success
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-medium leading-tight text-[#1A1D1F] mb-6">
                Ultimate Learning: Redefining Digital Education
              </h2>

              <p className="text-[15px] text-gray-500 mb-4 leading-relaxed">
                Our commitment to student growth goes beyond traditional teaching. We believe in creating adaptive, intelligent environments that respond to every learner&apos;s unique pace.
              </p>

              <p className="text-[15px] text-gray-500 mb-8 leading-relaxed">
                As educational standards evolve, Ultimate Learning provides the tools and community support needed to turn digital classrooms into vibrant hubs of innovation.
              </p>

              <button className="flex items-center gap-2 font-bold text-[#1A1D1F] group">
                Read the Vision
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#8676FF]"
                />
              </button>
            </div>
          </div>
        </m.article>

        {/* --- BLOG GRID --- */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <m.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col cursor-pointer"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-gray-50 mb-6 border border-gray-50">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E87D55]">
                      {post.categories[0]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-gray-400">
                    <Clock size={12} /> {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-medium text-[#1A1D1F] leading-snug mb-3 group-hover:text-[#8676FF] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[14px] text-gray-500 leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* AUTHOR FOOTER */}
                <div className="mt-auto flex items-center gap-3 pt-6 border-t border-gray-50">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-100 ring-2 ring-white shadow-sm">
                    <Image
                      src={post.avatar}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#1A1D1F]">
                      {post.author}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            </m.article>
          ))}
        </div>

        {/* --- SIMPLE NEWSLETTER (LMS THEME) --- */}
        {/* <section className="mt-32 py-16 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#F9FAFB] p-10 md:p-16 rounded-2xl">
            <div className="max-w-md">
              <h2 className="text-2xl font-bold text-[#1A1D1F] mb-4">Stay Ahead in Education</h2>
              <p className="text-gray-500 text-sm">Join our newsletter to receive weekly insights on pedagogy, LMS tips, and student success stories.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="px-6 py-3 rounded-lg bg-white border border-gray-200 outline-none focus:ring-2 focus:ring-[#8676FF]/20 flex-grow"
              />
              <button className="bg-[#1A1D1F] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#8676FF] transition-all">
                Join
              </button>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}