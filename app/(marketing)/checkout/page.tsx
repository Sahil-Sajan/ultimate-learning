"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function CheckoutPage() {
  const router = useRouter();


  const dummyCourse = {
    title: "Prompt Engineering Masterclass",
    instructor: "Sarah J.",
    price: 49.99,
    tax: 3.0,
    total: 52.99,
    image: "/blog8.webp", // Replace with your actual image path
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#1e1b4b] flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[24px] p-8 md:p-12 shadow-sm border border-slate-100">
        {/* LEFT COLUMN: Billing & Payment */}
        <div className="space-y-10">
          <header>
            <h1 className="text-2xl font-bold text-slate-900">
              Complete Your Purchase
            </h1>
          </header>

          <section className="space-y-6">
            <h2 className="text-lg font-semibold text-slate-800">
              Billing information
            </h2>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3.5 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                  Country
                </label>
                <select className="w-full p-3.5 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm text-slate-500 appearance-none">
                  <option>Select your country</option>
                </select>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-lg font-semibold text-slate-800">
              Payment methods
            </h2>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                  Card
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    className="w-full p-3.5 bg-white border border-slate-200 rounded-lg outline-none focus:border-slate-400 transition-all text-sm"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg
                      width="24"
                      height="16"
                      viewBox="0 0 24 16"
                      fill="none"
                      className="opacity-40"
                    >
                      <rect width="24" height="16" rx="2" fill="#94A3B8" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">
                    Expiration Date
                  </label>
                  <div className="flex items-center gap-2 p-3.5 border border-slate-200 rounded-lg">
                    <Image
                    width={200}
                    height={200}
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                      alt="paypal"
                      className="h-4"
                    />
                    <span className="text-sm text-slate-400 ml-auto flex gap-1">
                      <Image
                      width={200}
                      height={200}
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                        className="h-3"
                        alt="v"
                      />
                      <Image
                      height={200}
                      width={200}
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                        className="h-3"
                        alt="m"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="save"
                  className="w-4 h-4 accent-[#ff5374] border-slate-300 rounded"
                />
                <label htmlFor="save" className="text-xs text-slate-500">
                  Save this card securely for future purposes.
                </label>
              </div>
            </div>
          </section>

          <button className="w-full bg-[#ff5374] hover:bg-[#ff4063] text-white font-bold py-4 rounded-xl text-md transition-all shadow-md active:scale-[0.99]">
            Proceed to Checkout
          </button>

          <div className="flex gap-4 text-[11px] text-slate-400 font-medium">
            <button
              onClick={() => router.back()}
              className="hover:underline flex items-center gap-1"
            >
              Terms & Conditions
            </button>
            <button className="hover:underline">Privacy Policy</button>
          </div>
        </div>

        {/* RIGHT COLUMN: Order Summary */}
        <div className="lg:border-l lg:pl-12 space-y-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Your Order Summary
          </h2>

          {/* Course Card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex gap-4 relative overflow-hidden ring-4 ring-[#ff5374]/5">
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
              <Image
              height={200}
              width={200}
                src={dummyCourse.image}
                alt="course"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-slate-900 text-sm">
                {dummyCourse.title}
              </h3>
              <p className="text-slate-500 text-xs">{dummyCourse.instructor}</p>

              <div className="mt-3">
                <span className="text-lg font-bold text-slate-900">
                  ${dummyCourse.price} USD
                </span>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  then $0 4K / lifetime
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-400 font-medium">
            No commitment. Cancel anytime.
          </p>

          <div className="space-y-6 pt-6 border-t border-slate-100">
            <h3 className="text-xl font-bold text-slate-900">Order Total</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-slate-500 text-sm font-medium">
                <span>Subtotal</span>
                <span>${dummyCourse.price} USD</span>
              </div>
              <div className="flex justify-between text-slate-500 text-sm font-medium">
                <span>Tax</span>
                <span>${dummyCourse.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-900 text-lg font-bold pt-2">
                <span>Total</span>
                <span>${dummyCourse.total} USD</span>
              </div>
            </div>
          </div>

          {/* Testimonial Box */}
          <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-100 flex gap-4 items-center">
            <Image
            height={200}
            width={200}
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
              className="w-12 h-12 rounded-full object-cover grayscale"
              alt="Elena"
            />
            <div className="space-y-1">
              <p className="text-[11px] text-slate-500 italic leading-relaxed">
                &quot;The course content is incredibly detailed and well structured.
                Best investment for my career.&quot;
              </p>
              <p className="text-[10px] font-bold text-slate-400">— Elena M.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
