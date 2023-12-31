"use client";

import formatCategory from "@/lib/formatCategory";
import getCountryData from "@/lib/getCountryData";
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

  const [selectCountry, setSelectCountry] = useState<any[]>([]);


  const handleCategory = async () => {
    const res = await fetch("/api/category?location=US");
    const data = await res.json();
    const formattedData = await formatCategory(data)
    // console.log(formattedData);
    setCategories(formattedData)
  }

  useEffect(() => {
    getCountryData()
      .then((data: any[]) => {
        setSelectCountry(data)
      })
  }, []);

  return (
    <AppContext.Provider
      value={{
        categories,
        handleCategory,
        searchData,
        setSearchData,
        selectCountry,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export {
  AppContext,
  AppProvider,
}
