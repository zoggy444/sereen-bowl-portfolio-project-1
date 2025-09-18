import styled from "styled-components";

export default function FormFooterEdit({ className }) {
  return (
    <FormFooterEditStyled className={className}>
      Click on a product in the menu to edit it&nbsp;<u>on the fly</u>
    </FormFooterEditStyled>
  );
}

const FormFooterEditStyled = styled.div``;
