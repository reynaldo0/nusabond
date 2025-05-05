import React, { useEffect, useRef } from "react";

export const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/background.mp4" type="video/mp4" />
        Browser Anda tidak mendukung tag video.
      </video>

      {/* Awan Pertama */}
      <div
        id="cloud"
        className="absolute bottom-0 scale-y-125 md:scale-y-100 md:-bottom-16 w-full right-0 animate-cloud"
      >
        <img
          src="/illustrator/cloud.svg"
          alt="Cloud Effect"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-5 text-zoom-in bg-black/60">
        {/* Title */}
        <img
          src="/illustrator/NusaBond.svg"
          alt="NusaBond"
          draggable="false"
          className="mb-2"
        />
        {/* Description */}
        <p className="text-lg md:text-2xl font-semibold max-w-xl mb-2 text-zoom-in">
          Bondmates! Sudah siap mengeksplorasi keajaiban budaya di Nusantara?
        </p>
        {/* Button */}
        <div className="pt-5">
          <button
            id="exploreButton"
            className="relative flex items-center px-2 py-2 bg-[#F5A200] text-black font-medium rounded-full overflow-hidden hover:bg-[#F5A200]/90 group transition button-zoom-in"
          >
            <div className="relative inline-block group">
              <span className="relative z-10 text-white px-7 py-1 rounded-full text-xl transition-colors duration-500 ease-in-out">
                Jelajahi
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
          </button>
        </div>
      </div>
    </section>
  );
};
