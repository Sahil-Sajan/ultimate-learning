"use client";
import React from "react";
import { Eye, Download } from "lucide-react";

const CERTIFICATES_DATA = [
  {
    id: "01",
    name: "UI/UX Design Certificate",
    date: "22 Aug 2025",
    marks: 20,
    outOf: 20,
  },
  {
    id: "02",
    name: "Wordpress Certificate",
    date: "10 Aug 2025",
    marks: 18,
    outOf: 20,
  },
  {
    id: "03",
    name: "HTML CSS Certificate",
    date: "26 Jul 2025",
    marks: 25,
    outOf: 30,
  },
  {
    id: "04",
    name: "JavaScript Certificate",
    date: "14 Jul 2025",
    marks: 15,
    outOf: 20,
  },
  {
    id: "05",
    name: "Photoshop Certificate",
    date: "19 Jun 2025",
    marks: 20,
    outOf: 30,
  },
  {
    id: "06",
    name: "Python Certificate",
    date: "12 Jun 2025",
    marks: 20,
    outOf: 20,
  },
];

export default function MyCertificatesView() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl md:text-2xl font-black text-[#1D1B26]">My Certificates</h3>

      {/* --- DESKTOP VIEW (Table) --- */}
      <div className="hidden md:block bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-[11px] font-black text-slate-600 uppercase tracking-widest">
                  ID
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-600 uppercase tracking-widest">
                  Course Name
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-600 uppercase tracking-widest">
                  Date
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-600 uppercase tracking-widest">
                  Marks
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-600 uppercase tracking-widest">
                  Out of
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-600 uppercase tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {CERTIFICATES_DATA.map((cert) => (
                <tr
                  key={cert.id}
                  className="hover:bg-slate-50/30 transition-colors group"
                >
                  <td className="px-8 py-5 text-sm font-bold text-slate-400">
                    {cert.id}
                  </td>
                  <td className="px-8 py-5 text-sm font-black text-[#1D1B26] group-hover:text-[#4E3796] transition-colors">
                    {cert.name}
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-500">
                    {cert.date}
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-500">
                    {cert.marks}
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-500">
                    {cert.outOf}
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:bg-[#4E3796] hover:text-white transition-all shadow-sm">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:bg-[#22C55E] hover:text-white transition-all shadow-sm">
                        <Download size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- MOBILE VIEW (Card Layout) --- */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {CERTIFICATES_DATA.map((cert) => (
          <div 
            key={cert.id} 
            className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm space-y-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ID: {cert.id}</span>
                <h4 className="text-base font-black text-[#1D1B26] mt-1">{cert.name}</h4>
                <p className="text-xs font-bold text-slate-400 mt-1">{cert.date}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2.5 rounded-xl bg-slate-50 text-[#4E3796] active:bg-[#4E3796] active:text-white transition-all">
                  <Eye size={18} />
                </button>
                <button className="p-2.5 rounded-xl bg-slate-50 text-[#22C55E] active:bg-[#22C55E] active:text-white transition-all">
                  <Download size={18} />
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-6 pt-4 border-t border-slate-50">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Marks</p>
                <p className="text-sm font-black text-[#1D1B26]">{cert.marks}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total</p>
                <p className="text-sm font-black text-[#1D1B26]">{cert.outOf}</p>
              </div>
              <div className="ml-auto">
                <div className="px-3 py-1 rounded-full bg-green-50 text-[10px] font-black text-green-600 uppercase">
                    Passed
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}