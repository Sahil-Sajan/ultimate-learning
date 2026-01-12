import React from "react";
import Image from "next/image";

const HomeMainCard: React.FC = () => {
  return (
    <div className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto relative flex flex-col items-center">
        {/* 1. Centered Overlapping Image */}
        <div className="relative z-20 w-full md:w-[95%] h-70 md:h-120 rounded-[30px] overflow-hidden shadow-2xl -mb-45">
          <Image
            src="/fs-4.avif" // Use your specific image path
            alt="Group of students"
            fill
            className="object-cover"
            priority
          />
          {/* Play Button */}
        </div>

        {/* 2. Main Purple Container */}
        <div className="relative w-full pt-55 pb-12 px-8 md:px-12 bg-[#3b2d83] rounded-4xl overflow-hidden">
          {/* Subtle Background Wave Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 500 Q 250 200 500 500 T 1000 500"
                stroke="white"
                fill="transparent"
                strokeWidth="80"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col space-y-12">
            {/* Top Row: Heading and Two Stat Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              {/* Main Heading */}
              <div className="md:col-span-5">
                <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                  Trusted by the 15,000+ happy students and online users since
                  2000
                </h2>
              </div>

              {/* Stats 1: Score */}
              <div className="md:col-span-3 space-y-2">
                <div className="text-white text-3xl font-bold">9.8/10</div>
                <div className="text-white font-semibold text-base">
                  Course approval score
                </div>
                <p className="text-gray-300 text-xs leading-relaxed max-w-50">
                  Achieving a complete course approval score is a significant.
                </p>
              </div>

              {/* Stats 2: Count */}
              <div className="md:col-span-4 space-y-2">
                <div className="text-white text-3xl font-bold">13k</div>
                <div className="text-white font-semibold text-base">
                  Satisfied students worldwide
                </div>
                <p className="text-gray-300 text-xs leading-relaxed max-w-62.5">
                  Satisfied students worldwide share a common thread of
                  happiness.
                </p>
              </div>
            </div>

            {/* Bottom Row: Buttons and Testimonial Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button className="bg-[#ff4d6d] hover:bg-[#e63958] text-white px-6 py-2.5 rounded-full font-bold text-xs transition-all">
                  Enroll as Student
                </button>
                <button className="bg-[#0f172a] hover:bg-black text-white px-6 py-2.5 rounded-full font-bold text-xs transition-all">
                  Apply as Tutor
                </button>
              </div>

              {/* Testimonial Quote */}
              <div className="bg-white rounded-xl p-1.5 pr-6 flex items-center gap-3 shadow-lg max-w-md">
                <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/homecard2.png" // User avatar
                    alt="Reviewer"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#3b2d83] text-[13px] font-medium italic">
                  &quot;All courses are incredibly help people to achieve their
                  goals&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainCard;
