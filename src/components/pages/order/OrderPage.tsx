import { useParams } from "react-router";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import { theme } from "../../../theme/theme";
import Main from "./Main";
import { useState } from "react";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import Tab from "../../reusable-ui/Tab";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import PanelContent from "./PanelContent";

const panelContentData = {
  "add-product": "Add a product",
  "edit-product": "Edit a product",
} as const;

export default function OrderPage() {
  const [isAdminMode, setISAdminMode] = useState(false);
  const { userName } = useParams();
  const [isPanelFolded, setIsPanelFolded] = useState(false);
  const [tabCurrent, setTabCurrent] = useState("add-product");
  const [adminPanelContent, setAdminPanelContent] = useState("Add a product");

  const toggleMode = () => {
    if (!isAdminMode) {
      toast.info("Admin mode activated", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setISAdminMode(!isAdminMode);
  };

  const togglePanelFolded = () => {
    setIsPanelFolded(!isPanelFolded);
  };

  const handleTabClick = (id: "add-product" | "edit-product" | undefined) => {
    if (id && id !== tabCurrent) {
      setTabCurrent(id);
      setAdminPanelContent(panelContentData[id]);
      setIsPanelFolded(false);
    }
  };

  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar
          userName={userName || "inconnu"}
          isChecked={isAdminMode}
          onToggle={toggleMode}
          labelIfChecked="Quit admin mode"
          labelIfUnchecked="Enter admin mode"
        />
        <Main />
        <div className="admin-panel">
          <div className="tab-container">
            <Tab
              id="fold"
              isChecked={isPanelFolded}
              IconIfChecked={FaChevronUp}
              IconIfUnchecked={FaChevronDown}
              onClick={togglePanelFolded}
            />
            <div className="tab-radio-group">
              <Tab
                id="add-product"
                isChecked={tabCurrent === "add-product"}
                IconIfChecked={AiOutlinePlus}
                IconIfUnchecked={AiOutlinePlus}
                label="Add a product"
                onClick={handleTabClick}
              />
              <Tab
                id="edit-product"
                isChecked={tabCurrent === "edit-product"}
                IconIfChecked={MdModeEditOutline}
                IconIfUnchecked={MdModeEditOutline}
                label="Edit a product"
                onClick={handleTabClick}
              />
            </div>
          </div>
          <PanelContent isFolded={isPanelFolded} content={adminPanelContent} />
        </div>
      </div>
      <ToastAdmin />
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    width: 95vw;
    max-width: 1400px;
    height: 98vh;

    .admin-panel {
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
    }
  }
`;
