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
import { FiChevronDown } from "react-icons/fi";

export default function OrderPage() {
  const [isAdminMode, setISAdminMode] = useState(false);
  const { userName } = useParams();

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
            <div className="tab">
              <FiChevronDown />
            </div>
            <div className="tab-radio-group">
              <div className="tab">
                <AiOutlinePlus />
                <span>Add a product</span>
              </div>
              <div className="tab">
                <MdModeEditOutline />
                <span>Edit a product</span>
              </div>
            </div>
          </div>
          <div className="panel-content"></div>
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
        .tab {
          height: ${theme.gridUnit * 5 - 2}px;
          border-top: 1px solid ${theme.colors.greyLight};
          border-left: 1px solid ${theme.colors.greyLight};
          border-right: 1px solid ${theme.colors.greyLight};
          border-bottom: 2px solid ${theme.colors.greyLight};
          border-top-right-radius: ${theme.borderRadius.round};
          border-top-left-radius: ${theme.borderRadius.round};
          padding-left: ${theme.gridUnit * 3}px;
          padding-right: ${theme.gridUnit * 3}px;
          background-color: ${theme.colors.white};
          display: flex;
          align-items: center;
          gap: ${theme.gridUnit}px;
          color: ${theme.colors.greySemiDark};
        }
      }

      .panel-content {
        background-color: bisque;
        flex: 1;
      }
    }
  }
`;
