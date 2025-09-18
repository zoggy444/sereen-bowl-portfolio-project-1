import styled from "styled-components";
import { theme } from "../../../../theme/theme";

export default function FormFooterEdit() {
  return (
    <FormFooterEditStyled>
      <span className="info-msg">
        Click on a product in the menu to edit it&nbsp;<u>on the fly</u>
      </span>
    </FormFooterEditStyled>
  );
}

const FormFooterEditStyled = styled.div`
  grid-column: 2/4;

  color: ${theme.colors.primary};

  display: flex;
  align-items: center;
`;
