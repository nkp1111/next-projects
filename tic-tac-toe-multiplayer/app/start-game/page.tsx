import PlayerName from '@/components/playerName'
import SelectGameMode from '@/components/selectGameMode'
import Link from 'next/link'
import { FaLongArrowAltLeft } from 'react-icons/fa'

export default function StartGame() {

  return (
    <div className='flex min-h-screen flex-col items-center p-24'>
      {/* input for user1 name input  */}
      <form action={`/player`} method="POST">
        <PlayerName />
        {/* diff game mode  */}
        <SelectGameMode />
      </form>

      <Link href="/" className='btn btn-accent m-auto px-5'>
        <FaLongArrowAltLeft className="text-xl" />
        Back
      </Link>
    </div>
  )
}
