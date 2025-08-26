import styled from "styled-components";
import { theme } from "../../theme/theme";
import type { LogoTitleProps } from "../../types";

export default function LogoTitle({ size, reloadOnClick }: LogoTitleProps) {
  const onClick = function () {
    if (reloadOnClick) window.location.reload();
  };

  return (
    <LogoTitleStyle
      className={`amatic-sc-bold logo-title-${size}`}
      onClick={onClick}
    >
      SEREEN
      <svg>
        <image xlinkHref="../../../favicon.svg" />
      </svg>
      BOWL
    </LogoTitleStyle>
  );
}

const LogoTitleStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.primary_bowl};
  cursor: pointer;

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
    font-size: ${theme.fonts.P4};

    svg {
      width: 60px;
      height: 60px;
    }
    svg * {
      width: 100%;
      height: 100%;
    }
  }
`;
