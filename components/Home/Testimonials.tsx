"use client";
import React from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper Styles
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css/navigation";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "swiper/css/pagination";
interface TestimonialData {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const Feedback: TestimonialData[] = [
  {
    id: 1,
    name: "Brenda Slaton",
    role: "Designer",
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
    content:
      "I've learned so much from my mentor's personal experience. Truly a professional approach.",
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
      "Great insights and a very professional approach to teaching technical skills in modern tech.",
    rating: 5,
  },
  {
    id: 5,
    name: "John Doe",
    role: "Engineer",
    image: "/cs-4.webp",
    content:
      "Great insights and a very professional approach to teaching technical skills in modern tech.",
    rating: 5,
  },
  {
    id: 6,
    name: "John Doe",
    role: "Engineer",
    image: "/cs-4.webp",
    content:
      "Great insights and a very professional approach to teaching technical skills in modern tech.",
    rating: 5,
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fb] py-20 px-4 md:px-12 overflow-hidden relative">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-[#ff4d6d] font-bold text-sm tracking-widest uppercase pb-1 border-b-2 border-[#ff4d6d]">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a]">
            What Our Students Say
          </h2>
          <p className="text-gray-500 text-lg">
            Words from those who&apos;ve experienced real growth
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group px-4 md:px-6">
          {/* Navigation Buttons */}
          <button className="testimonial-prev absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#ff4d6d] hover:text-white transition-all duration-300 border border-gray-100 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button className="testimonial-next absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#ff4d6d] hover:text-white transition-all duration-300 border border-gray-100 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
            <ChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: true,
              },
            }}
            className="overflow-hidden! py-12 px-4"
          >
            {Feedback.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="bg-white rounded-3xl p-8 pt-24 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 text-center relative flex flex-col h-full min-h-87.5 transition-transform duration-300 hover:-translate-y-2 mx-1 my-1">
                  
                  {/* Floating Avatar Container - LOWERED POSITION */}
                  {/* Changed -top-12 to -top-6 to bring it downward */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24">
                    <div className="relative w-full h-full rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    {/* Quote Icon Badge */}
                    <div className="absolute bottom-0 right-0 bg-[#ff4d6d] p-2 rounded-full border-4 border-white shadow-lg">
                      <Quote className="w-3 h-3 text-white fill-white rotate-180" />
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="flex flex-col grow items-center justify-between space-y-6">
                    <div className="space-y-2 mt-2">
                      <h4 className="text-xl font-bold text-gray-900 tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-[#ff4d6d] text-sm font-semibold uppercase tracking-wider">
                        {item.role}
                      </p>
                    </div>

                    <p className="text-gray-600 text-[16px] leading-relaxed italic grow max-w-xs mx-auto">
                      &quot;{item.content}&quot;
                    </p>

                    {/* Star Rating */}
                    <div className="flex justify-center gap-1.5 pt-4 border-t border-gray-50 w-full">
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