import styled from "styled-components";
import Profile from "./Profile";

export default function NavRight({ userName }: { userName: string }) {
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
