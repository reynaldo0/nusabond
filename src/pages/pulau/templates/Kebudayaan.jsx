import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { jawaBudaya } from "../../../docs/jawaBudaya";
import { sumateraBudaya } from "../../../docs/sumateraBudaya";
import { pulauHeroData } from "../../../docs/pulauHeroData";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { kalimantanBudaya } from "../../../docs/kalimantanBudaya";
import { sulawesiBudaya } from "../../../docs/sulawesiBudaya";

const Kebudayaan = ({ onSlideChange }) => {
  const swiperRef = useRef(null);
  const location = useLocation();

  // Ambil path pertama dari URL, contoh "/jawa" → "jawa"
  const path = location.pathname.split("/")[1] || "jawa";

  const slug = path.replace("pulau-", "") || "jawa";
  const currentPulau = pulauHeroData[slug];
  // Pilih data berdasarkan path
  const budayaList =
    path === "pulau-jawa"
      ? jawaBudaya
      : path === "pulau-sumatera"
      ? sumateraBudaya
      : path === "pulau-kalimantan"
      ? kalimantanBudaya
      : path === "pulau-sulawesi"
      ? sulawesiBudaya
      : [];

  return (
    <section class="relative">
      <div class="w-full relative">
        {/* <!-- Kiri --> */}
        <div class="scale-75 md:scale-100">
          <img
            src={currentPulau?.decorations?.left?.src}
            alt={currentPulau?.decorations?.left?.alt}
            className={currentPulau?.decorations?.left?.className}
          />
          {/* <!-- sumber : https://www.flaticon.com/free-icon/gunungan_8029650?term=gunungan&page=1&position=1&origin=tag&related_id=8029650 --> */}
        </div>

        {/* <!-- Kanan --> */}
        <div class="relative">
          <div class="relative scale-75 md:scale-100">
            <img
              src={currentPulau?.decorations?.right?.src}
              alt={currentPulau?.decorations?.right?.alt}
              className={currentPulau?.decorations?.right?.className}
            />
            {/* <!-- sumber dayak : https://www.flaticon.com/free-icon/dayak_8029644?term=dayak&page=1&position=3&origin=search&related_id=8029644 --> */}
          </div>
        </div>
      </div>

      <div class="absolute -bottom-2 w-full">
        <img src="/illustrator/wave/slider.png" alt="" class="w-screen" />
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
        {currentPulau?.page}
      </div>

      <div className="max-w-7xl px-5 mx-auto relative py-20 md:pb-56 overflow-x-hidden">
        <div data-aos="fade-up" data-aos-duration="1000" className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;

              // ⬅️ Ini kunci agar tombol custom dikenali
              setTimeout(() => {
                swiper.params.navigation.prevEl = ".custom-prev";
                swiper.params.navigation.nextEl = ".custom-next";
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            onSlideChange={(swiper) => {
              onSlideChange(swiper.realIndex);
              document
                .getElementById("content")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            className="relative"
          >
            {budayaList.map((item, index) => (
              <SwiperSlide
                key={index}
                className="my-10 transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="rounded-lg shadow-lg w-full cursor-pointer"
                  onClick={() => {
                    swiperRef.current.slideToLoop(index);
                    onSlideChange(index);
                    document
                      .getElementById("content")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                />
              </SwiperSlide>
            ))}
            <button className="custom-prev cursor-pointer bg-transparent text-white border-2 border-white px-4 py-2 rounded-full absolute left-5 top-1/2 z-10 -translate-y-1/2 text-2xl font-bold">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="custom-next cursor-pointer bg-transparent text-white border-2 border-white px-4 py-2 rounded-full absolute right-5 top-1/2 z-10 -translate-y-1/2 text-2xl font-bold">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Kebudayaan;
