"use client";
import React, { useState } from "react";
import {
  Search,
  Send,
  MoreVertical,
  Paperclip,
  Smile,
  Users,
  Star,
  MessageSquare,
  Info,
  ShieldCheck,
  ChevronLeft,
  GraduationCap,
} from "lucide-react";

/* --- STUDENT-SPECIFIC DATA --- */
const STUDENT_CONTACTS = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    course: "Advanced Mathematics",
    status: "online",
    image: "",
    lastMsg: "Your research proposal looks excellent, keep it up!",
    unread: 1,
    type: "professor",
  },
  {
    id: 2,
    name: "AI Study Circle",
    course: "Prompt Engineering",
    status: "online",
    image: "",
    lastMsg: "Kevin: Has anyone found the link for the guest lecture?",
    unread: 12,
    type: "group",
  },
  {
    id: 3,
    name: "Marcus Thorne (TA)",
    course: "Quantum Physics II",
    status: "offline",
    image: "",
    lastMsg: "The lab results are now posted on the portal.",
    unread: 0,
    type: "ta",
  },
];

const STUDENT_MESSAGES = [
  {
    id: 1,
    sender: "me",
    text: "Hello Dr. Jenkins! I'm working on the final project. Should I focus more on the theoretical proofs or the practical application?",
    time: "10:00 AM",
  },
  {
    id: 2,
    sender: "them",
    text: "Hi! For this specific module, a 60/40 split favoring practical application would be ideal.",
    time: "10:15 AM",
  },
  {
    id: 3,
    sender: "them",
    text: "I've also attached a rubric to the course files to help guide your structure.",
    time: "10:16 AM",
  },
];

