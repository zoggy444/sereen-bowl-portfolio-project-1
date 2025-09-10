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

  const onDelClick: MouseEventHandler<HTMLDivElement> = () => {
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
      <div className="detail open-sans-medium">
        <TitleAndPriceReStyled
          id={product.id}
          title={product.title}
          price={product.price}
        />
        {!isHovered && <BasketCardRight qty={qty} />}
      </div>
      {isHovered && (
        <button className="basket-card-del" onClick={onDelClick}>
          <TbTrashXFilled />
        </button>
      )}
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

  cursor: default;

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
  .basket-card-del {
    height: 86px;
    width: 76px;
    margin-top: -${theme.spacing.xs};
    margin-bottom: -${theme.spacing.xs};
    margin-right: -${theme.spacing.sm};
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
