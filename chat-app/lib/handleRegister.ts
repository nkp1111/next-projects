import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { redirect } from "next/navigation";

export default function handleRegister(
  e: React.FormEvent<HTMLFormElement>,
  registerData:
    { username: string, email: string, password: string, confirmPassword: string },
  router: AppRouterInstance
) {
  e.preventDefault();
  fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify(registerData),
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        router.push("/chat");
      }
      else {
        console.log(data.error);
      }
      // console.log(data);
    })
    .catch(error => console.log(error))
}
