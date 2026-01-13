"use client";
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Facebook } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  // State to track password input
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Redirection logic based on password value
    if (password === "student") {
      router.push("/dashboard/student");
    } else if (password === "teacher") {
      router.push("/dashboard/teacher");
    } else {
      // Optional: default redirect if password doesn't match specific roles
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans bg-white">
      {/* --- LEFT SIDE: PROMOTIONAL SECTION --- */}
      <div className="hidden md:flex md:w-[45%] lg:w-[50%] bg-[#fff5f6] flex-col items-center justify-center p-8 lg:p-12 text-center">
        <div className="relative w-full max-w-105 mb-10">
          <img
            src="/signup1.png"
            alt="Welcome Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        <h2 className="text-[28px] lg:text-[34px] font-bold text-black leading-tight mb-4">
          Welcome to <br /> Ultimate Learning Courses.
        </h2>
        <p className="text-[#686f7c] text-[15px] lg:text-[16px] max-w-95 leading-relaxed mb-10">
          Platform designed to help organizations, educators, and learners
          manage, deliver, and track learning and training activities.
        </p>

        <div className="flex gap-2">
          <div className="w-8 h-1.5 bg-[#ff4667] rounded-full"></div>
        </div>
      </div>

      {/* --- RIGHT SIDE: LOGIN FORM SECTION --- */}
      <div className="w-full md:w-[55%] lg:w-[50%] flex flex-col px-6 py-10 md:px-16 lg:px-24 justify-center relative bg-white">
        <div className="absolute top-6 left-6 right-6 md:top-10 md:left-12 md:right-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#ff4667] p-1.5 rounded-lg shadow-sm">
              <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center text-[10px] text-white font-bold">
                UL
              </div>
            </div>
            <span className="text-xl font-bold text-[#0b1219] tracking-tight">
              Ultimate
              <span className="text-[#ff4667] text-[10px] font-bold align-top ml-0.5 uppercase">
                Learning
              </span>
            </span>
          </div>
          <Link
            href="/"
            className="text-[14px] font-bold text-[#ff4667] hover:text-[#e63e5c] transition-colors"
          >
            Back to Home
          </Link>
        </div>

        <div className="max-w-110 w-full mx-auto mt-12 md:mt-0">
          <h1 className="text-[28px] md:text-[32px] font-bold text-[#0b1219] mt-10">
            Sign into Your Account
          </h1>
          <p className="text-gray-400 text-sm mb-10">
            Welcome back! Please enter your details.
          </p>

          <form onSubmit={handleLogin} className="space-y-7">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-[11px] font-extrabold text-[#333] uppercase tracking-[1px]">
                Email <span className="text-[#ff4667]">*</span>
              </label>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border-b-[1.5px] border-gray-100 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-[15px] placeholder:text-gray-300"
                  required
                />
                <Mail className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#ff4667] w-4.5 h-4.5 transition-colors" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[11px] font-extrabold text-[#333] uppercase tracking-[1px]">
                Password <span className="text-[#ff4667]">*</span>
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b-[1.5px] border-gray-100 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-[15px] placeholder:text-gray-300"
                  required
                />
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#ff4667] cursor-pointer transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye className="w-4.5 h-4.5" />
                  ) : (
                    <EyeOff className="w-4.5 h-4.5" />
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-md border-gray-300 accent-[#ff4667] cursor-pointer"
                />
                <span className="text-[14px] text-[#686f7c] font-medium group-hover:text-gray-900 transition-colors">
                  Remember Me
                </span>
              </label>
              <a
                href="#"
                className="text-[14px] font-bold text-[#ff4667] hover:underline transition-all"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff4667] hover:bg-[#e63e5c] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-pink-100 flex items-center justify-center gap-2 active:scale-[0.98] mt-4"
            >
              Login <span className="text-xl leading-none">›</span>
            </button>

            {/* Divider */}
            <div className="relative flex items-center py-6">
              <div className="grow border-t border-gray-100"></div>
              <span className="shrink mx-4 text-gray-400 text-[12px] font-bold uppercase tracking-wider">
                Or
              </span>
              <div className="grow border-t border-gray-100"></div>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-3 border-[1.5px] border-gray-100 py-3.5 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95"
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4"
                />
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

            <p className="text-center text-[15px] text-[#686f7c] pt-6">
              Don't you have an account?{" "}
              <Link
                href="/register"
                className="text-[#ff4667] font-extrabold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
