"use client";
import React from "react";
import { BookOpen, Infinity, GraduationCap } from "lucide-react";
import Image from "next/image";

const FeatureCards = () => {
  const cards = [
    {
      title: "Flexible learning",
      desc: "We believe that high-quality education should be accessible to everyone. Our pricing form in models are designed.",
      icon: <BookOpen className="text-purple-600" size={20} />,
      // Gradient ab top-right corner ki taraf jayega
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
    { name: "Adobe", src: "/adobe.webp" },
    { name: "Airtable", src: "/airtable.webp" },
    { name: "Dropbox", src: "/dropbox.webp" },
    { name: "GitLab", src: "/gitlab.webp" },
    { name: "ClickUp", src: "/clickup.webp" },
    { name: "Amazon", src: "/amazon1.webp" },
    { name: "Google", src: "/google.webp" },
    { name: "Microsoft", src: "/microsoft.webp" },
    { name: "Slack", src: "/slack.webp" },
    { name: "Spotify", src: "/spotify.webp" },
    { name: "Zoom", src: "/zoom.avif" },
  ];

  const doubleLogos = [...logos, ...logos];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto font-sans bg-white overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className="text-pink-500 font-medium mb-2 uppercase tracking-wider text-sm">
          Our Benefits
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Master the Skills to Drive your Career
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          The right course, guided by an expert mentor, can provide invaluable
          insights and practical skills.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {cards.map((card, index) => (
          <div
            key={index}
            // bg-gradient-to-tr (to top right) use kiya hai
            className={`p-8 rounded-2xl border border-gray-100 bg-linear-to-tr ${card.gradient} shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <div
              className={`${card.iconBg} w-10 h-10 rounded-lg flex items-center justify-center mb-6`}
            >
              {card.icon}
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {card.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Trusted By Section (Infinite Scroll) */}
      <div className="relative pt-12 border-t border-dashed border-gray-200">
        <p className="text-center text-gray-500 font-medium mb-12">
          Trusted By{" "}
          <span className="text-pink-500 border-b-2 border-pink-500/30">
            50+ Institutions
          </span>{" "}
          Around the World
        </p>

        <div className="relative flex overflow-hidden select-none">
          {/* Fading Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex items-center gap-12 md:gap-20 animate-scroll min-w-full">
            {doubleLogos.map((logo, idx) => (
              <div
                key={idx}
                className="relative w-28 h-10 md:w-36 md:h-12 shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

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
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FeatureCards;
