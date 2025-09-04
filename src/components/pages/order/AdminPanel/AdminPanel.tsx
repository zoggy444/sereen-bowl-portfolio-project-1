import styled from "styled-components";
import PanelContent from "./PanelContent";
import { useContext, useState } from "react";
import TabContainer from "./TabContainer";
import type {
  ContentTabIDType,
  TabConfigType,
  TabIDType,
} from "../../../../types";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import isAdminModeContext from "../../../../context/IsAdminModeContext";

export default function AdminPanel() {
  const [isFolded, setIsFolded] = useState(false);
  const [selectedTab, setSelectedTab] =
    useState<ContentTabIDType>("add-product");
  const { isAdminMode } = useContext(isAdminModeContext);

  const toggleFolded = (force?: boolean) => {
    const newIsChecked = force !== undefined ? force : !isFolded;
    setIsFolded(newIsChecked);
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

  const tabConfig: TabConfigType = {
    foldTab: {
      id: "fold",
      isActive: isFolded,
      IconIfChecked: FaChevronUp,
      IconIfUnchecked: FaChevronDown,
      onClick: handleTabClick,
    },
    contentTabs: [
      {
        id: "add-product",
        label: "Add a product",
        isActive: selectedTab === "add-product",
        IconIfChecked: AiOutlinePlus,
        IconIfUnchecked: AiOutlinePlus,
        panelContent: "Add a product",
        onClick: handleTabClick,
      },
      {
        id: "edit-product",
        label: "Edit a product",
        isActive: selectedTab === "edit-product",
        IconIfChecked: MdModeEditOutline,
        IconIfUnchecked: MdModeEditOutline,
        panelContent: "Edit a product",
        onClick: handleTabClick,
      },
    ],
  };

  const panelContent =
    tabConfig.contentTabs
      .filter((tab) => tab.isActive)
      .map((tab) => tab.panelContent)[0] || "";

  if (isAdminMode) {
    return (
      <AdminPanelStyled>
        <TabContainer
          foldTab={tabConfig.foldTab}
          contentTabs={tabConfig.contentTabs}
        />
        <PanelContent isFolded={isFolded} content={panelContent} />
      </AdminPanelStyled>
    );
  }
  return;
}

const AdminPanelStyled = styled.div`
  position: relative;
  top: -264px;
  height: 264px;
  width: 95vw;
  max-width: 1400px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
