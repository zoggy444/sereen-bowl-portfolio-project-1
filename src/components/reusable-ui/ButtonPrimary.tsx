import styled from "styled-components";
import { theme } from "../../theme/theme";
import type { ButtonPrimaryProps } from "../../types";

export default function ButtonPrimary({
  label,
  className,
  Icon,
}: ButtonPrimaryProps) {
  return (
    <ButtonPrimaryStyled className={className}>
      <span>{label}</span>
      {Icon && <Icon />}
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
