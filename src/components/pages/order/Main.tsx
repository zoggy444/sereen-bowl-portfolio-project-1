import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import Menu from "./Menu/Menu";
import { BsFillSuitHeartFill } from "react-icons/bs";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket amatic-sc-regular">
        <div className="basket-header">
          <div className="label">Total</div>
          <div className="amount">0.00 €</div>
        </div>
        <div className="basket-main">
          <h2>Your basket is empty</h2>
        </div>
        <div className="basket-footer">
          Coded with &nbsp;
          <BsFillSuitHeartFill />
          &nbsp; and React.js
        </div>
      </div>
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: calc(98vh - 100px);
  overflow-y: scroll;
  scrollbar-width: none;

  background-color: ${theme.colors.greyExtraLight};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  display: grid;
  grid-template-columns: 1fr 3fr;

  .basket {
    position: sticky;
    top: 0px;
    grid-area: span 1 / span 1;
    height: calc(98vh - 100px);
    display: grid;
    grid-template-rows: 70px 1fr 70px;
    font-size: ${theme.fonts.size.P4};
    .basket-header {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.background_dark};
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: ${theme.spacing.sm};
      padding-right: ${theme.spacing.sm};
    }
    .basket-main {
      color: ${theme.colors.greyBlue};
      background-color: ${theme.colors.background_white};
      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: ${theme.fonts.size.P4};
      }
    }
    .basket-footer {
      color: ${theme.colors.white};
      background-color: ${theme.colors.background_dark};
      font-size: ${theme.fonts.size.P2};

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        color: ${theme.colors.red};
      }
    }
  }
`;
