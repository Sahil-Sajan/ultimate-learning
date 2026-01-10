"use client"
import React from 'react';
import { Mail, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b1219] text-gray-400 py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand and Description Column */}
          <div className="lg:col-span-1.5 space-y-6">
            <div className="flex items-center gap-2 cursor-pointer">
               {/* Custom Logo Matching Dreams LMS */}
                <div className="flex items-center gap-2 min-w-fit cursor-pointer">
              <div className="bg-yellow-500 text-white p-1.5 rounded-sm font-bold text-xl">
                <span className="border-2 border-white px-1">UL</span>
              </div>
              <div className="flex flex-col leading-none uppercase text-white">
                <span className="text-2xl font-bold">Ultimate</span>
                <span className="text-xl font-light tracking-[0.2em]">Learning</span>
              </div>
            </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-gray-400">
              Platform designed to help organizations, educators, and learners manage, deliver, and track learning and training activities.
            </p>
            <div className="flex gap-4">
              <img src="/appstore.webp" alt="App Store" className="h-10 cursor-pointer" />
              <img src="/googleplay.webp" alt="Google Play" className="h-10 cursor-pointer" />
            </div>
          </div>

          {/* Support Column */}
          <div>
            <h2 className="text-white font-bold text-lg mb-6">Support</h2>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Education</li>
              <li className="hover:text-white cursor-pointer transition-colors">Enroll a Course</li>
              <li className="hover:text-white cursor-pointer transition-colors">Orders</li>
              <li className="hover:text-white cursor-pointer transition-colors">Payments</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blogs</li>
            </ul>
          </div>

          {/* Pages Column */}
          <div>
            <h2 className="text-white font-bold text-lg mb-6">Pages</h2>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Categories</li>
              <li className="hover:text-white cursor-pointer transition-colors">Courses</li>
              <li className="hover:text-white cursor-pointer transition-colors">About us</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contacts</li>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div>
            <h2 className="text-white font-bold text-lg mb-6">Useful Links</h2>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Our values</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our advisory board</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our partners</li>
              <li className="hover:text-white cursor-pointer transition-colors">Become a partner</li>
              <li className="hover:text-white cursor-pointer transition-colors">Work at Future Learn</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h2 className="text-white font-bold text-lg mb-6">Subscribe Newsletter</h2>
            <p className="text-sm mb-6">Sign up to get updates & news.</p>
            <div className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white text-gray-800 py-3.5 pl-12 pr-4 rounded-full text-sm outline-none"
                />
              </div>
              <button className="w-full bg-yellow-500 hover:bg-yellow-500 text-white font-bold py-4 rounded-full transition-colors shadow-lg shadow-red-500/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            Copyright 2025 © <span className="text-yellow-500">UltimateLearning</span>. All right reserved.
          </div>
          
          <div className="flex gap-4 text-sm text-gray-400">
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span>\</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          </div>

          <div className="flex gap-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;