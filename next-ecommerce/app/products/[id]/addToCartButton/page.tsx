"use client";

import { useState, useTransition } from "react";

interface AddToCartButtonProps {
  productId: string,
  incrementProductQuantity(productId: string): Promise<void>,
}

export default function AddToCartButton({ productId, incrementProductQuantity }: AddToCartButtonProps) {
  const [pending, startTransition] = useTransition();
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-2 mt-4">
      <button
        type="button"
        className="btn btn-primary "
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          })
        }}
      >Add to cart</button>

      {pending && <span className="loading loading-spinner loading-md" />}

      {!pending && success && <span className="text-success">Added to cart</span>}
    </div>
  )
}
