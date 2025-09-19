import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type {
  TabProps,
  ContentTabIDType,
  PanelConfigType,
} from "../../../../types";
import Tab from "../../../reusable-ui/Tab";
import {
  FormProdContext,
  FormProdHandlersContext,
} from "../../../../context/AdminPanelContext";
import { useContext } from "react";
import { getTabsConfig } from "./getPanelConfig";

export default function TabContainer() {
  const { isFolded, selectedTabID } = useContext(FormProdContext);
  const { handleTabClick } = useContext(FormProdHandlersContext);

  const { foldTab, contentTabs }: PanelConfigType = getTabsConfig({
    isFolded,
    selectedTabID,
    onTabClick: handleTabClick,
  });

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
