import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import Menu from "./Menu/Menu";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useState } from "react";
import type { PanelFormType, ProductType } from "../../../types";

export default function Main() {
  const [products, setProducts] = useState(fakeMenu["MEDIUM"]);

  const nextId = products.length + 1;

  const handleAddProduct = (newVals: PanelFormType) => {
    if (!newVals.imageSource) newVals.imageSource = "/images/coming-soon.png";
    let priceNumber = parseFloat(newVals.price.replace(",", "."));
    if (isNaN(priceNumber)) priceNumber = 0;

    const newProduct: ProductType = {
      id: nextId,
      title: newVals.title,
      imageSource: newVals.imageSource,
      price: priceNumber,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    };
    setProducts([newProduct, ...products]);
  };

  const handleDeleteProduct = (idToDelete: number) => {
    const updatedProducts = products.filter(
      (product) => product.id !== idToDelete
    );
    setProducts(updatedProducts);
  };

  return (
    <MainStyled>
      {/* <div className="basket"/> */}
      <Menu products={products} onDeleteCard={handleDeleteProduct} />
      <AdminPanel onAddProduct={handleAddProduct} />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  min-height: 83vh;
  max-height: calc(98vh - 100px);
  overflow-y: scroll;
  scrollbar-width: none;

  background-color: ${theme.colors.greyExtraLight};
  box-shadow: ${theme.shadows.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
