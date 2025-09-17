import styled from "styled-components";
import MenuCard from "./MenuCard";
import MenuEmpty from "./MenuEmpty";
import type { MenuProps } from "../../../../types";

export default function Menu({
  products,
  prodHoveredID,
  onCardMouseEnter,
  onCardMouseLeave,
}: MenuProps) {
  return (
    <MenuStyled>
      {products.length > 0 ? (
        products.map(({ id, title, imageSource, price }) => (
          <MenuCard
            key={id}
            prodID={id}
            title={title}
            src={`${imageSource}`}
            price={price}
            isHovered={id === prodHoveredID}
            onMouseEnter={onCardMouseEnter}
            onMouseLeave={onCardMouseLeave}
          />
        ))
      ) : (
        <MenuEmpty />
      )}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(330px, 1fr));
  grid-row-gap: 60px;
`;
