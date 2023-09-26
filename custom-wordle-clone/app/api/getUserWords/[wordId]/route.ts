import Word from '@/models/word';
import { NextRequest, NextResponse } from 'next/server'

/**
 * Get a custom word by wordId
 * @param request 
 * @returns 
 */
export async function GET(request: NextRequest) {
  try {
    const url = request.url.split("/");
    const wordId = url[url.length - 1];
    const word = await Word.findOne({
      where: { wordId }
    })
    if (word) {
      return NextResponse.json({ success: true, customWord: word, message: "User Custom word fetched" })
    }

    return NextResponse.json({ success: false, error: "Custom word of that id not found" });
  } catch (error) {
    return NextResponse.json({ error, success: false }, { status: 500 })
  }
}

