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
