import { useEffect, useReducer } from "react";
import { fetchUserData, updateMenu } from "../api/user";
import type { MenuActionType, ProductType, MenuHookType } from "../types";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepCopy } from "../utils/collection";

const menuReducer = (
  menuProds: ProductType[],
  action: MenuActionType
): ProductType[] => {
  switch (action.type) {
    case "add-product": {
      const newProduct = action.prod;
      if (!newProduct) return [...menuProds];
      return [newProduct, ...menuProds];
    }
    case "edit-product": {
      const updedProd = action.prod;
      const prodID = action.prodID;
      if (!updedProd || !prodID) return [...menuProds];
      return menuProds.map((p) => (p.id === prodID ? updedProd : p));
    }
    case "delete-product": {
      return [...menuProds].filter((el) => el.id !== action.prodID);
    }
    case "regen-menu": {
      const newMenu = fakeMenu.MEDIUM;
      return newMenu;
    }
    case "set-menu": {
      return action.menuProds || menuProds;
    }
    default:
      return menuProds;
  }
};

const useMenu = (userName: string): MenuHookType => {
  const [menuProds, menuDispatch] = useReducer(
    menuReducer,
    deepCopy(fakeMenu.GHOST)
  );

  useEffect(() => {
    if (menuProds.length > 0 && menuProds[0].id === "ghost-product-id") {
      fetchUserData(userName).then((userData) => {
        if (userData) {
          const userMenu = userData.menu as ProductType[];
          menuDispatch({ type: "set-menu", menuProds: userMenu });
        }
      });
    }
  }, [menuProds, userName]);

  const dispatch = async (action: MenuActionType) => {
    switch (action.type) {
      case "add-product": {
        if (!action.prodVals || !userName) return;
        const nextId = crypto.randomUUID();

        let priceNumber = parseFloat(action.prodVals.price.replace(",", "."));
        if (isNaN(priceNumber)) priceNumber = 0;

        const newProduct: ProductType = {
          id: nextId,
          title: action.prodVals.title,
          imageSource: action.prodVals.imageSource,
          price: priceNumber,
          quantity: 0,
          isAvailable: true,
          isAdvertised: false,
        };
        const newMenu = [newProduct, ...menuProds];
        const created = await updateMenu(userName, newMenu);
        if (created) {
          menuDispatch({ type: "add-product", prod: newProduct });
        }
        break;
      }
      case "edit-product": {
        if (!action.prodVals || !action.prodID || !userName) return;
        const toUpdProd = menuProds.find((p) => p.id === action.prodID);
        if (!toUpdProd) return;

        let priceNumber = parseFloat(action.prodVals.price.replace(",", "."));
        if (isNaN(priceNumber)) priceNumber = 0;

        const updedProd = {
          ...toUpdProd,
          title: action.prodVals.title,
          imageSource: action.prodVals.imageSource,
          price: priceNumber,
        };
        const newMenu = menuProds.map((p) =>
          p.id === action.prodID ? updedProd : p
        );
        const updated = await updateMenu(userName, newMenu);
        if (updated) {
          menuDispatch({
            type: "edit-product",
            prod: updedProd,
            prodID: action.prodID,
          });
        }
        break;
      }
      case "delete-product": {
        if (!action.prodID || !userName) return;
        const toDelProd = menuProds.find((p) => p.id === action.prodID);
        if (!toDelProd) return;

        const newMenu = menuProds.filter((p) => p.id !== action.prodID);
        const updated = await updateMenu(userName, newMenu);
        if (updated) {
          menuDispatch({ type: "delete-product", prodID: action.prodID });
        }
        break;
      }
      case "regen-menu": {
        if (!userName) return;
        const newMenu = fakeMenu.MEDIUM;
        const regened = await updateMenu(userName, newMenu);
        if (regened) {
          menuDispatch({ type: "regen-menu", menuProds: newMenu });
        }
        break;
      }
      case "set-menu": {
        menuDispatch(action);
        break;
      }
      default:
        menuDispatch(action);
        break;
    }
  };

  return [menuProds, dispatch];
};

export default useMenu;
