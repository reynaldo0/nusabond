import React, { useState } from "react";
import Hero from "./templates/Hero";
import Kebudayaan from "./templates/Kebudayaan";
import Content from "./templates/Content";
import { jawaBudaya } from "../../docs/jawaBudaya";
import Footer from "../../components/Footer";

const Jawa = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Kebudayaan onSlideChange={setCurrentIndex} />
      <Content current={jawaBudaya[currentIndex]} />
      <Footer />
    </div>
  );
};

export default Jawa;
