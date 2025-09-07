import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Image from "../../../reusable-ui/Image";
import ProductDetail from "./ProductDetail";
import type { MenuCardProps } from "../../../../types";
import { TiDelete } from "react-icons/ti";
import IsAdminModeContext from "../../../../context/IsAdminModeContext";
import { useContext } from "react";

export default function MenuCard({ src, title, price }: MenuCardProps) {
  const isAdminMode = useContext(IsAdminModeContext).isAdminMode;

  return (
    <MenuCardStyled>
      <div className="delete-container">
        {isAdminMode && (
          <div className="product-delete">
            <TiDelete />
          </div>
        )}
      </div>
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
  padding-top: ${theme.spacing.sm};
  padding-bottom: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.card};

  .delete-container {
    height: ${theme.gridUnit * 4}px;
    align-self: flex-end;
    .product-delete {
      cursor: pointer;
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.P2};
    }
  }

  .product-image {
    height: 145px;
  }
`;
