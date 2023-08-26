"use client";

import formatCategory from "@/lib/formatCategory";
import { useEffect, useState } from "react";

export default function CategorySection() {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    fetch("/api/eventCategory")
      .then(res => res.json())
      .then(data => {
        setCategories(data)
      })
  }, [])

  useEffect(() => {
    if (categories) {
      const formattedData = formatCategory(categories);
      console.log(formattedData);
    }
  }, [categories])
  return (
    <section className="bg-white w-100 mt-5 text-dark text-start py-3">
      <div className="container">
        <h2 className="fw-bold">Browse by Categories</h2>

      </div>
    </section>
  )
}

