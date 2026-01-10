"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
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
} from "lucide-react";

export default function CourseDetailPage() {
  const { id } = useParams();
  const [openSection, setOpenSection] = useState(0);

  const course = courses.find((c) => c.id === Number(id));

  if (!course)
    return <div className="p-20 text-center font-bold">Course not found</div>;

  return (
    <>
      <div className="min-h-screen bg-[#F8F9FB] font-sans text-slate-700">
        {/* HERO SECTION - DARK PURPLE/NAVY */}
        <div className="bg-[#1D1B26] text-white pt-12 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="lg:w-2/3">
              <h1 className="text-3xl font-bold mb-4">
                The Complete Web Developer Course 2.0
              </h1>
              <p className="text-slate-400 text-sm mb-6">
                Learn Video Development by building 25 real-world web mobile
                apps using HTML, CSS, Javascript, PHP, Python.
              </p>

              <div className="flex flex-wrap gap-4 items-center text-xs mb-8">
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
                  <span>32 students enrolled</span>
                </div>
                <span className="bg-[#f4c150] text-slate-900 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                  Web Development
                </span>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="/nicole-avatar.jpg"
                  className="w-10 h-10 rounded-full border border-slate-700"
                  alt="Nicole Brown"
                />
                <div>
                  <p className="font-semibold text-sm">Nicole Brown</p>
                  <p className="text-xs text-slate-500">Instructor</p>
                </div>
                <div className="flex items-center gap-1 ml-4 text-[#f4c150]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                  <span className="text-white text-xs ml-1">4.5 (20)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8 -mt-10 pb-20">
          <div className="lg:col-span-2 space-y-6 mt-16">
            {/* OVERVIEW SECTION */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-6">Overview</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-md mb-3">Course Description</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Embark on a transformative journey into the world of AI with
                    ChatGPT, Midjourney, and prompt engineering. This course
                    will get you familiar with generative AI and the effective
                    use of ChatGPT.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-md mb-3">
                    What you&apos;ll learn
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-y-2 text-sm text-slate-500 italic">
                    {[
                      "Become a UI designer",
                      "Build & test a full website",
                      "Master Adobe XD",
                      "Create mobile app prototypes",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2 items-center">
                        <span className="text-[#ff5374] font-bold">•</span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-md mb-3">Requirements</h3>
                  <ul className="space-y-2 text-sm text-slate-500 italic">
                    <li>• You will need a copy of Adobe XD 2019 or above</li>
                    <li>• No previous design experience is needed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CURRICULUM SECTION */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Course Content</h2>
                <span className="text-xs text-slate-400">
                  92 Lectures{" "}
                  <span className="text-[#ff5374] ml-2">10:56:11</span>
                </span>
              </div>

              <div className="border border-slate-100 rounded">
                {["Getting Started", "The Brief", "Mastering Low Fidelity"].map(
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
                          className={openSection === idx ? "rotate-180" : ""}
                        />
                      </button>
                      {openSection === idx && (
                        <div className="p-4 space-y-4 bg-white">
                          {[1, 2, 3, 4, 5].map((lesson) => (
                            <div
                              key={lesson}
                              className="flex items-center justify-between text-xs"
                            >
                              <div className="flex items-center gap-3">
                                <Play size={12} className="text-[#ff5374]" />
                                <span className="text-slate-600">
                                  Lecture {lesson}: Introduction to the Course
                                </span>
                              </div>
                              <div className="flex items-center gap-4">
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

            {/* ABOUT INSTRUCTOR */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-6">About the Instructor</h2>
              <div className="flex gap-4 mb-6">
                <img
                  src="/nicole-avatar.jpg"
                  className="w-16 h-16 rounded-full"
                  alt="Nicole"
                />
                <div className="space-y-1">
                  <h4 className="font-bold text-[#4e3796]">Nicole Brown</h4>
                  <p className="text-xs text-slate-400">UX/UI Designer</p>
                  <div className="flex text-[#f4c150] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                    <span className="text-slate-900 text-[10px] ml-1 font-bold">
                      4.5
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-6 text-[10px] font-bold uppercase text-slate-500 border-b border-slate-50 pb-6">
                <div className="flex flex-col gap-1">
                  <Video size={14} className="text-[#ff5374]" /> 5 Courses
                </div>
                <div className="flex flex-col gap-1">
                  <FileText size={14} className="text-[#f4c150]" /> 511 Lesson
                </div>
                <div className="flex flex-col gap-1">
                  <Clock size={14} className="text-[#ff5374]" /> 9hr 30min
                </div>
                <div className="flex flex-col gap-1">
                  <Users size={14} className="text-[#4e3796]" /> 270,858
                  Students
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed italic">
                Nicole Brown, with 7+ years Experience. Guarantee of
                High-Quality Work. Skills: Web Design, UI Design, Mobile Design,
                Photoshop, Illustrator, HTML, CSS...
              </p>
            </div>

            {/* POST A COMMENT */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-6">Post A comment</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 bg-[#F8F9FB] border border-slate-100 rounded text-sm outline-none focus:border-pink-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 bg-[#F8F9FB] border border-slate-100 rounded text-sm outline-none focus:border-pink-300"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 bg-[#F8F9FB] border border-slate-100 rounded text-sm mb-4 outline-none focus:border-pink-300"
              />
              <textarea
                placeholder="Comments"
                rows={4}
                className="w-full p-3 bg-[#F8F9FB] border border-slate-100 rounded text-sm mb-4 outline-none focus:border-pink-300"
              />
              <button className="bg-[#4e3796] text-white px-8 py-3 rounded text-sm font-bold">
                Submit
              </button>
            </div>
          </div>

          {/* RIGHT SIDEBAR STICKY CARD */}
          <aside>
            <div className="sticky top-6 bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100">
              <div className="relative group p-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img
                    src={course.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center">
                      <Play fill="white" size={20} className="ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-[#17a2b8] text-white text-[10px] font-bold px-2 py-1 rounded">
                    2.0
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-black text-[#17a2b8]">
                    FREE
                  </span>
                  <span className="text-slate-300 line-through text-xs font-bold">
                    $99.00
                  </span>
                  <span className="text-slate-400 text-xs">50% off</span>
                </div>

                <div className="flex gap-2 mb-4">
                  <button className="flex-grow flex items-center justify-center gap-1 border border-slate-100 py-2 rounded text-[10px] font-bold text-slate-600">
                    <Heart size={12} /> Add to Wishlist
                  </button>
                  <button className="flex-grow flex items-center justify-center gap-1 border border-slate-100 py-2 rounded text-[10px] font-bold text-slate-600">
                    <Share2 size={12} /> Share
                  </button>
                </div>

                {/* PINK ENROLL BUTTON */}
                <button className="w-full bg-[#ff5374] text-white py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-[#e64a68] transition-colors mb-8 shadow-lg shadow-pink-100">
                  Enroll Now
                </button>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-slate-900 border-b border-slate-50 pb-2">
                    Includes
                  </h4>
                  <div className="space-y-3">
                    <SidebarRow
                      icon={<Video size={14} />}
                      text="11 hours on-demand video"
                    />
                    <SidebarRow
                      icon={<FileText size={14} />}
                      text="69 downloadable resources"
                    />
                    <SidebarRow
                      icon={<Clock size={14} />}
                      text="Full lifetime access"
                    />
                    <SidebarRow
                      icon={<Monitor size={14} />}
                      text="Access on mobile and TV"
                    />
                    <SidebarRow
                      icon={<MessageSquare size={14} />}
                      text="Assignments"
                    />
                    <SidebarRow
                      icon={<Award size={14} />}
                      text="Certificate of Completion"
                    />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 space-y-4">
                  <h4 className="font-bold text-sm text-slate-900">
                    Course Features
                  </h4>
                  <div className="space-y-2 text-xs text-slate-500">
                    <div className="flex justify-between">
                      <span>Enrolled:</span>{" "}
                      <span className="text-slate-800">32 students</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>{" "}
                      <span className="text-slate-800">20 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chapters:</span>{" "}
                      <span className="text-slate-800">15</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Video:</span>{" "}
                      <span className="text-slate-800">12 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Level:</span>{" "}
                      <span className="text-slate-800">Beginner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

function SidebarRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-500 text-xs">
      <span className="text-[#ff5374]">{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  );
}
