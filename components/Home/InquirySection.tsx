import React from "react";
import Image from "next/image";
import { BookOpen, Award, Zap } from "lucide-react";

const CommunitySection: React.FC = () => {
  // Array of placeholder images to ensure they show up immediately
  const avatars = [
    "https://i.pravatar.cc/150?u=1",
    "https://i.pravatar.cc/150?u=2",
    "https://i.pravatar.cc/150?u=3",
    "https://i.pravatar.cc/150?u=4",
  ];

  return (
    <section className="w-full bg-[#f8f9fb] py-20 px-4 md:px-12 lg:px-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Content */}
        <div className="space-y-8">
          <div className="space-y-4 ">
            {/* Heading forced to one line on desktop with whitespace-nowrap */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight lg:whitespace-nowrap">
              Creating a community of learners.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
              We&apos;re dedicated to transforming education by providing a
              diverse range of high-quality courses that cater to learners of
              all levels.
            </p>
          </div>

          {/* Feature List */}
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Learn from anywhere
                </h4>
                <p className="text-gray-500 mt-1">
                  Learning from anywhere has become a transform aspect of modern
                  education, allowing individuals.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Expert Mentors
                </h4>
                <p className="text-gray-500 mt-1">
                  Expert mentors are invaluable assets in any field, providing
                  seasoned guidance knowledge.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  Learn in demand skills
                </h4>
                <p className="text-gray-500 mt-1">
                  In today&apos;s rapidly evolving job market, learning in
                  demand skills is crucial for career advancement.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#ff4d6d] hover:bg-[#e63958] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-pink-100">
              Enroll as Student
            </button>
            <button className="bg-[#0f172a] hover:bg-black text-white px-8 py-3.5 rounded-full font-bold transition-all">
              Apply as Tutor
            </button>
          </div>
        </div>

        {/* Right Column: Image Composition */}
        <div className="relative h-125 md:h-150 w-full">
          {/* Main Large Image */}
          <div className="absolute top-0 right-0 w-[65%] h-[90%] rounded-[40px] overflow-hidden shadow-2xl z-10 border-4 border-white">
            <Image
              src="/cg-1.webp"
              alt="Student writing"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Smaller Overlapping Image */}
          <div className="absolute bottom-0 right-10 w-[50%] h-[55%] bg-blue-600 rounded-[30px] overflow-hidden shadow-2xl z-30 border-10 border-white">
            <Image
              src="/homecard2.png"
              alt="Student with backpack"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Enrolled Badge */}
          <div className="absolute top-12 right-0 lg:-right-6 bg-white p-4 rounded-3xl shadow-2xl z-40 flex flex-col items-center gap-2 border border-gray-50 min-w-45">
            <div className="flex -space-x-3">
              {avatars.map((url, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm"
                >
                  <Image
                    src={url}
                    alt={`Enrolled student ${i + 1}`}
                    fill
                    className="object-cover"
                    unoptimized // Use this if using external placeholder URLs
                  />
                </div>
              ))}
            </div>
            <p className="text-[13px] font-bold text-gray-900">
              <span className="text-[#ff4d6d]">35K+</span> Students Enrolled
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-[#00d084] rounded-3xl -z-10 translate-x-12 translate-y-12"></div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
