import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type { PanelContentProps } from "../../../../types";
import Button from "../../../reusable-ui/Button";
import InputText from "../../../reusable-ui/InputText";
import { MdOutlineEuro } from "react-icons/md";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import Image from "../../../reusable-ui/Image";
import { FiCheckCircle } from "react-icons/fi";

const defaultFormInputs = {
  productName: "",
  imageUrl: "",
  price: "",
};

export default function PanelContent({ isFolded, content }: PanelContentProps) {
  const [formInputs, setFormInputs] = useState(defaultFormInputs);
  const [addedMsg, setaddedMsg] = useState(false);

  useEffect(() => {
    if (addedMsg)
      setTimeout(() => {
        setaddedMsg(false);
      }, 2000);
  }, [addedMsg]);

  const imageProps = {
    src: formInputs.imageUrl,
    alt: "product-image",
    className: "product-image",
  };

  const onInputChange = (e: ChangeEvent) => {
    const inputName = (e.target as HTMLInputElement).name;
    const inputValue = (e.target as HTMLInputElement).value;
    setFormInputs({ ...formInputs, [inputName]: inputValue });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormInputs(defaultFormInputs);
    setaddedMsg(true);
    console.log("Form submitted", formInputs);
  };

  if (!isFolded) {
    if (content === "Add a product") {
      return (
        <PanelContentStyled>
          <form className="form" onSubmit={onSubmit}>
            {formInputs.imageUrl ? (
              <Image {...imageProps} />
            ) : (
              <div className="product-image">No image</div>
            )}

            <div className="fields">
              <InputTextReStyled
                name="productName"
                Icon={FaHamburger}
                value={formInputs.productName}
                placeholder="Product name"
                onChange={onInputChange}
              />
              <InputTextReStyled
                name="imageUrl"
                Icon={BsFillCameraFill}
                value={formInputs.imageUrl}
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
          </form>
        </PanelContentStyled>
      );
    }
    return <PanelContentStyled>{content}</PanelContentStyled>;
  }
  return <PanelFoldedStyled />;
}

const PanelContentStyled = styled.div`
  min-height: ${theme.gridUnit * 25}px;
  border-top: 1px solid ${theme.colors.greyLight};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.white};

  font-size: ${theme.fonts.size.P0};

  .form {
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

const PanelFoldedStyled = styled.div`
  display: none;
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
