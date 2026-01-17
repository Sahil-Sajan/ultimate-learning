"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const HomeMainCard: React.FC = () => {
  // 1. Image upar se niche aane ke liye
  const imageVariants: Variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  // 2. Text Container niche se upar aane ke liye
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  // 3. Andar ke content ke liye stagger effect
  const staggerContent: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.8 }
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full bg-white py-20 px-4">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto relative flex flex-col items-center"
      >
        {/* 1. Centered Overlapping Image - Slide DOWN */}
        <motion.div 
          variants={imageVariants}
          className="relative z-20 w-full md:w-[95%] h-70 md:h-120 rounded-[30px] overflow-hidden shadow-2xl -mb-45"
        >
          <Image
            src="/fs-4.avif"
            alt="Group of students"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* 2. Main Purple Container - Slide UP */}
        <motion.div 
          variants={containerVariants}
          className="relative w-full pt-55 pb-12 px-8 md:px-12 bg-[#3b2d83] rounded-4xl overflow-hidden"
        >
          {/* Background Wave Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000">
              <path
                d="M0 500 Q 250 200 500 500 T 1000 500"
                stroke="white"
                fill="transparent"
                strokeWidth="80"
              />
            </svg>
          </div>

          <motion.div 
            variants={staggerContent}
            className="relative z-10 flex flex-col space-y-12"
          >
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <motion.div variants={fadeInUp} className="md:col-span-5">
                <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                  Trusted by the 15,000+ happy students and online users since 2000
                </h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="md:col-span-3 space-y-2">
                <div className="text-white text-3xl font-bold">9.8/10</div>
                <div className="text-white font-semibold text-base">Course approval score</div>
                <p className="text-gray-300 text-xs leading-relaxed max-w-50">
                  Achieving a complete course approval score is a significant.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="md:col-span-4 space-y-2">
                <div className="text-white text-3xl font-bold">13k</div>
                <div className="text-white font-semibold text-base">Satisfied students worldwide</div>
                <p className="text-gray-300 text-xs leading-relaxed max-w-62.5">
                  Satisfied students worldwide share a common thread of happiness.
                </p>
              </motion.div>
            </div>

            {/* Bottom Row */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8"
            >
              <div className="flex items-center gap-3">
                <button className="bg-[#ff4d6d] hover:bg-[#e63958] text-white px-6 py-2.5 rounded-full font-bold text-xs transition-all active:scale-95">
                  Enroll as Student
                </button>
                <button className="bg-[#0f172a] hover:bg-black text-white px-6 py-2.5 rounded-full font-bold text-xs transition-all active:scale-95">
                  Apply as Tutor
                </button>
              </div>

              <div className="bg-white rounded-xl p-1.5 pr-6 flex items-center gap-3 shadow-lg max-w-md">
                <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/homecard2.png"
                    alt="Reviewer"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#3b2d83] text-[13px] font-medium italic">
                  &quot;All courses are incredibly help people to achieve their goals&quot;
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeMainCard;