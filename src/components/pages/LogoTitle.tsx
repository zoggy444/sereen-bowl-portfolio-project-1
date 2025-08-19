import styled from "styled-components";
import { theme } from '../../theme/theme';

export default function LogoTitle() {
  return (
    <LogoTitleStyle className='amatic-sc-bold'>
      SEREEN
      <svg>
        <image xlinkHref='../../../favicon.svg'/>
      </svg>
      BOWL
    </LogoTitleStyle>
  )
}

const LogoTitleStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: ${theme.spacing.sm};

  color: ${theme.colors.primary_burger};
  font-size: ${theme.fonts.P7};

  svg {
    width: 150px;
    height: 150px;
  }

`;
