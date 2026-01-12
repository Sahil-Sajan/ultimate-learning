"use client";
import React from "react";
import { Download, Eye } from "lucide-react";

const ORDER_DATA = [
  {
    id: "#INV001",
    course: "Information About UI/UX Design Degree",
    date: "22 Aug 2025",
    amount: "$120.00",
    status: "Paid",
  },
  {
    id: "#INV002",
    course: "Wordpress for Beginners - Master Wordpress Quickly",
    date: "10 Aug 2025",
    amount: "$140.00",
    status: "Paid",
  },
  {
    id: "#INV003",
    course: "Sketch from A to Z (2024): Become an app designer",
    date: "26 Jul 2025",
    amount: "$160.00",
    status: "Paid",
  },
  {
    id: "#INV004",
    course: "Build Responsive Real World Websites with Crash Course",
    date: "14 Jul 2025",
    amount: "$200.00",
    status: "Pending",
  },
  {
    id: "#INV005",
    course: "Learn JavaScript and Express to become a Expert",
    date: "19 Jun 2025",
    amount: "$130.00",
    status: "Paid",
  },
  {
    id: "#INV006",
    course: "Introduction to Python Programming",
    date: "12 Jun 2025",
    amount: "$150.00",
    status: "Paid",
  },
];

export default function OrderHistoryView() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-black text-[#1D1B26]">Order History</h3>

      <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Order ID
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Course Name
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Date
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Amount
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Status
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {ORDER_DATA.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-slate-50/30 transition-colors group"
                >
                  <td className="px-8 py-5 text-sm font-bold text-slate-400">
                    {order.id}
                  </td>
                  <td className="px-8 py-5 text-sm font-black text-[#1D1B26] group-hover:text-[#4E3796] transition-colors max-w-xs truncate">
                    {order.course}
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-500">
                    {order.date}
                  </td>
                  <td className="px-8 py-5 text-sm font-black text-[#1D1B26]">
                    {order.amount}
                  </td>
                  <td className="px-8 py-5">
                    <span
                      className={`text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider ${
                        order.status === "Paid"
                          ? "bg-[#E7F9ED] text-[#22C55E]"
                          : "bg-amber-100 text-amber-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:bg-[#1D1B26] hover:text-white transition-all shadow-sm">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:bg-[#4E3796] hover:text-white transition-all shadow-sm">
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
