"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Star,
  ChevronDown,
  Minus,
  Plus,
  Search,
  LayoutGrid,
  List,
  User,
} from "lucide-react";
import Navbar from "@/ui/Navbar";

// 1. Exporting Data so Detail Page can use it (Or move to a separate data.ts)
export const courses: any[] = [
  {
    id: 1,
    title: "Mastering C++ for Systems",
    description: "Deep dive into memory management.",
    instructor: "Dr. Robert Pike",
    price: 49.99,
    category: "Software Development",
    level: "Advanced",
    status: "Special",
    rating: 4.8,
    image:
      "/course5.webp",
  },
  {
    id: 2,
    title: "Java Enterprise Edition",
    description: "Build scalable backend systems.",
    instructor: "James Gosling",
    price: 59.0,
    category: "Software Development",
    level: "Intermediate",
    status: "Hot",
    rating: 4.5,
    image:
      "/course6.webp",
  },
  {
    id: 3,
    title: "Python for Data Science",
    description: "Master NumPy and Pandas.",
    instructor: "Guido van Rossum",
    price: 39.99,
    category: "Software Development",
    level: "Beginner",
    status: "New",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
  },
  {
    id: 4,
    title: "Digital Illustration 101",
    description: "Learn to draw professional characters.",
    instructor: "Alice Blue",
    price: 25.0,
    category: "Art",
    level: "Beginner",
    status: "Normal",
    rating: 3.8,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
  },
  {
    id: 5,
    title: "Modern JavaScript (ES6+)",
    description: "The complete guide to modern JS.",
    instructor: "Sarah Drasner",
    price: 19.99,
    category: "Software Development",
    level: "Beginner",
    status: "Hot",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&q=80",
  },
  {
    id: 6,
    title: "Public Speaking Mastery",
    description: "Overcome stage fright effectively.",
    instructor: "Dale Carnegie",
    price: 45.0,
    category: "Material Design",
    level: "Intermediate",
    status: "Special",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=80",
  },
  {
    id: 7,
    title: "Financial Literacy",
    description: "Understand stocks and wealth.",
    instructor: "Warren B.",
    price: 0.0,
    category: "Material Design",
    level: "Beginner",
    status: "New",
    rating: 4.7,
    image:
      "/course7.webp",
  },
  {
    id: 8,
    title: "Machine Learning A-Z",
    description: "Build AI models with TensorFlow.",
    instructor: "Andrew Ng",
    price: 89.99,
    category: "Software Development",
    level: "Advanced",
    status: "Hot",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&q=80",
  },
  {
    id: 9,
    title: "Yoga & Mindfulness",
    description: "30 days of guided physical health.",
    instructor: "Adriene Mishler",
    price: 15.0,
    category: "Exercise",
    level: "Beginner",
    status: "Normal",
    rating: 4.4,
    image:
      "/course-3.webp",
  },
  {
    id: 10,
    title: "Cybersecurity Basics",
    description: "Protect networks and learn hacking.",
    instructor: "Kevin Mitnick",
    price: 55.0,
    category: "Software Development",
    level: "Intermediate",
    status: "Special",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
  },
  {
    id: 11,
    title: "Cooking Italian Classics",
    description: "Master the art of authentic pasta.",
    instructor: "Chef Mario",
    price: 34.0,
    category: "Material Design",
    level: "Beginner",
    status: "Normal",
    rating: 4.1,
    image:
      "/courses-2.avif",
  },
  {
    id: 12,
    title: "UI/UX Case Studies",
    description: "Build a portfolio that gets hired.",
    instructor: "Don Norman",
    price: 65.0,
    category: "Material Design",
    level: "Intermediate",
    status: "New",
    rating: 4.5,
    image:
      "couse-1.webp",
  },
  {
    id: 13,
    title: "Rust Programming",
    description: "Safe and fast systems programming.",
    instructor: "Steve Klabnik",
    price: 42.0,
    category: "Software Development",
    level: "Advanced",
    status: "Hot",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
  },
  {
    id: 14,
    title: "Mobile Photography",
    description: "Take stunning photos with phones.",
    instructor: "Chase Jarvis",
    price: 20.0,
    category: "Photography",
    level: "Beginner",
    status: "Normal",
    rating: 3.9,
    image:
      "/courses-4.avif",
  },
  {
    id: 15,
    title: "Music Theory 101",
    description: "Foundations of composition.",
    instructor: "Hans Zimmer",
    price: 99.0,
    category: "Music",
    level: "Advanced",
    status: "Special",
    rating: 4.9,
    image:
      "/cg-1.webp",
  },
];

