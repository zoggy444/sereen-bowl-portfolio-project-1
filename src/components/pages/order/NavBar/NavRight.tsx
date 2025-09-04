import styled from "styled-components";
import Profile from "./Profile";
import type { NavRightProps } from "../../../../types";
import ButtonToggle from "../../../reusable-ui/ButtonToggle";
import { useContext } from "react";
import isAdminModeContext from "../../../../context/IsAdminModeContext";

export default function NavRight({
  labelIfChecked,
  labelIfUnchecked,
}: NavRightProps) {
  const { isAdminMode, toggleMode } = useContext(isAdminModeContext);
  return (
    <NavRightStyled>
      <ButtonToggle
        isChecked={isAdminMode}
        onToggle={toggleMode}
        labelIfChecked={labelIfChecked}
        labelIfUnchecked={labelIfUnchecked}
      />
      <Profile />
    </NavRightStyled>
  );
}

const NavRightStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
