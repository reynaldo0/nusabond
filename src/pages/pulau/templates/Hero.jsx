import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { pulauHeroData } from "../../../docs/pulauHeroData";
import { PulauJawa } from "../../../models/components/PulauJawa";

const Hero = () => {
  const location = useLocation();
  const path = location.pathname.split("/pulau-")[1] || "jawa";

  const { background } = pulauHeroData[path] || pulauHeroData["jawa"];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // batas mobile bisa disesuaikan
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [scale, setScale] = useState(0.6);

  useEffect(() => {
    function updateScale() {
      if (window.innerWidth < 768) {
        // Mobile
        setScale(0.3);
      } else {
        // Desktop
        setScale(0.6);
      }
    }

    updateScale(); // set awal
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
      style={{ backgroundImage: `url('${background}')` }}
      id="hero"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-100/65 backdrop-blur-md pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-[#F6F4F0] via-[#59C296]/40 to-transparent backdrop-blur-md pointer-events-none" />

      {/* Text */}
      <img
        src="/hero/text.svg"
        alt="NusaBond"
        draggable="false"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-2 z-10"
      />
      <div
        className="absolute inset-0 z-[9999999] md:hidden"
        style={{
          backgroundColor: "transparent",
          touchAction: "auto", // biar browser tahu ini bisa di scroll
        }}
      />

      {/* 3D Canvas */}
      <div className="absolute top-1/2 left-1/2 w-full h-[580px] transform -translate-x-1/2 -translate-y-1/2 z-[9999] touch-action-auto">
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <PulauJawa scale={scale} />
            <Environment preset="sunset" />
          </Suspense>
          \
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={2}
            enableRotate={!isMobile}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
