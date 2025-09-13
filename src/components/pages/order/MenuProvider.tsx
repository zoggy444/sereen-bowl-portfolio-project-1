import { useReducer, type ReactNode } from "react";
import {
  MenuDispatchContext,
  MenuProdsContext,
} from "../../../context/MenuContext";
import type { MenuActionType, ProductType } from "../../../types";
import { fakeMenu } from "../../../fakeData/fakeMenu";

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menuProds, menuDispatch] = useReducer(menuReducer, [
    ...fakeMenu.MEDIUM,
  ]);

  return (
    <MenuProdsContext.Provider value={menuProds}>
      <MenuDispatchContext.Provider value={menuDispatch}>
        {children}
      </MenuDispatchContext.Provider>
    </MenuProdsContext.Provider>
  );
}

const menuReducer = (menuProds: ProductType[], action: MenuActionType) => {
  switch (action.type) {
    case "add-product": {
      const newVals = action.prodAdd;
      if (!newVals) return [...menuProds];
      const nextId = menuProds.length + 1;

      if (!newVals.imageSource) newVals.imageSource = "/images/coming-soon.png";
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
    case "delete-product": {
      return [...menuProds].filter((el) => el.id !== action.deleteID);
    }
    case "regen-menu": {
      const newMenu = fakeMenu.MEDIUM;
      return newMenu;
    }
    default:
      return menuProds;
  }
};
