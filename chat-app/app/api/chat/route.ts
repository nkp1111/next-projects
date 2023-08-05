import Conversation from '@/model/conversation';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { listener, speaker } = await request.json();
  const conversations = await Conversation.find({ speaker, listener });
  return NextResponse.json({ success: "All conversation fetched", conversations });
}


export async function POST(request: NextRequest) {
  const { listener, speaker, text } = await request.json();
  const newConversation = await Conversation.create({
    speaker, listener, text
  });
  return NextResponse.json({ success: "New conversation created", newConversation });
}


export async function PATCH(request: NextRequest) {
  const { id, text }: { id: string, text: string } = await request.json();

  const conversations = await Conversation.findById(id);
  if (!conversations) {
    return NextResponse.json({ error: "Conversation not found" }, { status: 400 })
  }
  conversations.text = text;
  await conversations.save();
  return NextResponse.json({ success: "Conversation updated successfully" });
}


export async function DELETE(request: NextRequest) {
  const { id }: { id: string } = await request.json();

  const conversations = await Conversation.findById(id);
  if (!conversations) {
    return NextResponse.json({ error: "Conversation not found" }, { status: 400 })
  }
  conversations.text = "Message is deleted for everybody";
  await conversations.save();
  return NextResponse.json({ success: "Message deleted" });
}
