import { verifyUser } from '@/lib/auth/JwtToken';
import Word from '@/models/word';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const userId = await verifyUser();
    if (userId) {
      const customWords = await Word.findAll({
        where: { userId }
      })
      return NextResponse.json({ success: true, customWords, message: "User Custom words fetched" })
    }
  } catch (error) {
    return NextResponse.json({ error, success: false }, { status: 500 })
  }
}
