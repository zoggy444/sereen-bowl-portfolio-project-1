import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import type {
  TabProps,
  ContentTabIDType,
  PanelConfigType,
} from "../../../../types";
import Tab from "../../../reusable-ui/Tab";
import { useContext } from "react";
import { getTabsConfig } from "./getPanelConfig";
import { AdminPanelContext } from "../../../../context/OrderMainContext";

export default function TabContainer() {
  const { isPanelFolded, selectedTabID, handleTabClick } =
    useContext(AdminPanelContext);

  const { foldTab, contentTabs }: PanelConfigType = getTabsConfig({
    isFolded: isPanelFolded,
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
