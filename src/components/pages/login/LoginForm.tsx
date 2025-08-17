import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

export default function LoginForm() {
  const [userName, setUserName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (userName) alert(`Hello ${userName}`)
    setUserName('');
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
