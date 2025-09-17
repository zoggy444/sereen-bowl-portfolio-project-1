import styled from "styled-components";
import PanelContent from "./PanelContent";
import { useContext, useState } from "react";
import TabContainer from "./TabContainer";
import type { AdminPanelProps, PanelConfigType } from "../../../../types";
import isAdminModeContext from "../../../../context/IsAdminModeContext";
import getTabsConfig from "./getPanelConfig";
import { defaultFormInputs } from "./getFieldConfig";

export default function AdminPanel({
  isFolded,
  selectedTab,
  editInputs,
  onEditChange,
  onTabClick,
}: AdminPanelProps) {
  const [formInputs, setFormInputs] = useState({ ...defaultFormInputs });
  const { isAdminMode } = useContext(isAdminModeContext);

  const handleInputChange = (name: string, value: string) => {
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleInputReset = () => {
    setFormInputs({ ...defaultFormInputs });
  };

  const { foldTab, contentTabs, panelContent }: PanelConfigType = getTabsConfig(
    {
      isFolded,
      selectedTab,
      onTabClick,
    }
  );

  if (isAdminMode) {
    return (
      <AdminPanelStyled>
        <TabContainer foldTab={foldTab} contentTabs={contentTabs} />
        <PanelContent
          isFolded={isFolded}
          content={panelContent}
          formInputs={formInputs}
          handleInputChange={handleInputChange}
          handleInputReset={handleInputReset}
          editInputs={editInputs}
          onEditChange={onEditChange}
        />
      </AdminPanelStyled>
    );
  }
  return;
}

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
