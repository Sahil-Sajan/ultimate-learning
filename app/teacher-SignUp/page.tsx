"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  User,
  Eye,
  EyeOff,
  Facebook,
  GraduationCap,
  Briefcase,
  BookOpen,
} from "lucide-react";
import { useRouter } from "next/navigation";

const TeacherRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save signup flag and specifically set teacher role
    localStorage.setItem("isSignedUp", "true");
    localStorage.setItem("role", "teacher");
    localStorage.setItem("specialization", subject);

    // --- UPDATED NAVIGATION ---
    // Redirects to the onboarding page instead of login
    router.push("/teacher-onboarding");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row font-sans">
      
      {/* --- LEFT SIDE: TEACHER-CENTRIC PROMOTIONAL --- */}
      <div className="hidden md:flex md:w-1/2 bg-[#fff5f6] flex-col items-center justify-center p-12 text-center">
        <div className="relative w-full max-w-md aspect-square mb-8">
          {/* Ensure you have a valid image at /login.jpeg or update this src */}
          <Image
            src="/login.jpeg" 
            alt="Teacher registration illustration"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl font-bold text-[#0b1219] mb-4">
          Empower your students <br /> with UltimateLearning.
        </h2>
        <p className="text-gray-700 max-w-sm leading-relaxed">
          Join our global community of educators. Access advanced grading tools, 
          interactive classroom features, and comprehensive curriculum management.
        </p>

        <div className="flex gap-2 mt-8">
          <div className="w-2 h-1 bg-gray-300 rounded-full"></div>
          <div className="w-6 h-1 bg-[#ff4667] rounded-full"></div>
        </div>
      </div>

      {/* --- RIGHT SIDE: FORM --- */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-16 lg:p-24 bg-white relative">
        
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
              <GraduationCap
                className="w-7 h-7 text-[#ff4667]"
                strokeWidth={2.5}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black text-[#0b1219] tracking-tight uppercase">
                Ultimate
              </span>
              <span className="text-[12px] font-bold text-[#ff4667] tracking-[2px] uppercase mt-0.5">
                Learning
              </span>
            </div>
          </div>
          <Link
            href="/"
            className="text-sm font-semibold text-[#ff4667] hover:underline"
          >
            Back to Home
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-bold text-[#0b1219] mb-2 text-left">Teacher Sign Up</h1>
          <p className="text-gray-500 mb-8 text-sm">Set up your professional instructor profile.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="e.g. Dr. Sarah Connor"
                  className="w-full border-b border-gray-200 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-sm"
                  required
                />
                <User className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                Work Email <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="teacher@institution.edu"
                  className="w-full border-b border-gray-200 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-sm"
                  required
                />
                <Mail className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Subject Specialization - Teacher Specific */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                Subject Specialization <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Mathematics, Physics..."
                  className="w-full border-b border-gray-200 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-sm"
                  required
                />
                <BookOpen className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Professional ID - Teacher Specific */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                Professional License / ID
              </label>
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Enter ID number"
                  className="w-full border-b border-gray-200 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-sm"
                />
                <Briefcase className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                Create Password <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b border-gray-200 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-sm"
                  required
                />
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 py-2">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#ff4667] rounded cursor-pointer"
                required
              />
              <p className="text-xs text-gray-600">
                I agree to the{" "}
                <span className="text-[#ff4667] cursor-pointer">
                  Instructor Terms
                </span>{" "}
                and{" "}
                <span className="text-[#ff4667] cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#ff4667] hover:bg-[#e63e5c] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Start Teaching <span className="text-lg">›</span>
            </button>

            {/* Social & Divider */}
            <div className="relative flex items-center justify-center py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <span className="relative bg-white px-4 text-xs text-gray-400 font-bold uppercase tracking-wider">
                Professional Auth
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-3 border-[1.5px] border-gray-100 py-3.5 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95"
              >
                {/* Ensure you have this logo or change src */}
                <img src="/googlr-logo.jpg" alt="Google" className="w-5 h-5" />
                <span className="text-[14px] font-bold text-[#0b1219]">
                  Google
                </span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-3 border-[1.5px] border-gray-100 py-3.5 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95"
              >
                <Facebook className="w-5 h-5 text-[#1877F2] fill-current" />
                <span className="text-[14px] font-bold text-[#0b1219]">
                  Facebook
                </span>
              </button>
            </div>

            <p className="text-center mt-6 text-sm text-gray-500">
              Already have a teacher account?{" "}
              <Link
                href="/dashboard/teacher/teacher-login"
                className="text-[#ff4667] font-bold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherRegisterPage;