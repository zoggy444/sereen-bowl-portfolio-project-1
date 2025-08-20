import type { InputTextProps } from '../../types'
import styled from 'styled-components';
import { theme } from '../../theme/theme';

export default function InputText({Icon, value, onChange, ...otherProps}: InputTextProps) {
  return (
    <InputTextStyled className="open-sans-medium">
      <Icon className="input-icon"/>
      <input
          value={value}
          onChange={onChange}
          {...otherProps}>
      </input>
    </InputTextStyled>
  )
}

const InputTextStyled = styled.div`
    padding: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.md};
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.white};

    display: flex;
    align-items: center;

  .input-icon {
    color: ${theme.colors.greyDark};
    font-size: ${theme.fonts.P1};
    margin-right: ${theme.spacing.sm}
  }

  input {
    border: none;
    font-size: ${theme.fonts.P0};
    width: 100%;
  }
  input:placeholder {
    color: ${theme.colors.greyMedium};
  }
`;
