import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import { formatPrice } from "../../../../utils/maths";
import { useContext } from "react";
import { ProductsContext } from "../../../../context/OrderMainContext";

export default function BasketHeader() {
  const { menuProds, basketProds } = useContext(ProductsContext);
  let amountTotal = 0.0;
  for (let i = 0; i < basketProds.length; i++) {
    const prod = menuProds.find((p) => p.id === basketProds[i].id);
    // Make sure prod price is already rounded to 2 decimal before adding to amount
    if (prod !== undefined)
      amountTotal +=
    (Math.round((prod.price + Number.EPSILON) * 100) / 100) *
    basketProds[i].qty;
  }
  return (
    <BasketHeaderStyled className="amatic-sc-regular">
      <div className="label">Total</div>
      <div className="amount">{formatPrice(amountTotal)}</div>
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
