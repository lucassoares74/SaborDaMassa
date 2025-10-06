import { createContext, useState } from "react";


export const ContextApp = createContext();

export const ContextProvider= ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ContextApp.Provider value={{ theme }}>{children}</ContextApp.Provider>
  );
};
