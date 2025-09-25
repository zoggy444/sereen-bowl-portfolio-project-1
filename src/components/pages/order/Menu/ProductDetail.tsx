import styled from "styled-components";
import Button from "../../../reusable-ui/Button";
import { theme } from "../../../../theme/theme";
import type {
  ButtonVariantType,
  ProductDetailProps,
  ProductDetailStyledProps,
} from "../../../../types";
import { formatPrice } from "../../../../utils/maths";
import type { FormEvent } from "react";

export default function ProductDetail({
  title,
  price,
  isSelected,
}: ProductDetailProps) {
  const buttonVariant: ButtonVariantType = isSelected ? "default" : "primary";

  const handleClick = (e?: FormEvent) => {
    e?.stopPropagation();
  };

  return (
    <ProductDetailStyled $isSelected={isSelected}>
      <div className="product-name amatic-sc-bold">{title}</div>
      <div className="product-buy">
        <div className="product-price">{formatPrice(price)}</div>
        <Button
          label="Ajouter"
          className="button-buy"
          variant={buttonVariant}
          onClick={handleClick}
        />
      </div>
    </ProductDetailStyled>
  );
}

const ProductDetailStyled = styled.div<ProductDetailStyledProps>`
  .product-name {
    font-size: ${theme.fonts.size.P4};
    max-height: 46px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-buy {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: ${theme.spacing.xxs};

    .product-price {
      color: ${({ $isSelected }) =>
        $isSelected ? `${theme.colors.white}` : `${theme.colors.primary}`};
    }

    .button-buy {
      width: 95px;
      height: 38px;
      font-size: ${theme.fonts.size.XXS};
    }
  }
`;
