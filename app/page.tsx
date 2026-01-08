import CategoryGrid from "@/components/Home/CategoryGrid.";
import ContactFooter from "@/components/Home/ContactFooter";
import FeaturesSection from "@/components/Home/FeatureSection";
import Hero from "@/components/Home/Hero";
import WhyCourses from "@/components/Home/WhyCourses";

const page = () => {
  return (
    <>
      <Hero />

      <FeaturesSection />
      <CategoryGrid />
      <WhyCourses />
      <ContactFooter />
    </>
  );
};

export default page;
