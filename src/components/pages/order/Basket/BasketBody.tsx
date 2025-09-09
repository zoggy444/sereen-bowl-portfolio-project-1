import styled from "styled-components";
import { theme } from "../../../../theme/theme";.tsx
import type { BasketBodyProps } from "../../../../types";
import Image from "../../../reusable-ui/Image";
import { formatPrice } from "../../../../utils/maths";

export default function BasketBody({ products, idsList }: BasketBodyProps) {
  return (
    <BasketBodyStyled>
      {idsList.length > 0 ? (
        idsList.map((id) => {
          const p = products.filter((p) => p.id === id)[0];
          return (
            <div key={id} className="basket-card">
              <ImageReStyled src={p.imageSource} alt="product-image" />
              <div className="detail open-sans-medium">
                <div className="title-and-price">
                  <div className="title amatic-sc-bold">{p.title}</div>
                  <div className="price">{formatPrice(p.price)}</div>
                </div>

                <div className="number">x1</div>
              </div>
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

  .basket-card {
    box-shadow: ${theme.shadows.card};
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.white};
    padding: ${theme.spacing.xs};
    padding-right: ${theme.spacing.sm};
    padding-left: ${theme.spacing.sm};
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    .detail {
      flex: 1;
      height: 70px;
      padding-left: ${theme.spacing.md};

      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;

      .title-and-price {
        max-width: calc(100% - 24px);
        display: flex;
        flex-direction: column;

        .title {
          color: ${theme.colors.dark};
          font-size: ${theme.fonts.size.P3};
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .price {
          color: ${theme.colors.primary};
          font-size: ${theme.fonts.size.P0};
        }
      }

      .number {
        color: ${theme.colors.primary};
        font-size: ${theme.fonts.size.P0};
      }
    }
  }

  h2 {
    justify-self: center;
    font-size: ${theme.fonts.size.P4};
  }
`;

const ImageReStyled = styled(Image)`
  &&& {
    height: auto;
    width: 86px;

    img {
      max-height: 70px;
    }
  }
`;
