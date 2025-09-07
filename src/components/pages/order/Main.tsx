import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import Menu from "./Menu/Menu";
import AdminPanel from "./AdminPanel/AdminPanel";

export default function Main() {
  const products = fakeMenu["MEDIUM"];

  return (
    <MainStyled>
      {/* <div className="basket"/> */}
      <Menu products={products} />
      <AdminPanel />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  /* height: calc(98vh - minmax(15vh, 100px)); */
  min-height: 83vh;
  max-height: calc(98vh - 100px);
  overflow-y: scroll;
  scrollbar-width: none;

  background-color: ${theme.colors.greyExtraLight};
  box-shadow: ${theme.shadows.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
