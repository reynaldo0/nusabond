// GarudaScene.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import GarudaLoader from "./Garuda";

export default function GarudaScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [2, 1, 3], fov: 50 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />

      <Suspense
        fallback={
          <Html center>
            <div className="text-white">Loading...</div>
          </Html>
        }
      >
        <GarudaLoader scale={1.5} />
        <Environment preset="sunset" />
      </Suspense>

      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
