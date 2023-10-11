"use client";

interface AddToCartButtonProps {
  productId?: string
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  return (
    <div className="flex items-center gap-2 mt-4">
      <button
        type="button"
        className="btn btn-primary "
        onClick={() => console.log("item added to cart")}
      >Add to cart</button>
    </div>
  )
}
