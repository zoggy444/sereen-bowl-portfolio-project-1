import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Image from "../../../reusable-ui/Image";
import BasketCardRight from "./BasketCardRight";
import TitleAndPrice from "../../../reusable-ui/TitleAndPrice";
import type { BasketCardProps } from "../../../../types";
import { useState, type MouseEventHandler } from "react";
import { TbTrashXFilled } from "react-icons/tb";

export default function BasketCard({ product, qty, onClick }: BasketCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const onDelClick: MouseEventHandler<HTMLButtonElement> = () => {
    return onClick(product.id);
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
      {isHovered ? (
        <button className="basket-card-del" onClick={onDelClick}>
          <TbTrashXFilled />
        </button>
      ) : (
        <BasketCardRight qty={qty} />
      )}
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

  .basket-card-del {
    height: 86px;
    width: 76px;
    margin-top: -${theme.spacing.xs};
    margin-bottom: -${theme.spacing.xs};
    border-top-right-radius: ${theme.borderRadius.round};
    border-bottom-right-radius: ${theme.borderRadius.round};
    border: none;

    cursor: pointer;

    color: ${theme.colors.white};
    background-color: ${theme.colors.red};
    font-size: ${theme.fonts.size.P1};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${theme.colors.dark};
    }
  }
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
