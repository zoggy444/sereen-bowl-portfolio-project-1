import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import Menu from "./Menu/Menu";
import Basket from "./Basket/Basket";
import { useState } from "react";
import type { BasketProdType, ProductType } from "../../../types";

const deafaultBasketProds = [
  { id: 1, n: 3 },
  { id: 4, n: 2 },
];

export default function Main() {
  const [menuProds, setMenuProds] = useState<ProductType[]>([...fakeMenu2]);
  const [basketProds, setBasketProds] = useState(deafaultBasketProds);

  const handleBasketAdd = (id: number) => {
    const newBasket = [...basketProds];
    const existingIndex = newBasket.findIndex((el) => el.id === id);
    if (existingIndex !== -1) {
      // Product already in basket
      const updatedProd: BasketProdType = newBasket[existingIndex];
      updatedProd.n++;
      console.log(newBasket);
      console.log(
        newBasket.map((el, index) => {
          if (index === existingIndex) return updatedProd;
          return el;
        })
      );
      setBasketProds(
        newBasket.map((el, index) => {
          if (index === existingIndex) return updatedProd;
          return el;
        })
      );
    } else {
      const newProd = { id: id, n: 1 };
      setBasketProds([newProd, ...newBasket]);
    }
  };

  const handleBasketDel = (id: number) => {
    const newBasket = [...basketProds];
    setBasketProds(newBasket.filter((el) => el.id !== id));
  };

  return (
    <MainStyled>
      <Basket
        products={menuProds}
        basketProds={basketProds}
        onCardClick={handleBasketDel}
      />
      <Menu products={menuProds} onAdd={handleBasketAdd} />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: calc(98vh - 100px);
  overflow-y: scroll;
  scrollbar-width: none;

  background-color: ${theme.colors.greyExtraLight};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  display: grid;
  grid-template-columns: 1fr 3fr;
`;
