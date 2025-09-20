import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import FormProduct from "../../../reusable-ui/FormProduct";
import { useContext } from "react";
import {
  AdminPanelFormDispatchContext,
  FormProdContext,
} from "../../../../context/AdminPanelContext";
import FormFooterAdd from "./FormFooterAdd";
import FormFooterEdit from "./FormFooterEdit";
import type { AdminPanelFormActionType } from "../../../../types";
import {
  MenuDispatchContext,
  ProdSelectedContext,
} from "../../../../context/MenuContext";

const PanelContent = () => {
  const { isFolded, selectedTabID, formInputs, inputRef } =
    useContext(FormProdContext);
  const adminPanelFormDispatch = useContext(AdminPanelFormDispatchContext);
  const { selectedID } = useContext(ProdSelectedContext);
  const menuDispatch = useContext(MenuDispatchContext);

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
      prodID: selectedID,
      prodVals: { ...formInputs, [name]: value },
    });
  };

  const FormFooter =
    selectedTabID === "add-product" ? FormFooterAdd : FormFooterEdit;

  if (!isFolded) {
    return (
      <PanelContentStyled>
        <FormProduct
          selectedTabID={selectedTabID}
          formInputs={formInputs}
          Footer={FormFooter}
          onInputChange={handleInputChange}
          ref={inputRef}
        />
      </PanelContentStyled>
    );
  }
  return <PanelFoldedStyled />;
};

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
