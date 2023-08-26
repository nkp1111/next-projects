"use client";

import React from 'react'
import { BsSearch, BsChevronDown } from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"

export default function SearchBar() {
  return (
    <form className='bg-white border-start-1 d-flex align-items-center text-secondary w-100'>
      <div className='px-2 d-flex justify-content-between align-items-center'>
        <select title="location" name="location">
          <option value="New York">New York, NY</option>
        </select>

        <span className='ms-3'>
          <HiOutlineLocationMarker className="text-success fs-4" />
        </span>
      </div>

      <div className='w-0 h-100 border-1 border-secondary' />

      <div className='px-2 d-flex justify-content-between align-items-center text-nowrap'>
        <span>All Dates</span>
        <span className='ms-3'>
          <BsChevronDown className="fs-4 text-secondary fw-semibold" />
        </span>
      </div>

      <div className='w-0 h-100 border-1 border-secondary' />

      <div className='flex-grow-1 d-flex align-items-center input-group'>
        <span className='px-2 input-group-text' id="basic-addon1"><BsSearch className="fw-bold fs-4" /></span>
        <input type="text" placeholder='Search for artist, venues and events' className='flex-grow-1 form-control border-0' aria-describedby="basic-addon1" />
      </div>

      <div className='p-1'>
        <button className='btn btn-primary rounded-0 px-3' type="submit">Search</button>
      </div>
    </form>
  )
}
