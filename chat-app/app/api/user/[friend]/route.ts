import User from '@/model/user'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { friend: string } }) {
  try {
    const friendName = params.friend
    const users = await User.find({
      $or: [
        { username: { $regex: `^.*${friendName}.*$`, $options: 'i' } },
        { email: { $regex: `^.*${friendName}.*$`, $options: 'i' } },
      ]
    });
    // console.log(users)
    return NextResponse.json({ users, success: "All user matching name are fetched" })
  } catch (error) {
    return NextResponse.json({ message: "Error fetching friends", error })
  }
}
