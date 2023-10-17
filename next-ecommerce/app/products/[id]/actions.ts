"use server";

import { createCart, getCart } from "@/lib/db/cart";
import prisma from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export default async function IncrementCartProduct(productId: string) {
  const cart = await getCart() || await createCart();

  const itemInCart = cart.items.find(item => item.productId === productId);
  if (itemInCart) {
    // if cart has item update quantity
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          update: {
            where: { id: itemInCart.id },
            data: { quantity: { increment: 1 } },
          }
        }
      }
    })
    // await prisma.cartItem.update({
    //   where: { id: itemInCart.id },
    //   data: { quantity: { increment: 1 } }
    // })
  } else {
    // else create cart item
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          create: { quantity: 1, productId },
        }
      }
    })
    // await prisma.cartItem.create({
    //   data: { quantity: 1, productId, cartId: cart.id },
    // })
  }

  revalidatePath("/products/[id]", "page")

  return
}
