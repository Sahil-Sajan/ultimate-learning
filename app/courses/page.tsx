"use client";

import React, { useState, useMemo } from "react";
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

// 1. TypeScript Interface
interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  category: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  status: "Hot" | "New" | "Special" | "Normal";
  rating: number;
  price: number;
}

// 2. Data Array
const courses: Course[] = [
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
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=400&q=80",
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
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
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
    image: "cg-6.avif",
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
    image: "course-1.webp",
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
    image: "cg-2.avif",
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
    image: "fs-4.avif",
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
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80",
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
    image: "cg-6.avif",
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
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
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
    image: "/cg-2.avif",
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
      "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=400&q=80",
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
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=400&q=80",
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
    image: "/cg-2.avif",
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
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80",
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
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
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
    <div className="min-h-screen bg-white font-sans text-slate-800 pb-20">
      {/* HEADER SECTION */}
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

          <div className="flex border border-slate-200 rounded overflow-hidden h-[42px]">
            <div className="bg-yellow-500 text-white px-3 flex items-center text-xs font-bold uppercase">
              Sort By:
            </div>
            <div className="px-4 flex items-center gap-8 text-slate-600 cursor-pointer bg-white">
              Release date (newest first)
              <ChevronDown size={14} className="text-slate-400" />
            </div>
          </div>

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

      {/* PAGE BODY */}
      <div className="max-w-7xl mx-auto px-10 flex flex-col lg:flex-row gap-10 items-start relative">
        {/* SIDE FILTER - STICKY AND INCREASED HEIGHT */}
        <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-8 self-start">
          <div className="bg-white border border-slate-200 rounded-sm shadow-sm flex flex-col min-h-[800px]">
            <div className="flex-grow">
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
                        p.includes(st) ? p.filter((x) => x !== st) : [...p, st]
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

            {/* Bottom Actions Fixed to bottom of sidebar container */}
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
        <section className="flex-grow">
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
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
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
                  <div className="absolute bottom-0 left-0 bg-white/90 px-3 py-1 text-[15px] font-bold text-slate-800 flex items-center gap-1">
                    <Star size={15} fill="#EAB308" stroke="#EAB308" />{" "}
                    {course.rating}
                  </div>
                  <div className="absolute bottom-0 right-0 bg-slate-900 text-white text-[15px] px-3 py-1 font-black">
                    {course.price === 0 ? (
                      <span className="text-green-400">FREE</span>
                    ) : (
                      `$${course.price.toFixed(2)}`
                    )}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="text-[11px] font-bold text-yellow-600 uppercase tracking-widest mb-1">
                    {course.category}
                  </div>
                  <h3 className="font-bold text-[20px] text-slate-800 leading-snug mb-2 line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-[15px] text-slate-500 mb-0.5 line-clamp-2 leading-relaxed h-8">
                    {course.description}
                  </p>

                  <div className="flex items-center ">
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                      <User size={16} />
                    </div>
                    <span className="text-[18px] font-medium text-slate-400">
                      {course.instructor}
                    </span>
                  </div>

                  <div className="mt-auto border-t border-slate-100 pt-4 flex justify-between items-center">
                    <div className="flex flex-col items-center">
                      <span className="text-[14px] font-bold text-slate-600 uppercase mt-1">
                        {course.level}
                      </span>
                    </div>
                    <div className="w-[1px] h-6 bg-slate-100"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-[14px] font-bold text-slate-600 uppercase mt-1">
                        Modules
                      </span>
                    </div>
                    <div className="w-[1px] h-6 bg-slate-100"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-[14px] font-bold text-slate-600 uppercase mt-1">
                        Lifetime
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-yellow-500 text-white px-12 py-3.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-yellow-600 shadow-lg shadow-yellow-500/20 transition-all active:scale-95">
              Load More Courses
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

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
