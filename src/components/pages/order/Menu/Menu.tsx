import styled from "styled-components";
import MenuCard from "./MenuCard";
import type { MenuProps } from "../../../../types";
import { theme } from "../../../../theme/theme";

export default function Menu({ products, onAdd }: MenuProps) {
  return (
    <MenuStyled>
      {products.map(({ id, title, imageSource, price }) => (
        <MenuCard
          key={id}
          id={id}
          title={title}
          src={`${imageSource}`}
          price={price}
          onAdd={onAdd}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  box-shadow: ${theme.shadows.strong};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(330px, 1fr));
  grid-row-gap: 60px;
`;
