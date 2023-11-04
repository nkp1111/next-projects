import { GITHUB_AUTH_TOKEN, REVALIDATE_TIME } from "@/constant"

export default async function fetchRequest(
  { url, method = "GET" }: { url: string, method?: ("GET" | "POST" | "PATCH" | "DELETE" | "PUT") }
) {
  try {
    const res = await fetch(url, {
      method,
      headers: {
        "Authorization": GITHUB_AUTH_TOKEN,
      },
      next: { revalidate: REVALIDATE_TIME }
    });
    if (res.ok) {
      return await res.json();
    } else {
      console.error("Error in fetch result with status " + res.status)
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}
