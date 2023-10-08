import { Product } from "@prisma/client"
import Link from "next/link";
import PriceTag from "./priceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product
}

export default function ProductCard(
  { product }
    : ProductCardProps
) {

  const isNew = Date.now() - product.createdAt.getTime() < 1000 * 60 * 60 * 24 * 7;
  return (
    <Link
      href={`/products/${product.id}`}
      className="card w-full hover:shadow-xl bg-base-100"
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={800}
          height={400}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">
          {product.title}
        </h2>
        {isNew && <div className="badge badge-secondary ms-auto">NEW</div>}
        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  )
}
