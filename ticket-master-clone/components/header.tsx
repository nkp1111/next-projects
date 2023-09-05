"use client";

import Image from "next/image";
import logo from "@/public/ticketmaster.svg"
import { navData, navSideData } from "@/constants/navData";
import Link from "next/link";
import styles from "@/app/utils.module.css"
import { navDataType } from "@/types";
import useGlobalContext from "@/lib/useGlobalContext";

export default function Header(
  { bgBlack = false }:
    { bgBlack?: boolean }
) {
  const { categories } = useGlobalContext()
  const headerLinks: navDataType[] = categories?.segment?.map((cat: any) => ({ id: cat.id, title: cat.name, link: `/events/${cat.id}` }));

  return (
    <header className={`${bgBlack && 'bg-dark'}`}>
      <nav className="navbar w-100 d-flex justify-content-between px-3">
        <div className="d-flex align-items-center">
          <Link href="/">
            <Image
              src={logo}
              alt={'ticketmaster logo'}
              width={143}
              height={20}
              loading="lazy"
            />
          </Link>
          <ul className="navbar-nav flex-row gap-3 ms-3">
            {headerLinks.length > 0
              ? headerLinks.map(data => (
                <li key={data.id} className="nav-item ">
                  <Link href={data.link} className="nav-link text-white">{data.title}</Link>
                </li>
              ))
              : navData.map(data => (
                <li key={data.id} className="nav-item ">
                  <Link href={data.link} className={`nav-link text-white ${styles.disabled_link}`}>{data.title}</Link>
                </li>
              ))}
            {/* <li className="nav-item">
              <a href="#" className="nav-link text-white">More</a>
            </li> */}
          </ul>
        </div>

        <div>
          <ul className="navbar-nav flex-row gap-3 ms-2 p-0">
            {navSideData.map(data => (
              <li key={data.id} className="nav-item p-0">
                <Link href={data.link} className={`nav-link text-white ${data.id !== 1 && styles.disabled_link}`}>{data.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

