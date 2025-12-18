import { useEffect, useState } from "react";
import { authenticateUser, updateMenu } from "../api/user";
import type { MenuActionType, ProductType, MenuHookType } from "../types";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepCopy } from "../utils/collection";

const useMenu = (userName: string): MenuHookType => {
  const [menuProds, setMenuProds] = useState<ProductType[]>(
    deepCopy(fakeMenu.GHOST)
  );
  const [lastAction, setLastAction] = useState("");

  useEffect(() => {
    if (menuProds.length > 0 && menuProds[0].id === "ghost-product-id") {
      authenticateUser(userName).then((menu) => {
        if (menu) {
          setMenuProds(menu);
        }
      });
    }
  }, [menuProds, userName]);

  useEffect(() => {
    if (lastAction === "updated-notify") {
      const timer = setTimeout(() => setLastAction(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [lastAction]);

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
          setMenuProds(newMenu);
          setLastAction("created");
        } else {
          setLastAction("failed");
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
          setMenuProds(newMenu);
          setLastAction("updated");
        } else {
          setLastAction("failed");
        }
        break;
      }
      case "notify-edit": {
        if (lastAction === "updated") {
          setLastAction("updated-notify");
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
          setMenuProds(newMenu);
          setLastAction("deleted");
        } else {
          setLastAction("failed");
        }
        break;
      }
      case "regen-menu": {
        if (!userName) return;
        const newMenu = fakeMenu.MEDIUM;
        const regened = await updateMenu(userName, newMenu);
        if (regened) {
          setMenuProds(newMenu);
          setLastAction("regenerated");
        } else {
          setLastAction("failed");
        }
        break;
      }
      case "set-menu": {
        setMenuProds(action.menuProds || menuProds);
        break;
      }
    }
  };

  return [menuProds, lastAction, dispatch];
};

export default useMenu;
