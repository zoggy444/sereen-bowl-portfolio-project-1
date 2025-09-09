import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type { BasketCardRightProps } from "../../../../types";

export default function BasketCardRight({ qty }: BasketCardRightProps) {
  return <BasketCardRightStyled>x {qty}</BasketCardRightStyled>;
}

const BasketCardRightStyled = styled.div`
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.P0};
`;
