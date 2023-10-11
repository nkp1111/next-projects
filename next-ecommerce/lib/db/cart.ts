import { Cart, Prisma } from "@prisma/client"
import { signToken, verifyToken } from "../general/handleJwtToken"
import prisma from "./prisma"
import { cookies } from "next/headers"

const cartCookieName = "Ecommerce-cart"


export type ShoppingCartWithItems = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } }
}>

export type ShoppingCart = ShoppingCartWithItems & {
  size: number,
  total: number,
}

/**
 * @desc Checks user cookies for token and return user cart/null 
 * @returns 
 */
export async function getCart(): Promise<null | ShoppingCart> {
  try {
    const token = cookies().get(cartCookieName)?.value;
    if (!token) return null;

    const cartId: string = await verifyToken(token) as string;
    if (!cartId) return null;

    const cart = cartId ? await prisma.cart.findUnique({
      where: { id: cartId },
      include: { items: { include: { product: true } } },
    }) : null;
    if (!cart) return null;

    return {
      ...cart,
      size: cart.items.reduce((total, item) => total + item.quantity, 0),
      total: cart.items.reduce((total, item) => total + (item.quantity * item.product.price), 0),
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * @desc creates new cart and send its jwt-signed token to user cookies
 * @returns 
 */
export async function createCart(): Promise<ShoppingCart> {
  const cart = await prisma.cart.create({
    data: {},
  })
  const token = await signToken(cart.id);
  cookies().set(cartCookieName, token);
  return {
    ...cart,
    items: [],
    size: 0,
    total: 0,
  }
}

