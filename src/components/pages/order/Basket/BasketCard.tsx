import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Image from "../../../reusable-ui/Image";
import BasketCardRight from "./BasketCardRight";
import TitleAndPrice from "../../../reusable-ui/TitleAndPrice";
import type { BasketCardProps } from "../../../../types";
import { useContext, useState, type MouseEventHandler } from "react";
import { BasketDispatchContext } from "../../../../context/BasketContext";

export default function BasketCard({ product, qty }: BasketCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const basketDispatch = useContext(BasketDispatchContext);

  const onDelClick: MouseEventHandler<HTMLButtonElement> = () => {
    basketDispatch({ type: "delete-product", id: product.id });
  };

  const onMouseOver: MouseEventHandler<HTMLDivElement> = () => {
    setIsHovered(true);
  };

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setIsHovered(false);
  };

  return (
    <BasketCardStyled onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <ImageReStyled src={product.imageSource} alt="product-image" />
      <TitleAndPriceReStyled
        id={product.id}
        title={product.title}
        price={product.price}
      />
      <BasketCardRight
        qty={qty}
        isHovered={isHovered}
        onDelClick={onDelClick}
      />
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  min-height: 86px;
  box-sizing: border-box;
  box-shadow: ${theme.shadows.card};
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.xs};
  padding-right: 0px;
  padding-left: ${theme.spacing.sm};

  cursor: default;

  display: grid;
  grid-template-columns: 86px 1fr 76px;
`;

const ImageReStyled = styled(Image)`
  &&& {
    height: auto;

    img {
      max-height: 70px;
    }
  }
`;

const TitleAndPriceReStyled = styled(TitleAndPrice)`
  &&& {
    padding-left: ${theme.spacing.md};
    .product-title {
      font-size: ${theme.fonts.size.P3};
    }
    .product-price {
      font-size: ${theme.fonts.size.P0};
    }
  }
`;
