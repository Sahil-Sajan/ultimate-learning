import React from "react";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  ChevronDown,
} from "lucide-react";

const TopNav = () => {
  return (
    <nav className="w-full bg-[#2d323f] text-gray-300 py-3 px-6 text-sm font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Side: Language Selector */}
        <div className="flex items-center">
          <button className="flex items-center space-x-1 hover:text-white transition-colors">
            <span>English</span>
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Right Side: Links and Socials */}
        <div className="flex items-center space-x-8">
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link
              href="/courses"
              className="hover:text-white transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/formats"
              className="hover:text-white transition-colors"
            >
              Course Formats
            </Link>
            <Link
              href="/memberships"
              className="hover:text-white transition-colors"
            >
              Memberships
            </Link>

            {/* Add Course with "HOT" badge */}
            <div className="relative">
              <Link
                href="/add-course"
                className="hover:text-white transition-colors"
              >
                Add Course
              </Link>
              <span className="absolute -top-4 -right-2 bg-pink-500 text-[10px] text-white px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">
                Hot
              </span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="h-4 w-px bg-gray-600"></div>

          {/* Social Icons Section */}
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              <Twitter size={18} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Facebook size={18} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
