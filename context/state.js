import { createContext, useState } from "react";

export const AppContext = createContext(null);

export default function AppWrapper({ children }) {
  const [currentArticles, setCurrentArticles] = useState([]);

  return (
    <AppContext.Provider value={{ currentArticles, setCurrentArticles }}>
      {children}
    </AppContext.Provider>
  );
}
