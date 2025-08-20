import { MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components';
import { theme } from '../../../theme/theme';

export default function LoginButton() {
  return (
    <LoginButtonStyled className="open-sans-medium">
      <span>Get to my space</span>
      <MdKeyboardArrowRight />
    </LoginButtonStyled>
  )
}

const LoginButtonStyled = styled.button`
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
    margin-top: ${theme.spacing.xs};
    margin-bottom: ${theme.spacing.xxs};
  }

  &:hover{
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    cursor: pointer;
  }
  &:active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }
`;
