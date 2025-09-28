import styled from "styled-components";
import { theme } from "../../../../theme/theme";

export default function BasketBody() {
  return (
    <BasketBodyStyled>
      <h2>Your basket is empty</h2>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  color: ${theme.colors.greyBlue};
  background-color: ${theme.colors.background_white};
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: ${theme.fonts.size.P4};
  }
`;
