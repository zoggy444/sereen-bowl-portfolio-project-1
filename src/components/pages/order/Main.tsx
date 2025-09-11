import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import Menu from "./Menu/Menu";
import Basket from "./Basket/Basket";
import { useState } from "react";
import type { ProductType } from "../../../types";
import { BasketProvider } from "./BasketProvider";

export default function Main() {
  const [menuProds, setMenuProds] = useState<ProductType[]>([...fakeMenu2]);

  return (
    <MainStyled>
      <BasketProvider>
        <Basket products={menuProds} />
        <Menu products={menuProds} />
      </BasketProvider>
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
