"use client";
import React, { useState, useEffect } from "react";
import { 
  Pencil, 
  Mail,  
  Briefcase, 
  GraduationCap, 
  Clock, 
} from "lucide-react";

export default function TeacherProfileView() {
  // 1. Initial State (Emma Watson Data)
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Watson",
    userName: "bestteacher",
    email: "bestteacher@example.com",
    role: "Teacher",
    phoneNumber: "90154-91036",
    gender: "male",
    dob: "16 Jan 1995",
    age: "29",
    registrationDate: "16 Jan 2024",
    bio: "Hello! I'm Ahmed, a dedicated educator with a deep-seated passion for the art of programming and logic. I specialize in breaking down complex technical concepts into digestible, innovative lessons.",
  });

  // 2. Education Data (Static for now, can be moved to state if needed)
  const education = [
    {
      degree: "BCA - Bachelor of Computer Applications",
      institution: "International University",
      period: "2004 - 2010",
    },
    {
      degree: "MCA - Master of Computer Application",
      institution: "International University",
      period: "2010 - 2012",
    },
    {
      degree: "Design Communication Visual",
      institution: "International University",
      period: "2012 - 2015",
    },
  ];

  // 3. Experience Data
  const experience = [
    {
      role: "Web Design & Development Team Leader",
      company: "Creative Agency",
      period: "2013 - 2016",
    },
    {
      role: "Project Manager",
      company: "Jobcy Technology Pvt.Ltd",
      period: "Present",
    },
  ];

  // 4. Sync with Login Data (Optional: Overrides Emma if a real user logs in)
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // Only override if the logged-in user is actually a teacher
      if(parsedUser.role === 'teacher') {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setUser((prev) => ({
            ...prev,
            firstName: parsedUser.name.split(" ")[0] || prev.firstName,
            lastName: parsedUser.name.split(" ")[1] || prev.lastName,
            email: parsedUser.email || prev.email,
            role: parsedUser.role || prev.role,
          }));
      }
    }
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      
      {/* --- Main Card --- */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        
        {/* --- Header Section --- */}
        <div className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 border-b border-slate-100">
          
          {/* Avatar */}
          <div className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-slate-50 border-4 border-white shadow-sm flex items-center justify-center shrink-0">
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
              <span className="w-fit px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] text-xs font-bold uppercase tracking-wide">
                {user.role}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <Mail size={16} /> {user.email}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} /> Joined: {user.registrationDate}
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <button className="shrink-0 flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-[#22C55E] transition-all">
            <Pencil size={14} />
            Edit Profile
          </button>
        </div>

        {/* --- Body Section --- */}
        <div className="p-8 md:p-10 space-y-10">
          
          {/* 1. Personal Information */}
          <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12">
              <InfoField label="First Name" value={user.firstName} />
              <InfoField label="Last Name" value={user.lastName} />
              <InfoField label="User Name" value={user.userName} />
              <InfoField label="Phone Number" value={user.phoneNumber} />
              <InfoField label="Email" value={user.email} />
              <InfoField label="Gender" value={user.gender} />
              <InfoField label="Date of Birth" value={user.dob} />
              <InfoField label="Age" value={user.age} />
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-slate-100"></div>

          {/* 2. Education Section */}
          <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <GraduationCap size={16} /> Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {edu.institution} • <span className="text-slate-400">{edu.period}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-slate-100"></div>

          {/* 3. Experience Section */}
          <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Briefcase size={16} /> Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                    <Briefcase size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {exp.role}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {exp.company} • <span className="text-slate-400">{exp.period}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-slate-100"></div>

          {/* 4. Bio Section */}
          <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Bio
            </h3>
            <p className="text-slate-600 leading-relaxed text-[15px] max-w-4xl font-medium">
              {user.bio}
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

// --- Reusable Component for Fields ---
function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
        {label}
      </span>
      <span className="text-[15px] font-bold text-slate-800 border-b border-transparent hover:border-slate-200 transition-colors w-fit pb-0.5">
        {value}
      </span>
    </div>
  );
}