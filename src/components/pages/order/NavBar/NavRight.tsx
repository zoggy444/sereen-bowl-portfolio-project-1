import styled from "styled-components";
import Profile from "./Profile";
import type { NavRightProps } from "../../../../types";

export default function NavRight({ userName }: NavRightProps) {
  return (
    <NavRightStyled>
      {/* <div className="admin-button"></div> */}
      <Profile userName={userName} />
    </NavRightStyled>
  );
}

const NavRightStyled = styled.div`
  display: flex;
  align-items: center;
`;
