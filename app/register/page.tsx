"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Lock, User, Eye, EyeOff, Facebook } from 'lucide-react'

const RegisterPage = () => {
  // States to toggle visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Static Registration Successful!");
    window.location.href = "/login"; 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row font-sans">
      
      {/* --- LEFT SIDE: PROMOTIONAL --- */}
      <div className="hidden md:flex md:w-1/2 bg-[#fff5f6] flex-col items-center justify-center p-12 text-center">
        <div className="relative w-full max-w-md aspect-square mb-8">
          <Image 
            src="/signup1.png" 
            alt="Sign up illustration"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl font-bold text-[#0b1219] mb-4">
          Welcome to <br /> UltimateLearning Courses.
        </h2>
        <p className="text-gray-500 max-w-sm leading-relaxed">
          Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.
        </p>
        
        <div className="flex gap-2 mt-8">
          <div className="w-6 h-1 bg-[#ff4667] rounded-full"></div>
          
        </div>
      </div>

      {/* --- RIGHT SIDE: FORM --- */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-16 lg:p-24 bg-white relative">
        
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#ff4667] rounded-lg flex items-center justify-center text-white font-bold">UL</div>
            <span className="text-xl font-bold text-[#0b1219]">Ultimate<span className="text-[#ff4667] text-xs align-top">Learning</span></span>
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
              <div className="relative">
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
              <div className="relative">
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
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Password <span className="text-red-500">*</span></label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="********" 
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
              <div className="flex gap-1 mt-2">
                <div className="h-1 w-full bg-gray-100 rounded-full"></div>
                <div className="h-1 w-full bg-gray-100 rounded-full"></div>
                <div className="h-1 w-full bg-gray-100 rounded-full"></div>
                <div className="h-1 w-full bg-gray-100 rounded-full"></div>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Confirm Password <span className="text-red-500">*</span></label>
              <div className="relative">
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
              <input type="checkbox" className="w-4 h-4 accent-[#ff4667] rounded" required />
              <p className="text-xs text-gray-600">
                I agree with <span className="text-[#ff4667] cursor-pointer">Terms of Service</span> and <span className="text-[#ff4667] cursor-pointer">Privacy Policy</span>
              </p>
            </div>

            <button type="submit" className="w-full bg-[#ff4667] hover:bg-[#e63e5c] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
              Login <span className="text-lg">›</span>
            </button>

            <div className="relative flex items-center justify-center py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
                <span className="relative bg-white px-4 text-xs text-gray-400">Or</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium">
                <Image src="/favicon2.ico" alt="Google" width={18} height={18} /> Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium">
                <Facebook className="text-[#1877F2] w-5 h-5 fill-current" /> Facebook
              </button>
            </div>

            <p className="text-center mt-6 text-sm text-gray-500">
              Already have an account? <Link href="/login" className="text-[#ff4667] font-bold">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage