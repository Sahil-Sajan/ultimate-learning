"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const QUIZ_ATTEMPTS_DATA = [
  {
    id: 1,
    title: "Information About UI/UX Design Degree",
    questions: 5,
    active: true,
  },
  {
    id: 2,
    title: "Learn JavaScript and Express to become a Expert",
    questions: 10,
    active: false,
  },
  {
    id: 3,
    title: "Introduction to Python Programming",
    questions: 8,
    active: false,
  },
  {
    id: 4,
    title: "Build Responsive Websites with HTML5 and CSS3",
    questions: 5,
    active: false,
  },
  {
    id: 5,
    title: "Information About Photoshop Design Degree",
    questions: 10,
    active: false,
  },
  {
    id: 6,
    title: "C# Developers Double Your Coding with Visual Studio",
    questions: 7,
    active: false,
  },
];

export default function MyQuizAttemptsView() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-black text-[#1D1B26]">My Quiz Attempts</h3>

      <div className="space-y-4">
        {QUIZ_ATTEMPTS_DATA.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white p-6 rounded-[24px] border border-slate-100 flex items-center justify-between group hover:border-[#FF5364]/30 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div>
              <h4 className="text-[15px] font-black text-[#1D1B26] group-hover:text-[#4E3796] transition-colors">
                {quiz.title}
              </h4>
              <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
                Number of Questions :{" "}
                {quiz.questions < 10 ? `0${quiz.questions}` : quiz.questions}
              </p>
            </div>

            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                quiz.active
                  ? "bg-[#FF5364] text-white shadow-lg shadow-[#FF5364]/20"
                  : "bg-slate-100 text-slate-400 group-hover:bg-[#1D1B26] group-hover:text-white"
              }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
