import styled from "styled-components";
import PanelContent from "./PanelContent";
import { forwardRef, useContext, type Ref } from "react";
import TabContainer from "./TabContainer";
import type { PanelConfigType } from "../../../../types";
import IsAdminModeContext from "../../../../context/IsAdminModeContext";
import { getTabsConfig } from "./getPanelConfig";
import {
  FormProdContext,
  FormProdHandlersContext,
} from "../../../../context/AdminPanelContext";

const AdminPanel = forwardRef((props, ref: Ref<HTMLInputElement | null>) => {
  const { isAdminMode } = useContext(IsAdminModeContext);
  const { isFolded, selectedTabID } = useContext(FormProdContext);
  const { handleTabClick } = useContext(FormProdHandlersContext);

  const { foldTab, contentTabs }: PanelConfigType = getTabsConfig({
    isFolded,
    selectedTabID,
    onTabClick: handleTabClick,
  });

  if (isAdminMode) {
    return (
      <AdminPanelStyled>
        <TabContainer foldTab={foldTab} contentTabs={contentTabs} />
        <PanelContent
          isFolded={isFolded}
          selectedTabID={selectedTabID}
          ref={ref}
        />
      </AdminPanelStyled>
    );
  }
  return;
});

export default AdminPanel;

const AdminPanelStyled = styled.div`
  position: absolute;
  bottom: calc(1vh - 1px);

  max-height: 264px;
  width: 95vw;
  max-width: 1400px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
