import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Image from "../../../reusable-ui/Image";
import ProductDetail from "./ProductDetail";
import type { MenuCardProps } from "../../../../types";

export default function MenuCard({ src, title, price }: MenuCardProps) {
  return (
    <MenuCardStyled>
      <Image src={src} alt="product-image" className="product-image" />
      <ProductDetail title={title} price={price} />
    </MenuCardStyled>
  );
}

const MenuCardStyled = styled.div`
  grid-area: span 1 / span 1;
  justify-self: center;
  width: 240px;
  height: 330px;
  max-height: 330px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;
  padding: ${theme.spacing.md};
  padding-top: ${theme.spacing.xl};
  padding-bottom: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.card};

  .product-image {
    height: 145px;
  }
`;
