import { createContext } from "react";
import type { MenuActionType } from "../types";
import { fakeMenu } from "../fakeData/fakeMenu";

export const MenuProdsContext = createContext(fakeMenu.MEDIUM);

const fakeDispatch = function ({ type = "" }: MenuActionType) {
  console.log(type);
};

export const MenuDispatchContext = createContext(fakeDispatch);
