import { useReducer, type ReactNode } from "react";
import { BasketDispatchContext, BasketProdsContext, defaultBasketProds } from "../../../context/BasketContext";
import type { BasketActionType, BasketProdType } from "../../../types";

export function BasketProvider({ children }: { children: ReactNode }) {
  const [basketProds, basketDispatch] = useReducer(basketReducer, [
    ...defaultBasketProds,
  ]);
  return (
    <BasketProdsContext.Provider value={basketProds}>
      <BasketDispatchContext.Provider value={basketDispatch}>
        {children}
      </BasketDispatchContext.Provider>
    </BasketProdsContext.Provider>
  );
}

const basketReducer = (
  basketProds: BasketProdType[],
  action: BasketActionType
) => {
  switch (action.type) {
    case "add-product": {
      const newBasket = [...basketProds];
      const existingIndex = newBasket.findIndex((el) => el.id === action.id);
      if (existingIndex !== -1) {
        // Product already in basket
        const updatedProd: BasketProdType = { ...newBasket[existingIndex] };
        updatedProd.qty++;
        return newBasket.map((el, index) => {
          if (index === existingIndex) return updatedProd;
          return el;
        });
      } else {
        const newProd = { id: action.id, qty: 1 };
        return [newProd, ...newBasket];
      }
    }
    case "delete-product": {
      const newBasket = [...basketProds];
      return newBasket.filter((el) => el.id !== action.id);
    }
    default:
      return basketProds;
  }
};
