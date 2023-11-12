"use client";

import React, { useEffect, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

interface ManualPaginationProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  maxPage: number;
}

export default function ManualPagination(
  { setCurrentPage, currentPage, maxPage }: ManualPaginationProps
) {
  const [currentVal, setCurrentVal] = useState(1);
  useEffect(() => {
    let timeout = setTimeout(() => {
      const validPageNumber = Math.max(Math.min(currentVal, maxPage), 1)
      setCurrentPage(validPageNumber);
      setCurrentVal(validPageNumber);
    }, 300)
    return () => {
      clearTimeout(timeout);
    }
  }, [currentVal, maxPage, setCurrentPage])


  const maxPageToShow = Math.min(maxPage, Math.max(currentPage + 4, 10))
  const minPageToShow = Math.max(1, Math.min(currentPage - 5, maxPageToShow - 9))

  const numberedPageItems: JSX.Element[] = []
  for (let page = minPageToShow; page <= maxPageToShow; page++) {
    numberedPageItems.push(
      <button
        type="button"
        key={page}
        onClick={(e) => setCurrentVal(page)}
        className={`join-item btn ${currentPage === page ? "pointer-events-none bg-primary" : ""}`}>
        {page}
      </button>
    )
  }

  return (
    <div className='mt-10 flex justify-center content-center gap-2'>
      <button type="button" title={"Previous"}
        disabled={currentPage === 1}
        onClick={(e) => setCurrentVal(currentPage - 1)}
        className='btn'>
        <ArrowLeftIcon className='w-8 h-8' />
      </button>

      {/* <input
        type="text"
        title={"Current page"}
        className='input input-bordered input-md text-center w-12'
        value={currentVal}
        onChange={(e) => {
          try {
            const val = e.target.value;
            if (!isNaN(Number(val))) {
              setCurrentVal(Number(val));
            }
          } catch (error) {
            e.target.value = String(currentPage);
            console.log(error);
          }
        }} /> */}

      <div className="hidden sm:flex gap-2">
        {numberedPageItems}
      </div>

      <button type="button" className="btn join-item pointer-events-none btn-active sm:hidden block">
        Page {currentPage}
      </button>

      <button type="button" title={"Next"}
        disabled={currentPage === maxPage}
        onClick={(e) => setCurrentVal(currentPage + 1)}
        className='btn'>
        <ArrowRightIcon className='w-8 h-8' />
      </button>
    </div>
  )
}
