import React from "react";
import Map from "../../components/Map";

const Peta = () => {
  return (
    <section
      id="eksplore"
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero/about.png')" }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black opacity-65 z-0 pointer-events-none"></div>

      {/* Cloud di atas */}
      <div className="relative z-10">
        <img
          src="/illustrator/cloud/awan1.svg"
          className="w-full h-auto"
          alt="cloud"
        />
      </div>

      {/* Konten Utama */}
      <div
        className="relative z-10 px-8 md:px-24 lg:px-20 pt-16 lg:pt-32 pb-20 flex flex-col-reverse lg:flex-row-reverse justify-between text-white gap-y-10 lg:gap-x-10 items-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {/* Map Section */}
        <div className="w-full flex flex-col items-center lg:items-start">
          <div className="hidden md:block mb-4 animate-horizontal-bounce hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-lg">
              Arahkan Kursor ke{" "}
              <span className="text-[#FBC740] text-xl">Daerah Anda</span>
            </span>
          </div>
          <div className="w-full">
            <Map />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full">
          <div className="relative">
            <h1
              className=" text-lg md:text-2xl xl:text-3xl font-bold mb-4 text-left"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div className="absolute -top-4 -left-3 md:-left-[7px] md:-top-4">
                <img src="/icon/sinar.svg" alt="icon" />
              </div>
              Bondmates, yuk eksplor dan{" "}
              <span className="md:underline md:underline-offset-[15px] decoration-[#FBC740]">
                kenali ragam budaya{" "}
              </span>
              <span className="md:mt-4 md:block underline underline-offset-8 md:no-underline decoration-[#FBC740]">
                Indonesia!
              </span>
            </h1>
            <p
              className="text-base md:text-[20px] xl:text-xl leading-relaxed text-justify md:text-left"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Indonesia, negeri dengan sejuta pesona yang tersebar dari Sabang
              sampai Merauke! Setiap pulau memiliki budaya, tradisi, dan seni
              yang begitu luar biasa. Arahkan kursor ke peta di samping, klik,
              dan siap-siap terpesona dengan keindahan budaya Nusantara yang
              menunggu untuk ditemukan. Ayo, mulai petualanganmu sekarang!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Peta;
