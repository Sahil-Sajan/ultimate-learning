"use client";

import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar2 = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-100 font-sans sticky top-0 z-100 shadow-sm">
        <div className="max-w-350 mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between gap-4">

          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0">
            <div className="border-[3px] border-[#f8c12c] p-1.5 flex items-center justify-center">
              <span className="text-[#f8c12c] font-bold text-2xl leading-none">UL</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-[#1e293b] uppercase hidden sm:block">
              Ultimate<span className="font-medium p-2 text-gray-600">Learning</span>
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden xl:flex items-center gap-8 flex-1 justify-end">
            <ul className="flex items-center gap-6 text-[12px] font-bold uppercase tracking-widest text-black">
              {["Home", "Courses", "Certificate", "About Us", "Degrees", "Profile"].map(
                (item) => (
                  <li key={item} className="cursor-pointer hover:text-[#f8c12c] transition">
                    {item}
                  </li>
                )
              )}
            </ul>

            {/*  SMOOTH SEARCH */}
            <motion.div
              initial={false}
              animate={{
                width: isSearchOpen ? 300 : 44,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`flex items-center bg-gray-50 rounded-md overflow-hidden border-2 ${
                isSearchOpen ? "border-[#f8c12c]" : "border-transparent"
              }`}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 cursor-pointer shrink-0 ${
                  isSearchOpen
                    ? "text-gray-400"
                    : "border-2 border-[#f8c12c] text-[#f8c12c] hover:bg-[#f8c12c] hover:text-white"
                }`}
              >
                <Search size={18} />
              </motion.div>

              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    autoFocus
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent px-2 py-2 text-sm outline-none font-medium"
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setIsSearchOpen(false)}
                    className="mx-2 cursor-pointer text-gray-400 hover:text-black"
                  >
                    <X size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="xl:hidden flex items-center gap-3">
            <Search
              size={22}
              className="text-[#f8c12c] cursor-pointer"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <Menu
              size={28}
              className="cursor-pointer"
              onClick={() => setIsDrawerOpen(true)}
            />
          </div>
        </div>
      </nav>

      {/* MOBILE RIGHT DRAWER */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-200"
              onClick={() => setIsDrawerOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[80%] sm:w-90 bg-white z-300 shadow-2xl px-6 py-6"
            >
              <div className="flex justify-end mb-6">
                <X
                  size={28}
                  className="cursor-pointer hover:text-[#f8c12c]"
                  onClick={() => setIsDrawerOpen(false)}
                />
              </div>

              <div className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest">
                {["Home", "Courses", "Certificate", "About Us", "Degrees", "Profile"].map(
                  (item) => (
                    <div
                      key={item}
                      className="cursor-pointer hover:text-[#f8c12c]"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar2;
