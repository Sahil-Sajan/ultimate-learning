"use client";

import React from 'react';
import { 
  MapPin, Phone, Mail, 
  Facebook, Twitter, Instagram, Linkedin, Youtube, Globe, Github, MailOpen
} from 'lucide-react';

export default function ProfessionalFooter() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175438676147!2d-73.76787!3d40.70427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2612b7a9f7e5d%3A0x6b1f24d9c79e6f!2sSaint%20Albans%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000";

  return (
    <footer className="relative w-full bg-white font-sans">
      {/* 1. MAP SECTION */}
      <div className="relative h-112.5 w-full bg-[#e5e3df]">
        <iframe 
          src={mapUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'contrast(1.1) brightness(0.95)' }} 
          allowFullScreen 
          loading="lazy"
        />

        {/* 2. CONTACT BAR - Aligned & Professional Height/Width */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-6xl px-6 z-20">
          <div className="bg-[#003865] text-white flex flex-col lg:flex-row items-center justify-between px-8 py-10 lg:py-14 shadow-2xl rounded-sm">
            
            {/* Left Title - Fixed Width for consistency */}
            <div className="lg:w-1/4 mb-8 lg:mb-0">
              <h3 className="text-2xl font-bold tracking-tight leading-tight">
                Contact <br className="hidden lg:block"/> Information
              </h3>
            </div>

            {/* Right Info Section - Using flex-1 to fill space evenly */}
            <div className="lg:w-3/4 flex flex-col md:flex-row justify-between items-start w-full gap-10">
              
              {/* Address */}
              <div className="flex items-start gap-4 group flex-1">
                <a 
                  href="http://googleusercontent.com/maps.google.com/7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#ff4b4b] h-12 w-12 rounded-full flex items-center justify-center shrink-0 shadow-lg transition-all hover:bg-[#e03a3a] hover:scale-110"
                >
                  <MapPin size={20} fill="white" className="text-[#ff4b4b]" />
                </a>
                <div className="text-[14px] leading-relaxed">
                  <p className="font-bold mb-1 uppercase tracking-wide">Our Address</p>
                  <p className="text-white/70">9569 8th Avenue, <br/> Saint Albans, NY 11412</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group flex-1">
                <a 
                  href="tel:+18885253551"
                  className="bg-[#ff4b4b] h-12 w-12 rounded-full flex items-center justify-center shrink-0 shadow-lg transition-all hover:bg-[#e03a3a] hover:scale-110"
                >
                  <Phone size={20} fill="white" className="text-[#ff4b4b]" />
                </a>
                <div className="text-[14px] leading-relaxed">
                  <p className="font-bold mb-1 uppercase tracking-wide">Phone Number</p>
                  <p className="text-white/70">+1 (888) 525-3551 <br/> +1 (819) 777-3788</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group flex-1">
                <a 
                  href="mailto:info@Master.edu"
                  className="bg-[#ff4b4b] h-12 w-12 rounded-full flex items-center justify-center shrink-0 shadow-lg transition-all hover:bg-[#e03a3a] hover:scale-110"
                >
                  <Mail size={20} fill="white" className="text-[#ff4b4b]" />
                </a>
                <div className="text-[14px] leading-relaxed">
                  <p className="font-bold mb-1 uppercase tracking-wide">Online Support</p>
                  <p className="text-white/70">Skype: Masterstudy <br/> info@Master.edu</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 3. FOOTER LINKS SECTION - Matches Width with Contact Bar */}
      <div className="pt-48 pb-20 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        <div>
          <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-[11px] border-b border-slate-100 pb-2 inline-block">Courses</h4>
          <ul className="space-y-4 text-[13px] text-slate-900">
            <li className="hover:text-amber-500 cursor-pointer transition-colors">• Filmmaking</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">• Logical Thinking</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">• Italian</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">• Graphic & Web Design</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-[11px] border-b border-slate-100 pb-2 inline-block">Browse</h4>
          <ul className="space-y-4 text-[13px] text-slate-900">
            <li className="hover:text-amber-500 cursor-pointer transition-colors">• How to Design a Logo</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">• Photography for Beginners</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">• Mobile Apps Development</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">• The Secrets of Body Language</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-[11px] border-b border-slate-100 pb-2 inline-block">Press Links</h4>
          <ul className="space-y-4 text-[13px] text-slate-900">
            <li className="hover:text-amber-500 cursor-pointer transition-colors">• About Us</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">• Contact Us</li>
            <li className="hover:text-amber-500 cursor-pointer transition-colors">• Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-800 mb-8 uppercase tracking-widest text-[11px] border-b border-slate-100 pb-2 inline-block">Social Network</h4>
          <div className="flex flex-wrap gap-6 text-white">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube, Globe, Github, MailOpen].map((Icon, i) => (
              <div key={i} className="bg-[#43c0cf] p-2.5 rounded-full hover:bg-[#003865] hover:-translate-y-1 cursor-pointer transition-all duration-300">
                <Icon size={15} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. COPYRIGHT BAR */}
      <div className="bg-[#002e52] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 tracking-widest uppercase">
          <p>© Copyright 2026. MasterStudy Theme by StylemixThemes</p>
          <div className="flex gap-8 font-bold text-white/60 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
            <span className="hover:text-white cursor-pointer transition-colors">Courses</span>
            <span className="hover:text-white cursor-pointer transition-colors">Blog</span>
            <span className="hover:text-white cursor-pointer transition-colors">Gallery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}