import React from "react";
// Using your provided Navbar component
import {
  Search,
  Grid,
  List,
  Star,
  Clock,
  BookOpen,
  Trash2,
  Edit,
} from "lucide-react";

const CourseGridPage = () => {
  const categories = [
    "Backend",
    "CSS",
    "Frontend",
    "General",
    "IT & Software",
    "Photography",
  ];

  const courses = [
    {
      title: "Mastering C++ for Systems",
      instructor: "Dr. Robert Pike",
      price: 49.99,
      oldPrice: 990.0,
      rating: 4.8,
      reviews: 154,
      lessons: "12+ Lesson",
      duration: "9hr 30min",
      image: "/api/placeholder/400/250", // Use your high-res images here
      tag: "Software Development",
    },
    // Add other courses following this structure
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Header & Navbar Section */}

      {/* 2. Breadcrumb/Page Title Header */}
      <div className="w-full bg-[#f8f9fc] py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-[#2D2264] mb-2">
            Course Grid
          </h1>
          <p className="text-gray-500 font-medium">
            Home — <span className="text-[#FF5B5C]">Course Grid</span>
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 3. Sidebar Filters */}
          <aside className="w-full lg:w-1/4 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#2D2264] mb-6 flex justify-between items-center">
                Categories <span className="text-xs font-normal">▼</span>
              </h3>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat} className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-[#FF5B5C] focus:ring-[#FF5B5C]"
                    />
                    <span className="text-gray-600 text-sm flex-1">{cat}</span>
                    <span className="text-gray-400 text-xs">(3)</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-[#FF5B5C] text-sm font-semibold hover:underline">
                See More
              </button>
            </div>
          </aside>

          {/* 4. Main Course Grid */}
          <div className="w-full lg:w-3/4">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between mb-8 gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="bg-[#FF5B5C] p-2 rounded-lg text-white">
                  <Grid size={18} />
                </div>
                <span className="text-gray-600 font-medium ml-2">
                  Showing 1-9 of 9 results
                </span>
              </div>

              <div className="flex items-center gap-4">
                <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#FF5B5C]/20">
                  <option>Newly Published</option>
                  <option>Price: Low to High</option>
                </select>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-50 border border-gray-200 text-sm rounded-lg pl-4 pr-10 py-2 w-64 outline-none focus:ring-2 focus:ring-[#FF5B5C]/20"
                  />
                  <Search
                    className="absolute right-3 top-2.5 text-gray-400"
                    size={16}
                  />
                </div>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase text-[#2D2264]">
                      {course.tag}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#FF5B5C] text-white px-3 py-1 rounded-lg font-bold">
                      ${course.price}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        <img src="/api/placeholder/32/32" alt="instructor" />
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        {course.instructor}
                      </span>
                    </div>
                    <h4 className="font-bold text-[#2D2264] mb-3 line-clamp-2 hover:text-[#FF5B5C] transition-colors cursor-pointer">
                      {course.title}
                    </h4>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < 4
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                      <span className="text-xs text-gray-400 ml-1">
                        ({course.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-gray-500 text-xs">
                        <span className="flex items-center gap-1">
                          <BookOpen size={14} /> {course.lessons}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> {course.duration}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 bg-[#2D2264] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#392C7D] transition-colors">
                        View Course
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseGridPage;
