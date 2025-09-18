import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type { PanelContentProps } from "../../../../types";
import FormProduct from "./FormProduct";
import FormProdEdit from "./FormProdEdit";
import { forwardRef, type Ref } from "react";

const PanelContent = forwardRef(
  (
    {
      isFolded,
      content,
      formInputs,
      onAddChange,
      onAddReset,
      editInputs,
      onEditChange,
    }: PanelContentProps,
    ref: Ref<HTMLInputElement | null>
  ) => {
    if (!isFolded) {
      if (content === "Add a product") {
        return (
          <PanelContentStyled>
            <FormProduct
              formInputs={formInputs}
              onInputChange={onAddChange}
              onInputReset={onAddReset}
            />
          </PanelContentStyled>
        );
      }
      return (
        <PanelContentStyled>
          <FormProdEdit
            formInputs={editInputs}
            onInputChange={onEditChange}
            ref={ref}
          />
        </PanelContentStyled>
      );
    }
    return <PanelFoldedStyled />;
  }
);

export default PanelContent;

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
