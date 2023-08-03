export default function handleLogin(
  e: React.FormEvent<HTMLFormElement>,
  loginData:
    { email: string, password: string }
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
      console.log(data);
    })
    .catch(error => console.log(error))
}