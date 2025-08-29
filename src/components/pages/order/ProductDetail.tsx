import styled from "styled-components";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import { theme } from "../../../theme/theme";
import type { ProductDetailProps } from "../../../types";

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <ProductDetailStyled>
      <div className="product-name amatic-sc-bold">{product.title}</div>
      <div className="product-buy">
        <div className="product-price">{product.price}</div>
        <ButtonPrimary label="Ajouter" className="button-buy" />
      </div>
    </ProductDetailStyled>
  );
}

const ProductDetailStyled = styled.div`
  .product-name {
    font-size: ${theme.fonts.P4};
    max-height: 46px;
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
      font-size: ${theme.fonts.XXS};
    }
  }
`;
