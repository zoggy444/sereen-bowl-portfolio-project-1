import LogoTitle from "../LogoTitle";
import LoginForm from "./LoginForm";
import styled from "styled-components";

export default function LoginPage() {

  return (
    <LoginPageStyled>
      <LogoTitle/>
      <LoginForm/>
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  background: linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 150, 50, 0.25) ),url("../../../../hero-by-yoav-aziz.jpg");
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`