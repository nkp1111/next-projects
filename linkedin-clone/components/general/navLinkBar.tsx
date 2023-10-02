import Link from 'next/link';
import React from 'react'
import { navDataSchema } from '@/types';

export default function NavLinkBar(
  { navData }
    : { navData: navDataSchema[] }
) {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row gap-4">
      {navData.map(item => {
        const { icon: Icon } = item;
        return (
          <li className="nav-item" key={item.id}>
            <Link className={`nav-link d-flex flex-column align-items-center justify-content-center`}
              href={item.link}>
              <span>
                <Icon className={`fs-4 ${item.spClass}`} />
              </span>
              <span>{item.title}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
