"use client";

import stories from "@/constant/stories"
import DarkButton from "./DarkButton"
import Image from "next/image"
import { Pagination } from "nextjs-pagination";

export default function SecondSection() {
  return (
    <section>
      <h2 className="visually-hidden">More Stories</h2>
      <div className="container-fluid">
        <div className="row">
          <Items currentItems={stories} />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Pagination
          totalItems={500}
          itemsPerPage={20}
          // onPageChange={handlePageChange}
          color="#333"
          shape="square"
          buttonCount={10}
          showNextPrev={true}
          showFirstLast={false}
          // onSuccess={(page: number) => console.log("Current page: ", page)}
          // onError={(error: Error) => console.error(error)}
          // firstText="First"
          // lastText="Last"
          // prevText="Prev"
          nextText="Next >"
        />
      </div>
    </section>
  )
}


export function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <article key={item.id} className="card col col-lg-6 col-12 text-center rounded-0">
            <h3>{item.title}</h3>
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={400}
              className="m-auto"
            />
            <p>{item.description}</p>
            <DarkButton text={'Full Story'} />
          </article>
        ))}
    </>
  );
}