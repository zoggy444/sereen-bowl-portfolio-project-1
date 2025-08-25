import styled from "styled-components";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

export default function NavBar({ userName }: { userName: string }) {
  return (
    <NavBarStyled>
      <NavLeft />
      <NavRight userName={userName} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div``;
