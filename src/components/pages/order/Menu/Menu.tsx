import styled from "styled-components";
import MenuCard from "./MenuCard";
import MenuEmpty from "./MenuEmpty";
import { useContext } from "react";
import { ProductsContext } from "../../../../context/OrderMainContext";
import IsAdminModeContext from "../../../../context/IsAdminModeContext";

export default function Menu() {
  const { menuProds, handleProdSelect } = useContext(ProductsContext);
  const isAdminMode = useContext(IsAdminModeContext).isAdminMode;

  const handleClick = () => {
    return isAdminMode && handleProdSelect(-1);
  };

  return (
    <MenuStyled onClick={handleClick}>
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
