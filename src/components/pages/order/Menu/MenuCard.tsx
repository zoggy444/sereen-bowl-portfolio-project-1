import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Image from "../../../reusable-ui/Image";
import ProductDetail from "./ProductDetail";
import type { MenuActionType, MenuCardProps } from "../../../../types";
import { TiDelete } from "react-icons/ti";
import IsAdminModeContext from "../../../../context/IsAdminModeContext";
import { useContext, type MouseEvent } from "react";
import { MenuDispatchContext } from "../../../../context/MenuContext";

export default function MenuCard({ prodID, src, title, price }: MenuCardProps) {
  const menuDispatch = useContext(MenuDispatchContext);
  const isAdminMode = useContext(IsAdminModeContext).isAdminMode;

  const onDeleteClick = (e: MouseEvent<SVGElement>) => {
    e.preventDefault();
    const action: MenuActionType = { type: "delete-product", deleteID: prodID };
    menuDispatch(action);
  };

  return (
    <MenuCardStyled>
      <div className="delete-container">
        {isAdminMode && (
          <button className="product-delete">
            <TiDelete className="button-icon" onClick={onDeleteClick} />
          </button>
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
      background: none;
      border: none;
      cursor: default;
      .button-icon {
        cursor: pointer;
        color: ${theme.colors.primary};
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
`;
