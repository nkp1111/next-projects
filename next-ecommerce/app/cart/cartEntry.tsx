"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import formatPrice from "@/lib/general/formatPrice";
import Image from "next/image";
import Link from "next/link";
import setProductQuantity from "./actions";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
}

export default function CartEntry({ cartItem:
  { quantity,
    product: { imageUrl, title, id: productId, price },
    id: cartItemId }
}: CartEntryProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          className="rounded-lg"
        />

        <div>
          <Link href={`/products/${productId}`} className="font-bold">
            {title}
          </Link>
          <div>
            Price: {formatPrice(price)}
          </div>
          <div className="my-1 flex items-center gap-3">
            Quantity
            <select title="quantity" className="select select-bordered max-w-[80px] w-full"
              defaultValue={quantity}
              onChange={(e) => setProductQuantity(productId, Number(e.target.value))}>

              {Array(101).fill(0).map((_, ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>
          <div>
            Subtotal: {formatPrice(price * quantity)}
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </div>
  )
}
