import Conversation from '@/model/conversation';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const speaker = url.searchParams.get("speaker");
  const listener = url.searchParams.get("listener");
  const conversations = await Conversation.find({
    $or: [
      { speaker, listener },
      { speaker: listener, listener: speaker },
    ]
  }).sort("createdAt");
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
