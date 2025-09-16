import styled from "styled-components";
import PanelContent from "./PanelContent";
import { useContext, useState } from "react";
import TabContainer from "./TabContainer";
import type {
  ContentTabIDType,
  PanelConfigType,
  PanelFormType,
  TabIDType,
} from "../../../../types";
import isAdminModeContext from "../../../../context/IsAdminModeContext";
import getTabsConfig from "./getPanelConfig";

const defaultFormInputs: PanelFormType = {
  title: "",
  imageSource: "",
  price: "",
};

export default function AdminPanel() {
  const [isFolded, setIsFolded] = useState(false);
  const [formInputs, setFormInputs] = useState({ ...defaultFormInputs });
  const [selectedTab, setSelectedTab] =
    useState<ContentTabIDType>("add-product");
  const { isAdminMode } = useContext(isAdminModeContext);

  const toggleFolded = (force?: boolean) => {
    const newIsChecked = force !== undefined ? force : !isFolded;
    setIsFolded(newIsChecked);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleInputReset = () => {
    setFormInputs({ ...defaultFormInputs });
  };

  const handleTabClick = (id: TabIDType) => {
    if (id) {
      if (id === "fold") {
        toggleFolded();
      } else {
        setSelectedTab(id);
        if (isFolded) toggleFolded(false);
      }
    }
  };

  const { foldTab, contentTabs, panelContent }: PanelConfigType = getTabsConfig(
    {
      isFolded,
      selectedTab,
      handleTabClick,
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
