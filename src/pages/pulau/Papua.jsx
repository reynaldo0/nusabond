import React, { useState } from "react";
import Hero from "./templates/Hero";
import Kebudayaan from "./templates/Kebudayaan";
import Content from "./templates/Content";
import Footer from "../../components/Footer";
import { papuaBudaya } from "../../docs/papuaBudaya";

const Papua = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Kebudayaan onSlideChange={setCurrentIndex} />
      <Content current={papuaBudaya[currentIndex]} />
      <Footer />
    </div>
  );
};

export default Papua;
