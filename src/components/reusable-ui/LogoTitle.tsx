import styled from "styled-components";
import { theme } from "../../theme/theme";

export default function LogoTitle({ size }: { size: "lg" | "md" }) {
  return (
    <LogoTitleStyle className={`amatic-sc-bold logo-title-${size}`}>
      SEREEN
      <svg>
        <image xlinkHref="../../../favicon.svg" />
      </svg>
      BOWL
    </LogoTitleStyle>
  );
}

const LogoTitleStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.primary_bowl};

  &.logo-title-lg {
    padding-right: ${theme.spacing.sm};
    font-size: ${theme.fonts.P7};

    svg {
      width: 150px;
      height: 150px;
    }
  }

  &.logo-title-md {
    padding-right: ${theme.spacing.xs};
    font-size: ${theme.fonts.P2};

    svg {
      width: 50px;
      height: 50px;
    }
    svg * {
      width: 100%;
      height: 100%;
    }
  }
`;
