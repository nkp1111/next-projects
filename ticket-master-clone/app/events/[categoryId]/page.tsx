"use client";

import Footer from '@/components/footer';
import Header from '@/components/header';
import useGlobalContext from '@/lib/useGlobalContext';
import { formattedCategoryType } from '@/types';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


export default function Events(
  { params: { categoryId } }
    : { params: { categoryId: string } },
) {
  const { categories }: {
    categories: formattedCategoryType,
  } = useGlobalContext();

  // console.log(categories);
  const categoryDetail = categories.segment.filter(cat => cat.id === categoryId)[0];

  if (!categoryDetail) return (
    <>
      <h1 className='text-center mt-5'>Loading...</h1>
      <div className='text-center'>
        <a href="/" className='btn btn-primary mt-3'>See all Events</a>
      </div>
    </>
  )

  return (
    <>
      <Header bgBlack />
      <main>
        <div className="container">
          <h1 className='fw-bold mt-4 fs-2'>Category
            <span className='text-underline text-success fs-1'> {categoryDetail?.name}</span>
          </h1>

          <p className='text-end'>
            <a href="/" className='text-primary'>All Events</a>
          </p>

          <div className="container h-50">
            <h2 className='fs-3 fw-bold'>{categoryDetail.name} Events</h2>
            <div className="row">
              {categoryDetail.events?.map(event => (
                <div className="col-lg-3 col-md-4 col-6 mt-3" key={event.id}>
                  <a href={event.url} target='_blank' className='nav-link'>
                    <div className="card">
                      <div className="card-header">
                        <Image
                          src={event.images[0].url}
                          alt={event.name}
                          width={event.images[0].width || 500}
                          height={event.images[0].height || 300}
                          className='m-auto img-fluid'
                        />
                      </div>
                      <div className="card-body">
                        <h3 className="fs-6 fw-bold card-title">{event.name}</h3>
                        <p><strong>Date:</strong> {event?.dates?.start?.localDate}</p>
                        <p><strong>Time:</strong> {event?.dates?.start?.localTime}</p>
                        <p><strong>Genre: </strong> {event?.classifications[0]?.genre?.name}</p>

                        <Link href={`/events/${event.id}/detail`}>See details</Link>
                      </div>
                    </div>
                  </a>
                </div>
              ))}

            </div>
          </div>

          <div className="container h-50 mt-5">
            <div className="row">
              <div className="col-md-6">
                <h2 className='fs-3 fw-bold'>{categoryDetail.name} Genres</h2>
                <ul className='navbar-nav gap-3 flex-wrap flex-row'>
                  {categoryDetail.genres.map(genre => (
                    <li className='nav-item' key={genre.id}>
                      <a href="" className='text-primary'>{genre.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-6">
                <Image
                  src={categoryDetail.image || "https://source.unsplash.com/random?" + categoryDetail.name}
                  alt={categoryDetail.name}
                  height={400}
                  width={1400}
                  className='m-auto h-100'
                />
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

