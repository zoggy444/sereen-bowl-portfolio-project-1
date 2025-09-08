import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type { BasketBodyProps } from "../../../../types";

export default function BasketBody({ products, idsList }: BasketBodyProps) {
  return (
    <BasketBodyStyled>
      {idsList.length > 0 ? (
        idsList.map((id) => {
          return (
            <div key={id} className="basket-card">
              {products.filter((p) => p.id === id)[0].title}
            </div>
          );
        })
      ) : (
        <h2>Your basket is empty</h2>
      )}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  color: ${theme.colors.greyBlue};
  background-color: ${theme.colors.background_white};
  padding: ${theme.spacing.sm};
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: ${theme.gridUnit * 2.5}px;

  .basket-card {
    background-color: aqua;
  }

  h2 {
    justify-self: center;
    font-size: ${theme.fonts.size.P4};
  }
`;
