"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Variants type import kiya

interface Category {
  title: string;
  imageSrc: string;
  scale?: number;
}

const categories: Category[] = [
  { title: "Frontend Developer", imageSrc: "/bootstrap.webp" },
  { title: "Nextjs Developer", imageSrc: "/next.svg" },
  { title: "Figma Developer", imageSrc: "/figma.webp" },
  { title: "Framer Developer", imageSrc: "/framer.webp" },
  { title: "Vue js Developer", imageSrc: "/vuejs.webp" },
  { title: "Shopify Developer", imageSrc: "/shopify3.webp", scale: 5.5 },
];

// 1. Fixed Type Error for Container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 2. Fixed Type Error for Item (ease: "easeOut" fix)
const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1]// Type explicitly defined via Variants interface
    } 
  },
};

const CourseCategories = () => {
  return (
    <section className="w-full py-20 px-6 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-75 h-75 bg-green-100/40 blur-[100px] -z-10" />
      <div className="absolute top-0 right-0 w-75 h-75 bg-purple-100/40 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, }}
          className="mb-14"
        >
          <span className="text-[#FF5B5C] font-semibold text-[15px] underline decoration-2 underline-offset-8">
            Our Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mt-6 mb-4">
            Top Courses & Categories
          </h2>
          <p className="text-gray-500 text-[15px] max-w-2xl mx-auto leading-relaxed">
            The right course, guided by an expert mentor, can provide invaluable
            insights, practical skills
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 px-4"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 } 
              }}
              className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all cursor-pointer group/card"
            >
              <div className="relative w-16 h-16 flex items-center justify-center transform group-hover/card:scale-110 transition-transform duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src={cat.imageSrc}
                    alt={cat.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-[#1F1F1F] font-semibold text-[15px] text-center leading-tight">
                {cat.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <button className="bg-[#392C7D] text-white px-10 py-4 rounded-full font-semibold text-[15px] hover:bg-[#2D2264] transition-all shadow-lg active:scale-95">
            View All Categories
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseCategories;