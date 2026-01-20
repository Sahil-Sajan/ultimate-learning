"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

/* ---------------- DATA ---------------- */
const blogPosts = [
  {
    id: 1,
    title: "MyCase: Transforming Legal Practice",
    categories: ["News", "Inspiration"],
    author: "Cody Fisher",
    date: "22 Dec 2023",
    image: "/blog8.webp",
    excerpt:
      "Embark on a journey through the innovation that is MyCase, redefining how legal",
    avatar: "/avtar1.webp",
  },
  {
    id: 2,
    title: "How MyCase: Addresses Legal Challenges",
    categories: ["News", "Inspiration"],
    author: "Guy Hawkins",
    date: "22 Dec 2023",
    image: "/cg-6.avif",
    excerpt:
      "MyCase stands out through its unique of features and user-centric design.",
    avatar: "/avtar2.webp",
  },
  {
    id: 3,
    title: "MyCase: Transforming Legal Practice",
    categories: ["News", "Inspiration"],
    author: "Floyd Miles",
    date: "22 Dec 2023",
    image: "/cg-2.avif",
    excerpt:
      "Embark on a journey through the innovation that is MyCase, redefining how legal",
    avatar: "/avatar3.webp",
  },
  {
    id: 4,
    title: "MyCase: Transforming Legal Practice",
    categories: ["News", "Inspiration"],
    author: "Cody Fisher",
    date: "22 Dec 2023",
    image: "/blog2.avif",
    excerpt:
      "Embark on a journey through the innovation that is MyCase, redefining how legal",
    avatar: "/avtar1.webp",
  },
  {
    id: 5,
    title: "How MyCase: Addresses Legal Challenges",
    categories: ["News", "Inspiration"],
    author: "Guy Hawkins",
    date: "22 Dec 2023",
    image: "/cg-1.webp",
    excerpt:
      "MyCase stands out through its unique of features and user-centric design.",
    avatar: "/avtar2.webp",
  },
  {
    id: 6,
    title: "MyCase: Transforming Legal Practice",
    categories: ["News", "Inspiration"],
    author: "Floyd Miles",
    date: "22 Dec 2023",
    image: "/cg-2.avif",
    excerpt:
      "Embark on a journey through the innovation that is MyCase, redefining how legal",
    avatar: "/couse1.webp",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-12 lg:px-24 font-sans text-[#2D3134]">
      <div className="max-w-7xl mx-auto">
        {/* ---------- FEATURED ARTICLE ---------- */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="group rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition mb-12"
        >
          <div className="grid lg:grid-cols-2">
            {/* IMAGE */}
            <div className="relative h-105 lg:h-auto w-full overflow-hidden">
              <Image
                src="/bloghero.avif"
                alt="MyCase Transforming Legal Practice"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex gap-2 mb-4">
                <span className="rounded-md bg-[#FFF0EB] px-3 py-1 text-[11px] font-medium text-[#E87D55]">
                  News
                </span>
                <span className="rounded-md bg-[#EEECFF] px-3 py-1 text-[11px] font-medium text-[#8676FF]">
                  Inspiration
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                MyCase, Transforming Legal Practice
              </h2>

              <p className="text-[13px] text-gray-500 mb-4">
                Our commitment to providing value extends beyond the features of
                our products or services.
              </p>

              <p className="text-[13px] text-gray-500 mb-6">
                Many legal professionals struggle to accurately track
                case-related time, resulting in lost revenue.
              </p>

              <button className="flex items-center gap-2 font-bold hover:underline">
                Read Article
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </div>
        </motion.article>

        {/* ---------- BLOG GRID ---------- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-57.5 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col h-full">
                <div className="flex gap-2 mb-4">
                  <span className="rounded-md bg-[#FFF0EB] px-3 py-1 text-[11px] font-medium text-[#E87D55]">
                    News
                  </span>
                  <span className="rounded-md bg-[#EEECFF] px-3 py-1 text-[11px] font-medium text-[#8676FF]">
                    Inspiration
                  </span>
                </div>

                <h3 className="text-[17px] font-semibold mb-3">{post.title}</h3>

                <p className="text-[13px] text-gray-500 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden">
                    <Image
                      src={post.avatar}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <span className="text-[13px] font-medium">
                      {post.author}
                    </span>
                    <span className="block text-[11px] text-gray-400">
                      Updated on : {post.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
