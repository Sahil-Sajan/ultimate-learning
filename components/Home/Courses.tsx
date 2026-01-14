import React from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";

interface Course {
  id: number;
  title: string;
  category: string;
  price: string;
  instructor: string;
  instructorImg: string;
  rating: string;
  image: string;
  color: string;
  isActive?: boolean;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Information About UI/UX Design Degree",
    category: "UI/UX",
    price: "$500",
    instructor: "Brenda Slaton",
    instructorImg: "/cs-1.avif",
    rating: "5.0",
    image: "/screenshit-1.png",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 2,
    title: "Learn & Create ReactJS Tech Fundamentals Apps",
    category: "Productivity",
    price: "$300",
    instructor: "David Benitez",
    instructorImg: "/cs-3.webp",
    rating: "5.0",
    image: "/screenshot-2.png",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    title: "The Complete Business and Management Course",
    category: "Management",
    price: "$355",
    instructor: "Calvin Johnsen",
    instructorImg: "/cs-4.webp",
    rating: "5.0",
    image: "/screenshot-3.png",
    color: "bg-pink-100 text-pink-600",
    isActive: true,
  },
  {
    id: 4,
    title: "Build Creative Arts & media Course Completed",
    category: "Art & Media",
    price: "$500",
    instructor: "David Benitez",
    instructorImg: "/cs-2.webp",
    rating: "5.0",
    image: "/screenshot-4.png",
    color: "bg-green-100 text-green-600",
  },
];

const CourseGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white px-8 max-w-7xl mx-auto font-sans">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-pink-500 font-semibold text-sm tracking-wide">
          Featured Courses
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          What's New in Ultimate Learning
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover our featured courses, specially curated to help you gain
          in-demand skills
        </p>
      </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Our <span className="text-[#ff4d6d]">Courses?</span>
          </h2>

          {/* Modern Underline Accent */}
          <div className="mt-5 flex items-center gap-2">
            <div className="h-0.5 w-12 bg-[#ff4d6d]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#ff4d6d]" />
            <div className="h-0.5 w-12 bg-[#ff4d6d]" />
          </div>
        </motion.div>
       

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
              className="group relative flex items-start p-8 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:bg-[#ff4d6d] transition-all duration-300 ease-in-out cursor-pointer rounded-sm"
            >
              {/* Course Image & Overlay */}
              <div className="relative aspect-16/10 rounded-xl overflow-hidden mb-4">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="grow space-y-3">
                <div className="flex justify-between items-center">
                  <span
                    className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase ${course.color}`}
                  >
                    {course.category}
                  </span>
                  <Heart className="w-4 h-4 text-gray-300 cursor-pointer hover:text-red-500 transition-colors" />
                </div>

                <h3 className="font-bold text-gray-900 leading-snug line-clamp-2 min-h-12">
                  {course.title}
                </h3>

                <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                      <Image
                        src={course.instructorImg}
                        alt={course.instructor}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs text-blue-600 font-medium">
                      {course.instructor}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                className={`mt-4 w-full py-2.5 rounded-xl text-xs font-bold transition-colors ${
                  course.isActive
                    ? "bg-[#ff4d6d] text-white hover:bg-[#e63958]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Buy Course Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Button */}
      <div className="text-center mt-12">
        <button className="bg-[#3b2d83] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#2e2366] transition-colors shadow-lg shadow-purple-200">
          View All Categories
        </button>
      </div>
    </section>
  );
};

export default CourseGrid;
