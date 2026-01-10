"use client";

import React from "react";
import Image from "next/image";

interface Category {
  title: string;
  imageSrc: string;
}

const categories: Category[] = [
  { title: "Frontend Developer", imageSrc: "/bootstrap.webp" },
  { title: "Nextjs Developer", imageSrc: "/next.svg" },
  { title: "Figma Developer", imageSrc: "/figma.webp" },
  { title: "Framer Developer", imageSrc: "/framer.webp" },
  { title: "Vue js Developer", imageSrc: "/vuejs.webp" },
  { title: "Shopify Developer", imageSrc: "/shopify.webp" },
];

const CourseCategories = () => {
  return (
    <section className="w-full py-20 px-6 bg-white overflow-hidden relative">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-100/40 blur-[100px] -z-10" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-100/40 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-14">
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
        </div>

        {/* Categories Container */}
        <div className="relative px-4">
          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group/card"
              >
                {/* Icon Container */}
                <div className="relative w-16 h-16 flex items-center justify-center transform group-hover/card:scale-110 transition-transform duration-300">
                  <Image
                    src={cat.imageSrc}
                    alt={cat.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[#1F1F1F] font-semibold text-[15px] text-center leading-tight">
                  {cat.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-16">
          <button className="bg-[#392C7D] text-white px-10 py-4 rounded-full font-semibold text-[15px] hover:bg-[#2D2264] transition-all shadow-lg hover:shadow-purple-200 active:scale-95">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
