import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import BasketCard from "./BasketCard";
import { useContext, useRef } from "react";
import { ProductsContext } from "../../../../context/OrderMainContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function BasketBody() {
  const { menuProds, basketProds } = useContext(ProductsContext);
  const basketTransRef = useRef<HTMLDivElement | null>(null);

  return (
    <BasketBodyStyled>
      {basketProds.length > 0 ? (
        <TransitionGroup component={null}>
          {basketProds.map((el) => {
            const p = menuProds.filter((p) => p.id === el.id)[0];
            return (
              <CSSTransition
                key={el.id}
                nodeRef={basketTransRef}
                appear={true}
                exit={true}
                classNames="basket-card-trans"
                timeout={{ enter: 2000, exit: 2000 }}
              >
                <div ref={basketTransRef}>
                  <BasketCard key={el.id} product={p} qty={el.qty} />
                </div>
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

  .basket-card-trans-appear {
    opacity: 0;
  }
  .basket-card-trans-appear-active {
    transition: 200ms;
    opacity: 0.5;
  }

  .basket-card-trans-enter {
    opacity: 0;
  }
  .basket-card-trans-enter-active {
    transition: 200ms;
    opacity: 0.5;
  }
  .basket-card-trans-enter-done {
    background-color: aliceblue;
    opacity: 1;
  }

  .basket-empty {
    flex: 1;
    font-size: ${theme.fonts.size.P4};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
