"use client";

import formatCategory from "@/lib/formatCategory";
import { formattedCategoryType } from "@/types";
import { createContext, useState, useEffect, ReactNode } from "react";


const AppContext = createContext<any>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<formattedCategoryType>({
    segment: [],
    types: [],
  });

  const handleCategory = async () => {
    const res = await fetch("/api/category?location=US");
    const data = await res.json();
    const formattedData = await formatCategory(data)
    // console.log(formattedData);
    setCategories(formattedData)
  }
  return (
    <AppContext.Provider
      value={{
        categories,
        handleCategory,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export {
  AppContext,
  AppProvider,
}
