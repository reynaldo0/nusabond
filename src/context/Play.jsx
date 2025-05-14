import { createContext, useContext, useRef, useState } from "react";

const Context = createContext();

export const PlayProvider = ({ children }) => {
  const [play, setPlay] = useState(false);
  const [end, setEnd] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const cameraRef = useRef(null);
  const cameraGroupRef = useRef(null);

  return (
    <Context.Provider
      value={{
        play,
        setPlay,
        end,
        setEnd,
        isModalVisible,
        setModalVisible,
        hasScroll,
        setHasScroll,
        isPaused,
        setIsPaused,
        currentSectionIndex,
        setCurrentSectionIndex,
        cameraRef,
        cameraGroupRef,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const usePlay = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("usePlay must be used within a PlayProvider");
  }

  return context;
};
