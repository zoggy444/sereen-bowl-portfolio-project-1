import { useParams } from "react-router";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import { theme } from "../../../theme/theme";
import Main from "./Main";
import { useState } from "react";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";

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
