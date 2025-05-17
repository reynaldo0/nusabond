import React from "react";

const Kebudayaan = () => {
  return (
    <section class="relative">
      <div class="w-full relative">
        {/* <!-- Kiri --> */}
        <div class="scale-75 md:scale-100">
          <img
            src="assets/illustrator/kebudayaan/jawa/left.svg"
            alt="Gunung Kiri"
            class="max-w-full absolute -left-16 md:left-0 -top-60 md:-top-96 animate-move-left-right"
          />
          {/* <!-- sumber : https://www.flaticon.com/free-icon/gunungan_8029650?term=gunungan&page=1&position=1&origin=tag&related_id=8029650 --> */}
        </div>

        {/* <!-- Kanan --> */}
        <div class="relative">
          <div class="relative scale-75 md:scale-100">
            <img
              src="assets/illustrator/kebudayaan/jawa/right.svg"
              alt="Gunung Kanan"
              class="max-w-full absolute -top-60 -right-[62px] md:right-0 md:-top-96 animate-move-left-right-right"
            />
            {/* <!-- sumber dayak : https://www.flaticon.com/free-icon/dayak_8029644?term=dayak&page=1&position=3&origin=search&related_id=8029644 --> */}
          </div>
        </div>
      </div>
      <div class="absolute -bottom-2 w-screen">
        <img src="assets/illustrator/wave/slider.png" alt="" class="w-full" />
      </div>

      <div
        class="text-center items-center text-2xl pt-36 md:pt-64 text-primary-200"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        Kebudayaan
      </div>
      <div
        class="text-center items-center font-bold text-5xl text-primary-200 pb-10"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        Pulau Jawa
      </div>

      <div class="max-w-7xl px-5 mx-auto relative py-20 md:pb-56 overflow-x-hidden">
        {/* <!-- Swiper Carousel --> */}
        <div
          class="swiper-container relative"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="assets/budaya/jawa/batik.png"
                alt="Batik"
                id="button-0"
                class="rounded-lg shadow"
              />
              {/* <!-- sumber batik : https://pixabay.com/id/photos/batik-keahlian-budaya-tradisional-5697482/ --> */}
            </div>
            <div class="swiper-slide">
              <img
                src="assets/budaya/jawa/gamelan.png"
                alt="Gamelan"
                id="button-1"
                class="rounded-lg shadow"
              />
              {/* <!-- sumber gamelan : https://pixabay.com/id/photos/gamelan-musik-tradisi-budaya-7839870/ --> */}
            </div>
            <div class="swiper-slide">
              <img
                src="assets/budaya/jawa/jaipongan.png"
                alt="Jaipongan"
                id="button-2"
                class="rounded-lg shadow"
              />
              {/* <!-- sumber jaipongan : https://newsletter.kagumhotels.com/wp-content/uploads/2021/06/Jaipong-01.jpg --> */}
            </div>
            <div class="swiper-slide">
              <img
                src="assets/budaya/jawa/wayang.png"
                alt="Wayang Golek"
                id="button-3"
                class="rounded-lg shadow"
              />
              {/* <!-- sumber wayang golek : https://indonesia.go.id/kategori/keanekaragaman-hayati/1113/wayang-golek-purwa-sunda-sebuah-peleburan-kreativitas?lang=1  --> */}
            </div>
            <div class="swiper-slide">
              <img
                src="assets/budaya/jawa/palang-pintu.png"
                alt="Palang Pintu"
                id="button-4"
                class="rounded-lg shadow"
              />
              {/* <!-- sumber palang pintu : https://hypeabis.id/hypephoto/28062/palang-pintu-seni-yang-tak-lekang-dimakan-zaman --> */}
            </div>
            <div class="swiper-slide">
              <img
                src="assets/budaya/jawa/Lenong.png"
                alt="Lenong"
                id="button-5"
                class="rounded-lg shadow"
              />
              {/* <!-- sumber Lenong : https://topnews62.com/posts/288858/mengenal-lebih-dekat-wisata-pertunjukan-lenong-betawi --> */}
            </div>
          </div>

          {/* <!-- Custom Navigation --> */}
          <button class="custom-prev -left-5 md:left-0">&lt;</button>
          <button class="custom-next -right-5 md:right-0">&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Kebudayaan;
