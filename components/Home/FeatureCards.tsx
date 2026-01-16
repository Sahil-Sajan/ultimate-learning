"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Infinity, GraduationCap } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Benefits = () => {
  const cards = [
    {
      title: "Flexible learning",
      desc: "We believe that high-quality education should be accessible to everyone. Our pricing form in models are designed.",
      icon: <BookOpen className="text-purple-600" size={20} />,
      gradient: "from-white from-50% to-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      title: "Lifetime access",
      desc: "When you enroll in our courses, you're not just signing up for a temporary learning to experience you're making.",
      icon: <Infinity className="text-pink-600" size={20} />,
      gradient: "from-white from-50% to-pink-50",
      iconBg: "bg-pink-100",
    },
    {
      title: "Expert instruction",
      desc: "Our instructors are seasoned professionals with years of experience in their respective fields & Experts advice.",
      icon: <GraduationCap className="text-cyan-600" size={20} />,
      gradient: "from-white from-50% to-cyan-50",
      iconBg: "bg-cyan-100",
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
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-20 px-4 max-w-7xl mx-auto font-sans bg-white overflow-hidden"
    >
      {/* HEADER */}
      <motion.div variants={fadeUp} className="text-center mb-16">
        <p className="text-pink-500 font-medium mb-2 uppercase tracking-wider text-sm">
          Our Benefits
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Master the Skills to Drive your Career
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          The right course, guided by an expert mentor, can provide invaluable insights and practical skills.
        </p>
      </motion.div>

      {/* CARDS */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className={`p-8 rounded-2xl border border-gray-100 bg-linear-to-tr ${card.gradient} shadow-sm`}
          >
            <div className={`${card.iconBg} w-10 h-10 rounded-lg flex items-center justify-center mb-6`}>
              {card.icon}
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {card.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* TRUSTED BY */}
      <motion.div variants={fadeUp} className="relative pt-12 border-t border-dashed border-gray-200">
        <p className="text-center text-gray-500 font-medium mb-12">
          Trusted By{" "}
          <span className="text-pink-500 border-b-2 border-pink-500/30">
            50+ Institutions
          </span>{" "}
          Around the World
        </p>

        <div className="relative flex overflow-hidden select-none group">
          {/* FADES */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-linear-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-linear-to-l from-white to-transparent z-10" />

          {/* SCROLL */}
          <div className="animate-scroll flex">
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center mx-8"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-8 w-auto object-contain"
                  style={{ maxWidth: "120px" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CSS */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          width: max-content;
          animation: scroll 30s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </motion.section>
  );
};

export default Benefits;
