import styled from "styled-components";
import MenuCard from "./MenuCard";
import MenuEmpty from "./MenuEmpty";
import { useContext, useState } from "react";
import {
  MenuProdsContext,
  ProdSelectedContext,
} from "../../../../context/MenuContext";

export default function Menu() {
  const products = useContext(MenuProdsContext);
  const { selectedID, handleSelect } = useContext(ProdSelectedContext);
  const [prodHoveredID, setProdHoveredID] = useState(-1);

  const handleCardMouseEnter = (id: number) => {
    setProdHoveredID(id);
  };

  const handleCardMouseLeave = () => {
    setProdHoveredID(-1);
  };

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
            isSelected={id === selectedID}
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
            onSelect={handleSelect}
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
