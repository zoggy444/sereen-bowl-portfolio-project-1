import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type { BasketBodyProps } from "../../../../types";
import BasketCard from "./BasketCard";

export default function BasketBody({
  products,
  basketProds,
  onCardClick,
}: BasketBodyProps) {
  return (
    <BasketBodyStyled>
      {basketProds.length > 0 ? (
        basketProds.map((el) => {
          const p = products.filter((p) => p.id === el.id)[0];
          return (
            <BasketCard
              key={el.id}
              product={p}
              qty={el.n}
              onClick={() => onCardClick(el.id)}
            />
          );
        })
      ) : (
        <div className="basket-empty">Your basket is empty</div>
      )}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  min-width: 300px;
  color: ${theme.colors.greyBlue};
  background-color: ${theme.colors.background_white};
  padding: ${theme.spacing.sm};
  overflow-y: scroll;
  scrollbar-width: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: ${theme.gridUnit * 2.5}px;

  .basket-empty {
    flex: 1;
    font-size: ${theme.fonts.size.P4};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
