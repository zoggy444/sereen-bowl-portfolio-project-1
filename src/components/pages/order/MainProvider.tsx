import { useReducer, useRef, useState, type ReactNode } from "react";
import {
  ProductsContext,
  MainDispatchContext,
  AdminPanelContext,
} from "../../../context/OrderMainContext";
import type {
  AdminPanelFormActionType,
  AdminPanelFormType,
  ContentTabIDType,
  MenuActionType,
  PanelFormType,
  ProductType,
  TabIDType,
} from "../../../types";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { defaultFormInputs } from "./AdminPanel/getFieldConfig";
import getPanelConfig from "./AdminPanel/getPanelConfig";

export function MainProvider({ children }: { children: ReactNode }) {
  // todo: merge menuProds with prodSelectedID to fix bug when delete selected prod
  const [menuProds, menuDispatch] = useReducer(menuReducer, [
    ...fakeMenu.MEDIUM,
  ]);
  const [adminPanelForm, adminPanelFormDispatch] = useReducer(
    adminPanelFormReducer,
    {
      addInputs: { ...defaultFormInputs },
      editInputs: { ...defaultFormInputs },
    }
  );
  const [prodSelectedID, setProdSelectedID] = useState(-1);
  const [isPanelFolded, setIsPanelFolded] = useState(false);
  const [selectedTabID, setSelectedTab] =
    useState<ContentTabIDType>("add-product");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleProdSelect = (id: number) => {
    const selectedProd = menuProds.find((p) => p.id === id);
    const newEditInputs: PanelFormType = {
      title: selectedProd?.title || "",
      imageSource: selectedProd?.imageSource || "",
      price: selectedProd?.price.toString() || "",
    };
    setProdSelectedID(id);
    adminPanelFormDispatch({
      type: "fill",
      formTarget: "edit-product",
      fillDict: newEditInputs,
    });
    setSelectedTab("edit-product");
    toggleFolded(false);
    setTimeout(() => inputRef.current?.focus(), 0);
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

  const { formInputs } = getPanelConfig({
    selectedTabID,
    addInputs: adminPanelForm.addInputs,
    editInputs: adminPanelForm.editInputs,
  });

  return (
    <ProductsContext.Provider
      value={{ menuProds, prodSelectedID, handleProdSelect }}
    >
      <AdminPanelContext.Provider
        value={{
          isPanelFolded,
          selectedTabID,
          formInputs,
          inputRef,
          handleTabClick,
        }}
      >
        <MainDispatchContext.Provider
          value={{
            menuDispatch,
            adminPanelFormDispatch,
          }}
        >
          {children}
        </MainDispatchContext.Provider>
      </AdminPanelContext.Provider>
    </ProductsContext.Provider>
  );
}

const menuReducer = (menuProds: ProductType[], action: MenuActionType) => {
  switch (action.type) {
    case "add-product": {
      const newVals = action.prodVals;
      if (!newVals) return [...menuProds];
      const nextId = menuProds.length + 1;

      let priceNumber = parseFloat(newVals.price.replace(",", "."));
      if (isNaN(priceNumber)) priceNumber = 0;

      const newProduct: ProductType = {
        id: nextId,
        title: newVals.title,
        imageSource: newVals.imageSource,
        price: priceNumber,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
      };
      return [newProduct, ...menuProds];
    }
    case "edit-product": {
      const newVals = action.prodVals;
      const prodID = action.prodID;
      if (!newVals || !prodID) return [...menuProds];
      const toUpdProd = menuProds.find((p) => p.id === prodID);
      if (!toUpdProd) return [...menuProds];

      let priceNumber = parseFloat(newVals.price.replace(",", "."));
      if (isNaN(priceNumber)) priceNumber = 0;

      const updedProd = {
        ...toUpdProd,
        title: newVals.title,
        imageSource: newVals.imageSource,
        price: priceNumber,
      };
      return menuProds.map((p) => (p.id === prodID ? updedProd : p));
    }
    case "delete-product": {
      return [...menuProds].filter((el) => el.id !== action.prodID);
    }
    case "regen-menu": {
      const newMenu = fakeMenu.MEDIUM;
      return newMenu;
    }
    default:
      return menuProds;
  }
};

const adminPanelFormReducer = (
  adminPanelForm: AdminPanelFormType,
  action: AdminPanelFormActionType
) => {
  const keyName =
    action.formTarget === "add-product" ? "addInputs" : "editInputs";
  switch (action.type) {
    case "change":
      if (!action.name || !action.value) return adminPanelForm;
      {
        const newInputs = {
          ...adminPanelForm[keyName],
          [action.name]: action.value,
        };
        return { ...adminPanelForm, [keyName]: newInputs };
      }
    case "fill": {
      if (!action.fillDict) return adminPanelForm;
      const newInputs = action.fillDict;
      return { ...adminPanelForm, [keyName]: newInputs };
    }
    case "reset": {
      const newInputs = { ...defaultFormInputs };
      return { ...adminPanelForm, [keyName]: newInputs };
    }
    default:
      return adminPanelForm;
  }
};
