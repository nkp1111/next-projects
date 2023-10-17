"use server";

import { createCart, getCart } from "@/lib/db/cart";
import prisma from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

/**
 * @desc update quantity of cartItem to new quantity
 * @param cartItemId string 
 * @param quantity number
 * @returns 
 */
export default async function setProductQuantity(
  productId: string,
  quantity: number,
) {
  // get cart
  const cart = await getCart() || await createCart();
  // find cartItem
  const isCartItem = cart.items.find(item => item.productId === productId);

  // if quantity is less than 1 and item is in cart
  // delete item
  if (quantity <= 0 && isCartItem) {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          delete: { id: isCartItem.id },
        }
      }
    })
    // // same operation as above just doesn't update cart
    // await prisma.cartItem.delete({
    //   where: { id: isCartItem.id }
    // })

    // if item is in cart and quantity is greater than 1 
    // update item
  } else if (quantity && isCartItem) {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          update: { where: { id: isCartItem.id }, data: { quantity } }
        }
      }
    });
    // // same operation as above just doesn't update cart
    // await prisma.cartItem.update({
    //   where: { id: isCartItem.id },
    //   data: { quantity },
    // })

    // if item not in cart, create item with 1 quantity
  } else {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          create: {
            quantity: Math.max(1, quantity),
            productId,
          }
        }
      }
    })
    // await prisma.cartItem.create({
    //   data: {
    //     quantity: Math.max(1, quantity),
    //     productId,
    //     cartId: cart.id,
    //   }
    // })
  }

  revalidatePath("/cart", "page")
  return;
}
