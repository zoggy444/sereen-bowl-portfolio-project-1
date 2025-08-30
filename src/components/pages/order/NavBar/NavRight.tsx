import styled from "styled-components";
import Profile from "./Profile";
import type { NavRightProps } from "../../../../types";
import ButtonToggle from "../../../reusable-ui/ButtonToggle";

export default function NavRight({ userName }: NavRightProps) {
  return (
    <NavRightStyled>
      <ButtonToggle
        isChecked={false}
        onToggle={() => {}}
        labelIfChecked="Quit admin mode"
        labelIfUnchecked="Enter admin mode"
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
