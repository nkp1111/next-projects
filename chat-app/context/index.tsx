"use client";

import { createContext, useState } from "react";

const AppContext = createContext({});

const AppProvider = (
  { children }:
    { children: React.ReactNode }
) => {

  const [currentSpeaker, setCurrentSpeaker] = useState<string>("");

  return (
    <AppContext.Provider
      value={{
        currentSpeaker,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export {
  AppContext,
  AppProvider,
}