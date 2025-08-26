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
    width: 95vw;
    max-width: 1400px;
    height: 98vh;
    .main {
      height: 85vh;
      background-color: ${theme.colors.greyExtraLight};
      box-shadow: ${theme.shadows.strong};
      border-radius: ${theme.borderRadius.none} ${theme.borderRadius.none}
        ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    }
  }
`;
