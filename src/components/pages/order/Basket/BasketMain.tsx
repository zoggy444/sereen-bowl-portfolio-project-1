import styled from "styled-components";
import { theme } from "../../../../theme/theme";

export default function BasketMain() {
  return (
    <BasketMainStyled>
      <h2>Your basket is empty</h2>
    </BasketMainStyled>
  );
}

const BasketMainStyled = styled.div`
  color: ${theme.colors.greyBlue};
  background-color: ${theme.colors.background_white};
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: ${theme.fonts.size.P4};
  }
`;
