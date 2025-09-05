import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type { PanelContentProps } from "../../../../types";

export default function PanelContent({ isFolded, content }: PanelContentProps) {
  if (!isFolded) return <PanelContentStyled>{content}</PanelContentStyled>;
  return <PanelFoldedStyled />;
}

const PanelContentStyled = styled.div`
  flex: 1;

  border-top: 1px solid ${theme.colors.greyLight};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  padding-left: ${theme.spacing.md};
  padding-right: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.md};
  padding-top: ${theme.spacing.md};
  background-color: ${theme.colors.white};

  font-size: ${theme.fonts.size.P0};
`;

const PanelFoldedStyled = styled.div`
  display: none;
`;
