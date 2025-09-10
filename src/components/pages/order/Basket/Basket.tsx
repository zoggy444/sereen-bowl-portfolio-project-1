import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import BasketHeader from "./BasketHeader";
import BasketBody from "./BasketBody";
import BasketFooter from "./BasketFooter";
import type { BasketProps } from "../../../../types";

export default function Basket({
  products,
  basketProds,
  onCardClick,
}: BasketProps) {
  let amountTotal = 0.0;
  for (let i = 0; i < basketProds.length; i++) {
    const prod = products.find((p) => p.id === basketProds[i].id);
    // Mak sure prod price is already rounded to 2 decimal before adding to amount
    if (prod !== undefined)
      amountTotal +=
        (Math.round((prod.price + Number.EPSILON) * 100) / 100) *
        basketProds[i].n;
  }
  return (
    <BasketStyled>
      <BasketHeader amount={amountTotal} />
      <BasketBody
        products={products}
        basketProds={basketProds}
        onCardClick={onCardClick}
      />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  position: sticky;
  top: 0px;
  grid-area: span 1 / span 1;
  height: calc(98vh - 100px);
  display: grid;
  grid-template-rows: 70px 1fr 70px;
  font-size: ${theme.fonts.size.P4};
`;
