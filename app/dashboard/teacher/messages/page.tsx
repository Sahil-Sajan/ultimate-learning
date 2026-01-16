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
  ChevronLeft,
} from "lucide-react";

/* --- DATA --- */
const CONTACTS = [
  {
    id: 1,
    name: "Alice Smith",
    course: "Prompt Engineering - Sec A",
    status: "online",
    lastMsg: "I'm having trouble with Module 3 assignment.",
    unread: 2,
    type: "student",
  },
  {
    id: 2,
    name: "Blockchain 101 Group",
    course: "Spring 2024",
    status: "online",
    lastMsg: "Bob: When is the final project due?",
    unread: 5,
    type: "group",
  },
  {
    id: 3,
    name: "Charlie Davis",
    course: "UX Design Systems",
    status: "offline",
    lastMsg: "Thank you for the feedback!",
    unread: 0,
    type: "student",
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "them",
    text: "Hi Professor! I just submitted my Module 3 essay.",
    time: "09:00 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "Yes Alice, PDF format is perfect 👍",
    time: "09:15 AM",
  },
  {
    id: 3,
    sender: "them",
    text: "Will there be a lab session this Wednesday?",
    time: "10:20 AM",
  },
];

export default function TeacherMessagingView() {
  const [activeChat, setActiveChat] = useState(CONTACTS[0]);
  const [activeTab, setActiveTab] = useState("all");
  const [showChatMobile, setShowChatMobile] = useState(false);

  return (
    <div className="max-w-7xl mx-auto h-[calc(100dvh-160px)] md:h-[calc(100vh-200px)] lg:h-[800px] flex flex-col md:flex-row gap-4 lg:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* SIDEBAR - Increased width to 400px on desktop */}
      <div
        className={`w-full md:w-[400px] bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col overflow-hidden transition-all duration-300 ${
          showChatMobile ? "hidden md:flex" : "flex"
        }`}
      >
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-black text-[#1D1B26]">Inbox</h3>
            <button className="p-2.5 bg-rose-50 text-rose-500 rounded-xl hover:bg-rose-100 transition-colors">
              <MessageSquare size={20} />
            </button>
          </div>

          <div className="flex gap-1 bg-slate-50 p-1.5 rounded-2xl">
            {["all", "groups", "starred"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${
                  activeTab === tab
                    ? "bg-white text-rose-500 shadow-sm"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            <input
              className="w-full bg-slate-50 border border-transparent focus:border-rose-100 focus:bg-white rounded-2xl py-3.5 pl-11 text-xs font-bold outline-none transition-all"
              placeholder="Search conversations..."
            />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto px-3 pb-4 space-y-2">
          {CONTACTS.map((contact) => (
            <div
              key={contact.id}
              onClick={() => {
                setActiveChat(contact);
                setShowChatMobile(true);
              }}
              className={`p-4 rounded-[24px] flex gap-4 cursor-pointer transition-all duration-200 ${
                activeChat.id === contact.id
                  ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
                  : "hover:bg-slate-50 border border-transparent"
              }`}
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#F1F0F7] text-[#4E3796] flex items-center justify-center font-black text-lg">
                {contact.type === "group" ? <Users size={20} /> : contact.name[0]}
              </div>

              <div className="flex-grow overflow-hidden">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-black text-[#1D1B26] truncate">{contact.name}</h4>
                  {contact.unread > 0 && (
                    <span className="bg-rose-500 text-white text-[9px] px-2 py-0.5 rounded-full font-black">
                      {contact.unread}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 font-bold truncate">
                  {contact.lastMsg}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT MAIN AREA */}
      <div
        className={`flex-grow bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col overflow-hidden transition-all duration-300 ${
          !showChatMobile ? "hidden md:flex" : "flex"
        }`}
      >
        {/* HEADER */}
        <div className="p-5 border-b border-slate-50 flex justify-between items-center bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowChatMobile(false)}
              className="md:hidden p-2 text-slate-400"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-black text-lg">
              {activeChat.name[0]}
            </div>

            <div>
              <h4 className="font-black text-[#1D1B26]">{activeChat.name}</h4>
              <p className="text-[10px] text-rose-500 font-black uppercase tracking-widest">
                {activeChat.course}
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            <button className="p-2.5 text-slate-300 hover:text-yellow-400 transition-colors"><Star size={20} /></button>
            <button className="p-2.5 text-slate-300 hover:text-rose-500 transition-colors"><Info size={20} /></button>
            <button className="p-2.5 text-slate-300 hover:text-slate-600 transition-colors"><MoreVertical size={20} /></button>
          </div>
        </div>

        {/* MESSAGES */}
        <div className="flex-grow overflow-y-auto overscroll-contain p-6 space-y-6 bg-slate-50/30">
          {INITIAL_MESSAGES.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[75%] md:max-w-[65%] p-4 rounded-[24px] text-sm font-bold shadow-sm ${
                  msg.sender === "me"
                    ? "bg-rose-500 text-white rounded-br-none"
                    : "bg-white text-[#1D1B26] border border-slate-100 rounded-bl-none"
                }`}
              >
                {msg.text}
                <p className={`text-[9px] mt-2 font-black uppercase tracking-wider opacity-60 ${msg.sender === "me" ? "text-right" : "text-left"}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="p-6 bg-white border-t border-slate-50">
          <div className="flex items-center gap-3 bg-slate-50 rounded-[24px] p-2 border border-transparent focus-within:border-rose-100 focus-within:bg-white transition-all">
            <button className="p-3 text-slate-400 hover:text-rose-500 transition-colors"><Paperclip size={20} /></button>
            <input
              className="grow bg-transparent outline-none text-sm font-bold text-[#1D1B26] placeholder:text-slate-300"
              placeholder="Your reply..."
            />
            <button className="hidden sm:block p-3 text-slate-400 hover:text-rose-500 transition-colors"><Smile size={20} /></button>
            <button className="bg-rose-500 text-white p-4 rounded-[18px] shadow-lg shadow-rose-200 hover:bg-rose-600 hover:scale-105 active:scale-95 transition-all">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}