import styled from "styled-components";
import Tab from "../../reusable-ui/Tab";
import PanelContent from "./PanelContent";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../theme/theme";
import { useContext } from "react";
import AdminPanelContext from "../../../context/AdminPanelContext";

export default function AdminPanel({ isVisible }: { isVisible: boolean }) {
  const { panelState, panelHandlers } = useContext(AdminPanelContext);

  if (isVisible) {
    return (
      <AdminPanelStyled>
        <div className="tab-container">
          <Tab
            id="fold"
            isChecked={!panelState.isFolded}
            IconIfChecked={FaChevronUp}
            IconIfUnchecked={FaChevronDown}
            onClick={panelHandlers.toggleFolded}
          />
          <div className="tab-radio-group">
            <Tab
              id="add-product"
              isChecked={panelState.tabCurrent === "add-product"}
              IconIfChecked={AiOutlinePlus}
              IconIfUnchecked={AiOutlinePlus}
              label="Add a product"
              onClick={panelHandlers.onTabClick}
            />
            <Tab
              id="edit-product"
              isChecked={panelState.tabCurrent === "edit-product"}
              IconIfChecked={MdModeEditOutline}
              IconIfUnchecked={MdModeEditOutline}
              label="Edit a product"
              onClick={panelHandlers.onTabClick}
            />
          </div>
        </div>
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

  .tab-container {
    height: ${theme.gridUnit * 5}px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1px;
    padding-left: ${theme.gridUnit * 8}px;

    font-size: ${theme.fonts.P0};

    .tab-radio-group {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
    }
  }
`;
