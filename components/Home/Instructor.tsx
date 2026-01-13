"use client";
import React from "react";
import Image from "next/image";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Heart,
} from "lucide-react";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

interface Instructor {
  id: number;
  name: string;
  role: string;
  courses: number;
  rating: number;
  image: string;
  isFavorite?: boolean;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Joyce Pence",
    role: "Lead Designer",
    courses: 20,
    rating: 5.0,
    image:
      "/teacher1.webp",
  },
  {
    id: 2,
    name: "Edith Dorsey",
    role: "Accountant",
    courses: 15,
    rating: 5.0,
    image:
      "/teacher2.webp",
  },
  {
    id: 3,
    name: "Ruben Holmes",
    role: "Architect",
    courses: 20,
    rating: 4.8,
    image:
      "/teacher3.webp",
    isFavorite: true,
  },
  {
    id: 4,
    name: "Carol Magner",
    role: "Lead Designer",
    courses: 20,
    rating: 4.5,
    image:
      "/teacher4.webp",
  },
  {
    id: 5,
    name: "David Benitez",
    role: "Developer",
    courses: 12,
    rating: 4.9,
    image:
      "/instructor6.webp",
  },
];

const InstructorSection: React.FC = () => {
  return (
    // Reduced py-20 to py-12 to make the component shorter
    <section className="w-full bg-[#3b2d83] py-12 px-4 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Reduced mb-16 to mb-10 */}
        <div className="text-center mb-10 space-y-2">
          <span className="text-white/80 font-medium border-b border-pink-500 pb-1 text-sm">
            Featured Instructors
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Top Class & Professional Instructors
          </h2>
          <p className="text-white/70 text-sm max-w-2xl mx-auto">
            Empowering Change: Stories from Those Who Took the Leap
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group px-4">
          {/* Custom Navigation Arrows */}
          <button className="swiper-prev absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all">
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button className="swiper-next absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-all">
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-4"
          >
            {instructors.map((person) => (
              <SwiperSlide key={person.id}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-3 hover:bg-white/10 transition-all cursor-pointer h-full">
                  {/* Image Container - Aspect ratio keeps it compact */}
                  <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-3">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                      unoptimized={person.image.startsWith("http")}
                    />

                    {/* Badges */}
                    <div className="absolute top-2 left-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 fill-[#3b2d83]" />
                    </div>
                    <div className="absolute top-2 right-2 bg-white px-2 py-0.5 rounded-full text-[10px] font-bold text-gray-800 border">
                      {person.courses} Courses
                    </div>
                    <div className="absolute bottom-2 right-2 bg-white/90 p-1.5 rounded-full shadow-md">
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          person.isFavorite
                            ? "fill-pink-500 text-pink-500"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Instructor Info */}
                  <div className="space-y-0.5">
                    <h3
                      className={`text-lg font-bold truncate ${
                        person.name === "Edith Dorsey"
                          ? "text-pink-400"
                          : "text-white"
                      }`}
                    >
                      {person.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-white/60 text-xs">{person.role}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-bold text-xs">
                          {person.rating.toFixed(1)}
                        </span>
                      </div>
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

export default InstructorSection;
