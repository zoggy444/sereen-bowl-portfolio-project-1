import styled from "styled-components";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import { theme } from "../../../theme/theme";

export default function NavBar({ userName }: { userName: string }) {
  return (
    <NavBarStyled>
      <NavLeft />
      <NavRight userName={userName} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  height: 15%;
  max-height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.white};

  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0 0;
  padding-left: ${theme.spacing.md};
  padding-right: ${theme.spacing.xxl};
`;
