import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import BasketHeader from "./BasketHeader";
import BasketBody from "./BasketBody";
import BasketFooter from "./BasketFooter";

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  position: sticky;
  top: 0px;
  grid-area: span 1 / span 1;
  height: calc(98vh - 100px);
  display: grid;
  grid-template-rows: 70px 1fr 70px;
  font-size: ${theme.fonts.size.P4};
`;
