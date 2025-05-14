import React from "react";
import GarudaScene from "../../components/models/GarudaScene";

const Hero = () => {
  return (
    <section>
      <div className="relative">
        {/* Decorative Batik Illustrations */}
        <div className="absolute hidden md:block md:scale-75 md:-left-20 md:top-40">
          <img src="assets/illustrator/batik/batik.svg" alt="Batik" />
        </div>
        <div className="absolute hidden md:block md:left-20 md:bottom-40">
          <img src="assets/illustrator/batik/batik2.svg" alt="Batik" />
        </div>
        <div className="absolute hidden md:block md:left-60 md:bottom-48 md:scale-125">
          <img src="assets/illustrator/batik/batik2.svg" alt="Batik" />
        </div>
        <div className="absolute hidden md:block md:right-0 md:bottom-0">
          <img src="assets/illustrator/batik/batik3.svg" alt="Batik" />
        </div>
        <div className="absolute hidden md:block md:right-48 md:bottom-48 md:scale-125">
          <img src="assets/illustrator/batik/batik2.svg" alt="Batik" />
        </div>

        {/* Desktop Title */}
        <div className="md:px-12 md:mt-24">
          <h1
            className="text-center hidden sm:block text-lg md:text-2xl xl:text-3xl px-5 md:px-10 font-semibold"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            Kami membawa visi untuk menjadi
            <span className="relative">
              {" "}
              gerakan utama
              <span className="absolute inset-0 md:-z-50 translate-y-6 translate-x-1 bg-[#FBC740] mb-4"></span>
            </span>
            <br className="hidden md:block" />
            dalam melestarikan budaya Indonesia
          </h1>
        </div>

        {/* Main Hero Content */}
        <section>
          <div className="relative z-10 flex flex-col-reverse lg:flex-row-reverse items-center justify-between px-8 md:px-24 lg:px-20 py-12 md:py-10 lg:pt-10 lg:pb-0 md gap-y-6 lg:gap-y-0 lg:gap-x-6 xl:gap-x-0">
            {/* Text Section */}
            <div className="flex flex-col items-start text-black">
              {/* Mobile Title */}
              <div className="md:px-12">
                <h1
                  className="text-left md:hidden text-xl md:text-3xl md:px-10 font-semibold"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  Kami membawa visi untuk menjadi gerakan utama dalam melestarikan
                  <span className="relative pl-1">
                    Budaya Indonesia
                    <span className="absolute inset-0 -z-50 translate-y-4 translate-x-2 bg-[#FBC740] mb-4"></span>
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p
                className="pt-5 md:pt-0 text-base md:text-xl xl:text-2xl xl:max-w-xl"
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
                className="pt-5 md:pt-10 font-medium md:font-bold text-base md:text-xl xl:text-2xl"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                Yuk, jadi bagian dari gerakan melestarikan budaya Nusantara,
                bersama
                <span className="font-bold md:font-extrabold pl-1 text-secondary-300">
                  NusaBond!
                </span>
              </p>
            </div>

            {/* Garuda 3D Section */}
            <div className="relative w-full h-full pt-10 md:pt-0 flex justify-center">
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
