import styled from "styled-components";
import { theme } from "../../theme/theme";
import type { ButtonPrimaryProps } from "../../types";

export default function ButtonPrimary({ label, Icon }: ButtonPrimaryProps) {
  return (
    <ButtonPrimaryStyled>
      <span>{label}</span>
      <Icon />
    </ButtonPrimaryStyled>
  );
}

const ButtonPrimaryStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.round};

  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  span {
    font-size: ${theme.fonts.P0};
    margin-right: ${theme.spacing.xs};
  }
  svg {
    font-size: ${theme.fonts.P2};
    margin: ${theme.spacing.xs};
  }

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    cursor: pointer;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }
`;
