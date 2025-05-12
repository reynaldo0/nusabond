import React from "react";
import GarudaLoader from "../../components/models/Garuda";
import { Canvas } from "@react-three/fiber";
import GarudaScene from "../../components/models/GarudaScene";

const Hero = () => {
  return (
    <section>
      <div class="container mx-auto">
        <div class="absolute md:scale-75 md:-left-20 md:top-40">
          <img src="assets/illustrator/batik/batik.svg" alt="" />
        </div>
        <div class="absolute hidden md:block md:left-20 md:bottom-40">
          <img src="assets/illustrator/batik/batik2.svg" alt="" />
        </div>
        <div class="absolute hidden md:block md:left-60 md:bottom-48 md:scale-125">
          <img src="assets/illustrator/batik/batik2.svg" alt="" />
        </div>
        <div class="absolute hidden md:block md:right-0 md:bottom-0">
          <img src="assets/illustrator/batik/batik3.svg" alt="" />
        </div>
        <div class="absolute hidden md:block md:right-48 md:bottom-48 md:scale-125">
          <img src="assets/illustrator/batik/batik2.svg" alt="" />
        </div>
        <div class="md:px-12 md:mt-24">
          <h1
            class="text-center hidden md:block text-xl md:text-3xl px-5 md:px-10 font-semibold"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            Kami membawa visi untuk menjadi
            <span class="relative">
              gerakan utama
              <span class="absolute inset-0 md:-z-50 translate-y-6 translate-x-1 bg-[#FBC740] mb-4"></span>
            </span>
            <br class="hidden md:block" />
            dalam melestarikan budaya Indonesia
          </h1>
        </div>
        {/* <!-- HERO SECTION START --> */}
        <section>
          {/* <!-- Content --> */}
          <div class="relative z-10 flex flex-col-reverse md:flex-row-reverse items-center justify-between h-full px-6 md:px-10 py-10 md:py-0">
            {/* <!-- Left Section --> */}
            <div class="flex flex-col items-start text-black max-w-xl">
              {/* <!-- Title --> */}
              <div class="md:px-12">
                <h1
                  class="text-left md:hidden text-xl md:text-3xl md:px-10 font-semibold"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  Kami membawa visi untuk menjadi gerakan utama
                  <br class="hidden md:block" />
                  dalam melestarikan 
                  <span class="relative pl-1">
                    budaya Indonesia
                    <span class="absolute inset-0 -z-50 translate-y-4 translate-x-2 bg-[#FBC740] mb-4"></span>
                  </span>
                </h1>
              </div>
              {/* <!-- Description --> */}
              <p
                class="text-base md:text-2xl"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                Halo, Bondmates! Tahukah kamu? Generasi muda Indonesia adalah
                pondasi utama untuk melestarikan kekayaan budaya Nusantara.
                Mulai dari Sumatera yang kaya akan tradisi Melayu, Jawa dengan
                nilai-nilai spiritualnya, Kalimantan yang menjaga kebudayaan
                Dayak, Sulawesi yang dihiasi ragam budaya Bugis dan Toraja,
                hingga Papua yang penuh kearifan lokal.
              </p>
              <p
                class="pt-5 md:pt-10 font-medium md:font-bold text-base md:text-xl"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                Yuk, jadi bagian dari gerakan melestarikan budaya Nusantara,
                bersama
                <span class="font-bold md:font-extrabold pl-1 text-secondary-300">
                  NusaBond!
                </span>
              </p>
            </div>

            {/* <!-- Right Section (Canvas) --> */}
            <div className="relative w-full h-full pt-10 md:pt-0 flex-cols-reverse items-center justify-center">
              <div className="h-60 md:w-96 md:h-80">
                <GarudaScene />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
