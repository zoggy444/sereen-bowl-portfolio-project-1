import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../../theme/theme.ts"

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
    <LoginFormStyled action='submit' onSubmit={handleSubmit}>
      <h1>Welcome to our place !</h1>
      <br/>
      <h2>Log in</h2>
      <input name='name' type='text' required
          placeholder='Enter your name'
          value={userName}
          onChange={handleChange}>
      </input>
      <button>
        Get to my space
      </button>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  border: 1px solid ${theme.colors.dark};
`