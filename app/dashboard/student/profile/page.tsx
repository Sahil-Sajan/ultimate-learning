"use client";
import React, { useEffect, useState } from "react";
import { Pencil, Mail, MapPin } from "lucide-react";

export default function ProfileView() {
  // 1. Profile State
  const [user, setUser] = useState({
    firstName: "Ronald",
    lastName: "Richard",
    email: "student@example.com",
    role: "Student",
    phone: "+92 300 1234567",
    gender: "Male",
    dob: "16 Jan 2002",
    address: "Hyderabad, Pakistan",
    bio: "Passionate about developing innovative software solutions. I aspire to become a software developer and work on large-scale applications.",
    avatar: "" // Empty string will trigger the Initials fallback
  });

  // 2. Sync with Login Data
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser((prev) => ({
        ...prev,
        firstName: parsedUser.name.split(" ")[0] || prev.firstName,
        lastName: parsedUser.name.split(" ")[1] || prev.lastName,
        email: parsedUser.email || prev.email,
        role: parsedUser.role || prev.role,
      }));
    }
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      
      {/* --- Main Card --- */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        
        {/* 1. Header Section: Avatar & Primary Info */}
        <div className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-slate-100">
          
          {/* Avatar (Simple & Clean) */}
          <div className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-slate-100 border-4 border-white shadow-sm flex items-center justify-center shrink-0">
            <span className="text-3xl font-bold text-slate-400">
              {user.firstName[0]}{user.lastName[0]}
            </span>
          </div>

          {/* User Info Stack */}
          <div className="grow space-y-2">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
                {user.firstName} {user.lastName}
              </h1>
              <span className="w-fit px-3 py-1 rounded-full bg-[#ff4667]/10 text-[#ff4667] text-xs font-bold uppercase tracking-wide">
                {user.role}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <Mail size={16} /> {user.email}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> {user.address}
              </div>
            </div>
          </div>

          {/* Edit Button (Top Right) */}
          <button className="shrink-0 flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-[#ff4667] transition-all">
            <Pencil size={14} />
            Edit Profile
          </button>
        </div>

        {/* 2. Details Grid */}
        <div className="p-8 md:p-10">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
            Personal Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <InfoField label="First Name" value={user.firstName} />
            <InfoField label="Last Name" value={user.lastName} />
            <InfoField label="Phone" value={user.phone} />
            
            <InfoField label="Date of Birth" value={user.dob} />
            <InfoField label="Gender" value={user.gender} />
            <InfoField label="Location" value={user.address} />
          </div>

          {/* 3. Bio Section */}
          <div className="pt-8 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Bio
            </h3>
            <p className="text-slate-600 leading-relaxed text-[15px] max-w-3xl">
              {user.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Reusable Component for Fields ---
function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
        {label}
      </span>
      <span className="text-[15px] font-semibold text-slate-800">
        {value}
      </span>
    </div>
  );
}