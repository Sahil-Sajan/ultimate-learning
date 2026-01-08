"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Users, Languages, Puzzle, HomeIcon, LucideIcon } from "lucide-react";

/* ---------------- TYPES ---------------- */

interface FeatureItem {
  title: string;
  desc: string;
  img: string;
  icon: LucideIcon;
  iconBg: string;
}

/* ---------------- DATA ---------------- */

const featureData: FeatureItem[] = [
  {
    title: "One-to One or Group Lessons",
    desc: "Let's Learn English is a course for English learners. Certified American English teachers designed the course for beginners.",
    img: "/fs-1.avif",
    icon: Users,
    iconBg: "bg-[#ff4b4b]",
  },
  {
    title: "18 languages from beginner to expert",
    desc: "This 18-part course consists of tutorials, quizzes, hands-on assignments, and real-world projects to learn natural language processing.",
    img: "/fs-2.avif",
    icon: Languages,
    iconBg: "bg-[#1e73be]",
  },
  {
    title: "Special lessons and courses",
    desc: "Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best fit their students' needs and learning styles.",
    img: "/fs-3.avif",
    icon: Puzzle,
    iconBg: "bg-[#f39c12]",
  },
  {
    title: "A Residential Campus Community",
    desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
    img: "/fs-4.avif",
    icon: HomeIcon,
    iconBg: "bg-[#2ecc71]",
  },
];

/* ---------------- ANIMATION VARIANTS ---------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featureData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Image Container */}
              <div className="relative mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-56 h-56 rounded-full overflow-hidden shadow-lg border-4 border-white"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={224}
                    height={224}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>

                {/* Floating Icon */}
                <div
                  className={`absolute bottom-2 right-2 ${item.iconBg} p-3 rounded-full text-white shadow-md z-10`}
                >
                  <item.icon size={24} />
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 px-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-62.5">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
