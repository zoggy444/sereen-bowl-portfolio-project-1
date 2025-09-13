import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import Menu from "./Menu/Menu";
import AdminPanel from "./AdminPanel/AdminPanel";
import { MenuProvider } from "./MenuProvider";

export default function Main() {
  return (
    <MainStyled>
      <MenuProvider>
        {/* <div className="basket"/> */}
        <Menu />
        <AdminPanel />
      </MenuProvider>
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
`;
