import { createContext, useContext, useState } from "react";

const greetingContext = createContext({
  isOpen: true,
  setIsOpen: () => {},
});

const GreetingContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <greetingContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </greetingContext.Provider>
  );
};

export const useGreetingContext = () => useContext(greetingContext);
export default GreetingContextProvider;
