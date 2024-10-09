import React from "react";
import RootLayout from "@/app/layout";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeatureProducts";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import WhyITEasy from "@/components/WhyITEasy";

const Home = () => {
  return (
    <RootLayout>
      <Hero />
      <FeaturedProducts />
      <WhyITEasy />
      <CallToAction />
      <Testimonials />
    </RootLayout>
  );
};

export default Home;
