import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type { BasketCardRightProps } from "../../../../types";
import { TbTrashXFilled } from "react-icons/tb";

export default function BasketCardRight({
  qty,
  isHovered,
  onDelClick,
}: BasketCardRightProps) {
  return (
    <BasketCardRightStyled>
      {isHovered ? (
        <button className="basket-card-del" onClick={onDelClick}>
          <TbTrashXFilled />
        </button>
      ) : (
        <div className="basket-card-qty">x {qty}</div>
      )}
    </BasketCardRightStyled>
  );
}

const BasketCardRightStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .basket-card-qty {
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P0};
  }

  .basket-card-del {
    height: 86px;
    width: 76px;
    margin-top: -${theme.spacing.xs};
    margin-bottom: -${theme.spacing.xs};
    border-top-right-radius: ${theme.borderRadius.round};
    border-bottom-right-radius: ${theme.borderRadius.round};
    border: none;

    cursor: pointer;

    color: ${theme.colors.white};
    background-color: ${theme.colors.red};
    font-size: ${theme.fonts.size.P1};

    &:hover {
      color: ${theme.colors.dark};
    }
  }
`;
