import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(request: NextRequest) {
  try {
    const { gameWon, guessTurns, userId } = await request.json();
    const user = await User.findOne({
      where: { userId }
    }) as any;

    if (!user) {
      return NextResponse.json({ error: "User not found", success: false }, { status: 400 })
    }

    user.gamePlayedNum += 1;
    if (gameWon) {
      user.gameWon += 1;
      user.guessDistribution = {
        ...user.guessDistribution,
        [guessTurns]: user.guessDistribution[guessTurns] + 1,
      }
    }

    await user.save();
    user.password = "";

    return NextResponse.json({ success: true, message: "User score updated", user })
  } catch (error) {
    return NextResponse.json({ error, success: false }, { status: 500 })
  }
}
