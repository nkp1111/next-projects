export default function handleRegister(
  e: React.FormEvent<HTMLFormElement>,
  registerData:
    { username: string, email: string, password: string, confirmPassword: string }
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
      console.log(data);
    })
    .catch(error => console.log(error))
}
