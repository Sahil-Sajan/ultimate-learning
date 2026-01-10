"use client";
import React from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const Feedback: Testimonial[] = [
  {
    id: 1,
    name: "Brenda Slaton",
    role: "Designer",
    // Make sure these names match the files in your /public folder
    image: "/cs-1.avif",
    content:
      "This mentor helped me understand concepts that I had been struggling with for weeks.",
    rating: 5,
  },
  {
    id: 2,
    name: "Adrian Dennis",
    role: "Developer",
    image: "/cs-2.webp",
    content: "I've learned so much from my mentor's personal experience.",
    rating: 5,
  },
  {
    id: 3,
    name: "Adrian Coztanza",
    role: "Architect",
    image: "/cs-3.webp",
    content:
      "The advice was useful, but I wish my mentor had been more available for follow-up discussions.",
    rating: 5,
  },
  {
    id: 4,
    name: "John Doe",
    role: "Engineer",
    image: "/cs-4.webp",
    content:
      "Great insights and a very professional approach to teaching technical skills.",
    rating: 5,
  },
 
];

const Testimonial: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fb] py-16 px-4 md:px-12 overflow-hidden relative">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-3">
          <span className="text-[#ff4d6d] font-bold text-sm tracking-wide border-b-2 border-[#ff4d6d] pb-1">
            Featured Instructors
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a]">
            Top Class & Professional Instructors
          </h2>
          <p className="text-gray-500 text-sm">
            Words from Those Who&apos;ve Experienced Real Growth
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group px-10">
          {/* Left Arrow */}
          <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all border border-gray-100">
            <ChevronLeft className="w-6 h-6 text-gray-400" />
          </button>

          {/* Right Arrow */}
          <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all border border-gray-100">
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {Feedback.map((item) => (
              <SwiperSlide key={item.id} className="pt-12 pb-8">
                <div className="bg-white rounded-2xl p-8 pt-16 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-50 text-center relative h-full">
                  {/* Floating Avatar */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24">
                    <div className="relative w-full h-full rounded-full border-[6px] border-white shadow-md overflow-hidden bg-white">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        unoptimized // Ensures local public images render without config errors
                      />
                    </div>
                    {/* Quote Icon Badge */}
                    <div className="absolute bottom-0 right-0 bg-[#ff4d6d] p-1.5 rounded-full border-4 border-white">
                      <Quote className="w-3 h-3 text-white fill-white rotate-180" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.role}</p>
                    </div>

                    <p className="text-gray-500 text-[15px] leading-relaxed italic">
                      &quot;{item.content}&quot;
                    </p>

                    {/* Star Rating */}
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
