import Image from "next/image";
import pic from "@/public/assets/pic.svg"
import FindUserForm from "@/components/findUserForm";

export default function Home() {
  return (
    <main className="text-center">
      <div className="container">
        <Image
          src={pic}
          alt={"."}
          width={300}
          height={300}
        />
        <h1>GitHub Thinker</h1>
        <FindUserForm />
      </div>
    </main>
  )
}
