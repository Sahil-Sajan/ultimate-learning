"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { BookOpen, Infinity, GraduationCap, ArrowRight } from "lucide-react";
import Image from "next/image";

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1], // "easeOutQuad" feel
    },
  },
};

// --- TYPES ---
interface BenefitCard {
  title: string;
  desc: string;
  icon: React.ReactNode;
  colorClass: string; // Used for text/border colors on hover
  bgClass: string; // Used for icon background
}

const Benefits = () => {
  const cards: BenefitCard[] = [
    {
      title: "Flexible Learning",
      desc: "Quality education accessible to everyone. Learn at your own pace with modules designed for modern lives.",
      icon: <BookOpen size={24} />,
      colorClass: "text-purple-600 group-hover:text-purple-600",
      bgClass: "bg-purple-50 group-hover:bg-purple-100",
    },
    {
      title: "Lifetime Access",
      desc: "Enroll once, learn forever. You aren't just signing up for a course; you're building a library of knowledge.",
      icon: <Infinity size={24} />,
      colorClass: "text-pink-600 group-hover:text-pink-600",
      bgClass: "bg-pink-50 group-hover:bg-pink-100",
    },
    {
      title: "Expert Instruction",
      desc: "Learn from seasoned professionals. Gain insights and practical advice from experts active in the field.",
      icon: <GraduationCap size={24} />,
      colorClass: "text-cyan-600 group-hover:text-cyan-600",
      bgClass: "bg-cyan-50 group-hover:bg-cyan-100",
    },
  ];

  const logos = [
    { name: "Google", url: "/googlelogo.svg" },
    { name: "Microsoft", url: "/microsoftlogo.svg" },
    { name: "Amazon", url: "/amazonlogo.svg" },
    { name: "Meta", url: "/metalogo.svg" },
    { name: "Apple", url: "/applelogo.svg" },
    { name: "Netflix", url: "/netflixlogo.svg" },
    { name: "IBM", url: "/ibmlogo.svg" },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-24 px-6 max-w-7xl mx-auto font-sans bg-white relative"
    >
      {/* SECTION HEADER */}
      <motion.div variants={fadeUp} className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-bold text-gray-600 uppercase tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          Key Advantages
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Master the skills that <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-800 to-gray-500">
            drive your future.
          </span>
        </h1>
        
        <p className="text-slate-500 max-w-2xl mx-auto text-md md:text-xl leading-relaxed">
          We strip away the complexity. Get the right course, guided by expert mentors, 
          delivered on a platform built for growth.
        </p>
      </motion.div>

      {/* CARDS GRID */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/60 hover:border-gray-200 transition-all duration-300 ease-out"
          >
            {/* Hover Accent Line */}
            <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${card.bgClass.replace('bg-', 'bg-linear-to-r from-transparent via-').replace('50', '400').replace('100', '400') + ' to-transparent'}`} />

            {/* Icon Box */}
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-colors duration-300 ${card.bgClass} ${card.colorClass}`}
            >
              {card.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-black transition-colors">
              {card.title}
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">
              {card.desc}
            </p>

            {/* Learn More Link (Visual flair) */}
            <div className="flex items-center text-sm font-semibold text-gray-400 group-hover:text-slate-900 transition-colors cursor-pointer">
              <span>Learn more</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* LOGO STRIP */}
      <motion.div variants={fadeUp} className="border-t border-gray-100 pt-8">
        <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-10">
          Trusted by industry leaders worldwide
        </p>

        <div className="relative w-full overflow-hidden">
          {/* Gradients to fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Container */}
          <div className="flex overflow-hidden group">
            <div className="animate-scroll flex gap-16 min-w-full items-center">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="relative h-8 w-32 flex items-center justify-center shrink-0  hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                >
                  <Image
                  height={200}
                  width={200}
                    src={logo.url}
                    alt={logo.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CSS For Scroll Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.section>
  );
};

export default Benefits;