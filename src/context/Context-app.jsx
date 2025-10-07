import { createContext, useState } from "react";

export const ContextApp = createContext();

export const ContextProvider = ({ children }) => {
  const [Banner, setBanner] = useState(
    "https://cdn.pixabay.com/video/2024/02/26/202004-916894674_tiny.jpg"
  );
  const [IsCollapsedMenuOpen, setIsCollapsedMenuOpen] = useState(false);

  return (
    <ContextApp.Provider
      value={{ Banner, IsCollapsedMenuOpen, setIsCollapsedMenuOpen }}
    >
      {children}
    </ContextApp.Provider>
  );
};
