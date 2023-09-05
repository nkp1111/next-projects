"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import SearchBar from "@/components/searchbar";
import searchEvents from "@/lib/searchEvents";
import useGlobalContext from "@/lib/useGlobalContext";
import { searchBarType } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const { searchData }: { searchData: searchBarType } = useGlobalContext();
  const [searchResult, setSearchResult] = useState<any[]>([]);

  useEffect(() => {
    searchEvents(searchData, setSearchResult);
  }, [searchData])

  return (
    <>
      <Header bgBlack />
      <main>
        <div className="container">
          <h1 className='fw-bold mt-4 fs-1'>Search Result</h1>
          <h2 className="fs-4">We found {searchResult?.length || "0"} events</h2>

          <hr />
          <p><strong>Near </strong><span className="text-primary text-underline">{searchData.location}</span></p>

          <div><SearchBar isSearchPage /></div>

          <div className="container my-4">
            {searchResult?.map((event, ind) => (
              <div className="card flex-row mt-3 p-2" key={ind}>
                <div className="row align-items-center w-100">
                  <div className="col-md-2 col-6">
                    <Image
                      src={event.images[3]?.url}
                      alt={event.name}
                      width={100}
                      height={50}
                      className='img-fluid'
                    />
                  </div>

                  <div className="col-md-2 col-6">
                    <p className="fs-5 m-0 text-success fw-semibold">{event?.dates?.start?.localDate}</p>
                    <p className="m-0">{event?.dates?.start?.localTime}</p>
                  </div>

                  <div className="col-md-6 col-10">
                    <h4 className="fw-bold">{event.name}</h4>
                    <p className="m-0">{event?._embedded?.venues[0]?.address.line1}, {event?._embedded?.venues[0]?.city.name},
                      {event?._embedded?.venues[0]?.country.name}</p>
                  </div>

                  <div className="col-md-2 col-2">
                    <a href={event.url} className="btn btn-primary" role="button">See Tickets</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
