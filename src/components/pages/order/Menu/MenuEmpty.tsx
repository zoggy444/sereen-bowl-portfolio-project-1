import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import Button from "../../../reusable-ui/Button";
import { useContext } from "react";
import IsAdminModeContext from "../../../../context/IsAdminModeContext";
import type { MenuEmptyProps } from "../../../../types";

export default function MenuEmpty({ onRegenMenuClick }: MenuEmptyProps) {
  const isAdminMode = useContext(IsAdminModeContext).isAdminMode;

  return (
    <MenuEmptyStyled>
      {isAdminMode ? (
        <>
          <h1 className="amatic-sc-bold">Empty menu ?</h1>
          <h2 className="amatic-sc-regular">Click below to reinitialize it</h2>
          <ButtonReStyled
            label="Generate new products"
            intent="primary"
            onClick={onRegenMenuClick}
          />
        </>
      ) : (
        <>
          <h1 className="amatic-sc-bold">Victims of our success ! :D</h1>
          <h2 className="amatic-sc-regular">
            New recipes are being worked on.
          </h2>
          <h2 className="amatic-sc-regular">See you very soon !</h2>
        </>
      )}
    </MenuEmptyStyled>
  );
}

const MenuEmptyStyled = styled.div`
  box-sizing: border-box;
  height: calc(98vh - 100px);
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: ${theme.fonts.size.P4};
    margin-block-start: 0;
    margin-block-end: ${theme.spacing.md};
  }
  h2 {
    font-size: ${theme.fonts.size.P4};
    margin-block-start: 0px;
    margin-block-end: ${theme.spacing.md};
  }
`;

const ButtonReStyled = styled(Button)`
  font-size: ${theme.fonts.size.XS};
  padding: ${theme.spacing.md};
  margin-top: ${theme.spacing.sm};
`;
