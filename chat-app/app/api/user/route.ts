import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const { userId, friendId } = await request.json();
    console.log(userId, 'friendId', friendId)
    const user = await User.findById(userId);
    console.log('add friend', user);
    if (!user.friends.includes(friendId)) {
      user.friends.push(friendId);
    }
    await user.save();
    return NextResponse.json({ success: "Friend added successfully", user })
  } catch (error) {
    return NextResponse.json({ message: "Error adding friends", error });
  }
}