"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, BookOpen, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCFD] px-6 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-pink-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />

      <div className="text-center relative z-10">
        {/* Animated 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[120px] md:text-[180px] font-black text-[#FF5364] leading-none tracking-tighter select-none">
            404
          </h1>
          <div className="w-20 h-1.5 bg-[#1D2026] mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D2026] mt-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 mt-4 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable. Let's get you back on track!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            href="/" 
            className="flex items-center gap-2 bg-[#1D2026] hover:bg-[#FF5364] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-pink-100 group"
          >
            <Home size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            Back to Home
          </Link>
          
          <Link 
            href="/courses" 
            className="flex items-center gap-2 bg-white border border-gray-200 text-[#1D2026] hover:border-[#FF5364] hover:text-[#FF5364] px-8 py-4 rounded-full font-bold transition-all"
          >
            <BookOpen size={18} />
            Browse Courses
          </Link>
        </motion.div>

        {/* Secondary Links */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-gray-400 mb-4">Try searching for something else:</p>
          <div className="flex justify-center gap-6 text-sm font-semibold text-gray-600">
            <Link href="/help" className="hover:text-[#FF5364] transition-colors">Help Center</Link>
            <Link href="/contact" className="hover:text-[#FF5364] transition-colors">Contact Support</Link>
            <Link href="/faq" className="hover:text-[#FF5364] transition-colors">FAQs</Link>
          </div>
        </motion.div>
      </div>

      {/* Little Floating "Error" Tag */}
      <div className="absolute top-10 left-10 hidden lg:block -rotate-12">
        
      </div>
    </div>
  );
}