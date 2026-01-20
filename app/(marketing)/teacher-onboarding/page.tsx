"use client";
import React, { useState } from "react";
import { 
  Code, Palette, Briefcase, 
  ArrowRight, Check, ChevronLeft,
  Layout, PenTool, Monitor
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import router from "next/router";
import Link from "next/link";

// --- TYPES ---
type Step = "welcome" | "domain" | "details" | "finish";
type DomainType = "programming" | "design" | "business" | null;

const TeacherOnboarding = () => {
  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [selectedDomain, setSelectedDomain] = useState<DomainType>(null);
  const [details, setDetails] = useState<string[]>([]);

  // --- ANIMATION VARIANTS ---
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // --- HANDLERS ---
  const handleDomainSelect = (domain: DomainType) => {
    setSelectedDomain(domain);
    // Clear previous details when switching domains
    setDetails([]); 
    setTimeout(() => setCurrentStep("details"), 300); // Auto advance slightly delayed
  };

  const handleDetailToggle = (item: string) => {
    if (details.includes(item)) {
      setDetails(details.filter(i => i !== item));
    } else {
      setDetails([...details, item]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      
      {/* Progress Bar (Visible only during wizard) */}
      {currentStep !== "welcome" && currentStep !== "finish" && (
        <div className="absolute top-10 w-full max-w-md bg-gray-200 h-2 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#FF5B5C] transition-all duration-500 ease-out" 
            style={{ width: currentStep === "domain" ? "33%" : "66%" }} 
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        
        {/* --- 1. WELCOME SCREEN --- */}
        {currentStep === "welcome" && (
          <motion.div 
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center max-w-xl"
          >
            <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-8 border border-gray-100">
              <span className="text-4xl">👋</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome, Instructor!</h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              We're thrilled to have you. Let's set up your profile to help us understand what you'd like to teach. It only takes a minute.
            </p>
            <button 
              onClick={() => setCurrentStep("domain")}
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-lg font-semibold px-10 py-4 rounded-full shadow-xl transition-all active:scale-95"
            >
              Share Your Knowledge
            </button>
          </motion.div>
        )}

        {/* --- 2. DOMAIN SELECTION --- */}
        {currentStep === "domain" && (
          <motion.div 
            key="domain"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-2xl"
          >
            <button onClick={() => setCurrentStep("welcome")} className="text-gray-400 hover:text-gray-600 mb-6 flex items-center gap-1 text-sm font-bold uppercase tracking-wider">
              <ChevronLeft size={16} /> Back
            </button>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-2">What is your expertise?</h2>
            <p className="text-gray-500 mb-8">Select the category that best fits your teaching style.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SelectionCard 
                icon={<Code size={32} />} 
                title="Development" 
                desc="Python, Web, DevOps"
                selected={selectedDomain === "programming"}
                onClick={() => handleDomainSelect("programming")}
              />
              <SelectionCard 
                icon={<Palette size={32} />} 
                title="Design" 
                desc="UI/UX, 3D, Graphic"
                selected={selectedDomain === "design"}
                onClick={() => handleDomainSelect("design")}
              />
              <SelectionCard 
                icon={<Briefcase size={32} />} 
                title="Business" 
                desc="Marketing, Finance"
                selected={selectedDomain === "business"}
                onClick={() => handleDomainSelect("business")}
              />
            </div>
          </motion.div>
        )}

        {/* --- 3. DYNAMIC DETAILS (Based on previous step) --- */}
        {currentStep === "details" && (
          <motion.div 
            key="details"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-2xl"
          >
             <button onClick={() => setCurrentStep("domain")} className="text-gray-400 hover:text-gray-600 mb-6 flex items-center gap-1 text-sm font-bold uppercase tracking-wider">
              <ChevronLeft size={16} /> Back
            </button>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedDomain === "programming" ? "Which technologies?" : 
               selectedDomain === "design" ? "Which tools do you use?" : 
               "What's your focus area?"}
            </h2>
            <p className="text-gray-500 mb-8">Select all that apply.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {/* DYNAMIC CONTENT GENERATION */}
              {selectedDomain === "programming" && ["React", "Python", "Java", "DevOps", "Cybersecurity", "Data Science"].map(item => (
                <DetailChip key={item} label={item} selected={details.includes(item)} onClick={() => handleDetailToggle(item)} />
              ))}
               {selectedDomain === "design" && ["Figma", "Adobe XD", "Blender", "Photoshop", "After Effects", "Sketch"].map(item => (
                <DetailChip key={item} label={item} selected={details.includes(item)} onClick={() => handleDetailToggle(item)} />
              ))}
               {selectedDomain === "business" && ["Digital Marketing", "SEO", "Project Management", "Accounting", "Leadership", "Sales"].map(item => (
                <DetailChip key={item} label={item} selected={details.includes(item)} onClick={() => handleDetailToggle(item)} />
              ))}
            </div>

            <button 
              onClick={() => setCurrentStep("finish")}
              disabled={details.length === 0}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${details.length > 0 ? "bg-[#FF5B5C] shadow-lg shadow-[#FF5B5C]/30 hover:bg-[#ff4646]" : "bg-gray-300 cursor-not-allowed"}`}
            >
              Complete Setup <ArrowRight size={20} />
            </button>
          </motion.div>
        )}

        {/* --- 4. FINISH SCREEN --- */}
        {currentStep === "finish" && (
          <motion.div 
            key="finish"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-md border border-gray-100"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-green-600 w-10 h-10" strokeWidth={3} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">You're All Set!</h2>
            <p className="text-gray-500 mb-8">
              We've created your instructor dashboard based on your <strong>{selectedDomain}</strong> profile.
            </p>
        <Link href="/dashboard/teacher" className="w-full block">
  <button className="w-full bg-[#0f172a] text-white font-bold py-3 rounded-xl hover:bg-[#1e293b] transition-colors">
    Go to Dashboard
  </button>
</Link>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

// --- SUB COMPONENTS ---

const SelectionCard = ({ icon, title, desc, selected, onClick }: any) => (
  <div 
    onClick={onClick}
    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center text-center gap-4 hover:scale-[1.02]
      ${selected 
        ? "border-[#FF5B5C] bg-[#FF5B5C]/5" 
        : "border-gray-100 bg-white hover:border-gray-200 shadow-sm"
      }`}
  >
    <div className={`p-3 rounded-full ${selected ? "bg-[#FF5B5C] text-white" : "bg-gray-100 text-gray-600"}`}>
      {icon}
    </div>
    <div>
      <h3 className={`font-bold text-lg ${selected ? "text-[#FF5B5C]" : "text-gray-900"}`}>{title}</h3>
      <p className="text-xs text-gray-500 mt-1">{desc}</p>
    </div>
  </div>
);

const DetailChip = ({ label, selected, onClick }: any) => (
  <div 
    onClick={onClick}
    className={`cursor-pointer px-4 py-3 rounded-xl border transition-all font-medium text-center select-none
      ${selected 
        ? "bg-[#FF5B5C] border-[#FF5B5C] text-white shadow-md shadow-red-200" 
        : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
      }`}
  >
    {label}
  </div>
);

export default TeacherOnboarding;