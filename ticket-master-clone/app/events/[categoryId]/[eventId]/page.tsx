"use client";

import Footer from '@/components/footer';
import Header from '@/components/header';
import useGlobalContext from '@/lib/useGlobalContext';
import { eventMapType, formattedCategoryType } from '@/types';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function EventDetail(
  { params: { categoryId, eventId } }
    : { params: { categoryId: string, eventId: string } },
) {

  const { categories }:
    { categories: formattedCategoryType } = useGlobalContext();

  const eventDetail = categories.segment.filter(cat => cat.id === categoryId)[0]?.events?.filter(event => event.id === eventId)[0];

  if (!eventDetail) return (
    <>
      <h1 className='text-center mt-5'>Loading...</h1>
      <div className='text-center'>
        <a href="/" className='btn btn-primary mt-3'>See all Events</a>
      </div>
    </>
  )

  const eventMap: eventMapType = {
    Date: eventDetail?.dates?.start?.localDate,
    Time: eventDetail?.dates?.start?.localTime,
    Timezone: eventDetail?.dates?.timezone,
    Tags: [eventDetail?.classifications[0]?.genre?.name,
    eventDetail?.classifications[0]?.segment?.name,
    eventDetail?.classifications[0]?.subGenre?.name,
    eventDetail?.classifications[0]?.type?.name,
    eventDetail?.classifications[0]?.subType?.name],
    Info: eventDetail?.info,
    Note: eventDetail?.pleaseNote,
    Products: eventDetail?.products.map((product: { [key: string]: string }) => product)
  }

  console.log(eventDetail)

  return (
    <>
      <Header bgBlack />
      <main>
        <div className="container">
          <h1 className='fw-bold mt-4 fs-2 text-success fs-1'> {eventDetail.name}</h1>

          <p className='text-end'>
            <a href="/" className='text-primary'>All Events</a>
          </p>

          <div className="container h-50 my-4">
            <div className="row">

              <div className="col-md-6 col-12 mt-3">
                <Image
                  src={eventDetail.images[3]?.url}
                  alt={eventDetail.name}
                  width={eventDetail.images[3]?.width || 500}
                  height={eventDetail.images[3]?.height || 300}
                  className='m-auto img-fluid w-100'
                />
              </div>
              <div className="col-md-6 col-12 mt-3">
                {Object.keys(eventMap).map(key => (
                  <div className='row mb-2' key={key}>
                    <div className="col-md-3">
                      <strong>{key}-</strong>
                    </div>
                    <div className="col-md-9">
                      {key === "Products"
                        ? (
                          <ol>
                            {eventMap[key].map((product: { [key: string]: string }) => (
                              <li key={product.id}>
                                <a href={product.url} className='text-primary'>{product.name}</a>
                                <span> Type - {product.type}</span>
                                <br />
                              </li>
                            ))}
                          </ol>
                        )
                        : typeof eventMap[key] === "string"
                          ? eventMap[key]
                          : eventMap[key].join(", ")}
                    </div>
                  </div>
                ))}
              </div>

              <Link href={`/events/${categoryId}/`} className='text-primary text-underline mt-5'>See All Events of This category</Link>

            </div>

          </div>


          {/* <div className="container h-50 mt-5">
            <div className="row">
              <div className="col-md-6">
                <h2 className='fs-3 fw-bold'>{eventDetail.name} Genres</h2>
                <ul className='navbar-nav gap-3 flex-wrap flex-row'>
                  {eventDetail.genres.map(genre => (
                    <li className='nav-item' key={genre.id}>
                      <a href="" className='text-primary'>{genre.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <Image
                  src={eventDetail.image || "https://source.unsplash.com/random?" + eventDetail.name}
                  alt={eventDetail.name}
                  height={400}
                  width={1400}
                  className='m-auto h-100'
                />
              </div>
            </div>
          </div> */}

        </div>
      </main>
      <Footer />
    </>
  )
}
