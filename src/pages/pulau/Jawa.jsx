import React, { useState } from "react";
import Hero from "./templates/Hero";
import Kebudayaan from "./templates/Kebudayaan";
import Content from "./templates/Content";
import { jawaBudaya } from "../../docs/jawaBudaya";
import Footer from "../../components/Footer";

const Jawa = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Hero />
      <Kebudayaan onSlideChange={setCurrentIndex} />
      <Content current={jawaBudaya[currentIndex]} />
      <Footer />
    </>
  );
};

export default Jawa;
