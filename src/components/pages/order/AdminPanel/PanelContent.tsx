import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type { PanelContentProps } from "../../../../types";
import FormProduct from "./FormProduct";

export default function PanelContent({
  isFolded,
  content,
  formInputs,
  handleInputChange,
  handleInputReset,
}: PanelContentProps) {
  if (!isFolded) {
    if (content === "Add a product") {
      return (
        <PanelContentStyled>
          <FormProduct
            formInputs={formInputs}
            handleInputChange={handleInputChange}
            handleInputReset={handleInputReset}
          />
        </PanelContentStyled>
      );
    }
    return <PanelContentStyled>{content}</PanelContentStyled>;
  }
  return <PanelFoldedStyled />;
}

const PanelContentStyled = styled.div`
  min-height: ${theme.gridUnit * 25}px;
  border-top: 1px solid ${theme.colors.greyLight};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.white};

  font-size: ${theme.fonts.size.P0};
`;

const PanelFoldedStyled = styled.div`
  display: none;
`;
