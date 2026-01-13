"use client";
import React, { useState } from "react";
import { Search, Send, MoreVertical, Paperclip, Smile, ArrowLeft } from "lucide-react";

const CONTACTS = [
  {
    id: 1,
    name: "David Benitez",
    role: "Instructor",
    status: "online",
    image: "/couse-1.webp",
    lastMsg: "Did you check the new UI assets?",
  },
  {
    id: 2,
    name: "Ana Reyes",
    role: "Instructor",
    status: "offline",
    image: "/cs-3.webp",
    lastMsg: "The Wordpress quiz is updated.",
  },
  {
    id: 3,
    name: "Support Team",
    role: "Help Desk",
    status: "online",
    image: "",
    lastMsg: "How can we help you today?",
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "them",
    text: "Hello Ronald! How is your UI/UX course going?",
    time: "10:15 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "It's going great! I'm currently working on the responsive design module.",
    time: "10:18 AM",
  },
  {
    id: 3,
    sender: "them",
    text: "That's excellent. Let me know if you need the Figma source files.",
    time: "10:20 AM",
  },
];

export default function MessagingView() {
  const [activeChat, setActiveChat] = useState(CONTACTS[0]);
  // State to track if we are looking at the chat window on mobile
  const [showChatMobile, setShowChatMobile] = useState(false);

  const handleContactClick = (contact: typeof CONTACTS[0]) => {
    setActiveChat(contact);
    setShowChatMobile(true);
  };

  return (
    <div className="h-[600px] md:h-[700px] flex gap-0 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      
      {/* --- SIDEBAR: CONTACT LIST --- */}
      <div className={`
        ${showChatMobile ? 'hidden md:flex' : 'flex'} 
        w-full md:w-1/3 bg-white rounded-[32px] border border-slate-100 shadow-sm flex-col overflow-hidden
      `}>
        <div className="p-6 border-b border-slate-50">
          <h3 className="text-xl font-black text-[#1D1B26] mb-4">Messages</h3>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            <input
              type="text"
              placeholder="Search chat..."
              className="w-full bg-slate-50 border-none rounded-2xl py-3 pl-12 pr-4 text-xs font-bold focus:ring-2 focus:ring-[#4E3796]/20 transition-all outline-none"
            />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-2">
          {CONTACTS.map((contact) => (
            <div
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className={`p-4 rounded-[24px] cursor-pointer transition-all flex items-center gap-4 ${
                activeChat.id === contact.id
                  ? "bg-[#F1F0F7] border border-[#4E3796]/10"
                  : "hover:bg-slate-50 border border-transparent"
              }`}
            >
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  {contact.image ? (
                    <img src={contact.image} className="w-full h-full object-cover" alt={contact.name} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-black text-[#4E3796] bg-slate-100 uppercase">
                      {contact.name.charAt(0)}
                    </div>
                  )}
                </div>
                {contact.status === "online" && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#22C55E] border-2 border-white rounded-full" />
                )}
              </div>
              <div className="flex-grow overflow-hidden">
                <h4 className="text-sm font-black text-[#1D1B26] truncate">{contact.name}</h4>
                <p className="text-[10px] text-slate-400 font-bold truncate uppercase tracking-tighter">
                  {contact.lastMsg}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MAIN: CHAT WINDOW --- */}
      <div className={`
        ${!showChatMobile ? 'hidden md:flex' : 'flex'} 
        flex-grow bg-white rounded-[32px] md:rounded-[42px] border border-slate-100 shadow-sm flex-col overflow-hidden w-full
      `}>
        {/* Chat Header */}
        <div className="p-4 md:p-6 border-b border-slate-50 flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-4">
            {/* Back Button for Mobile */}
            <button 
              onClick={() => setShowChatMobile(false)}
              className="md:hidden p-2 -ml-2 text-slate-400 hover:text-[#1D1B26]"
            >
              <ArrowLeft size={20} />
            </button>

            <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden shrink-0">
              {activeChat.image ? (
                <img src={activeChat.image} className="w-full h-full object-cover" alt={activeChat.name} />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-black text-[#4E3796] bg-slate-50 uppercase">
                  {activeChat.name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <h4 className="text-sm font-black text-[#1D1B26] truncate max-w-[120px] md:max-w-none">
                {activeChat.name}
              </h4>
              <p className="text-[9px] md:text-[10px] font-black text-[#22C55E] uppercase tracking-widest">
                {activeChat.status}
              </p>
            </div>
          </div>
          <button className="text-slate-300 hover:text-[#1D1B26] transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-4 md:p-8 space-y-6 bg-slate-50/30">
          {INITIAL_MESSAGES.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] md:max-w-[70%] p-4 rounded-[24px] text-sm font-medium shadow-sm ${
                  msg.sender === "me"
                    ? "bg-[#4E3796] text-white rounded-tr-none"
                    : "bg-white text-[#1D1B26] border border-slate-100 rounded-tl-none"
                }`}
              >
                {msg.text}
                <p className={`text-[9px] mt-2 font-bold uppercase tracking-widest ${
                    msg.sender === "me" ? "text-white/60" : "text-slate-300"
                  }`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 bg-white border-t border-slate-50">
          <div className="flex items-center gap-2 md:gap-4 bg-slate-50 p-1 md:p-2 rounded-[24px] border border-slate-100">
            <button className="hidden sm:block p-2 text-slate-400 hover:text-[#4E3796] transition-colors">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              placeholder="Message..."
              className="flex-grow bg-transparent border-none focus:ring-0 text-sm font-bold text-[#1D1B26] outline-none px-2"
            />
            <button className="p-2 text-slate-400 hover:text-yellow-500 transition-colors">
              <Smile size={20} />
            </button>
            <button className="bg-[#4E3796] text-white p-2.5 md:p-3 rounded-2xl hover:bg-[#3D2B7A] transition-all shadow-lg shadow-[#4E3796]/20">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}