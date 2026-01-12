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
    <section className="w-full bg-[#f8f9fb] py-12 md:py-20 px-4 md:px-12 lg:px-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-4">
            {/* Heading responsive adjustment */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight lg:whitespace-nowrap">
              Creating a community of learners.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              We&apos;re dedicated to transforming education by providing a
              diverse range of high-quality courses that cater to learners of
              all levels.
            </p>
          </div>

          {/* Feature List */}
          <div className="space-y-6 md:space-y-8 text-left">
            <div className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
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
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
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
              <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
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
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <button className="bg-[#ff4d6d] hover:bg-[#e63958] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-pink-100">
              Enroll as Student
            </button>
            <button className="bg-[#0f172a] hover:bg-black text-white px-8 py-3.5 rounded-full font-bold transition-all">
              Apply as Tutor
            </button>
          </div>
        </div>


        {/* Right Column: Image Composition */}
        <div className="relative h-[500px] md:h-[600px] w-full">
          {/* Main Large Image */}
          <div className="absolute top-0 right-0 w-[85%] h-[90%] rounded-[40px] overflow-hidden shadow-2xl z-10 border-4 border-white">
      src="/cg-1.webp"
              alt="Student writing"
              fill
              className="object-cover"
            />
          </div>

          {/* Smaller Overlapping Image */}

              src="/homecard2.png"
              alt="Student with backpack"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Enrolled Badge */}

          <div className="absolute top-12 right-0 lg:-right-6 bg-white p-4 rounded-3xl shadow-2xl z-40 flex flex-col items-center gap-2 border border-gray-50 min-w-[180px]">
            <div className="flex -space-x-3">

          <div className="absolute top-8 right-0 lg:-right-6 bg-white p-3 lg:p-4 rounded-2xl lg:rounded-3xl shadow-2xl z-40 flex flex-col items-center gap-2 border border-gray-50 min-w-35 lg:min-w-45">
                  key={i}
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm"
                  <Image
                    src={url}
                    alt={`Enrolled student ${i + 1}`}
                    fill
                    className="object-cover"
                    unoptimized 
                  />
                </div>
              ))}
            </div>
            <p className="text-[11px] lg:text-[13px] font-bold text-gray-900">
              <span className="text-[#ff4d6d]">35K+</span> Students Enrolled
            </p>
          </div>

          {/* Decorative Element (Hidden on very small screens if needed, or adjusted) */}
          <div className="absolute bottom-1/4 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-[#00d084] rounded-3xl -z-10 translate-x-8 translate-y-8 lg:translate-x-12 lg:translate-y-12"></div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;