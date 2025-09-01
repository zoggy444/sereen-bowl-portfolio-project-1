import styled from "styled-components";
import Tab from "../../reusable-ui/Tab";
import PanelContent from "./PanelContent";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { theme } from "../../../theme/theme";

export default function AdminPanel({
  isVisible,
  isFolded,
  tabCurrent,
  panelContent,
  toggleFolded,
  onTabClick,
}: {
  isVisible: boolean;
  isFolded: boolean;
  tabCurrent: "add-product" | "edit-product";
  panelContent: string;
  toggleFolded: () => void;
  onTabClick: (id: "add-product" | "edit-product" | undefined) => void;
}) {
  if (isVisible) {
    return (
      <AdminPanelStyled>
        <div className="tab-container">
          <Tab
            id="fold"
            isChecked={isFolded}
            IconIfChecked={FaChevronUp}
            IconIfUnchecked={FaChevronDown}
            onClick={toggleFolded}
          />
          <div className="tab-radio-group">
            <Tab
              id="add-product"
              isChecked={tabCurrent === "add-product"}
              IconIfChecked={AiOutlinePlus}
              IconIfUnchecked={AiOutlinePlus}
              label="Add a product"
              onClick={onTabClick}
            />
            <Tab
              id="edit-product"
              isChecked={tabCurrent === "edit-product"}
              IconIfChecked={MdModeEditOutline}
              IconIfUnchecked={MdModeEditOutline}
              label="Edit a product"
              onClick={onTabClick}
            />
          </div>
        </div>
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
