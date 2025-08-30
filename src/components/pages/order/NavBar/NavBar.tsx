import styled from "styled-components";
import NavRight from "./NavRight";
import { theme } from "../../../../theme/theme";
import type { NavBarProps } from "../../../../types";
import LogoTitle from "../../../reusable-ui/LogoTitle";
import { refreshPage } from "../../../../utils/window";

export default function NavBar({
  userName,
  isChecked,
  onToggle,
  labelIfChecked,
  labelIfUnchecked,
}: NavBarProps) {
  return (
    <NavBarStyled>
      <LogoTitle size="md" onClick={refreshPage} className="logo-navbar" />
      <NavRight
        userName={userName}
        isChecked={isChecked}
        onToggle={onToggle}
        labelIfChecked={labelIfChecked}
        labelIfUnchecked={labelIfUnchecked}
      />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  height: 15vh;
  max-height: 100px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.white};

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  padding-left: ${theme.spacing.md};
  padding-right: ${theme.spacing.xxl};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-navbar {
    cursor: pointer;
  }
`;
