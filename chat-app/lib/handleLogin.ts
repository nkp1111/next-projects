import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default function handleLogin(
  e: React.FormEvent<HTMLFormElement>,
  loginData:
    { email: string, password: string },
  router: AppRouterInstance
) {
  e.preventDefault();
  fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(loginData),
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