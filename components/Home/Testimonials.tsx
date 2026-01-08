"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Swiper Styles
import "swiper/css";

/* ---------------- DATA (10 ITEMS) ---------------- */
const testimonialData = [
  {
    id: 1,
    name: "Xatashi Froust",
    text: "The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the 'buzz' is on.",
    image: "/cs-1.webp",
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
  {
    id: 5,
    name: "Emma Watson",
    text: "The learning environment is inspiring and very supportive. The instructors actually care about your individual progress.",
    image: "/cg-5.webp",
  },
  {
    id: 6,
    name: "Michael Jordan",
    text: "This platform helped me sharpen my leadership skills and grow my business confidently. A true game changer for entrepreneurs.",
    image: "/cg-6.avif",
  },
  {
    id: 7,
    name: "Natalie Portman",
    text: "A perfect blend of theory and real-world application. Truly outstanding depth in every single module I took.",
    image: "/cs-2.webp",
  },
  {
    id: 8,
    name: "Robert Downey",
    text: "One of the best learning platforms I’ve ever experienced. The UI is clean and the content is top-tier industry standard.",
    image: "/cg-8.webp",
  },
  {
    id: 9,
    name: "Chris Evans",
    text: "Clear concepts, amazing instructors, and hands-on experience throughout. I feel much more prepared for my career now.",
    image: "/cs-3.webp",
  },
  {
    id: 10,
    name: "Sophia Loren",
    text: "Vous devez profiter de la vie. MasterStudy makes learning a pleasure rather than a chore. It is simply beautiful.",
    image: "/cs-1.avif",
  },
];

/* ---------------- COMPONENT ---------------- */

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#f0f4f7]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* HEADER AREA */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl font-bold text-[#2d394b] tracking-tight">
            Testimonials
          </h2>

          {/* Custom Navigation Buttons (Chevron Function) */}
          <div className="flex gap-3">
            <button className="swiper-prev-custom w-12 h-12 flex items-center justify-center border-2 border-[#ccd6e0] text-[#3858e9] rounded-sm hover:bg-[#3858e9] hover:text-white transition-all duration-300">
              <ChevronLeft size={24} />
            </button>
            <button className="swiper-next-custom w-12 h-12 flex items-center justify-center border-2 border-[#ccd6e0] text-[#3858e9] rounded-sm hover:bg-[#3858e9] hover:text-white transition-all duration-300">
              <ChevronRight size={24} />
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
          className="pb-10"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-10 md:p-14 rounded-md shadow-sm border border-gray-100 flex flex-col items-center text-center h-full">
                {/* Profile Image */}
                <div className="relative w-28 h-28 mb-8">
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
                <h4 className="text-xl font-bold text-[#2d394b] mb-6">
                  {item.name}
                </h4>

                {/* Quote Text */}
                <p className="text-[#697585] text-lg leading-relaxed mb-8 font-medium italic">
                  “{item.text}”
                </p>

                {/* Rating Stars */}
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
