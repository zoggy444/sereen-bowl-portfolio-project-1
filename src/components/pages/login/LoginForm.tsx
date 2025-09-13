import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { theme } from "../../../theme/theme.ts";
import Button from "../../reusable-ui/Button.tsx";
import InputText from "../../reusable-ui/InputText.tsx";

export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUserName("");
    navigate(`/order/${userName}`);
  };

  const handleChange = (e: ChangeEvent) => {
    e.preventDefault();
    setUserName((e.target as HTMLTextAreaElement).value);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1 className="amatic-sc-bold">Welcome to our place !</h1>
      <hr />
      <h2 className="amatic-sc-bold">Log in</h2>
      <InputText
        name="name"
        type="text"
        required
        Icon={IoPersonCircleOutline}
        value={userName}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <span></span>
      <Button label="Get to my space" Icon={MdKeyboardArrowRight} />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  color: ${theme.colors.white};
  text-shadow: ${theme.colors.dark} 0 0 30px;
  min-width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  h1 {
    text-align: center;
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    text-align: center;
    font-size: ${theme.fonts.size.P4};
  }

  hr {
    border-top: 3px solid ${theme.colors.primary_bowl};
    border-bottom: none;
    border-right: none;
    border-left: none;
    width: 100%;
  }

  span {
    margin-bottom: ${theme.spacing.md};
  }
`;
