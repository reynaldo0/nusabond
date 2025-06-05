import React, { useState } from "react";
import Kebudayaan from "./templates/Kebudayaan";
import Content from "./templates/Content";
import Footer from "../../components/Footer";
import { sumateraBudaya } from "../../docs/sumateraBudaya";
import Hero from "./templates/Hero";

const Sumatera = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Kebudayaan onSlideChange={setCurrentIndex} />
      <Content current={sumateraBudaya[currentIndex]} />
      <Footer />
    </div>
  );
};

export default Sumatera;
