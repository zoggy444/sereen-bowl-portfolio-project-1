import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import Menu from "./Menu";

export default function Main() {
  const products = fakeMenu2;

  return (
    <MainStyled>
      {/* <div className="basket"/> */}
      <Menu products={products} />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  padding: 50px;
  height: calc(83vh - 100px);
  overflow-y: scroll;
  scrollbar-width: none;

  background-color: ${theme.colors.greyExtraLight};
  box-shadow: ${theme.shadows.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
