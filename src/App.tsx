import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import Certifications from "./components/Certifications";
import AIServices from "./components/AIServices";
import Footer from "./components/Footer";
import ServicesModules from "./components/ServicesModules";

function App() {
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

export default App;
