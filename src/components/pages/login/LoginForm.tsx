import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUserName('');
    navigate(`/order/${userName}`);
  }

  const handleChange = (e: ChangeEvent) => {
    e.preventDefault();
    setUserName((e.target as HTMLTextAreaElement).value)
  }

  return (
    <form action='submit' onSubmit={handleSubmit}>
      <h1>Welcome to our place !</h1>
      <br/>
      <h2>Log in</h2>
      <input name='name' type='text' required
          placeholder='Enter your name...'
          value={userName}
          onChange={handleChange}>
      </input>
      <button>
        Get to your space
      </button>
    </form>
  )
}
