import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import Menu from "./Menu/Menu";
import AdminPanel from "./AdminPanel/AdminPanel";
import type { PanelFormType, ProductType } from "../../../types";
import { useContext, useState } from "react";
import { MenuProdsContext } from "../../../context/MenuContext";
import { defaultFormInputs } from "./AdminPanel/getFieldConfig";

export default function Main() {
  const products: ProductType[] = useContext(MenuProdsContext);
  const [prodHoveredID, setProdHoveredID] = useState(-1);
  const [prodSelectedID, setProdSelectedID] = useState(-1);
  const [editInputs, setEditInputs] = useState({ ...defaultFormInputs });

  const handleCardMouseEnter = (id: number) => {
    setProdHoveredID(id);
  };

  const handleCardMouseLeave = () => {
    setProdHoveredID(-1);
  };

  const handleCardSelect = (id: number) => {
    const selectedProd = products.find((p) => p.id === id);
    const newEditInputs: PanelFormType = {
      title: selectedProd?.title || "",
      imageSource: selectedProd?.imageSource || "",
      price: selectedProd?.price.toString() || "",
    };
    setProdSelectedID(id);
    setEditInputs(newEditInputs);
  };

  const handleEditChange = (name: string, value: string) => {
    setEditInputs({ ...editInputs, [name]: value });
  };

  return (
    <MainStyled>
      {/* <div className="basket"/> */}
      <Menu
        products={products}
        prodHoveredID={prodHoveredID}
        prodSelectedID={prodSelectedID}
        onCardMouseEnter={handleCardMouseEnter}
        onCardMouseLeave={handleCardMouseLeave}
        onCardSelect={handleCardSelect}
      />
      <AdminPanel
        editInputs={editInputs}
        onEditChange={handleEditChange}
      />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: calc(98vh - 100px);
  overflow-y: scroll;
  scrollbar-width: none;

  background-color: ${theme.colors.greyExtraLight};
  box-shadow: ${theme.shadows.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
