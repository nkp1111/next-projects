import ProductCard from "@/components/productCard"
import prisma from "@/lib/db/prisma"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  })

  const heroProduct = products[0];

  return (
    <div>
      {/* hero product  */}
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={heroProduct.imageUrl}
            alt={heroProduct.title}
            width={800}
            height={400}
            className="w-full max-w-sm rounded-lg shadow-xl"
            priority
          />
          <div>
            <h1 className="font-bold text-5xl">{heroProduct.title}</h1>
            <p className="py-5">{heroProduct.description}</p>
            <Link href={`/products/${heroProduct.id}`}
              className="btn btn-primary">
              Check it out
            </Link>
          </div>
        </div>
      </div>
      {/* other products  */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.slice(1).map(product => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
