"use client";
import React from "react";
import { motion } from "framer-motion";

/* ---------------- TYPES ---------------- */

interface Category {
  title: string;
  courses: string;
  image: string;
  className: string;
}

interface CategoryCardProps {
  data: Category;
}

/* ---------------- COMPONENT ---------------- */

const CategoryGrid: React.FC = () => {
  const categories: Category[] = [
    {
      title: "Graphic & Web-design",
      courses: "5 Courses",
      image: "/cg-1.webp",
      className: "md:col-span-2 md:row-span-2 h-[450px]",
    },
    {
      title: "Weight Training",
      courses: "7 Courses",
      image: "/cg-2.avif",
      className: "md:col-span-1 md:row-span-1 h-[215px]",
    },
    {
      title: "Environmental Sciences",
      courses: "4 Courses",
      image: "/cg-3.webp",
      className: "md:col-span-1 md:row-span-1 h-[215px]",
    },
    {
      title: "Photography",
      courses: "4 Courses",
      image: "/cg-4.webp",
      className: "md:col-span-1 h-[215px]",
    },
    {
      title: "Music",
      courses: "3 Courses",
      image: "/cg-5.webp",
      className: "md:col-span-1 h-[215px]",
    },
    {
      title: "Software Development",
      courses: "3 Courses",
      image: "/cg-6.avif",
      className: "md:col-span-1 h-[215px]",
    },
    {
      title: "Environmental Sciences",
      courses: "4 Courses",
      image: "/cg-3.webp",
      className: "md:col-span-1 md:row-span-1 h-[215px]",
    },
    {
      title: "Photography",
      courses: "4 Courses",
      image: "/cg-4.webp",
      className: "md:col-span-1 h-[215px]",
    },
    {
      title: "Music",
      courses: "3 Courses",
      image: "/cg-5.webp",
      className: "md:col-span-1 h-[215px]",
    },
    {
      title: "Software Development",
      courses: "3 Courses",
      image: "/cg-6.avif",
      className: "md:col-span-1 h-[215px]",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        {/* --- STYLISH HEADING SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#3858e9]"></span>
            <span className="text-[#6bff2b] uppercase tracking-[0.3em] text-xs font-black">
              Top Categories
            </span>
            <span className="h-px w-8 bg-[#3858e9]"></span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
            Trending{" "}
            <span className="text-transparent bg-clip-text bg-yellow-500">
              Courses
            </span>
          </h2>

          <p className="mt-4 text-slate-500 max-w-lg text-sm md:text-base font-medium leading-relaxed">
            Discover our most popular learning paths and start your journey
            toward mastering new professional skills today.
          </p>
        </motion.div>

        {/* --- GRID SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Top Section */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-5">
            <CategoryCard data={categories[0]} />

            <div className="flex flex-col gap-5">
              <CategoryCard data={categories[1]} />
              <CategoryCard data={categories[2]} />
            </div>
          </div>

          {/* Bottom Row */}
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

/* ---------------- CARD ---------------- */

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden group cursor-pointer bg-slate-900 rounded-sm shadow-lg ${data.className}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${data.image})` }}
      />

      {/* Overlay: Darker at bottom for text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-colors duration-300" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 text-white z-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-2xl md:text-3xl font-black leading-tight mb-2 uppercase tracking-tight">
            {data.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="h-1 w-6 bg-[#f8c12c] group-hover:w-10 transition-all duration-300"></span>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">
              {data.courses}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CategoryGrid;
