import styled from "styled-components";
import MenuCard from "./MenuCard";
import type { MenuProps } from "../../../types";

export default function Menu({ products }: MenuProps) {
  return (
    <MenuStyled>
      {products.map((p) => (
        <MenuCard product={p} />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(330px, 1fr));
  grid-row-gap: 60px;
`;
