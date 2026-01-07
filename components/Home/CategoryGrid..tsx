"use client"
import React from 'react';
import { motion } from 'framer-motion';

const CategoryGrid = () => {
  const categories = [
    {
      title: "Graphic & Web-design",
      courses: "5 Courses",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-2 md:row-span-2 h-[450px]" 
    },
    {
      title: "Weight Training",
      courses: "7 Courses",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1 h-[215px]"
    },
    {
      title: "Environmental Sciences",
      courses: "4 Courses",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1 h-[215px]"
    },
    {
      title: "Photography",
      courses: "4 Courses",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 h-[215px]"
    },
    {
      title: "Music",
      courses: "3 Courses",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 h-[215px]"
    },
    {
      title: "Software Development",
      courses: "3 Courses",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      className: "md:col-span-1 h-[215px]"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        {/* Exact Grid matching the screenshot Capture0.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Top Section: Large card and two small stacked ones */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 1. Graphic & Web-design (Large) */}
            <CategoryCard data={categories[0]} />

            {/* Right Side Column (Weight Training & Environmental) */}
            <div className="flex flex-col gap-5">
               <CategoryCard data={categories[1]} />
               <CategoryCard data={categories[2]} />
            </div>
          </div>

          {/* Bottom Row: Three equal cards */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5">
             <CategoryCard data={categories[3]} />
             <CategoryCard data={categories[4]} />
             <CategoryCard data={categories[5]} />
          </div>

        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ data }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`relative overflow-hidden group cursor-pointer bg-gray-900 ${data.className}`}
  >
    {/* Image Container */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
      style={{ backgroundImage: `url(${data.image})` }}
    />
    
    {/* Dark Overlay (Masterstudy Style) */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

    {/* Content positioned exactly like the image */}
    <div className="relative h-full flex flex-col justify-end p-6 md:p-10 text-white z-10">
      <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-1">
        {data.title}
      </h3>
      <p className="text-sm font-semibold opacity-90 uppercase tracking-wider">
        {data.courses}
      </p>
    </div>
  </motion.div>
);

export default CategoryGrid;