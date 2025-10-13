import { useEffect, useState } from "react";
import AboutUs from "./components/AboutUs";
import AIServices from "./components/AIServices";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesModules from "./components/ServicesModules";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
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
