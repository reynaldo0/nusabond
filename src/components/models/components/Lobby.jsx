import { useEffect, useRef, useState } from "react";
import { useProgress } from "@react-three/drei";
import { usePlay } from "../../../context/play";
import { useGreetingContext } from "../../../context/GreetingContext";

const Lobby = () => {
  const { progress } = useProgress();
  const { setPlay } = usePlay();
  const buttonRef = useRef();
  const [open, setOpen] = useState(true);
  const [disable, setDisable] = useState(true);
  const { setIsOpen } = useGreetingContext();
  useEffect(() => {
    if (progress >= 100) {
      setDisable(false);
    }
  }, [progress]);

  const handleClick = () => {
    setOpen(false);
    setIsOpen(false);
    setPlay(true);
  };

  const floor = Math.floor(progress);

  return (
    <>
      {open && (
        <div className="flex flex-col h-[100dvh] justify-center items-center w-full absolute overflow-hidden top-0 z-40 bg-[#92d9ed] px-2">
          <section className="container max-w-screen-xl">
            <div className="w-full">
              <div className="flex flex-col justify-center items-center">
                <div className="space-y-5 md:max-w-4xl my-8 text-center text-black">
                  <p className="font-[550] text-center md:text-center text-2xl md:text-4xl lg:text-2xl font-primary">
                    Selamat datang
                    <br />
                    di Geoportal Laut Berkah
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src="/logo.webp"
                      className="max-w-full w-[150px] md:w-[250px] lg:w-[150px] h-auto"
                    />
                  </div>
                  <p className="mt-2 font-normal text-lg md:text-2xl lg:text-lg font-secondary max-w-[550px] md:max-w-full lg:max-w-[550px]">
                    Platform digital pintar yang dirancang untuk mempermudah
                    proses izin pemanfaatan ruang laut di Kalimantan Tengah.
                  </p>
                </div>
                <button
                  ref={buttonRef}
                  className={`text-white btn-loading text-lg md:text-2xl lg:text-lg font-medium bg-blue-700 px-10 py-4 rounded-full hover:bg-white hover:text-zinc-950 font-secondary duration-300 ${
                    disable ? "opacity-70" : "opacity-100"
                  }`}
                  onClick={() => handleClick()}
                  disabled={disable}
                >
                  {disable ? `Loading ${floor}%` : "Mulai Ekplorasi"}
                </button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Lobby;
