import { IoPersonCircleOutline } from "react-icons/io5";
import { Link, useParams } from "react-router";
import styled from "styled-components";
import { theme } from "../../../../theme/theme";

export default function Profile() {
  const { userName } = useParams();
  return (
    <ProfileStyled>
      <div className="card-info">
        <div>
          Hey, <strong>{userName || "inconnu(e)"}</strong>
        </div>
        <Link to="/">Se déconnecter</Link>
      </div>
      <IoPersonCircleOutline />
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;

  .card-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    font-size: ${theme.fonts.size.P2};

    strong {
      color: ${theme.colors.primary};
    }

    a {
      font-size: ${theme.fonts.size.XS};
      color: ${theme.colors.greyBlue};
      text-decoration: none;

      &:hover {
        border-bottom: 1px solid ${theme.colors.greyBlue};
      }
    }
  }
  svg {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
    padding-left: ${theme.spacing.sm};
    padding-top: ${theme.spacing.xxs};
    padding-bottom: ${theme.spacing.xxs};
  }
`;
