import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import FormProduct from "../../../reusable-ui/FormProduct";
import { useContext } from "react";
import FormFooterAdd from "./FormFooterAdd";
import FormFooterEdit from "./FormFooterEdit";
import type { AdminPanelFormActionType } from "../../../../types";
import {
  MainDispatchContext,
  ProductsContext,
  AdminPanelContext,
} from "../../../../context/OrderMainContext";

const PanelContent = () => {
  const { isPanelFolded, selectedTabID, formInputs, inputRef } =
    useContext(AdminPanelContext);
  const { menuDispatch, adminPanelFormDispatch } =
    useContext(MainDispatchContext);
  const { prodSelectedID } = useContext(ProductsContext);

  const handleInputChange = (name: string, value: string) => {
    const action: AdminPanelFormActionType = {
      type: "change",
      formTarget: selectedTabID,
      name,
      value,
    };
    adminPanelFormDispatch(action);
    menuDispatch({
      type: "edit-product",
      prodID: prodSelectedID,
      prodVals: { ...formInputs, [name]: value },
    });
  };

  const FormFooter =
    selectedTabID === "add-product" ? FormFooterAdd : FormFooterEdit;

  if (!isPanelFolded) {
    return (
      <PanelContentStyled>
        {prodSelectedID === "" && selectedTabID === "edit-product" ? (
          <h2 className="no-prod-select amatic-sc-regular">
            Click on a product to start editing it
          </h2>
        ) : (
          <FormProduct
            selectedTabID={selectedTabID}
            formInputs={formInputs}
            Footer={FormFooter}
            onInputChange={handleInputChange}
            ref={inputRef}
          />
        )}
      </PanelContentStyled>
    );
  }
  return <PanelFoldedStyled />;
};

export default PanelContent;

const PanelContentStyled = styled.div`
  min-height: ${theme.gridUnit * 25}px;
  border-top: 1px solid ${theme.colors.greyLight};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;

  font-size: ${theme.fonts.size.P0};
  .no-prod-select {
    padding-left: ${theme.spacing.xl};
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P3};
  }
`;

const PanelFoldedStyled = styled.div`
  display: none;
`;
