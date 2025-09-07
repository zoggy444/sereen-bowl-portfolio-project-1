import styled from "styled-components";
import { theme } from "../../theme/theme";
import type { ButtonProps } from "../../types";

export default function Button({
  label,
  className,
  Icon,
  intent = "primary",
  onClick,
}: ButtonProps) {
  if (intent === "primary")
    return (
      <ButtonStyled className={className} onClick={onClick}>
        <span>{label}</span>
        {Icon && <Icon />}
      </ButtonStyled>
    );
  if (intent === "success")
    return (
      <ButtonSuccessStyled className={className} onClick={onClick}>
        <span>{label}</span>
        {Icon && <Icon />}
      </ButtonSuccessStyled>
    );
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.round};

  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  svg {
    font-size: ${theme.fonts.size.P2};
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

const ButtonSuccessStyled = styled(ButtonStyled)`
  color: ${theme.colors.white};
  background-color: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};

  &:hover {
    color: ${theme.colors.success};
    background-color: ${theme.colors.white};
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.success};
  }
`;
