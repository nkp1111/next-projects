import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/vercel.svg'
import { redirect } from 'next/navigation';
import { getCart } from '@/lib/db/cart';
import ShoppingCartButton from './shoppingCartButton';


export async function searchItem(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();
  if (searchQuery) {
    redirect(`/search?query=${searchQuery}`)
  }
}

export default async function Navbar() {
  const cart = await getCart();

  return (
    <nav className='bg-base-100'>
      <div className="navbar max-w-7xl m-auto gap-3 flex-col sm:flex-row">
        {/* logo  */}
        <div className="flex-1">
          <Link href="/" className='btn btn-ghost text-xl normal-case'>
            <Image
              src={logo}
              alt={'logo'}
              width={150}
              height={30}
            />
          </Link>
        </div>

        <div className='flex-none gap-2'>
          {/* search bar  */}
          <form action={searchItem}>
            <input
              type="text"
              placeholder='search'
              name="searchQuery"
              className='input input-bordered w-full min-w-[100px]' />
          </form>

          {/* shopping cart  */}
          <ShoppingCartButton cart={cart} />
        </div>

      </div>
    </nav>
  )
}