const categories = [
  "Art",
  "Music",
  "Exercise",
  "Software Development",
  "Material Design",
  "Photography",
];
const statuses = ["Hot", "New", "Special"];
const levels = ["Beginner", "Intermediate", "Advanced"];
const ratings = [4.5, 4.0, 3.5, 3.0];

export default function CourseCatalog() {
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [showPriceOptions, setShowPriceOptions] = useState(false);

  const resetAll = () => {
    setSelectedCats([]);
    setSelectedStatus([]);
    setSelectedLevels([]);
    setMinRating(null);
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const catMatch =
        selectedCats.length === 0 || selectedCats.includes(c.category);
      const statusMatch =
        selectedStatus.length === 0 || selectedStatus.includes(c.status);
      const lvlMatch =
        selectedLevels.length === 0 || selectedLevels.includes(c.level);
      const ratingMatch = minRating === null || c.rating >= minRating;
      return catMatch && statusMatch && lvlMatch && ratingMatch;
    });
  }, [selectedCats, selectedStatus, selectedLevels, minRating]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white font-sans text-slate-800 pb-20">
        <header className="max-w-7xl mx-auto px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
            Courses
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex border border-slate-200 rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search Courses"
                className="px-4 py-2 w-64 outline-none text-sm text-slate-500"
              />
              <button className="bg-yellow-500 p-2.5 text-white hover:bg-yellow-600 transition-colors">
                <Search size={18} strokeWidth={3} />
              </button>
            </div>
            {/* View Icons */}
            <div className="flex border border-slate-200 rounded overflow-hidden">
              <button className="p-2.5 border-r border-slate-200 text-yellow-500 hover:bg-slate-50">
                <LayoutGrid size={20} />
              </button>
              <button className="p-2.5 text-slate-300 hover:bg-slate-50">
                <List size={20} />
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-10 flex flex-col lg:flex-row gap-10 items-start relative">
          {/* SIDEBAR */}
          <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-8 self-start">
            <div className="bg-white border border-slate-200 rounded-sm shadow-sm flex flex-col min-h-200">
              <div className="grow">
                <FilterSection title="Category" icon={<Minus size={18} />}>
                  {categories.map((cat) => (
                    <FilterItem
                      key={cat}
                      label={cat}
                      checked={selectedCats.includes(cat)}
                      onChange={() =>
                        setSelectedCats((p) =>
                          p.includes(cat)
                            ? p.filter((x) => x !== cat)
                            : [...p, cat]
                        )
                      }
                    />
                  ))}
                </FilterSection>

                <FilterSection title="Status" icon={<Minus size={18} />}>
                  {statuses.map((st) => (
                    <FilterItem
                      key={st}
                      label={st}
                      checked={selectedStatus.includes(st)}
                      onChange={() =>
                        setSelectedStatus((p) =>
                          p.includes(st)
                            ? p.filter((x) => x !== st)
                            : [...p, st]
                        )
                      }
                    />
                  ))}
                </FilterSection>

                <FilterSection title="Rating" icon={<Minus size={18} />}>
                  {ratings.map((r) => (
                    <label
                      key={r}
                      className="flex items-center gap-4 mb-4 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="rating"
                        className="w-5 h-5 accent-yellow-500"
                        onChange={() => setMinRating(r)}
                        checked={minRating === r}
                      />
                      <div className="flex gap-1 items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            fill={i < Math.floor(r) ? "#EAB308" : "none"}
                            stroke={i < Math.floor(r) ? "#EAB308" : "#CBD5E1"}
                          />
                        ))}
                        <span className="text-[18px] text-slate-500 ml-2 font-bold">
                          {r}
                        </span>
                      </div>
                    </label>
                  ))}
                </FilterSection>

                <div className="p-6 border-b border-slate-100">
                  <div
                    className="flex justify-between items-center text-lg font-bold text-slate-700 cursor-pointer"
                    onClick={() => setShowPriceOptions(!showPriceOptions)}
                  >
                    Price{" "}
                    {showPriceOptions ? (
                      <Minus size={24} className="text-yellow-500" />
                    ) : (
                      <Plus size={24} className="text-yellow-500" />
                    )}
                  </div>
                  {showPriceOptions && (
                    <div className="mt-6 space-y-4 animate-in fade-in duration-300">
                      <FilterItem
                        label="Free"
                        checked={false}
                        onChange={() => {}}
                      />
                      <FilterItem
                        label="Paid"
                        checked={false}
                        onChange={() => {}}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="p-8 bg-slate-50 mt-auto border-t border-slate-100">
                <button className="w-full bg-yellow-500 text-white py-5 rounded text-[14px] font-black uppercase tracking-widest hover:bg-yellow-600 shadow-sm transition-all active:scale-95">
                  Show Results
                </button>
                <button
                  onClick={resetAll}
                  className="w-full mt-6 text-[13px] text-slate-400 uppercase font-bold text-center hover:text-slate-600 flex items-center justify-center gap-2"
                >
                  <span className="rotate-45 font-light text-xl">+</span> Reset
                  all
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN GRID */}
          <section className="grow">
            <div className="bg-slate-50 p-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 flex justify-between px-4 border border-slate-100">
              <span>Featured Courses</span>
              <span className="text-slate-400 cursor-pointer hover:text-slate-600">
                → Show all
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-slate-200 flex flex-col group hover:shadow-xl transition-all duration-300"
                >
                  {/* Link wrapper for Image */}
                  <Link
                    href={`/courses/${course.id}`}
                    className="relative aspect-4/3 overflow-hidden bg-slate-100 block"
                  >
                    <img
                      src={course.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={course.title}
                    />
                    {course.status !== "Normal" && (
                      <div className="absolute top-0 right-0 bg-yellow-500 text-white text-[9px] font-black px-3 py-1 uppercase italic z-10">
                        {course.status}
                      </div>
                    )}
                    <div className="absolute bottom-0 right-0 bg-slate-900 text-white text-[15px] px-3 py-1 font-black">
                      {course.price === 0 ? (
                        <span className="text-green-400">FREE</span>
                      ) : (
                        `$${course.price.toFixed(2)}`
                      )}
                    </div>
                  </Link>

                  <div className="p-5 flex flex-col grow">
                    <div className="text-[11px] font-bold text-yellow-600 uppercase tracking-widest mb-1">
                      {course.category}
                    </div>
                    <Link href={`/courses/${course.id}`}>
                      <h3 className="font-bold text-[20px] text-slate-800 leading-snug mb-2 hover:text-yellow-600 transition-colors line-clamp-1">
                        {course.title}
                      </h3>
                    </Link>
                    <p className="text-[15px] text-slate-500 mb-4 line-clamp-2 h-10">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <User size={14} />
                      </div>
                      <span className="text-sm font-medium text-slate-500">
                        {course.instructor}
                      </span>
                    </div>

                    <div className="mt-auto border-t border-slate-100 pt-4 flex justify-between items-center text-[12px] font-bold text-slate-400 uppercase">
                      <span>{course.level}</span>
                      <div className="w-px h-4 bg-slate-100"></div>
                      <span>Modules</span>
                      <div className="w-px h-4 bg-slate-100"></div>
                      <span>Lifetime</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

// Helper Components
function FilterSection({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="p-6 border-b border-slate-100 last:border-0">
      <h3 className="font-bold text-lg mb-6 flex justify-between items-center text-slate-800 uppercase tracking-wide">
        {title} <span className="text-slate-300">{icon}</span>
      </h3>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

function FilterItem({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-4 mb-4 text-[16px] text-slate-500 font-bold cursor-pointer hover:text-yellow-600 transition-colors">
      <input
        type="checkbox"
        className="w-5 h-5 border-slate-300 rounded accent-yellow-500"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
