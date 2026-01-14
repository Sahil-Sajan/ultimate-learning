"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Lock, User, Eye, EyeOff, Facebook, GraduationCap } from 'lucide-react'
import { useRouter } from 'next/navigation' // 1. Import useRouter

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");

  const router = useRouter(); // 2. Initialize router

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // save signup flag
 localStorage.setItem("isSignedUp", "true");

if (password === "student") {
  localStorage.setItem("role", "student");
} else if (password === "teacher") {
  localStorage.setItem("role", "teacher");
} else {
  alert("Invalid password. Use 'student' or 'teacher'");
  return;
}

router.push("/login");
  }



  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row font-sans">
      
      {/* --- LEFT SIDE: PROMOTIONAL --- */}
      <div className="hidden md:flex md:w-1/2 bg-[#fff5f6] flex-col items-center justify-center p-12 text-center">
        <div className="relative w-full max-w-md aspect-square mb-8">
          <Image
            src="/login.jpeg"
            alt="Sign up illustration"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl font-bold text-[#0b1219] mb-4">
          Welcome to <br /> UltimateLearning Courses.
        </h2>
        <p className="text-gray-700 max-w-sm leading-relaxed">
          Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.
        </p>
        
        <div className="flex gap-2 mt-8">
          <div className="w-6 h-1 bg-[#ff4667] rounded-full"></div>
        </div>
      </div>

      {/* --- RIGHT SIDE: FORM --- */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-16 lg:p-24 bg-white relative">
        
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-[#ff4667]" strokeWidth={2.5} />
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
          <Link href="/" className="text-sm font-semibold text-[#ff4667] hover:underline">
            Back to Home
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto">
          <h1 className="text-3xl font-bold text-[#0b1219] mb-8">Sign Up</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Full Name <span className="text-red-500">*</span></label>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full border-b border-gray-200 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-sm"
                  required
                />
                <User className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Email <span className="text-red-500">*</span></label>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full border-b border-gray-200 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-sm"
                  required
                />
                <Mail className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            

            {/* Password */}
            <input 
  type={showPassword ? "text" : "password"} 
  placeholder="********" 
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full border-b border-gray-200 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-sm"
  required
/>


            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Confirm Password <span className="text-red-500">*</span></label>
              <div className="relative group">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="********" 
                  className="w-full border-b border-gray-200 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-sm"
                  required
                />
                <div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 py-2">
              <input type="checkbox" className="w-4 h-4 accent-[#ff4667] rounded cursor-pointer" required />
              <p className="text-xs text-gray-600">
                I agree with <span className="text-[#ff4667] cursor-pointer">Terms of Service</span> and <span className="text-[#ff4667] cursor-pointer">Privacy Policy</span>
              </p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-[#ff4667] hover:bg-[#e63e5c] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]">
              Sign Up <span className="text-lg">›</span>
            </button>

            <div className="relative flex items-center justify-center py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                <span className="relative bg-white px-4 text-xs text-gray-400 font-bold uppercase tracking-wider">Or</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-3 border-[1.5px] border-gray-100 py-3.5 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95"
              >
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
              Already have an account? <Link href="/login" className="text-[#ff4667] font-bold hover:underline">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;