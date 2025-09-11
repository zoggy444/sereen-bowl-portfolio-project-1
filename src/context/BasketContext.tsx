import { createContext } from "react";
import type { BasketActionType, BasketProdType } from "../types";

export const defaultBasketProds: BasketProdType[] = [
  { id: 1, qty: 3 },
  { id: 4, qty: 2 },
];

const fakeDispatch = function ({ type = "", id = -1 }: BasketActionType) {
  console.log(type, id);
};

export const BasketProdsContext = createContext([...defaultBasketProds]);
export const BasketDispatchContext = createContext(fakeDispatch);
