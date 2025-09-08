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
              <div className="image"></div>
              <div className="title">
                {products.filter((p) => p.id === id)[0].title}
              </div>
              <div className="price">2</div>
              <div className="number"></div>
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "image title number"
      "image price number";
    .image {
      border: 1px solid red;
      grid-area: image;
    }
    .title {
      border: 1px solid red;
      grid-area: title;
      font-size: ${theme.fonts.size.P3};
    }
    .price {
      border: 1px solid red;
      grid-area: price;
      font-size: ${theme.fonts.size.P0};
    }
    .number {
      border: 1px solid red;
      grid-area: number;
    }
  }

  h2 {
    justify-self: center;
    font-size: ${theme.fonts.size.P4};
  }
`;
