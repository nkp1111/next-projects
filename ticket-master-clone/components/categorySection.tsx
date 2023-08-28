"use client";

import formatCategory from "@/lib/formatCategory";
import { formattedCategoryType } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CategorySection() {
  const [categories, setCategories] = useState<formattedCategoryType>({
    segment: [],
    types: [],
  });
  useEffect(() => {

    const handleCategory = async () => {
      const res = await fetch("/api/category?location=US");
      const data = await res.json();
      const formattedData = formatCategory(data)
      setCategories(formattedData)
    }

    handleCategory();
  }, [])

  return (
    <section className="bg-white w-100 mt-5 text-dark text-start py-3">
      <div className="container">
        <h2 className="fw-bold">Browse by Categories</h2>
        <div className="container">
          <div className="row p-0">
            {categories.segment.map(category => (
              <div key={category.id} className="col-md-3 col-6">
                <div className="card mb-3 p-2 position-relative">
                  <Image
                    src={category.image || "https://source.unsplash.com/random"}
                    className="card-img-top"
                    alt="..."
                    width={350}
                    height={300}
                  />

                  <h5 className="card-title position-absolute p-2 bg-dark text-white rounded-1 bottom-0">{category.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

