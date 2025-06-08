import React, { useState, useEffect, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { PulauJawa } from "../../../models/components/PulauJawa";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { PulauSulawesi } from "../../../models/components/PulauSulawesi";
import { Pulaupapua } from "../../../models/components/PulauPapua";
import PulauKalimantan from "../../../models/components/Kalimantan";
import { PulauSumatera } from "../../../models/components/PulauSumatera";
// import komponen lainnya sesuai kebutuhan

const heroImages = {
  jawa: "/hero/title/jawa.svg",
  sumatera: "/hero/title/sumatera.svg",
  kalimantan: "/hero/title/kalimantan.svg",
  sulawesi: "/hero/title/sulawesi.svg",
  papua: "/hero/title/papua.svg",
};

const pulauComponents = {
  jawa: PulauJawa,
  sulawesi: PulauSulawesi,
  papua: Pulaupapua,
  kalimantan: PulauKalimantan,
  sumatera: PulauSumatera,
  // tambah komponen lain di sini
};

const Hero = () => {
  const location = useLocation();
  const path = location.pathname.split("/pulau-")[1] || "jawa";

  const [scale, setScale] = useState(0.6);

  useEffect(() => {
    function updateScale() {
      if (window.innerWidth < 768) {
        setScale(0.3);
      } else {
        setScale(0.5);
      }
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Pilih komponen 3D sesuai path, fallback ke PulauJawa kalau gak ketemu
  const PulauComponent = pulauComponents[path] || PulauJawa;

  // Pilih gambar hero sesuai path, fallback ke jawa
  const heroImage = heroImages[path] || heroImages.jawa;

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
      style={{ backgroundImage: `url('/hero/${path}.png')` }} // sesuaikan background jika perlu
      id="hero"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-100/45 backdrop-blur-sm pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-[#F6F4F0] via-[#59C296]/40 to-transparent backdrop-blur-md pointer-events-none" />

      {/* Text Image */}
      <img
        src={heroImage}
        alt="NusaBond"
        draggable="false"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-2 z-10"
      />

      {/* 3D Canvas */}
      <div className="absolute top-1/2 left-1/2 w-[77%] h-[580px] transform -translate-x-1/2 -translate-y-1/2 z-[9999]">
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} intensity={1} />

          <Suspense fallback={null}>
            <PulauComponent scale={scale} />
            <Environment preset="sunset" />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={2}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
