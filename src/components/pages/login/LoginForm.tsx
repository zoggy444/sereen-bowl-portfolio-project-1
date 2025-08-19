import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { theme } from "../../../theme/theme.ts"
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";


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
      <div className="inputWrapper open-sans-medium">
        <IoPersonCircleOutline className="inputIcon"/>
        <input name='name' type='text' required
            placeholder='Enter your name'
            value={userName}
            onChange={handleChange}>
        </input>
      </div>
      <button className="open-sans-medium">
        <span>Get to my space</span>
        <MdKeyboardArrowRight />
      </button>
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

  .inputWrapper {
    padding: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.md};
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.white};

    display: flex;
    align-items: center;
  }

  .inputIcon {
    color: ${theme.colors.greyDark};
    font-size: ${theme.fonts.P1};
    margin-right: ${theme.spacing.sm}
  }

  input {
    border: none;
    font-size: ${theme.fonts.P0};
  }
  ::placeholder {
    color: ${theme.colors.greyMedium};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.round};
    padding: ${theme.spacing.xs};

    span {
      font-size: ${theme.fonts.P0};
      margin-right: ${theme.spacing.xs};
    }
    svg {
      font-size: ${theme.fonts.P2};
      margin-top: ${theme.spacing.xs};
      margin-bottom: ${theme.spacing.xxs};
    }
  }
  button:hover{
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    cursor: pointer;
  }
  button:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }
`