"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, BookOpen, BarChart, PlayCircle, Trash2 } from "lucide-react";

const STORAGE_KEY = "published-courses";

export default function MyCoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setCourses(JSON.parse(saved));
    }
  }, []);

  const deleteCourse = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); // Prevents navigation to the ID page
    const filtered = courses.filter((c) => c.id !== id);
    setCourses(filtered);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Teacher Dashboard
            </h1>
            <p className="text-slate-500">Manage your courses and content</p>
          </div>
          <Link
            href="/dashboard/teacher/upload-courses"
            className="flex items-center gap-2 bg-[#FF5B5C] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#ff4647] transition-all shadow-lg shadow-rose-100"
          >
            <Plus size={20} />
            Create New Course
          </Link>
        </header>

        {courses.length === 0 ? (
          <div className="bg-white rounded-[32px] p-20 text-center border border-slate-100">
            <BookOpen className="text-slate-200 mx-auto mb-4" size={64} />
            <h2 className="text-xl font-bold text-slate-700">No courses yet</h2>
            <p className="text-slate-400">
              Start by creating your first course.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link
                href={`/dashboard/teacher/courses/${course.id}`}
                key={course.id}
                className="group bg-white rounded-[32px] border border-slate-100 overflow-hidden hover:shadow-xl transition-all relative"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={course.thumbnail || "/api/placeholder/400/225"}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={(e) => deleteCourse(e, course.id)}
                    className="absolute top-4 left-4 p-2 bg-white/90 text-rose-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={16} />
                  </button>
                  <div className="absolute top-4 right-4 bg-[#FF5B5C] text-white px-3 py-1 rounded-full text-[10px] font-bold">
                    ID: {course.id}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-bold text-lg text-slate-800 line-clamp-1">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-slate-400 text-xs font-medium">
                    <div className="flex items-center gap-1">
                      <PlayCircle size={14} />
                      {course.modules?.length || 0} Modules
                    </div>
                    <div className="flex items-center gap-1">
                      <BarChart size={14} />
                      {course.difficulty}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                    <span className="text-xl font-black text-slate-900">
                      ${course.price || "0"}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-rose-500 bg-rose-50 px-3 py-1 rounded-lg">
                      Manage Course
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
