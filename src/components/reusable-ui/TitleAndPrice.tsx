import styled from "styled-components";
import ButtonPrimary from "./ButtonPrimary";
import { theme } from "../../theme/theme";
import type { TitleAndPriceProps } from "../../types";
import { formatPrice } from "../../utils/maths";
import type { FormEvent } from "react";

export default function TitleAndPrice({
  id,
  title,
  price,
  className,
  buttonLabel,
  onButtonClick,
}: TitleAndPriceProps) {
  const onClick = (e?: FormEvent) => {
    e?.stopPropagation();
    return onButtonClick !== undefined && onButtonClick(id);
  };

  return (
    <TitleAndPriceStyled className={className}>
      <div className="product-title amatic-sc-bold">{title}</div>
      <div className="product-detail">
        <div className="product-price">{formatPrice(price)}</div>
        {onButtonClick !== undefined && (
          <ButtonPrimary
            label={buttonLabel || ""}
            className="product-button"
            onClick={onClick}
          />
        )}
      </div>
    </TitleAndPriceStyled>
  );
}

const TitleAndPriceStyled = styled.div`
  overflow: hidden;

  .product-title {
    color: ${theme.colors.dark};
    font-size: ${theme.fonts.size.P4};
    max-height: 46px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: ${theme.spacing.xxs};

    .product-price {
      color: ${theme.colors.primary};
    }

    .product-button {
      width: 95px;
      height: 38px;
      font-size: ${theme.fonts.size.XXS};
    }
  }
`;
