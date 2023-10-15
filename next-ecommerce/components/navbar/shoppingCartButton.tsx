"use client";

import { ShoppingCart } from '@/lib/db/cart'
import formatPrice from '@/lib/general/formatPrice'
import { FiShoppingCart } from 'react-icons/fi'
import Link from "next/link";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null
}

const closeDropdown = () => {
  const dropdown = document.activeElement as HTMLElement;
  // currently focussed item (dropdown)
  if (dropdown) {
    // remove focus from item
    dropdown.blur();
  }
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        <div className="indicator">
          <FiShoppingCart className="text-xl" />
          <span className='badge badge-sm indicator-item'>{cart?.size || 0}</span>
        </div>
      </label>

      <div
        tabIndex={0}
        className='card card-compact dropdown-content mt-3 w-52 bg-base-100 shadow z-30'
      >
        {/* cart dropdown item */}
        <div className="card-body">
          <span className='text-lg font-bold'>{cart?.size || 0} Items</span>
          <span>Subtotal: {formatPrice(cart?.total || 0)}</span>
          <div className='card-actions'>
            <Link href="/cart"
              className='btn btn-primary btn-block'
              onClick={closeDropdown}>
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
