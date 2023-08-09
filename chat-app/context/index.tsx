"use client";

import { createContext, useEffect, useState } from "react";
import { UserData } from "@/types";

const AppContext = createContext({});

const AppProvider = (
  { children }:
    { children: React.ReactNode }
) => {

  const [currentListener, setCurrentListener] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<UserData>({
    _id: "",
    email: "",
    username: "",
    friends: [],
    password: "",
    avatar: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser])

  return (
    <AppContext.Provider
      value={{
        currentListener,
        setCurrentListener,
        currentUser,
        setCurrentUser,
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