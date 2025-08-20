import { IoPersonCircleOutline } from 'react-icons/io5'
import type { LoginInputProps } from '../../../types'
import styled from 'styled-components';
import { theme } from '../../../theme/theme';

export default function LoginInput({userName, onChange}: LoginInputProps) {
  return (
    <LoginIputStyled className="open-sans-medium">
      <IoPersonCircleOutline className="inputIcon"/>
      <input name='name' type='text' required
          placeholder='Enter your name'
          value={userName}
          onChange={onChange}>
      </input>
    </LoginIputStyled>
  )
}

const LoginIputStyled = styled.div`
    padding: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.md};
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.white};

    display: flex;
    align-items: center;

  .inputIcon {
    color: ${theme.colors.greyDark};
    font-size: ${theme.fonts.P1};
    margin-right: ${theme.spacing.sm}
  }

  input {
    border: none;
    font-size: ${theme.fonts.P0};
  }
  input:placeholder {
    color: ${theme.colors.greyMedium};
  }
`;
