import { createContext, createRef } from "react";
import { defaultFormInputs } from "../components/pages/order/AdminPanel/getFieldConfig";
import type {
  AdminPanelFormActionType,
  ContentTabIDType,
  TabIDType,
} from "../types";

export const FormProdContext = createContext({
  isFolded: false,
  selectedTabID: "add-product" as ContentTabIDType,
  formInputs: defaultFormInputs,
  inputRef: createRef(),
});

export const FormProdHandlersContext = createContext({
  handleTabClick: (id: TabIDType) => {
    console.log(id);
  },
});

const fakeDispatch = function ({
  type = "reset",
  formTarget = "add-product",
}: AdminPanelFormActionType) {
  console.log(type, formTarget);
};

export const AdminPanelFormDispatchContext = createContext(fakeDispatch);
