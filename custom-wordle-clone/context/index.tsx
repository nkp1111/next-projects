"use client";

import { createContext, useState } from "react";

const AppContext = createContext<any>(null);

const AppProvider = (
  { children }: { children: React.ReactNode }
) => {
  const [isOpen, setIsOpen] = useState(false);
  return <AppContext.Provider
    value={{
      isOpen,
      setIsOpen,
    }}>
    {children}
  </AppContext.Provider>
}


export {
  AppProvider,
  AppContext,
}