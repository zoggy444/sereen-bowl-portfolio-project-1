import styled from "styled-components";
import Image from "../../../reusable-ui/Image";
import { useContext, useState, type ChangeEvent, type FormEvent } from "react";
import type { FormProductProps, MenuActionType } from "../../../../types";
import InputText from "../../../reusable-ui/InputText";
import { theme } from "../../../../theme/theme";
import Button from "../../../reusable-ui/Button";
import { FiCheckCircle } from "react-icons/fi";
import getFieldConfig from "./getFieldConfig";
import { MenuDispatchContext } from "../../../../context/MenuContext";

export default function FormProduct({
  formInputs,
  handleInputChange,
  handleInputReset,
}: FormProductProps) {
  const menuDispatch = useContext(MenuDispatchContext);
  const [addedMsg, setaddedMsg] = useState(false);

  const imageProps = {
    src: formInputs.imageSource,
    alt: "product-image",
    className: "product-image",
  };

  const onInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    handleInputChange(name, value);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleInputReset();
    setaddedMsg(true);
    setTimeout(() => {
      setaddedMsg(false);
    }, 2000);
    const action: MenuActionType = { type: "add-product", prodAdd: formInputs };
    menuDispatch(action);
  };

  const fieldConfig = getFieldConfig({
    fieldValues: formInputs,
    onChange: onInputChange,
  });

  return (
    <FormProductStyled onSubmit={onFormSubmit}>
      {formInputs.imageSource ? (
        <Image {...imageProps} />
      ) : (
        <div className="product-image">No image</div>
      )}

      <div className="fields">
        {fieldConfig.map((field) => {
          return <InputText key={field.id} {...field} />;
        })}
      </div>

      <Button
        label="Add new product to menu"
        intent="success"
        className="button-submit"
      />
      {addedMsg && (
        <div className="added-msg">
          <FiCheckCircle /> <span>Succesfuly added !</span>
        </div>
      )}
    </FormProductStyled>
  );
}

const FormProductStyled = styled.form`
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
  .button-submit {
    grid-area: 4 / 2 / 5 / 3;
  }
  .added-msg {
    grid-area: 4 / 3 / 5 / 4;
    color: ${theme.colors.success};
    display: flex;
    align-items: center;
    span {
      padding-left: ${theme.spacing.xs};
    }
  }
`;
