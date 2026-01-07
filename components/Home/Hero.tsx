"use client"
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col font-sans overflow-hidden">
      {/* Background Image with accurate Masterstudy blue-tint overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.75), rgba(30, 41, 59, 0.85)), url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')` 
        }}
      />

      {/* Main Hero Content Area */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="container mx-auto px-6 md:px-12 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Start Investing in <br /> Yourself
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-lg leading-relaxed">
              With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for you.
            </p>
            <button className="bg-[#1e73be] hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-sm uppercase transition-all duration-300 shadow-lg">
              Join for Free
            </button>
          </div>
        </div>
      </div>

      {/* Feature Cards Bottom Strip - IMPROVED WITH MX-AUTO AND HOVER */}
      <div className="relative z-10 w-full mb-2">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden rounded-xl shadow-2xl">
            {/* Green Card */}
            <div className="bg-[#1ecd6e] p-12 text-white flex flex-col gap-5 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:brightness-110 cursor-pointer">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                <h3 className="text-xl font-extrabold uppercase tracking-tight">Trending Courses</h3>
                <p className="text-sm font-medium leading-[1.6] opacity-90">
                Your chance to be a trending expert in IT industries and make a successful career after completion of our courses.
                </p>
            </div>

            {/* Yellow Card */}
            <div className="bg-[#f8c12c] p-12 text-white flex flex-col gap-5 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:brightness-110 cursor-pointer">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                <h3 className="text-xl font-extrabold uppercase tracking-tight">Books & Library</h3>
                <p className="text-sm font-medium leading-[1.6] opacity-90">
                Masterstudy is one of the world's busiest public library systems, with over 10 million books, movies and other items to.
                </p>
            </div>

            {/* Blue Card */}
            <div className="bg-[#307ad5] p-12 text-white flex flex-col gap-5 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:brightness-110 cursor-pointer">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                <h3 className="text-xl font-extrabold uppercase tracking-tight">Certified Teachers</h3>
                <p className="text-sm font-medium leading-[1.6] opacity-90">
                Get professional education and reliable consultation by our team of certified teachers and instructors.
                </p>
            </div>

            {/* Pink Card */}
            <div className="bg-[#ea51a0] p-12 text-white flex flex-col gap-5 transition-all duration-300 ease-in-out hover:-translate-y-4 hover:brightness-110 cursor-pointer">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="text-xl font-extrabold uppercase tracking-tight">Certification</h3>
                <p className="text-sm font-medium leading-[1.6] opacity-90">
                Upon successful completion receive a certificate showing your achievement for completing one of our rigorous classes.
                </p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;