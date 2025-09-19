import { useReducer, useRef, useState, type ReactNode, type Ref } from "react";
import {
  MenuDispatchContext,
  MenuProdsContext,
  ProdSelectedContext,
} from "../../../context/MenuContext";
import {
  FormProdContext,
  FormProdHandlersContext,
} from "../../../context/AdminPanelContext";
import type {
  ContentTabIDType,
  MenuActionType,
  PanelFormType,
  ProductType,
  TabIDType,
} from "../../../types";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { defaultFormInputs } from "./AdminPanel/getFieldConfig";
import getPanelConfig from "./AdminPanel/getPanelConfig";

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menuProds, menuDispatch] = useReducer(menuReducer, [
    ...fakeMenu.MEDIUM,
  ]);
  const [prodSelectedID, setProdSelectedID] = useState(-1);
  const [isPanelFolded, setIsPanelFolded] = useState(false);
  const [selectedTabID, setSelectedTab] =
    useState<ContentTabIDType>("add-product");
  const [addInputs, setAddInputs] = useState({ ...defaultFormInputs });
  const [editInputs, setEditInputs] = useState({ ...defaultFormInputs });
  const inputRef = useRef<Ref<HTMLInputElement | null>>(null);

  const handleCardSelect = (id: number) => {
    const selectedProd = menuProds.find((p) => p.id === id);
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
    setAddInputs({ ...addInputs, [name]: value });
  };

  const handleAddReset = () => {
    setAddInputs({ ...defaultFormInputs });
  };

  const handleEditChange = (name: string, value: string) => {
    setEditInputs({ ...editInputs, [name]: value });
    menuDispatch({
      type: "edit-product",
      prodID: prodSelectedID,
      prodVals: { ...editInputs, [name]: value },
    });
  };

  const handleEditReset = () => {
    setEditInputs({ ...defaultFormInputs });
  };

  const { formInputs, onInputReset, onInputChange } = getPanelConfig({
    selectedTabID,
    addInputs,
    editInputs,
    onAddChange: handleAddChange,
    onEditChange: handleEditChange,
    onAddReset: handleAddReset,
  });

  //todo : replace by handling in onDelete
  if (
    menuProds.find((p) => p.id === prodSelectedID) === undefined &&
    prodSelectedID != -1
  ) {
    setProdSelectedID(-1);
    handleEditReset();
  }

  return (
    <MenuProdsContext.Provider value={menuProds}>
      <MenuDispatchContext.Provider value={menuDispatch}>
        <FormProdHandlersContext.Provider
          value={{
            handleTabClick: handleTabClick,
            handleInputChange: onInputChange,
            handleInputReset: onInputReset,
          }}
        >
          <FormProdContext.Provider
            value={{
              isFolded: isPanelFolded,
              selectedTabID,
              formInputs,
            }}
          >
            <ProdSelectedContext.Provider
              value={{
                selectedID: prodSelectedID,
                handleSelect: handleCardSelect,
              }}
            >
              {children}
            </ProdSelectedContext.Provider>
          </FormProdContext.Provider>
        </FormProdHandlersContext.Provider>
      </MenuDispatchContext.Provider>
    </MenuProdsContext.Provider>
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
