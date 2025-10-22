"use client";

import { useEffect, useState } from "react";
import Header from "./header";
import Hero from "./hero";
import AboutUs from "./about-us";
import WhyChooseUs from "./why-choose-us";
import Certifications from "./certifications";
import ServicesModules from "./services-modules";
import Footer from "./footer";
import AIServices from "./ai-services";

export default function Client() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-white transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Header />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Certifications />
      <ServicesModules />
      <AIServices />
      <Footer />
    </div>
  );
}
