import PriceTag from "@/components/priceTag";
import prisma from "@/lib/db/prisma"
import Image from "next/image";
import { notFound } from "next/navigation"
import { cache } from "react";

interface ProductDetailProps {
  params: { id: string }
}

/**
 * @desc Get product by id and cached result
 */
const getProduct = cache(async (id: string) => {
  try {
    const product = await prisma.product.findFirst({
      where: { id },
    })
    if (!product) notFound();
    return product;
  } catch (error) {
    console.log(error)
    notFound();
  }
})

export const generateMetadata = async (
  { params: { id } }: ProductDetailProps
) => {
  const product = await getProduct(id);
  return {
    title: product.title + " - Flow_mazon"
  }
}

export default async function ProductDetail(
  { params: { id } }: ProductDetailProps
) {
  const product = await getProduct(id);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={500}
        height={500}
        className="rounded-md"
        priority
      />
      <div>
        <h1 className="font-bold text-lg">
          {product.title}
        </h1>
        <p className="py-6">{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </div>
  )
}
