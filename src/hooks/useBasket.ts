import { useState } from "react";
import type { BasketActionType, BasketProdType } from "../types";
import { deepCopy } from "../utils/collection";

type BasketHookType = [
  BasketProdType[],
  (action: BasketActionType) => Promise<void>
];

const useBasket = (userName: string): BasketHookType => {
  const [basketProds, setBasketProds] = useState<BasketProdType[]>(
    localStorage.getItem(`basket-${userName}`)
      ? JSON.parse(localStorage.getItem(`basket-${userName}`) || "[]")
      : []
  );

  const dispatch = async (action: BasketActionType) => {
    switch (action.type) {
      case "add-product": {
        let newBasket = deepCopy(basketProds) as BasketProdType[];
        const existingIndex = newBasket.findIndex((el) => el.id === action.id);
        if (existingIndex !== -1) {
          // Product already in basket
          const updatedProd: BasketProdType = { ...newBasket[existingIndex] };
          updatedProd.qty++;
          newBasket = newBasket.map((el, index) => {
            if (index === existingIndex) return updatedProd;
            return el;
          });
          setBasketProds(newBasket);
        } else {
          const newProd = { id: action.id, qty: 1 };
          newBasket = [newProd, ...newBasket];
          setBasketProds(newBasket);
        }
        localStorage.setItem(`basket-${userName}`, JSON.stringify(newBasket));
        break;
      }
      case "delete-product": {
        let newBasket = deepCopy(basketProds) as BasketProdType[];
        newBasket = newBasket.filter((el) => el.id !== action.id);
        setBasketProds(newBasket);
        localStorage.setItem(`basket-${userName}`, JSON.stringify(newBasket));
      }
    }
  };

  return [basketProds, dispatch];
};

export default useBasket;
