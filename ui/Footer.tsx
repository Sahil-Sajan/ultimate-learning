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
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 py-16 px-6 md:px-12 font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center bg-white rounded-lg w-10 h-10 shadow-sm border border-gray-100">
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
                <span className="text-xl font-bold text-gray-900 leading-none">
                  Ultimate{" "}
                  <span className="text-[#FF5B5C] font-bold uppercase text-sm block mt-0.5">
                    Learning
                  </span>
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-500 max-w-sm">
              Platform designed to help organizations, educators, and learners
              manage, deliver, and track learning and training activities
              seamlessly.
            </p>

            {/* FIXED STORE LOGOS SECTION */}
            <div className="flex items-center gap-11">
              <div className="relative cursor-pointer hover:opacity-100 opacity-90 transition-opacity">
                <Image
                  width={135}
                  height={44}
                  src="/apple-as-logo.svg"
                  alt="Download on App Store"
                  className="w-auto h-10 object-contain"
                  priority
                />
              </div>
              <div className="relative cursor-pointer hover:opacity-100 opacity-90 transition-opacity">
                <Image
                  width={135}
                  height={40}
                  src="/google-ps-logo.svg"
                  alt="Get it on Google Play"
                  className="w-auto h-10 object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Section */}
          <div className="lg:col-span-2">
            <h2 className="text-gray-900 font-bold text-base mb-6">Support</h2>
            <ul className="space-y-3 text-sm">
              {[
                "Education",
                "Enroll a Course",
                "Orders",
                "Payments",
                "Blogs",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#FF5B5C] cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-gray-900 font-bold text-base mb-6">Company</h2>
            <ul className="space-y-3 text-sm">
              {["About Us", "Categories", "Courses", "FAQ", "Contacts"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-[#FF5B5C] cursor-pointer transition-colors duration-200"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h2 className="text-gray-900 font-bold text-base mb-6">
              Stay Updated
            </h2>
            <p className="text-sm mb-4 text-gray-500">
              Subscribe to get the latest news and updates.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FF5B5C] transition-colors w-4 h-4" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white border border-gray-200 text-gray-800 py-3 pl-12 pr-4 rounded-full text-sm outline-none focus:border-[#FF5B5C] focus:ring-1 focus:ring-[#FF5B5C] transition-all placeholder:text-gray-400"
                />
              </div>

              <button className="w-full bg-[#FF5B5C] hover:bg-[#ff4646] text-white font-semibold py-3 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 text-sm">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500 text-center md:text-left">
            © 2025{" "}
            <span className="text-gray-900 font-semibold">
              UltimateLearning
            </span>
            . All rights reserved.
          </div>

          <div className="flex gap-6 text-sm">
            <span className="hover:text-[#FF5B5C] cursor-pointer transition-colors">
              Terms & Conditions
            </span>
            <span className="hover:text-[#FF5B5C] cursor-pointer transition-colors">
              Privacy Policy
            </span>
          </div>

          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube, Linkedin].map(
              (Icon, idx) => (
                <div
                  key={idx}
                  className="p-2 text-gray-400 border border-gray-200 rounded-full hover:bg-[#FF5B5C] hover:border-[#FF5B5C] hover:text-white transition-all cursor-pointer group"
                >
                  <Icon
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
