"use client";

import formatCategory from "@/lib/formatCategory";
import { useEffect, useState } from "react";

export default function CategorySection() {
  const [categories, setCategories] = useState({});
  useEffect(() => {

    const handleCategory = async () => {
      const res = await fetch("/api/category?location=US");
      const data = await res.json();
      const formattedData = formatCategory(data)
      console.log(formattedData);
      setCategories(data)
    }

    handleCategory();
  }, [])

  return (
    <section className="bg-white w-100 mt-5 text-dark text-start py-3">
      <div className="container">
        <h2 className="fw-bold">Browse by Categories</h2>

      </div>
    </section>
  )
}

