import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/vercel.svg'
import { redirect } from 'next/navigation';
import { getCart } from '@/lib/db/cart';
import ShoppingCartButton from './shoppingCartButton';
import UserMenuButton from './userMenuButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


export async function searchItem(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();
  if (searchQuery) {
    redirect(`/search?query=${searchQuery}`)
  }
}

export default async function Navbar() {
  const cart = await getCart();
  const session = await getServerSession(authOptions)

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

          {/* user profile  */}
          <UserMenuButton session={session} />
        </div>

      </div>
    </nav>
  )
}
