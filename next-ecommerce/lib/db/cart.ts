import { Cart, Prisma } from "@prisma/client"
import { signToken, verifyToken } from "../general/handleJwtToken"
import prisma from "./prisma"
import { cookies } from "next/headers"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth";

const cartCookieName = "Ecommerce-cart"

// cart with items (products) and product info
export type ShoppingCartWithItems = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } }
}>

// cart item(single product) with product info
export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true },
}>

// cart with items and detail along with size, total(cart metadata)
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
    const session = await getServerSession(authOptions)
    let cart: ShoppingCartWithItems | null;
    // if user is logged in, get cart from session
    if (session) {
      cart = await prisma.cart.findFirst({
        where: { userId: session.user.id },
        include: { items: { include: { product: true } } },
      });

    } else {
      // if user is not logged in, get cart from cookies
      const token = cookies().get(cartCookieName)?.value;
      if (!token) return null;

      const cartId: string = await verifyToken(token) as string;
      if (!cartId) return null;

      cart = cartId ? await prisma.cart.findUnique({
        where: { id: cartId },
        include: { items: { include: { product: true } } },
      }) : null;
    }

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
  const session = await getServerSession(authOptions);
  let newCart: Cart;
  // if user is logged in, create cart with userId
  if (session) {
    newCart = await prisma.cart.create({
      data: {
        userId: session.user.id,
      }
    })
  } else {
    newCart = await prisma.cart.create({
      data: {},
    })
  }

  // set cookie of cart for user
  const token = await signToken(newCart.id);
  cookies().set(cartCookieName, token);
  return {
    ...newCart,
    items: [],
    size: 0,
    total: 0,
  }
}



export async function mergeAnonymousCartIntoUserCart(userId: string) {

}