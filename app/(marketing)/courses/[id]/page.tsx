"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link"; // Added for navigation
import { courses } from "../page";

import {
  Star,
  Clock,
  Play,
  Video,
  Users,
  FileText,
  Monitor,
  Award,
  ChevronDown,
  MessageSquare,
  Share2,
  Heart,
  X,
  Check,
} from "lucide-react";

export default function CourseDetailPage() {
  const { id } = useParams();
  const [openSection, setOpenSection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const course = courses.find((c) => c.id === Number(id));

  if (!course)
    return <div className="p-20 text-center font-bold">Course not found</div>;

  return (
    <>
      {/* --- ENROLLMENT MODAL (UPDATED FOR FREE ACCESS) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-white w-full max-w-[500px] max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-500 p-2"
            >
              <X size={24} />
            </button>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-[32px] font-bold text-slate-900 leading-tight mb-4 pr-8">
                Enroll in this Course for Free
              </h2>
              <p className="text-slate-700 text-sm md:text-[15px] mb-8">
                Get full access to "{course.title}" and start learning today.
              </p>

              <div className="space-y-6">
                {[
                  {
                    h: "100% Free Access",
                    p: "Watch lectures, try assignments, and more without any cost.",
                  },
                  {
                    h: "No Subscription Required",
                    p: "Simply enroll and start learning. No credit card needed.",
                  },
                  {
                    h: "Lifetime Access",
                    p: "Learn at your own pace with permanent access to materials.",
                  },
                  {
                    h: "Certificate",
                    p: "Earn a certificate to share on your resume and LinkedIn.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 md:gap-4">
                    <Check size={18} className="text-blue-600 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm md:text-[16px]">
                        {item.h}
                      </h4>
                      <p className="text-slate-600 text-xs md:text-[14px]">
                        {item.p}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                {/* Updated Button to Link for Checkout */}
                <Link
                  href="/checkout"
                  className="inline-block text-center w-full md:w-auto bg-[#0056D2] text-white px-8 py-3.5 rounded-lg font-bold text-base hover:bg-[#00419e] transition-colors mb-6"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-[#F8F9FB] font-sans text-slate-700">
        {/* HERO SECTION */}
        <div className="bg-[#1D1B26] text-white pt-8 pb-16 md:pt-12 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="lg:w-2/3">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                {course.title || "The Complete Web Developer Course 2.0"}
              </h1>
              <p className="text-slate-400 text-sm md:text-base mb-6 max-w-2xl">
                Learn Video Development by building 25 real-world web mobile
                apps using HTML, CSS, Javascript, PHP, Python.
              </p>

              <div className="flex flex-wrap gap-4 items-center text-[11px] md:text-xs mb-8">
                <div className="flex items-center gap-1.5">
                  <Video size={14} className="text-[#ff5374]" />
                  <span>12+ Lesson</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#f4c150]" />
                  <span>9hr 30min</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={14} className="text-[#ff5374]" />
                  <span>32 Enrolled</span>
                </div>
                <span className="bg-[#f4c150] text-slate-900 px-2 py-0.5 rounded font-bold uppercase">
                  Web Development
                </span>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="/professor.avif"
                  className="w-10 h-10 rounded-full border border-slate-700"
                  alt="Nicole"
                />
                <div>
                  <p className="font-semibold text-sm">Nicole Brown</p>
                  <div className="flex items-center gap-1 text-[#f4c150]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                    <span className="text-white text-[10px] ml-1">
                      4.5 (20)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-8 pb-20">
          {/* RIGHT SIDEBAR */}
          <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-6 bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100">
              <div className="hidden md:block relative group p-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src="/blog8.webp"
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center">
                      <Play fill="white" size={20} className="ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 md:px-6 md:pb-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl md:text-3xl font-black text-[#17a2b8]">
                    FREE
                  </span>
                  <span className="text-slate-300 line-through text-sm font-bold">
                    $99.00
                  </span>
                </div>

                <div className="flex gap-2 mb-4">
                  <button className="grow flex items-center justify-center gap-1 border border-slate-100 py-2.5 rounded text-[10px] font-bold text-slate-600">
                    <Heart size={12} /> Wishlist
                  </button>
                  <button className="grow flex items-center justify-center gap-1 border border-slate-100 py-2.5 rounded text-[10px] font-bold text-slate-600">
                    <Share2 size={12} /> Share
                  </button>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#ff5374] text-white py-4 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-[#e64a68] transition-all mb-6 shadow-lg shadow-pink-100"
                >
                  Enroll Now
                </button>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-slate-900 border-b border-slate-50 pb-2">
                    Includes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    <SidebarRow
                      icon={<Video size={14} />}
                      text="11 hours on-demand video"
                    />
                    <SidebarRow
                      icon={<FileText size={14} />}
                      text="69 resources"
                    />
                    <SidebarRow
                      icon={<Clock size={14} />}
                      text="Full lifetime access"
                    />
                    <SidebarRow
                      icon={<Award size={14} />}
                      text="Certificate of Completion"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6 order-2 lg:order-1 lg:mt-16">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-6">Overview</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-md mb-3">Course Description</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Embark on a transformative journey into the world of AI with
                    ChatGPT, Midjourney, and prompt engineering.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-md mb-3">
                    What you&apos;ll learn
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 text-sm text-slate-500 italic">
                    {[
                      "Become a UI designer",
                      "Build & test a website",
                      "Master Adobe XD",
                      "Create prototypes",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-center">
                        <span className="text-[#ff5374] font-bold">•</span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-100">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
                <h2 className="text-xl font-bold">Course Content</h2>
                <span className="text-xs text-slate-400">
                  92 Lectures{" "}
                  <span className="text-[#ff5374] ml-2">10:56:11</span>
                </span>
              </div>
              <div className="border border-slate-100 rounded overflow-hidden">
                {["Getting Started", "The Brief", "Low Fidelity"].map(
                  (section, idx) => (
                    <div
                      key={idx}
                      className="border-b border-slate-100 last:border-0"
                    >
                      <button
                        onClick={() =>
                          setOpenSection(openSection === idx ? -1 : idx)
                        }
                        className="w-full flex items-center justify-between p-4 bg-[#F8F9FB] text-sm font-bold"
                      >
                        <span>{section}</span>
                        <ChevronDown
                          size={16}
                          className={
                            openSection === idx
                              ? "rotate-180 transition-transform"
                              : "transition-transform"
                          }
                        />
                      </button>
                      {openSection === idx && (
                        <div className="p-4 space-y-4 bg-white animate-in slide-in-from-top-2 duration-200">
                          {[1, 2, 3].map((lesson) => (
                            <div
                              key={lesson}
                              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                            >
                              <div className="flex items-center gap-3">
                                <Play size={12} className="text-[#ff5374]" />
                                <span className="text-slate-600">
                                  Lecture {lesson}: Introduction
                                </span>
                              </div>
                              <div className="flex items-center justify-between sm:justify-end gap-4">
                                <button className="text-[#4e3796] font-semibold">
                                  Preview
                                </button>
                                <span className="text-slate-400">12:30</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-6">About the Instructor</h2>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/professor.avif"
                  className="w-16 h-16 rounded-full object-cover"
                  alt="Nicole"
                />
                <div>
                  <h4 className="font-bold text-[#4e3796]">Nicole Brown</h4>
                  <p className="text-xs text-slate-400">UX/UI Designer</p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-[10px] font-bold uppercase text-slate-500 border-y border-slate-50 py-6">
                <div className="flex flex-col items-center text-center gap-1">
                  <Video size={14} className="text-[#ff5374]" /> 5 Courses
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <FileText size={14} className="text-[#f4c150]" /> 511 Lesson
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <Clock size={14} className="text-[#ff5374]" /> 9hr 30min
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                  <Users size={14} className="text-[#4e3796]" /> 270k Students
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed italic">
                Nicole Brown, with 7+ years Experience. Guarantee of
                High-Quality Work.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-6">Post A comment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 bg-[#F8F9FB] border border-slate-100 rounded text-sm outline-none w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 bg-[#F8F9FB] border border-slate-100 rounded text-sm outline-none w-full"
                />
              </div>
              <textarea
                placeholder="Comments"
                rows={4}
                className="w-full p-3 bg-[#F8F9FB] border border-slate-100 rounded text-sm mb-4 outline-none"
              />
              <button className="w-full md:w-auto bg-[#4e3796] text-white px-8 py-3 rounded text-sm font-bold">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-500 text-xs">
      <span className="text-[#ff5374] shrink-0">{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  );
}
