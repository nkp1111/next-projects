import User from '@/models/user';
import Word from '@/models/word';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { customWord, userId } = await request.json();
    const user = await User.findOne({
      where: { userId }
    }) as any;

    if (!user) {
      return NextResponse.json({ error: "User not found", success: false }, { status: 400 })
    }

    if (customWord.length < 5) {
      return NextResponse.json({ error: "Word too small, min length of 5 required", success: false }, { status: 400 })
    }

    const word = await Word.create({ userId, word: customWord })

    return NextResponse.json({ success: true, message: "User score updated", word })
  } catch (error) {
    return NextResponse.json({ error, success: false }, { status: 500 })
  }
}
