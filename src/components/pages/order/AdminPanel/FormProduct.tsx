import styled from "styled-components";
import Image from "../../../reusable-ui/Image";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { FormProductProps, PanelFormType } from "../../../../types";
import InputText from "../../../reusable-ui/InputText";
import { theme } from "../../../../theme/theme";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import Button from "../../../reusable-ui/Button";
import { FiCheckCircle } from "react-icons/fi";

const defaultFormInputs: PanelFormType = {
  title: "",
  imageSource: "",
  price: "",
};

export default function FormProduct({ onSubmit }: FormProductProps) {
  const [formInputs, setFormInputs] = useState({ ...defaultFormInputs });
  const [addedMsg, setaddedMsg] = useState(false);

  useEffect(() => {
    if (addedMsg)
      setTimeout(() => {
        setaddedMsg(false);
      }, 2000);
  }, [addedMsg]);

  const imageProps = {
    src: formInputs.imageSource,
    alt: "product-image",
    className: "product-image",
  };

  const onInputChange = (e: ChangeEvent) => {
    const inputName = (e.target as HTMLInputElement).name;
    const inputValue = (e.target as HTMLInputElement).value;
    setFormInputs({ ...formInputs, [inputName]: inputValue });
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormInputs({ ...defaultFormInputs });
    setaddedMsg(true);
    onSubmit(formInputs);
  };

  return (
    <FormProductStyled onSubmit={onFormSubmit}>
      {formInputs.imageSource ? (
        <Image {...imageProps} />
      ) : (
        <div className="product-image">No image</div>
      )}

      <div className="fields">
        <InputTextReStyled
          name="title"
          Icon={FaHamburger}
          value={formInputs.title}
          placeholder="Product name"
          onChange={onInputChange}
        />
        <InputTextReStyled
          name="imageSource"
          Icon={BsFillCameraFill}
          value={formInputs.imageSource}
          placeholder="URL link of an image"
          onChange={onInputChange}
        />
        <InputTextReStyled
          name="price"
          Icon={MdOutlineEuro}
          value={formInputs.price}
          placeholder="Price"
          onChange={onInputChange}
        />
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

const InputTextReStyled = styled(InputText)`
  &&& {
    padding: 0px;
    padding-left: ${theme.spacing.lg};
    margin-bottom: 0px;
    background-color: ${theme.colors.background_white};
    input {
      background-color: ${theme.colors.greyExtraLight};
    }
  }
  background-color: brown;
`;
