import { getCart } from "@/lib/db/cart"
import CartEntry from "./cartEntry";

export const metadata = {
  title: "Your cart- flow_mazon"
}

export default async function Cart() {
  const cart = await getCart();

  return (
    <div>
      <h1 className="font-bold text-3xl mb-3">Shopping Cart</h1>
      {cart?.items.map(item => (
        <CartEntry key={item.id} cartItem={item} />
      ))}
    </div>
  )
}
