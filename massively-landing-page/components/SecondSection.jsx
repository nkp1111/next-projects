"use client";

import stories from "@/constant/stories"
import DarkButton from "./DarkButton"
import Image from "next/image"
import { Pagination } from "nextjs-pagination";

const paginationBtnStyles = {
  margin: 0,
  border: "1px solid #717981",
  background: "transparent",
  color: "#212931"
}

export default function SecondSection() {
  return (
    <section>
      <h2 className="visually-hidden">More Stories</h2>
      <div className="container-fluid">
        <div className="row">
          <Items currentItems={stories} />
        </div>
      </div>

      <div className="d-flex justify-content-center my-5 py-5">
        <Pagination
          currentItems={1}
          totalItems={500}
          itemsPerPage={20}
          // onPageChange={handlePageChange}
          color="#212931"
          shape="square"
          buttonCount={10}
          showNextPrev={true}
          showFirstLast={false}
          // onSuccess={(page: number) => console.log("Current page: ", page)}
          // onError={(error: Error) => console.error(error)}
          // firstText="First"
          // lastText="Last"
          // prevText="Prev"
          customStyles={paginationBtnStyles}
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
          <article key={item.id} className="card col col-lg-6 col-12 text-center rounded-0 p-5">
            <div className="fst-italic">{item.date}</div>
            <h3 className="text-uppercase my-3">{item.title}</h3>
            <Image
              src={item.image}
              alt={item.title}
              width={450}
              height={250}
              className="m-auto"
            />
            <p className="mt-4">{item.description}</p>
            <DarkButton text={'Full Story'} />
          </article>
        ))}
    </>
  );
}