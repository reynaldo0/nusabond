import React from "react";
import { useLocation } from "react-router-dom";
import { pulauHeroData } from "../../../docs/pulauHeroData";

const Hero = () => {
  const location = useLocation();
  const path = location.pathname.split("/pulau-")[1] || "jawa";

  const { title, description, background } =
    pulauHeroData[path] || pulauHeroData["jawa"];

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
      style={{ backgroundImage: `url('${background}')` }}
      id="hero"
    >
      <div className="absolute inset-0 bg-primary-100 opacity-65 pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white/100 via-[#59C296]/40 to-transparent pointer-events-none"></div>

      <div className="absolute bottom-36 mx-4 md:mx-0 text-justify md:bottom-40 text-white md:left-20 md:right-20">
        <p
          className="text-3xl md:text-5xl font-bold pb-2 md:pb-4"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {title}
        </p>
        <p
          className="text-base md:text-2xl"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
