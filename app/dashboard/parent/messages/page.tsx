"use client";
import { useState } from "react";
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
  ArrowLeft,
} from "lucide-react";

/* --- DATA (UNCHANGED) --- */
const CONTACTS = [
  {
    id: 1,
    name: "Alice Smith",
    course: "Prompt Engineering - Sec A",
    status: "online",
    lastMsg: "I'm having trouble with the Module 3 assignment.",
    unread: 2,
    type: "student",
  },
  {
    id: 2,
    name: "Blockchain 101 Group",
    course: "Spring 2024",
    status: "online",
    lastMsg: "Bob: When is the final project proposal due?",
    unread: 5,
    type: "group",
  },
  {
    id: 3,
    name: "Charlie Davis",
    course: "UX Design Systems",
    status: "offline",
    lastMsg: "Thank you for the feedback on my case study!",
    unread: 0,
    type: "student",
  },
];

const INITIAL_MESSAGES = [
  { id: 1, sender: "them", text: "Hi Professor! I just submitted my Module 3 essay.", time: "09:00 AM" },
  { id: 2, sender: "me", text: "PDF is perfect. I’ll review by Friday.", time: "09:15 AM" },
  { id: 3, sender: "them", text: "Great! Will there be a lab session Wednesday?", time: "10:20 AM" },
];

export default function TeacherMessagingView() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activeChat, setActiveChat] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="h-[calc(100vh-80px)] flex gap-6">

      {/* ================= INBOX ================= */}
      <div
        className={`bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col overflow-hidden
        w-full sm:w-[40%] lg:w-1/3
        ${activeChat ? "hidden sm:flex" : "flex"}`}
      >
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-black text-[#1D1B26]">Inbox</h3>
            <button className="p-2 bg-slate-50 text-[#FF5B5C] rounded-xl">
              <MessageSquare size={20} />
            </button>
          </div>

          <div className="flex gap-2 p-1 bg-slate-50 rounded-2xl">
            {["all", "groups", "starred"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-[10px] font-black uppercase rounded-xl ${
                  activeTab === tab
                    ? "bg-white text-[#FF5B5C]"
                    : "text-slate-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            <input
              placeholder="Search..."
              className="w-full bg-slate-50 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold outline-none"
            />
          </div>
        </div>

        <div className="grow overflow-y-auto p-4 pt-0 space-y-2">
          {CONTACTS.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setActiveChat(contact)}
              className="p-4 rounded-[28px] cursor-pointer flex gap-4 hover:bg-slate-50"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center font-black">
                {contact.type === "group" ? <Users size={20} /> : contact.name[0]}
              </div>

              <div className="grow overflow-hidden">
                <div className="flex justify-between">
                  <h4 className="text-sm font-bold truncate">{contact.name}</h4>
                  {contact.unread > 0 && (
                    <span className="bg-[#FF5B5C] text-white text-[9px] px-2 rounded-full">
                      {contact.unread}
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-rose-400 font-black uppercase">
                  {contact.course}
                </p>
                <p className="text-[11px] text-slate-400 truncate italic">
                  &quot;{contact.lastMsg}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CHAT ================= */}
      {activeChat && (
        <div className="grow bg-white rounded-[42px] border border-slate-100 shadow-sm flex flex-col overflow-hidden w-full">

          {/* HEADER */}
          <div className="p-4 sm:p-6 border-b flex justify-between items-center">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveChat(null)}
                className="sm:hidden p-2 rounded-xl hover:bg-slate-50"
              >
                <ArrowLeft size={20} />
              </button>

              <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center font-black">
                {activeChat.name[0]}
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-black flex gap-1 items-center">
                  {activeChat.name}
                  <ShieldCheck size={14} className="text-blue-500" />
                </h4>
                <p className="text-[9px] uppercase text-rose-400 font-black">
                  {activeChat.course}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Star size={18} className="text-slate-400" />
              <Info size={18} className="text-slate-400" />
              <MoreVertical size={18} className="text-slate-400" />
            </div>
          </div>

          {/* MESSAGES */}
          <div className="grow overflow-y-auto p-4 sm:p-8 space-y-6 bg-slate-50/30">
            {INITIAL_MESSAGES.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div className="max-w-[85%] sm:max-w-[65%]">
                  <div
                    className={`p-4 rounded-[28px] text-sm font-semibold ${
                      msg.sender === "me"
                        ? "bg-[#FF5B5C] text-white rounded-tr-none"
                        : "bg-white border rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <p className="text-[9px] mt-1 text-slate-300 uppercase">
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="p-4 sm:p-6 border-t">
            <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-[28px]">
              <Paperclip size={18} className="text-slate-400" />
              <input
                placeholder="Type a reply..."
                className="grow bg-transparent outline-none text-sm font-bold"
              />
              <Smile size={18} className="text-slate-400" />
              <button className="bg-[#FF5B5C] p-3 rounded-2xl text-white">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
