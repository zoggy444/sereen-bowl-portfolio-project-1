import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Image from "../../../reusable-ui/Image";
import BasketCardRight from "./BasketCardRight";
import TitleAndPrice from "../../../reusable-ui/TitleAndPrice";
import type { BasketCardProps, BasketCardStyledProps } from "../../../../types";
import {
  type FormEvent,
  type MouseEventHandler,
} from "react";

export default function BasketCard({
  product,
  qty,
  isSelected,
  isHovered,
  onMouseOver,
  onMouseLeave,
  onDelClick,
  onClick,
}: BasketCardProps) {
  const handleMouseOver: MouseEventHandler<HTMLDivElement> = () => {
    onMouseOver(product.id);
  };

  const handleClick = (e: FormEvent) => {
    e.stopPropagation();
    return onClick(product.id);
  };

  return (
    <BasketCardStyled
      $isSelected={isSelected}
      onMouseOver={handleMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      <ImageReStyled
        src={product.imageSource || "/images/coming-soon.png"}
        alt="product-image"
      />
      <TitleAndPriceReStyled
        id={product.id}
        title={product.title}
        isSelected={isSelected}
        price={product.price}
      />
      <BasketCardRight
        productID={product.id}
        qty={qty}
        isSelected={isSelected}
        isHovered={isHovered}
        onClick={onDelClick}
      />
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div<BasketCardStyledProps>`
  min-height: 86px;
  box-sizing: border-box;
  box-shadow: ${theme.shadows.card};
  border-radius: ${theme.borderRadius.round};
  background-color: ${({ $isSelected }) =>
    $isSelected ? `${theme.colors.primary}` : `${theme.colors.white}`};
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
