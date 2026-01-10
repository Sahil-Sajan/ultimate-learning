"use client";

import Articale from "@/components/Home/Articale";
import Benifits from "@/components/Home/Benifits";
import CategoryGrid from "@/components/Home/CategoryGrid.";
import ContactFooter from "@/components/Home/ContactFooter";
import Courses from "@/components/Home/Courses";
// import FeatureCards from "@/components/Home/FeatureCards";
import FeaturesSection from "@/components/Home/FeatureSection";
import Hero from "@/components/Home/Hero";
import InquirySection from "@/components/Home/InquirySection";
import Testimonials from "@/components/Home/Testimonials";
import Work from "@/components/Home/Work";

import Footer from "@/ui/Footer";

const page = () => {
  return (
    <>
      <Hero />
      {/* <FeatureCards /> */}
      <Benifits />
      <FeaturesSection />
      <CategoryGrid />
      <Courses />
      <InquirySection />
      <Work />
      <Testimonials />
      <Articale />
      <Footer />
     
    </>
  );
};

export default page;
