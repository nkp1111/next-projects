import ProductCard from "@/components/productCard"
import prisma from "@/lib/db/prisma"


interface SearchPageParams {
  searchParams: { query: string }
}

export async function generateMetadata({ searchParams: { query } }: SearchPageParams) {
  return {
    title: `Search ${query}- flow_mazon`
  }
}


export default async function SearchPage({ searchParams: { query } }: SearchPageParams) {
  // TODO: add product search for pricing info
  // let queryPrice: number = 0;
  // if (["<", ">"].includes(query[0])) {
  //   try {
  //     queryPrice = Number(query.slice(1,))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const products = await prisma.product.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { id: "desc" },
  })

  if (!products || products.length === 0) {
    return <div className="text-center">No products found.</div>
  }

  return (
    <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
