"use client";
import React from "react";
import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Sign-Up or Register",
    desc: "Once you're on the website's homepage, look for the Sign-Up, Register, or Create Account button.",
  },
  {
    id: "02",
    title: "Complete Your Profile",
    desc: "After verifying your email, you may be asked to complete additional profile information.",
  },
  {
    id: "03",
    title: "Choose Courses or Programs",
    desc: "Depending on the website, after registration, you might be able to browse and choose courses or programs to enroll in.",
  },
  {
    id: "04",
    title: "Access Your Account",
    desc: "Should have access to the website's features, such as enrolling in courses, materials, or tracking progress.",
  },
];

const Work = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* --- MARQUEE SECTION (Unchanged as requested) --- */}

      {/* --- HOW IT WORKS CONTENT SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Image */}
        <div className="relative w-full h-full aspect-square md:aspect-4/3 lg:aspect-square rounded-[40px] overflow-hidden shadow-xl">

          <Image 
            src="/cg-2.avif" 

          <Image
            src="/cg-2.avif"
          />
        </div>
        {/* Right Side: Content */}
        <div className="flex flex-col">
          <div className="mb-10">
            <span className="text-[#f6416c] font-semibold text-sm border-b-2 border-[#f6416c] pb-1 uppercase tracking-wider">
              How it Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b1219] mt-6 mb-4">
              Start your Learning Journey Today!
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Unlock Your Potential and Achieve Your Dreams with Our
              Comprehensive Learning Resources!
            </p>
          </div>

          {/* Steps List */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-6 group">
                {/* Number */}
                <span className="text-4xl font-bold text-[#392c7d] opacity-90 transition-colors">
                  {step.id}
                </span>

                {/* Text Content */}
                <div className="flex flex-col border-b border-gray-100 pb-6 w-full">
                  <h3 className="text-xl font-bold text-[#0b1219] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
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

export default Work;
