import styled from "styled-components";
import PanelContent from "./PanelContent";
import { useContext } from "react";
import AdminPanelContext from "../../../context/AdminPanelContext";
import TabGroup from "../../reusable-ui/TabGroup";
import type { AdminPanelProps } from "../../../types";

export default function AdminPanel({ isVisible }: AdminPanelProps) {
  const { foldTab, contentTabs } = useContext(AdminPanelContext);

  const panelContent =
    contentTabs
      .filter((tab) => tab.isChecked)
      .map((tab) => tab.panelContent)[0] || "";

  if (isVisible) {
    return (
      <AdminPanelStyled>
        <TabGroup tabs={[foldTab].concat(contentTabs)} />
        <PanelContent isFolded={foldTab.isChecked} content={panelContent} />
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
