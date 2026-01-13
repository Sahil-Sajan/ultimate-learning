"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, BookOpen, GraduationCap } from "lucide-react";

const floating = {
  animate: {
    y: [0, -20, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFCFD] px-6 relative overflow-hidden">

      {/* Floating Background Blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-pink-50 rounded-full blur-3xl opacity-60"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      
      {/* Floating Icons Background */}
<motion.div
  className="absolute top-20 left-16 text-[#FF5364]/10 z-0"
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
>
  <BookOpen size={64} />
</motion.div>

<motion.div
  className="absolute bottom-32 left-24 text-gray-400/10 z-0"
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
>
  <GraduationCap size={72} />
</motion.div>

<motion.div
  className="absolute top-32 right-24 text-blue-400/10 z-0"
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
>
  <Home size={56} />
</motion.div>

<motion.div
  className="absolute bottom-24 right-40 text-pink-400/10 z-0"
  animate={{ y: [0, -20, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
>
  <BookOpen size={48} />
</motion.div>


      {/* Main Content */}
      <div className="text-center relative z-10">

        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-[80px] md:text-[160px] font-black text-[#FF5364] leading-none tracking-tighter select-none"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            404
          </motion.h1>
          <div className="w-20 h-1.5 bg-black mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-black mt-4">
            Oops! Page Not Found
          </h2>
        </motion.div>

        {/* Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="flex items-center gap-2 bg-black hover:bg-[#FF5364] text-white px-8 py-4 mt-4 rounded-full font-bold transition-all shadow-lg"
            >
              <Home size={12} />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-gray-600 mb-4">
            Try searching for something else:
          </p>
          <div className="flex justify-center gap-6 text-sm font-semibold text-gray-600">
            <Link href="/help" className="hover:text-[#FF5364] transition-colors">Help Center</Link>
            <Link href="/contact" className="hover:text-[#FF5364] transition-colors">Contact Support</Link>
            <Link href="/faq" className="hover:text-[#FF5364] transition-colors">FAQs</Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
