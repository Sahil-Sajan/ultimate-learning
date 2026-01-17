"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { BookOpen, Infinity, GraduationCap } from "lucide-react";

// Fixed Type: Variants type assign karne se ease string ka error khatam ho jayega
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1] // Ab ye error nahi dega
    },
  },
};

// Interface for Card Type Safety
interface BenefitCard {
  title: string;
  desc: string;
  icon: React.ReactNode;
  gradient: string;
  iconBg: string;
}

const Benefits = () => {
  const cards: BenefitCard[] = [
    {
      title: "Flexible learning",
      desc: "We believe that high-quality education should be accessible to everyone. Our pricing form in models are designed.",
      icon: <BookOpen className="text-purple-600" size={20} />,
      gradient: "from-white from-50% to-purple-50", 
      iconBg: "bg-purple-100"
    },
    {
      title: "Lifetime access",
      desc: "When you enroll in our courses, you're not just signing up for a temporary learning to experience you're making.",
      icon: <Infinity className="text-pink-600" size={20} />,
      gradient: "from-white from-50% to-pink-50",
      iconBg: "bg-pink-100"
    },
    {
      title: "Expert instruction",
      desc: "Our instructors are seasoned professionals with years of experience in their respective fields & Experts advice.",
      icon: <GraduationCap className="text-cyan-600" size={20} />,
      gradient: "from-white from-50% to-cyan-50",
      iconBg: "bg-cyan-100"
    }
  ];

  // Company logos - replace with your actual logo URLs
  const logos = [
    { name: "Google", url: "/googlelogo.svg" },
    { name: "Microsoft", url: "/microsoftlogo.svg" },
    { name: "Amazon", url: "amazonlogo.svg" },
    { name: "Meta", url: "metalogo.svg" },
    { name: "Apple", url: "/applelogo.svg" },
    { name: "Netflix", url: "/netflixlogo.svg" },
    { name: "IBM", url: "/ibmlogo.svg" },
    
  ];

  
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto font-sans bg-white overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-pink-500 font-medium mb-2 uppercase tracking-wider text-sm">Our Benefits</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Master the Skills to Drive your Career
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          The right course, guided by an expert mentor, can provide invaluable insights and practical skills.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-2xl border border-gray-100 bg-linear-to-tr ${card.gradient} shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <div className={`${card.iconBg} w-10 h-10 rounded-lg flex items-center justify-center mb-6`}>
              {card.icon}
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Trusted By Section (Infinite Scroll) */}
      <div className="relative pt-12 border-t border-dashed border-gray-200">
        <p className="text-center text-gray-500 font-medium mb-12">
          Trusted By <span className="text-pink-500 border-b-2 border-pink-500/30">50+ Institutions</span> Around the World
        </p>
        
        <div className="relative flex overflow-hidden select-none group">
          {/* Fading Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>


          {/* Scrolling Container */}
          <div className="animate-scroll">
            {/* First Set */}
            {logos.map((logo, index) => (
              <div 

              >
                <img 
                  src={logo.url} 
                  alt={logo.name}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Benefits;
