import { Link } from "react-router";
import styled from "styled-components";

export default function NavRight({userName}:{userName:string}) {
  return (
    <NavRightStyled>
      <h1>Bonjour {userName}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavRightStyled>
  );
}

const NavRightStyled = styled.div``;
