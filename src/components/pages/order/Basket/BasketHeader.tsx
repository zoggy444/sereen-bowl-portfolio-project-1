import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import { formatPrice } from "../../../../utils/maths";
import type { BasketHeaderProps } from "../../../../types";

export default function BasketHeader({ amount }: BasketHeaderProps) {
  return (
    <BasketHeaderStyled className="amatic-sc-regular">
      <div className="label">Total</div>
      <div className="amount">{formatPrice(amount)}</div>
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
