import React from "react";

const Hero = () => {
  return (
    <div
      class="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
      style="background-image: url('assets/hero/jawa.png')"
      id="hero"
    >
      <div class="absolute inset-0 bg-primary-100 opacity-65 pointer-events-none"></div>

      <div class="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white/100 via-[#59C296]/40 to-transparent pointer-events-none"></div>

      <div class="absolute bottom-36 mx-4 md:mx-0 text-justify md:bottom-40 text-white md:left-20 md:right-20">
        <p
          class="text-3xl md:text-5xl font-bold pb-2 md:pb-4"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          Jawadwipa
        </p>
        <p
          class="text-base md:text-2xl"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Halo, Bondmates! Yuk, kita jalan-jalan ke Pulau Jawa! Pulau ini penuh
          dengan keindahan budaya, tradisi, dan seni yang nggak ada habisnya
          buat dibahas. Setiap kisahnya punya nilai-nilai mendalam yang bikin
          kita makin cinta sama tanah air. Siap? Mari kita mulai!
        </p>
      </div>
    </div>
  );
};

export default Hero;
