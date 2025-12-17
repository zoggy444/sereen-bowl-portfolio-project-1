import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type { FormFooterProps } from "../../../../types";
import { useContext } from "react";
import { ProductsContext } from "../../../../context/OrderMainContext";
import { BsCloudCheck } from "react-icons/bs";

export default function FormFooterEdit({ className }: FormFooterProps) {
  const { lastMenuAction } = useContext(ProductsContext);
  return (
    <FormFooterEditStyled className={className}>
      {lastMenuAction === "updated-notify" ? (
        <span className="info-msg success-msg">
          <BsCloudCheck /> &nbsp; Product succesfuly edited !
        </span>
      ) : (
        <span className="info-msg">
          Click on a product in the menu to edit it&nbsp;<u>on the fly</u>
        </span>
      )}
    </FormFooterEditStyled>
  );
}

const FormFooterEditStyled = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr 1fr;
  column-gap: ${theme.spacing.md};

  span {
    grid-column: 2 / 4;

    color: ${theme.colors.primary};

    display: flex;
    align-items: center;
  }
  .success-msg {
    color: ${theme.colors.success};
  }
`;
