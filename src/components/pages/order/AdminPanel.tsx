import styled from "styled-components";
import PanelContent from "./PanelContent";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useContext } from "react";
import AdminPanelContext from "../../../context/AdminPanelContext";
import TabGroup from "../../reusable-ui/TabGroup";
import type { AdminPanelProps } from "../../../types";

export default function AdminPanel({ isVisible }: AdminPanelProps) {
  const { panelState, panelHandlers } = useContext(AdminPanelContext);

  const tabs = [
    {
      id: "fold",
      isChecked: !panelState.isFolded,
      IconIfChecked: FaChevronUp,
      IconIfUnchecked: FaChevronDown,
      onClick: panelHandlers.toggleFolded,
    },
    {
      id: "add-product",
      label: "Add a product",
      isChecked: panelState.tabCurrent === "add-product",
      IconIfChecked: AiOutlinePlus,
      IconIfUnchecked: AiOutlinePlus,
      onClick: panelHandlers.onTabClick,
    },
    {
      id: "edit-product",
      label: "Edit a product",
      isChecked: panelState.tabCurrent === "edit-product",
      IconIfChecked: MdModeEditOutline,
      IconIfUnchecked: MdModeEditOutline,
      onClick: panelHandlers.onTabClick,
    },
  ];

  if (isVisible) {
    return (
      <AdminPanelStyled>
        <TabGroup tabs={tabs} />
        <PanelContent
          isFolded={panelState.isFolded}
          content={panelState.panelContent}
        />
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
