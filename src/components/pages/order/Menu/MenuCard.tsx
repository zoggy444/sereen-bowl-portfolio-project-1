import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Image from "../../../reusable-ui/Image";
import ProductDetail from "./ProductDetail";
import type { MenuCardProps, MenuCardStyledProps } from "../../../../types";
import IsAdminModeContext from "../../../../context/IsAdminModeContext";
import { useState, useContext, type FormEvent } from "react";
import { ProductsContext } from "../../../../context/OrderMainContext";
import MenuCardDelete from "./MenuCardDelete";

export default function MenuCard({ prodID, src, title, price }: MenuCardProps) {
  const { prodSelectedID, handleProdSelect } = useContext(ProductsContext);
  const isAdminMode = useContext(IsAdminModeContext).isAdminMode;
  const [isHovered, setIsHovered] = useState(false);

  const isSelected = prodSelectedID === prodID && isAdminMode;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (e: FormEvent) => {
    e.stopPropagation();
    return isAdminMode && handleProdSelect(prodID);
  };

  return (
    <MenuCardStyled
      $isHovered={isHovered && isAdminMode}
      $isSelected={isSelected && isAdminMode}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <MenuCardDelete prodID={prodID} isSelected={isSelected} />
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

  .product-image {
    height: 145px;
  }

  ${({ $isHovered }) =>
    $isHovered &&
    `&:hover {
    transform: scale(1.05);
  }`}
`;
