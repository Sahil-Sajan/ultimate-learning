"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import "swiper/css";

const testimonialData = [
  {
    id: 1,
    name: "Xatashi Froust",
    text: "The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the 'buzz' is on.",
    image: "/cg-5.webp",
  },
  {
    id: 2,
    name: "Linda Green",
    text: "It is no exaggeration to say this MasterStudy experience was transformative—both professionally and personally. This workshop will long remain a high point of my life.",
    image: "/cs-1.avif",
  },
  {
    id: 3,
    name: "Abigail Johnson",
    text: "I couldn't imagine myself settling down so quickly without the experience I gained through the Foundation Program. Highly recommended!",
    image: "/cs-3.webp",
  },
  {
    id: 4,
    name: "Daniel Craig",
    text: "The courses were extremely practical and well-structured. I landed my dream job within 3 months of finishing the certification.",
    image: "/cg-4.webp",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* HEADER AREA */}
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-10 bg-yellow-500 rounded-full" />{" "}
              {/* Professional accent line */}
              <h2 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight">
                Testimonials
              </h2>
            </div>
            <p className="text-black text-lg font-medium ml-4">
              What our happy students say about their experience
            </p>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex gap-3 ml-4 md:ml-0">
            <button className="swiper-prev-custom w-14 h-14 flex items-center justify-center border-2 border-gray-100 text-black rounded-full hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-all duration-300 shadow-sm">
              <ChevronLeft size={28} />
            </button>
            <button className="swiper-next-custom w-14 h-14 flex items-center justify-center border-2 border-gray-100 text-black rounded-full hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-all duration-300 shadow-sm">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* SWIPER SLIDER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            prevEl: ".swiper-prev-custom",
            nextEl: ".swiper-next-custom",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-10 flex! items-stretch!"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="bg-white p-10 md:p-14 rounded-md shadow-sm border border-gray-100 flex flex-col items-center text-center h-full">
                {/* Profile Image */}
                <div className="relative w-28 h-28 mb-8 shrink-0">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-50 shadow-inner overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h4 className="text-xl font-bold text-black mb-6">
                  {item.name}
                </h4>

                <p className="text-black text-lg leading-relaxed mb-8 font-medium italic grow">
                  “{item.text}”
                </p>

                <div className="flex gap-1 mt-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill="#f8c12c"
                      className="text-[#f8c12c]"
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
