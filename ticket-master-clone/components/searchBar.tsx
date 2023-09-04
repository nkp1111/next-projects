"use client";

import useGlobalContext from '@/lib/useGlobalContext';
import { searchBarType } from '@/types';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { BsSearch, BsChevronDown } from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"
import DatePicker from "react-datepicker";
import styles from "@/app/utils.module.css"
import "react-datepicker/dist/react-datepicker.css";

export default function SearchBar() {
  const { searchData, setSearchData }: {
    searchData: searchBarType,
    setSearchData: Dispatch<SetStateAction<searchBarType>>,
  } = useGlobalContext();

  return (
    <form className='bg-white border-start-1 d-flex align-items-center text-secondary w-100'>
      <div className={`px-1 d-flex justify-content-between align-items-center ${styles.cursor_pointer}`}>
        <select title="location" name="location" defaultValue={"New York"} className={styles.cursor_pointer}
          onChange={(e) => setSearchData((prev) => ({ ...prev, location: e.target.value }))}>
          <option value="New York" >New York, NY</option>
        </select>

        <span className='ms-3'>
          <HiOutlineLocationMarker className="text-success fs-4" />
        </span>
      </div>

      <div className='w-0 h-100 border-1 border-secondary' />

      <div className={`px-2 d-flex justify-content-between align-items-center text-nowrap ${styles.cursor_pointer}`}>
        <label htmlFor='date' className={styles.cursor_pointer}>
          {!searchData.date ? "All Dates" : (String(searchData.date).split(" ").slice(0, 4)).join(" ")}
        </label>
        <span className='ms-3'>
          <BsChevronDown className="fs-4 text-secondary fw-semibold" />
        </span>
        <DatePicker id="date" className='d-none' value={String(searchData.date)}
          onChange={(date: any) => setSearchData((pre) => ({ ...pre, date }))} />
      </div>

      <div className='w-0 h-100 border-1 border-secondary' />

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
