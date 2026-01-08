"use client";
import React from "react";
import { motion } from "framer-motion";

const InquirySection = () => {
  return (
    <section className="relative w-full min-h-[45vh] py-12 flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(8,10,20,0.75), rgba(8,10,20,0.85)), url('/cg-4.webp')`,
        }}
      />

      <div className="text-black relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white max-w-xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 border border-white/15">
              Free Demo Class
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5">
              Upgrade Your Skills with <br />
              <span className="text-[#f8c12c]">Expert Guidance</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed max-w-lg">
              Learn through structured courses, interactive quizzes, and expert
              mentorship. Track progress, gain certifications, and grow faster
              with practical learning.
            </p>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-300">
              <div>
                <span className="text-[#f8c12c] font-bold text-lg">20k+</span>
                <p>Students</p>
              </div>
              <div>
                <span className="text-[#f8c12c] font-bold text-lg">150+</span>
                <p>Courses</p>
              </div>
              <div>
                <span className="text-[#f8c12c] font-bold text-lg">4.9★</span>
                <p>Ratings</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.35)] p-7 md:p-8 w-full max-w-md mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Get Started Today
            </h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              Fill the form and our team will contact you
            </p>

            <form className="space-y-4">
              {[
                {
                  label: "Your Name",
                  type: "text",
                  placeholder: "John Auranzeb",
                },
                {
                  label: "Email Address",
                  type: "email",
                  placeholder: "john@email.com",
                },
                {
                  label: "Phone Number",
                  type: "tel",
                  placeholder: "+92 300 0000000",
                },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#f8c12c]/40 outline-none transition text-sm"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                  Course
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#f8c12c]/40 outline-none transition text-sm">
                  <option value="">Select a Course</option>
                  <option>Graphic & Web Design</option>
                  <option>Software Development</option>
                  <option>Music & Creative Arts</option>
                </select>
              </div>

              <button className="w-full bg-[#f8c12c] hover:bg-[#eab308] text-black font-bold py-3 rounded-xl uppercase tracking-widest text-xs transition-all active:scale-95 shadow-lg mt-4">
                Request Free Lesson
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
