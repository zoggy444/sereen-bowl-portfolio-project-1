import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type { PanelContentProps } from "../../../../types";

export default function PanelContent({ isFolded, content }: PanelContentProps) {
  if (!isFolded)
    return (
      <PanelContentStyled>
        <div className="form">
          <div className="image"></div>
          <div className="fields">
            <div className="field"></div>
            <div className="field"></div>
            <div className="field"></div>
          </div>
          <div className="submit"></div>
        </div>
      </PanelContentStyled>
    );
  return <PanelFoldedStyled />;
}

const PanelContentStyled = styled.div`
  /* flex: 1; */
  /* height: calc(264px - ${theme.gridUnit * 5}px) */

  border-top: 1px solid ${theme.colors.greyLight};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  padding-left: ${theme.spacing.md};
  padding-right: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.md};
  padding-top: ${theme.spacing.md};
  background-color: ${theme.colors.white};

  font-size: ${theme.fonts.size.P0};

  /* display: flex; */
  .form {
    /* flex: 1; */
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
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing.xs};
      .field {
        flex: 1;
        background-color: coral;
      }
    }
    .submit {
      grid-area: 4 / 2 / 5 / 3;
      background-color: yellow;
    }
  }
`;

const PanelFoldedStyled = styled.div`
  display: none;
`;
