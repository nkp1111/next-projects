"use client";

import useGlobalContext from "@/lib/useGlobalContext";
import { formattedCategoryType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function CategorySection() {

  const { categories, handleCategory }
    : {
      categories: formattedCategoryType,
      handleCategory: () => Promise<void>
    } = useGlobalContext();

  useEffect(() => {
    handleCategory();
  }, [handleCategory])

  return (
    <section className="bg-white w-100 mt-5 text-dark text-start py-3">
      <div className="container">
        <h2 className="fw-bold">Browse by Categories</h2>
        <div className="container">
          <div className="row p-0">
            {categories.segment.map(category => (
              <Link key={category.id}
                href={`/events/${category.id}`}
                className="col-md-3 col-6">
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
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="fw-bold">Top Selling</h2>
        <div className="container">
          <div className="row p-0">
            {categories.segment.map(category => (
              <article key={category.id} className="mb-5">
                <div className="d-flex justify-content-between">
                  <h3 className="fw-bold fs-4 mt-2">{category.name}</h3>
                  <Link key={category.id}
                    href={`/events/${category.id}`}
                    className="text-primary text-underline">See all {category.name}</Link>
                </div>
                <div className="row p-0">
                  {category.events?.slice(0, 4).map(event => (
                    <div key={event.id} className="col-md-3 col-6 mb-3" style={{ height: "300px", overflow: "hidden" }}>
                      <div className="card h-100 mb-3 p-2 position-relative overflow-hidden">
                        <div className="w-100 h-100">
                          <Image
                            src={event?.images[9]?.url || "https://source.unsplash.com/random"}
                            className="card-img-top object-contain h-100"
                            alt="..."
                            width={event?.images[9]?.width || 350}
                            height={event?.images[9]?.height || 300}
                          />
                        </div>
                        <div className="w-100 position-absolute p-2 bg-dark rounded-1">
                          <h6 className="card-title text-white">
                            <a href={event.url} target='_blank' className='nav-link'>{event.name}</a>
                          </h6>
                        </div>
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

export const revalidate = 0;