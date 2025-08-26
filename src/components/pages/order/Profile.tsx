import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

export default function Profile({ userName }: { userName: string }) {
  return (
    <ProfileStyled>
      <div className="card-info">
        <div>
          Hey, <strong>{userName}</strong>
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

    font-size: ${theme.fonts.P2};

    strong {
      color: ${theme.colors.primary};
    }

    a {
      font-size: ${theme.fonts.XS};
      color: ${theme.colors.greyBlue};
      text-decoration: none;

      &:hover {
        border-bottom: 1px solid ${theme.colors.greyBlue};
      }
    }
  }
  svg {
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
    padding: ${theme.spacing.xxs} ${theme.spacing.none} ${theme.spacing.xxs}
      ${theme.spacing.sm};
  }
`;
