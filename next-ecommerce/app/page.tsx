import PaginationBar from "@/components/paginationBar";
import ProductCard from "@/components/productCard"
import prisma from "@/lib/db/prisma"
import seedData from "@/lib/db/seedData";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

interface HomeProps {
  searchParams: { page: string }
}

export default async function Home({ searchParams: { page = "1" } }: HomeProps) {

  // fill db with product items
  // only run at the beginning for seeding
  // await seedData();

  const currentPage = Number(page);
  const heroProductCount = 1;
  const pageSize = 6;
  const totalProductCount = await prisma.product.count();
  const totalPages = Math.ceil((totalProductCount - heroProductCount) / pageSize);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip: (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroProductCount),
    take: pageSize + (currentPage === 1 ? heroProductCount : 0)
  })

  const heroProduct = products[0];

  return (
    <div className="flex flex-col items-center">
      {/* hero product  */}
      {currentPage === 1 && (
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
                <HiArrowLongRight className="ms-3 text-3xl font-bold" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* other products  */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {(currentPage === 1 ? products.slice(1) : products).map(product => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* pagination bar */}
      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPage={totalPages} />
      )}
    </div>
  )
}
