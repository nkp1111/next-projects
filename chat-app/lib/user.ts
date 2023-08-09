export async function addFriend(
  { userId, friendId }:
    { userId: string, friendId: string }
) {
  const res = await fetch('/api/user', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ userId, friendId }),
  })

  const data = await res.json();
  if (data.success) {
    console.log(data.success)
    console.log(data.user)
  } else {
    console.log(data.error);
  }
}


export async function getChats(
  { speaker, listener }:
    { speaker: string, listener: string }
) {
  const res = await fetch(`/api/chat?speaker=${speaker}&listener=${listener}`)
  const data = await res.json();
  if (data.success) {
    console.log(data.success)
    console.log(data.conversations)
    return data.conversations;
  } else {
    console.log(data.error);
  }
}



export async function sendChat(
  { speaker, listener, text }:
    { speaker: string, listener: string, text: string }
) {
  const res = await fetch(`/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ speaker, listener, text })
  })
  const data = await res.json();
  if (data.success) {
    console.log(data.success)
    console.log(data.newConversation)
  } else {
    console.log(data.error);
  }
}