"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  Video,
  FileText,
  ClipboardList,
  Plus,
  Trash2,
  Image as ImageIcon,
  X,
  CheckCircle2,
  AlertCircle,
  FileUp,
} from "lucide-react";

const STORAGE_KEY = "published-courses";

// --- CUSTOM MODAL COMPONENTS ---
const Modal = ({ isOpen, onClose, title, children }: any) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-[32px] w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="p-6 border-b flex justify-between items-center bg-slate-50/50">
          <h3 className="font-black text-slate-800 uppercase tracking-tight">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-50 rounded-full text-slate-400 hover:text-rose-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default function CreateCoursePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State for Course Data
  const [courseData, setCourseData] = useState<any>(null);

  // State for UI/Modals
  const [activeModal, setActiveModal] = useState<
    "lesson" | "quiz" | "assignment" | "success" | null
  >(null);
  const [pendingLesson, setPendingLesson] = useState<any>(null);
  const [tempLessonTitle, setTempLessonTitle] = useState("");

  // Quiz State
  const [quizQuestion, setQuizQuestion] = useState("");
  const [quizOptions, setQuizOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  useEffect(() => {
    setCourseData({
      title: "",
      description: "",
      category: "Marketing",
      price: "",
      difficulty: "Beginner",
      thumbnail: null,
      modules: [{ id: Date.now().toString(), title: "Module 1", lessons: [] }],
    });
  }, []);

  // --- LOGIC HANDLERS ---
  const addModule = () => {
    setCourseData({
      ...courseData,
      modules: [
        ...courseData.modules,
        {
          id: Date.now().toString(),
          title: `Module ${courseData.modules.length + 1}`,
          lessons: [],
        },
      ],
    });
  };

  const removeModule = (moduleId: string) => {
    setCourseData({
      ...courseData,
      modules: courseData.modules.filter((m: any) => m.id !== moduleId),
    });
  };

  const openLessonModal = (moduleId: string, type: string) => {
    setPendingLesson({ moduleId, type });
    setActiveModal(type === "quiz" ? "quiz" : "lesson");
    setTempLessonTitle("");
  };

  const confirmAddLesson = () => {
    if (!tempLessonTitle) return;
    const newLesson = {
      id: Date.now().toString(),
      type: pendingLesson.type,
      title: tempLessonTitle,
      videoUrl: null,
      quizData: null,
      assignmentUrl: null,
    };

    setCourseData({
      ...courseData,
      modules: courseData.modules.map((m: any) =>
        m.id === pendingLesson.moduleId
          ? { ...m, lessons: [...m.lessons, newLesson] }
          : m,
      ),
    });
    setActiveModal(null);
  };

  const saveQuiz = () => {
    const newLesson = {
      id: Date.now().toString(),
      type: "quiz",
      title: tempLessonTitle || "Course Quiz",
      quizData: {
        question: quizQuestion,
        options: quizOptions,
        correct: correctAnswer,
      },
    };

    setCourseData({
      ...courseData,
      modules: courseData.modules.map((m: any) =>
        m.id === pendingLesson.moduleId
          ? { ...m, lessons: [...m.lessons, newLesson] }
          : m,
      ),
    });
    setActiveModal(null);
    setQuizQuestion("");
    setQuizOptions(["", "", "", ""]);
  };

  const handleVideoUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    moduleId: string,
    lessonId: string,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setCourseData({
        ...courseData,
        modules: courseData.modules.map((m: any) =>
          m.id === moduleId
            ? {
                ...m,
                lessons: m.lessons.map((l: any) =>
                  l.id === lessonId ? { ...l, videoUrl: videoUrl } : l,
                ),
              }
            : m,
        ),
      });
    }
  };

  const handleAssignmentUpload = (
    e: any,
    moduleId: string,
    lessonId: string,
  ) => {
    const file = e.target.files[0];
    if (file) {
      setCourseData({
        ...courseData,
        modules: courseData.modules.map((m: any) =>
          m.id === moduleId
            ? {
                ...m,
                lessons: m.lessons.map((l: any) =>
                  l.id === lessonId ? { ...l, assignmentUrl: file.name } : l,
                ),
              }
            : m,
        ),
      });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size < 1000000) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setCourseData({ ...courseData, thumbnail: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = () => {
    if (!courseData.title || !courseData.thumbnail) return;
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const shortId = Math.floor(1000 + Math.random() * 9000).toString();
    const courseToSave = {
      ...courseData,
      id: shortId,
      publishedAt: new Date().toISOString(),
    };
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([courseToSave, ...existing]),
    );
    setActiveModal("success");
  };

  if (!courseData) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10 text-slate-800">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/teacher/courses"
              className="p-3 bg-white rounded-2xl border shadow-sm hover:text-rose-500 transition-all"
            >
              <ChevronLeft size={20} />
            </Link>
            <h1 className="text-3xl font-black tracking-tight">
              Create Course
            </h1>
          </div>
          <button
            onClick={handlePublish}
            className="bg-[#FF5B5C] text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-rose-100 hover:scale-105 transition-all"
          >
            Publish Course
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-[40px] border shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-400 uppercase tracking-widest">
                General Info
              </h2>
              <input
                type="text"
                placeholder="What's the course title?"
                className="w-full p-5 bg-slate-50 border rounded-2xl outline-none focus:ring-2 ring-rose-100 transition-all font-bold text-lg"
                value={courseData.title}
                onChange={(e) =>
                  setCourseData({ ...courseData, title: e.target.value })
                }
              />
              <textarea
                placeholder="Describe what students will learn..."
                className="w-full p-5 bg-slate-50 border rounded-2xl h-40 outline-none focus:ring-2 ring-rose-100 transition-all"
                value={courseData.description}
                onChange={(e) =>
                  setCourseData({ ...courseData, description: e.target.value })
                }
              />
            </section>

            <section className="bg-white p-8 rounded-[40px] border shadow-sm space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-slate-400 uppercase tracking-widest">
                  Curriculum
                </h2>
                <button
                  onClick={addModule}
                  className="text-xs font-black text-rose-500 bg-rose-50 px-6 py-2 rounded-xl hover:bg-rose-100 transition-all"
                >
                  + Add Module
                </button>
              </div>

              <div className="space-y-6">
                {courseData.modules.map((module: any) => (
                  <div
                    key={module.id}
                    className="border bg-slate-50/50 rounded-[32px] p-6 space-y-4"
                  >
                    <div className="flex justify-between items-center">
                      <input
                        className="font-black text-xl bg-transparent border-none outline-none focus:text-rose-500"
                        value={module.title}
                        onChange={(e) =>
                          setCourseData({
                            ...courseData,
                            modules: courseData.modules.map((m: any) =>
                              m.id === module.id
                                ? { ...m, title: e.target.value }
                                : m,
                            ),
                          })
                        }
                      />
                      <button
                        onClick={() => removeModule(module.id)}
                        className="p-2 text-slate-300 hover:text-rose-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    <div className="space-y-3">
                      {module.lessons.map((lesson: any) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between p-4 bg-white rounded-2xl border shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            {lesson.type === "video" ? (
                              <Video size={18} className="text-blue-500" />
                            ) : lesson.type === "quiz" ? (
                              <FileText
                                size={18}
                                className="text-emerald-500"
                              />
                            ) : (
                              <ClipboardList
                                size={18}
                                className="text-orange-500"
                              />
                            )}
                            <span className="font-bold">{lesson.title}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            {lesson.type === "video" && (
                              <>
                                <input
                                  type="file"
                                  accept="video/*"
                                  className="hidden"
                                  id={`vid-${lesson.id}`}
                                  onChange={(e) =>
                                    handleVideoUpload(e, module.id, lesson.id)
                                  }
                                />
                                <label
                                  htmlFor={`vid-${lesson.id}`}
                                  className="text-[10px] bg-slate-100 px-3 py-2 rounded-lg font-black uppercase cursor-pointer hover:bg-slate-200 transition-colors"
                                >
                                  {lesson.videoUrl
                                    ? "Change Video"
                                    : "Upload Video"}
                                </label>
                              </>
                            )}

                            {lesson.type === "assignment" && (
                              <>
                                <input
                                  type="file"
                                  accept=".pdf"
                                  id={`pdf-${lesson.id}`}
                                  className="hidden"
                                  onChange={(e) =>
                                    handleAssignmentUpload(
                                      e,
                                      module.id,
                                      lesson.id,
                                    )
                                  }
                                />
                                <label
                                  htmlFor={`pdf-${lesson.id}`}
                                  className="flex items-center gap-2 text-[10px] font-black uppercase bg-slate-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-200"
                                >
                                  <FileUp size={14} />{" "}
                                  {lesson.assignmentUrl
                                    ? "PDF Linked"
                                    : "Upload PDF"}
                                </label>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {["video", "quiz", "assignment"].map((type) => (
                        <button
                          key={type}
                          onClick={() => openLessonModal(module.id, type)}
                          className="flex-1 py-3 bg-white border rounded-xl text-[10px] font-black uppercase text-slate-400 hover:text-rose-500 hover:border-rose-200 transition-all"
                        >
                          + {type}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-white p-8 rounded-[40px] border shadow-sm space-y-6 sticky top-10">
              <label className="text-xs font-bold text-slate-400 uppercase">
                Cover Thumbnail
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer border-2 border-dashed rounded-[32px] aspect-video bg-slate-50 flex flex-col items-center justify-center hover:border-rose-300 transition-all overflow-hidden relative"
              >
                {courseData.thumbnail ? (
                  <img
                    src={courseData.thumbnail}
                    className="w-full h-full object-cover"
                    alt="thumbnail"
                  />
                ) : (
                  <div className="text-center text-slate-300">
                    <ImageIcon size={40} className="mx-auto mb-2" />
                    <p className="text-[10px] font-bold uppercase">
                      Upload Cover
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="space-y-4">
                <select
                  className="w-full p-4 bg-slate-50 border rounded-2xl font-bold outline-none"
                  value={courseData.difficulty}
                  onChange={(e) =>
                    setCourseData({ ...courseData, difficulty: e.target.value })
                  }
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <input
                  type="number"
                  placeholder="Price ($)"
                  className="w-full p-4 bg-slate-50 border rounded-2xl font-bold outline-none"
                  value={courseData.price}
                  onChange={(e) =>
                    setCourseData({ ...courseData, price: e.target.value })
                  }
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* --- MODALS --- */}

      {/* 1. Standard Lesson Title Modal */}
      <Modal
        isOpen={activeModal === "lesson"}
        title={`New ${pendingLesson?.type}`}
        onClose={() => setActiveModal(null)}
      >
        <input
          autoFocus
          placeholder="Enter Title..."
          className="w-full p-4 bg-slate-100 rounded-2xl outline-none font-bold mb-6"
          value={tempLessonTitle}
          onChange={(e) => setTempLessonTitle(e.target.value)}
        />
        <button
          onClick={confirmAddLesson}
          className="w-full py-4 bg-rose-500 text-white rounded-2xl font-black"
        >
          Add Lesson
        </button>
      </Modal>

      {/* 2. Quiz Builder Modal */}
      <Modal
        isOpen={activeModal === "quiz"}
        title="Quiz Creator"
        onClose={() => setActiveModal(null)}
      >
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          <input
            placeholder="Quiz Title (e.g. Midterm)"
            className="w-full p-4 bg-slate-100 rounded-2xl outline-none font-bold"
            value={tempLessonTitle}
            onChange={(e) => setTempLessonTitle(e.target.value)}
          />
          <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100">
            <label className="text-[10px] font-black text-rose-500 uppercase">
              Question
            </label>
            <input
              placeholder="Enter the question..."
              className="w-full bg-transparent outline-none font-bold mt-1"
              value={quizQuestion}
              onChange={(e) => setQuizQuestion(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            {quizOptions.map((opt, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${correctAnswer === i ? "bg-emerald-50 border-emerald-200" : "bg-white"}`}
              >
                <input
                  type="radio"
                  checked={correctAnswer === i}
                  onChange={() => setCorrectAnswer(i)}
                />
                <input
                  placeholder={`Option ${i + 1}`}
                  className="flex-1 bg-transparent outline-none text-sm"
                  value={opt}
                  onChange={(e) => {
                    const copy = [...quizOptions];
                    copy[i] = e.target.value;
                    setQuizOptions(copy);
                  }}
                />
              </div>
            ))}
          </div>
          <button
            onClick={saveQuiz}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black mt-4"
          >
            Save Quiz Content
          </button>
        </div>
      </Modal>

      {/* 3. Success Modal */}
      <Modal
        isOpen={activeModal === "success"}
        title="Published!"
        onClose={() => router.push("/dashboard/teacher/courses")}
      >
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 size={40} />
          </div>
          <p className="font-bold text-slate-600">
            Your course is now live and visible to students.
          </p>
          <button
            onClick={() => router.push("/dashboard/teacher/courses")}
            className="w-full py-4 bg-rose-500 text-white rounded-2xl font-black"
          >
            Go to Dashboard
          </button>
        </div>
      </Modal>
    </div>
  );
}
