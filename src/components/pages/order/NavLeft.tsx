import styled from "styled-components";
import LogoTitle from "../../reusable-ui/LogoTitle";

export default function NavLeft() {
  return (
    <NavLeftStyled>
      <LogoTitle size="md" />
    </NavLeftStyled>
  );
}

const NavLeftStyled = styled.div``;
