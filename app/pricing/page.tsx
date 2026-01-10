"use client";

import React, { useState, ReactNode } from "react";
import {
  Check,
  ArrowRight,
  Smartphone,
  Zap,
  Shield,
  Globe,
  Plus,
  Minus,
  HelpCircle,
} from "lucide-react";

/* ---------------- TYPES & INTERFACES ---------------- */

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
  color: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

/* ---------------- CONFIGURATION DATA ---------------- */

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic Plan",
    price: "0",
    description: "Perfect for students starting their learning journey.",
    features: [
      "Access to free courses",
      "Community forum access",
      "Basic support",
      "Mobile app access",
    ],
    buttonText: "Get Started",
    popular: false,
    color: "#1D1B26",
  },
  {
    name: "Professional",
    price: "29",
    description: "Ideal for dedicated learners seeking career growth.",
    features: [
      "Everything in Basic",
      "Unlimited premium courses",
      "Expert mentor Q&A",
      "Offline viewing",
      "Certificate of completion",
    ],
    buttonText: "Select Plan",
    popular: true,
    color: "#FF5364",
  },
  {
    name: "Enterprise",
    price: "99",
    description: "Advanced tools for teams and organizations.",
    features: [
      "Everything in Pro",
      "Bulk student enrollment",
      "Advanced analytics",
      "Dedicated account manager",
      "Custom branding",
    ],
    buttonText: "Contact Us",
    popular: false,
    color: "#1D1B26",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Are there any hidden charges in the plans?",
    answer:
      "No, the prices shown are all-inclusive. We do not charge any hidden transaction fees or maintenance costs.",
  },
  {
    question: "Can I switch between plans at any time?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time from your account settings. Changes are reflected instantly.",
  },
  {
    question: "Do you offer a refund if I'm not satisfied?",
    answer:
      "We offer a 14-day money-back guarantee for all our premium plans if you haven't completed more than 20% of a course.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and Apple Pay for seamless transactions.",
  },
  {
    question: "Is there a discount for annual subscriptions?",
    answer:
      "Yes, if you choose the yearly billing cycle, you save 20% compared to the monthly subscription rate.",
  },
  {
    question: "Can I get a custom quote for a large team?",
    answer:
      "Absolutely. Our Enterprise plan is flexible. Contact our sales team for a custom package tailored to your organization's size.",
  },
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#FFF0F0] to-[#E5F3FF] py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-[#FF5364]/10 text-[#FF5364] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-[10px]">
              Pricing & Plans
            </div>
            <h1 className="text-5xl font-black text-[#1D1B26] leading-[1.1]">
              Flexible Pricing <br /> For Every Learner
            </h1>
            <p className="text-slate-500 text-lg max-w-md leading-relaxed">
              We're dedicated to transforming education by providing
              high-quality courses that cater to learners of all levels.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#FF5364] text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-pink-200 hover:translate-y-[-2px] transition-all">
                Select a Plan
              </button>
              <button className="bg-[#1D1B26] text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 w-full max-w-[500px]">
              <img
                src="/pricing-hero.png"
                alt="Pricing Preview"
                className="w-full h-auto rounded-2xl drop-shadow-2xl"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#4E3796]/5 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </section>

      {/* PRICING GRID SECTION */}
      <section className="bg-[#4E3796] py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-white text-3xl font-bold">
              Simple, Transparent Pricing
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span
                className={`text-sm ${
                  billingCycle === "monthly" ? "text-white" : "text-white/50"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "yearly" : "monthly"
                  )
                }
                className="w-14 h-7 bg-white/20 rounded-full relative p-1 transition-colors"
              >
                <div
                  className={`w-5 h-5 bg-[#FF5364] rounded-full transition-all ${
                    billingCycle === "yearly"
                      ? "translate-x-7"
                      : "translate-x-0"
                  }`}
                />
              </button>
              <span
                className={`text-sm ${
                  billingCycle === "yearly" ? "text-white" : "text-white/50"
                }`}
              >
                Yearly (Save 20%)
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <PricingCard key={idx} plan={plan} cycle={billingCycle} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 bg-[#F8F9FB]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4 text-[#FF5364]">
              <HelpCircle size={40} />
            </div>
            <h2 className="text-3xl font-black text-[#1D1B26] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">
              Everything you need to know about our pricing and subscriptions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-[#1D1B26]">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      openFaq === idx
                        ? "bg-[#FF5364] text-white"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {openFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM FEATURE STRIP */}
      <section className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8">
          <FeatureItem
            icon={<Smartphone />}
            title="Learn Anywhere"
            desc="iOS & Android apps available"
          />
          <FeatureItem
            icon={<Zap />}
            title="Instant Access"
            desc="Start learning immediately"
          />
          <FeatureItem
            icon={<Shield />}
            title="Safe & Secure"
            desc="256-bit SSL encryption"
          />
          <FeatureItem
            icon={<Globe />}
            title="Global Support"
            desc="Help in 12+ languages"
          />
        </div>
      </section>
    </div>
  );
}

/* ---------------- HELPER COMPONENTS ---------------- */

function PricingCard({
  plan,
  cycle,
}: {
  plan: PricingPlan;
  cycle: "monthly" | "yearly";
}) {
  const price =
    cycle === "yearly" ? Math.floor(Number(plan.price) * 0.8) : plan.price;

  return (
    <div
      className={`p-8 rounded-[32px] border transition-all duration-500 relative flex flex-col ${
        plan.popular
          ? "bg-white border-white shadow-2xl scale-105 z-10"
          : "bg-white/5 border-white/10 text-white"
      }`}
    >
      {plan.popular && (
        <span className="bg-[#FF5364] text-white text-[10px] font-black uppercase px-4 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2 shadow-lg shadow-pink-200">
          Recommended
        </span>
      )}

      <h3
        className={`text-xl font-bold mb-1 ${
          plan.popular ? "text-[#1D1B26]" : "text-white"
        }`}
      >
        {plan.name}
      </h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span
          className={`text-4xl font-black ${
            plan.popular ? "text-[#1D1B26]" : "text-white"
          }`}
        >
          ${price}
        </span>
        <span className={plan.popular ? "text-slate-400" : "text-white/50"}>
          /mo
        </span>
      </div>

      <p
        className={`text-sm mb-8 leading-relaxed ${
          plan.popular ? "text-slate-500" : "text-white/70"
        }`}
      >
        {plan.description}
      </p>

      <div className="space-y-4 mb-10 flex-grow">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <Check
              size={16}
              className={plan.popular ? "text-[#FF5364]" : "text-pink-400"}
              strokeWidth={3}
            />
            <span
              className={`text-sm ${
                plan.popular ? "text-slate-600" : "text-white/80"
              }`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group transition-all ${
          plan.popular
            ? "bg-[#FF5364] text-white hover:bg-[#e64a68] shadow-lg shadow-pink-100"
            : "bg-white text-[#4E3796] hover:bg-slate-50"
        }`}
      >
        {plan.buttonText}{" "}
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>
    </div>
  );
}

function FeatureItem({ icon, title, desc }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-[#FF5364]/5 rounded-2xl flex items-center justify-center text-[#FF5364]">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
        <p className="text-xs text-slate-400">{desc}</p>
      </div>
    </div>
  );
}
