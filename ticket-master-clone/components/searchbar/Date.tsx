import { searchBarType } from '@/types'
import React, { Dispatch, SetStateAction } from 'react'
import DatePicker from "react-datepicker";
import { BsChevronDown } from 'react-icons/bs'
import styles from "@/app/utils.module.css"
import "react-datepicker/dist/react-datepicker.css";

export default function Date(
  { searchData, setSearchData }:
    {
      searchData: searchBarType,
      setSearchData: Dispatch<SetStateAction<searchBarType>>,
    }
) {
  return (
    <>
      <label htmlFor='date' className={styles.cursor_pointer}>
        {!searchData.date ? "All Dates" : (String(searchData.date).split(" ").slice(0, 4)).join(" ")}
      </label>
      <span className='ms-3'>
        <BsChevronDown className="fs-4 text-secondary fw-semibold" />
      </span>
      <DatePicker id="date" className='d-none' value={String(searchData.date)}
        onChange={(date: any) => setSearchData((pre) => ({ ...pre, date }))} />
    </>
  )
}