export default function StudentMessagingView() {
  const [activeChat, setActiveChat] = useState(STUDENT_CONTACTS[0]);
  const [activeTab, setActiveTab] = useState("all");
  const [showMobileChat, setShowMobileChat] = useState(false);

  const handleSelectChat = (contact: any) => {
    setActiveChat(contact);
    setShowMobileChat(true);
  };

  return (
    <div className="h-[calc(100vh-40px)] md:h-200 flex flex-col md:flex-row gap-0 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 overflow-hidden">
      {/* --- SIDEBAR: INBOX LIST --- */}
      <div
        className={`${
          showMobileChat ? "hidden" : "flex"
        } w-full md:w-1/3 md:flex bg-white md:rounded-[32px] border border-slate-100 shadow-sm flex-col overflow-hidden h-full`}
      >
        <div className="p-4 md:p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl md:text-2xl font-black text-[#1D1B26]">
              My Chats
            </h3>
            <button className="p-2 bg-slate-50 text-[#FF5B5C] rounded-xl hover:bg-rose-50 transition-colors">
              <MessageSquare size={20} />
            </button>
          </div>

          {/* Student Filter Tabs */}
          <div className="flex gap-1 md:gap-2 p-1 bg-slate-50 rounded-2xl overflow-x-auto">
            {["all", "faculty", "groups"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-xl transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-white text-[#FF5B5C] shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
              size={18}
            />
            <input
              type="text"
              placeholder="Search faculty or peers..."
              className="w-full bg-slate-50 border-none rounded-2xl py-3 pl-11 pr-4 text-xs font-bold focus:ring-2 focus:ring-rose-500/10 outline-none"
            />
          </div>
        </div>

        <div className="grow overflow-y-auto p-3 md:p-4 pt-0 space-y-2">
          {STUDENT_CONTACTS.map((contact) => (
            <div
              key={contact.id}
              onClick={() => handleSelectChat(contact)}
              className={`p-3 md:p-4 rounded-[24px] md:rounded-[28px] cursor-pointer transition-all flex items-center gap-3 md:gap-4 border ${
                activeChat.id === contact.id
                  ? "bg-white border-rose-100 shadow-md shadow-rose-500/5 md:translate-x-1"
                  : "hover:bg-slate-50 border-transparent"
              }`}
            >
              <div className="relative shrink-0">
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center font-black transition-colors ${
                    contact.type === "group"
                      ? "bg-blue-50 text-blue-500"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {contact.type === "group" ? (
                    <Users size={18} />
                  ) : (
                    contact.name.charAt(0)
                  )}
                </div>
                {contact.status === "online" && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#22C55E] border-2 border-white rounded-full" />
                )}
              </div>

              <div className="grow overflow-hidden">
                <div className="flex justify-between items-start mb-0.5">
                  <h4 className="text-xs md:text-sm font-bold text-[#1D1B26] truncate">
                    {contact.name}
                  </h4>
                  {contact.unread > 0 && (
                    <span className="bg-[#FF5B5C] text-white text-[8px] md:text-[9px] px-1.5 py-0.5 rounded-full font-black">
                      {contact.unread}
                    </span>
                  )}
                </div>
                <p className="text-[9px] md:text-[10px] text-blue-500 font-black uppercase tracking-tighter mb-0.5">
                  {contact.course}
                </p>
                <p className="text-[10px] md:text-[11px] text-slate-400 font-medium truncate italic">
                  {contact.lastMsg}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MAIN: STUDENT CHAT HUB --- */}
      <div
        className={`${
          !showMobileChat ? "hidden" : "flex"
        } w-full md:flex grow bg-white md:rounded-[42px] border border-slate-100 shadow-sm flex-col overflow-hidden h-full`}
      >
        {/* Chat Header */}
        <div className="p-4 md:p-6 border-b border-slate-50 flex justify-between items-center bg-white shrink-0">
          <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
            <button
              onClick={() => setShowMobileChat(false)}
              className="md:hidden p-2 -ml-2 text-slate-400 hover:text-[#FF5B5C] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center text-[#FF5B5C] font-black border border-rose-50">
              {activeChat.name.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <div className="flex items-center gap-2">
                <h4 className="text-sm md:text-base font-black text-[#1D1B26] truncate">
                  {activeChat.name}
                </h4>
                {activeChat.type === "professor" && (
                  <ShieldCheck size={14} className="text-blue-500 shrink-0" />
                )}
              </div>
              <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">
                Class:{" "}
                <span className="text-[#FF5B5C]">{activeChat.course}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-3 shrink-0">
            <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-all">
              <Star size={18} />
            </button>
            <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-all">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="grow overflow-y-auto p-4 md:p-8 space-y-4 md:space-y-6 bg-slate-50/20">
          {STUDENT_MESSAGES.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[85%] md:max-w-[65%] space-y-1`}>
                <div
                  className={`p-3 md:p-4 rounded-4xl md:rounded-[28px] text-xs md:text-sm font-semibold shadow-sm ${
                    msg.sender === "me"
                      ? "bg-[#FF5B5C] text-white rounded-tr-none shadow-rose-200"
                      : "bg-white text-[#1D1B26] border border-slate-100 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
                <p
                  className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest px-2 ${
                    msg.sender === "me"
                      ? "text-right text-rose-300"
                      : "text-left text-slate-300"
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area with Student Quick Tools */}
        <div className="p-4 md:p-6 bg-white border-t border-slate-50 shrink-0">
          <div className="flex gap-2 mb-3 md:mb-4 overflow-x-auto pb-1 scrollbar-hide">
            {["Ask Question", "Send Draft", "Extension?", "Thank you!"].map(
              (label) => (
                <button
                  key={label}
                  className="whitespace-nowrap px-3 py-1.5 rounded-lg border border-slate-100 text-[9px] md:text-[10px] font-black text-slate-400 hover:border-blue-200 hover:text-blue-500 transition-all uppercase"
                >
                  + {label}
                </button>
              ),
            )}
          </div>

          <div className="flex items-center gap-2 md:gap-4 bg-slate-50 p-2 rounded-[24px] md:rounded-[28px] border border-slate-100 focus-within:border-rose-200 transition-all">
            <button className="p-2 text-slate-400 hover:text-[#FF5B5C] transition-colors shrink-0">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              placeholder="Message professor or group..."
              className="grow bg-transparent border-none focus:ring-0 text-xs md:text-sm font-bold text-[#1D1B26] outline-none min-w-0"
            />
            <button className="bg-[#FF5B5C] text-white p-2.5 md:p-3.5 rounded-xl md:rounded-2xl hover:bg-[#ff4647] transition-all shadow-lg shadow-rose-500/20 shrink-0">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
