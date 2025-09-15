import styled from "styled-components";
import { theme } from "../../theme/theme";
import type { ButtonStyledProps, ButtonProps } from "../../types";

export default function Button({
  label,
  className,
  Icon,
  intent = "primary",
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyled intent={intent} className={className} onClick={onClick}>
      <span>{label}</span>
      {Icon && <Icon />}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.round};

  color: ${theme.colors.white};
  background-color: ${({ intent }) => theme.colors[intent]};
  border: 1px solid ${({ intent }) => theme.colors[intent]};

  svg {
    font-size: ${theme.fonts.size.P2};
    margin: ${theme.spacing.xs};
  }

  &:hover {
    color: ${({ intent }) => theme.colors[intent]};
    background-color: ${theme.colors.white};
    cursor: pointer;
  }

  &:active {
    color: ${theme.colors.white};
    background-color: ${({ intent }) => theme.colors[intent]};
  }
`;
