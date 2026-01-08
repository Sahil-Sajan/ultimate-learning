"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Target, Users } from 'lucide-react';

const courseFeatures = [
  {
    title: "Entrepreneurship",
    icon: <Briefcase strokeWidth={1.5} />,
    description: "Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus pellentesque nec.",
  },
  {
    title: "Accelerated Learning",
    icon: <Zap strokeWidth={1.5} />,
    description: "Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus pellentesque nec.",
  },
  {
    title: "Productivity",
    icon: <Target strokeWidth={1.5} />,
    description: "Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus pellentesque nec.",
  },
  {
    title: "Life Coaching",
    icon: <Users strokeWidth={1.5} />,
    description: "Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus pellentesque nec.",
  }
];

export default function WhyCourses() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* --- PROFESSIONAL HEADING SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          {/* Small Top Label */}
          <span className="text-amber-600 font-bold text-xs uppercase tracking-[0.3em] mb-3">
            Features
          </span>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Our <span className="text-amber-500">Courses?</span>
          </h2>
          
          {/* Modern Underline Accent */}
          <div className="mt-5 flex items-center gap-2">
            <div className="h-0.5 w-12 bg-amber-500/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <div className="h-0.5 w-12 bg-amber-500/30" />
          </div>
        </motion.div>
        {/* --- END HEADING SECTION --- */}

        {/* Professional Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex items-start p-8 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:bg-amber-500 transition-all duration-300 ease-in-out cursor-pointer rounded-sm"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 group-hover:bg-transparent transition-colors" />

              <div className="mr-5 p-3 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}