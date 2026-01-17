"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Award, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

const CommunitySection: React.FC = () => {
  const avatars = [
    "https://i.pravatar.cc/150?u=1",
    "https://i.pravatar.cc/150?u=2",
    "https://i.pravatar.cc/150?u=3",
    "https://i.pravatar.cc/150?u=4",
  ];

  // 1. Text Left se Right aane ke liye
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.25 } 
    }
  };

  // 2. Image Right se Left aane ke liye
  const imageContainerVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full bg-[#f8f9fb] py-12 md:py-20 px-4 md:px-12 lg:px-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Content (Coming from LEFT) */}
        <motion.div 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8 order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div variants={childVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Creating a community of learners.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              We&apos;re dedicated to transforming education by providing a
              diverse range of high-quality courses that cater to learners of
              all levels.
            </p>
          </motion.div>

          {/* Feature List */}
          <div className="space-y-6 md:space-y-8 text-left">
            {[
              { icon: <BookOpen className="w-6 h-6 text-purple-600" />, title: "Learn from anywhere", bg: "bg-purple-100", desc: "Learning from anywhere has become a transform aspect of modern education." },
              { icon: <Award className="w-6 h-6 text-pink-500" />, title: "Expert Mentors", bg: "bg-pink-100", desc: "Expert mentors are invaluable assets in any field, providing seasoned guidance." },
              { icon: <Zap className="w-6 h-6 text-cyan-500" />, title: "Learn in demand skills", bg: "bg-cyan-100", desc: "In today's rapidly evolving job market, learning skills is crucial." }
            ].map((feature, index) => (
              <motion.div key={index} variants={childVariants} className="flex gap-5">
                <div className={`shrink-0 w-12 h-12 ${feature.bg} rounded-full flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                  <p className="text-gray-500 mt-1">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={childVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <button className="w-full sm:w-auto bg-[#ff4d6d] hover:bg-[#e63958] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-pink-100 active:scale-95">
              Enroll as Student
            </button>
            <button className="w-full sm:w-auto bg-[#0f172a] hover:bg-black text-white px-8 py-3.5 rounded-full font-bold transition-all active:scale-95">
              Apply as Tutor
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Image Composition (Coming from RIGHT) */}
        <motion.div 
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-100 md:h-125 lg:h-150 w-full max-w-125 lg:max-w-none mx-auto order-1 lg:order-2"
        >
          {/* Main Large Image */}
          <div className="absolute top-0 right-0 w-[80%] lg:w-[85%] h-[85%] lg:h-[90%] rounded-[40px] overflow-hidden shadow-2xl z-10 border-4 border-white">
            <Image
              src="/cg-1.webp"
              alt="Student writing"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Smaller Overlapping Image */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-4 left-4 lg:bottom-0 lg:right-10 w-[55%] lg:w-[50%] h-[50%] lg:h-[55%] bg-blue-600 rounded-4xl lg:rounded-[30px] overflow-hidden shadow-2xl z-30 border-4 lg:border-10 border-white"
          >
            <Image src="/homecard2.png" alt="Student" fill className="object-cover" />
          </motion.div>

          {/* Floating Enrolled Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute top-8 right-0 lg:-right-6 bg-white p-3 lg:p-4 rounded-2xl lg:rounded-3xl shadow-2xl z-40 flex flex-col items-center gap-2 border border-gray-50 min-w-35 lg:min-w-45"
          >
            <div className="flex -space-x-2 lg:-space-x-3">
              {avatars.map((url, i) => (
                <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white overflow-hidden relative">
                  <Image src={url} alt="User" fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
            <p className="text-[11px] lg:text-[13px] font-bold text-gray-900">
              <span className="text-[#ff4d6d]">35K+</span> Students Enrolled
            </p>
          </motion.div>

          {/* Decorative Square */}
          <div className="absolute bottom-1/4 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-[#00d084] rounded-3xl -z-10 translate-x-8 translate-y-8 lg:translate-x-12 lg:translate-y-12"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
