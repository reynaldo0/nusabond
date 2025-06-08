// ../../../models/Test.js
import React from "react";
import { useGLTF } from "@react-three/drei";

const PulauKalimantan = (props) => {
  const { scene } = useGLTF("/models/kalimantan.glb"); // pastikan path-nya benar
  return <primitive object={scene} {...props} />;
};

export default PulauKalimantan;

// Penting: tambahkan preloading jika perlu
useGLTF.preload("/models/kalimantan.glb");
