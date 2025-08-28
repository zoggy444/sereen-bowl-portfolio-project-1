import styled from "styled-components";
import { theme } from "../../../theme/theme";

export default function Main() {
  const products = Array<string>(12).fill("product");

  return (
    <MainStyled>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card">{p}</div>
        ))}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  padding: 50px;
  height: calc(83vh - 100px);
  overflow-y: scroll;
  scrollbar-width: none;

  background-color: ${theme.colors.greyExtraLight};
  box-shadow: ${theme.shadows.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(330px, 1fr));
    gap: 60px;
  }

  .product-card {
    grid-area: span 1 / span 1;
    justify-self: center;
    width: 240px;
    height: 330px;
    background: #e84343;
  }
`;
