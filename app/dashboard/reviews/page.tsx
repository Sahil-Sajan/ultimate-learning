"use client";
import React from "react";
import { Star, MessageSquare, Edit3, Trash2 } from "lucide-react";

const REVIEWS_DATA = [
  {
    id: 1,
    course: "Information About UI/UX Design Degree",
    date: "22 Aug 2025",
    rating: 5,
    comment:
      "The course was incredibly detailed. I loved the practical assignments and the instructor's feedback was very helpful.",
  },
  {
    id: 2,
    course: "Wordpress for Beginners - Master Wordpress Quickly",
    date: "10 Aug 2025",
    rating: 4,
    comment:
      "Great for beginners! I now have my own site up and running. Some sections were a bit fast but overall excellent.",
  },
];

export default function ReviewsView() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-black text-[#1D1B26]">My Reviews</h3>

      <div className="space-y-4">
        {REVIEWS_DATA.map((rev) => (
          <div
            key={rev.id}
            className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm group"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < rev.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-200"
                      }
                    />
                  ))}
                  <span className="text-[10px] font-bold text-slate-400 uppercase ml-2 tracking-widest">
                    {rev.date}
                  </span>
                </div>
                <h4 className="text-[15px] font-black text-[#1D1B26] mb-3">
                  {rev.course}
                </h4>
                <div className="bg-slate-50 p-4 rounded-2xl relative">
                  <MessageSquare
                    size={14}
                    className="absolute -top-2 -left-2 text-[#4E3796] fill-white"
                  />
                  <p className="text-sm text-slate-500 leading-relaxed font-medium italic">
                    "{rev.comment}"
                  </p>
                </div>
              </div>

              <div className="flex md:flex-col gap-2 justify-end">
                <button className="p-3 rounded-xl bg-slate-100 text-slate-400 hover:bg-[#4E3796] hover:text-white transition-all shadow-sm">
                  <Edit3 size={16} />
                </button>
                <button className="p-3 rounded-xl bg-slate-100 text-slate-400 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
