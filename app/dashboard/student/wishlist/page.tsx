"use client";
import React from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";

const WISHLIST_DATA = [
  {
    id: 1,
    image: "/couse-1.webp",
    instructor: "David Benitez",
    title: "Information About UI/UX Design Degree",
    rating: "4.9",
    reviews: "200",
    price: "120",
    category: "Design",
  },
  {
    id: 2,
    image: "/cs-3.webp",
    instructor: "Ana Reyes",
    title: "Wordpress for Beginners - Master Wordpress Quickly",
    rating: "4.4",
    reviews: "180",
    price: "140",
    category: "Wordpress",
  },
];

export default function WishlistView() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-black text-[#1D1B26]">My Wishlist</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WISHLIST_DATA.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm group"
          >
            <div className="h-44 bg-slate-200 relative overflow-hidden">
              {/* Active Heart for Wishlist */}
              <div className="absolute top-4 left-4 bg-white p-2 rounded-full z-10 cursor-pointer shadow-md">
                <Heart size={14} className="fill-[#FF5364] text-[#FF5364]" />
              </div>
              <img
                src={course.image}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt=""
              />
              <span className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-lg text-[10px] font-black text-[#4E3796] uppercase shadow-sm">
                {course.category}
              </span>
            </div>

            <div className="p-6">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">
                {course.instructor}
              </p>
              <h5 className="font-black text-[#1D1B26] text-sm leading-tight mb-3 line-clamp-2 h-10">
                {course.title}
              </h5>

              <div className="flex items-center gap-1 mb-4">
                <Star size={12} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-black text-[#1D1B26]">
                  {course.rating}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  ({course.reviews})
                </span>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                <span className="text-lg font-black text-[#FF5364]">
                  ${course.price}
                </span>
                <button className="bg-[#1D1B26] text-white p-2.5 rounded-xl hover:bg-[#4E3796] transition-all">
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
