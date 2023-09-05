"use client";

import formatCategory from "@/lib/formatCategory";
import { formattedCategoryType, searchBarType } from "@/types";
import { createContext, useState, useEffect, ReactNode } from "react";


const AppContext = createContext<any>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<formattedCategoryType>({
    segment: [],
    types: [],
  });

  const [searchData, setSearchData] = useState<searchBarType>({
    location: "NY",
    date: new Date(),
    keyword: "",
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
        searchData,
        setSearchData,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export {
  AppContext,
  AppProvider,
}
