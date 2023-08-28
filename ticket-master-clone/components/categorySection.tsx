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
      const formattedData = await formatCategory(data)
      // console.log(formattedData);
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
                <div className="card mb-3 p-2 position-relative" >
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

      <div className="container">
        <h2 className="fw-bold">Top Selling</h2>
        <div className="container">
          <div className="row p-0">
            {categories.segment.map(category => (
              <article key={category.id} className="mb-5">
                <h3>{category.name}</h3>
                <div className="row p-0">
                  {category.events?.map(event => (
                    <div key={event.id} className="col-md-3 col-6 mb-3" style={{ height: "200px", overflow: "hidden" }}>
                      <div className="card mb-3 p-2 position-relative overflow-hidden">
                        <div className="w-100 h-100">
                          <Image
                            src={event?.images[0]?.url || "https://source.unsplash.com/random"}
                            className="card-img-top object-cover"
                            alt="..."
                            width={event?.images[0]?.width || 350}
                            height={event?.images[0]?.height || 300}
                          />
                        </div>
                        <h5 className="card-title position-absolute p-2 bg-dark text-white rounded-1 top-0">{event.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

