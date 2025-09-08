import styled from "styled-components";
import { theme } from "../../../../theme/theme";

export default function BasketHeader() {
  return (
    <BasketHeaderStyled>
      <div className="label">Total</div>
      <div className="amount">0.00 €</div>
    </BasketHeaderStyled>
  );
}

const BasketHeaderStyled = styled.div`
  color: ${theme.colors.primary};
  background-color: ${theme.colors.background_dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${theme.spacing.sm};
  padding-right: ${theme.spacing.sm};
`;
