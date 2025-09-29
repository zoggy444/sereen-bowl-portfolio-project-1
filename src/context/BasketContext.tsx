import { createContext } from "react";
import type { BasketActionType, BasketProdType } from "../types";

export const defaultBasketProds: BasketProdType[] = [];

const fakeDispatch = function ({ type = "", id = "" }: BasketActionType) {
  console.log(type, id);
};

export const BasketProdsContext = createContext([...defaultBasketProds]);
export const BasketDispatchContext = createContext(fakeDispatch);
