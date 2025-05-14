import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Overlay } from "../models/Overlay";
import { Experience } from "../models/Experience";
import { ModalProvider, useModal } from "../context/modal";
import { usePlay } from "../context/Play";
import { Modal } from "../models/Modal";

function SceneContent() {
  const { play, end, isPaused, setIsPaused } = usePlay();
  const { modalData, closeModal } = useModal();

  return (
    <>
      <Canvas style={{ zIndex: 0 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls
          pages={play && !end ? 20 : 0}
          damping={0.5}
          style={{
            top: "10px",
            left: "0px",
            bottom: "10px",
            right: "10px",
            width: "auto",
            height: "auto",
            animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
            opacity: 0,
            zIndex: 0,
          }}
        >
          <Experience />
        </ScrollControls>
      </Canvas>
      <Overlay />
      <Modal
        isOpen={isPaused}
        onClose={() => {
          console.log("Modal closed");
          setIsPaused(false);
          closeModal();
        }}
        onContinue={() => {
          console.log("Modal continued");
          setIsPaused(false);
          closeModal();
        }}
        islandName={modalData?.islandName || "Unknown Island"}
      />
    </>
  );
}

function Scene() {
  return (
    <ModalProvider>
      <SceneContent />
    </ModalProvider>
  );
}

export default Scene;
