import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { theme } from "../../../theme/theme";

export default function ToastAdmin() {
  return <ToastAdminStyled />;
}

const ToastAdminStyled = styled(ToastContainer)`
  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
    max-width: 300px;
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
