import { GITHUB_AUTH_TOKEN } from "@/constant"

export default async function fetchRequest(
  { url, method = "GET" }: { url: string, method?: ("GET" | "POST" | "PATCH" | "DELETE" | "PUT") }
) {
  try {
    const res = await fetch(url, {
      method,
      headers: {
        "Authorization": GITHUB_AUTH_TOKEN,
      }
    });
    return await res.json();
  } catch (error) {
    console.log(error);
    return;
  }
}
