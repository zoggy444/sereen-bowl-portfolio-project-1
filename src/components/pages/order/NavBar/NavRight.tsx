import styled from "styled-components";
import Profile from "./Profile";
import type { NavRightProps } from "../../../../types";
import ButtonToggle from "../../../reusable-ui/ButtonToggle";

export default function NavRight({
  userName,
  isChecked,
  onToggle,
  labelIfChecked,
  labelIfUnchecked,
}: NavRightProps) {
  return (
    <NavRightStyled>
      <ButtonToggle
        isChecked={isChecked}
        onToggle={onToggle}
        labelIfChecked={labelIfChecked}
        labelIfUnchecked={labelIfUnchecked}
      />
      <Profile userName={userName} />
    </NavRightStyled>
  );
}

const NavRightStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
