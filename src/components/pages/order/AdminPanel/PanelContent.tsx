import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type { PanelContentProps } from "../../../../types";
import ButtonPrimary from "../../../reusable-ui/ButtonPrimary";
import InputText from "../../../reusable-ui/InputText";
import { MdOutlineEuro } from "react-icons/md";
import type { ChangeEvent } from "react";

export default function PanelContent({ isFolded, content }: PanelContentProps) {
  const onInputChange = (e: ChangeEvent) => {};

  if (!isFolded)
    return (
      <PanelContentStyled>
        <div className="form">
          <div className="image"></div>
          <div className="fields">
            <StyledInput
              Icon={MdOutlineEuro}
              value=""
              placeholder="Price"
              className="field"
              onChange={onInputChange}
            />
            <InputText
              Icon={MdOutlineEuro}
              value=""
              placeholder="Price"
              className="field"
              onChange={onInputChange}
            />
            <InputText
              Icon={MdOutlineEuro}
              value=""
              placeholder="Price"
              className="field"
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
    border: 1px solid blue;

    display: grid;
    grid-template-columns: 25% 1fr 1fr;
    grid-template-rows: repeat(4, ${theme.gridUnit * 5}px);
    column-gap: ${theme.spacing.md};
    row-gap: ${theme.spacing.xs};

    .image {
      grid-area: 1 / 1 / 4 / 2;
      background-color: aqua;
    }
    .fields {
      grid-area: 1 / 2 / 4 / 4;
      background-color: beige;
      display: grid;
      gap: ${theme.spacing.xs};
      .field {
        /* flex: 1; */
      }
    }
    .button-submit {
      grid-area: 4 / 2 / 5 / 3;
      background-color: ${theme.colors.success};
    }
  }
`;

const PanelFoldedStyled = styled.div`
  display: none;
`;

const StyledInput = styled(InputText)`
  &&& {
    background-color: blueviolet;
  }
  background-color: brown;
`;
