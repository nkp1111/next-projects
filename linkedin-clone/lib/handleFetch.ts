import { objectStringKeyAnyValueSchema } from "@/types"
import { toast } from "react-hot-toast"

export default async function handleFetch(
  { url, method, body = {} }
    : { url: string, method: string, body?: objectStringKeyAnyValueSchema }
) {

  let options: objectStringKeyAnyValueSchema = {
    method,
  }

  if (method !== "GET") {
    options = {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  }

  const res = await fetch(url, options);
  const { success, error, item = {} }: {
    success: string,
    error: string,
    item: any
  } = await res.json();

  if (error) {
    toast.error(error)
    return
  }

  toast.success(success)
  return item;
}
