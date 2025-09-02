import { useParams } from "react-router";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import { theme } from "../../../theme/theme";
import Main from "./Main";
import { useState } from "react";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";
import AdminPanel from "./AdminPanel";
import AdminPanelContext from "../../../context/AdminPanelContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import type { TabProps } from "../../../types";

const panelContentData = {
  "add-product": "Add a product",
  "edit-product": "Edit a product",
} as const;

export default function OrderPage() {
  const [isAdminMode, setISAdminMode] = useState(false);
  const { userName } = useParams();
  const [isPanelFolded, setIsPanelFolded] = useState(false);
  const [tabCurrent, setTabCurrent] = useState<"add-product" | "edit-product">(
    "add-product"
  );
  const [tabs, setTabs] = useState<TabProps[]>([]);
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
      const newTabs = tabs.map((tab) => {
        if (tab.id === "fold") return tab;
        if (tab.id === id) return { ...tab, isChecked: true };
        return { ...tab, isChecked: false };
      });
      setTabs(newTabs);
      setTabCurrent(id);
      setAdminPanelContent(panelContentData[id]);
      setIsPanelFolded(false);
    }
  };

  const panelContext = {
    panelState: {
      isFolded: isPanelFolded,
      tabCurrent: tabCurrent,
      tabs: [
        {
          id: "fold",
          isChecked: !isPanelFolded,
          IconIfChecked: FaChevronUp,
          IconIfUnchecked: FaChevronDown,
          onClick: togglePanelFolded,
        },
        {
          id: "add-product",
          label: "Add a product",
          isChecked: tabCurrent === "add-product",
          IconIfChecked: AiOutlinePlus,
          IconIfUnchecked: AiOutlinePlus,
          onClick: handleTabClick,
        },
        {
          id: "edit-product",
          label: "Edit a product",
          isChecked: tabCurrent === "edit-product",
          IconIfChecked: MdModeEditOutline,
          IconIfUnchecked: MdModeEditOutline,
          onClick: handleTabClick,
        },
      ],
      panelContent: adminPanelContent,
    },
    panelHandlers: {
      toggleFolded: togglePanelFolded,
      onTabClick: handleTabClick,
    },
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
        <AdminPanelContext.Provider value={panelContext}>
          <AdminPanel isVisible={isAdminMode} />
        </AdminPanelContext.Provider>
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
  }
`;
