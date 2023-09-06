import AuthBackground from '@/components/auth/authBackground'
import logo from "@/public/ticketmaster.svg"
import Image from 'next/image'
import Link from 'next/link'
import styles from "@/app/utils.module.css"

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='d-flex flex-column vh-100'>
      <header className='bg-dark py-3 px-5 w-100'>
        <Link href="/">
          <Image
            src={logo}
            alt={'ticketmaster logo'}
            width={143}
            height={20}
            loading="lazy"
          />
        </Link>
      </header>

      <main className='flex-grow-1'>
        <div className={`mx-auto ${styles.auth_wrapper}`}>
          <div className="row h-100">
            <div className="col-md-5 col-12 p-0">
              <AuthBackground />
            </div>
            <div className="col-md-7 col-12">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
