import styled from "styled-components";
import { theme } from "../../../theme/theme";
import "../../../index.css";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";

export default function Main() {
  const products = fakeMenu2;

  return (
    <MainStyled>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-image">
              <img src={`/src${p.imageSource}`} alt="product-image" />
            </div>
            <div className="product-detail">
              <div className="product-name amatic-sc-bold">{p.title}</div>
              <div className="product-buy">
                <div className="product-price">{p.price}</div>
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
    grid-row-gap: 60px;
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
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.card};

    .product-image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 145px;
      img {
        max-width: 100%;
        max-height: 100%;
        aspect-ratio: 1;
      }
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

      .product-price {
        color: ${theme.colors.primary};
      }

      .button-buy {
        width: 95px;
        height: 38px;
        font-size: ${theme.fonts.XXS};
      }
    }
  }
`;
