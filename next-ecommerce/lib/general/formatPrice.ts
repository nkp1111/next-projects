export default function formatPrice(price: number): string {
  return price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  })
}
