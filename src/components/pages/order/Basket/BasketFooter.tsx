import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import { BsFillSuitHeartFill } from "react-icons/bs";

export default function BasketFooter() {
  return (
    <BasketFooterStyled className="amatic-sc-regular">
      Coded with &nbsp;
      <BsFillSuitHeartFill />
      &nbsp; and React.js
    </BasketFooterStyled>
  );
}

const BasketFooterStyled = styled.div`
  color: ${theme.colors.white};
  background-color: ${theme.colors.background_dark};
  font-size: ${theme.fonts.size.P2};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${theme.colors.red};
  }
`;
