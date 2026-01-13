"use client";
import React from "react";
import { Pencil, Briefcase } from "lucide-react";

export default function ProfileView() {
  const profileData = {
    firstName: "Emma",
    lastName: "Watson",
    registrationDate: "16 Jan 2024, 11:15 AM",
    userName: "bestteacher",
    phoneNumber: "90154-91036",
    email: "bestteacher@example.com",
    gender: "female",
    dob: "16 Jan 1995",
    age: "29",
    bio: "Hello! I'm Emma Watson, a dedicated educator with a deep-seated passion for the art of programming and logic. I specialize in breaking down complex technical concepts into digestible, innovative lessons that empower students to build their own digital worlds. My goal is to bridge the gap between theoretical computer science and real-world application, fostering a community of creative problem-solvers.",
  };

  const education = [
    {
      degree: "BCA - Bachelor of Computer Applications",
      institution: "International University",
      period: "(2004 - 2010)",
    },
    {
      degree: "MCA - Master of Computer Application",
      institution: "International University",
      period: "(2010 - 2012)",
    },
    {
      degree: "Design Communication Visual",
      institution: "International University",
      period: "(2012 - 2015)",
    },
  ];

  const experience = [
    {
      role: "Web Design & Development Team Leader",
      company: "Creative Agency",
      period: "(2013 - 2016)",
    },
    {
      role: "Project Manager",
      company: "Jobcy Technology Pvt.Ltd",
      period: "(Present)",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* --- BASIC INFORMATION SECTION --- */}
      <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
        <div className="flex justify-between items-center border-b border-slate-50 pb-6 mb-8">
          <h3 className="text-2xl font-black text-[#1D1B26]">My Profile</h3>
          <button className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-100 transition-colors">
            <Pencil size={18} />
          </button>
        </div>

        <div className="space-y-10">
          <section>
            <h4 className="text-sm font-bold text-[#1D1B26] mb-6">
              Basic Information
            </h4>
            <div className="grid md:grid-cols-3 gap-y-10 gap-x-6">
              <ProfileItem label="First Name" value={profileData.firstName} />
              <ProfileItem label="Last Name" value={profileData.lastName} />
              <ProfileItem
                label="Registration Date"
                value={profileData.registrationDate}
              />
              <ProfileItem label="User Name" value={profileData.userName} />
              <ProfileItem
                label="Phone Number"
                value={profileData.phoneNumber}
              />
              <ProfileItem label="Email" value={profileData.email} />
              <ProfileItem label="Gender" value={profileData.gender} />
              <ProfileItem label="DOB" value={profileData.dob} />
              <ProfileItem label="Age" value={profileData.age} />
            </div>
          </section>

          <section className="pt-8 border-t border-slate-50">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
              Bio
            </h4>
            <p className="text-slate-600 leading-relaxed font-medium">
              {profileData.bio}
            </p>
          </section>
        </div>
      </div>

      {/* --- EDUCATION SECTION --- */}
      <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
        <h4 className="text-sm font-bold text-[#1D1B26] mb-8">Education</h4>
        <div className="space-y-8 relative before:absolute before:left-1.75 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#22C55E]" />
              <h5 className="text-[15px] font-black text-[#1D1B26]">
                {edu.degree}
              </h5>
              <p className="text-sm text-slate-500 font-medium">
                {edu.institution} -{" "}
                <span className="text-slate-400">{edu.period}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- EXPERIENCE SECTION --- */}
      <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
        <h4 className="text-sm font-bold text-[#1D1B26] mb-8">Experience</h4>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="flex items-start gap-5 p-5 rounded-3xl hover:bg-slate-50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#FF5364]/10 group-hover:text-[#FF5364] transition-all">
                <Briefcase size={20} />
              </div>
              <div>
                <h5 className="text-[15px] font-black text-[#1D1B26]">
                  {exp.role}
                </h5>
                <p className="text-sm text-slate-500 font-medium">
                  {exp.company} -{" "}
                  <span className="text-slate-400">{exp.period}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
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
      <p className="text-slate-700 font-bold text-[15px]">{value}</p>
    </div>
  );
}
