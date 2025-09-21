import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Image from "../../../reusable-ui/Image";
import ProductDetail from "./ProductDetail";
import type {
  MenuActionType,
  MenuCardProps,
  MenuCardStyledProps,
} from "../../../../types";
import { TiDelete } from "react-icons/ti";
import IsAdminModeContext from "../../../../context/IsAdminModeContext";
import { useState, useContext, type MouseEvent } from "react";
import {
  MainDispatchContext,
  ProductsContext,
} from "../../../../context/OrderMainContext";

export default function MenuCard({ prodID, src, title, price }: MenuCardProps) {
  const { prodSelectedID, handleProdSelect } = useContext(ProductsContext);
  const { menuDispatch } = useContext(MainDispatchContext);
  const isAdminMode = useContext(IsAdminModeContext).isAdminMode;
  const [isHovered, setIsHovered] = useState(false);

  const isSelected = prodSelectedID === prodID && isAdminMode;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    return isAdminMode && handleProdSelect(prodID);
  };

  const onDeleteClick = (e: MouseEvent<SVGElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const action: MenuActionType = { type: "delete-product", prodID: prodID };
    menuDispatch(action);
  };

  return (
    <MenuCardStyled
      $isHovered={isHovered && isAdminMode}
      $isSelected={isSelected && isAdminMode}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="delete-container">
        {isAdminMode && (
          <button className="product-delete">
            <TiDelete className="button-icon" onClick={onDeleteClick} />
          </button>
        )}
      </div>
      <Image
        src={src || "/images/coming-soon.png"}
        alt="product-image"
        className="product-image"
      />
      <ProductDetail title={title} price={price} isSelected={isSelected} />
    </MenuCardStyled>
  );
}

const MenuCardStyled = styled.div<MenuCardStyledProps>`
  grid-area: span 1 / span 1;
  justify-self: center;
  width: 240px;
  height: 330px;
  max-height: 330px;

  transition: all 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
  box-sizing: border-box;
  padding: ${theme.spacing.md};
  padding-top: ${theme.spacing.sm};
  padding-bottom: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.extraRound};
  background: ${({ $isSelected }) =>
    $isSelected ? `${theme.colors.primary}` : `${theme.colors.white}`};
  box-shadow: ${({ $isHovered }) =>
    $isHovered ? `${theme.shadows.hoveredCard}` : `${theme.shadows.card}`};

  .delete-container {
    height: ${theme.gridUnit * 4}px;
    align-self: flex-end;
    .product-delete {
      background: none;
      border: none;
      .button-icon {
        cursor: pointer;
        color: ${({ $isSelected }) =>
          $isSelected ? `${theme.colors.white}` : `${theme.colors.primary}`};
        font-size: ${theme.fonts.size.P2};
      }
      .button-icon:hover {
        color: ${theme.colors.red};
      }
    }
  }

  .product-image {
    height: 145px;
  }

  ${({ $isHovered }) =>
    $isHovered &&
    `&:hover {
    transform: scale(1.05);
  }`}
`;
