import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../../theme/theme.ts"
import LoginButton from "./LoginButton.tsx";
import LoginInput from "./LoginInput.tsx";


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
      <h1 className="amatic-sc-bold">Welcome to our place !</h1>
      <hr/>
      <h2 className="amatic-sc-bold">Log in</h2>
      <LoginInput userName={userName} onChange={handleChange}/>
      <LoginButton/>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  color: ${theme.colors.white};
  text-shadow: ${theme.colors.dark} 10px 0 10px;
  min-width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  h1 {
    text-align: center;
    font-size: ${theme.fonts.P5};
  }

  h2 {
    text-align: center;
    font-size: ${theme.fonts.P4};
  }

  hr {
    border-top: 3px solid ${theme.colors.primary_burger};
    width: 100%;
  }
`