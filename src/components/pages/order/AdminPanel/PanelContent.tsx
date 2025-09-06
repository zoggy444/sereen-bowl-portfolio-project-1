import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type { PanelContentProps } from "../../../../types";
import ButtonPrimary from "../../../reusable-ui/ButtonPrimary";
import InputText from "../../../reusable-ui/InputText";
import { MdOutlineEuro } from "react-icons/md";
import type { ChangeEvent } from "react";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";

export default function PanelContent({ isFolded, content }: PanelContentProps) {
  const onInputChange = (e: ChangeEvent) => {};

  if (!isFolded)
    return (
      <PanelContentStyled>
        <div className="form">
          <div className="image">No image</div>
          <div className="fields">
            <InputTextReStyled
              Icon={FaHamburger}
              value=""
              placeholder="Product name"
              onChange={onInputChange}
            />
            <InputTextReStyled
              Icon={BsFillCameraFill}
              value=""
              placeholder="URL link of an image"
              onChange={onInputChange}
            />
            <InputTextReStyled
              Icon={MdOutlineEuro}
              value=""
              placeholder="Price"
              onChange={onInputChange}
            />
          </div>
          <ButtonPrimary
            label="Add new product to menu"
            className="button-submit"
          />
        </div>
      </PanelContentStyled>
    );
  return <PanelFoldedStyled />;
}

const PanelContentStyled = styled.div`
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

    .image {
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
    background-color: ${theme.colors.success};
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
