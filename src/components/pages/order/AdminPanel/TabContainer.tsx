import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type {
  TabProps,
  TabContainerProps,
  ContentTabIDType,
} from "../../../../types";
import Tab from "../../../reusable-ui/Tab";
import { FormProdHandlersContext } from "../../../../context/AdminPanelContext";
import { useContext } from "react";

export default function TabContainer({
  foldTab,
  contentTabs,
}: TabContainerProps) {
  const { handleTabClick } = useContext(FormProdHandlersContext);
  return (
    <TabContainerStyled>
      <>
        <Tab {...foldTab} />
        {contentTabs.map(({ ...props }: TabProps<ContentTabIDType>) => (
          <Tab key={props.id} {...props} onClick={handleTabClick} />
        ))}
      </>
    </TabContainerStyled>
  );
}

const TabContainerStyled = styled.div`
  height: ${theme.gridUnit * 5}px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1px;
  padding-left: ${theme.gridUnit * 8}px;

  font-size: ${theme.fonts.size.P0};
`;
