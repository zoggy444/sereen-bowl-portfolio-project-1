import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import BasketCard from "./BasketCard";
import { useContext } from "react";
import { ProductsContext } from "../../../../context/OrderMainContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function BasketBody() {
  const { menuProds, basketProds } = useContext(ProductsContext);

  return (
    <BasketBodyStyled>
      {basketProds.length > 0 ? (
        <TransitionGroup component={null}>
          {basketProds.map((el) => {
            const p = menuProds.filter((p) => p.id === el.id)[0];
            return (
              <CSSTransition
                key={el.id}
                classNames="iiiiiiii"
                timeout={{ enter: 2000, exit: 2000 }}
              >
                  <BasketCard key={el.id} product={p} qty={el.qty} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      ) : (
        <div className="basket-empty amatic-sc-regular">
          Your basket is empty
        </div>
      )}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  min-width: 300px;
  color: ${theme.colors.greyBlue};
  background-color: ${theme.colors.background_white};
  padding: ${theme.spacing.sm};
  overflow-y: scroll;
  scrollbar-width: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: ${theme.gridUnit * 2.5}px;

  .basket-cart-trans-enter {
    opacity: 0;
  }
  .basket-card-trans-enter-active {
    transition: 200ms;
    opacity: 1;
  }
  .basket-cart-trans-enter-done {
    background-color: aliceblue;
  }

  .basket-cart-trans-exit {
    opacity: 1;
  }
  .basket-card-trans-exit-active {
    transition: 200ms;
    opacity: 0;
  }
  .basket-cart-trans-exit-done {
    background-color: burlywood;
  }

  .basket-empty {
    flex: 1;
    font-size: ${theme.fonts.size.P4};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
