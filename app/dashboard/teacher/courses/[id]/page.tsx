"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  Video,
  FileText,
  ClipboardList,
  X,
  CheckCircle2,
  FileUp,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

const STORAGE_KEY = "published-courses";

export default function CourseDetailPage() {
  const params = useParams();
  const id = params?.id;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [course, setCourse] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activeLesson, setActiveLesson] = useState<any>(null);

  // Quiz States
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const allCourses = JSON.parse(saved);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const found = allCourses.find((c: any) => String(c.id) === String(id));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCourse(found);
    }
  }, [id]);

  // Reset quiz state when switching lessons
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedOption(null);
    setIsSubmitted(false);

    if (activeLesson?.type === "video" && videoRef.current) {
      videoRef.current.load();
      videoRef.current
        .play()
        .catch((err) => console.error("Playback failed:", err));
    }
  }, [activeLesson]);

  const handleQuizSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const handleDownload = (url: string) => {
    alert(`Starting download for: ${url}`);
    // In a real app: window.open(url, "_blank");
  };

  if (!course)
    return (
      <div className="p-20 text-center font-bold text-slate-400 animate-pulse">
        Loading Course Data...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b p-4 sticky top-0 z-40 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/teacher/courses"
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </Link>
          <h1 className="text-lg font-black text-slate-800">{course.title}</h1>
        </div>
        <button className="bg-[#FF5B5C] text-white px-6 py-2 rounded-xl font-bold shadow-lg shadow-rose-100 hover:bg-rose-600 transition-all">
          Edit Course
        </button>
      </header>

      <main className="max-w-7xl mx-auto p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-black text-slate-800 mb-6">
              Curriculum
            </h2>
            <div className="space-y-8">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/} 
              {course.modules?.map((module: any) => (
                <div key={module.id} className="space-y-3">
                  <h3 className="font-bold text-slate-400 uppercase text-xs tracking-widest px-2">
                    {module.title}
                  </h3>
                  {/*eslint-disable-next-line @typescript-eslint/no-explicit-any*/} 
                  {module.lessons?.map((lesson: any) => (
                    <div
                      key={lesson.id}
                      onClick={() => setActiveLesson(lesson)}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                          {lesson.type === "video" && (
                            <Video size={18} className="text-blue-500" />
                          )}
                          {lesson.type === "quiz" && (
                            <FileText size={18} className="text-emerald-500" />
                          )}
                          {lesson.type === "assignment" && (
                            <ClipboardList
                              size={18}
                              className="text-orange-500"
                            />
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-slate-700">
                            {lesson.title}
                          </p>
                          <p className="text-[10px] uppercase font-black text-slate-400">
                            {lesson.type}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-black bg-slate-900 text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        OPEN
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-[32px] p-4 border border-slate-100 shadow-sm sticky top-24">
            <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200 mb-4">
              {course.thumbnail ? (
                <Image
                  src={course.thumbnail}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">
                  No Thumbnail
                </div>
              )}
            </div>
            <div className="px-2">
              <h4 className="font-bold text-slate-800 mb-2 border-b pb-2">
                Course Description
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed italic">
                {course.description || "No description provided."}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* --- DYNAMIC MODAL --- */}
      {activeLesson && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-6 border-b flex justify-between items-center bg-white sticky top-0">
              <div>
                <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">
                  {activeLesson.type}
                </span>
                <h3 className="text-xl font-black text-slate-800">
                  {activeLesson.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLesson(null)}
                className="p-3 bg-slate-100 hover:bg-rose-500 hover:text-white rounded-2xl transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
              {/* 1. VIDEO PLAYER */}
              {activeLesson.type === "video" && (
                <div className="aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
                  <video
                    ref={videoRef}
                    className="w-full h-full"
                    controls
                    playsInline
                  >
                    <source
                      src={activeLesson.videoUrl || "/vid1.mp4"}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {/* 2. QUIZ INTERFACE */}
              {activeLesson.type === "quiz" && (
                <div className="max-w-2xl mx-auto space-y-6">
                  {activeLesson.quizData ? (
                    <div className="bg-white p-8 rounded-[32px] border shadow-sm">
                      <h4 className="text-2xl font-black text-slate-800 mb-8 leading-tight">
                        {activeLesson.quizData.question}
                      </h4>
                      <div className="grid gap-4">
                        {activeLesson.quizData.options.map(
                          (opt: string, i: number) => {
                            const isCorrect =
                              i ===
                              parseInt(activeLesson.quizData.correctAnswer);
                            const isSelected = selectedOption === i;

                            let btnClass = "border-slate-200 bg-white";
                            if (isSelected)
                              btnClass = "border-slate-900 bg-slate-50";
                            if (isSubmitted && isCorrect)
                              btnClass =
                                "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500";
                            if (isSubmitted && isSelected && !isCorrect)
                              btnClass =
                                "border-rose-500 bg-rose-50 ring-2 ring-rose-500";

                            return (
                              <button
                                key={i}
                                disabled={isSubmitted}
                                onClick={() => setSelectedOption(i)}
                                className={`w-full p-5 text-left font-bold rounded-2xl border-2 transition-all flex justify-between items-center group ${btnClass}`}
                              >
                                <span
                                  className={
                                    isSubmitted && isCorrect
                                      ? "text-emerald-700"
                                      : "text-slate-700"
                                  }
                                >
                                  {opt}
                                </span>
                                {!isSubmitted && (
                                  <div
                                    className={`w-6 h-6 rounded-full border-2 ${isSelected ? "bg-slate-900 border-slate-900" : "border-slate-200"}`}
                                  />
                                )}
                                {isSubmitted && isCorrect && (
                                  <CheckCircle2 className="text-emerald-500" />
                                )}
                                {isSubmitted && isSelected && !isCorrect && (
                                  <AlertCircle className="text-rose-500" />
                                )}
                              </button>
                            );
                          },
                        )}
                      </div>

                      {!isSubmitted ? (
                        <button
                          onClick={handleQuizSubmit}
                          disabled={selectedOption === null}
                          className="w-full mt-10 py-5 bg-slate-900 text-white rounded-2xl font-black shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95 transition-all"
                        >
                          Check Answer
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            setSelectedOption(null);
                          }}
                          className="w-full mt-10 py-5 bg-slate-200 text-slate-700 rounded-2xl font-black hover:bg-slate-300 transition-all"
                        >
                          Retry Quiz
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-20 bg-white rounded-[40px] border border-dashed border-slate-300">
                      <FileText
                        size={48}
                        className="mx-auto text-slate-200 mb-4"
                      />
                      <p className="font-bold text-slate-400 text-lg">
                        No quiz questions configured for this lesson.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* 3. ASSIGNMENT VIEW */}
              {activeLesson.type === "assignment" && (
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white p-12 rounded-[40px] border shadow-sm flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-orange-50 text-orange-500 rounded-[32px] flex items-center justify-center mb-6 shadow-inner">
                      <ClipboardList size={48} />
                    </div>
                    <h4 className="text-3xl font-black text-slate-800 mb-2">
                      Resource Download
                    </h4>
                    <p className="text-slate-500 mb-10 max-w-sm">
                      Please download the attached PDF instructions and upload
                      your completed work through the student portal.
                    </p>

                    {activeLesson.assignmentUrl ? (
                      <div className="w-full space-y-4">
                        <div className="p-4 bg-slate-50 rounded-2xl border flex items-center gap-4 text-left">
                          <div className="bg-rose-100 p-2 rounded-lg text-rose-600 font-bold text-xs">
                            PDF
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <p className="font-bold text-slate-700 truncate">
                              {activeLesson.assignmentUrl}
                            </p>
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">
                              Ready to download
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            handleDownload(activeLesson.assignmentUrl)
                          }
                          className="w-full flex items-center justify-center gap-3 py-5 bg-orange-500 text-white rounded-2xl font-black shadow-lg shadow-orange-100 hover:bg-orange-600 hover:scale-[1.02] transition-all"
                        >
                          <FileUp size={24} />
                          Download Assignment Material
                        </button>
                      </div>
                    ) : (
                      <div className="p-8 bg-slate-50 rounded-3xl border border-dashed w-full">
                        <p className="font-bold text-slate-400 italic">
                          No files attached to this assignment.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
