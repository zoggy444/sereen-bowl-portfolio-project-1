import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import { ProductsContext } from "../../../../context/OrderMainContext";

export default function BasketBody() {
  const { menuProds, basketProds } = useContext(ProductsContext);

  return (
    <BasketBodyStyled>
      {basketProds.length > 0 ? (
        basketProds.map((el) => {
          const p = menuProds.filter((p) => p.id === el.id)[0];
          return <BasketCard key={el.id} product={p} qty={el.qty} />;
        })
      ) : (
        <div className="basket-empty amatic-sc-regular">
          Your basket is empty
        </div>
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
