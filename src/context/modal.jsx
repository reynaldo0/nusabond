import { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalData, setModalData] = useState(null);

  const openModal = (islandName, index) => {
    console.log("openModal called with:", { islandName, index }); // Debug log
    if (islandName && typeof index === "number") {
      setModalData({ islandName, index });
    } else {
      console.error("Invalid modal data:", { islandName, index });
    }
  };

  const closeModal = () => {
    console.log("closeModal called, clearing modalData"); // Debug log
    setModalData(null);
  };

  // Debug log for modalData changes
  useEffect(() => {
    console.log("modalData updated:", modalData);
  }, [modalData]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalData }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
