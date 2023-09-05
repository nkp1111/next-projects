"use client";

import useGlobalContext from '@/lib/useGlobalContext';
import { searchBarType } from '@/types';
import React, { Dispatch, SetStateAction } from 'react'
import { BsSearch } from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"
import LocationSelector from './Location';
import DateSelector from './Date';
import { useRouter } from 'next/navigation';
import styles from "@/app/utils.module.css"


export default function SearchBar(
  { isSearchPage = false }: { isSearchPage?: boolean }
) {
  const { searchData, setSearchData }: {
    searchData: searchBarType,
    setSearchData: Dispatch<SetStateAction<searchBarType>>,
  } = useGlobalContext();
  const router = useRouter();

  return (
    <form className={`border-start-1 d-flex gap-1 align-items-center text-secondary w-100 ${isSearchPage ? "bg-dark p-1" : "bg-white"}`}
      onSubmit={(e) => {
        e.preventDefault();
        if (searchData.location && searchData.date) {
          router.push("/events/search/")
        }
      }}>
      {/* select country */}
      <div className={`d-flex ${styles.cursor_pointer} px-1`}>
        <LocationSelector setSearchData={setSearchData} />
        <div className='px-2 bg-white d-flex align-items-center'>
          <HiOutlineLocationMarker className="text-success fs-4" />
        </div>
      </div>
      <div className='w-0 h-100 border-1 border-secondary' />

      {/* select date  */}
      <div className={`px-2 bg-white d-flex py-2 text-nowrap ${styles.cursor_pointer}`}>
        <DateSelector searchData={searchData} setSearchData={setSearchData} />
      </div>
      <div className='w-0 h-100 border-1 border-secondary' />

      {/* select keyword  */}
      <div className='flex-grow-1 d-flex align-items-center input-group'>
        <span className='px-2 input-group-text' id="basic-addon1"><BsSearch className="fw-bold fs-4" /></span>
        <input type="text" placeholder='Search for artist, venues and events' className='flex-grow-1 form-control border-0' aria-describedby="basic-addon1"
          value={searchData.keyword} onChange={(e) => setSearchData(pre => ({ ...pre, keyword: e.target.value }))} />
      </div>

      <div className='p-1'>
        <button className='btn btn-primary rounded-0 px-3' type="submit">Search</button>
      </div>
    </form>
  )
}
