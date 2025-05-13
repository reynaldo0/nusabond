import { useProgress } from "@react-three/drei";
import { usePlay } from "../../../context/play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <img
            src="/illustrator/NusaBond.svg"
            alt="NusaBond"
            draggable="false"
            className="mb-2 logo"
          />
          <p className="intro__scroll">Scroll to begin the journey</p>
          <div className="pt-5 explore">
            <button
              onClick={() => {
                setPlay(true);
              }}
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
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Wish you had a great flight with us...</p>
      </div>
    </div>
  );
};
