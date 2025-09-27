import { createContext, createRef } from "react";
import type { AdminPanelFormActionType, MenuActionType } from "../types";
import { fakeMenu } from "../fakeData/fakeMenu";
import { defaultFormInputs } from "../components/pages/order/AdminPanel/getFieldConfig";
import type { ContentTabIDType, TabIDType } from "../types";

export const ProductsContext = createContext({
  menuProds: fakeMenu.MEDIUM,
  prodSelectedID: "",
  handleProdSelect: (prodID: string) => {
    console.log(prodID);
  },
});

const fakeMenuDispatch = function ({ type = "" }: MenuActionType) {
  console.log(type);
};

const fakePanelDispatch = function ({
  type = "",
  formTarget = "",
}: AdminPanelFormActionType) {
  console.log(type, formTarget);
};

export const MainDispatchContext = createContext({
  menuDispatch: fakeMenuDispatch,
  adminPanelFormDispatch: fakePanelDispatch,
});

export const AdminPanelContext = createContext({
  isPanelFolded: false,
  selectedTabID: "add-product" as ContentTabIDType,
  formInputs: defaultFormInputs,
  inputRef: createRef<HTMLInputElement>(),
  handleTabClick: (id: TabIDType) => {
    console.log(id);
  },
});
