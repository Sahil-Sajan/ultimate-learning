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
      <h3 className="text-xl font-black text-[#1D1B26]">My Certificates</h3>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  ID
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Course Name
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Date
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Marks
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Out of
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">
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
    </div>
  );
}
