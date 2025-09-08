import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import Menu from "./Menu/Menu";
import AdminPanel from "./AdminPanel/AdminPanel";

export default function Main() {
  return (
    <MainStyled>
      <div className="basket">
        <div className="basket-header"></div>
        <div className="basket-main"></div>
        <div className="basket-footer"></div>
      </div>
      <Menu products={products} />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: calc(98vh - 100px);
  overflow-y: scroll;
  scrollbar-width: none;

  background-color: ${theme.colors.greyExtraLight};
  box-shadow: ${theme.shadows.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  display: grid;
  grid-template-columns: 1fr 3fr;

  .basket {
    height: calc(83vh - 100px);
    background-color: aqua;
    display: grid;
    grid-template-rows: 70px 1fr 70px;
    .basket-header {
      background-color: ${theme.colors.background_dark};
    }
    .basket-main {
      /* background-color: ${theme.colors.background_white}; */
    }
    .basket-footer {
      background-color: ${theme.colors.background_dark};
    }
  }
`;
