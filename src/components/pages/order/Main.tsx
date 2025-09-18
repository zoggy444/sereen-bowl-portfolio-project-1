import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import Menu from "./Menu/Menu";
import AdminPanel from "./AdminPanel/AdminPanel";
import type {
  ContentTabIDType,
  PanelFormType,
  ProductType,
  TabIDType,
} from "../../../types";
import { type Ref, useContext, useRef, useState } from "react";
import {
  MenuDispatchContext,
  MenuProdsContext,
} from "../../../context/MenuContext";
import { defaultFormInputs } from "./AdminPanel/getFieldConfig";

export default function Main() {
  const products: ProductType[] = useContext(MenuProdsContext);
  const menuDispatch = useContext(MenuDispatchContext);
  const [prodHoveredID, setProdHoveredID] = useState(-1);
  const [prodSelectedID, setProdSelectedID] = useState(-1);
  const [isPanelFolded, setIsPanelFolded] = useState(false);
  const [selectedTabID, setSelectedTab] =
    useState<ContentTabIDType>("add-product");
  const [addInputs, setFormInputs] = useState({ ...defaultFormInputs });
  const [editInputs, setEditInputs] = useState({ ...defaultFormInputs });
  const inputRef = useRef<Ref<HTMLInputElement | null>>(null);

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
    setSelectedTab("edit-product");
    toggleFolded(false);
    setTimeout(() => inputRef?.current?.focus(), 0);
  };

  const toggleFolded = (force?: boolean) => {
    const newIsChecked = force !== undefined ? force : !isPanelFolded;
    setIsPanelFolded(newIsChecked);
  };

  const handleTabClick = (id: TabIDType) => {
    if (id) {
      if (id === "fold") {
        toggleFolded();
      } else {
        setSelectedTab(id);
        if (isPanelFolded) toggleFolded(false);
      }
    }
  };

  const handleAddChange = (name: string, value: string) => {
    setFormInputs({ ...addInputs, [name]: value });
  };

  const handleAddReset = () => {
    setFormInputs({ ...defaultFormInputs });
  };

  const handleEditChange = (name: string, value: string) => {
    setEditInputs({ ...editInputs, [name]: value });
    menuDispatch({
      type: "edit-product",
      prodID: prodSelectedID,
      prodVals: { ...editInputs, [name]: value },
    });
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
        isFolded={isPanelFolded}
        selectedTabID={selectedTabID}
        addInputs={addInputs}
        editInputs={editInputs}
        onAddChange={handleAddChange}
        onAddReset={handleAddReset}
        onEditChange={handleEditChange}
        onTabClick={handleTabClick}
        ref={inputRef}
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
