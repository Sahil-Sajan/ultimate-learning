"use client";

import Article from "@/components/Home/Articale";
import CategoryGrid from "@/components/Home/CategoryGrid.";
import Courses from "@/components/Home/Courses";
import HomeCard from "@/components/Home/FeatureCards";
// import FeatureCards from "@/components/Home/FeatureCards";
import FeaturesSection from "@/components/Home/FeatureSection";
import Hero from "@/components/Home/Hero";
import HomeMainCard from "@/components/Home/HomeMainCard";
import InquirySection from "@/components/Home/InquirySection";
import InstructorSection from "@/components/Home/Instructor";
import Testimonial from "@/components/Home/Testimonials";
import Work from "@/components/Home/Work";

import Footer from "@/ui/Footer";

const page = () => {
  return (
    <div>
      <Hero />
      {/* <FeatureCards /> */}
      <HomeCard />
      <FeaturesSection />
      <HomeMainCard />

      {/* <CategoryGrid /> */}
      <Courses />
      <InquirySection />
      <Work />
      <InstructorSection />
      <Testimonial />
      <Article />

      {/* <Footer /> */}
    </div>
  );
};

export default page;
