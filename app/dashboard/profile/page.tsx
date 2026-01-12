"use client";
import React from "react";
import { Pencil } from "lucide-react";

export default function ProfileView() {
  const profileData = {
    firstName: "Ronald",
    lastName: "Richard",
    registrationDate: "16 Jan 2024, 11:15 AM",
    userName: "studentdemo",
    phoneNumber: "90154-91036",
    email: "studentdemo@example.com",
    gender: "Male",
    dob: "16 Jan 2020",
    age: "24",
    bio: "Hello! I'm Ronald Richard. I'm passionate about developing innovative software solutions, analyzing classic literature. I aspire to become a software developer, work as an editor. In my free time, I enjoy coding, reading, hiking etc.",
  };

  return (
    <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center border-b border-slate-50 pb-6 mb-8">
        <h3 className="text-2xl font-black text-[#1D1B26]">My Profile</h3>
        <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-100 transition-colors">
          <Pencil size={18} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-y-10 gap-x-6">
        <ProfileItem label="First Name" value={profileData.firstName} />
        <ProfileItem label="Last Name" value={profileData.lastName} />
        <ProfileItem
          label="Registration Date"
          value={profileData.registrationDate}
        />

        <ProfileItem label="User Name" value={profileData.userName} />
        <ProfileItem label="Phone Number" value={profileData.phoneNumber} />
        <ProfileItem label="Email" value={profileData.email} />

        <ProfileItem label="Gender" value={profileData.gender} />
        <ProfileItem label="DOB" value={profileData.dob} />
        <ProfileItem label="Age" value={profileData.age} />
      </div>

      <div className="mt-12 pt-8 border-t border-slate-50">
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
          Bio
        </h4>
        <p className="text-slate-600 leading-relaxed font-medium">
          {profileData.bio}
        </p>
      </div>
    </div>
  );
}

function ProfileItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
        {label}
      </h4>
      <p className="text-slate-700 font-bold">{value}</p>
    </div>
  );
}
