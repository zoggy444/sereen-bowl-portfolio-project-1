import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Image from "../../../reusable-ui/Image";
import BasketCardRight from "./BasketCardRight";
import TitleAndPrice from "../../../reusable-ui/TitleAndPrice";
import type { BasketCardProps } from "../../../../types";
import type { MouseEventHandler } from "react";

export default function BasketCard({ product, qty, onClick }: BasketCardProps) {
  const onCardClick: MouseEventHandler<HTMLDivElement> = () => {
    return onClick(product.id);
  };

  return (
    <BasketCardStyled onClick={onCardClick}>
      <ImageReStyled src={product.imageSource} alt="product-image" />
      <div className="detail open-sans-medium">
        <TitleAndPriceReStyled
          id={product.id}
          title={product.title}
          price={product.price}
        />
        <BasketCardRight qty={qty} />
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
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

const TitleAndPriceReStyled = styled(TitleAndPrice)`
  &&& {
    .product-title {
      font-size: ${theme.fonts.size.P3};
    }
    .product-price {
      font-size: ${theme.fonts.size.P0};
    }
  }
`;
