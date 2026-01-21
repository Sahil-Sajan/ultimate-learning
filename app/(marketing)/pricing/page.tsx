"use client";

import React, { useState, ReactNode } from "react";
// 1. CHANGE: Import 'motion' instead of 'm'
import { motion, AnimatePresence } from "framer-motion";
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
import Image from "next/image";

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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
];

/* ---------------- MAIN COMPONENT ---------------- */

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* HERO SECTION */}
      {/* 2. CHANGE: Updated gradient syntax to standard Tailwind 'bg-gradient-to-r' */}
      <section className="bg-linear-to-r from-[#FFF0F0] to-[#E5F3FF] py-20 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* 3. CHANGE: Replaced all 'm.div' etc with 'motion.div' */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-4 text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block bg-[#FF5364]/10 text-[#FF5364] px-4 py-1 rounded-full font-bold uppercase tracking-widest text-xs"
            >
              Pricing & Plans
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black text-[#1D1B26] leading-[1.1]"
            >
              Flexible Pricing <br /> For Every Learner
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-slate-500 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              We&apos;re dedicated to transforming education by providing
              high-quality courses that cater to learners of all levels.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button className="w-full sm:w-auto bg-[#FF5364] text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-pink-200 hover:scale-105 transition-transform active:scale-95">
                Select a Plan
              </button>
              <button className="w-full sm:w-auto bg-[#1D1B26] text-white px-10 py-4 rounded-full font-bold hover:bg-black transition-all">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end items-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-md"
            >
              {/* NOTE: Make sure this image exists in your /public folder */}
              <Image
                width={200}
                height={200}
                src="/pricing-hero.png" 
                alt="Pricing Preview"
                className="w-full h-auto rounded-2xl drop-shadow-2xl"
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#4E3796]/5 rounded-full blur-3xl z-0" />
          </motion.div>
        </div>
      </section>

      {/* PRICING GRID SECTION */}
      <section className="bg-[#4E3796] py-24 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white text-3xl md:text-5xl font-black"
            >
              Simple, Transparent Pricing
            </motion.h2>

            <div className="flex items-center justify-center gap-4">
              <span
                className={`text-base transition-colors ${
                  billingCycle === "monthly"
                    ? "text-white font-bold"
                    : "text-white/50"
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
                className="w-16 h-8 bg-white/10 rounded-full relative p-1 transition-colors hover:bg-white/20"
              >
                <motion.div
                  animate={{ x: billingCycle === "yearly" ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-6 h-6 bg-[#FF5364] rounded-full shadow-lg"
                />
              </button>
              <span
                className={`text-base transition-colors ${
                  billingCycle === "yearly"
                    ? "text-white font-bold"
                    : "text-white/50"
                }`}
              >
                Yearly <span className="text-[#FF5364] ml-1">(Save 20%)</span>
              </span>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, idx) => (
              <PricingCard key={idx} plan={plan} cycle={billingCycle} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 bg-[#F8F9FB]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="flex justify-center mb-4 text-[#FF5364]"
            >
              <HelpCircle size={48} />
            </motion.div>
            <h2 className="text-4xl font-black text-[#1D1B26] mb-4 text-center">
              FAQs
            </h2>
            <p className="text-slate-500 text-center">
              Everything you need to know about our subscriptions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="font-bold text-[#1D1B26] text-lg group-hover:text-[#FF5364] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: openFaq === idx ? 180 : 0,
                      backgroundColor:
                        openFaq === idx ? "#FF5364" : "#f1f5f9",
                    }}
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-slate-400 active:scale-90"
                  >
                    {openFaq === idx ? (
                      <Minus size={18} className="text-white" />
                    ) : (
                      <Plus size={18} />
                    )}
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM STRIP */}
      <section className="py-16 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem
            icon={<Smartphone />}
            title="Learn Anywhere"
            desc="iOS & Android apps"
          />
          <FeatureItem
            icon={<Zap />}
            title="Instant Access"
            desc="Start immediately"
          />
          <FeatureItem
            icon={<Shield />}
            title="Safe & Secure"
            desc="SSL Encrypted"
          />
          <FeatureItem
            icon={<Globe />}
            title="Global Support"
            desc="12+ Languages"
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
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className={`p-8 rounded-[40px] border transition-all relative flex flex-col h-full ${
        plan.popular
          ? "bg-white border-white shadow-2xl z-10"
          : "bg-white/5 border-white/10 text-white"
      }`}
    >
      {plan.popular && (
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-[#FF5364] text-white text-[10px] font-black uppercase px-6 py-1.5 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 shadow-xl shadow-pink-500/20 whitespace-nowrap"
        >
          Most Popular
        </motion.span>
      )}

      <h3
        className={`text-2xl font-black mb-2 ${
          plan.popular ? "text-[#1D1B26]" : "text-white"
        }`}
      >
        {plan.name}
      </h3>
      <div className="flex items-baseline gap-1 mb-6">
        <motion.span
          key={price}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`text-5xl font-black ${
            plan.popular ? "text-[#1D1B26]" : "text-white"
          }`}
        >
          ${price}
        </motion.span>
        <span
          className={
            plan.popular ? "text-slate-400 font-medium" : "text-white/50"
          }
        >
          /month
        </span>
      </div>

      <p
        className={`text-sm mb-8 leading-relaxed font-medium ${
          plan.popular ? "text-slate-500" : "text-white/70"
        }`}
      >
        {plan.description}
      </p>

      <div className="space-y-4 mb-10 grow">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div
              className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                plan.popular
                  ? "bg-[#FF5364]/10 text-[#FF5364]"
                  : "bg-white/10 text-white"
              }`}
            >
              <Check size={12} strokeWidth={4} />
            </div>
            <span
              className={`text-sm font-medium ${
                plan.popular ? "text-slate-600" : "text-white/80"
              }`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group transition-all active:scale-95 ${
          plan.popular
            ? "bg-[#FF5364] text-white shadow-lg shadow-pink-200"
            : "bg-white text-[#4E3796] hover:bg-slate-50"
        }`}
      >
        {plan.buttonText}
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>
    </motion.div>
  );
}

function FeatureItem({ icon, title, desc }: FeatureItemProps) {
  return (
    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
      <div className="shrink-0 w-14 h-14 bg-[#FF5364]/5 rounded-2xl flex items-center justify-center text-[#FF5364] shadow-inner">
        {icon}
      </div>
      <div>
        <h4 className="font-black text-slate-900 text-sm tracking-tight">
          {title}
        </h4>
        <p className="text-xs text-slate-400 font-medium whitespace-nowrap">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}