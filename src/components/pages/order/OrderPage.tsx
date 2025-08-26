import { useParams } from "react-router";
import styled from "styled-components";
import NavBar from "./Navbar";
import { theme } from "../../../theme/theme";

export default function OrderPage() {
  const { userName } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar userName={userName || "inconnu"} />
        <div className="main"></div>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    width: 90%;
    max-width: 1400px;
    height: 98%;
    .main {
      height: 85%;
      background-color: ${theme.colors.greyExtraLight};
      box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
      border-radius: 0px 0px 15px 15px;
    }
  }
`;
