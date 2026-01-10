"use client";
import React from "react";
import {
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1219] text-gray-400 py-16 px-6 md:px-12 font-sans border-t border-white/5">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1.5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center bg-white rounded-lg w-10 h-10 shadow-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 10L12 5L2 10L12 15L22 10Z"
                    stroke="#FF5B5C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 12V17C6 17 8 19 12 19C16 19 18 17 18 17V12"
                    stroke="#FF5B5C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-white leading-none">
                  Ultimate
                  <span className="text-[#FF5B5C] font-bold uppercase text-sm block mt-0.5">
                    Learning
                  </span>
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-xs text-gray-400">
              Platform designed to help organizations, educators, and learners
              manage, deliver, and track learning and training activities.
            </p>

            <div className="flex gap-4">
              <img
                src="/appstore.webp"
                alt="App Store"
                className="h-10 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
              />
              <img
                src="/googleplay.webp"
                alt="Google Play"
                className="h-10 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-white font-bold text-lg mb-6">Support</h2>
            <ul className="space-y-4 text-sm">
              {["Education", "Enroll a Course", "Orders", "Payments", "Blogs"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-[#FF5B5C] cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h2 className="text-white font-bold text-lg mb-6">Pages</h2>
            <ul className="space-y-4 text-sm">
              {["Categories", "Courses", "About us", "FAQ", "Contacts"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-[#FF5B5C] cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-white font-bold text-lg mb-6">Useful Links</h2>
            <ul className="space-y-4 text-sm">
              {[
                "Our values",
                "Our advisory board",
                "Our partners",
                "Become a partner",
                "Work at Future Learn",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#FF5B5C] cursor-pointer transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-white font-bold text-lg mb-6">
              Subscribe Newsletter
            </h2>
            <p className="text-sm mb-4">Sign up to get updates & news.</p>

            <div className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white text-gray-800 py-3 pl-12 pr-4 rounded-full text-sm outline-none"
                />
              </div>

              <button className="w-full bg-[#FF5B5C] hover:bg-[#ff4646] text-white font-bold py-3 rounded-full transition-all shadow-lg active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            Copyright 2025 ©{" "}
            <span className="text-[#FF5B5C] font-semibold">
              UltimateLearning
            </span>
            . All rights reserved.
          </div>

          <div className="flex gap-4 text-sm">
            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
            <span className="text-gray-700">|</span>
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
          </div>

          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter, Youtube, Linkedin].map(
              (Icon, idx) => (
                <div
                  key={idx}
                  className="p-2 border border-gray-800 rounded-full hover:bg-[#FF5B5C] hover:border-[#FF5B5C] hover:text-white transition-all cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
