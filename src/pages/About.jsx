import React from "react";
import Peta from "./About/Peta";
import Hero from "./About/Hero";
import Tantangan from "./About/Tantangan";
import Upaya from "./About/Identitas";
import Form from "./About/Form";
import Cta from "./About/Cta";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Peta />
      <Tantangan />
      <Upaya />
      <Form />
      <Cta />
      <Footer />
    </div>
  );
};

export default About;
