import { Link } from "react-router";
import styled from "styled-components";

export default function NavRight({ userName }: { userName: string }) {
  return (
    <NavRightStyled>
      <div>Bonjour {userName}</div>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavRightStyled>
  );
}

const NavRightStyled = styled.div``;
