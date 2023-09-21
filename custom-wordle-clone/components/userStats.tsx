import { UserDetailSchema } from '@/type'
import React from 'react'

export default function UserStats(
  { user }
    : { user: UserDetailSchema }
) {
  return (
    <div>
      <h3 className='fw-bold'>User: {user.username}</h3>

      <h5 className='text-uppercase'>Statistics</h5>
    </div>
  )
}
