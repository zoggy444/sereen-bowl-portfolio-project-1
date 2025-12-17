import { createContext, createRef } from "react";
import type {
  AdminPanelFormActionType,
  BasketActionType,
  BasketProdType,
  MenuActionType,
} from "../types";
import { fakeMenu } from "../fakeData/fakeMenu";
import { defaultFormInputs } from "../components/pages/order/AdminPanel/getFieldConfig";
import type { ContentTabIDType, TabIDType } from "../types";

const defaultBasketProds: BasketProdType[] = [];

export const ProductsContext = createContext({
  menuProds: fakeMenu.MEDIUM,
  basketProds: defaultBasketProds,
  prodSelectedID: "",
  handleProdSelect: (prodID: string) => {
    console.log(prodID);
  },
});

const fakeMenuDispatch = function ({ type = "" }: MenuActionType) {
  console.log(type);
};

const fakeBasketDispatch = function ({ type = "", id = "" }: BasketActionType) {
  console.log(type, id);
};

const fakePanelDispatch = function ({
  type = "",
  formTarget = "",
}: AdminPanelFormActionType) {
  console.log(type, formTarget);
};

export const MainDispatchContext = createContext({
  menuDispatch: fakeMenuDispatch,
  basketDispatch: fakeBasketDispatch,
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
