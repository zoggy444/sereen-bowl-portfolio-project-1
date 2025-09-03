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
import type { ContentTabIDType, FoldTabIDType, TabProps } from "../../../types";
import { dummyOnClick } from "../../../utils/props";

export default function OrderPage() {
  const [isAdminMode, setISAdminMode] = useState(false);
  const { userName } = useParams();
  const [foldTab, setFoldTab] = useState<TabProps<FoldTabIDType>>({
    id: "fold",
    isChecked: false,
    IconIfChecked: FaChevronUp,
    IconIfUnchecked: FaChevronDown,
    onClick: dummyOnClick,
  });
  const [contentTabs, setContentTabs] = useState<TabProps<ContentTabIDType>[]>([
    {
      id: "add-product",
      label: "Add a product",
      isChecked: true,
      IconIfChecked: AiOutlinePlus,
      IconIfUnchecked: AiOutlinePlus,
      panelContent: "Add a product",
      onClick: dummyOnClick,
    },
    {
      id: "edit-product",
      label: "Edit a product",
      isChecked: false,
      IconIfChecked: MdModeEditOutline,
      IconIfUnchecked: MdModeEditOutline,
      panelContent: "Edit a product",
      onClick: dummyOnClick,
    },
  ]);

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
    const newFoldTab = { ...foldTab, isChecked: !foldTab.isChecked };
    setFoldTab(newFoldTab);
  };

  const handleTabClick = (id: "add-product" | "edit-product" | "fold") => {
    if (id) {
      if (id === "fold") {
        togglePanelFolded();
      } else {
        const newTabs = contentTabs.map((tab) => {
          if (tab.id === id) return { ...tab, isChecked: true };
          return { ...tab, isChecked: false };
        });
        setContentTabs(newTabs);
      }
    }
  };

  const panelContext = {
    foldTab: { ...foldTab, onClick: handleTabClick },
    contentTabs: contentTabs.map((tab) => {
      return { ...tab, onClick: handleTabClick };
    }),
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
