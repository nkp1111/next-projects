import SubmitFormButton from "@/component/submitFormButton";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add product - Flow_mazon",
}

// server action
async function addProduct(formData: FormData) {
  "use server";

  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!title || !description || !imageUrl || !price) {
    throw new Error("Required fields is/are missing");
  }

  await prisma.product.create({
    data: {
      title, description, imageUrl, price
    }
  });

  redirect("/");
}

export default function AddProduct() {
  return (
    <div>
      <h1 className='font-bold text-lg mb-3'>Add Product</h1>
      <form action={addProduct}>
        <input
          required
          type="text"
          name="title"
          className='input input-bordered w-full mb-3'
          placeholder='Name' />
        <textarea
          required
          name="description"
          id="description"
          placeholder="Description"
          className='textarea textarea-bordered w-full mb-3'
        ></textarea>
        <input
          required
          type="url"
          name="imageUrl"
          className='input input-bordered w-full mb-3'
          placeholder='Image url' />
        <input
          required
          type="text"
          name="price"
          className='input input-bordered w-full mb-3'
          placeholder='Price' />

        <SubmitFormButton
          className='btn-primary w-full mb-3' >
          Add Product
        </SubmitFormButton>
      </form>
    </div>
  )
}
