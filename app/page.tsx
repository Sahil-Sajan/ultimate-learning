"use client";

import CategoryGrid from "@/components/Home/CategoryGrid.";
import Courses from "@/components/Home/Courses";
// import FeatureCards from "@/components/Home/FeatureCards";
import FeaturesSection from "@/components/Home/FeatureSection";
import Hero from "@/components/Home/Hero";
import InquirySection from "@/components/Home/InquirySection";
import Testimonials from "@/components/Home/Testimonials";

import Footer from "@/ui/Footer";

const page = () => {
  return (
    <div>
      <Hero />
      {/* <FeatureCards /> */}
      <FeaturesSection />
      <CategoryGrid />
      <Courses />
      <InquirySection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default page;
