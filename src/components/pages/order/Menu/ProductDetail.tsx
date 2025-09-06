import styled from "styled-components";
import Button from "../../../reusable-ui/Button";
import { theme } from "../../../../theme/theme";
import type { ProductDetailProps } from "../../../../types";
import { formatPrice } from "../../../../utils/maths";

export default function ProductDetail({ title, price }: ProductDetailProps) {
  return (
    <ProductDetailStyled>
      <div className="product-name amatic-sc-bold">{title}</div>
      <div className="product-buy">
        <div className="product-price">{formatPrice(price)}</div>
        <Button label="Ajouter" className="button-buy" />
      </div>
    </ProductDetailStyled>
  );
}

const ProductDetailStyled = styled.div`
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
      color: ${theme.colors.primary};
    }

    .button-buy {
      width: 95px;
      height: 38px;
      font-size: ${theme.fonts.size.XXS};
    }
  }
`;
