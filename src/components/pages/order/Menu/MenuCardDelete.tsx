import { useContext, type MouseEventHandler } from "react";
import styled from "styled-components";
import IsAdminModeContext from "../../../../context/IsAdminModeContext";
import { MainDispatchContext } from "../../../../context/OrderMainContext";
import type {
  MenuActionType,
  MenuCardDeleteProps,
  MenuCardDeleteStyledProps,
} from "../../../../types";
import { TiDelete } from "react-icons/ti";
import { theme } from "../../../../theme/theme";

export default function MenuCardDelete({
  prodID,
  isSelected,
}: MenuCardDeleteProps) {
  const isAdminMode = useContext(IsAdminModeContext).isAdminMode;
  const { menuDispatch } = useContext(MainDispatchContext);

  const onDeleteClick: MouseEventHandler<SVGElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const action: MenuActionType = { type: "delete-product", prodID: prodID };
    menuDispatch(action);
  };

  return (
    <MenuCardDeleteStyled $isSelected={isSelected}>
      {isAdminMode && (
        <button className="product-delete">
          <TiDelete className="button-icon" onClick={onDeleteClick} />
        </button>
      )}
    </MenuCardDeleteStyled>
  );
}

const MenuCardDeleteStyled = styled.div<MenuCardDeleteStyledProps>`
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
`;
