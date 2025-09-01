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

  const panelContext = {
    panelState: {
      isFolded: isPanelFolded,
      tabCurrent: tabCurrent,
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
