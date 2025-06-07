import React from "react";
import { Link } from "react-router-dom";

export const HeroQuiz = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/illustrator/quiz.png')" }}
    >

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-5 text-zoom-in bg-black/10">
        {/* Title */}
        <img
          src="/illustrator/logo/quiz.png"
          alt="NusaBond"
          width={300}
          draggable="false"
          className="mb-2"
        />
        {/* Description */}
        <p className="text-lg text-primary-100 md:text-2xl font-semibold max-w-xl mb-2 text-zoom-in">
          Yuk uji seberapa “Indonesia” sih kamu?
        </p>
        {/* Button */}
        <div className="pt-5">
          <Link
            to={"/soal-quiz"}
            id="exploreButton"
            className="relative flex items-center px-2 py-2 bg-[#F5A200] text-black font-medium rounded-full overflow-hidden hover:bg-[#F5A200]/90 group transition button-zoom-in"
          >
            <div className="relative inline-block group">
              <span className="relative z-10 text-white px-7 py-1 rounded-full text-xl transition-colors duration-500 ease-in-out">
                Mulai
              </span>
              <div className="absolute -top-1 left-0 h-9 w-full bg-[#2A4B32] rounded-full transition-transform duration-500 ease-in-out origin-left scale-x-100 group-hover:scale-x-125"></div>
            </div>

            <span className="ml-4 text-xl font-bold bg-white rounded-full p-2 flex items-center justify-center relative overflow-hidden z-10">
              <img
                src="/icon/arrow.svg"
                width="20"
                alt="Arrow"
                className="transition-transform transform group-hover:translate-x-1"
              />
            </span>
            <span className="absolute inset-0"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};
