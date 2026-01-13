"use client"
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Facebook, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); 

  // 3. Handle Login Logic
 const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();

  const isSignedUp = localStorage.getItem("isSignedUp");

  if (!isSignedUp) {
    alert("Please signup first");
    return;
  }

  // login success
  localStorage.setItem("isLoggedIn", "true");

  router.push("/");
};


  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans bg-white">
      
      {/* --- LEFT SIDE: PROMOTIONAL SECTION --- */}
      <div className="hidden md:flex md:w-[45%] lg:w-[50%] bg-[#fff5f6] flex-col items-center justify-center p-8 lg:p-12 text-center">
        <div className="relative w-full max-w-105 mb-10">
          <Image 
            src="/signup1.png" 
            alt="Welcome Illustration" 
            width={600} 
            height={600}
            className="w-full h-auto object-contain"
            priority 
          />
        </div>
        
        <h2 className="text-[28px] lg:text-[34px] font-bold text-black leading-tight mb-4">
          Welcome to <br /> UltimateLearning Courses.
        </h2>
        <p className="text-gray-700 text-[15px] lg:text-[16px] max-w-95 leading-relaxed mb-10">
          Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.
        </p>
        
        <div className="flex gap-2">
          <div className="w-8 h-1.5 bg-[#ff4667] rounded-full"></div>
        </div>
      </div>

      {/* --- RIGHT SIDE: LOGIN FORM SECTION --- */}
      <div className="w-full md:w-[55%] lg:w-[50%] flex flex-col px-6 py-10 md:px-16 lg:px-24 justify-center relative bg-white">
        
        <div className="absolute top-6 left-6 right-6 md:top-10 md:left-12 md:right-12 flex justify-between items-center">
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
          <Link href="/" className="text-[14px] font-bold text-[#ff4667] hover:text-[#e63e5c] transition-colors">
            Back to Home
          </Link>
        </div>

        <div className="max-w-110 w-full mx-auto mt-12 md:mt-0">
          <h1 className="text-[28px] md:text-[32px] font-bold text-[#0b1219] mt-20">Sign into Your Account</h1>
          <p className="text-gray-700 text-sm mb-10">Welcome back! Please enter your details.</p>

          {/* 4. Added onSubmit to the form */}
          <form onSubmit={handleLogin} className="space-y-7">
            <div className="space-y-2">
              <label className="text-[11px] font-extrabold text-[#333] uppercase tracking-[1px]">
                Email <span className="text-[#ff4667]">*</span>
              </label>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full border-b-[1.5px] border-gray-100 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-[15px] placeholder:text-gray-600"
                  required
                />
                <Mail className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#ff4667] w-4.5 h-4.5 transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-extrabold text-[#333] uppercase tracking-[1px]">
                Password <span className="text-[#ff4667]">*</span>
              </label>
              <div className="relative group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="********"
                  className="w-full border-b-[1.5px] border-gray-100 py-3 pr-10 outline-none focus:border-[#ff4667] transition-all text-[15px] placeholder:text-gray-600"
                  required
                />
                <div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#ff4667] cursor-pointer transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye className="w-4.5 h-4.5" /> : <EyeOff className="w-4.5 h-4.5" />}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded-md border-gray-300 accent-[#ff4667] cursor-pointer" />
                <span className="text-[14px] text-gray-700 font-medium group-hover:text-gray-900 transition-colors">Remember Me</span>
              </label>
              <a href="#" className="text-[14px] font-bold text-[#ff4667] hover:underline transition-all">Forgot Password?</a>
            </div>

            {/* 5. Removed <Link> and let the button type="submit" trigger the function */}
            <button
               type="submit" 
               className="w-full bg-[#ff4667] hover:bg-[#e63e5c] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-pink-100 flex items-center justify-center gap-2 active:scale-[0.98] mt-4"
            >
              Login <span className="text-xl leading-none">›</span>
            </button>

            <div className="relative flex items-center py-6">
              <div className="grow border-t border-gray-100"></div>
              <span className="shrink mx-4 text-gray-400 text-[12px] font-bold uppercase tracking-wider">Or</span>
              <div className="grow border-t border-gray-100"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-3 border-[1.5px] border-gray-100 py-3.5 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95">
                <Image src="/favicon2.ico" alt="Google" width={16} height={16} />
                <span className="text-[14px] font-bold text-[#0b1219]">Google</span>
              </button>
              <button type="button" className="flex items-center justify-center gap-3 border-[1.5px] border-gray-100 py-3.5 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-95">
                <Facebook className="w-5 h-5 text-[#1877F2] fill-current" />
                <span className="text-[14px] font-bold text-[#0b1219]">Facebook</span>
              </button>
            </div>

            <p className="text-center text-[15px] text-[#686f7c] pt-6">
              Don't you have an account? <Link href="/register" className="text-[#ff4667] font-extrabold hover:underline">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;