import styled from "styled-components";
import { theme } from "../../../theme/theme";
import Image from "../../reusable-ui/Image";
import ProductDetail from "./ProductDetail";
import type { MenuCardProps } from "../../../types";

export default function MenuCard({ product }: MenuCardProps) {
  return (
    <MenuCardStyled key={product.id}>
      <Image src={`/src${product.imageSource}`} alt="product-image"/>
      <ProductDetail product={product} />
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
  padding-top: ${theme.spacing.xl};
  padding-left: ${theme.spacing.md};
  padding-right: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.card};
`;
