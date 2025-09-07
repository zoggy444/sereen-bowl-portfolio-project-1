import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import Menu from "./Menu/Menu";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext, useState } from "react";
import type { PanelFormType, ProductType } from "../../../types";
import IsAdminModeContext from "../../../context/IsAdminModeContext";
import Button from "../../reusable-ui/Button";

export default function Main() {
  const [products, setProducts] = useState(fakeMenu["SMALL"]);
  const isAdminMode = useContext(IsAdminModeContext).isAdminMode;

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

  const handleRegenMenu = () => {
    setProducts(fakeMenu["SMALL"]);
  };

  return (
    <MainStyled>
      {/* <div className="basket"/> */}
      {products.length > 0 ? (
        <Menu products={products} onDeleteCard={handleDeleteProduct} />
      ) : (
        <div className="no-product">
          {isAdminMode ? (
            <>
              <h1 className="amatic-sc-bold">Empty menu ?</h1>
              <h2 className="amatic-sc-regular">
                Click below to reinitialize it
              </h2>
              <ButtonReStyled
                label="Generate new products"
                intent="primary"
                onClick={handleRegenMenu}
              />
            </>
          ) : (
            <>
              <h1 className="amatic-sc-bold">Victims of our success ! :D</h1>
              <h2 className="amatic-sc-regular">
                New recipes are being worked on.
              </h2>
              <h2 className="amatic-sc-regular">See you very soon !</h2>
            </>
          )}
        </div>
      )}
      <AdminPanel onAddProduct={handleAddProduct} />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: calc(98vh - 100px);
  overflow-y: scroll;
  scrollbar-width: none;

  background-color: ${theme.colors.greyExtraLight};
  box-shadow: ${theme.shadows.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .no-product {
    box-sizing: border-box;
    height: calc(98vh - 100px);
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: ${theme.fonts.size.P4};
      margin-block-start: 0;
      margin-block-end: ${theme.spacing.md};
    }
    h2 {
      font-size: ${theme.fonts.size.P4};
      margin-block-start: 0px;
      margin-block-end: ${theme.spacing.md};
    }
  }
`;

const ButtonReStyled = styled(Button)`
  font-size: ${theme.fonts.size.XS};
  padding: ${theme.spacing.md};
  margin-top: ${theme.spacing.sm};
`;
