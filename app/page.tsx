"use client";

import Article from "@/components/Home/Articale";
import Articale from "@/components/Home/Articale";
import Benifits from "@/components/Home/Benifits";
import CategoryGrid from "@/components/Home/CategoryGrid.";
import ContactFooter from "@/components/Home/ContactFooter";
import Courses from "@/components/Home/Courses";
import HomeCard from "@/components/Home/FeatureCards";
// import FeatureCards from "@/components/Home/FeatureCards";
import FeaturesSection from "@/components/Home/FeatureSection";
import Hero from "@/components/Home/Hero";
import HomeMainCard from "@/components/Home/HomeMainCard";
import InquirySection from "@/components/Home/InquirySection";
import InstructorSection from "@/components/Home/Instructor";
import Testimonial from "@/components/Home/Testimonials";

import Footer from "@/ui/Footer";

const page = () => {
  return (
    <>
      <Hero />
      {/* <FeatureCards /> */}
      <HomeCard />
      <FeaturesSection />
      <HomeMainCard />

      {/* <CategoryGrid /> */}
      <Courses />
      <InquirySection />
      <InstructorSection />
      <Testimonial />
      <Article />

      {/* <Footer /> */}
    </>
  );
};

export default page;
