import type { InputTextProps, InputTextStyledProps } from "../../types";
import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

export default function InputText({
  Icon,
  value,
  variant = "normal",
  onChange,
  ...otherProps
}: InputTextProps) {
  const className = otherProps.className ?? "";
  otherProps = { ...otherProps, className: "" };
  return (
    <InputTextStyled variant={variant} className={className}>
      <Icon className="input-icon" />
      <input
        value={value}
        onChange={onChange}
        type="text"
        {...otherProps}
      ></input>
    </InputTextStyled>
  );
}

const InputTextStyled = styled.div<InputTextStyledProps>`
  ${({ variant }) => extraStyle[variant].base}
  border-radius: ${theme.borderRadius.round};

  display: flex;
  align-items: center;

  .input-icon {
    color: ${theme.colors.greyDark};
    font-size: ${theme.fonts.size.P1};
    margin-right: ${theme.spacing.sm};
  }

  input {
    ${({ variant }) => extraStyle[variant].input}
    border: none;
    font-size: ${theme.fonts.size.P0};
    width: 100%;
    &::placeholder {
      color: ${theme.colors.greyMedium};
      opacity: 0.8;
    }
  }
`;

const minimalist = {
  base: css`
    padding: 0px;
    padding-left: ${theme.spacing.lg};
    background-color: ${theme.colors.greyExtraLight};
  `,
  input: css`
    background-color: ${theme.colors.greyExtraLight};
  `,
};

const normal = {
  base: css`
    padding: ${theme.spacing.md};
    background-color: ${theme.colors.white};
  `,
  input: css``,
};

const extraStyle = {
  normal,
  minimalist,
};
