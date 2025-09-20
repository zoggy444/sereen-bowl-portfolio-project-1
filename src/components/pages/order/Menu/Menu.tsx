import styled from "styled-components";
import MenuCard from "./MenuCard";
import MenuEmpty from "./MenuEmpty";
import { useContext } from "react";
import { ProductsContext } from "../../../../context/OrderMainContext";

export default function Menu() {
  const { menuProds } = useContext(ProductsContext);

  return (
    <MenuStyled>
      {menuProds.length > 0 ? (
        menuProds.map(({ id, title, imageSource, price }) => (
          <MenuCard
            key={id}
            prodID={id}
            title={title}
            src={`${imageSource}`}
            price={price}
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
