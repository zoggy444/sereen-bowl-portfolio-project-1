import { createContext } from "react";
import { defaultFormInputs } from "../components/pages/order/AdminPanel/getFieldConfig";
import type { ContentTabIDType, TabIDType } from "../types";

export const FormProdContext = createContext({
  isFolded: false,
  selectedTabID: "add-product" as ContentTabIDType,
  formInputs: defaultFormInputs,
});

const dummyChange = (name: string, value: string) => {
  console.log(name, value);
};

export const FormProdHandlersContext = createContext({
  handleTabClick: (id: TabIDType) => {
    console.log(id);
  },
  handleInputChange: dummyChange,
  handleInputReset: () => {},
});
