import { getCart } from "@/lib/db/cart"
import CartEntry from "./cartEntry";
import setProductQuantity from "./actions";
import formatPrice from "@/lib/general/formatPrice";

export const metadata = {
  title: "Your cart- flow_mazon"
}

export default async function Cart() {
  const cart = await getCart();

  return (
    <div>
      <h1 className="font-bold text-3xl mb-3">Shopping Cart</h1>
      {cart?.items.map(item => (
        <CartEntry key={item.id} cartItem={item} setProductQuantity={setProductQuantity} />
      ))}

      {(!cart || cart?.items.length === 0) && <p>Your cart is empty.</p>}

      <div className="flex flex-col items-end sm:items-center">
        <p className="font-bold">Total: {formatPrice(cart?.total || 0)}</p>
        <button type="button" className="btn btn-primary mt-3 sm:w-[200px]">Checkout</button>
      </div>

    </div>
  )
}
