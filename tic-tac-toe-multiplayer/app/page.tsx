import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className='font-bold text-6xl'>Tic Tac Toe</h1>

      <div className='flex flex-col sm:flex-row mt-9 gap-4'>
        <Link href={"/start-game"}
          className='btn btn-primary text-neutral font-bold shadow-sm px-6 hover:opacity-95'>
          Start Now
        </Link>
        <Link href={"/join-game"}
          className='btn btn-success text-neutral font-bold shadow-sm px-6 hover:opacity-95'>
          Join Game
        </Link>
      </div>
    </div>
  )
}
