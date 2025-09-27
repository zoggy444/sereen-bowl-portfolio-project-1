import styled from "styled-components";
import Image from "./Image";
import { forwardRef, type ChangeEvent, type Ref } from "react";
import InputText from "./InputText";
import { theme } from "../../theme/theme";
import getFieldConfig from "../pages/order/AdminPanel/getFieldConfig";
import type { FormProductProps } from "../../types";

const FormProduct = forwardRef(
  (
    { formInputs, Footer, onInputChange }: FormProductProps,
    ref: Ref<HTMLInputElement | null>
  ) => {
    const imageProps = {
      src: formInputs.imageSource,
      alt: "product-image",
      className: "product-image",
    };

    const handleInputChange = (e: ChangeEvent) => {
      const { name, value } = e.target as HTMLInputElement;
      onInputChange(name, value);
    };

    const fieldConfig = getFieldConfig({
      fieldValues: formInputs,
      onChange: handleInputChange,
    });

    return (
      <FormProductStyled>
        {formInputs.imageSource ? (
          <Image {...imageProps} />
        ) : (
          <div className="product-image">No image</div>
        )}

        <div className="fields">
          {fieldConfig.map((field) => {
            if (field.id === "title")
              return <InputText key={field.id} {...field} ref={ref} />;
            return <InputText key={field.id} {...field} />;
          })}
        </div>

        <Footer className="form-footer" />
      </FormProductStyled>
    );
  }
);

export default FormProduct;

const FormProductStyled = styled.form`
  flex: 1;
  max-width: 880px;

  display: grid;
  grid-template-columns: 25% 1fr 1fr;
  grid-template-rows: repeat(4, ${theme.gridUnit * 5}px);
  column-gap: ${theme.spacing.md};
  row-gap: ${theme.spacing.xs};

  .product-image {
    grid-area: 1 / 1 / 4 / 2;

    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};

    color: ${theme.colors.greySemiDark};
  }
  .fields {
    grid-area: 1 / 2 / 4 / 4;
    display: grid;
    gap: ${theme.spacing.xs};
  }
  .form-footer {
    grid-area: 4 / 1 / 5 / 4;
  }
`;
