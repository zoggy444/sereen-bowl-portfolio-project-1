import styled from "styled-components";
import PanelContent from "./PanelContent";
import { forwardRef, useContext, type Ref } from "react";
import TabContainer from "./TabContainer";
import type { AdminPanelProps, PanelConfigType } from "../../../../types";
import isAdminModeContext from "../../../../context/IsAdminModeContext";
import { getTabsConfig } from "./getPanelConfig";
import getPanelConfig from "./getPanelConfig";

const AdminPanel = forwardRef(
  (
    {
      isFolded,
      selectedTabID,
      addInputs,
      editInputs,
      onTabClick,
      onAddChange,
      onAddReset,
      onEditChange,
    }: AdminPanelProps,
    ref: Ref<HTMLInputElement | null>
  ) => {
    const { isAdminMode } = useContext(isAdminModeContext);

    const { foldTab, contentTabs }: PanelConfigType = getTabsConfig({
      isFolded,
      selectedTabID,
      onTabClick,
    });

    const contentProps = getPanelConfig({
      selectedTabID,
      addInputs,
      editInputs,
      onAddChange,
      onEditChange,
      onAddReset,
    });

    if (isAdminMode) {
      return (
        <AdminPanelStyled>
          <TabContainer foldTab={foldTab} contentTabs={contentTabs} />
          <PanelContent
            isFolded={isFolded}
            selectedTabID={selectedTabID}
            {...contentProps}
            ref={ref}
          />
        </AdminPanelStyled>
      );
    }
    return;
  }
);

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
