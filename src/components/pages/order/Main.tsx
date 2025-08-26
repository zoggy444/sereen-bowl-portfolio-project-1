import styled from "styled-components";
import { theme } from "../../../theme/theme";

export default function Main() {
  return <MainStyled></MainStyled>;
}

const MainStyled = styled.div`
  height: 85vh;
  background-color: ${theme.colors.greyExtraLight};
  box-shadow: ${theme.shadows.strong};
  border-radius: ${theme.borderRadius.none} ${theme.borderRadius.none}
    ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
`;
