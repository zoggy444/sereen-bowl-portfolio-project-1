import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";

export default function Main() {
  const products = Array<string>(12).fill("product");

  return (
    <MainStyled>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card">
            <img />
            <div className="product-detail">
              <div className="product-name amatic-sc-regular">{p}</div>
              <div className="product-buy">
                <div>5.60 €</div>
                <ButtonPrimary label="Ajouter" className="button-buy" />
              </div>
            </div>
          </div>
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
    max-height: 330px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-sizing: border-box;
    padding-top: ${theme.spacing.xl};
    padding-left: ${theme.spacing.md};
    padding-right: ${theme.spacing.md};
    padding-bottom: ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.extraRound};
    background: #e84343;

    img {
      width: 100%;
      height: 145px;
      background-color: bisque;
    }

    .product-name {
      font-size: ${theme.fonts.P4};
      max-height: 46px;
    }

    .product-buy {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: ${theme.spacing.xxs};

      .button-buy {
        width: 95px;
        height: 38px;
        font-size: ${theme.fonts.XXS};
      }
    }
  }
`;
