import styled from "styled-components";
import PanelContent from "./PanelContent";
import { useContext } from "react";
import TabContainer from "./TabContainer";
import IsAdminModeContext from "../../../../context/IsAdminModeContext";

const AdminPanel = () => {
  const { isAdminMode } = useContext(IsAdminModeContext);

  if (isAdminMode) {
    return (
      <AdminPanelStyled>
        <TabContainer />
        <PanelContent />
      </AdminPanelStyled>
    );
  }
  return;
};

export default AdminPanel;

const AdminPanelStyled = styled.div`
  position: absolute;
  bottom: calc(1vh - 1px);

  max-height: 264px;
  width: 95vw;
  max-width: 1400px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
