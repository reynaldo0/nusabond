import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

// Import data budaya & hero
import { jawaBudaya, JawaTitle } from "../../../docs/jawaBudaya";
import {
  kalimantanBudaya,
  kalimantanTitle,
} from "../../../docs/kalimantanBudaya";
import { sumateraBudaya } from "../../../docs/sumateraBudaya";
import { sulawesiBudaya } from "../../../docs/sulawesiBudaya";
import { papuaBudaya } from "../../../docs/papuaBudaya";
import { pulauHeroData } from "../../../docs/pulauHeroData";

// Peta data budaya
const budayaMap = {
  "/pulau-jawa": { data: jawaBudaya },
  "/pulau-kalimantan": { data: kalimantanBudaya },
  "/pulau-sumatera": { data: sumateraBudaya },
  "/pulau-sulawesi": { data: sulawesiBudaya },
  "/pulau-papua": { data: papuaBudaya },
};

const CultureSlider = () => {
  const location = useLocation();
  const path = location.pathname;
  const slug = path.replace("/pulau-", "") || "jawa";
  const currentPulau = pulauHeroData[slug];

  const matchedKey = Object.keys(budayaMap).find((key) => path.startsWith(key));

  const selectedBudaya = matchedKey
    ? budayaMap[matchedKey]
    : budayaMap["/pulau-jawa"];

  const cultures = selectedBudaya.data;

  return (
    <>
      {/* ===== Section Dekorasi dan Judul ===== */}
      <section className="relative">
        <div className="w-full relative">
          {/* Dekorasi Kiri */}
          <div className="scale-75 md:scale-100">
            <img
              src={currentPulau?.decorations?.left?.src}
              alt={currentPulau?.decorations?.left?.alt}
              className={currentPulau?.decorations?.left?.className}
            />
          </div>

          {/* Dekorasi Kanan */}
          <div className="relative scale-75 md:scale-100">
            <img
              src={currentPulau?.decorations?.right?.src}
              alt={currentPulau?.decorations?.right?.alt}
              className={currentPulau?.decorations?.right?.className}
            />
          </div>
        </div>

        {/* Judul */}
        <div
          className="text-center items-center text-2xl pt-36 md:pt-64 text-primary-200"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          Kebudayaan
        </div>
        <div
          className="text-center items-center font-bold text-5xl text-primary-200 pb-10"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {currentPulau?.page}
        </div>
      </section>

      {/* ===== Section Swiper Slider ===== */}
      <section className="w-full px-4 py-10 ">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cultures.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="m-5 overflow-hidden flex flex-col h-full min-h-[500px] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-92 w-full object-cover rounded-2xl"
                />
                <div className="p-5 flex-1 bg-white flex flex-col -translate-y-8 z-10 rounded-2xl relative mx-5">
                  <span className="text-sm text-gray-400 uppercase mb-1">
                    BUDAYA {currentPulau?.page}
                  </span>
                  <h3 className="text-3xl font-bold mb-2 pr-20">
                    {item.title}
                  </h3>
                  <p className="text-xl text-gray-600 text-justify">
                    {item.desc}
                  </p>

                  <a
                    href={item.url}
                    className="absolute right-8 top-6 inline-flex items-center gap-2 bg-secondary-200 text-white px-5 py-4 rounded-full hover:bg-secondary-200/90 transition"
                  >
                    <FontAwesomeIcon icon={faFileAlt} className="text-2xl" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default CultureSlider;
